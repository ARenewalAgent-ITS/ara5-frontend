import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaArrowRight } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import Kereta from '~/img/landingpage/Kereta.png';

export default function LandingMiddleSection() {
  return (
    <div className='w-full h-fit flex flex-col'>
      <Link className='mx-auto' href={'/'}>
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
      </Link>
      <div className='relative h-[20px] w-full flex gap-x-10 justify-end items-end'>
        <Marquee loop={0} speed={50} delay={4} direction='left' className=''>
          <Image
            src={Kereta}
            alt='kereta'
            className='h-[20px] w-[524px] mx-64 lg:mx-0 lg:ml-96'
          />
          <Image
            src={Kereta}
            alt='kereta'
            className='h-[20px] w-[524px] mx-64 lg:mx-80 xl:mx-96 lg:hidden'
          />
        </Marquee>
      </div>
    </div>
  );
}
