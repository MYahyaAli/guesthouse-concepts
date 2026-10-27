import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website concepts by M Yahya',
  robots: { index: false, follow: false },
  // Without a declared icon the browser asks for /favicon.ico, which the [slug] route can't serve.
  // Property pages replace this with their own letter icon.
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1D2329"/></svg>',
    )}`,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // suppressHydrationWarning: browser extensions add attributes to <html> before React loads.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
