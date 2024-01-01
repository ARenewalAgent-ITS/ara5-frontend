'use client';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import { REG_EMAIL } from '@/constants/regex';
import { getRememberedEmail } from '@/lib/cookies';

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
          <form className='space-y-12'>
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
