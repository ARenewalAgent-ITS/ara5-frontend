'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css';

import React, { useState } from 'react';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Swiper as SwiperType,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import NextImage from '@/components/NextImage';

function ThrowBack() {
  SwiperCore.use([Autoplay]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const paginationStyle = {
    '--swiper-pagination-color': '#FFFFFF',
    '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
    '--swiper-pagination-bullet-inactive-opacity': '0.5',
    '--swiper-pagination-bullet-active-opacity': '1',
    '--swiper-pagination-bullet-size': '0.65rem',
  } as React.CSSProperties;

  const images = [
    '/images/throwback/one.png',
    '/images/throwback/two.png',
    '/images/throwback/three.png',
    '/images/throwback/four.png',
    '/images/throwback/five.png',
  ];

  return (
    <>
      <div className='h-[auto] pt-[3rem] pb-[2rem] xl:pb-[6rem]'>
        {/* <div className='absolute right-[25%] hidden lg:block z-10'>
          <NextImage
            src={'/svg/throwback/leaf.svg'}
            alt='leaf'
            width={78.47}
            height={57.41}
          ></NextImage>
        </div>
        <div className='absolute right-0 hidden md:block'>
          <NextImage
            src={'/svg/throwback/cloud.svg'}
            alt='cloud'
            width={1007.99}
            height={418.13}
          />
        </div> */}
        <div className='flex items-center justify-center'>
          <NextImage
            src={'/svg/throwback/frame_title.svg'}
            alt='throwback_title'
            width={368}
            height={53}
            className='z-10'
          />
        </div>
        <Swiper
          modules={[A11y, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          style={paginationStyle}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${activeIndex === index ? '' : 'md:blur-sm'} ${
                  activeIndex === index ? '' : 'md:scale-[1.1]'
                } scale-[1.2] h-auto pt-[3rem] pb-[4rem] md:pt-[4rem] md:pb-[4.5rem] flex justify-center items-center`}
                style={{
                  transition: 'transform 0.3s ease',
                }}
              >
                <NextImage
                  src={image}
                  alt='frame'
                  width={628}
                  height={373.21}
                  className='hidden md:block cursor-pointer w-[75%]'
                />
                <NextImage
                  src={image}
                  alt='frame'
                  width={628}
                  height={373.21}
                  className='md:hidden block cursor-pointer w-[75%]'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ThrowBack;
