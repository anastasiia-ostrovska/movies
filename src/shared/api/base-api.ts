import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/app/store';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).session;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const tagTypes: string[] = [];

export const baseAPI = createApi({
  baseQuery: baseQuery,
  tagTypes,
  endpoints: () => ({}),
});
