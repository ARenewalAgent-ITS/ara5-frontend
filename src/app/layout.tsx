import '@/styles/globals.css';
import '@/styles/nprogress.css';
import 'aos/dist/aos.css';

import dynamic from 'next/dynamic';

const Toast = dynamic(() => import('@/components/Toast'), { ssr: false });

import type { Metadata } from 'next';

import clsxm from '@/lib/clsxm';
import { poppins } from '@/lib/font';
import { BalooMedium } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Home | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsxm(poppins.className, BalooMedium.variable)}>
        <Toast />
        {children}
      </body>
    </html>
  );
}
