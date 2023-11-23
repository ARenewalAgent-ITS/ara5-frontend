'use client';

import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { TLoginRequest } from '@/types/entities/login';
import { User } from '@/types/entities/user';

export default function Login() {
  const methods = useForm<TLoginRequest>();
  const { handleSubmit } = methods;
  const router = useRouter();
  const login = useAuthStore.useLogin();

  const { mutate: loginMutate, isLoading } = useMutationToast<
    void,
    TLoginRequest
  >(
    useMutation(async (data) => {
      const res = await api.post('/routee', data);
      const { accessToken } = res.data.data;
      setToken(accessToken);

      const user = await api.get<ApiReturn<User>>('/routeee');

      if (!user.data.data) {
        throw new Error('Sesi login tidak valid');
      }
      login({ ...user.data.data, accessToken: accessToken });
      router.push('/admin/dashboard');
    })
  );

  const onSubmit = (data: TLoginRequest) => {
    loginMutate({
      username: data?.username,
      password: data?.password,
      remember: data?.remember,
    });
  };

  return (
    <div className='flex flex-col justify-center gap-8 px-12 lg:px-0'>
      <Typography
        variant='h3'
        font='baloo'
        weight='extrabold'
        className='hidden lg:block w-full lg:text-left'
      >
        Welcome, Agents!
      </Typography>
      <div className='flex lg:hidden flex-col sm:mx-auto'>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full lg:text-left'
        >
          Welcome,
        </Typography>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full lg:text-left'
        >
          Agents!
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-12'>
          <div className='space-y-3'>
            <div className='space-y-4'>
              <Input
                id='username'
                label='Username'
                placeholder='Enter your username'
                validation={{
                  required: 'Username cannot be empty',
                }}
              />
              <Input
                id='password'
                label='Password'
                placeholder='Enter your password'
                type='password'
                validation={{
                  required: 'Password cannot be empty',
                }}
              />
            </div>
            <Checkbox
              label='Remember Me'
              name='remember'
              readOnly={false}
              hideError={true}
            />
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
                {!isLoading ? 'Login' : 'Loading...'}
              </Typography>
            </Button>
            <Typography
              font='poppins'
              variant='c14'
              className='text-[11.86px] leading-[20.32px] text-whites-1100'
              weight='medium'
            >
              Don’t have an account?{' '}
              <Link href={'/register'} className='text-primary-700'>
                Register
              </Link>
            </Typography>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
