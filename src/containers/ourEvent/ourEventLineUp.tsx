'use client';

import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import ThrowBack from '@/components/layouts/Throwback';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
interface datas {
  title: string;
  decs: string;
  img: string;
  link: string;
}

const dataEvent: datas[] = [
  {
    title: 'OlimpIT',
    decs: 'OlimpIT merupakan kompetisi yang diadakan dalam rangkaian acara ARA 5.0. Olimpiade dalam rangkaian acara ARA 5.0 ditujukan bagi siswa SMA/SMK di seluruh Indonesia. Soal meliputi seputar Kurikulum Departemen Teknologi Informasi akan diberikan kepada peserta kompetisi Olimpiade.',
    img: '/images/landpage_ourevent/board.png',
    link: '/olimpit',
  },
  {
    title: 'CTF',
    decs: 'CTF atau Capture the Flag merupakan kompetisi seputar bidang Cyber Security yang ditujukan bagi siswa/i SMA dan mahasiswa/i aktif PTN/PTS se-Indonesia. Para peserta kompetisi CTF dalam rangkaian ARA 5.0 diwajibkan untuk menemukan file tersembunyi dalam bentuk file ataupun string (teks) yang disebut dengan “Flag”.',
    img: '/images/landpage_ourevent/board.png',
    link: '/ctf',
  },
  {
    title: 'ExploIT',
    decs: `ExploIT merupakan wadah atau sarana untuk menampilkan hasil karya teknologi dari
    mahasiswa/i Indonesia melalui pameran. Pameran ini juga akan diisi dengan berbagai
    talkshow dengan topik mengenai teknologi informasi. ExploIT dalam rangkaian ARA
    5.0 memiliki topik bahasan mendatang mengenai IoT (Internet of Thing). ExploIT ditujukan bagi mahasiswa/i, dosen, dan masyarakat di Indonesia serta Start Up di
    bidang IoT (Internet of Thing).`,
    img: '/images/landpage_ourevent/board.png',
    link: 'exploit',
  },
];

