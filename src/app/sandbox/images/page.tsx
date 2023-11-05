'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';

import NextImage from '@/components/NextImage';

export default function Page() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <NextImage
        src={'/images/kereta.svg'}
        width={300}
        height={30}
        // className='bisa ditambahkan penyesuaian dalam implementasinya'
        alt='background 404'
        data-aos='zoom-in'
        data-aos-delay='400'
      />
    </>
  );
}
