import { useQuery } from '@tanstack/react-query';

import { ApiReturn } from '@/types/api';
import { User } from '@/types/entities/user';

export const FetchUser = () => {
  const res = useQuery<ApiReturn<User>>(['/auth/me']);
  if (!res.data?.data) return;
  return res.data?.data;
};
