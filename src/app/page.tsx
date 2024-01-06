import { Metadata } from 'next';
import React from 'react';

// import Footer from '@/components/layouts/Footer';
// import Navbar from '@/components/layouts/Navbar';
// import LandingPage from '@/containers/landingPage/LandingPage';
import PageMerch from '@/containers/merchPage/PageMerch';

export const metadata: Metadata = {
  title: 'Home | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function Page() {
  return (
    <>
      {/* <Navbar />
      <LandingPage />
      <Footer /> */}
      <PageMerch />
    </>
  );
}
