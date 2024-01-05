import SEO from '@/components/SEO';
import config from '@/seo.config';

// export const metadata: Metadata = {
//   title: 'Dashboard User | A Renewal Agent 5.0',
//   description: 'A RENEWAL AGENT 5.0',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO
        metadata={config}
        title='Dashboard User'
        description='Dashboard User ARA 5.0'
      />
      {children}
    </>
  );
}
