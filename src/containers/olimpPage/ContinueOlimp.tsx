'use client';
import React from 'react';
import { FaLine } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import CountDownOlimp from '@/containers/olimpPage/countdownolim';
import OlimpFaqSection from '@/containers/olimpPage/OlimpFaqSection';
import clsxm from '@/lib/clsxm';

const contacts = [
  { name: 'Etha Felisya Br Purba', whatsapp: 'Whatsapp', line: 'LINE' },
  { name: 'Dian Anggraeni', whatsapp: 'Whatsapp', line: 'LINE' },
];

function ContinueOlimp() {
  return (
    <>
      <div className='relative'>
        <NextImage
          src={'/svg/olimp/left_ground.svg'}
          alt='left'
          width={500}
          height={2431}
          className='w-[30%] absolute left-0 top-0'
        />
        <NextImage
          src={'/svg/olimp/right_ground.svg'}
          alt='right'
          width={529}
          height={2382}
          className='w-[30%] top-0 right-0 absolute'
        />
        <div className='bg-gradient-to-b from-[#D8F4EB] to-[#225B58] to-55%'>
          <div className='relative w-full h-auto py-6 lg:h-[100vh] flex justify-center items-center'>
            <CountDownOlimp />
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#225B58] to-[#0F283A]'>
          <div className='relative w-full h-auto py-12 lg:min-h-[70vh] flex justify-center items-center'>
            <div className='flex justify-center w-full px-6 gap-4'>
              <div className='lg:w-auto w-[40%]'>
                <NextImage
                  src={'/svg/olimp/trophy.svg'}
                  alt='trophy'
                  width={388.4}
                  height={505.83}
                  className='lg:w-[388.4px] w-full'
                ></NextImage>
              </div>
              <div className='lg:w-auto w-[60%]'>
                <NextImage
                  src={'/svg/olimp/pricepool.svg'}
                  alt='trophy'
                  width={377}
                  height={62}
                  className='lg:w-[377px] w-[70%]'
                ></NextImage>
                <Typography
                  font='poppins'
                  variant='h2'
                  className='text-[#FFFFFF] text-3xl font-bold py-2'
                >
                  Golden Ticket
                </Typography>
                <Typography
                  font='poppins'
                  variant='h4'
                  className='text-[#FFFFFF] text-2xl font-bold'
                >
                  + IDR 5.000.000
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#10293B] to-[#0F2138]'>
          <div className='relative md:min-h-[80vh] h-auto py-6'>
            <OlimpFaqSection />
          </div>
        </div>

        <div className='bg-[#0F2138]'>
          <div className='p-8 min-h-[80vh]'>
            <NextImage
              src={'/svg/olimp/cp.svg'}
              alt='right'
              width={426}
              height={62}
            />
            {contacts.map((contact, id) => (
              <div key={id}>
                <Typography
                  font='poppins'
                  variant='h4'
                  className='text-[#FFFFFF] md:text-5xl text-2xl font-semibold pt-12 pb-2'
                >
                  {contact.name}
                </Typography>
                <div className='flex gap-3 pt-4'>
                  <ButtonLink
                    href='#'
                    variant='success'
                    leftIcon={FaWhatsapp}
                    leftIconClassName={clsxm('text-white text-2xl')}
                    className={clsxm('px-3 py-2')}
                  >
                    <Typography
                      font='poppins'
                      variant='t'
                      className='text-[#FFFFFF] font-medium text-xl md:text-2xl'
                    >
                      {contact.whatsapp}
                    </Typography>
                  </ButtonLink>
                  <ButtonLink
                    href='#'
                    variant='success'
                    leftIcon={FaLine}
                    leftIconClassName={clsxm('text-white text-2xl')}
                    className={clsxm('px-3 py-2')}
                  >
                    <Typography
                      font='poppins'
                      variant='t'
                      className='text-[#FFFFFF] font-medium text-xl md:text-2xl'
                    >
                      {contact.line}
                    </Typography>
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>

        <NextImage
          src={'/svg/olimp/mascot.svg'}
          alt='mascot'
          width={895}
          height={734}
          className='absolute bottom-0 right-6 w-[50%]'
        ></NextImage>
      </div>
    </>
  );
}

export default ContinueOlimp;
