import type { Metadata } from 'next';
import React from 'react';

// import Navbar from '@/components/layouts/Navbar';
import PageMerch from '@/containers/merchPage/PageMerch';

export const metadata: Metadata = {
  title: 'Merchandise | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function page() {
  return (
    <>
      <PageMerch />
    </>
  );
}
