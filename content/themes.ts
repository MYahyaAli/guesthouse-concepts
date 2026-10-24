import type { Property, Theme, ThemeColors, ThemeKey } from './types';

/**
 * One theme per Tier A property, plus `standard` for Tier B.
 * Every text pair here passes WCAG AA (4.5:1): ink and inkSoft on bg and
 * surface, onAccent on accent and accentDeep, accent on bg (links).
 * Re-check with any new colour.
 */
export const themes: Record<ThemeKey, Theme> = {
  'galle-veranda': {
    key: 'galle-veranda',
    label: 'Galle veranda (Small House)',
    colors: {
      bg: '#F3F4F2',
      surface: '#FFFFFF',
      ink: '#1C2630',
      inkSoft: '#55606B',
      line: '#DADFDE',
      accent: '#1F5A86',
      accentDeep: '#174769',
      onAccent: '#FFFFFF',
      highlight: '#B9603C',
      motif: 'rgba(94, 116, 134, 0.22)',
      photoBg: '#D5DBDB',
    },
    fonts: { display: 'libreCaslonDisplay', text: 'libreCaslonText', ui: 'hankenGrotesk' },
    motif: 'lattice',
    direction:
      'The approved reference. Whitewashed walls, grey-blue shutters and the wooden lattice panels over the doors. ' +
      'Quiet, literary and spacious: big Caslon display type, serif body copy, a clean grotesque for the interface. ' +
      'The lattice sits behind the WhatsApp composer; the room size tiles use the terracotta of the roof tiles. ' +
      'Port reference/small-house-concept.html as closely as you can.',
  },

  'fort-pedlar': {
    key: 'fort-pedlar',
    label: 'Fort, Pedlar Street (Khalid’s Guest House)',
    colors: {
      bg: '#ECEDEA',
      surface: '#FFFFFF',
      ink: '#1D2027',
      inkSoft: '#545A62',
      line: '#D5D8D3',
      accent: '#2448A8',
      accentDeep: '#1B3784',
      onAccent: '#FFFFFF',
      highlight: '#6B3F26',
      motif: 'rgba(36, 72, 168, 0.28)',
      photoBg: '#D6D9D4',
    },
    fonts: { display: 'abhayaLibre', text: 'karla', ui: 'karla' },
    displayStyle: { fontWeight: 600, letterSpacing: '-0.01em' },
    motif: 'arches',
    direction:
      'Taken from the house itself: cobalt-blue columns on a pale lime-washed front, dark carved wood, and a hallway of white arches. ' +
      'Cobalt is the only strong colour; the wood brown is for small details. ' +
      'Abhaya Libre, a serif designed in Sri Lanka, for headings; Karla for everything else. ' +
      'The motif is the arch: photos framed with semicircular tops, as if seen through the hallway.',
  },

  'kandy-hill': {
    key: 'kandy-hill',
    label: 'Kandy hills (Villa 49)',
    colors: {
      bg: '#EEF1EC',
      surface: '#FFFFFF',
      ink: '#1F2A22',
      inkSoft: '#536057',
      line: '#D3DAD2',
      accent: '#9E2B25',
      accentDeep: '#7E201B',
      onAccent: '#FFFFFF',
      highlight: '#E0A33A',
      motif: '#2F4A35',
      photoBg: '#D4DBD3',
    },
    fonts: { display: 'marcellus', text: 'mulish', ui: 'mulish' },
    motif: 'ridgelines',
    direction:
      'Morning mist over green hills, seen from the rooftop terrace, and rooms in deep reds and golds. ' +
      'A pale mist background, hill-green ink tones, Kandyan red for buttons and saffron for small accents. ' +
      'Marcellus (a classical, carved-stone feel) for headings, Mulish for text. ' +
      'The motif is layered hill ridgelines, drawn irregular like real ridges, never sine waves.',
  },

  'mirissa-garden': {
    key: 'mirissa-garden',
    label: 'Mirissa garden (Jackie’s Guesthouse)',
    colors: {
      bg: '#EFE8D8',
      surface: '#FBF8F1',
      ink: '#1B2B22',
      inkSoft: '#4D5A4B',
      line: '#D8CFBB',
      accent: '#1F4D3A',
      accentDeep: '#163A2B',
      onAccent: '#FFFFFF',
      highlight: '#D9433B',
      motif: '#B98B57',
      photoBg: '#DCD3BF',
    },
    fonts: { display: 'bricolageGrotesque', text: 'figtree', ui: 'figtree' },
    displayStyle: { fontWeight: 700, letterSpacing: '-0.02em' },
    motif: 'weave',
    direction:
      'A tropical garden with a yoga shala, rattan lamps over the tables and a bar hut. Relaxed and warm, never hippie cliché. ' +
      'Sand background, deep jungle green as the dominant colour (buttons and the full-bleed day panel), hibiscus red only as a small accent. ' +
      'Bricolage Grotesque for headings, Figtree for text. ' +
      'The motif is a rattan weave, used sparingly: behind the composer and as a thin band under the hero.',
  },

  'weligama-breeze': {
    key: 'weligama-breeze',
    label: 'Weligama breeze (The Bay House)',
    colors: {
      bg: '#F7F7F4',
      surface: '#FFFFFF',
      ink: '#1E2B2E',
      inkSoft: '#52616A',
      line: '#DDE1DE',
      accent: '#0F6E6B',
      accentDeep: '#0B5552',
      onAccent: '#FFFFFF',
      highlight: '#C0673F',
      motif: '#C0673F',
      photoBg: '#DCE1DE',
    },
    fonts: { display: 'archivo', text: 'archivo', ui: 'archivo' },
    displayStyle: { fontWeight: 700, fontStretch: '125%', letterSpacing: '-0.015em' },
    motif: 'breeze-block',
    direction:
      'White cottages, a garden, teal details and terracotta breeze-block walls that glow at night. Crisp and modern. ' +
      'Whitewash background, surf teal for buttons, terracotta only in the breeze-block motif. ' +
      'Archivo throughout, with headings at full width (font-stretch 125%) for a confident, surf-town feel. ' +
      'The motif is the breeze block: one repeating SVG tile, behind the composer and as a strip under the hero.',
  },

  standard: {
    key: 'standard',
    label: 'Standard (Tier B)',
    colors: {
      bg: '#F5F5F2',
      surface: '#FFFFFF',
      ink: '#1D2329',
      inkSoft: '#575F68',
      line: '#DCDEDA',
      accent: '#24564F',
      accentDeep: '#1B423C',
      onAccent: '#FFFFFF',
      highlight: '#D98E3A',
      motif: '#DCDEDA',
      photoBg: '#DADDD8',
    },
    fonts: { display: 'hankenGrotesk', text: 'hankenGrotesk', ui: 'hankenGrotesk' },
    displayStyle: { fontWeight: 650, letterSpacing: '-0.025em' },
    motif: 'none',
    direction:
      'The same components and the same care as Tier A, without a bespoke motif. ' +
      'Each property brings its own accent colour (themeOverrides) taken from its photos. ' +
      'Hanken Grotesk throughout: tight, heavy headings and an easy reading size for text. ' +
      'Let the photos carry the page.',
  },
};

/** The property's theme with its overrides merged in. */
export function themeFor(property: Pick<Property, 'theme' | 'themeOverrides'>): Theme {
  const base = themes[property.theme];
  return { ...base, colors: { ...base.colors, ...property.themeOverrides } };
}

/** CSS custom properties for a theme's colours, named to match the Tailwind @theme tokens. */
export function colorVars(colors: ThemeColors): Record<string, string> {
  return {
    '--color-bg': colors.bg,
    '--color-surface': colors.surface,
    '--color-ink': colors.ink,
    '--color-ink-soft': colors.inkSoft,
    '--color-line': colors.line,
    '--color-accent': colors.accent,
    '--color-accent-deep': colors.accentDeep,
    '--color-on-accent': colors.onAccent,
    '--color-highlight': colors.highlight,
    '--color-motif': colors.motif,
    '--color-photo-bg': colors.photoBg,
  };
}
