import Image from 'next/image';
import { MdHome } from 'react-icons/md';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
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
        as={'h3'}
        weight='bold'
        font='poppins'
        className={clsxm('text-whites-100')}
      >
        Home
      </Typography>
    </ButtonLink>
  );
}

export default function CloseRegist() {
  return (
    <>
      <SEO
        title='Thank You!'
        description='ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
      />
      <>
        <div className='fixed w-full z-[101]'>
          <Navbar />
        </div>
        <div className='relative w-full h-screen overflow-hidden'>
          <Image
            src={'/svg/comingsoon/bg_comingsoon.png'}
            layout='fill'
            objectFit='cover'
            alt='coming soon background'
            className='absolute inset-0 svg-background filter scale-110 blur-md brightness-105'
          />
        </div>

        <div className='content absolute flex flex-col items-center justify-center inset-0'>
          <div className='text-center'>
            <Typography
              as={'h3'}
              variant='h3'
              weight='bold'
              color='blue'
              className='tracking-wide text-primary-700 text-2xl sm:text-4xl md:text-5xl lg:text-7xl [text-shadow:0px_4px_4px_#00000040] inline-block'
            >
              THANK YOU FOR
              <br />
              YOUR PARTICIPATION!
            </Typography>
          </div>
          <HomeButton />
        </div>
      </>
      <Footer />
    </>
  );
}
