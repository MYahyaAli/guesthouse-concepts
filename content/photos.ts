import manifestJson from './photos.generated.json';
import type { Photo, Property } from './types';

/** One downloaded photo, written by scripts/fetch-photos.ts. */
export interface PhotoFile {
  /** Path under public/, e.g. /photos/small-house-o64e/3f2a9c1b0d.webp */
  path: string;
  width: number;
  height: number;
}

export interface PhotoManifest {
  /** Keyed by the original remote URL (Photo.src). */
  photos: Record<string, PhotoFile>;
  /** 1200x630 JPEG link preview per property, keyed by slug. */
  og: Record<string, PhotoFile>;
}

export const manifest: PhotoManifest = {
  photos: {},
  og: {},
  ...(manifestJson as Partial<PhotoManifest>),
};

/** Every photo slot on a property's page, with a label for error messages. */
export function photosOf(p: Property): { slot: string; photo: Photo }[] {
  const out: { slot: string; photo: Photo }[] = [{ slot: 'hero', photo: p.hero }];
  if (p.intro.photo) out.push({ slot: 'intro.photo', photo: p.intro.photo });
  p.rooms.items.forEach((r, i) => {
    if (r.photo) out.push({ slot: `rooms.items[${i}].photo`, photo: r.photo });
  });
  (p.rooms.photos ?? []).forEach((photo, i) => out.push({ slot: `rooms.photos[${i}]`, photo }));
  if (p.day?.photo) out.push({ slot: 'day.photo', photo: p.day.photo });
  p.gallery.photos.forEach((photo, i) => out.push({ slot: `gallery.photos[${i}]`, photo }));
  if (p.band) out.push({ slot: 'band', photo: p.band });
  return out;
}

/**
 * The local copy of a photo if `npm run photos` has fetched it, otherwise the
 * remote original (fine in dev; `npm run check` warns before you deploy).
 */
export function resolvePhoto(photo: Photo): { src: string; width?: number; height?: number; local: boolean } {
  const file = manifest.photos[photo.src];
  return file
    ? { src: file.path, width: file.width, height: file.height, local: true }
    : { src: photo.src, local: false };
}

/** The link-preview image for a property, if it has been generated. */
export function ogImageOf(slug: string): PhotoFile | undefined {
  return manifest.og[slug];
}
