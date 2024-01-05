import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import SEO from '@/components/SEO';
import ContinueCTF from '@/containers/ctfPage/ContinueCTF';
import LandingCTF from '@/containers/ctfPage/LandingCTF';
import config from '@/seo.config';

export default function CTFPage() {
  return (
    <div className='overflow-hidden'>
      <SEO metadata={config} title='CTF' description='CTF ARA 5.0' />
      <Navbar />
      <LandingCTF />
      <ContinueCTF />
      <Footer />
    </div>
  );
}
