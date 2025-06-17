import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RootState } from '@/app/store';
import type { FailureResponse } from '@/shared/api/types';
import { removeAccessToken } from '@/entities/session';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).session;

    if (token) {
      headers.set('authorization', token);
    }

    return headers;
  },
});

const baseQueryWithUnauthorized: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  const { data, error } = result;

  const isFailure = !!data && (data as FailureResponse).status === 0;
  const isTokenMissing = (data as FailureResponse)?.error?.fields?.token === 'REQUIRED';
  const unauthorizedByStatus = (error as FetchBaseQueryError)?.status === 401;

  if ((isFailure && unauthorizedByStatus) || isTokenMissing) {
    api.dispatch(removeAccessToken());
  }

  return result;
};

const tagTypes: string[] = [];

export const baseAPI = createApi({
  baseQuery: baseQueryWithUnauthorized,
  tagTypes,
  endpoints: () => ({}),
});
