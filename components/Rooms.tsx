import type { Property } from '@/content/types';
import { AskAboutRoom } from './AskAboutRoom';
import { Photo } from './Photo';
import { prose, secHead, section } from './styles';

/** The floor area drawn to scale: a terracotta square inside a dashed 56px frame. */
function SizeTile({ size, largest }: { size: number; largest: number }) {
  const side = Math.round(56 * Math.sqrt(size / largest));
  return (
    <div
      role="img"
      aria-label={`Floor area ${size} square metres`}
      className="col-start-2 row-span-2 row-start-1 grid content-start justify-items-end gap-1.5 font-ui text-[13px]/none font-semibold text-ink-soft"
    >
      <span className="relative size-14 border border-dashed border-ink-soft/55">
        <span className="absolute bottom-0 left-0 bg-highlight" style={{ width: side, height: side }} />
      </span>
      <span aria-hidden="true">{size} m²</span>
    </div>
  );
}

export function Rooms({ p }: { p: Property }) {
  const { rooms } = p;
  const largest = Math.max(...rooms.items.map((r) => r.sizeM2));

  return (
    <section id="rooms" aria-labelledby="rooms-title" className={`${section} wrap`}>
      <h2 id="rooms-title" className={secHead}>
        {rooms.title}
      </h2>
      <p className={prose}>{rooms.intro}</p>
      <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
        {rooms.items.map((r) => (
          <article key={r.name}>
            <Photo photo={r.photo} className="aspect-[3/2] w-full" />
            <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-2 pt-[18px]">
              <h3 className="col-start-1 font-display text-[29px]/[1.12] font-normal">{r.name}</h3>
              <SizeTile size={r.sizeM2} largest={largest} />
              <ul className="col-start-1 mt-0.5 font-ui text-[15.5px]/[1.6] text-ink-soft">
                {r.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <AskAboutRoom room={r.name} className="col-span-full -mt-1 justify-self-start" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
