import '@/styles/globals.css';
import '@/styles/nprogress.css';
import 'aos/dist/aos.css';

import dynamic from 'next/dynamic';

const Toast = dynamic(() => import('@/components/Toast'), { ssr: false });

import type { Metadata } from 'next';

import { PoppinsRegular } from '@/lib/font';
import { BalooMedium } from '@/lib/font';

export const metadata: Metadata = {
  title: 'ARA 5.0 READY TO DEVELOPMENT',
  description: 'A RENEWAL AGENT 5.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={(PoppinsRegular.variable, BalooMedium.variable)}>
        <Toast />
        {children}
      </body>
    </html>
  );
}
