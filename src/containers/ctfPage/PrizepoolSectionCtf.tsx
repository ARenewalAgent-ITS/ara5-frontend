import React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function PrizepoolSectionCtf() {
  return (
    <section className='relative flex items-center justify-center'>
      <div className='w-fit flex gap-2 my-12 md:my-16 md:gap-4 lg:gap-6 xl:gap-10'>
        <NextImage
          src={'/svg/olimp/right_bush.svg'}
          alt='right bush'
          width={72}
          height={97}
          className='w-[80px] h-[112px] absolute -right-3 bottom-5 sm:w-[145px] sm:h-[250px] sm:-right-7 lg:w-[238px] lg:h-[377px] lg:-right-10'
          data-aos='fade-left'
          data-aos-delay='300'
        />
        <div
          className='flex items-start gap-5'
          data-aos='zoom-in'
          data-aos-delay='400'
        >
          <NextImage
            src={'/svg/ctfpage/prizepool/trophy.svg'}
            alt='trophy'
            width={388.4}
            height={505.8}
            className='object-contain w-[150px] md:w-[240px] lg:w-[300px] xl:w-[350px] animate-floats'
          />
          <div className='flex flex-col gap-y-2 md:gap-y-6 mt-8 md:mt-12 lg:mt-16 relative'>
            <NextImage
              src={'/img/ctfpage/prizepool/plank.png'}
              alt='plank'
              width={368}
              height={53}
              className='object contain w-[140px] md:w-[368px] relative'
            />
            <Typography
              variant='h6'
              font='poppins'
              weight='bold'
              className='text-[#0F223A] text-[12px] right-[70px] md:left-32 md:top-2 absolute'
            >
              Prizepool
            </Typography>
            <Typography
              variant='h1'
              font='poppins'
              weight='bold'
              color='white'
              className='text-[24px] md:text-[56px] md:leading-[60px] leading-6 text-whites-100'
            >
              IDR 8.000.000
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
