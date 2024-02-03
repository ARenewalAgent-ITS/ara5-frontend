import React from 'react';

import BerkasPendaftaran from '@/app/dashboard/user/__components/BerkasPendaftaran';
import DashboardUserHeader from '@/app/dashboard/user/__containers/DashboardUserHeader';
import { useDashboardUser } from '@/app/dashboard/user/__hooks/DashboardUser.hooks';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';

export default function DashboardUserPage() {
  const { userData, event, refetchData } = useDashboardUser();
  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <div className='min-h-screen flex flex-col gap-6 px-2 md:px-4 py-6 pb-20'>
          {userData && event && (
            <DashboardUserHeader userData={userData} event={event} />
          )}
          <div className='w-full h-full flex mt-5 justify-center md:justify-start gap-6 md:gap-9 mx-auto'>
            {userData && (
              <BerkasPendaftaran
                userData={userData}
                refetchData={refetchData}
              />
            )}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
