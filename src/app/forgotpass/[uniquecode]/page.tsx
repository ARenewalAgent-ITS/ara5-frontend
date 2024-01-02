'use client';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { getRememberedPassword } from '@/lib/cookies';
import { ApiError, CustomAxiosError } from '@/types/api';
import { TResetPassword } from '@/types/entities/forgotPassword';

export default function ForgotPasswordPage({
  params,
}: {
  params: { uniquecode: string };
}) {
  const toastId = React.useRef<string | null>(null);
  const route = useRouter();

  const methods = useForm<TResetPassword>({
    defaultValues: {
      password: getRememberedPassword() || '',
    },
  });
  const match_password = methods.watch('password');

  const postResetPassword = async (data: TResetPassword) => {
    try {
      await api.post(`/auth/reset-password`, data, {
        params: { token: params.uniquecode },
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ApiError>;
        if (serverError && serverError.response) {
          throw new Error(serverError.response.data.message);
        }
      }
      throw error;
    }
  };

  const { mutate: ResetPassword, isLoading } = useMutation(postResetPassword, {
    onSuccess: () => {
      showToast('Your password has been updated successfully.', SUCCESS_TOAST);
      route.push('/login');
    },
    onError: (error: CustomAxiosError) => {
      if (error.response) {
        showToast(error.response.data.message, DANGER_TOAST);
      } else {
        showToast('An unknown error occurred', DANGER_TOAST);
      }
    },
  });

  React.useEffect(() => {
    if (isLoading) {
      toastId.current = toast.loading('Loading...');
    } else {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    }
  }, [isLoading]);

  const resetPasswordOnSubmit = (data: TResetPassword) => {
    ResetPassword(data);
  };

  return (
    <div className='lg:px-4 xl:px-12 2xl:px-14'>
      <div className='flex flex-col justify-center gap-8 lg:gap-14 px-12 py-7 lg:px-0'>
        <div className='flex flex-col sm:flex-row sm:gap-3 sm:mx-auto lg:flex-col lg:mx-0'>
          <Typography
            variant='h3'
            font='baloo'
            weight='extrabold'
            className='text-[48px] leading-[64px] w-full lg:text-left'
          >
            Masukkan Password Baru
          </Typography>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(resetPasswordOnSubmit)}
            className='space-y-12'
          >
            <div className='space-y-3'>
              <div className='space-y-4'>
                <Input
                  id='password'
                  label='Password Baru'
                  placeholder='Masukkan password baru'
                  type='password'
                  helperText='Minimal 8 karakter alfanumerik dengan satu huruf kapital (uppercase)'
                  validation={{
                    required: 'Password cannot be empty',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])[A-Za-z0-9]+$/,
                      message:
                        'Password must contain at least one uppercase letter and be alphanumeric',
                    },
                  }}
                />
                <Input
                  id='confirmPassword'
                  label='Konfirmasi Password Baru'
                  placeholder='Konfirmasi password baru'
                  type='password'
                  validation={{
                    required: 'Konfirmasi Password cannot be empty',
                    validate: (value) =>
                      value === match_password || 'Password tidak cocok',
                  }}
                />
              </div>
            </div>
            <div className='space-y-3 flex flex-col w-full items-center lg:items-start'>
              <Button
                type='submit'
                size='lg'
                variant='success'
                className='w-full drop-shadow-md py-[6px] md:py-3'
              >
                <Typography
                  font='poppins'
                  variant='bt'
                  className='text-[11.86px] leading-[20.32px] text-whites-100'
                  weight='bold'
                >
                  Save Password
                </Typography>
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
