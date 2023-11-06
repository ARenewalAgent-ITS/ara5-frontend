// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';

import Navbar from '@/components/layouts/Navbar';
import Typography from '@/components/Typography';
import LandingMiddleSection from '@/containers/LandingMiddleSection';
import Card from '@/components/layouts/Card';
import LoopTechnaVita from '@/containers/LoopTechnaVita';
import Footer from '@/components/layouts/Footer';

export default function page() {
  return (
    <>
      <div>
        <Navbar />
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
