// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import ThrowBack from '@/components/layouts/ThrowBack';
import Typography from '@/components/Typography';

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <Typography
          font='poppins'
          weight='extrabold'
          variant='h1'
          as='h1'
          color='warning'
        >
          update app page ARA 5.0 @@
        </Typography>
        <Typography font='baloo' weight='semibold' variant='h1'>
          update app page ARA 5.0 @@ semibold
        </Typography>
        <Typography font='baloo' weight='bold' variant='h1'>
          update app page ARA 5.0 @@ bold
        </Typography>
        <ThrowBack />
        <Footer />
      </div>
    </>
  );
}
