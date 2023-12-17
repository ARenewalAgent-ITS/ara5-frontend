import { Metadata } from 'next';
import React from 'react';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import ContinueOlimp from '@/containers/olimpPage/ContinueOlimp';
import LandingOlimp from '@/containers/olimpPage/LandingOlimp';

export const metadata: Metadata = {
  title: 'OLIMPIT | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <LandingOlimp />
      <ContinueOlimp />
      <Footer />
    </>
  );
}
