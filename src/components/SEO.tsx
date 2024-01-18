import { NextSeoProps } from 'next-seo';
import React from 'react';

import config from '@/seo.config';

type SEOProps = {
  title?: string;
  description?: string;
} & NextSeoProps;

export default function SEO({ title, description }: SEOProps) {
  const pageTitle = title ? `${title} | ${config.title}` : config.title;

  return (
    <>
      <title>{pageTitle as string}</title>
      <meta
        name='description'
        content={(description as string) || (config.description as string)}
      />
      <link rel='canonical' href={config.canonical?.toString() || ''} />
      <meta
        property='og:url'
        content={(config.openGraph?.url as string) || ''}
      />
      <meta
        property='og:title'
        content={(config.openGraph?.title as string) || ''}
      />
      <meta
        property='og:description'
        content={(config.openGraph?.description as string) || ''}
      />
      <meta
        name='twitter:site'
        content={(config.twitter?.site as string) || ''}
      />
      <meta
        name='twitter:handle'
        content={(config.twitter?.handle as string) || ''}
      />
      <meta name='twitter:cardType' content={config.twitter?.cardType || ''} />
    </>
  );
}
