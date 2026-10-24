import type { Property } from '@/content/types';
import { GalleryNav } from './GalleryNav';
import { Photo } from './Photo';
import { secHead, section } from './styles';

const caption = 'mt-2 font-ui text-[14.5px]/[1.4] font-medium text-ink-soft';

/** Hidden under two photos. Four or more scroll sideways; two or three sit in a grid. */
export function Gallery({ p }: { p: Property }) {
  const { title, photos } = p.gallery;
  if (photos.length < 2) return null;
  const strip = photos.length >= 4;

  return (
    <section id="around" aria-labelledby="around-title" className={`${section} wrap`}>
      <div className="flex items-end justify-between gap-4">
        <h2 id="around-title" className={secHead}>
          {title}
        </h2>
        {strip && <GalleryNav stripId="gallery-strip" />}
      </div>
      {strip ? (
        <div
          id="gallery-strip"
          tabIndex={0}
          role="region"
          aria-labelledby="around-title"
          className={
            'no-scrollbar mx-[calc(-1*var(--gutter))] mt-2 grid snap-x snap-mandatory auto-cols-[82%] grid-flow-col gap-3 ' +
            'scroll-px-(--gutter) overflow-x-auto px-(--gutter) pb-2.5 ' +
            'lg:mx-0 lg:auto-cols-[calc((100%-24px)/3)] lg:scroll-px-0 lg:px-0'
          }
        >
          {photos.map((photo) => (
            <figure key={photo.src} className="snap-start">
              <Photo photo={photo} className="aspect-[4/3] w-full" />
              {photo.caption && <figcaption className={caption}>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ) : (
        <div className={`mt-2 grid gap-3 ${photos.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {photos.map((photo) => (
            <figure key={photo.src}>
              <Photo photo={photo} className="aspect-[4/3] w-full" />
              {photo.caption && <figcaption className={caption}>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
