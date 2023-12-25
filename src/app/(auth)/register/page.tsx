import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';

export default function RegisterPage() {
  return (
    <div className='flex flex-col justify-center gap-6 px-12 lg:px-0'>
      <Typography
        variant='h3'
        font='baloo'
        weight='extrabold'
        className='hidden lg:block w-full lg:text-left'
      >
        Registrasi Lomba
      </Typography>
      <Typography
        variant='p'
        font='poppins'
        weight='medium'
        className='hidden lg:block w-full lg:text-left text-[14px]'
      >
        Mau registrasi di kompetisi apa?
      </Typography>
      <div className='flex lg:hidden flex-col lg:mx-auto'>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full text-left'
        >
          Registrasi,
        </Typography>
        <Typography
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full text-left'
        >
          Lomba
        </Typography>
        <Typography
          font='poppins'
          weight='medium'
          className='flex lg:hidden w-full text-left'
        >
          Mau registrasi di kompetisi apa?
        </Typography>
      </div>
      <ButtonLink
        href='/ctf/register'
        type='submit'
        size='lg'
        variant='primary'
        className='w-full hover:bg-primary-700 drop-shadow-md py-3'
      >
        <Typography
          font='poppins'
          className='text-[14px] md:text-[16px] leading-[20px] text-whites-100'
          weight='bold'
        >
          Capture the Flag
        </Typography>
      </ButtonLink>
      <ButtonLink
        href='/olimpit/register'
        type='submit'
        size='lg'
        variant='primary'
        className='w-full hover:bg-primary-700 drop-shadow-md py-3'
      >
        <Typography
          font='poppins'
          className='text-[14px] md:text-[16px] leading-[20px] text-whites-100'
          weight='bold'
        >
          Olimpiade IT
        </Typography>
      </ButtonLink>
      <Typography
        font='poppins'
        className='text-[14px] md:text-[14px] leading-[20px] text-whites-1100'
        weight='medium'
      >
        Sudah punya akun?{' '}
        <UnstyledLink href={'/login'} className='text-primary-700'>
          Login
        </UnstyledLink>
      </Typography>
    </div>
  );
}
