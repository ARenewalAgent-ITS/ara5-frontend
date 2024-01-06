import React from 'react';

import SEO from '@/components/SEO';
import NotFound from '@/containers/404/page';

export default function NotFoundPage() {
  return (
    <>
      <SEO title='Not Found' description='Page Not Found' />
      <NotFound />
    </>
  );
}
