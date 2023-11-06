'use-client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from './card-img/Group 934.svg';

function Card() {
  return (
    <>
      {/* Desktop View */}

      <div className='hidden lg:block'>
        <div className='w-[70%]'>
          <div className='flex text-[#FFFFFF] bg-[#393737] p-[3rem] gap-[2rem] rounded-2xl'>
            <div className='flex justify-center items-center'>
              <Image className='w-[75rem]' src={Logo} alt='logo'></Image>
            </div>
            <div className='flex justify-center items-center'>
              <div className='block'>
                <div className='text-center text-5xl font-bold'>
                  Techna Vita
                </div>
                <br />
                <div className='text-justify'>
                  Techna Vita terdiri dari dua kata yaitu “Techna” yang berasal
                  dari Bahasa Yunani dan “Vita” yang berasal dari Bahasa Latin.
                  Techna dapat diartikan sebagai seni, sedangkan Vita bermakna
                  kehidupan. Ini menggambarkan bagaimana teknologi memainkan
                  peran penting dalam kehidupan kita, membawa perubahan dan
                  inovasi yang mempengaruhi berbagai aspek kehidupan sehari-hari
                  kita.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}

      <div className='lg:hidden block'>
        <div className='w-[90%]'>
          <div className='text-center block text-[#FFFFFF] bg-[#393737] p-[1.5rem] gap-[2rem] rounded-2xl'>
            <div className='text-4xl font-bold'>Techna Vita</div>
            <br />
            <div className='flex justify-center items-center'>
              <Image
                className='w-[10rem] object-center'
                src={Logo}
                alt='logo'
              ></Image>
            </div>
            <br />
            <div className='text-sm leading-6'>
              Techna Vita terdiri dari dua kata yaitu “Techna” yang berasal dari
              Bahasa Yunani dan “Vita” yang berasal dari Bahasa Latin. Techna
              dapat diartikan sebagai seni, sedangkan Vita bermakna kehidupan.
              Ini menggambarkan bagaimana teknologi memainkan peran penting
              dalam kehidupan kita, membawa perubahan dan inovasi yang
              mempengaruhi berbagai aspek kehidupan sehari-hari kita.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
