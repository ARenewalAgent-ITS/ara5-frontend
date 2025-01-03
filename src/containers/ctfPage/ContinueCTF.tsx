'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const CountDownCTF = dynamic(
  () => import('@/containers/ctfPage/CountDownCTFS'),
  { ssr: false }
);

import NextImage from '@/components/NextImage';
import ContactPersonCtf from '@/containers/ctfPage/ContactPersonCtf';
import CtfFaqSection from '@/containers/ctfPage/CtfFaqSection';
import PrizepoolSectionCtf from '@/containers/ctfPage/PrizepoolSectionCtf';
import TimelineCTF from '@/containers/ctfPage/TimelineCTF';
import WhoCanJoin from '@/containers/ctfPage/WhoCanJoin';

function Continuectf() {
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
          <div className='relative w-full h-full lg:pt-20 pt-10 pb-6 flex justify-center items-center'>
            <CountDownCTF />
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#225B58] to-[#0F283A] -mt-1 lg:pt-16'>
          <PrizepoolSectionCtf />
        </div>

        <div className='bg-gradient-to-b from-[#0f293b] to-[#10293B] -mt-3 lg:py-10'>
          <WhoCanJoin />
        </div>

        {/* <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138] -mt-2 md:pt-12 py-20 sm:py-10 px-6 md:px-16 lg:px-20 xl:px-28'> */}
        <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138] -mt-2 px-6 pt-16 pb-2 lg:px-24'>
          <TimelineCTF />
        </div>

        <div className='bg-[#0F2138] -mt-1'>
          {/* <div className='relative md:min-h-[80vh] h-auto sm:pt-24 lg:pt-28 pb-16'> */}
          <div className='relative h-full pt-12 pb-16 lg:pt-40'>
            <CtfFaqSection />
          </div>
        </div>

        <div className='bg-[#0F2138] -mt-1'>
          <ContactPersonCtf />
        </div>
      </div>
    </>
  );
}

export default Continuectf;
