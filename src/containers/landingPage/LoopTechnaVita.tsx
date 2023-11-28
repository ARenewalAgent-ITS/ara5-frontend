'use-client';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import Typography from '@/components/Typography';

import LogoAra from '../../components/layouts/nav-img/Group 934.svg';

function LoopTechnaVita() {
  return (
    <>
      <div className='bg-[#393737] w-full bottom-0 absolute mt-20'>
        <Marquee loop={0} speed={50} delay={0} direction='right' className=''>
          <div className='flex py-5'>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div key={index} className='flex'>
                  <Image src={LogoAra} alt='logo' className='w-[1rem]'></Image>
                  <Typography className='mr-4 ml-2 flex justify-center font-poppins items-center text-[#ffffff] text-2xl font-semibold italic'>
                    ARA 5.0 - Techna Vita
                  </Typography>
                </div>
              ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default LoopTechnaVita;
