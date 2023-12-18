import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'HMIT IT | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};
import ComingSoon from '@/app/comingsoon/page';

export default function HMITPage() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
