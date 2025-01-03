export default function RegisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

// 'use client';

// import Image from 'next/image';
// import React from 'react';
// import { useEffect, useState } from 'react';

// import SEO from '@/components/SEO';
// import useCountdown from '@/hooks/useCountdown';

// export default function RegisLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [days, hours, minutes, seconds] = useCountdown(new Date('2024-01-20'));
//   const [closeReg, setCloseReg] = useState(false);

//   useEffect(() => {
//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//       setCloseReg(true);
//     }
//   }, [days, hours, minutes, seconds]);

//   return (
//     <>
//       {closeReg ? (
//         <>{children}</>
//       ) : (
//         <>
//           <div className='w-full min-h-screen bg-whites-100'>
//             <SEO
//               title='Registrasi Olimpiade IT'
//               description='Olimpiade merupakan kompetisi yang diadakan dalam rangkaian acara ARA 5.0. Olimpiade dalam rangkaian acara ARA 5.0 ditujukan bagi siswa SMA/SMK di seluruh Indonesia. Soal meliputi seputar Kurikulum Departemen Teknologi Informasi akan diberikan kepada peserta kompetisi Olimpiade.'
//             />
//             <section className='fixed hidden lg:block lg:w-[60%] xl:w-[56%] right-0 top-0 h-full'>
//               <div className='relative w-full h-full bg-white'>
//                 <Image
//                   src={'/img/auth/background.png'}
//                   alt='login background'
//                   width={1768}
//                   height={1404}
//                   className='absolute top-0 w-full'
//                 />
//               </div>
//             </section>
//             <main className='md:px-16 lg:px-5 xl:px-8 2xl:px-10 px-4 py-6 lg:w-[40%] xl:w-[44%] min-h-screen flex flex-col justify-center'>
//               {children}
//             </main>
//           </div>
//         </>
//       )}
//     </>
//   );
// }
