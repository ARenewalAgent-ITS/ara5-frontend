import React from 'react';

import ComingSoon from '@/app/comingsoon/page';
import SEO from '@/components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO title='About' description='comingsoon' />
      <ComingSoon />
    </>
  );
}
