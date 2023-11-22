// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP
'use client';

import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import MediaSponsorSection from '@/containers/MediaSponsorSection';
import Card from '@/components/layouts/Card';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import LoopKereta from '@/containers/LoopKereta';
import LoopTechnaVita from '@/containers/LoopTechnaVita';
import clsxm from '@/lib/clsxm';

export default function LandingPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <section className='overflow-hidden relative w-full h-full text-start bg-gradient-to-b from-[#A0EDFF] to-white-50 lg:pt-16'>
        <div className='relative w-full flex'>
          <NextImage
            src={'/svg/landpage/big_cloud_left.svg'}
            alt='background'
            width={260}
            height={203.14}
            className='absolute left-0 -top-16 z-20 hidden lg:inline-block animate-float'
            data-aos='fade-right'
            data-aos-delay='400'
          />
          <NextImage
            src={'/svg/landpage/little_cloud_left.svg'}
            alt='background'
            width={169.97}
            height={103.14}
            className='absolute left-40 top-32 z-20 hidden sm:left-0 sm:top-10 md:top-32 lg:left-40 sm:inline-block animate-float'
            data-aos='fade-right'
            data-aos-delay='400'
          />
          <NextImage
            src={'/svg/landpage/left_leaf.svg'}
            alt='background'
            width={69.97}
            height={51.14}
            className='absolute left-40 top-80 z-20 hidden sm:inline-block 
            sm:w-[60px] sm:left-12 sm:top-[22rem]
            md:w-[70px] md:left-28 md:top-80
            lg:left-40
            '
            data-aos='fade-right'
            data-aos-delay='400'
          />
          <NextImage
            src={'/svg/landpage/big_cloud_right.svg'}
            alt='background'
            width={259.97}
            height={203.14}
            className='absolute right-0 -top-16 z-20 hidden lg:inline-block animate-floats'
            data-aos='fade-left'
            data-aos-delay='400'
          />
          <NextImage
            src={'/svg/landpage/little_cloud_right.svg'}
            alt='background'
            width={169.97}
            height={103.14}
            className='absolute right-40 top-32 z-20 hidden sm:top-10 sm:right-0 sm:inline-block md:top-32 lg:right-40 animate-floats'
            data-aos='fade-left'
            data-aos-delay='400'
          />
          <NextImage
            src={'/svg/landpage/right_leaf.svg'}
            alt='background'
            width={69.97}
            height={70.14}
            className='absolute right-40 top-80 z-20 hidden sm:inline-block 
            sm:w-[60px] sm:right-12 sm:top-[22rem]
            md:w-[70px] md:right-28 md:top-80
            lg:right-40 lg:top-80
            '
            data-aos='fade-left'
            data-aos-delay='400'
          />
        </div>
        <div className='w-full absolute mt-12 lg:mt-10 flex justify-center flex-col items-center'>
          <div className='flex flex-col items-center'>
            <NextImage
              src={'/images/landpage/ARA5.svg'}
              alt='background'
              width={259.97}
              height={103.14}
              className='max-[500px]:w-[60%] w-[259.97px] lg:w-[300px]'
              data-aos='fade-up'
              data-aos-delay='200'
            />
            <div
              className='flex flex-col items-center text-center '
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <Typography
                variant='h5'
                weight='bold'
                color='label'
                className='font-poppins text-[25px]'
              >
                A Renewal Agent 5.0
              </Typography>
              <Typography
                variant='p'
                weight='semibold'
                color='label'
                className='font-poppins mt-5 text-center lg:max-w-2xl sm:text-[16px] md:text-[16px] md:max-w-lg max-[500px]:text-[14px] px-10 sm:max-w-lg lg:text-[18px] xl:text-[20px] xl:max-w-4xl'
              >
                ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan
                oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode
                2022-2023 yang dimana event ini akan menjadi media untuk
                menyalurkan minat di bidang IT (teknologi informasi) bagi siswa
                SMA/SMK dan mahasiswa.
              </Typography>
              <ButtonLink
                href='/'
                variant='primary'
                rightIcon={FaArrowRight}
                rightIconClassName={clsxm(
                  'w-[14.4px] h-4 ml-2 transform translate-x-0 group-hover:translate-x-3 transition-all duration-300 ease-in-out text-white'
                )}
                className={clsxm(
                  'mx-auto xl:py-3 px-4 group w-[30%] max-[475px]:w-[40%] py-2 lg:w-[30%] mt-5 sm:max-w-sm md:max-w-md'
                )}
              >
                <Typography
                  className={clsxm(
                    'font-poppins text-white font-semibold text-base'
                  )}
                >
                  About Us
                </Typography>
              </ButtonLink>
            </div>
          </div>
          <div className='flex z-10 flex-col w-full h-full items-center relative px-10 max-[425px]:px-5 max-[400px]:-top-12 mt-10 lg:mt-36 min-[1600px]:mt-36'>
            <NextImage
              src={'/images/landpage/tema.svg'}
              width={200}
              height={200}
              alt='tema'
              data-aos='fade-up'
              data-aos-delay='400'
              className='w-[330px] h-[100px] min-[500px]:w-[450px] min-[500px]:mb-48 mb-28'
            />
            <div
              className='relative md:w-[650px] lg:w-[900px] max-[380px]:bottom-0'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <Card />
            </div>
          </div>
        </div>
        <div className='relative w-full h-full py-96 bg-[url("/svg/landpage/bege.svg")] bg-cover bg-top bg-no-repeat mt-[32rem]'>
          <LoopKereta />
          <div className='flex justify-between'>
            <NextImage
              src={'/images/landpage/panel.svg'}
              alt='background'
              width={359.97}
              height={115.14}
              className='top-32 lg:-left-[4.5rem] absolute hidden md:inline-block md:-left-[8rem]'
              data-aos='fade-up'
              data-aos-delay='100'
            />
            <NextImage
              src={'/images/landpage/bush.svg'}
              alt='background'
              width={150.97}
              height={103.14}
              className='top-[15.5rem] lg:left-[12%] xl:left-[20%] 2xl:top-[15rem] absolute hidden md:inline-block md:left-[5%]'
              data-aos='zoom-in'
              data-aos-delay='200'
            />
            <NextImage
              src={'/images/landpage/tree_kiri.svg'}
              alt='background'
              width={105.97}
              height={73.14}
              className='top-[12.5rem] left-[32.5%] xl:left-[36%] xl:top-[12rem] 2xl:left-[38%] 2xl:top-[12rem] absolute hidden lg:inline-block'
              data-aos='zoom-in'
              data-aos-delay='100'
            />
            <NextImage
              src={'/images/landpage/batu_kiri.svg'}
              alt='background'
              width={150.97}
              height={103.14}
              className='bottom-32 lg:left-[3%] xl:left-[10%] 2xl:left-[14%] absolute hidden md:inline-block md'
              data-aos='zoom-in'
              data-aos-delay='200'
            />
            <NextImage
              src={'/images/landpage/rock_kanan.svg'}
              alt='background'
              width={105.97}
              height={103.14}
              className='top-36 right-[30%] xl:right-[35%] min-[1600px]:right-[37%] min-[1600px]:top-[18%] min-[1800px]:top-[20%] absolute hidden lg:inline-block'
              data-aos='zoom-in'
              data-aos-delay='100'
            />
            <NextImage
              src={'/images/landpage/maskot.svg'}
              alt='background'
              width={205.97}
              height={103.14}
              className='md:top-44 lg:right-[3%] right-0 xl:right-[10%] absolute hidden md:inline-block min-[1600px]:top-[22%]'
              data-aos='fade-left'
              data-aos-delay='200'
            />
            <NextImage
              src={'/svg/landpage/footprint.svg'}
              alt='background'
              width={205.97}
              height={103.14}
              className='lg:top-[18rem] lg:right-[12%] xl:right-[20%] right-0 absolute hidden lg:inline-block'
              data-aos='fade-right'
              data-aos-delay='100'
            />
            <NextImage
              src={'/images/landpage/rock_kanan.svg'}
              alt='background'
              width={150.97}
              height={103.14}
              className='bottom-40 lg:right-[0%] xl:right-[10%] 2xl:right-[15%] min-[1600px]:right-[17%] absolute hidden md:inline-block md:-right-[2%]'
              data-aos='zoom-in'
              data-aos-delay='100'
            />
          </div>
          <div className='flex'>
            <LoopTechnaVita />
          </div>
        </div>
        <MediaSponsorSection />
      </section>
      <Footer />
    </>
  );
}
