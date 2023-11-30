'use client';

import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import OlimPembayaranSection from '@/containers/register/olimpit/OlimPembayaranSection';
import OlimRegisterSection from '@/containers/register/olimpit/OlimRegisterSection';
import clsxm from '@/lib/clsxm';

export default function RegisterOlimp() {
  const [isRegisterStep, setIsRegisterStep] = React.useState(true);

  const goToNextStep = () => {
    setIsRegisterStep(false);
  };

  const goToPreviousStep = () => {
    setIsRegisterStep(true);
  };
  return (
    <>
      <div className='px-6 py-6 w-full flex flex-row items-center justify-between'>
        <Image
          src={'/svg/auth/logo.svg'}
          alt='logo ARA'
          width={71}
          height={33}
          className='sm:w-[80px] md:w-[90px] lg:w-[107px]'
        />
        <div className='flex gap-2'>
          <div
            onClick={goToPreviousStep}
            className='hidden items-center justify-center lg:flex w-10 h-10 rounded-full border-2 border-whites-1100 cursor-pointer'
          >
            <FaArrowLeft className='text-whites-1100 w-[13.5px]' />
          </div>
          <div
            onClick={goToNextStep}
            className='hidden items-center justify-center lg:flex w-10 h-10 rounded-full border-2 border-whites-1100 cursor-pointer'
          >
            <FaArrowRight className='text-whites-1100 w-[13.5px]' />
          </div>
        </div>
      </div>
      <div className={clsxm(isRegisterStep ? 'block' : 'hidden')}>
        <OlimRegisterSection onNextStep={goToNextStep} />
      </div>
      <div className={clsxm(!isRegisterStep ? 'block' : 'hidden')}>
        <OlimPembayaranSection />
      </div>
    </>
  );
}
