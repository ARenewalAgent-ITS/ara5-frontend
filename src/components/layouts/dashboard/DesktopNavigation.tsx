'use client';

import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';

import Navigation from '@/components/layouts/dashboard/Navigation';
import Typography from '@/components/Typography';
import useAuthStore from '@/store/useAuthStore';

export default function DesktopNavigation() {
  const { logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col bg-typo-white border-2 border-r-whites-800 lg:pt-10 lg:pb-4'>
      <div className='relative flex flex-col items-center justify-center'>
        <div className='w-full h-full flex items-center justify-center mb-10'>
          <NextImage
            src='/images/dashboard/LogoAra.png'
            width={161}
            height={75}
            alt='profile'
            className=''
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <FaCircleUser className='text-whites-1100 text-[100px]' />
          <Typography
            className='text-whites-1100 text-[20px] mt-[25px]'
            weight='bold'
            font='poppins'
          >
            Admin ARA
          </Typography>
        </div>
      </div>

      {/* Sidebar component */}
      <div className='mt-8 flex h-0 flex-1 flex-col px-5 overflow-y-auto'>
        <Navigation />
      </div>

      <div className='mb-16 w-full'>
        <button
          className='relative flex w-3/4 gap-3 border-none justify-center mx-auto hover:brightness-90 bg-danger-600 rounded-md py-2'
          onClick={handleLogout}
        >
          <BiLogOut
            width={20}
            height={20}
            className='w-6 h-6 hover:opacity-100 text-white'
          />
          <Typography
            className='text-white hover:opacity-100 text-[16px]'
            weight='bold'
          >
            Logout
          </Typography>
        </button>
      </div>
    </div>
  );
}
