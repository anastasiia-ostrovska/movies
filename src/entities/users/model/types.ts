import type { FailureResponse } from '@/shared/api';

export interface RegisterSuccessResponse {
  token: string;
  status: 1;
}

export interface RegisterFormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export type RegisterResponse = RegisterSuccessResponse | FailureResponse;
