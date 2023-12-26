import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Admin | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
