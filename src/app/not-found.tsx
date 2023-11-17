import React from 'react';

import Navbar from '@/components/layouts/Navbar';
import Typography from '@/components/Typography';
import NextImage from '@/components/NextImage';


export default function NotFound () {
  return (
    <>
      <div>
        <Navbar />
        <section className='overflow-hidden text-start relative h-screen w-screen bg-gradient-to-b from-[#A0EDFF] to-white-50'>
        <div className='relative w-screen h-screen md:bg-[length:1500px_400px] sm-bg-[length:808.5px_315px] bg-[length:808.5px_315px] bg-[url("/images/404/bush.svg")] bg-top bg-no-repeat md:mt-[600px] mt-[560px]'>
`       <div className='w-full justify-center flex flex-col'>
        <div className='flex flex-col items-center md:-mt-[470px] -mt-[430px]'>
        <NextImage 
              src={'/img/404/kayu.svg'}
              alt='kayu'
              width={355}
              height={97.87}
              className='md:w-[473px] w-[400px]'/>
        </div>
        <div className='flex flex-col items-center text-center -mt-8'>
        <Typography
                weight='bold'
                font='poppins'
                className='font-poppins text-whites-1100 md:text-[35px] text-[30px]'>
                Oops!
              </Typography>
              <Typography
                weight='extrabold'
                className='font-poppins text-primary-700 md:text-[180px] text-9xl'>
                404
              </Typography>
              <Typography
                weight='bold'
                className='font-poppins text-whites-1100 md:text-[35px] text-[30px]'>
                PAGE NOT FOUND
              </Typography>
              <button className='bg-primary-600 md:py-2 md:px-10 py-1 px-5 rounded m-2'>
              <div className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="mt-1 mr-2">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" 
              fill="#fff"/></svg>
              <Typography weight='bold' className='font-poppins text-whites-100'>
                Home
              </Typography>
              </div>

              </button>
          </div>
          </div>
        
        <div className='relative w-full flex'>
        <NextImage
              src={'/images/404/awan_kiri_besar.svg'}
              alt='background'
              width={238.7}
              height={108.9}
              className='absolute lg:-left-8 md:bottom-72 md:-left-16 md:w-[238px] bottom-96 w-[215px]'/>
            <NextImage
              src={'/images/404/awan_kiri_kecil.svg'}
              alt='background'
              width={109.54}
              height={37.55}
              className='absolute lg:left-36 md:-top-56 md:left-20 md:w-[136.93px] -top-52 -left-5 w-[130px]'/>
            <NextImage
              src={'/images/404/daun_kiri.svg'}
              alt='background'
              width={42.25}
              height={75}
              className='absolute lg:left-28 md:inline-block md:bottom-12 md:left-16 hidden'/>
            <NextImage
              src={'/images/404/awan_kanan_besar.svg'}
              alt='background'
              width={266.93}
              height={83.97}
              className='absolute lg:-right-24 md:bottom-72 md:-right-28 md:w-[266px] bottom-96 right-2 w-[190px]'/>
            <NextImage
              src={'/images/404/awan_kanan_kecil.svg'}
              alt='background'
              width={124.5}
              height={57.47}
              className='absolute lg:right-32 md:-top-56 md:right-20 bottom-28 -right-6'/>
            <NextImage
              src={'/images/404/daun_kanan.svg'}
              alt='background'
              width={36.25}
              height={64.75}
              className='absolute md:bottom-12 md:inline-block md:right-10 hidden'/>    
            <NextImage
              src={'/images/404/panel.svg'}
              alt='background'
              width={306.35}
              height={98.83}
              className='absolute md:-bottom-52 md:-left-10 md:w-[350px] w-[306px] -bottom-40 -left-5'/> 
            <NextImage
              src={'/images/404/dogbush.svg'}
              alt='background'
              width={50}
              height={74}
              className='absolute md:w-[139px] md:top-14 md:right-4 top-24 right-36 w-[65px]'/>   
            <NextImage
              src={'/images/404/baling.svg'}
              alt='background'
              width={284.85}
              height={492.66}
              className='absolute md:w-[284.85px] md:h-[492.66px] md:-top-48 md:-right-4 w-[142.425px] -top-4 -right-0'/>
            <NextImage
              src={'/images/404/stone.svg'}
              alt='background'
              width={117}
              height={64}
              className='absolute lg:right-96 md:top-36 md:right-72 md:w-[117px] md:h-[64px] w-[75px] top-24 right-44'/>  
            <NextImage
              src={'/images/404/bush1.svg'}
              alt='background'
              width={47.5}
              height={15}
              className='absolute md:hidden top-40 -bottom-36 left-48'/>     
            <NextImage
              src={'/images/404/bush2.svg'}
              alt='background'
              width={29}
              height={36}
              className='absolute -bottom-56 md:hidden left-0'/> 
            <NextImage
              src={'/images/404/daun1.svg'}
              alt='background'
              width={27}
              height={23}
              className='absolute w-[30px] bottom-24 left-16 md:hidden'/> 
            <NextImage
              src={'/images/404/daun2.svg'}
              alt='background'
              width={26}
              height={28}
              className='absolute w-[30px] bottom-6 left-20 md:hidden'/>
            <NextImage
              src={'/images/404/daun3.svg'}
              alt='background'
              width={24}
              height={21}
              className='absolute w-[30px] bottom-14 right-20 md:hidden'/>          
          </div>    
        
        </div>
      </section>
      </div>
    </>
  );
} 
