import SEO from '@/components/SEO';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO title='Dashboard User' description='Dashboard User ARA 5.0' />
      {children}
    </>
  );
}
