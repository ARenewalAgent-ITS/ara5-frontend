import Image from 'next/image';
import React from 'react';

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
        {children}
      </main>
    </div>
  );
}