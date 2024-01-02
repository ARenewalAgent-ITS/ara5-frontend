import React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function WhoCanJoin() {
  return (
    <section className='relative flex overflow-hidden items-center justify-center'>
      <div
        data-aos='zoom-in'
        data-aos-delay='300'
        className='flex flex-col items-center w-full px-10 gap-2 my-12 md:my-16 md:gap-4 lg:gap-6 xl:gap-10 md:px-16'
      >
        <NextImage
          src={'/svg/olimp/join_olimp.svg'}
          alt='plank'
          width={368}
          height={53}
        />
        <NextImage
          src={'/svg/olimp/arlo.svg'}
          alt='plank'
          width={250}
          height={250}
          className='w-[125px] h-[125px] md:w-[220px] md:h-[220px] my-6 md:my-4'
        />
        <Typography
          variant='p'
          weight='regular'
          font='poppins'
          color='white'
          className='max-w-3xl text-center'
        >
          Olimpiade IT dalam rangkaian acara ARA 5.0 terbuka untuk seluruh siswa
          SMA/SMK di Indonesia. Peserta yang dapat bergabung dalam kompetisi ini
          merupakan siswa tingkat SMA/SMK sederajat yang dibuktikan dengan Kartu
          Pelajar dan identitas yang sah.
        </Typography>
      </div>

      <div data-aos='fade-right' data-aos-delay='200'>
        <NextImage
          src={'/svg/olimp/left_bush2.svg'}
          alt='plank'
          width={250}
          height={250}
          className='w-[250px] h-[250px] sm:absolute sm:-left-16 hidden sm:inline-block lg:w-[238px] lg:h-[377px] lg:-left-[52px]'
        />
      </div>
    </section>
  );
}
