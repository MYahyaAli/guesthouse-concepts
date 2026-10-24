/** Who made the concepts, and where the site is deployed. */
export const site = {
  conceptBy: 'M Yahya',
  conceptLink: 'https://myahya-portfolio-six.vercel.app',
  /**
   * Absolute base URL, used for Open Graph images in link previews.
   * Set SITE_URL in .env.production once you know the deployed URL.
   */
  url: process.env.SITE_URL ?? 'http://localhost:3000',
};

/** The footer note on every concept page. */
export function conceptNote(fullName: string): string {
  return `This page is a design concept by ${site.conceptBy} for ${fullName}. It isn't the official website, and the photos come from the property's own listings.`;
}

/** The first line of every WhatsApp enquiry. */
export function greeting(name: string): string {
  return `Hello, I'd like to check availability at ${name}.`;
}
