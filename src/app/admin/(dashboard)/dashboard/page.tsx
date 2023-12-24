'use client';

import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';

export default withAuth(DashboardAdmin, ['all']);
function DashboardAdmin() {
  return (
    <DashboardLayout>
      <section className='dashboard-layout bg-typo-surface'>
        <SEO title='Dashboard Admin' />
        <div className='min-h-screen flex flex-col gap-6 pb-20'>
          <div className='flex justify-between md:flex-row flex-col items-center'>
            <div>
              <Typography
                as='h6'
                variant='h6'
                className='text-[24px] text-whites-1100'
                font='poppins'
                weight='bold'
              >
                ARA 5.0 Dashboard
              </Typography>
              <Typography
                as='h4'
                variant='h4'
                weight='bold'
                className='text-primary-600'
              >
                List Tim CTF
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
