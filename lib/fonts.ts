import { Hanken_Grotesk, Libre_Caslon_Display, Libre_Caslon_Text } from 'next/font/google';

/*
 * Small House's three faces, self-hosted by next/font at build time:
 * Caslon Display for headings, Caslon Text for reading, Hanken Grotesk for the interface.
 */
const display = Libre_Caslon_Display({ weight: '400', subsets: ['latin'], display: 'swap' });
const text = Libre_Caslon_Text({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const ui = Hanken_Grotesk({ subsets: ['latin'], display: 'swap' });

/** CSS custom properties for the three font roles, matching the Tailwind @theme tokens. */
export const fontVars: Record<string, string> = {
  '--font-display': display.style.fontFamily,
  '--font-text': text.style.fontFamily,
  '--font-ui': ui.style.fontFamily,
};
