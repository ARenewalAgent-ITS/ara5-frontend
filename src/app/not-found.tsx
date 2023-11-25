import React from 'react';

import Navbar from '@/components/layouts/Navbar';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import Footer from '@/components/layouts/Footer';
import { MdHome } from "react-icons/md";
import ButtonLink from '@/components/links/ButtonLink';
import clsxm from '@/lib/clsxm';

export default function NotFound() {
  return (
    <>
      <div>
        <div className='fixed w-full z-10'>
          <Navbar className='bg-transparant' />
        </div>
        <section className='overflow-hidden text-start relative h-full w-full bg-gradient-to-b from-[#A0EDFF] to-white-50'>
        <div className='relative w-full flex lg:mt-12 md:mt-8 sm:mt-6 mt-4'>
              <NextImage
                src={'/images/404/awan_kiri_besar.svg'}
                alt='background'
                width={238.7}
                height={108.9}
                className='absolute lg:w-[280px] lg:-left-4 lg:top-48 md:w-[230px] sm:w-[200px] top-24 w-[165px]'
              />
              <NextImage
                src={'/images/404/awan_kiri_kecil.svg'}
                alt='background'
                width={109.54}
                height={37.55}
                className='absolute lg:left-36 lg:top-[23rem] md:w-[160px] sm:inline-block sm:w-[140px] top-[21rem] -left-5 w-[100px]'
              />
              <NextImage
                src={'/images/404/daun_kiri.svg'}
                alt='background'
                width={42.25}
                height={75}
                className='absolute hidden lg:inline-block top-[32rem] left-24'
              />
              <NextImage
                src={'/images/404/awan_kanan_besar.svg'}
                alt='background'
                width={266.93}
                height={83.97}
                className='absolute lg:w-[320px] lg:top-56 lg:-right-32 md:w-[225px] sm:w-[195px] top-36 -right-2 w-[160px]'
              />
              <NextImage
                src={'/images/404/awan_kanan_kecil.svg'}
                alt='background'
                width={124.5}
                height={57.47}
                className='absolute lg:right-32 lg:top-[24rem] sm:w-[135px] sm:top-[27rem] top-[26rem] -right-6 w-[100px]'
              />
              <NextImage
                src={'/images/404/daun_kanan.svg'}
                alt='background'
                width={36.25}
                height={64.75}
                className='absolute hidden lg:inline-block top-[30rem] right-14'
              />
              <NextImage
                src={'/images/404/daun1.svg'}
                alt='background'
                width={27}
                height={23}
                className='absolute lg:hidden inline-block md:left-24 md:top-[28rem] sm:left-20 top-[30rem] left-8 w-[30px]'
              />
              <NextImage
                src={'/images/404/daun2.svg'}
                alt='background'
                width={26}
                height={28}
                className='absolute lg:hidden inline-block md:left-36 md:top-[34rem] sm:left-32 top-[36rem] left-20 w-[30px]'
              />
              <NextImage
                src={'/images/404/daun3.svg'}
                alt='background'
                width={24}
                height={21}
                className='absolute lg:hidden inline-block md:right-28 sm:right-20 top-[34rem] right-16 w-[30px]'/>
            </div>
        <div className='w-full justify-center xl:mt-20 lg:mt-28 md:mt-40 sm:mt-48 mt-56 items-center flex flex-col'>
              <div className='flex flex-col items-center'>
                <NextImage
                  src={'/img/404/kayu.svg'}
                  alt='kayu'
                  width={355}
                  height={97.87}
                  className='lg:w-[490px] md:w-[380px] sm:w-[350px] w-[280px]'
                />
              </div>
       
            <div className='flex flex-col items-center text-center md:-mt-8 -mt-4'>
                <Typography
                  weight='bold'
                  className={clsxm('font-poppins text-whites-1100 lg:text-[45px] md:text-[33px] sm:text-[30px] text-[25px]')}
                >
                  Oops!
                </Typography>
                <Typography
                  weight='bold'
                  className={clsxm('font-poppins text-primary-700 lg:text-[190px] md:text-[170px] sm:text-[160px] text-9xl')}
                >
                  404
                </Typography>
                <Typography
                  weight='bold'
                  className={clsxm('font-poppins text-whites-1100 lg:text-[45px] md:text-[33px] sm:text-[30px] text-[25px]')}
                >
                  PAGE NOT FOUND
                </Typography>
            
                <ButtonLink 
                href='/'
                variant='primary'
                leftIcon={MdHome}
                leftIconClassName={clsxm('w-[20px] text-white')}
                className={clsxm('py-2 px-4 rounded m-2')}>
                    <Typography
                      weight='bold'
                      font='poppins'
                      className={clsxm('text-whites-100')}>
                      Home
                    </Typography>
                  </ButtonLink>
              </div>
            </div>
          <div className='relative w-full h-full xl:mt-4 xl:py-28 lg:mt-6 lg:py-24 md:mt-8 md:py-28 sm:mt-14 py-24 mt-24 bg-cover bg-[url("/svg/404/background.svg")] bg-top bg-no-repeat'>
          <div className='relative w-full flex'>
              <NextImage
                src={'/images/404/panel.svg'}
                alt='background'
                width={306.35}
                height={98.83}
                className='absolute lg:w-[360px] xl:-bottom-32 lg:-bottom-24 lg:-left-12 md:w-[300px] md:-bottom-12 sm:-bottom-8 w-[230px] -bottom-6 -left-5'
              />
              <NextImage
                src={'/images/404/dogbush.svg'}
                alt='background'
                width={50}
                height={74}
                className='absolute xl:-bottom-40 lg:-bottom-36 lg:w-[120px] lg:right-4 md:w-[65px] md:-bottom-24 md:right-36 sm:-bottom-16 -bottom-12 right-28 w-[50px]'
              />
              <NextImage
                src={'/images/404/baling.svg'}
                alt='background'
                width={284.85}
                height={492}
                className='absolute xl:-bottom-40 lg:w-[250px] md:w-[160px] md:-bottom-36 w-[120px] -bottom-24 -right-3'
              />
              <NextImage
                src={'/images/404/stone.svg'}
                alt='background'
                width={117}
                height={64}
                className='absolute lg:w-[120px] xl:-bottom-32 lg:right-96 lg:-bottom-24 md:w-[80px] md:-bottom-8 md:right-40 sm:-bottom-4 w-[63px] bottom-0 right-32'
              />
              <NextImage
                src={'/images/404/bush1.svg'}
                alt='background'
                width={47.5}
                height={15}
                className='absolute lg:hidden inline_block md:w-[65px] md:left-48 md:-bottom-16  sm:-bottom-12 w-[50px] -bottom-10 left-36'
              />
              <NextImage
                src={'/images/404/bush2.svg'}
                alt='background'
                width={29}
                height={36}
                className='absolute lg:hidden inline_block md:w-[45px] md:-bottom-28 w-[35px] -bottom-24 left-0'
              />
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
