// TESTING LAYOUT PAGE && EXAMPLE LAYOUT FOR ROUTE APP
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard ComingSoon',
  description: 'A RENEWAL AGENT 5.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
