import { ApiResponse } from '@/types/api';

export type LoginResponse = ApiResponse<{
  username: string;
  password: string;
  remember: boolean;
  token: string;
  role: string;
}>;

export type TLoginRequest = {
  email: string;
  password: string;
  remember: boolean;
};
