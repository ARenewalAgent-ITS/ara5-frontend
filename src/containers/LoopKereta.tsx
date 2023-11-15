import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import Kereta from '~/images/kereta.svg';

export default function LoopKereta() {
  return (
    <div className='w-full h-fit flex flex-col'>
      <div className='relative bottom-[405px] h-[25px] w-full flex gap-80 justify-end items-end'>
        <Marquee loop={0} speed={200} delay={4} direction='left' className=''>
          <Image
            src={Kereta}
            alt='kereta'
            className='h-[35px] w-[824px] mx-[72rem]'
          />
        </Marquee>
      </div>
    </div>
  );
}
