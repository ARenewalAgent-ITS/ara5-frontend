import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function RegisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen bg-whites-100'>
      <section className='fixed hidden lg:block lg:w-[60%] xl:w-[56%] right-0 top-0 h-full'>
        <div className='relative w-full h-full bg-white'>
          <Image
            src={'/img/auth/background.png'}
            alt='login background'
            width={1768}
            height={1404}
            className='absolute top-0 w-full'
          />
        </div>
      </section>
      <main className='md:px-16 lg:px-5 xl:px-8 2xl:px-10 px-4 py-6 lg:w-[40%] xl:w-[44%] min-h-screen flex flex-col justify-center'>
        <div className='px-6 py-6 w-full flex flex-row justify-between'>
          <Image
            src={'/svg/auth/logo.svg'}
            alt='logo ARA'
            width={71}
            height={33}
            className='sm:w-[80px] md:w-[90px] lg:w-[107px]'
          />
          <div className='flex flex-row'>
            <div className='hidden items-center justify-center lg:relative w-10 h-10 rounded-full border-2 border-whites-1100'>
              <FaArrowLeft className='text-whites-1100 w-[14px] h-[10.987px]' />
            </div>
            <div className='hidden items-center justify-center lg:relative w-10 h-10 rounded-full border-2 border-whites-1100'>
              <FaArrowRight className='text-whites-1100 w-[14px] h-[10.987px]' />
            </div>
          </div>
        </div>
        <div className='lg:px-4 xl:px-12 2xl:px-14'>{children}</div>
      </main>
    </div>
  );
}
