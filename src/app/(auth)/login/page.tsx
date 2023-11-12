'use client';

import Link from 'next/link';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';

type TLoginRequest = {
  username: string;
  password: string;
  remember: boolean;
};

export default function Login() {
  const methods = useForm<TLoginRequest>();

  const onSubmit = (data: TLoginRequest) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
        <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-12'>
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
            <div className='space-x-2 flex items-center'>
              <input type='checkbox' className='appearance-none' />
              <Typography
                weight='medium'
                variant='c12'
                font='poppins'
                className='text-[12px] leading-[24px]'
              >
                Remember Me
              </Typography>
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
                Login
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
