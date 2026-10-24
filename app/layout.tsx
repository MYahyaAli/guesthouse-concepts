import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website concepts by M Yahya',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
