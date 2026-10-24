import bayHouse from './properties/bay-house';
import collegeHouse from './properties/college-house';
import jackies from './properties/jackies';
import khalids from './properties/khalids';
import mms from './properties/mms';
import mountBay from './properties/mount-bay';
import orangeHouse from './properties/orange-house';
import smallHouse from './properties/small-house';
import villa49 from './properties/villa-49';
import type { Property } from './types';

/** Every property with a content file, ready or not. Tier A first. */
export const allProperties: Property[] = [
  smallHouse,
  khalids,
  villa49,
  jackies,
  bayHouse,
  orangeHouse,
  collegeHouse,
  mountBay,
  mms,
];

/** The properties that get a page. */
export const properties: Property[] = allProperties.filter((p) => p.ready);

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
