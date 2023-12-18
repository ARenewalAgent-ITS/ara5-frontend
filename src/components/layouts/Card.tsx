'use-client';
import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

import Logo from './card-img/Group 934.svg';

function Card() {
  return (
    <>
      {/* Desktop View */}

      <div className='hidden lg:block'>
        {/* <div className='w-full bg-black'> */}
        <div className='flex text-[#FFFFFF] bg-[#393737] p-[3rem] gap-[2rem] rounded-2xl'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[75rem] md:w-[78rem]'
              src={Logo}
              alt='logo'
            ></Image>
          </div>
          <div className='flex justify-center items-center'>
            <div className='block'>
              <Typography
                variant='h3'
                weight='bold'
                className='text-center text-whites-100 text-[24px] leading-[32px]'
              >
                Techna Vita
              </Typography>
              <br />
              <Typography
                variant='p'
                className='text-justify text-whites-100 text-[12px] leading-[24px]'
              >
                Techna Vita terdiri dari dua kata yaitu “Techna” yang berasal
                dari Bahasa Yunani dan “Vita” yang berasal dari Bahasa Latin.
                Techna dapat diartikan sebagai seni, sedangkan Vita bermakna
                kehidupan. Ini menggambarkan bagaimana teknologi memainkan peran
                penting dalam kehidupan kita, membawa perubahan dan inovasi yang
                mempengaruhi berbagai aspek kehidupan sehari-hari kita.
              </Typography>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* Mobile View */}

      <div className='lg:hidden block'>
        <div className='w-full'>
          <div className='text-center block text-[#FFFFFF] bg-[#393737] py-[1.5rem] px-[2rem] gap-[2rem] rounded-2xl'>
            <Typography
              variant='h3'
              weight='bold'
              className='text-center text-whites-100 text-[24px] leading-[32px]'
            >
              Techna Vita
            </Typography>
            <br />
            <div className='flex justify-center items-center'>
              <Image
                className='w-[7rem] object-center'
                src={Logo}
                alt='logo'
              ></Image>
            </div>
            <br />
            <Typography
              variant='p'
              weight='medium'
              className=' text-whites-10 text-[12px] leading-[20px] md:leading-[24px]'
            >
              Techna Vita terdiri dari dua kata yaitu “Techna” yang berasal dari
              Bahasa Yunani dan “Vita” yang berasal dari Bahasa Latin. Techna
              dapat diartikan sebagai seni, sedangkan Vita bermakna kehidupan.
              Ini menggambarkan bagaimana teknologi memainkan peran penting
              dalam kehidupan kita, membawa perubahan dan inovasi yang
              mempengaruhi berbagai aspek kehidupan sehari-hari kita.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
