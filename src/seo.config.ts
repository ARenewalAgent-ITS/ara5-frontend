// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.ara-its.com/',
    siteName: 'SiteName',
    images: [
      {
        url: `https://ara-its.com/images/og/logo.png`,
        width: 1200,
        height: 630,
        alt: 'A Renewal Agent ITS 2023',
      },
    ],
  },
  titleTemplate: '%s | ara ITS 2023',
  description:
    'A Renewal Agent merupakan event tahunan yang diselenggarakan oleh Departemen Teknologi Informasi ITS. More Description.',
  defaultTitle: 'ara ITS 2023',
  additionalLinkTags: [
    {
      rel: 'png',
      href: '/favicon.ico',
    },
  ],
};

export default config;
