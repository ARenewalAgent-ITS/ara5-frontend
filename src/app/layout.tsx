'use client';
import '@/styles/globals.css';
import '@/styles/nprogress.css';
import 'aos/dist/aos.css';

import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { Baloo_Da_2, Poppins } from 'next/font/google';
import { DefaultSeo } from 'next-seo';

import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import SEO from '@/seo.config';

const Toast = dynamic(() => import('@/components/Toast'), { ssr: false });

const poppins = Poppins({
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const baloo = Baloo_Da_2({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-baloo',
});

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
          <Toast />
          <DefaultSeo {...SEO} />
          <div className={clsxm(poppins.variable, baloo.variable)}>
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
