/**
 * The content contract for the Small House site.
 *
 * Every fact comes from the property's own listings or its guest reviews
 * (see `sources`). Components render this data as it is. They never add
 * facts, prices, quotes or names.
 */

export interface Photo {
  /**
   * Original URL on the property's own listing (Booking.com or Trip.com).
   * `npm run photos` copies it into public/photos/<slug>/ and the app uses the copy.
   */
  src: string;
  /** What the photo shows, for screen readers. Never empty, never "image of". */
  alt: string;
  /** Short visible caption (gallery, band). */
  caption?: string;
  /** CSS object-position for the crop, e.g. '50% 30%'. Default '50% 50%'. */
  position?: string;
}

export interface Room {
  /** The room type's name as the property lists it. */
  name: string;
  /** Floor area in m², from the property's Booking.com listing. Drawn to scale as a tile. */
  sizeM2: number;
  photo: Photo;
  /** Two or three short facts, each a fragment without a full stop. */
  facts: string[];
}

export interface Mention {
  /** A theme guests bring up again and again, e.g. "The breakfast". */
  title: string;
  /** Paraphrased in our words. Never a quote. */
  text: string;
}

export interface Property {
  /** Names the photo folder (public/photos/<slug>/). Never change it. */
  slug: string;

  /** Short name: wordmark, h1, WhatsApp message. */
  name: string;
  /** Full listing name: concept note, map title. */
  fullName: string;
  /** Town or district, used in the page title. */
  area: string;
  /** One sentence under the h1. */
  lede: string;

  contact: {
    /** Digits only, country code first. Used for wa.me and tel: links. */
    whatsapp: string;
    phoneDisplay: string;
    address: string[];
  };
  map: {
    /** What Google Maps searches for, in the embed and the directions link. */
    query: string;
    /** Google place ID, added to the directions link. */
    placeId?: string;
    /** The property's Google Maps listing. */
    url: string;
  };
  /** The Google rating, linked to the listing. `checked` is the date it was read (ISO). */
  rating?: { score: number; count: number; source: 'Google'; url: string; checked: string };

  hero: Photo;
  intro: {
    title: string;
    paragraphs: string[];
    photo: Photo;
  };
  mentions: Mention[];
  /** Small print under the mentions, naming where the themes come from. */
  mentionsSource: string;

  rooms: {
    title: string;
    intro: string;
    items: Room[];
  };

  gallery: { title: string; photos: Photo[] };
  /** Full-width photo between Location and the enquiry form. */
  band: Photo;

  location: {
    title: string;
    text: string;
    /** [place, how far], e.g. ['Lighthouse Beach', '6 min walk']. */
    walks: [string, string][];
  };

  enquiry: {
    intro: string;
    /** Highest number in the Guests select. */
    maxGuests: number;
  };
  /** "Good to know" rows beside the form: [label, value]. */
  details: [string, string][];

  /** Where the facts came from. Not rendered. */
  sources: string[];
  /** Things to confirm with the owner. Not rendered; `npm run check -- --confirm` prints them. */
  confirm?: string[];
}
