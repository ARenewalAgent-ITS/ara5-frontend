'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import { DANGER_TOAST, showToast } from '@/components/Toast';
import api from '@/lib/api';
import { getToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { PermissionList } from '@/types/entities/permissionList';
import { User } from '@/types/entities/user';

import Loading from '../Loading';

async function getUser() {
  const res = await api.get<ApiReturn<User>>('/auth/me');
  return res.data.data;
}

type WithAuthProps = {
  user: User;
};

export default function withAuth<T>(
  Component: React.ComponentType<T>,
  permissions: PermissionList
) {
  function ComponentWithAuth(props: Omit<T, keyof WithAuthProps>) {
    const router = useRouter();

    const { user, isAuthed, isLoading, login, logout, stopLoading } =
      useAuthStore();

    const checkAuth = React.useCallback(async () => {
      const token = getToken();
      if (!token) {
        isAuthed && logout();
        stopLoading();
        return;
      }

      if (isAuthed) {
        stopLoading();
        return;
      }

      try {
        const newUser = await getUser();
        login({ ...newUser, token });
      } catch {
        logout();
      } finally {
        stopLoading();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthed]);

    React.useEffect(() => {
      if (window.sessionStorage.getItem('redirected')) {
        window.sessionStorage.removeItem('redirected');
        return;
      }

      if (
        isLoading ||
        permissions.includes('all') ||
        (permissions.includes('authed') && isAuthed)
      ) {
        return;
      }

      if (
        !isAuthed ||
        (user &&
          user.permission &&
          !permissions.every((p) => user.permission.includes(p)))
      ) {
        router.replace('/login');
        showToast('Anda tidak memiliki akses ke halaman ini', DANGER_TOAST);
        window.sessionStorage.setItem('redirected', 'true');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthed, isLoading]);

    React.useEffect(() => {
      checkAuth();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <Loading />;
    return <Component {...(props as T)} user={user} />;
  }

  return ComponentWithAuth;
}
