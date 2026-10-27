import { Band } from '@/components/Band';
import { ConceptBanner } from '@/components/ConceptBanner';
import { Enquiry } from '@/components/Enquiry';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Location } from '@/components/Location';
import { Rooms } from '@/components/Rooms';
import { StickyCta } from '@/components/StickyCta';
import p from '@/content/small-house';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ConceptBanner name={p.name} />
      <Header p={p} />
      <main id="main">
        <Hero p={p} />
        <Intro p={p} />
        <Rooms p={p} />
        <Gallery p={p} />
        <Location p={p} />
        <Band photo={p.band} />
        <Enquiry p={p} />
      </main>
      <Footer p={p} />
      <StickyCta />
    </>
  );
}
