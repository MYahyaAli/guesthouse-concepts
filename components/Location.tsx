import type { Property } from '@/content/types';
import { Pairs } from './Pairs';
import { prose, secHead, section, textLink } from './styles';

export function Location({ p }: { p: Property }) {
  const { location, map } = p;
  const q = encodeURIComponent(map.query);
  const directions =
    `https://www.google.com/maps/dir/?api=1&destination=${q}` +
    (map.placeId ? `&destination_place_id=${encodeURIComponent(map.placeId)}` : '');
  const embed = `https://www.google.com/maps?q=${q}&z=16&output=embed`;

  return (
    <section
      id="location"
      aria-labelledby="loc-title"
      className={`${section} wrap grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-[72px]`}
    >
      <div>
        <h2 id="loc-title" className={secHead}>
          {location.title}
        </h2>
        <p className={prose}>{location.text}</p>
        {location.walks.length > 0 ? <Pairs rows={location.walks} /> : <div className="h-5" />}
        <a className={textLink} href={directions} target="_blank" rel="noopener">
          Get directions in Google Maps
        </a>
      </div>
      <iframe
        className="block aspect-[4/3] w-full border-0 bg-photo-bg lg:aspect-[16/11]"
        title={`Map showing ${p.fullName}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={embed}
      />
    </section>
  );
}
