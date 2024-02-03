import { useQuery } from '@tanstack/react-query';

import { ApiReturn } from '@/types/api';
import { UserLogin } from '@/types/entities/login';

export const useDashboardUser = () => {
  const { data: res, refetch: refetchData } = useQuery<ApiReturn<UserLogin[]>>({
    queryKey: ['/auth/me'],
    staleTime: Infinity,
  });
  const userData = res?.data[0];
  const event = userData?.event;

  return {
    userData,
    event,
    refetchData,
  };
};
