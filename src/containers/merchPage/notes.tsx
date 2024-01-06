'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css';

import * as React from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Navbar from '@/components/layouts/Navbar';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

interface ProductData {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  category: string;
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 2,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 3,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 4,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 5,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 6,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 7,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
  {
    id: 8,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frames.svg',
    category: 'Lanyard',
  },
];

const paginationStyle = {
  '--swiper-pagination-color': '#212121',
  '--swiper-pagination-bullet-inactive-color': '#212121',
  '--swiper-pagination-bullet-inactive-opacity': '0.5',
  '--swiper-pagination-bullet-active-opacity': '1',
  '--swiper-pagination-bullet-size': '0.65rem',
} as React.CSSProperties;

const images = [
  '/img/merchpage/banner.svg',
  '/img/merchpage/banner2.svg',
  '/img/merchpage/banner3.svg',
  '/img/merchpage/banner4.svg',
];

export default function PageMerch() {
  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const CatDropdownClick = () => {
    setShowCatDropdown(!showCatDropdown);
  };

  const SortDropdownClick = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  SwiperCore.use([Autoplay]);

  return (
    <>
      <Navbar />
      <Swiper
        modules={[A11y, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        style={paginationStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='pt-20 flex justify-center items-center relative'>
              <NextImage
                src={image}
                alt='frame'
                width={616}
                height={171}
                className='cursor-pointer w-full'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className='flex justify-center bg-transparent mt-8'>
        <div className='w-full h-full flex flex-col'>
          <div className='mx-6 md:mx-8 lg:mx-12'>
            <div className='flex justify-between items-center'>
              <Typography
                weight='bold'
                font='poppins'
                className='text-success-1100 text-[18px] sm:text-[24px] md:text-[28px]'
              >
                Katalog Merchandise
              </Typography>
              <NextImage
                src='/img/merchpage/sorticon.svg'
                alt='frame'
                width={22}
                height={12}
                className='cursor-pointer block lg:hidden'
              />
              <div
                onClick={CatDropdownClick}
                style={{ cursor: 'pointer' }}
                className='hidden z-10 cursor-pointer lg:block items-center flex-col bg-whites-100 lg:w-80 w-28 h-10 p-2 border-[1px] border-whites-1100 rounded-md'
              >
                <div className='flex justify-between items-center'>
                  <Typography
                    weight='medium'
                    font='poppins'
                    className='text-whites-100 px-5 mx-1 rounded-md bg-primary-600 lg:text-[12px]'
                  >
                    Lanyard
                  </Typography>
                  <Typography
                    weight='medium'
                    font='poppins'
                    className='text-whites-100 px-5 mx-1 rounded-md bg-primary-600 lg:text-[12px]'
                  >
                    Lanyard
                  </Typography>
                  <Typography
                    weight='medium'
                    font='poppins'
                    className='text-whites-100 px-5 mx-1 rounded-md bg-primary-600 lg:text-[12px]'
                  >
                    Lanyard
                  </Typography>
                  <IoIosArrowDown className='flex' />
                </div>
                {showCatDropdown && (
                  <div className='flex-col -ml-2 bg-whites-100 py-4 mt-2 lg:w-80 w-28 h-16 flex justify-center p-2 border-[1px] shadow-40 rounded-md'>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-whites-900 hover:text-whites-100 hover:rounded-sm hover:px-1'
                    >
                      Lanyard
                    </Typography>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-whites-900 hover:text-whites-100 hover:rounded-sm hover:px-1'
                    >
                      Topi
                    </Typography>
                  </div>
                )}
              </div>
              <div
                onClick={SortDropdownClick}
                style={{ cursor: 'pointer' }}
                className='hidden cursor-pointer z-10 lg:block items-center flex-col bg-whites-100 lg:w-64 w-28 h-10 p-2 border-[1px] border-whites-1100 rounded-md'
              >
                <div className='flex justify-between items-center'>
                  <Typography
                    weight='medium'
                    font='poppins'
                    className='text-whites-900 mx-1 text-[12px] lg:text-[14px]'
                  >
                    Sort
                  </Typography>
                  <IoIosArrowDown className='flex' />
                </div>
                {showSortDropdown && (
                  <div className='flex-col -ml-2 bg-whites-100 py-4 mt-2 lg:w-64 w-28 h-16 flex justify-center p-2 border-[1px] shadow-40 rounded-md'>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-whites-900 hover:text-whites-100 hover:rounded-sm hover:px-1'
                    >
                      Termurah
                    </Typography>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 text-[12px] lg:text-[14px] mx-1 my-1 hover:bg-whites-900 hover:text-whites-100 hover:rounded-sm hover:px-1'
                    >
                      Termahal
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='mt-4 mx-4 sm:mx-6 flex flex-wrap justify-around'>
            {products.map((products) => (
              <div key={products.id} className='my-3 mx-1 sm:mx-2'>
                <div className=''>
                  <div className=''>
                    <NextImage
                      src={products.imageSrc}
                      alt='productimage'
                      width={100}
                      height={100}
                      className='w-[120px] sm:w-[150px] md:w-[170px] lg:w-[325px]'
                    />
                  </div>
                  <div className=''>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-100 absolute -mt-72 ml-[220px] px-5 py-1 rounded-md bg-primary-600 hidden lg:block lg:text-[13px]'
                    >
                      {products.category}
                    </Typography>
                  </div>
                  <div className='bg-primary-600 shadow-80 rounded-b-lg p-3 -mt-3 lg:-mt-8 lg:p-5'>
                    <div className='lg:flex lg:justify-between lg:items-center'>
                      <div className='lg:flex-col'>
                        <Typography
                          weight='medium'
                          font='poppins'
                          className='text-whites-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]'
                        >
                          {products.name}
                        </Typography>
                        <Typography
                          weight='bold'
                          font='poppins'
                          className='text-whites-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]'
                        >
                          {products.price}
                        </Typography>
                      </div>
                      <button className='border-[1px] border-whites-100 p-2 lg:w-20 w-full h-fit rounded-md mt-2 flex relative justify-center items-center'>
                        <Typography
                          weight='bold'
                          font='poppins'
                          className='text-whites-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]'
                        >
                          Beli
                        </Typography>
                        <PiShoppingCartSimpleFill
                          color='#ffffff'
                          className='mx-1 w-4'
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
