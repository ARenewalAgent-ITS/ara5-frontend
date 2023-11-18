'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css';

import Image from 'next/image';
import React, { useState } from 'react';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Swiper as SwiperType,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bg from './throwback_img/background.svg';
import Cloud from './throwback_img/cloud.svg';
import Frame from './throwback_img/frame.svg';
import FrameTitle from './throwback_img/frame_title.svg';
import Leaf from './throwback_img/leaf.svg';

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

  return (
    <>
      <div
        className='h-[auto] py-[3rem]'
        style={{
          backgroundImage: `url(${bg.src})`,
          width: '100%',
          height: '100%',
        }}
      >
        <div className='absolute right-[25%] hidden md:block z-10'>
          <Image src={Leaf} alt='leaf'></Image>
        </div>
        <div className='absolute right-0 hidden md:block'>
          <Image src={Cloud} alt='cloud' className='w-[35rem]'></Image>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src={FrameTitle}
            alt='throwback_title'
            className='z-50 w-[75%] md:w-[auto]'
          ></Image>
        </div>
        <Swiper
          modules={[A11y, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          style={paginationStyle}
        >
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <SwiperSlide key={index}>
              <div
                className='h-auto pt-[3rem] pb-[4rem] md:pt-[4rem] md:pb-[4.5rem] flex justify-center items-center'
                style={{
                  transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
                  filter: activeIndex === index ? '' : 'blur(3px)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <Image
                  src={Frame}
                  alt='frame'
                  className='w-[70%] md:w-[85%] cursor-pointer'
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ThrowBack;
