'use client';
import Typography from '@/components/Typography';
import Input from '@/components/form/Input';
import Button from '@/components/buttons/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { getRememberedEmail } from '@/lib/cookies';

import { REG_EMAIL } from '@/constants/regex';

interface TOrderForm {
  email: string;
}

export default function ForgotPasswordPage() {
  const methods = useForm<TOrderForm>({
    defaultValues: {
      email: getRememberedEmail() || '',
    },
  });

  return (
    <div className='flex flex-col justify-center gap-6 px-12 lg:px-0'>
      <Typography
        variant='h3'
        font='baloo'
        weight='extrabold'
        className='hidden lg:block w-full lg:text-left'
      >
        Forgot Password
      </Typography>
      <div className='flex lg:hidden flex-col sm:mx-auto'>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full lg:text-left'
        >
          Forgot
        </Typography>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full lg:text-left'
        >
          Password
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form className='space-y-12'>
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
                Send Code
              </Typography>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
