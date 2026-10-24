import type { Photo as PhotoData } from '@/content/types';
import { Photo } from './Photo';

/** Full-bleed photo between Location and the enquiry form. */
export function Band({ photo }: { photo: PhotoData }) {
  return (
    <figure className="mt-[72px] lg:mt-28">
      <Photo photo={photo} className="h-[58vh] max-h-[720px] min-h-[320px] w-full lg:h-[80vh]" />
      {photo.caption && (
        <figcaption className="wrap pt-2.5 font-ui text-sm/[1.4] font-medium text-ink-soft">{photo.caption}</figcaption>
      )}
    </figure>
  );
}
