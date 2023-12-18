'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

function LandingOlimp() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className='relative h-full py-[155px] sm:pt-32 md:pt-48 lg:pt-64 flex flex-col gap-6 justify-center items-center text-center bg-[#D8F4EB]'>
        <NextImage
          src='/svg/olimp/olimp_title.svg'
          alt='title'
          width={345.29}
          height={96}
          className='hidden md:block'
          data-aos='fade-up'
          data-aos-delay='200'
        />
        <NextImage
          src='/svg/olimp/olimp_title.svg'
          alt='title'
          width={225}
          height={62.56}
          className='md:hidden block'
          data-aos='fade-up'
          data-aos-delay='200'
        />
        <NextImage
          src={'/svg/olimp/left.svg'}
          alt='left'
          width={500}
          height={593}
          className='w-[30%] absolute left-0 bottom-0'
          data-aos='fade-right'
          data-aos-delay='500'
        />
        <NextImage
          src={'/svg/olimp/right.svg'}
          alt='right'
          width={529}
          height={617}
          className='w-[30%] bottom-0 right-0 absolute'
          data-aos='fade-left'
          data-aos-delay='500'
        />
        <div>
          <Typography
            font='poppins'
            variant='h4'
            className='font-bold text-3xl'
            data-aos='zoom-in'
            data-aos-delay='300'
          >
            Olimpiade IT
          </Typography>
        </div>
        <Typography
          font='poppins'
          variant='h6'
          className={clsxm(
            'font-semibold w-[85%] lg:w-[60%] lg:text-[20px] relative'
          )}
          data-aos='zoom-in'
          data-aos-delay='300'
        >
          Olimpiade merupakan kompetisi yang diadakan dalam rangkaian acara ARA
          5.0. Olimpiade dalam rangkaian acara ARA 5.0 ditujukan bagi siswa
          SMA/SMK di seluruh Indonesia. Soal meliputi seputar Kurikulum
          Departemen Teknologi Informasi akan diberikan kepada peserta kompetisi
          Olimpiade.
        </Typography>
        <div className='flex gap-2 lg:gap-4'>
          <ButtonLink
            href='/olimpit/register'
            variant='success'
            rightIcon={FaArrowRight}
            rightIconClassName={clsxm('w-[14px] text-white')}
            className='px-3'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <Typography
              font='poppins'
              variant='t'
              className='font-bold text-[#FFFFFF]'
            >
              Register Now!
            </Typography>
          </ButtonLink>
          <ButtonLink
            href='https://its.id/m/GuidebookOlimARA5'
            variant='primary'
            rightIcon={FaBook}
            rightIconClassName={clsxm('w-[14px] text-white')}
            className='px-3'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <Typography
              font='poppins'
              variant='t'
              className='font-bold text-[#FFFFFF] py-2'
            >
              Download Rulebook
            </Typography>
          </ButtonLink>
        </div>
      </div>

      {/* <div className='h-[300vh] relative'>
        <NextImage
          src={'/svg/olimp/left_ground.svg'}
          alt='left'
          width={500}
          height={2431}
          className='w-[30%] absolute left-0 top-0'
        />
        <NextImage
          src={'/svg/olimp/right_ground.svg'}
          alt='right'
          width={529}
          height={2382}
          className='w-[30%] top-0 right-0 absolute'
        />
      </div> */}
    </>
  );
}

export default LandingOlimp;
