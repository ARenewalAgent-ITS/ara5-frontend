import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import SEO from '@/components/SEO';
import LandingPage from '@/containers/landingPage/LandingPage';
import VotePage from '@/containers/exploitPage/VotePage';

export default function Page() {
  return (
    <>
      <SEO
        title='Home'
        description='ARA ITS (A Renewal Agent ITS) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
      />
      <VotePage />
    </>
  );
}
