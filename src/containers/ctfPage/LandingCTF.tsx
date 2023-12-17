'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

function LandingCTF() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className='relative h-full py-[155px] flex flex-col gap-6 justify-center items-center text-center bg-[#F0F4D8]'>
        <NextImage
          src='/svg/ctf/ctf_title.svg'
          alt='landing-ctf'
          width={345.29}
          height={96}
          className='hidden md:block'
          data-aos='fade-up'
          data-aos-delay='200'
        />
        <NextImage
          src='/svg/ctf/ctf_title.svg'
          alt='landing-ctf'
          width={225}
          height={62.56}
          className='md:hidden block'
          data-aos='fade-up'
          data-aos-delay='200'
        />
        <NextImage
          src={'/svg/ctf/left.svg'}
          alt='left'
          width={505}
          height={591}
          className='w-[30%] absolute left-0 bottom-0'
          data-aos='fade-right'
          data-aos-delay='500'
        />
        <NextImage
          src={'/svg/ctf/right.svg'}
          alt='right'
          width={538}
          height={625}
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
            Capture The Flag
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
          CTF atau Capture the Flag merupakan kompetisi seputar bidang Cyber
          Security yang ditujukan bagi siswa/i SMA dan mahasiswa/i aktif PTN/PTS
          se-Indonesia. Para peserta kompetisi CTF dalam rangkaian ARA 5.0
          diwajibkan untuk menemukan file tersembunyi dalam bentuk file ataupun
          string (teks) yang disebut dengan “Flag”.
        </Typography>
        <div className='flex gap-2 lg:gap-4'>
          <ButtonLink
            href='#'
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
            href='#'
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
    </>
  );
}

export default LandingCTF;
