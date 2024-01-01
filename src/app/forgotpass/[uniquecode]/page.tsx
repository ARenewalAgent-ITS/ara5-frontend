'use client';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import { getRememberedPassword } from '@/lib/cookies';

interface TForm {
  new_password: string;
}

export default function ForgotPasswordPage({
  params,
}: {
  params: { uniquecode: string };
}) {
  const methods = useForm<TForm>({
    defaultValues: {
      new_password: getRememberedPassword() || '',
    },
  });
  const match_password = methods.watch('new_password');

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
          <form className='space-y-12'>
            <div className='space-y-3'>
              <div className='space-y-4'>
                <Input
                  id='new_password'
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
                  id='password_confirmation'
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
