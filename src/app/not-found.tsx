"use client"
import Aos from 'aos';
import React, { useEffect } from 'react';
import { MdHome } from 'react-icons/md';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function NotFound() {

  useEffect(() => {
  Aos.init();
  }, []);
  
  return (
    <>
      <div>
        <div className='fixed w-full z-[101]'>
          <Navbar className='bg-transparent' />
        </div>
        <section className='overflow-hidden text-start relative h-full w-full bg-gradient-to-b from-[#A0EDFF] to-white-50 pb-[65px]'>
          <div className='relative w-full flex lg:mt-12 md:mt-8 sm:mt-6 mt-4'>
            <NextImage
              src={'/images/404/awan_kiri_besar.svg'}
              alt='background'
              width={238.7}
              height={108.9}
              data-aos='fade-right' data-aos-delay='400'
              className='absolute lg:w-[280px] lg:-left-4 lg:top-48 md:w-[230px] sm:w-[200px] top-24 w-[165px]'
            />
            <NextImage
              src={'/images/404/awan_kiri_kecil.svg'}
              alt='background'
              width={109.54}
              height={37.55}
              data-aos='fade-right' data-aos-delay='400'
              className='absolute lg:left-36 lg:top-[23rem] md:w-[160px] sm:inline-block sm:w-[140px] top-[21rem] -left-5 w-[100px]'
            />
            <NextImage
              src={'/images/404/daun_kiri.svg'}
              alt='background'
              width={42.25}
              height={75}
              data-aos='fade-right' data-aos-delay='400'
              className='absolute hidden lg:inline-block top-[32rem] left-24'
            />
            <NextImage
              src={'/images/404/awan_kanan_besar.svg'}
              alt='background'
              width={266.93}
              height={83.97}
              data-aos='fade-left' data-aos-delay='400'
              className='absolute lg:w-[320px] lg:top-56 lg:-right-32 md:w-[225px] sm:w-[195px] top-36 -right-2 w-[160px]'
            />
            <NextImage
              src={'/images/404/awan_kanan_kecil.svg'}
              alt='background'
              width={124.5}
              height={57.47}
              data-aos='fade-left' data-aos-delay='400'
              className='absolute lg:right-32 lg:top-[24rem] sm:w-[135px] sm:top-[27rem] top-[26rem] -right-6 w-[100px]'
            />
            <NextImage
              src={'/images/404/daun_kanan.svg'}
              alt='background'
              width={36.25}
              height={64.75}
              data-aos='fade-left' data-aos-delay='400'
              className='absolute hidden lg:inline-block top-[30rem] right-14'
            />
            <NextImage
              src={'/images/404/daun1.svg'}
              alt='background'
              width={27}
              height={23}
              data-aos='fade-right' data-aos-delay='400'
              className='absolute lg:hidden inline-block md:left-24 md:top-[28rem] sm:left-20 top-[30rem] left-8 w-[30px]'
            />
            <NextImage
              src={'/images/404/daun2.svg'}
              alt='background'
              width={26}
              height={28}
              data-aos='fade-right' data-aos-delay='400'
              className='absolute lg:hidden inline-block md:left-36 md:top-[34rem] sm:left-32 top-[36rem] left-20 w-[30px]'
            />
            <NextImage
              src={'/images/404/daun3.svg'}
              alt='background'
              width={24}
              height={21}
              data-aos='fade-left' data-aos-delay='400'
              className='absolute lg:hidden inline-block md:right-28 sm:right-20 top-[34rem] right-16 w-[30px]'
            />
          </div>
          <div className='w-full justify-center xl:mt-20 lg:mt-28 md:mt-40 sm:mt-48 mt-56 items-center flex flex-col'>
            <div className='flex flex-col items-center'>
              <NextImage
                src={'/img/404/kayu.svg'}
                alt='kayu'
                width={355}
                height={97.87}
                data-aos='fade-down' data-aos-delay='400'
                className='lg:w-[490px] md:w-[380px] sm:w-[350px] w-[280px]'
              />
            </div>
            <div className='flex flex-col items-center text-center z-20' data-aos='zoom-in' data-aos-delay='400'>
              <Typography
                weight='bold'
                className={clsxm(
                  'font-poppins text-whites-1100 lg:text-[45px] md:text-[33px] sm:text-[30px] text-[25px]'
                )}
              >
                Oops!
              </Typography>
              <Typography
                weight='bold'
                className={clsxm(
                  'font-poppins text-primary-700 lg:text-[190px] md:text-[170px] sm:text-[160px] text-9xl'
                )}
              >
                404
              </Typography>
              <Typography
                weight='bold'
                className={clsxm(
                  'font-poppins text-whites-1100 lg:text-[45px] md:text-[33px] sm:text-[30px] text-[25px]'
                )}
              >
                PAGE NOT FOUND
              </Typography>
              <ButtonLink
                href='/'
                variant='primary'
                leftIcon={MdHome}
                leftIconClassName={clsxm('w-[20px] text-white')}
                className={clsxm('py-2 px-4 rounded m-2')}
              >
                <Typography
                  weight='bold'
                  font='poppins'
                  className={clsxm('text-whites-100')}
                >
                  Home
                </Typography>
              </ButtonLink>
            </div>
          </div>
          <div className='relative w-full h-full xl:mt-4 xl:py-28 lg:mt-6 lg:py-24 md:mt-8 md:py-28 sm:mt-14 py-24 mt-24'>
            <div className='relative w-full flex h-full'>
              <NextImage
                src={'/svg/404/bege.svg'}
                alt='background'
                width={1440}
                height={440}
                className='absolute w-[1536px] hidden lg:inline-block -bottom-60 min-[1536px]:w-[2000px] min-[1536px]:-bottom-72 min-[2000px]:w-full'
              />
              <NextImage
                src={'/svg/404/bg-mobile.svg'}
                alt='background'
                width={1440}
                height={440}
                className='absolute w-[1024px] inline-block lg:hidden -bottom-52'
              />
              <NextImage
                src={'/images/404/panel.svg'}
                alt='background'
                width={306.35}
                height={98.83}
                data-aos='fade-right' data-aos-delay='400'
                className='absolute lg:w-[360px] lg:-bottom-40 lg:-left-12 md:w-[300px] md:-bottom-20 w-[230px] -bottom-16 -left-5'
              />
              <NextImage
                src={'/images/404/dogbush.svg'}
                alt='background'
                width={50}
                height={74}
                data-aos='fade-up' data-aos-delay='400'
                className='absolute lg:-bottom-48 lg:w-[120px] lg:right-4 md:w-[65px] md:-bottom-32 md:right-36 -bottom-28 right-28 w-[50px] max-[400px]:hidden'
              />
              <NextImage
                src={'/images/404/baling.svg'}
                alt='background'
                width={284.85}
                height={492}
                data-aos='fade-left' data-aos-delay='400'
                className='absolute xl:-bottom-44 lg:w-[250px] md:w-[160px] md:-bottom-44 w-[120px] -bottom-40 -right-3'
              />
              <NextImage
                src={'/images/404/stone.svg'}
                alt='background'
                width={117}
                height={64}
                data-aos='fade-up' data-aos-delay='400'
                className='absolute lg:w-[120px] lg:right-80 lg:-bottom-40 md:w-[80px] md:-bottom-16 md:right-40 w-[70px] -bottom-14 right-32 max-[400px]:hidden'
              />
              <NextImage
                src={'/images/404/bush1.svg'}
                alt='background'
                width={47.5}
                height={15}
                data-aos='fade-up' data-aos-delay='400'
                className='absolute lg:hidden inline_block md:w-[65px] md:left-48 md:-bottom-28 w-[50px] -bottom-20 left-36'
              />
              <NextImage
                src={'/images/404/bush2.svg'}
                alt='background'
                width={29}
                height={36}
                data-aos='fade-right' data-aos-delay='400'
                className='absolute lg:hidden inline_block md:w-[45px] md:-bottom-36 w-[35px] -bottom-36 left-0'
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
