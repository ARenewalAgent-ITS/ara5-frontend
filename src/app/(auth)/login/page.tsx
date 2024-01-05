'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/form/Input';
import withAuth from '@/components/hoc/withAuth';
import UnstyledLink from '@/components/links/UnstyledLink';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { REG_EMAIL } from '@/constants/regex';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import {
  getRememberedEmail,
  getRememberedPassword,
  removeRememberedCredentials,
  setRememberedCredentials,
} from '@/lib/cookies';
import config from '@/seo.config';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { loginForm } from '@/types/entities/login';
import { User } from '@/types/entities/user';

export default withAuth(LoginPage, ['all']);

function LoginPage() {
  // const getLogin = getToken();
  // console.log(getLogin);

  const methods = useForm<loginForm>({
    mode: 'onTouched',
    defaultValues: {
      email: getRememberedEmail() || '',
      password: getRememberedPassword() || '',
      remember: false,
    },
  });
  const { handleSubmit } = methods;
  const router = useRouter();
  const { login } = useAuthStore();

  const { mutate: loginMutation, isLoading } = useMutationToast<
    void,
    loginForm
  >(
    useMutation(async (data) => {
      const res = await api.post('/auth/login', data);
      const { token } = res.data.data;
      setToken(token);

      const user = await api.get<ApiReturn<User>>('/auth/me');
      // console.log(user?.data?.data);

      if (user?.data?.data === undefined) {
        throw new Error('Sesi login tidak valid');
      }
      login({ ...user.data.data, token: token });

      if (data.remember) {
        setRememberedCredentials(data.email, data.password);
      } else {
        removeRememberedCredentials();
      }

      {
        user?.data?.role === 'ADMIN'
          ? router.push('/admin/olimpit')
          : router.push('/dashboard/user');
      }
    })
  );

  const onSubmit = (data: loginForm) => {
    loginMutation({
      email: data.email,
      password: data.password,
      remember: data.remember,
    });
  };
  return (
    <div className='flex flex-col justify-center gap-8 px-12 lg:px-0'>
      <SEO metadata={config} title='Login' description='login ARA 5.0' />
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
            <div className='w-full flex justify-between items-start'>
              <Checkbox
                label='Remember Me'
                name='remember'
                readOnly={false}
                hideError={true}
              />
              <UnstyledLink href='/submit-email'>
                <Typography
                  font='poppins'
                  variant='c12'
                  className='text-[12px] leading-[20.32px] text-primary-700'
                  weight='medium'
                >
                  Forgot Password
                </Typography>
              </UnstyledLink>
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
                {!isLoading ? 'Login' : 'Logging in...'}
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
