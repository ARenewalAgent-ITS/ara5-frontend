import { MdHome } from 'react-icons/md';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import Image from 'next/image';
import clsxm from '@/lib/clsxm';

function HomeButton() {
  return (
    <ButtonLink
      href='/'
      variant='primary'
      leftIcon={MdHome}
      leftIconClassName={clsxm('w-[20px] text-white')}
      className={clsxm('py-2 px-4 rounded m-8')}
    >
      <Typography
        weight='bold'
        font='poppins'
        className={clsxm('text-whites-100')}
      >
        Home
      </Typography>
    </ButtonLink>
  );
}

export default function ComingSoon() {
  return (
    <>
      <div>
        <div className='fixed w-full z-[101]'>
          <Navbar />
        </div>
        <div className='relative w-full h-screen overflow-hidden'>
          <Image
            src={'/svg/comingsoon/bg_comingsoon.svg'}
            layout='fill'
            objectFit='cover'
            alt='coming soon background'
            className='absolute inset-0 svg-background filter scale-110 blur-md brightness-105'
          />
        </div>

        <div className='content absolute flex flex-col items-center justify-center inset-0'>
          <div className='text-center'>
            <Typography
              variant='h3'
              weight='bold'
              color='blue'
              className='tracking-wide text-primary-700 text-3xl sm:text-4xl md:text-5xl lg:text-7xl [text-shadow:0px_4px_4px_#00000040] inline-block'
            >
              COMING SOON!!
            </Typography>
          </div>
          <HomeButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
