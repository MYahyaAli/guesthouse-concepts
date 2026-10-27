/** Class strings shared by several sections, ported from the reference. */

export const btn =
  'inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-lg border-0 bg-accent px-6 ' +
  'font-ui text-base/none font-semibold text-on-accent no-underline hover:bg-accent-deep ' +
  'aria-disabled:cursor-not-allowed aria-disabled:bg-[#9AA7B1] [&_svg]:size-5 [&_svg]:flex-none';

/** Text link or button. The vertical padding is cancelled by margins: a 44px target without moving anything. */
export const textLink =
  'inline-block -my-3 cursor-pointer border-0 bg-transparent py-3 font-ui text-[15px]/[1.3] font-semibold text-accent ' +
  'underline underline-offset-3 hover:text-accent-deep';

export const section = 'pt-[72px] lg:pt-28';

export const secHead = 'mb-[18px] font-display text-[clamp(36px,8.5vw,56px)]/[1.02] font-normal tracking-[-.005em]';

export const sub = 'mt-9 mb-1 font-text text-[21px]/[1.3] italic';

export const note = 'mt-3.5 font-ui text-sm/[1.45] text-ink-soft';

export const prose = 'max-w-[58ch]';
