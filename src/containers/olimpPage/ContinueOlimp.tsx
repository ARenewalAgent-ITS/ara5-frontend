import dynamic from 'next/dynamic';
import React from 'react';

import TimelineOlimp from '@/containers/olimpPage/TimelineOlimp';

const CountDownOlimp = dynamic(
  () => import('@/containers/olimpPage/CountDownOlimp'),
  { ssr: false }
);

import NextImage from '@/components/NextImage';
import ContactPersonOlimp from '@/containers/olimpPage/ContactPersonOlimp';
import OlimpFaqSection from '@/containers/olimpPage/OlimpFaqSection';
import PrizepoolSectionOlimp from '@/containers/olimpPage/PrizepoolSectionOlimp';
import WhoCanJoin from '@/containers/olimpPage/WhoCanJoin';

function ContinueOlimp() {
  return (
    <>
      <div className='relative'>
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
          className='w-[30%] absolute right-0 top-0'
        />
        <div className='bg-gradient-to-b from-[#D8F4EB] to-[#225B58] to-55%'>
          <div className='relative w-full h-full lg:pt-20 pt-10 pb-6 flex justify-center items-center'>
            <CountDownOlimp />
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#225B58] to-[#0F283A] -mt-1 lg:pt-16'>
          <PrizepoolSectionOlimp />
        </div>

        <div className='bg-gradient-to-b from-[#0f293b] to-[#10293B] -mt-3 lg:py-10'>
          <WhoCanJoin />
        </div>

        {/* <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138] -mt-2 md:pt-24 py-20 sm:py-10 px-6 md:px-16 lg:px-20 xl:px-28'> */}
        <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138] -mt-2 px-6 pt-16 pb-2 lg:px-24'>
          <TimelineOlimp />
        </div>

        <div className='bg-[#0F2138] -mt-1'>
          {/* <div className='relative h-full sm:pt-24 lg:pt-36 pb-16'> */}
          <div className='relative h-full pt-12 pb-16 lg:pt-40'>
            <OlimpFaqSection />
          </div>
        </div>

        <div className='bg-[#0F2138] -mt-1'>
          <ContactPersonOlimp />
        </div>
      </div>
    </>
  );
}

export default ContinueOlimp;
