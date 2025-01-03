import { useQuery } from '@tanstack/react-query';

import { getToken } from '@/lib/cookies';
import { ApiReturn } from '@/types/api';
import { UserLogin } from '@/types/entities/login';

export const FetchUser = () => {
  const token = getToken();
  const res = useQuery<ApiReturn<UserLogin[]>>(['/auth/me'], {
    enabled: !!token,
  });
  if (!res.data) {
    return null;
  }
  return res.data;
};
