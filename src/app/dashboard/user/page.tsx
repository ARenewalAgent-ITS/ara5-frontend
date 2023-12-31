'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';
import Typography from '@/components/Typography';
import ArloCard from '@/containers/dashboardPage/ArloCard';
import BerkasPendaftaran from '@/containers/dashboardPage/BerkasPendaftaran';
import { ApiReturn } from '@/types/api';
import { UserLogin } from '@/types/entities/login';

export default withAuth(DashboardUser, ['authed']);

function DashboardUser() {
  const { data: res, refetch: refetchData } = useQuery<ApiReturn<UserLogin[]>>({
    queryKey: ['/auth/me'],
    staleTime: Infinity,
  });
  const userData = res?.data[0];
  const event = userData?.event;

  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <div className='min-h-screen flex flex-col gap-6 px-2 md:px-4 py-6 pb-20'>
          <div className='mb-1 md:mb-4 mx-auto md:mx-0'>
            <Typography
              as='h6'
              variant='h6'
              className='text-[20px] leading-[24px] text-whites-1100'
              font='poppins'
              weight='bold'
            >
              ARA 5.0 Dashboard
            </Typography>
            <Typography
              as='h4'
              variant='h4'
              weight='bold'
              className='text-[32px] leading-[48px] text-primary-600'
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
          <div className='w-full h-full flex mt-5 justify-center md:justify-start gap-6 md:gap-9 mx-auto'>
            <Typography
              as='h5'
              variant='h5'
              className='text-[24px] leading-[32px] text-whites-1100'
              font='poppins'
              weight='bold'
            >
              {event === 'Olim' ? 'Timeline OlimpIT' : 'Timeline CTF'}
            </Typography>
          </div>
          <div className='w-full h-full flex mt-5 justify-center md:justify-start gap-6 md:gap-9 mx-auto'>
            {userData ? (
              <BerkasPendaftaran
                userData={userData}
                refetchData={refetchData}
              />
            ) : (
              <BerkasPendaftaran refetchData={refetchData} />
            )}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
