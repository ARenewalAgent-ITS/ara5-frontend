import { Metadata } from 'next';
import React from 'react';

interface SEOProps {
  metadata?: Metadata;
  title?: string;
  description?: string;
}

export default function SEO({ metadata, title, description }: SEOProps) {
  const pageTitle = title ? `${title} | ${metadata?.title}` : metadata?.title;

  return (
    <>
      <title>{pageTitle as string}</title>
      <meta
        name='description'
        content={description || metadata?.description || ''}
      />
      <link rel='canonical' href={metadata?.metadataBase?.toString() || ''} />
      <meta
        property='og:url'
        content={(metadata?.openGraph?.url as string) || ''}
      />
      <meta
        property='og:title'
        content={(metadata?.openGraph?.title as string) || ''}
      />
      <meta
        property='og:description'
        content={metadata?.openGraph?.description || ''}
      />
      <meta name='twitter:creator' content={metadata?.twitter?.creator || ''} />
      <meta
        name='twitter:title'
        content={(metadata?.twitter?.title as string) || ''}
      />
      <meta
        name='twitter:description'
        content={metadata?.twitter?.description || ''}
      />
    </>
  );
}
