// TESTING APP PAGE && EXAMPLE PAGE FOR ROUTE APP

import React from 'react';

import Typography from '@/components/Typography';
import Footer from '@/components/layouts/Footer';

export default function page() {
  return (
    <>
      <div>
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
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <Typography font='cinzel' variant='h1'>
          update app page ARA 5.0
        </Typography>
        <Footer />
      </div>
    </>
  );
}
