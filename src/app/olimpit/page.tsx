import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import SEO from '@/components/SEO';
import ContinueOlimp from '@/containers/olimpPage/ContinueOlimp';
import LandingOlimp from '@/containers/olimpPage/LandingOlimp';

export default function Page() {
  return (
    <div className='overflow-hidden'>
      <SEO
        title='Olimpiade IT'
        description='Olimpiade merupakan kompetisi yang diadakan dalam rangkaian acara ARA 5.0. Olimpiade dalam rangkaian acara ARA 5.0 ditujukan bagi siswa SMA/SMK di seluruh Indonesia. Soal meliputi seputar Kurikulum Departemen Teknologi Informasi akan diberikan kepada peserta kompetisi Olimpiade.'
      />
      <Navbar />
      <LandingOlimp />
      <ContinueOlimp />
      <Footer />
    </div>
  );
}
