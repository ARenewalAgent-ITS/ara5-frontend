import type { Metadata } from 'next';

interface Metadatas extends Metadata {
  titleTemplate?: string;
}

const baseTitle = 'A Renewal Agent ITS';

const config: Metadatas = {
  metadataBase: new URL('https://ara-its.id'),
  title: baseTitle,
  titleTemplate: '%s | A Renewal Agent ITS',
  description:
    'ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2022-2023 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.',
  openGraph: {
    url: 'https://ara-its.id',
    title: baseTitle,
    description:
      'ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2022-2023 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.',
    siteName: 'A Renewal Agent ITS',
    images: [{ url: '/images/og/LogoAra.png' }],
    type: 'website',
    locale: 'in_ID',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ara_its',
    title: baseTitle,
    description:
      'ARA (A Renewal Agent) 5.0 adalah kegiatan yang diselenggarakan oleh HMIT (Himpunan Mahasiswa Teknologi Informasi) ITS periode 2022-2023 yang dimana event ini akan menjadi media untuk menyalurkan minat di bidang IT (teknologi informasi) bagi siswa SMA/SMK dan mahasiswa.',
    site: 'https://twitter.com/ara_its',
    images: [{ url: '/images/og/LogoAra.png' }],
  },
  keywords: ['ara', 'ara its', 'A Renewal Agent ITS'],
  robots: 'index, follow',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
};

export default config;
