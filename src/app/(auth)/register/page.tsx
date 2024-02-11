'use client';
import React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import SEO from '@/components/SEO';
import { INFO_TOAST, showToast } from '@/components/Toast';
import Typography from '@/components/Typography';

export default function RegisterPage() {
  function clicked() {
    showToast('coming soon', INFO_TOAST);
  }

  return (
    <div className='flex flex-col justify-center gap-6 px-12 lg:px-0'>
      <SEO
        title='Register'
        description='Register | ARA ITS (A Renewal Agent ITS) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
      />
      <Typography
        as={'h3'}
        variant='h3'
        font='baloo'
        weight='extrabold'
        className='hidden lg:block w-full lg:text-left'
      >
        Registrasi Lomba
      </Typography>
      <Typography
        as={'p'}
        variant='p'
        font='poppins'
        weight='medium'
        className='hidden lg:block w-full lg:text-left text-[14px]'
      >
        Mau registrasi di kompetisi apa?
      </Typography>
      <div className='flex lg:hidden flex-col lg:mx-auto'>
        <Typography
          as={'h4'}
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full text-left'
        >
          Registrasi,
        </Typography>
        <Typography
          as={'h4'}
          variant='h4'
          font='baloo'
          weight='extrabold'
          className='text-[48px] leading-[64px] block lg:hidden w-full text-left'
        >
          Lomba
        </Typography>
        <Typography
          as={'p'}
          font='poppins'
          weight='medium'
          className='flex lg:hidden w-full text-left'
        >
          Mau registrasi di kompetisi apa?
        </Typography>
      </div>
      <ButtonLink
        href='/exploit/register-tenant'
        type='submit'
        size='lg'
        variant='primary'
        className='w-full hover:bg-primary-700 drop-shadow-md py-3'
      >
        <Typography
          as={'p'}
          font='poppins'
          className='text-[14px] md:text-[16px] leading-[20px] text-whites-100'
          weight='bold'
        >
          ExploIT - Tenant
        </Typography>
      </ButtonLink>
      {/* <UnstyledLink href='/exploit/register-peserta'> */}
      <Button
        onClick={clicked}
        // disabled={true}
        // type='submit'
        size='lg'
        variant='primary'
        className='w-full hover:bg-primary-700 drop-shadow-md py-3'
      >
        <Typography
          as={'p'}
          font='poppins'
          className='text-[14px] md:text-[16px] leading-[20px] text-whites-100'
          weight='bold'
        >
          ExploIT - Peserta
        </Typography>
      </Button>
      {/* </UnstyledLink> */}
      <Button
        disabled={true}
        type='submit'
        size='lg'
        variant='primary'
        className='w-full hover:bg-primary-700 drop-shadow-md py-3'
      >
        <Typography
          as={'p'}
          font='poppins'
          className='text-[14px] md:text-[16px] leading-[20px] text-whites-100'
          weight='bold'
        >
          Capture the Flag
        </Typography>
      </Button>
      <Button
        disabled={true}
        type='submit'
        size='lg'
        variant='primary'
        className='w-full hover:bg-primary-700 drop-shadow-md py-3'
      >
        <Typography
          as={'p'}
          font='poppins'
          className='text-[14px] md:text-[16px] leading-[20px] text-whites-100'
          weight='bold'
        >
          Olimpiade IT
        </Typography>
      </Button>
      <Typography
        as={'p'}
        font='poppins'
        className='text-[14px] md:text-[14px] leading-[20px] text-whites-1100'
        weight='medium'
      >
        Do you have an account?{' '}
        <UnstyledLink href={'/login'} className='text-primary-700'>
          Login
        </UnstyledLink>
      </Typography>
    </div>
  );
}
