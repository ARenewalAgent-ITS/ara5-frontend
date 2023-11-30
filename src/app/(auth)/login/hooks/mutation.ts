import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { TLoginRequest } from '@/types/entities/login';

export const useLoginMutation = () => {
  const { login } = useAuthStore();
  const router = useRouter();
  const result = useMutationToast<void, TLoginRequest>(
    useMutation(async (data) => {
      const res = await api.post('/auth/login', data);

      if (!res.data.data) {
        throw new Error('Sesi login tidak valid');
      }
      const token = res.data.data.token;
      setToken(token);

      login({ ...res.data.data, token: token });
      router.back();
    }),
  );
  return {
    ...result,
  };
};
