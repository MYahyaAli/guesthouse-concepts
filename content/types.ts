/**
 * The content contract for one concept site.
 *
 * Every fact in a property file comes from that property's own listings,
 * its own website or its guest reviews (see `sources`). Components render
 * this data as it is. They never add facts, prices, quotes or names.
 */

export type Tier = 'A' | 'B';

export type ThemeKey =
  | 'galle-veranda' // Small House
  | 'fort-pedlar' // Khalid's Guest House
  | 'kandy-hill' // Villa 49
  | 'mirissa-garden' // Jackie's Guesthouse
  | 'weligama-breeze' // The Bay House
  | 'standard'; // every Tier B property

export type FontKey =
  | 'libreCaslonDisplay'
  | 'libreCaslonText'
  | 'hankenGrotesk'
  | 'abhayaLibre'
  | 'karla'
  | 'marcellus'
  | 'mulish'
  | 'bricolageGrotesque'
  | 'figtree'
  | 'archivo';

/** The one memorable design element of a Tier A theme. See CLAUDE.md > Themes and motifs. */
export type Motif = 'lattice' | 'arches' | 'ridgelines' | 'weave' | 'breeze-block' | 'none';

export interface ThemeColors {
  /** Page background. */
  bg: string;
  /** Cards, form fields, the composer. */
  surface: string;
  /** Main text. */
  ink: string;
  /** Secondary text: captions, facts, notes. Must pass 4.5:1 on bg and surface. */
  inkSoft: string;
  /** Hairlines and borders. */
  line: string;
  /** Buttons and links. Must pass 4.5:1 on bg and with onAccent. */
  accent: string;
  /** Button hover. */
  accentDeep: string;
  /** Text on accent. */
  onAccent: string;
  /** Decorative only (size tiles, small marks). Never for text. */
  highlight: string;
  /** Colour of the theme's motif. Decorative only. */
  motif: string;
  /** Shown behind photos while they load. */
  photoBg: string;
}

export interface Theme {
  key: ThemeKey;
  /** Human name for the theme. */
  label: string;
  colors: ThemeColors;
  /** display: h1 and section headings. text: body copy. ui: buttons, labels, captions, small print. */
  fonts: { display: FontKey; text: FontKey; ui: FontKey };
  /** Extra settings for display headings, e.g. Archivo's width axis. */
  displayStyle?: { fontWeight?: number; fontStretch?: string; letterSpacing?: string };
  motif: Motif;
  /** Design direction in plain words. Read it before styling a property in this theme. */
  direction: string;
}

export interface Photo {
  /**
   * Original URL on the property's own listing (Booking.com, Trip.com, Airbnb,
   * Tripadvisor management photos, or Google Maps "By owner").
   * `npm run photos` copies it into public/photos/<slug>/ and the app uses the copy.
   */
  src: string;
  /** What the photo shows, for screen readers. Never empty, never "image of". */
  alt: string;
  /** Short visible caption (gallery, band, room photo rows). */
  caption?: string;
  /** CSS object-position for the crop, e.g. '50% 30%'. Default '50% 50%'. */
  position?: string;
}

export interface Room {
  /** The room type's name as the property lists it. */
  name: string;
  /** Floor area in m², from the property's Booking.com listing. A pair is a range ("21–22 m²"). */
  sizeM2?: number | [number, number];
  photo?: Photo;
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
  /** Unguessable on purpose (name + 4 random characters). Never change it, never list it. */
  slug: string;
  tier: Tier;
  /** false keeps the property out of the build. */
  ready: boolean;
  theme: ThemeKey;
  /** Colour tweaks on top of the theme. Tier B uses this for its own accent. */
  themeOverrides?: Partial<ThemeColors>;

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
    /** Header nav label for this section. Default "The house". */
    navLabel?: string;
    paragraphs: string[];
    photo?: Photo;
  };
  mentions: Mention[];
  /** Small print under the mentions, naming where the themes come from. */
  mentionsSource: string;

  rooms: {
    title: string;
    intro: string;
    /** Draw each room's floor area as a to-scale tile (Small House only). */
    sizeTiles?: boolean;
    /** Room types. Empty when the property doesn't publish them. */
    items: Room[];
    /** Room photos shown as a captioned row, for properties whose room types have no photos. */
    photos?: Photo[];
  };

  /** Jackie's only: the rhythm of a day there, on a full-bleed panel. */
  day?: {
    title: string;
    moments: { when: string; text: string }[];
    photo?: Photo;
  };

  /** Shown when it has two or more photos. */
  gallery: { title: string; photos: Photo[] };
  /** Optional full-width photo between Location and the enquiry form. */
  band?: Photo;

  location: {
    title: string;
    text: string;
    /** [place, how far], e.g. ['Lighthouse Beach', 'About 5 min walk']. Hidden when empty. */
    walks: [string, string][];
  };

  enquiry: {
    intro: string;
    /** Highest number in the Guests select. */
    maxGuests: number;
  };
  /** "Good to know" rows beside the form: [label, value]. Hidden when empty. */
  details: [string, string][];

  /** Extra links for the footer, e.g. the property's Instagram. */
  links?: { label: string; url: string }[];

  /** Where the facts came from. Not rendered. */
  sources: string[];
  /** Things to confirm with the owner. Not rendered; `npm run check` prints them. */
  confirm?: string[];
}
