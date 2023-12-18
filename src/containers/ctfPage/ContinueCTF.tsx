'use client';
import Aos from 'aos';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const CountDownCTF = dynamic(
  () => import('@/containers/ctfPage/countdownctf'),
  { ssr: false }
);

import NextImage from '@/components/NextImage';
import ContactPersonCtf from '@/containers/ctfPage/ContactPersonCtf';
import CtfFaqSection from '@/containers/ctfPage/CtfFaqSection';
import PrizepoolSectionCtf from '@/containers/ctfPage/PrizepoolSectionCtf';

function ContinueCTF() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className='relative'>
        <NextImage
          src={'/svg/ctf/left_under.svg'}
          alt='left'
          width={505}
          height={2374}
          className='w-[30%] absolute left-0 top-0'
        />
        <NextImage
          src={'/svg/ctf/right_under.svg'}
          alt='right'
          width={538}
          height={2374}
          className='w-[30%] top-0 right-0 absolute'
        />

        <div className='bg-gradient-to-b from-[#F0F4D8] to-[#225B58] to-55%'>
          <div className='relative w-full h-auto py-6 lg:h-[100vh] flex justify-center items-center'>
            <CountDownCTF />
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#225B58] to-[#0F283A]'>
          <PrizepoolSectionCtf />
        </div>

        <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138]'>
          <div className='relative md:min-h-[80vh] h-auto py-6'>
            <CtfFaqSection />
          </div>
        </div>

        <div className='bg-[#0F2138]'>
          <ContactPersonCtf />
        </div>
      </div>
    </>
  );
}

export default ContinueCTF;
