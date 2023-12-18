import { Metadata } from 'next';
import React from 'react';

import ComingSoon from '@/app/comingsoon/page';

export const metadata: Metadata = {
  title: 'Login ComingSoon | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function LoginPage() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
