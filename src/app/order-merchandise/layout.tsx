import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export const metadata: Metadata = {
  title: 'Order Merchandise | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function OrderMerchandiseLayout({
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
        <div className='px-6 py-6 w-full flex flex-row items-center justify-between'>
          <UnstyledLink href='/merch'>
            <Image
              src={'/svg/auth/logo.svg'}
              alt='logo ARA'
              width={71}
              height={33}
              className='sm:w-[80px] md:w-[90px] lg:w-[107px]'
            />
          </UnstyledLink>
        </div>
        {children}
      </main>
    </div>
  );
}
