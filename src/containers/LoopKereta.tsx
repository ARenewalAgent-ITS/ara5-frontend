import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import Kereta from '~/images/kereta.svg';

export default function LoopKereta() {
  return (
    <div className='w-full h-fit flex flex-col'>
      {/* <Link className='mx-auto' href={'/'}>
        <Button
          variant='primary'
          size='lg'
          rightIcon={FaArrowRight}
          rightIconClassName={clsxm(
            'w-[14.4px] h-4 ml-2 group-hover:translate-x-3 group-hover:transition-all group-hover:duration-300 group-hover:delay-150'
          )}
          className={clsxm('mx-auto py-2 px-4 group')}
        >
          <Typography
            className={clsxm(' text-white-50 font-semibold text-base')}
          >
            About Us
          </Typography>
        </Button>
      </Link> */}
      <div className='mt-[.2rem] relative h-[20px] w-full flex gap-80 justify-end items-end'>
        <Marquee loop={0} speed={100} delay={4} direction='left' className=''>
          <Image src={Kereta} alt='kereta' className='h-[25px] w-[624px] ' />
          <Image
            src={Kereta}
            alt='kereta'
            className='h-[25px] w-[624px] mx-[72rem]'
          />
        </Marquee>
      </div>
    </div>
  );
}
