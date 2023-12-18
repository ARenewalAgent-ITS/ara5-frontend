import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Not Found | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

import NotFound from '@/containers/404/page';

export default function NotFoundPage() {
  return (
    <>
      <NotFound />
    </>
  );
}
