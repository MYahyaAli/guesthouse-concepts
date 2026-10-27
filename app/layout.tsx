import type { Metadata, Viewport } from 'next';
import { ogImageOf } from '@/content/photos';
import { site } from '@/content/site';
import p from '@/content/small-house';
import { fontVars } from '@/lib/fonts';
import './globals.css';

// Same values as --color-bg, --color-accent and --color-on-accent in globals.css.
const BG = '#F3F4F2';
const ACCENT = '#1F5A86';
const ON_ACCENT = '#FFFFFF';

/** The name's first letter in on-accent on accent. */
const icon = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="12" fill="${ACCENT}"/>` +
    `<text x="32" y="45" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="${ON_ACCENT}">${p.name.charAt(0)}</text>` +
    `</svg>`,
)}`;

const title = `${p.name}, ${p.area} (website concept)`;
const description = `Website concept for ${p.fullName}, ${p.area}. Not the official site.`;
const og = ogImageOf(p.slug);
const images = og ? [{ url: og.path, width: og.width, height: og.height, alt: p.hero.alt }] : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  // A concept, never indexed. public/_headers adds the X-Robots-Tag header too.
  robots: { index: false, follow: false },
  openGraph: { title, description, type: 'website', url: '/', images },
  twitter: { card: 'summary_large_image', title, description, images },
  icons: { icon },
};

export const viewport: Viewport = { themeColor: BG, viewportFit: 'cover' };

const fontCss = `:root{${Object.entries(fontVars)
  .map(([k, v]) => `${k}:${v}`)
  .join(';')}}`;

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // suppressHydrationWarning: browser extensions add attributes to <html> before React loads.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <style dangerouslySetInnerHTML={{ __html: fontCss }} />
        {children}
      </body>
    </html>
  );
}
