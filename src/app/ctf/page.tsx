import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import SEO from '@/components/SEO';
import ContinueCTF from '@/containers/ctfPage/ContinueCTF';
import LandingCTF from '@/containers/ctfPage/LandingCTF';

export default function CTFPage() {
  return (
    <div className='overflow-hidden'>
      <SEO
        title='Capture The Flag'
        description='CTF atau Capture the Flag merupakan kompetisi seputar bidang Cyber Security yang ditujukan bagi siswa/i SMA dan mahasiswa/i aktif PTN/PTS se-Indonesia. Para peserta kompetisi CTF dalam rangkaian ARA 5.0 diwajibkan untuk menemukan file tersembunyi dalam bentuk file ataupun string (teks) yang disebut dengan “Flag”.'
      />
      <Navbar />
      <LandingCTF />
      <ContinueCTF />
      <Footer />
    </div>
  );
}
