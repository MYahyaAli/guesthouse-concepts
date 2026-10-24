'use client';

import { NextIcon, PrevIcon } from './icons';

const navBtn =
  'grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink hover:border-ink [&_svg]:size-[18px]';

/** Previous/next buttons for the photo strip, desktop only. */
export function GalleryNav({ stripId }: { stripId: string }) {
  const scroll = (dir: number) => {
    const strip = document.getElementById(stripId);
    if (!strip) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    strip.scrollBy({ left: dir * strip.clientWidth * 0.9, behavior: reduce ? 'auto' : 'smooth' });
  };
  return (
    <div className="mb-[22px] hidden gap-2 lg:flex">
      <button type="button" className={navBtn} aria-label="Previous photos" aria-controls={stripId} onClick={() => scroll(-1)}>
        <PrevIcon />
      </button>
      <button type="button" className={navBtn} aria-label="Next photos" aria-controls={stripId} onClick={() => scroll(1)}>
        <NextIcon />
      </button>
    </div>
  );
}
