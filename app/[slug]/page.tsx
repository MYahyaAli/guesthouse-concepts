import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Band } from '@/components/Band';
import { ConceptBanner } from '@/components/ConceptBanner';
import { Day } from '@/components/Day';
import { Enquiry } from '@/components/Enquiry';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Location } from '@/components/Location';
import { Rooms } from '@/components/Rooms';
import { StickyCta } from '@/components/StickyCta';
import { getProperty, properties } from '@/content/index';
import { ogImageOf } from '@/content/photos';
import { site } from '@/content/site';
import { colorVars, themeFor } from '@/content/themes';
import type { Theme } from '@/content/types';
import { fontVars } from '@/lib/fonts';

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

async function propertyFrom(params: PageProps<'/[slug]'>['params']) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();
  return p;
}

/** The name's first letter in onAccent on accent. */
function iconFor(name: string, theme: Theme): string {
  const letter = name.trim().charAt(0).toUpperCase();
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="12" fill="${theme.colors.accent}"/>` +
    `<text x="32" y="45" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="${theme.colors.onAccent}">${letter}</text>` +
    `</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export async function generateMetadata({ params }: PageProps<'/[slug]'>): Promise<Metadata> {
  const p = await propertyFrom(params);
  const theme = themeFor(p);
  const title = `${p.name}, ${p.area} (website concept)`;
  const description = `Website concept for ${p.fullName}, ${p.area}. Not the official site.`;
  const og = ogImageOf(p.slug);
  const images = og ? [{ url: og.path, width: og.width, height: og.height, alt: p.hero.alt }] : undefined;
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: { title, description, type: 'website', url: `/${p.slug}/`, images },
    twitter: { card: 'summary_large_image', title, description, images },
    icons: { icon: iconFor(p.name, theme) },
  };
}

export async function generateViewport({ params }: PageProps<'/[slug]'>): Promise<Viewport> {
  const p = await propertyFrom(params);
  return { themeColor: themeFor(p).colors.bg, viewportFit: 'cover' };
}

function themeCss(theme: Theme): string {
  const vars = { ...colorVars(theme.colors), ...fontVars(theme) };
  let css = `:root{${Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')}}`;
  const d = theme.displayStyle;
  if (d) {
    const rules = [
      d.fontWeight && `font-weight:${d.fontWeight}`,
      d.fontStretch && `font-stretch:${d.fontStretch}`,
      d.letterSpacing && `letter-spacing:${d.letterSpacing}`,
    ].filter(Boolean);
    css += `.display-style{${rules.join(';')}}`;
  }
  return css;
}

export default async function PropertyPage({ params }: PageProps<'/[slug]'>) {
  const p = await propertyFrom(params);
  const theme = themeFor(p);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: themeCss(theme) }} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ConceptBanner name={p.name} />
      <Header p={p} />
      <main id="main">
        <Hero p={p} />
        <Intro p={p} />
        {p.day && <Day day={p.day} />}
        <Rooms p={p} />
        <Gallery p={p} />
        <Location p={p} />
        {p.band && <Band photo={p.band} />}
        <Enquiry p={p} motif={theme.motif} />
      </main>
      <Footer p={p} />
      <StickyCta />
    </>
  );
}
