// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';

import Card from '@/components/layouts/Card';
import Footer from '@/components/layouts/Footer';
import Typography from '@/components/Typography';
import LandingMiddleSection from '@/containers/LandingMiddleSection';
import LoopTechnaVita from '@/containers/LoopTechnaVita';

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
        <LoopTechnaVita />
        <Footer />
      </div>
    </>
  );
}
