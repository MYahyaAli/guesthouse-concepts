import smallHouse from './properties/small-house';
import type { Property } from './types';

/** Every property with a content file, ready or not. Tier A first. */
export const allProperties: Property[] = [smallHouse];

/** The properties that get a page. */
export const properties: Property[] = allProperties.filter((p) => p.ready);

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
