import Image from 'next/image';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';

export default function OrderMerchandiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen bg-whites-100'>
      <SEO
        title='Order Merchandise'
        description='ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2022-2023 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
      />
      <section className='fixed hidden lg:block lg:w-[60%] xl:w-[56%] right-0 top-0 h-full'>
        <div className='relative z-0 w-full h-full bg-white'>
          <Image
            src={'/img/auth/background.png'}
            alt='login background'
            width={1768}
            height={1404}
            className='absolute top-0 z-10 w-full'
          />
          <div className='absolute bottom-10 right-10 z-30 w-80 h-24 bg-primary-900 drop-shadow-lg rounded-xl'>
            <div className='relative flex flex-col px-5 py-3'>
              <Typography
                variant='t'
                font='baloo'
                weight='bold'
                className='mb-1 text-[#FFF1E3]'
              >
                Contact Person
              </Typography>
              <Typography
                variant='c14'
                font='baloo'
                weight='bold'
                className='text-[#FFF1E3] mb-[-4px]'
              >
                Zulfa (089688276157/hafizhkusuma88)
              </Typography>
              <Typography
                variant='c14'
                font='baloo'
                weight='bold'
                className='text-[#FFF1E3]'
              >
                Alma (082123626051/almaamiradewani)
              </Typography>
            </div>
          </div>
          <div className='absolute bottom-[34px] right-[34px] z-20 w-80 h-24 bg-black-400 opacity-[0.25] rounded-xl'></div>
        </div>
      </section>
      <main className='md:px-16 lg:px-5 xl:px-8 2xl:px-10 px-4 py-6 lg:w-[40%] xl:w-[44%] min-h-screen flex flex-col justify-center'>
        <div className='px-6 py-6 w-full flex flex-row items-center justify-between'>
          <UnstyledLink href='/merch'>
            <NextImage
              src={'/svg/auth/logo.svg'}
              alt='logo ARA'
              width={71}
              height={33}
              className='sm:w-[80px] md:w-[90px] lg:w-[107px]'
            />
          </UnstyledLink>
        </div>
        {children}
      </main>
    </div>
  );
}
