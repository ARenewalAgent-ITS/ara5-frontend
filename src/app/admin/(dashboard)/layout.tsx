// import type { Metadata } from 'next';

import SEO from '@/components/SEO';

// export const metadata: Metadata = {
//   title: 'Dashboard Admin | A Renewal Agent 5.0',
//   description: 'A RENEWAL AGENT 5.0',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO title='Dashboard Admin' description='Dashboard Admin ARA 5.0' />
      {children}
    </>
  );
}
