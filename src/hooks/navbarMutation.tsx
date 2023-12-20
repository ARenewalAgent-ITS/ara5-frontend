import { useQuery } from '@tanstack/react-query';

import { ApiReturn } from '@/types/api';
import { UserLogin } from '@/types/entities/login';

export const FetchUser = () => {
  const res = useQuery<ApiReturn<UserLogin[]>>(['/auth/me']);
  if (!res.data?.data) return;
  return res.data;
};
