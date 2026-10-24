import type { Property, Room } from '@/content/types';
import { AskAboutRoom } from './AskAboutRoom';
import { Photo } from './Photo';
import { prose, secHead, section } from './styles';

const sizeText = (s: Room['sizeM2']) => (Array.isArray(s) ? `${s[0]}–${s[1]} m²` : `${s} m²`);
const largestOf = (s: NonNullable<Room['sizeM2']>) => (Array.isArray(s) ? s[1] : s);

/** The reference's to-scale floor-area tile: a highlight square inside a dashed 56px frame. */
function SizeTile({ size, largest }: { size: NonNullable<Room['sizeM2']>; largest: number }) {
  const side = Math.round(56 * Math.sqrt(largestOf(size) / largest));
  const label = Array.isArray(size) ? `${size[0]} to ${size[1]}` : String(size);
  return (
    <div
      role="img"
      aria-label={`Floor area ${label} square metres`}
      className="col-start-2 row-span-2 row-start-1 grid content-start justify-items-end gap-1.5 font-ui text-[13px]/none font-semibold text-ink-soft"
    >
      <span className="relative size-14 border border-dashed border-ink-soft/55">
        <span className="absolute bottom-0 left-0 bg-highlight" style={{ width: side, height: side }} />
      </span>
      <span aria-hidden="true">{sizeText(size)}</span>
    </div>
  );
}

function Facts({ facts }: { facts: string[] }) {
  return (
    <ul className="col-start-1 mt-0.5 font-ui text-[15.5px]/[1.6] text-ink-soft">
      {facts.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}

export function Rooms({ p }: { p: Property }) {
  const { rooms } = p;
  const items = rooms.items;
  const allHavePhotos = items.length > 0 && items.every((r) => r.photo);
  const sizes = items.flatMap((r) => (r.sizeM2 === undefined ? [] : [largestOf(r.sizeM2)]));
  const largest = Math.max(...sizes);

  return (
    <section id="rooms" aria-labelledby="rooms-title" className={`${section} wrap`}>
      <h2 id="rooms-title" className={secHead}>
        {rooms.title}
      </h2>
      <p className={prose}>{rooms.intro}</p>

      {allHavePhotos ? (
        <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {items.map((r) => (
            <article key={r.name}>
              <Photo photo={r.photo!} className="aspect-[3/2] w-full" />
              <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-2 pt-[18px]">
                <h3 className="col-start-1 font-display text-[29px]/[1.12] font-normal">
                  {r.name}
                  {r.sizeM2 !== undefined && !rooms.sizeTiles && (
                    <span className="ml-3 font-ui text-[15px] font-semibold whitespace-nowrap text-ink-soft">
                      {sizeText(r.sizeM2)}
                    </span>
                  )}
                </h3>
                {rooms.sizeTiles && r.sizeM2 !== undefined && <SizeTile size={r.sizeM2} largest={largest} />}
                <Facts facts={r.facts} />
                <AskAboutRoom room={r.name} className="col-span-full -mt-1 justify-self-start" />
              </div>
            </article>
          ))}
        </div>
      ) : (
        items.length > 0 && (
          <ul className="mt-8 border-t border-line">
            {items.map((r) => (
              <li key={r.name} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_auto] sm:gap-x-6">
                <h3 className="font-display text-[23px]/[1.2] font-normal">
                  {r.name}
                  {r.sizeM2 !== undefined && (
                    <span className="ml-3 font-ui text-[15px] font-semibold whitespace-nowrap text-ink-soft">
                      {sizeText(r.sizeM2)}
                    </span>
                  )}
                </h3>
                <div className="sm:row-span-2 sm:self-center">
                  <AskAboutRoom room={r.name} />
                </div>
                <Facts facts={r.facts} />
              </li>
            ))}
          </ul>
        )
      )}

      {!allHavePhotos && rooms.photos && rooms.photos.length > 0 && (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.photos.map((photo) => (
            <figure key={photo.src}>
              <Photo photo={photo} className="aspect-[4/3] w-full" />
              {photo.caption && (
                <figcaption className="mt-2 font-ui text-[14.5px]/[1.4] font-medium text-ink-soft">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
