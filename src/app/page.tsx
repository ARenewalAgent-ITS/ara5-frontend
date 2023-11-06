// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';

import Footer from '@/components/layouts/Footer';
import Typography from '@/components/Typography';
import LandingMiddleSection from '@/containers/LandingMiddleSection';
import Card from '@/components/layouts/Card';

export default function page() {
  return (
    <>
      <div>
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <LandingMiddleSection />
        <Card />
        <Footer />
      </div>
    </>
  );
}
