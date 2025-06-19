import { baseAPI, METHODS, ENDPOINTS } from '@/shared/api';
import type { RegisterFormData, RegisterSuccessResponse } from '../model/types';

const usersApi = baseAPI.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<RegisterSuccessResponse, RegisterFormData>({
      query: registerData => ({
        method: METHODS.POST,
        url: ENDPOINTS.REGISTER,
        body: registerData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = usersApi;
