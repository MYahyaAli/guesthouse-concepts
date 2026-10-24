'use client';

import { useEffect, useRef } from 'react';
import { btn } from './styles';

/** Phones only: shown while neither the hero button nor the enquiry section is on screen. */
export function StickyCta() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById('hero-cta');
    const form = document.getElementById('enquire');
    if (!hero || !form || !('IntersectionObserver' in window)) return;
    const seen = { hero: true, form: false };
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        if (en.target === hero) seen.hero = en.isIntersecting;
        else seen.form = en.isIntersecting;
      }
      bar.current?.classList.toggle('is-shown', !seen.hero && !seen.form);
    });
    io.observe(hero);
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={bar}
      className="sticky-cta fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg/94 px-(--gutter) pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur-[8px] lg:hidden"
    >
      <a className={`${btn} w-full`} href="#enquire">
        Check availability
      </a>
    </div>
  );
}
