import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: headers => {
    // template before session entity implemented
    const token = '';

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
