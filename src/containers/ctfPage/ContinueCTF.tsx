'use client';
import Aos from 'aos';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const CountDownCTF = dynamic(
  () => import('@/containers/ctfPage/CountDownCTFS'),
  { ssr: false }
);

import NextImage from '@/components/NextImage';
import ContactPersonCtf from '@/containers/ctfPage/ContactPersonCtf';
import CtfFaqSection from '@/containers/ctfPage/CtfFaqSection';
import PrizepoolSectionCtf from '@/containers/ctfPage/PrizepoolSectionCtf';
import TimelineCTF from '@/containers/ctfPage/TimelineCTF';

function Continuectf() {
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
          className='w-[30%] absolute right-0 top-0'
        />

        <div className='bg-gradient-to-b from-[#F0F4D8] to-[#225B58] to-55%'>
          <div className='relative w-full h-auto py-6 lg:h-[100vh] flex justify-center items-center'>
            <CountDownCTF />
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#225B58] to-[#0F283A]'>
          <PrizepoolSectionCtf />
        </div>

        <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138] md:py-0 py-10 px-6 md:px-16 lg:px-20 xl:px-28'>
          <TimelineCTF />
        </div>

        <div className='bg-[#0F2138]'>
          <div className='relative md:min-h-[80vh] h-auto sm:pt-24 lg:pt-48 pb-16'>
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

export default Continuectf;
