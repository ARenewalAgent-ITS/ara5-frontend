import { Metadata } from 'next';
import React from 'react';

import LandingPage from '@/containers/landingPage/LandingPage';

export const metadata: Metadata = {
  title: 'Home | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function Page() {
  return (
    <>
      <LandingPage />
    </>
  );
}
