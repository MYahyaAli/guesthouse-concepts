import { resolvePhoto } from '@/content/photos';
import type { Photo as PhotoData } from '@/content/types';
import { PhotoImg } from './PhotoImg';

/** Every photo on the page goes through here: the local copy, its size, and the failure fallback. */
export function Photo({ photo, className = '', eager = false }: { photo: PhotoData; className?: string; eager?: boolean }) {
  const { src, width, height } = resolvePhoto(photo);
  return (
    <PhotoImg
      src={src}
      alt={photo.alt}
      width={width}
      height={height}
      position={photo.position}
      className={`bg-photo-bg ${className}`}
      eager={eager}
    />
  );
}
