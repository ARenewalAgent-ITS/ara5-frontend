import React from 'react';

import ArloCard from '@/app/dashboard/user/__containers/ArloCard';
import Typography from '@/components/Typography';
import { UserLogin } from '@/types/entities/login';

interface DashboardUserHeaderProps {
  userData: UserLogin;
  event: string;
}

export default function DashboardUserHeader({
  userData,
  event,
}: DashboardUserHeaderProps) {
  return (
    <>
      <div className='mb-1 md:mb-4 mx-auto md:mx-0'>
        <Typography
          as='h6'
          variant='h6'
          className='text-[20px] leading-[24px] text-center md:text-start text-whites-1100'
          font='poppins'
          weight='bold'
        >
          ARA 5.0 Dashboard
        </Typography>
        <Typography
          as='h4'
          variant='h4'
          weight='bold'
          className='md:max-w-md lg:max-w-lg sm:max-w-sm line-clamp-1 text-[32px] text-center md:text-start leading-[48px] text-primary-600'
        >
          {userData?.team_name ? `Hi, ${userData?.team_name}` : 'Hi, User!'}
        </Typography>
      </div>
      <div className='w-full h-full flex gap-6 md:gap-9 max-md:justify-center max-xl:flex-wrap max-xl:gap-5 mx-auto container'>
        {event === 'Olim' ? (
          <>
            <ArloCard
              as='link-info'
              variant='blue'
              title='Guidebook OlimpIT'
              caption='its.id/m/GuidebookOlimARA-5'
              addInfo={{
                link: 'https://its.id/m/GuidebookOlimARA-5',
                buttonType: 'download',
              }}
            />
            <ArloCard
              as='link-info'
              variant='green'
              title='Grup WA OlimpIT'
              caption='its.id/m/WAOLIMPARA-5'
              addInfo={{
                link: 'https://its.id/m/WAOLIMPARA-5',
                buttonType: 'wa',
              }}
            />
          </>
        ) : (
          <>
            <ArloCard
              as='link-info'
              variant='blue'
              title='Guidebook CTF'
              caption='its.id/m/GuidebookCTFARA-5'
              addInfo={{
                link: 'https://its.id/m/GuidebookCTFARA-5',
                buttonType: 'download',
              }}
            />
            <ArloCard
              as='link-info'
              variant='green'
              title='Channel Discord CTF'
              caption='its.id/m/DCCTFARA-5'
              addInfo={{
                link: 'https://its.id/m/DCCTFARA-5',
                buttonType: 'dc',
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
