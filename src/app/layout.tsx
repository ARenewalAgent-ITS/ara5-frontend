// layout.tsx

// Import modul dan komponen yang diperlukan
import '@/styles/globals.css';
import '@/styles/nprogress.css';
import 'aos/dist/aos.css';

// import {
//   QueryClient,
//   QueryClientProvider,
//   QueryOptions,
// } from '@tanstack/react-query';
// import Router from 'next/navigation';
// import { DefaultSeo } from 'next-seo';
// import nProgress from 'nprogress';
import Toast from '@/components/Toast';
import { PoppinsRegular } from '@/lib/font';
import { BalooMedium } from '@/lib/font';
// import { Baloo, Cinzel, Poppins } from '@/lib/font';
// import SEO from '@/seo.config';

// Router.events.on('routeChangeStart', nProgress.start);
// Router.events.on('routeChangeError', nProgress.done);
// Router.events.on('routeChangeComplete', nProgress.done);

// const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
//   const { data } = await api.get(`${queryKey?.[0]}`);
//   return data;
// };
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       queryFn: defaultQueryFn,
//     },
//   },
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <QueryClientProvider client={queryClient}>
    <>
      <Toast />
      {/* <DefaultSeo {...SEO} /> */}
      <div className={(PoppinsRegular.variable, BalooMedium.variable)}>
        {children}
      </div>
    </>
    // </QueryClientProvider>
  );
}
