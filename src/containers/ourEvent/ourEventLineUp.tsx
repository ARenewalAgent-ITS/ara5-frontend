'use client';

import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
interface datas {
  title: string;
  decs: string;
  img: string;
}

const dataEvent: datas[] = [
  {
    title: 'OlimpIT',
    decs: 'OlimpIT merupakan kompetisi yang diadakan dalam rangkaian acara ARA 5.0. Olimpiade dalam rangkaian acara ARA 5.0 ditujukan bagi siswa SMA/SMK di seluruh Indonesia. Soal meliputi seputar Kurikulum Departemen Teknologi Informasi akan diberikan kepada peserta kompetisi Olimpiade.',
    img: '/images/landpage_ourevent/board.png',
  },
  {
    title: 'CTF',
    decs: 'CTF atau Capture the Flag merupakan kompetisi seputar bidang Cyber Security yang ditujukan bagi siswa/i SMA dan mahasiswa/i aktif PTN/PTS se-Indonesia. Para peserta kompetisi CTF dalam rangkaian ARA 5.0 diwajibkan untuk menemukan file tersembunyi dalam bentuk file ataupun string (teks) yang disebut dengan “Flag”.',
    img: '/images/landpage_ourevent/board.png',
  },
  {
    title: 'ExploIT',
    decs: `ExploIT merupakan wadah atau sarana untuk menampilkan hasil karya teknologi dari
    mahasiswa/i Indonesia melalui pameran. Pameran ini juga akan diisi dengan berbagai
    talkshow dengan topik mengenai teknologi informasi. ExploIT dalam rangkaian ARA
    5.0 memiliki topik bahasan mendatang mengenai IoT (Internet of Thing). ExploIT ditujukan bagi mahasiswa/i, dosen, dan masyarakat di Indonesia serta Start Up di
    bidang IoT (Internet of Thing).`,
    img: '/images/landpage_ourevent/board.png',
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
          src={'/images/landpage_ourevent/goa.svg'}
          alt='background'
          width={1524}
          height={1001.37}
          className='absolute w-full'
        ></NextImage>
        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/birds.svg'}
            alt='birds'
            width={100}
            height={100}
            className='hidden md:block absolute w-full top-[55rem]'
          />
        </div>
        {/* <div className='relative'>
        <NextImage
          src={'/images/landpage_ourevent/leaf.svg'}
          alt='birds'
          width={100}
          height={100}
          className='hidden md:block absolute w-full top-[50rem]'
        />
      </div> */}
        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/cloud_1.png'}
            alt='birds'
            width={578}
            height={383}
            className='hidden md:block absolute w-[40%] top-[50rem] right-0 opacity-40'
          />
        </div>
        <div className='relative'>
          <NextImage
            src={'/images/landpage_ourevent/cloud_2.png'}
            alt='birds'
            width={539}
            height={419}
            className='hidden md:block absolute w-[30%] top-[90rem] left-0 opacity-70'
          />
        </div>
        <section className='overflow-hidden w-full h-full bg-white-400 min-[350px]:px-12 px-5 py-10 min-[500px]:px-[10%] sm:px-[20%] md:px-10 lg:px-28 xl:px-[12%]'>
          <div className='flex justify-center py-[10rem]'>
            <NextImage
              src={'/images/landpage_ourevent/our_event.svg'}
              alt='background'
              width={483}
              height={70}
              className='w-full md:w-[483px] md:h-[70px] xl:mb-10'
              data-aos='zoom-in'
            />
          </div>

          <div className='w-full h-full'>
            {dataEvent.map((items, index) => (
              <>
                {index % 2 == 0 ? (
                  <div
                    className='flex flex-col md:flex-row md:items-center md:gap-10 xl:gap-16 mt-10'
                    data-aos='fade-left'
                    data-aos-delay='400'
                    key={index}
                  >
                    <NextImage
                      src={items?.img}
                      alt='background'
                      width={563.05}
                      height={334.62}
                      className='w-full'
                    />
                    <div className='flex flex-col md:w-full'>
                      <Typography
                        variant='h5'
                        weight='bold'
                        className='font-poppins text-[#393737] text-[32px] mt-4 xl:text-[60px] xl:mb-5'
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
                        href='/'
                        variant='success'
                        color='white'
                        className='w-[174px] h-[42px] md:h-[48px] text-[14px] font-bold font-poppins text-white leading-relaxed py-2 mt-3 rounded-md xl:mt-5'
                        rightIcon={FaArrowRight}
                      >
                        Show More
                      </ButtonLink>
                    </div>
                  </div>
                ) : (
                  <div
                    className='flex flex-col md:flex-row-reverse md:items-center md:gap-10 xl:gap-16 mt-10 xl:mt-16'
                    data-aos='fade-right'
                    data-aos-delay='400'
                    key={index}
                  >
                    <NextImage
                      src={items?.img}
                      alt='background'
                      width={563.05}
                      height={334.62}
                      className='w-full'
                    />
                    <div className='flex flex-col md:w-full'>
                      <Typography
                        variant='h5'
                        weight='bold'
                        className='font-poppins text-[#393737] text-[32px] mt-4 xl:text-[60px] xl:mb-5'
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
                        href='/'
                        variant='success'
                        color='white'
                        className='w-[174px] h-[42px] md:h-[48px] text-[14px] font-bold font-poppins text-white leading-relaxed py-2 mt-3 rounded-md xl:mt-5'
                        rightIcon={FaArrowRight}
                      >
                        Show More
                      </ButtonLink>
                    </div>
                  </div>
                )}
              </>
            ))}

            <div
              className='flex flex-col md:flex-row md:items-center md:gap-10 xl:gap-16 mt-10 xl:mt-20'
              data-aos='fade-left'
              data-aos-delay='400'
            >
              <div className='w-full h-full flex items-center flex-col'>
                <NextImage
                  src={'/images/landpage_ourevent/present.svg'}
                  alt='background'
                  width={483}
                  height={70}
                  className='w-full mb-12'
                />
                <NextImage
                  src={'/images/landpage_ourevent/hmit.png'}
                  alt='background'
                  width={308}
                  height={304}
                  className='w-[70%] mb-12'
                />
              </div>
              <div className='flex flex-col md:w-full'>
                <Typography
                  variant='h5'
                  weight='bold'
                  className='font-poppins text-[#393737] text-[32px] mt-4 xl:text-[60px] xl:mb-5'
                >
                  HMIT ITS
                </Typography>
                <Typography
                  variant='p'
                  weight='regular'
                  className='text-[12px] min-[500px]:text-[14px] font-medium font-poppins text-[#393737] mt-2 md:text-justify xl:text-[18px] md:text-[16px]'
                >
                  HMIT atau Himpunan Mahasiswa Teknologi Informasi merupakan
                  himpunan yang mengayomi mahasiswa Departemen Teknologi
                  Informasi ITS. Didirikan pada November 2019 dan sejak saat itu
                  telah mengadakan 4 event besar yakni ExploIT 2020, ARA 2021,
                  ARA 2022, dan ARA 4.0 yang sukses dan diikuti oleh ribuan
                  peserta.
                </Typography>
                <ButtonLink
                  href='/'
                  variant='success'
                  color='white'
                  className='w-[174px] h-[42px] md:h-[48px] text-[14px] font-bold font-poppins text-white leading-relaxed py-2 mt-3 rounded-md xl:mt-5'
                  rightIcon={FaArrowRight}
                >
                  Show More
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
        <div className='relative pt-36'>
          <NextImage
            src={'/images/landpage_ourevent/landing.svg'}
            alt='background'
            width={1440}
            height={199}
            className='w-full absolute bottom-0'
          ></NextImage>
          <div className='bg-[#001E2A] w-full h-[2vh]'></div>
        </div>
      </div>
    </>
  );
}
