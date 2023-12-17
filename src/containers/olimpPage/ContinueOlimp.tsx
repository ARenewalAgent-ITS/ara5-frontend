import dynamic from 'next/dynamic';
import React from 'react';

const CountDownOlimp = dynamic(
  () => import('@/containers/olimpPage/countdownolim'),
  { ssr: false }
);

import NextImage from '@/components/NextImage';
import ContactPersonOlimp from '@/containers/olimpPage/ContactPersonOlimp';
import OlimpFaqSection from '@/containers/olimpPage/OlimpFaqSection';
import PrizepoolSectionOlimp from '@/containers/olimpPage/PrizepoolSectionOlimp';

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
          className='w-[30%] top-0 right-0 absolute'
        />
        <div className='bg-gradient-to-b from-[#D8F4EB] to-[#225B58] to-55%'>
          <div className='relative w-full h-auto py-6 lg:h-[100vh] flex justify-center items-center'>
            <CountDownOlimp />
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#225B58] to-[#0F283A]'>
          <PrizepoolSectionOlimp />
        </div>

        <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138]'>
          <div className='relative md:min-h-[80vh] h-auto py-6'>
            <OlimpFaqSection />
          </div>
        </div>

        <div className='bg-[#0F2138]'>
          <ContactPersonOlimp />
        </div>
      </div>
    </>
  );
}

export default ContinueOlimp;
