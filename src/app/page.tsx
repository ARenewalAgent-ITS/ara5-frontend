// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';

import SponsorSection from '@/components/containers/SponsorSection';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import Typography from '@/components/Typography';

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <Typography
          weight='regular'
          variant='h1'
          as='h1'
          color='warning'
          className='font-poppins'
        >
          update app page ARA 5.0 @@
        </Typography>
        <Typography font='baloo' weight='semibold' variant='h1'>
          update app page ARA 5.0 @@ semibold
        </Typography>
        <Typography font='baloo' weight='bold' variant='h1'>
          update app page ARA 5.0 @@ bold
        </Typography>
        <SponsorSection />
        <Footer />
      </div>
    </>
  );
}
