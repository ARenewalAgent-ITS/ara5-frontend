'use client';

import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import CtfPembayaranSection from '@/containers/register/ctf/CtfPembayaranSection';
import CtfRegisterSection from '@/containers/register/ctf/CtfRegisterSection';
import clsxm from '@/lib/clsxm';

export default function CtfOlimp() {
  const [isRegisterStep, setIsRegisterStep] = React.useState(true);
  const [isRegistrationCompleted, setIsRegistrationCompleted] =
    React.useState(false);
  const [isAtLastStep, setIsAtLastStep] = React.useState(false);

  const goToNextStep = () => {
    if (isRegistrationCompleted) {
      setIsRegisterStep(false);
      setIsAtLastStep(true);
    }
  };
  const handleRegistrationComplete = () => {
    setIsRegistrationCompleted(true);
    setIsRegisterStep(false);
  };

  const goToPreviousStep = () => {
    if (!isRegisterStep && isRegistrationCompleted) {
      setIsRegisterStep(true);
      setIsAtLastStep(false);
    }
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
            className={clsxm(
              'hidden items-center justify-center lg:flex w-10 h-10 rounded-full border-2 border-whites-1100 cursor-pointer',
              !isRegisterStep && isRegistrationCompleted
                ? ''
                : 'opacity-50 cursor-not-allowed'
            )}
          >
            <FaArrowLeft className='text-whites-1100 w-[13.5px]' />
          </div>
          <div
            onClick={goToNextStep}
            className={clsxm(
              'hidden items-center justify-center lg:flex w-10 h-10 rounded-full border-2 border-whites-1100 cursor-pointer',
              isAtLastStep ? 'opacity-50 cursor-not-allowed' : ''
            )}
          >
            <FaArrowRight className='text-whites-1100 w-[13.5px]' />
          </div>
        </div>
      </div>
      <div className={clsxm(isRegisterStep ? 'block' : 'hidden')}>
        <CtfRegisterSection onNextStep={handleRegistrationComplete} />
      </div>
      <div className={clsxm(!isRegisterStep ? 'block' : 'hidden')}>
        <CtfPembayaranSection />
      </div>
    </>
  );
}
