import { DefaultSeoProps } from 'next-seo';

const baseTitle = 'A Renewal Agent ITS';

const config: DefaultSeoProps = {
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
    images: [
      {
        url: 'https://ara-its.id/og/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'A Renewal Agent 5.0',
      },
    ],
    type: 'website',
    locale: 'in_ID',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ara_its',
    site: 'https://twitter.com/ara_its',
  },
  defaultTitle: 'ARA (A Renewal Agent) ITS 5.0',
  additionalLinkTags: [
    {
      rel: 'png',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
};

export default config;
