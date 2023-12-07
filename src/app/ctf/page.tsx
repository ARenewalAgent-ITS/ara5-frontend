import { Metadata } from 'next';
import React from 'react';

import Navbar from '@/components/layouts/Navbar';
import ContinueCTF from '@/containers/ctfPage/ContinueCTF';
import LandingCTF from '@/containers/ctfPage/LandingCTF';

export const metadata: Metadata = {
  title: 'CTF | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <LandingCTF />
      <ContinueCTF />
    </>
  );
}