export default function OurEventLineUp() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className='bg-gradient-to-t from-[#A7E6FF] to-[#00B7FF]'>
        <NextImage
          src={'/images/landpage_ourevent/cave.svg'}
          alt='background'
          width={1440}
          height={832}
          className='hidden md:block absolute w-full'
        />
        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/birds.svg'}
            alt='birds'
            width={100}
            height={100}
            className='hidden md:block absolute w-full top-[55rem]'
          />
        </div>

        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/leaf.svg'}
            alt='birds'
            width={100}
            height={100}
            className='hidden md:block absolute w-full top-[50rem]'
          />
        </div>

        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/cloud_1.png'}
            alt='birds'
            width={578}
            height={383}
            className='block absolute md:w-[40%] w-[60%] top-[50rem] right-0 opacity-70'
          />
        </div>
        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/cloud_2.png'}
            alt='birds'
            width={539}
            height={419}
            className='block absolute md:w-[30%] w-[60%] top-[90rem] left-0 opacity-70'
          />
        </div>
        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/cave_responsive.svg'}
            alt='birds'
            width={10}
            height={10}
            className='md:hidden block absolute w-full top-0'
          />
        </div>
        {/* <div className='bg-[#07233C] h-[2vh]'></div> */}
        <section className='overflow-hidden w-full flex-col flex items-center h-full min-[350px]:px-12 px-5 py-10 min-[500px]:px-[10%] sm:px-[20%] md:px-10 lg:px-28 xl:px-[12%]'>
          <div className='flex justify-center pt-[6rem] min-[500px]:pt-[10rem] max-md:pb-[2rem] md:pb-[2rem]'>
            <NextImage
              src={'/images/landpage_ourevent/our_event.svg'}
              alt='background'
              width={483}
              height={70}
              className='w-[350px] min-[425px]:w-[400px] md:w-[483px] md:h-[70px]xl:w-[500px]'
              data-aos='zoom-in'
            />
          </div>

          <div className='xl:max-w-6xl w-full h-full'>
            {dataEvent.map((items, index) => (
              <div key={index}>
                {index % 2 == 0 ? (
                  <div
                    className='flex flex-col md:flex-row md:items-center md:gap-10 xl:gap-16 xl:mt-20 mt-10'
                    data-aos='fade-left'
                    data-aos-delay='400'
                  >
                    <NextImage
                      src={items?.img}
                      alt='background'
                      width={563.05}
                      height={334.62}
                      className='w-full'
                      data-aos='fade-right'
                    />
                    <div className='flex flex-col md:w-full' data-aos='fade-up'>
                      <Typography
                        variant='h4'
                        weight='bold'
                        className='font-poppins text-[#393737] text-[32px] mt-6 xl:text-[60px] xl:mb-5'
                      >
                        {items?.title}
                      </Typography>
                      <Typography
                        variant='p'
                        weight='regular'
                        className='text-[12px] min-[500px]:text-[14px] font-medium font-poppins text-[#393737] mt-2 md:text-justify xl:text-[18px] md:text-[16px]'
                      >
                        {items?.decs}
                      </Typography>
                      <ButtonLink
                        href={index == 1 ? `${items?.link}` : `${items?.link}`}
                        variant='success'
                        color='white'
                        className='w-[174px] h-[42px] group md:h-[48px] text-[14px] font-bold font-poppins text-white leading-relaxed rounded-md mt-5 xl:mt-5'
                        rightIcon={FaArrowRight}
                        rightIconClassName={clsxm(
                          'translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-in-out'
                        )}
                      >
                        Show More
                      </ButtonLink>
                    </div>
                  </div>
                ) : (
                  <div
                    className='flex flex-col md:flex-row-reverse md:items-center md:gap-10 xl:gap-16 xl:mt-20 mt-10'
                    data-aos='fade-right'
                    data-aos-delay='400'
                  >
                    <NextImage
                      src={items?.img}
                      alt='background'
                      width={563.05}
                      height={334.62}
                      className='w-full'
                      data-aos='fade-left'
                    />
                    <div className='flex flex-col md:w-full' data-aos='fade-up'>
                      <Typography
                        variant='h4'
                        weight='bold'
                        className='font-poppins text-[#393737] text-[32px] mt-6 xl:text-[60px] xl:mb-5'
                      >
                        {items?.title}
                      </Typography>
                      <Typography
                        variant='p'
                        weight='regular'
                        className='text-[12px] min-[500px]:text-[14px] font-medium font-poppins text-[#393737] mt-2 md:text-justify xl:text-[18px] md:text-[16px]'
                      >
                        {items?.decs}
                      </Typography>
                      <ButtonLink
                        href={items?.link}
                        variant='success'
                        color='white'
                        className='w-[174px] h-[42px] group md:h-[48px] text-[14px] font-bold font-poppins text-white leading-relaxed mt-5 rounded-md xl:mt-5'
                        rightIcon={FaArrowRight}
                        rightIconClassName={clsxm(
                          'translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-in-out'
                        )}
                      >
                        Show More
                      </ButtonLink>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div
              className='flex flex-col md:flex-row md:items-start md:gap-10 xl:gap-5 mt-32 xl:mt-28'
              data-aos='fade-left'
              data-aos-delay='400'
            >
              <div className='w-full h-full flex items-center flex-col'>
                <NextImage
                  src={'/images/landpage_ourevent/present.svg'}
                  alt='background'
                  width={483}
                  height={70}
                  className='w-[350px] min-[500px]:w-[400px] mb-12 xl:w-[420px]'
                />
                <NextImage
                  src={'/images/landpage_ourevent/hmit.png'}
                  alt='background'
                  width={308}
                  height={304}
                  className='w-[250px] mb-12 xl:w-[300px]'
                />
              </div>
              <div className='flex flex-col md:w-full'>
                <Typography
                  variant='h5'
                  weight='bold'
                  className='font-poppins text-[#393737] text-[32px] mt-2 xl:mt-6 xl:text-[60px] xl:mb-5'
                >
                  HMIT ITS
                </Typography>
                <Typography
                  variant='p'
                  weight='regular'
                  className='text-[12px] min-[500px]:text-[14px] font-medium font-poppins text-[#393737] my-2 md:text-justify xl:text-[18px] md:text-[16px]'
                >
                  HMIT atau Himpunan Mahasiswa Teknologi Informasi merupakan
                  himpunan yang mengayomi mahasiswa Departemen Teknologi
                  Informasi ITS. Didirikan pada November 2019 dan sejak saat itu
                  telah mengadakan 4 event besar yakni ExploIT 2020, ARA 2021,
                  ARA 2022, dan ARA 4.0 yang sukses dan diikuti oleh ribuan
                  peserta.
                </Typography>
                <ButtonLink
                  href='/HMIT-ITS'
                  variant='success'
                  color='white'
                  className='w-[174px] group h-[42px] md:h-[48px] text-[14px] font-bold font-poppins text-white leading-relaxed mt-5 rounded-md xl:mt-5'
                  rightIcon={FaArrowRight}
                  rightIconClassName={clsxm(
                    'translate-x-0 group-hover:translate-x-2 transition-all duration-300 ease-in-out'
                  )}
                >
                  Show More
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
        <ThrowBack />
        <div className='relative pt-36'>
          <NextImage
            src={'/images/landpage_ourevent/landing.svg'}
            alt='background'
            width={1440}
            height={199}
            className='w-full absolute bottom-0'
          />
        </div>
      </div>
    </>
  );
}
