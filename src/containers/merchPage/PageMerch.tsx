'use client';

import * as React from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

interface ProductData {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 2,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 3,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 4,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 5,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 6,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 7,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
  {
    id: 8,
    name: 'Lanyard Arlo',
    price: 'Rp10.000',
    imageSrc: '/img/merchpage/frame.svg',
  },
];

export default function PageMerch() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <section className='flex justify-center bg-transparent'>
        <div className='w-full h-full flex flex-col'>
          <div className='mx-10 sm:mx-16'>
            <div className='flex justify-end items-end'>
              <NextImage
                src={'/img/merchpage/shoppingcart.svg'}
                alt='shoppingcart'
                width={20}
                height={20}
                className='my-8 justify-end w-[25px] sm:w-[30px]'
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <Typography
                  weight='bold'
                  font='poppins'
                  className='text-success-1100 text-[28px] sm:text-[32px] md:text-[36px]'
                >
                  ARA 5.0
                </Typography>
                <Typography
                  weight='bold'
                  font='poppins'
                  className='text-primary-600 text-[28px] sm:hidden'
                >
                  Lanyard
                </Typography>
                <Typography
                  weight='bold'
                  font='poppins'
                  className='text-primary-600 text-[28px] sm:hidden'
                >
                  Merch
                </Typography>
                <Typography
                  weight='bold'
                  font='poppins'
                  className='text-primary-600 hidden sm:block sm:text-[32px] md:text-[36px]'
                >
                  Lanyard Merch
                </Typography>
              </div>
              <div
                onClick={handleDropdownClick}
                style={{ cursor: 'pointer' }}
                className='sm:mt-16 mt-20 items-center flex-col box-content md:w-48 sm:w-36 w-28 h-4 p-2 border-[1px] border-whites-1100 rounded-md'
              >
                <div className='flex justify-between items-center'>
                  <Typography
                    weight='medium'
                    font='poppins'
                    className='text-whites-900 mx-1 text-[12px] md:text-[14px]'
                  >
                    Sort
                  </Typography>
                  <IoIosArrowDown className='flex' />
                </div>
                {showDropdown && (
                  <div className='flex-col -ml-2 box-content py-4 mt-2 md:w-48 sm:w-36 w-28 h-8 flex justify-center p-2 border-[1px] shadow-40 rounded-md'>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 text-[12px] md:text-[14px] mx-1 my-1 hover:bg-whites-900 hover:text-whites-100 hover:rounded-sm hover:px-1'
                    >
                      Termurah
                    </Typography>
                    <Typography
                      weight='medium'
                      font='poppins'
                      className='text-whites-900 text-[12px] md:text-[14px] mx-1 my-1 hover:bg-whites-900 hover:text-whites-100 hover:rounded-sm hover:px-1'
                    >
                      Termahal
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mx-8 mx-4 flex flex-wrap justify-around'>
            {products.map((products) => (
              <div key={products.id} className='m-4 my-6'>
                <div className='bg-primary-300 shadow-80 w-fit px-3 pt-3 pb-8 sm:px-5 sm:pt-5 sm:pb-10 rounded-xl'>
                  <NextImage
                    src={products.imageSrc}
                    alt='productimage'
                    width={75}
                    height={75}
                    className='w-[75px] sm:w-[90px] md:w-[105px] lg:w-[120px] xl:w-[135px]'
                  />
                  <Typography
                    weight='medium'
                    font='poppins'
                    className='text-whites-1100 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'
                  >
                    {products.name}
                  </Typography>
                  <Typography
                    weight='bold'
                    font='poppins'
                    className='text-whites-1100 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'
                  >
                    {products.price}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
