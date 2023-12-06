'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/form/Input';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { REG_EMAIL } from '@/constants/regex';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import { loginForm } from '@/types/entities/login';

export default function LoginPage() {
  const methods = useForm<loginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  const router = useRouter();
  const loginUser = async ({ email, password }: loginForm) => {
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });
      // const datas = res.data;
      const token = res.data.data.token;
      // console.log(datas);
      // console.log(token);

      setToken(token);
    } catch (error) {
      throw new Error('Terjadi kesalahan dalam login');
    }
  };

  const { mutate: loginMutation, isLoading } = useMutationToast<
    void,
    loginForm
  >(
    useMutation(loginUser, {
      onSuccess: () => {
        router.push('/');
      },
    })
  );
  const onSubmit = (data: loginForm) => {
    loginMutation(data);
    // console.log(data);
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
                id='email'
                label='Email'
                placeholder='Enter your email'
                validation={{
                  required: 'Field must be filled',
                  pattern: {
                    value: REG_EMAIL,
                    message: 'Email tidak valid',
                  },
                }}
              />
              <Input
                id='password'
                label='Password'
                placeholder='Enter your password'
                type='password'
                validation={{
                  required: 'Field must be filled',
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
              <UnstyledLink href={'/register'} className='text-primary-700'>
                Register
              </UnstyledLink>
            </Typography>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
