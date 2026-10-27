import type { Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { site } from '@/content/site';

/*
 * The root screen, styled after the portfolio (site.conceptLink): near-black,
 * JetBrains Mono, mint accent. It never lists or links to the properties.
 */
const mono = JetBrains_Mono({ weight: ['400', '500', '600', '800'], subsets: ['latin'], display: 'swap' });

const INK = '#1C1C22';
const MINT = '#00FF99';

export const viewport: Viewport = { themeColor: INK };

/** The portfolio's dashed ring, drawn as an SVG: uneven dashes, slowly turning. */
function Ring() {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className="absolute inset-0 size-full animate-[spin_40s_linear_infinite] motion-reduce:animate-none">
      <circle
        cx="200"
        cy="200"
        r="196"
        fill="none"
        stroke={MINT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="24 40 10 60 48 30 6 52"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={`${mono.className} flex min-h-svh flex-col bg-[#1C1C22] text-white`}>
      <style>{`html,body{background:${INK}}:root{--color-accent:${MINT}}`}</style>

      <header className="wrap flex w-full items-center justify-between py-8 lg:py-12">
        <a href={site.conceptLink} className="text-[28px]/none font-semibold text-white no-underline lg:text-4xl">
          M<span className="text-[#00FF99]">.</span>Yahya
        </a>
      </header>

      <main className="wrap grid w-full flex-1 content-center items-center gap-14 pt-4 pb-20 lg:grid-cols-[7fr_5fr] lg:gap-20 lg:pb-28">
        <div className="text-center lg:text-left">
          <h1 className="text-[clamp(44px,12vw,88px)]/[1.08] font-semibold tracking-[-.01em]">
            Website concepts
            <span className="block text-[#00FF99]">by {site.conceptBy}</span>
          </h1>
          <a
            href={site.conceptLink}
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#00FF99] bg-[#00FF99] px-8 text-base font-semibold text-[#1C1C22] no-underline transition-colors duration-300 hover:bg-transparent hover:text-[#00FF99] lg:mt-12"
          >
            More of my work
          </a>
        </div>

        <div className="relative mx-auto aspect-square order-first w-[min(64vw,260px)] lg:order-none lg:w-full lg:max-w-[400px]" aria-hidden="true">
          <Ring />
          <div className="absolute inset-[14%] grid place-items-center rounded-full bg-white/[.03]">
            <span className="text-[clamp(72px,22vw,150px)]/none font-extrabold tracking-[-.04em] text-white">
              M<span className="text-[#00FF99]">.</span>Y
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
