'use client'
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import useCountdown from '@/hooks/useCountdown';

export default function Countdowncom() {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2023-12-25'));

  return (
    <>
    <div className='bg-primary-800'>
      <div className='w-full h-fit flex flex-col justify-center items-center'>
        <NextImage
          src={'/img/countdown/Countdown.svg'}
          alt='plank'
          width={393.6}
          height={63.2}
          className='mt-8 md:w-[393px] sm:w-[294.75px] w-[236.16px]'
        />
        <Typography
          variant='h5'
          weight='bold'
          font='poppins'
          className='mt-10 text-center justify-center text-[20px] text-whites-1100'>
          Olimpiade IT
        </Typography>
        <div className='mt-4 gap-4 flex'>
          <div className='flex flex-col bg-whites-100 rounded-xl'>
            <Typography
              font='poppins'
              weight='bold'
              className='text-whites-100 md:px-14 md:py-2 sm:px-10 sm:py-1 px-5 py-0.5 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'>
              Hari
            </Typography>
            <Typography 
              font='poppins'
              weight='bold'
              variant='h2'
              className='text-whites-1100 my-4 text-center md:text-h2 sm:text-[36px] text-[20px]'>
              {days}
            </Typography>
          </div>
          <div className='flex flex-col bg-whites-100 rounded-xl'>
            <Typography
              font='poppins'
              weight='bold'
              className='text-whites-100 md:px-14 md:py-2 sm:px-10 sm:py-1 px-5 py-0.5 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'>
              Jam
            </Typography>
            <Typography 
              font='poppins'
              weight='bold'
              variant='h2'
              className='text-whites-1100 my-4 text-center md:text-h2 sm:text-[36px] text-[20px]'>
              {hours}
            </Typography>
          </div>
          <div className='flex flex-col bg-whites-100 rounded-xl'>
            <Typography
              font='poppins'
              weight='bold'
              className='text-whites-100 md:px-14 md:py-2 sm:px-10 sm:py-1 px-5 py-0.5 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'>
              Menit
            </Typography>
            <Typography 
              font='poppins'
              weight='bold'
              variant='h2'
              className='text-whites-1100 my-4 text-center md:text-h2 sm:text-[36px] text-[20px]'>
              {minutes}
            </Typography>
          </div>
          <div className='flex flex-col bg-whites-100 rounded-xl'>
            <Typography
              font='poppins'
              weight='bold'
              className='text-whites-100 md:px-14 md:py-2 sm:px-10 sm:py-1 px-5 py-0.5 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'>
              Detik
            </Typography>
            <Typography 
              font='poppins'
              weight='bold'
              variant='h2'
              className='text-whites-1100 my-4 text-center md:text-h2 sm:text-[36px] text-[20px]'>
              {seconds}
            </Typography>
          </div>
        </div>
      </div>
      <Typography
        weight='bold'
        font='poppins'
        className='mt-10 text-center justify-center md:text-[17px] text-[13px] text-whites-100'>
        Close Registration
      </Typography>
      <Typography
        variant='h5'
        weight='bold'
        font='poppins'
        className='mt-4 pb-8 text-center justify-center text-[20px] text-whites-100'>
        25 Desember 2023
      </Typography>
    </div>

   </>
  );
}

