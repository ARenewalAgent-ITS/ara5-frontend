import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import SEO from '@/components/SEO';
import ContinueOlimp from '@/containers/olimpPage/ContinueOlimp';
import LandingOlimp from '@/containers/olimpPage/LandingOlimp';
import config from '@/seo.config';

// export const metadata: Metadata = {
//   title: 'Olimpiade IT | A Renewal Agent 5.0',
//   description: 'A RENEWAL AGENT 5.0',
// };

export default function Page() {
  return (
    <div className='overflow-hidden'>
      <SEO
        metadata={config}
        title='Olimpiade IT'
        description='Olimpiade IT ARA 5.0'
      />
      <Navbar />
      <LandingOlimp />
      <ContinueOlimp />
      <Footer />
    </div>
  );
}
