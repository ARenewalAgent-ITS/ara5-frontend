// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Footer from '@/components/layouts/Footer';
import ButtonLink from '@/components/links/ButtonLink';
// import Navbar from '@/components/layouts/Navbar';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import LoopKereta from '@/containers/LoopKereta';
import clsxm from '@/lib/clsxm';

export default function page() {
  return (
    <>
      <section className='overflow-hidden relative w-full h-full text-start bg-gradient-to-b from-[#A0EDFF] to-white-50 lg:pt-20 xl:px-32 '>
        {/* <Navbar /> */}
        <div className='relative w-full h-screen bg-[url("/images/landpage/bege.svg")] bg-cover bg-center mt-[30rem]'>
          <LoopKereta />
          <div className='relative w-full flex bg-black-400'>
            <NextImage
              src={'/images/landpage/awan_kiri.svg'}
              alt='background'
              width={259.97}
              height={203.14}
              className='absolute bottom-96 left-0 z-20 hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/awan_kiri_kecil.svg'}
              alt='background'
              width={169.97}
              height={103.14}
              className='absolute bottom-80 left-40 z-20 hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/daun_kiri.svg'}
              alt='background'
              width={29.97}
              height={51.14}
              className='absolute bottom-20 left-40 z-20 hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/awan_kanan.svg'}
              alt='background'
              width={259.97}
              height={203.14}
              className='absolute bottom-96 right-0 z-20 hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/awan_kanan_kecil.svg'}
              alt='background'
              width={169.97}
              height={103.14}
              className='absolute bottom-80 right-40 z-20 hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/daun_kanan.svg'}
              alt='background'
              width={29.97}
              height={51.14}
              className='absolute bottom-20 right-40 z-20 hidden lg:inline-block'
            />
          </div>
          <div className='w-full relative xl:-top-[70%] sm:-top-[70%] md:-top-[70%]  -top-[70%] flex justify-center flex-col items-center'>
            <NextImage
              src={'/images/landpage/ARA5.svg'}
              alt='background'
              width={259.97}
              height={103.14}
              className='max-[500px]:w-[60%] w-[259.97px]'
            />
            <div className='flex flex-col items-center text-center '>
              <Typography
                font='poppins'
                variant='h5'
                // weight='bold'
                color='label'
                className='font-bold text-[25px]'
              >
                A Renewal Agent 5.0
              </Typography>
              <Typography
                font='poppins'
                variant='p'
                weight='semibold'
                color='label'
                className='mt-5 text-center lg:max-w-2xl max-[500px]:text-[14px] px-10 sm:max-w-md md:max-w-lg'
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
                  'w-[14.4px] h-4 ml-2 transform translate-x-0 group-hover:translate-x-3 transition-all duration-300 ease-in-out'
                )}
                className={clsxm(
                  'mx-auto xl:py-1 px-4 group w-[30%] max-[475px]:w-[40%] py-2 lg:w-[30%] mt-5 sm:max-w-sm md:max-w-md'
                )}
              >
                <Typography
                  className={clsxm('text-white-50 font-semibold text-base')}
                >
                  About Us
                </Typography>
              </ButtonLink>
            </div>
          </div>

          <div className='fleX justify-between'>
            <NextImage
              src={'/images/landpage/panel.svg'}
              alt='background'
              width={259.97}
              height={113.14}
              className='bottom-56 left-0 relative hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/bush.svg'}
              alt='background'
              width={150.97}
              height={103.14}
              className='bottom-80 left-72 absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/tree_kiri.svg'}
              alt='background'
              width={105.97}
              height={73.14}
              className='bottom-[24rem] left-[30rem] absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/tree_kiri.svg'}
              alt='background'
              width={105.97}
              height={73.14}
              className='bottom-[10rem] left-[26rem] absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/batu_kiri.svg'}
              alt='background'
              width={85.97}
              height={73.14}
              className='bottom-[6rem] left-[6rem] absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/rock_kanan.svg'}
              alt='background'
              width={75.97}
              height={53.14}
              className='bottom-[25.5rem] right-[25rem] absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/maskot.svg'}
              alt='background'
              width={105.97}
              height={73.14}
              className='bottom-[20.5rem] right-[5rem] absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/tree_kanan.svg'}
              alt='background'
              width={105.97}
              height={73.14}
              className='bottom-[15.5rem] right-[22rem] absolute hidden lg:inline-block'
            />
            <NextImage
              src={'/images/landpage/rock_kanan.svg'}
              alt='background'
              width={85.97}
              height={83.14}
              className='bottom-[5.5rem] right-[15rem] absolute hidden lg:inline-block'
            />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
