'use client';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';
import { HiOutlineChevronDoubleLeft, HiOutlineMenu } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import Navigation from '@/components/layouts/dashboard/Navigation';
import NextImage from '@/components/NextImage';
import { showToast, SUCCESS_TOAST, WARNING_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import { FetchUser } from '@/hooks/navbarMutation';
import { getToken, removeToken } from '@/lib/cookies';

export default function MobileNavigation() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const router = useRouter();
  const handleLogout = () => {
    removeToken();
    const token = getToken();
    if (token === undefined) {
      showToast('Berhasil Logout', SUCCESS_TOAST);
      router.replace('/login');
    } else if (token !== undefined) {
      showToast(
        'Tunggu beberapa saat dan cobalah untuk Logout lagi!',
        WARNING_TOAST
      );
    }
  };

  const users = FetchUser();
  const role = users?.role;
  let username;
  if (role === 'TEAM') {
    username = users?.data[0]?.team_name;
  }

  return (
    <>
      <div className='bg-gradient-to-b from-primary-600 to-primary-400 sticky top-0 z-40 flex h-20 flex-shrink-0 justify-between lg:hidden'>
        <div className='w-full h-full flex items-center justify-center mb-10'>
          <NextImage
            src='/svg/footer/LogoARA.svg'
            width={110}
            height={52}
            alt='profile'
          />
        </div>
        <button
          type='button'
          className='absolute text-white-50 top-[50%] -translate-y-[50%] h-20 text-white px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-main lg:hidden'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only '>Open sidebar</span>
          <HiOutlineMenu className='h-6 w-6 text-white' aria-hidden='true' />
        </button>
      </div>

      {/* Navigation Dialog */}
      <Transition.Root show={sidebarOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 flex lg:hidden bg-white'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex w-full max-w-full flex-1 flex-col pt-5 pb-4'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 mr-0 pt-8'>
                  <Button
                    variant='primary'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <HiOutlineChevronDoubleLeft className='text-xl text-white' />
                    <span className='sr-only'>Close sidebar</span>
                  </Button>
                </div>
              </Transition.Child>
              <div className='relative flex flex-col items-center justify-center mt-8'>
                <div className='w-full h-full flex items-center justify-center mb-10'>
                  <NextImage
                    src='/images/dashboard/LogoARA.png'
                    width={161}
                    height={75}
                    alt='profile'
                    className=''
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  {role === 'TEAM' && users?.data[0]?.event === 'CTF' ? (
                    <NextImage
                      src={'/images/landpage/profile_ctf.png'}
                      alt='image profile'
                      width={100}
                      height={100}
                    />
                  ) : role === 'TEAM' && users?.data[0]?.event === 'Olim' ? (
                    <NextImage
                      src={'/images/landpage/profile_olimp.png'}
                      alt='image profile'
                      width={100}
                      height={100}
                    />
                  ) : (
                    <FaCircleUser className='text-whites-1100 text-[100px]' />
                  )}
                  <Typography
                    className='text-whites-1100 text-[20px] mt-[25px]'
                    weight='bold'
                    font='poppins'
                  >
                    {role === 'TEAM' ? username : 'Admin ARA'}
                  </Typography>
                </div>
              </div>
              <div className='mt-5 h-0 flex-1 overflow-y-auto mx-12'>
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
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
