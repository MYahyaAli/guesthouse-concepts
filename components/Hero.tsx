import type { Property } from '@/content/types';
import { Photo } from './Photo';
import { btn } from './styles';

export function Hero({ p }: { p: Property }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="lg:mx-auto lg:grid lg:max-w-(--max) lg:grid-cols-[5fr_7fr] lg:items-end lg:gap-14 lg:px-(--gutter) lg:pt-1"
    >
      <div className="h-[56vh] max-h-[560px] min-h-[340px] overflow-hidden bg-photo-bg lg:h-[min(76vh,700px)] lg:max-h-none">
        <Photo photo={p.hero} eager className="size-full animate-settle motion-reduce:animate-none" />
      </div>
      <div className="px-(--gutter) pt-[26px] lg:order-first lg:px-0 lg:pt-0 lg:pb-7">
        <h1
          id="hero-title"
          className="display-style mb-3.5 font-display text-[clamp(54px,15vw,100px)]/[.92] font-normal tracking-[-.012em]"
        >
          {p.name}
        </h1>
        <p className="mb-6 max-w-[28ch] text-[19.5px]/[1.5] lg:text-[21px]">{p.lede}</p>
        <a id="hero-cta" href="#enquire" className={`${btn} w-full lg:w-auto`}>
          Check availability
        </a>
        {p.rating && (
          <p className="mt-4 font-ui text-[14.5px]/[1.45] font-medium text-ink-soft">
            Rated {p.rating.score.toFixed(1)} out of 5 on{' '}
            <a href={p.rating.url} target="_blank" rel="noopener" className="text-inherit">
              {p.rating.source}
            </a>
            , from {p.rating.count} reviews
          </p>
        )}
      </div>
    </section>
  );
}
