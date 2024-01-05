import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import SEO from '@/components/SEO';
import LandingPage from '@/containers/landingPage/LandingPage';
// export const metadata: Metadata = {
//   title: 'Home | A Renewal Agent 5.0',
//   description: 'A RENEWAL AGENT 5.0',
// };
import config from '@/seo.config';

export default function Page() {
  return (
    <>
      <SEO
        metadata={config}
        title='Home'
        description='ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2022-2023 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
      />
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
