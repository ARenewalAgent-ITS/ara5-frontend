import React from 'react';

import Typography from '@/components/Typography';

interface BerkasCardProps {
  title: string;
  children: React.ReactNode;
}

export default function BerkasCard({ title, children }: BerkasCardProps) {
  return (
    <div className='mt-5 bg-primary-400 bg-opacity-10 md:space-y-6 h-fit md:w-[26rem] w-72 rounded-[10.5px] px-7 py-6 md:px-10 md:py-10'>
      <Typography
        as='h6'
        variant='h6'
        weight='bold'
        font='poppins'
        className='text-whites-1100 text-[16px] leading-[24px] mt-3 md:mb-2'
      >
        {title}
      </Typography>
      {children}
    </div>
  );
}
