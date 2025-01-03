'use client';
import Aos from 'aos';
import * as React from 'react';
import { useEffect } from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import useCountdown from '@/hooks/useCountdown';

export default function CountDownCTFS() {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2024-01-20'));

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className='bg-transparent'>
        <div className='w-full h-fit flex flex-col justify-center items-center'>
          <NextImage
            src={'/svg/ctf/countdown.png'}
            alt='plank'
            width={393.6}
            height={63.2}
            className='mt-8 lg:w-[393px] md:w-[360px] sm:w-[294.75px] w-[236.16px]'
            data-aos='zoom-in'
            data-aos-delay='200'
          />
          <div data-aos='fade-up' data-aos-delay='300'>
            <Typography
              variant='h5'
              weight='bold'
              font='poppins'
              className='mt-10 text-center justify-center text-[20px] text-whites-1100'
            >
              Capture The Flag
            </Typography>
            <div className='mt-4 gap-4 flex'>
              <div className='flex flex-col bg-whites-100 rounded-xl'>
                <Typography
                  font='poppins'
                  weight='bold'
                  className='text-whites-100 lg:px-14 lg:py-2 md:px-10 md:py-[2px] sm:px-8 sm:py-1 px-5 py-1 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'
                >
                  Hari
                </Typography>
                <Typography
                  font='poppins'
                  weight='bold'
                  variant='h2'
                  className='text-whites-1100 my-4 text-center lg:text-[68px] md:text-[50px] sm:text-[36px] text-[25px]'
                >
                  {days}
                </Typography>
              </div>
              <div className='flex flex-col bg-whites-100 rounded-xl'>
                <Typography
                  font='poppins'
                  weight='bold'
                  className='text-whites-100 lg:px-14 lg:py-2 md:px-10 md:py-[2px] sm:px-8 sm:py-1 px-5 py-1 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'
                >
                  Jam
                </Typography>
                <Typography
                  font='poppins'
                  weight='bold'
                  variant='h2'
                  className='text-whites-1100 my-4 text-center lg:text-[68px] md:text-[50px] sm:text-[36px] text-[25px]'
                >
                  {hours}
                </Typography>
              </div>
              <div className='flex flex-col bg-whites-100 rounded-xl'>
                <Typography
                  font='poppins'
                  weight='bold'
                  className='text-whites-100 lg:px-14 lg:py-2 md:px-10 md:py-[2px] sm:px-8 sm:py-1 px-5 py-1 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'
                >
                  Menit
                </Typography>
                <Typography
                  font='poppins'
                  weight='bold'
                  variant='h2'
                  className='text-whites-1100 my-4 text-center lg:text-[68px] md:text-[50px] sm:text-[36px] text-[25px]'
                >
                  {minutes}
                </Typography>
              </div>
              <div className='flex flex-col bg-whites-100 rounded-xl'>
                <Typography
                  font='poppins'
                  weight='bold'
                  className='text-whites-100 lg:px-14 lg:py-2 md:px-10 md:py-[2px] sm:px-8 sm:py-1 px-5 py-1 md:text-[15px] sm:text-[13px] text-[10px] bg-danger-700 rounded-t-xl'
                >
                  Detik
                </Typography>
                <Typography
                  font='poppins'
                  weight='bold'
                  variant='h2'
                  className='text-whites-1100 my-4 text-center lg:text-[68px] md:text-[50px] sm:text-[38px] text-[25px]'
                >
                  {seconds}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='400'>
          <Typography
            weight='bold'
            font='poppins'
            className='mt-10 text-center justify-center md:text-[17px] text-[13px] text-whites-100'
          >
            Close Registration
          </Typography>
          <Typography
            variant='h5'
            weight='bold'
            font='poppins'
            className='mt-4 pb-8 text-center justify-center text-[20px] text-whites-100'
          >
            20 Januari 2024
          </Typography>
        </div>

        <NextImage
          src={'/svg/olimp/left_bush.svg'}
          alt='left'
          width={103}
          height={175}
          className='w-[103px] h-[175px] absolute -left-4 bottom-0 sm:w-[145px] sm:h-[250px] sm:-left-5 lg:w-[238px] lg:h-[377px] lg:-left-7'
          data-aos='fade-right'
          data-aos-delay='400'
        />
      </div>
    </>
  );
}
