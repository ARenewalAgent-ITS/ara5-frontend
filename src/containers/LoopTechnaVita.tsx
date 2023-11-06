'use-client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import LogoAra from '../components/layouts/nav-img/Group 934.svg';
import Typography from '@/components/Typography';

function LoopTechnaVita() {
  return (
    <>
      <div className='bg-[#393737] w-[100%]'>
        <Marquee loop={0} speed={50} delay={0} direction='right' className=''>
          <div className='flex py-2'>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div key={index} className='flex'>
                  <Image src={LogoAra} alt='logo' className='w-[1rem]'></Image>
                  <Typography className='mr-4 ml-2 flex justify-center items-center text-[#ffffff] text-xl font-semibold italic'>
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
