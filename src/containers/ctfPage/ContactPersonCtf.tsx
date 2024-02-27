'use client';

import Aos from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { TbBrandWhatsapp } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import LineLogo from '@/components/LineLogo';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { contactCtf } from '@/constants/contacts';
import { TContact } from '@/types/entities/contacts';

interface ContactOptionsProps {
  data: TContact;
  key: string;
}

export default function ContactPersonCtf() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isBlink, setIsBlinked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    setIsBlinked(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
    setIsBlinked(false);
  };

  return (
    <section className='bg-[#0F223A] overflow-hidden relative flex w-full h-full px-10 py-10 md:px-16 md:py-20 lg:px-28 lg:pt-24 lg:pb-40 xl:px-32 xl:pt-28 xl:pb-52 2xl:px-36 2xl:pb-72'>
      <div className='flex z-20 flex-col gap-y-5 md:gap-y-10 '>
        <div className='relative' data-aos='fade-up' data-aos-delay='400'>
          <NextImage
            src={'/img/ctfpage/prizepool/plank.png'}
            alt='plank'
            width={368}
            height={53}
            className='w-[200px] md:w-[368px] lg:w-[418px] relative'
          />
          <Typography
            variant='h6'
            font='poppins'
            weight='bold'
            className='absolute text-whites-1100 text-[12px] left-12 top-1 md:left-[86px] md:top-2 lg:left-28 lg:top-[10px]'
          >
            Contact Person
          </Typography>
        </div>
        <div className='flex flex-col gap-y-4 w-full h-full'>
          {contactCtf.map((data) => (
            <ContactOptions key={data.id_line} data={data} />
          ))}
        </div>
      </div>
      {/* arlo */}
      <NextImage
        src={'/img/ctfpage/contactperson/arlo.png'}
        alt='grass'
        width={114.755}
        height={185.737}
        className='absolute z-10 -bottom-2 w-[114px] md:w-[240px] lg:w-[310px] xl:w-[370px] 2xl:w-[420px] right-3 md:right-11 xl:right-16 2xl:right-20'
        data-aos='fade-left'
        data-aos-delay='400'
      />
      {/* bon fire and lights */}
      <div onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
        <NextImage
          src='/img/ctfpage/contactperson/bonfire.png'
          alt='grass'
          width={56.397}
          height={82.292}
          className='absolute z-10 -bottom-1 md:-bottom-6 xl:-bottom-9 2xl:-bottom-12 w-[56px] md:w-[180px] xl:w-[240px] 2xl:w-[300px] right-36 md:right-72 lg:right-96 2xl:right-[34rem] xl:right-[29rem]'
        />
        {isHovered && (
          <NextImage
            src='/img/ctfpage/contactperson/bonfire-light.png'
            alt='Bonfire Light'
            width={200}
            height={200}
            className={`absolute z-20 -bottom-7 right-[80px] md:right-52 lg:right-64 xl:right-[21.3rem] 2xl:right-[26.5rem] lg:-bottom-11 w-[180px] md:w-[330px] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] ${
              isBlink ? 'blink' : ''
            }`}
          />
        )}
      </div>
      {/* background images */}
      <NextImage
        src={'/img/ctfpage/contactperson/right-bg.png'}
        alt='grass'
        width={236.284}
        height={86.194}
        className='absolute bottom-0 -right-16 w-[236px] md:w-[500px] lg:w-[600px] xl:w-[660px] 2xl:w-[700px] lg:-right-12 xl:-right-16 z-0'
      />
      <NextImage
        src={'/img/ctfpage/contactperson/left-bg.png'}
        alt='grass'
        width={92.75}
        height={211.25}
        className='absolute -bottom-7 left-0 w-[92px] md:-bottom-20 lg:-bottom-28 xl:-bottom-32 md:w-[200px] lg:w-[250px] xl:w-[320px] 2xl:w-[350px]'
      />
    </section>
  );
}

function ContactOptions({ data, key }: ContactOptionsProps) {
  const { name, phone_number, id_line } = data;

  const [lineTooltips, setLineTooltips] = useState<Record<string, boolean>>({});
  const toggleLineTooltip = (contactId: string) => {
    setLineTooltips((prev) => ({ ...prev, [contactId]: !prev[contactId] }));
  };

  return (
    <div
      className='flex flex-col gap-y-3'
      data-aos='fade-up'
      data-aos-delay='400'
      key={key}
    >
      <Typography
        variant='h4'
        font='poppins'
        weight='bold'
        className='text-whites-100 text-[18px] md:text-[40px] md:leading-[60px] leading-6'
      >
        {name}
      </Typography>
      <div className='flex gap-x-3'>
        <Link target='_blank' href={`http://wa.me/${phone_number}`}>
          <Button
            variant='success'
            leftIcon={TbBrandWhatsapp}
            leftIconClassName='text-whites-100'
            size='lg'
          >
            <Typography
              variant='btn'
              font='poppins'
              weight='bold'
              className='text-whites-100 text-[10px] leading-[24px] scale'
            >
              Whatsapp
            </Typography>
          </Button>
        </Link>
        <Button
          variant='success'
          leftIcon={LineLogo}
          leftIconClassName='text-whites-100'
          size='lg'
          className='relative'
          onClick={() => toggleLineTooltip(id_line)}
        >
          <Typography
            variant='btn'
            font='poppins'
            weight='bold'
            className='text-whites-100 text-[10px] leading-[24px]'
          >
            LINE
          </Typography>
          {lineTooltips[id_line] && (
            <>
              <div
                className='absolute top-1 -right-[90px] md:top-0 md:-right-[140px] z-20 bg-success-200 border-[1px] border-[#A7AFB2]
             text-white w-[72px] md:w-28 rounded-[4px] md:py-3'
              >
                <Typography
                  variant='bt'
                  font='poppins'
                  weight='bold'
                  className='text-[10px] leading-[24px] text-whites-1000'
                >
                  {id_line}
                </Typography>
              </div>
              <div
                className='absolute top-[14px] md:top-[22px] -right-6 md:-right-[33px] md:w-1 md:h-1 z-10 w-[3.5px] p-[3.5px] 
              bg-success-200 border-[1px] border-[#A7AFB2] rotate-45'
              />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
