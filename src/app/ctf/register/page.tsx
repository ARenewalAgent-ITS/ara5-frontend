import React from 'react';

import CloseRegist from '@/containers/closereg/CloseRegist';

export default function CtfOlimp() {
  return (
    <>
      <CloseRegist />
    </>
  );
}

// 'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import React from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// import CloseRegist from '@/containers/closereg/CloseRegist';
// import CtfPembayaranSection from '@/containers/register/ctf/CtfPembayaranSection';
// import CtfRegisterSection from '@/containers/register/ctf/CtfRegisterSection';
// import useCountdown from '@/hooks/useCountdown';
// import clsxm from '@/lib/clsxm';

// export default function CtfOlimp() {
//   const [days, hours, minutes, seconds] = useCountdown(new Date('2024-01-20'));
//   const [closeReg, setCloseReg] = useState(false);
//   const [isRegisterStep, setIsRegisterStep] = React.useState(true);

//   const router = useRouter();
//   const handleBack = () => {
//     router.back();
//   };

//   const handleRegistrationComplete = () => {
//     setIsRegisterStep(false);
//   };

//   const goToPreviousStep = () => {
//     if (!isRegisterStep) {
//       setIsRegisterStep(true);
//     }
//   };

//   useEffect(() => {
//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//       setCloseReg(true);
//     }
//   }, [days, hours, minutes, seconds]);

//   return (
//     <>
//       {closeReg ? (
//         <>
//           <CloseRegist />
//         </>
//       ) : (
//         <>
//           <div className='px-6 py-6 w-full flex flex-row items-center justify-between'>
//             <div onClick={handleBack} style={{ cursor: 'pointer' }}>
//               <Image
//                 src={'/svg/auth/logo.svg'}
//                 alt='logo ARA'
//                 width={71}
//                 height={33}
//                 className='sm:w-[80px] md:w-[90px] lg:w-[107px]'
//               />
//             </div>
//             <div className='flex gap-2'>
//               <div
//                 onClick={goToPreviousStep}
//                 className={clsxm(
//                   'hidden items-center justify-center lg:flex w-10 h-10 rounded-full border-2 border-whites-1100 cursor-pointer',
//                   !isRegisterStep ? '' : 'opacity-50 cursor-not-allowed'
//                 )}
//               >
//                 <FaArrowLeft className='text-whites-1100 w-[13.5px]' />
//               </div>
//               <div
//                 className={clsxm(
//                   'hidden items-center justify-center lg:flex w-10 h-10 rounded-full border-2 border-whites-1100 cursor-pointer',
//                   'opacity-50 cursor-not-allowed'
//                 )}
//               >
//                 <FaArrowRight className='text-whites-1100 w-[13.5px]' />
//               </div>
//             </div>
//           </div>
//           <div className={clsxm(isRegisterStep ? 'block' : 'hidden')}>
//             <CtfRegisterSection onNextStep={handleRegistrationComplete} />
//           </div>
//           <div className={clsxm(!isRegisterStep ? 'block' : 'hidden')}>
//             <CtfPembayaranSection />
//           </div>
//         </>
//       )}
//     </>
//   );
// }
