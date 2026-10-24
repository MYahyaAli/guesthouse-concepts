import {
  Abhaya_Libre,
  Archivo,
  Bricolage_Grotesque,
  Figtree,
  Hanken_Grotesk,
  Karla,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Marcellus,
  Mulish,
} from 'next/font/google';
import type { FontKey, Theme } from '@/content/types';

/*
 * Every theme font, self-hosted by next/font at build time.
 * preload: false because all pages share one route file; browsers only
 * download the faces a page actually uses.
 * next/font needs literal options at each call, so no shared options object.
 */
const libreCaslonDisplay = Libre_Caslon_Display({ weight: '400', subsets: ['latin'], display: 'swap', preload: false });
const libreCaslonText = Libre_Caslon_Text({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'], display: 'swap', preload: false });
const abhayaLibre = Abhaya_Libre({ weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap', preload: false });
const karla = Karla({ subsets: ['latin'], display: 'swap', preload: false });
const marcellus = Marcellus({ weight: '400', subsets: ['latin'], display: 'swap', preload: false });
const mulish = Mulish({ subsets: ['latin'], display: 'swap', preload: false });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
  display: 'swap',
  preload: false,
});
const figtree = Figtree({ subsets: ['latin'], display: 'swap', preload: false });
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], display: 'swap', preload: false });

export const fonts: Record<FontKey, { style: { fontFamily: string } }> = {
  libreCaslonDisplay,
  libreCaslonText,
  hankenGrotesk,
  abhayaLibre,
  karla,
  marcellus,
  mulish,
  bricolageGrotesque,
  figtree,
  archivo,
};

/** CSS custom properties for a theme's three font roles, matching the Tailwind @theme tokens. */
export function fontVars(theme: Theme): Record<string, string> {
  return {
    '--font-display': fonts[theme.fonts.display].style.fontFamily,
    '--font-text': fonts[theme.fonts.text].style.fontFamily,
    '--font-ui': fonts[theme.fonts.ui].style.fontFamily,
  };
}
