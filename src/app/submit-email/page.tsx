'use client';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import { REG_EMAIL } from '@/constants/regex';
import api from '@/lib/api';
import { getRememberedEmail } from '@/lib/cookies';
import { ApiError, CustomAxiosError } from '@/types/api';
import { TForgotPassword } from '@/types/entities/forgotPassword';

export default function ForgotPasswordPage() {
  const toastId = React.useRef<string | null>(null);

  const methods = useForm<TForgotPassword>({
    defaultValues: {
      email: getRememberedEmail() || '',
    },
  });

  const postForgotPassword = async (data: TForgotPassword) => {
    try {
      await api.post('/auth/forgot-password', data);
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

  const { mutate: forgotPassword, isLoading } = useMutation(
    postForgotPassword,
    {
      onSuccess: () => {
        showToast(
          'Check your email for the next steps in resetting your password.',
          SUCCESS_TOAST
        );
      },
      onError: (error: CustomAxiosError) => {
        if (error.response) {
          showToast(error.response.data.message, DANGER_TOAST);
        } else {
          showToast('An unknown error occurred', DANGER_TOAST);
        }
      },
    }
  );

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

  const emailOnSubmit = (data: TForgotPassword) => {
    forgotPassword(data);
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
            Lupa Password
          </Typography>
          <Typography
            variant='p'
            font='poppins'
            weight='medium'
            className='text-[#7C7C7C]'
          >
            Masukkan email kamu yang terdaftar sebagai peserta agar kami dapat
            mengirimkan kamu link reset password.
          </Typography>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(emailOnSubmit)}
            className='space-y-12'
          >
            <div className='space-y-3'>
              <div className='space-y-4'>
                <Input
                  id='email'
                  label='Email'
                  placeholder='Masukkan email'
                  validation={{
                    required: 'Field must be filled',
                    pattern: {
                      value: REG_EMAIL,
                      message: 'Email tidak valid',
                    },
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
                  Next
                </Typography>
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
