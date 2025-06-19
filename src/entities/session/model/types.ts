// Session response
import type { FailureResponse } from '@/shared/api';

interface SessionSuccessResponse {
  token: string;
  status: 1;
}

export type SessionResponse = SessionSuccessResponse | FailureResponse;

// Login data
export interface LoginData {
  email: string;
  password: string;
}
