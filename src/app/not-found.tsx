import React from 'react';

import SEO from '@/components/SEO';
import NotFound from '@/containers/404/page';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title='Not Found'
        description='Page Not Found | ARA ITS (A Renewal Agent ITS) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2023-2024 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.'
      />
      <NotFound />
    </>
  );
}
