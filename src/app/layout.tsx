import type { Metadata } from 'next';
import '../index.css';

// Force rebuild of app layout to clear Tailwind CSS compilation caches
export const metadata: Metadata = {
  title: 'TAT Media & Event',
  description: 'Event and media ecosystem for strategic business experiences.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
