import { baseAPI, METHODS, ENDPOINTS } from '@/shared/api';
import type { LoginData, SessionResponse } from '../model/types';

const sessionAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<SessionResponse, LoginData>({
      query: logInData => ({
        method: METHODS.POST,
        url: ENDPOINTS.SESSIONS,
        body: logInData,
      }),
    }),
  }),
});

export const { useLoginMutation } = sessionAPI;
