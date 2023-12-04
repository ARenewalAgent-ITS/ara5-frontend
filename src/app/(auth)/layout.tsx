import Image from 'next/image';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen bg-whites-100'>
      <section className='fixed hidden lg:block w-2/3 xl:w-[65%] right-0 top-0 h-full'>
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
      <main className='md:px-16 lg:px-14 xl:px-20 2xl:px-24 px-4 py-6 w-full lg:w-1/3 xl:w-[35%] min-h-screen flex flex-col justify-center'>
        <Image
          src={'/svg/auth/logo.svg'}
          alt='logo ARA'
          width={71}
          height={33}
          className='absolute top-5 left-5 lg:top-8 lg:left-8 lg:w-[96px]'
        />
        {children}
      </main>
    </div>
  );
}
