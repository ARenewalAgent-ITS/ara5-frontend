// SEO.tsx
import React from 'react';

import config from '@/seo.config';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const pageTitle = title ? `${title} | ${config.title}` : config.title;

  return (
    <>
      <title>{pageTitle as string}</title>
      <meta
        name='description'
        content={(description as string) || (config.description as string)}
      />
      <link rel='canonical' href={config.metadataBase?.toString() || ''} />
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
        name='twitter:creator'
        content={(config.twitter?.creator as string) || ''}
      />
      <meta
        name='twitter:title'
        content={(config.twitter?.title as string) || ''}
      />
      <meta
        name='twitter:description'
        content={config.twitter?.description || ''}
      />
    </>
  );
}
