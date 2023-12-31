import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Forgot Password | A Renewal Agent 5.0',
  description: 'A RENEWAL AGENT 5.0',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default RootLayout;
