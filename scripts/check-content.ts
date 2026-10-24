/**
 * Checks content/ against the rules in CLAUDE.md.
 * Errors exit with code 1. Warnings are things to fix before sending a link.
 *
 *   npm run check              errors and warnings
 *   npm run check -- --confirm also list what to confirm with each owner
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { allProperties, properties } from '../content/index';
import { manifest, ogImageOf, photosOf } from '../content/photos';
import { themes } from '../content/themes';
import type { Property } from '../content/types';

const PUBLIC = path.join(process.cwd(), 'public');
const STALE_DAYS = 30;

/** Keys whose values never appear on the page as text. */
const NOT_COPY = new Set([
  'slug', 'tier', 'ready', 'theme', 'themeOverrides', 'src', 'url', 'placeId', 'whatsapp',
  'query', 'checked', 'sources', 'confirm', 'position', 'score', 'count', 'sizeM2', 'maxGuests', 'sizeTiles',
]);

type Report = { errors: string[]; warnings: string[] };

function check(p: Property): Report {
  const errors: string[] = [];
  const warnings: string[] = [];
  const err = (m: string) => errors.push(m);
  const warn = (m: string) => warnings.push(m);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*-[a-z0-9]{4}$/.test(p.slug)) err(`slug "${p.slug}" should be name + "-" + 4 random characters`);
  if (!themes[p.theme]) err(`unknown theme "${p.theme}"`);
  if (p.tier === 'B' && p.theme !== 'standard') warn('Tier B properties normally use the standard theme');
  if (p.tier === 'A' && p.theme === 'standard') warn('Tier A properties normally get their own theme');

  // Contact and map
  if (!/^[1-9]\d{7,14}$/.test(p.contact.whatsapp)) err(`whatsapp "${p.contact.whatsapp}" must be digits only, country code first`);
  if (p.contact.phoneDisplay.replace(/\D/g, '') !== p.contact.whatsapp) err('phoneDisplay and whatsapp are different numbers');
  if (!p.contact.phoneDisplay.startsWith('+')) err('phoneDisplay should start with + and the country code');
  if (!/^https:\/\/(maps\.google\.com|www\.google\.com\/maps)/.test(p.map.url)) err('map.url should be a Google Maps link');
  if (p.map.placeId && !/^ChIJ[A-Za-z0-9_-]{23}$/.test(p.map.placeId)) err(`placeId "${p.map.placeId}" doesn't look like a Google place ID`);

  // Rating
  if (p.rating) {
    const { score, count, url, checked } = p.rating;
    if (score < 1 || score > 5 || count < 1) err('rating score must be 1 to 5 and count at least 1');
    if (!url.startsWith('https://')) err('rating.url must be https');
    const age = (Date.now() - Date.parse(checked)) / 864e5;
    if (Number.isNaN(age)) err(`rating.checked "${checked}" is not a date`);
    else if (age > STALE_DAYS) warn(`Google rating was checked ${Math.floor(age)} days ago: refresh it before sending the link`);
  }

  // Photos
  const srcs = new Map<string, string>();
  const notLocal: string[] = [];
  for (const { slot, photo } of photosOf(p)) {
    if (!photo.src.startsWith('https://')) err(`${slot}: src must be an https URL from the property's own listing`);
    if (photo.alt.trim().length < 8) err(`${slot}: alt text is missing or too short`);
    if (/^(image|photo|picture) of/i.test(photo.alt)) err(`${slot}: alt text shouldn't start with "${photo.alt.split(' ').slice(0, 2).join(' ')}"`);
    if (srcs.has(photo.src)) warn(`${slot}: same photo as ${srcs.get(photo.src)}`);
    srcs.set(photo.src, slot);
    const file = manifest.photos[photo.src];
    if (!file || !existsSync(path.join(PUBLIC, file.path))) notLocal.push(slot);
  }
  if (notLocal.length === srcs.size) warn('photos not downloaded yet (run npm run photos)');
  else if (notLocal.length) warn(`${notLocal.length} of ${srcs.size} photos not downloaded yet: ${notLocal.join(', ')} (run npm run photos)`);
  const og = ogImageOf(p.slug);
  if (p.ready && (!og || !existsSync(path.join(PUBLIC, og.path)))) warn('no link-preview image yet (run npm run photos)');
  if (p.gallery.photos.length === 1) warn('a gallery with one photo is hidden; add a photo or move it elsewhere');

  // Rooms
  if (p.rooms.sizeTiles && p.rooms.items.some((r) => r.sizeM2 === undefined)) err('rooms.sizeTiles needs a size on every room');
  for (const r of p.rooms.items) {
    const sizes = Array.isArray(r.sizeM2) ? r.sizeM2 : r.sizeM2 === undefined ? [] : [r.sizeM2];
    if (sizes.some((s) => !(s > 0))) err(`room "${r.name}": size must be a positive number`);
    if (Array.isArray(r.sizeM2) && r.sizeM2[0] >= r.sizeM2[1]) err(`room "${r.name}": size range must go low to high`);
    if (r.facts.length === 0) warn(`room "${r.name}" has no facts`);
  }
  if (new Set(p.rooms.items.map((r) => r.name)).size !== p.rooms.items.length) err('two room types share a name');

  // Mentions, tables, form
  if (p.mentions.length < 2 || p.mentions.length > 6) err('use 2 to 6 mentions');
  for (const m of p.mentions) if (/["“”]/.test(m.text)) err(`mention "${m.title}" contains quote marks: mentions are paraphrased, never quoted`);
  for (const [a, b] of [...p.details, ...p.location.walks]) if (!a?.trim() || !b?.trim()) err('empty label or value in details or walks');
  if (p.enquiry.maxGuests < 1 || p.enquiry.maxGuests > 20) err('enquiry.maxGuests should be between 1 and 20');

  // Copy rules, on every string that reaches the page
  for (const [where, text] of copyOf(p)) {
    if (/[→·—]/.test(text)) err(`${where}: no arrows, middle dots or em dashes in copy ("${clip(text)}")`);
    if (/\b(LKR|USD|rupees?)\b|\bRs\.?\s?\d|[$€£]\s?\d/i.test(text)) err(`${where}: no prices on the pages ("${clip(text)}")`);
    if (/\b(TODO|TBD|lorem|ipsum)\b/i.test(text)) err(`${where}: placeholder text ("${clip(text)}")`);
    if (/!/.test(text)) warn(`${where}: exclamation mark ("${clip(text)}")`);
    if (/\s{2,}|^\s|\s$/.test(text)) warn(`${where}: stray spaces ("${clip(text)}")`);
  }
  return { errors, warnings };
}

/** Every string that ends up as visible text, with where it came from. */
function copyOf(value: unknown, at = ''): [string, string][] {
  if (typeof value === 'string') return [[at, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => copyOf(v, `${at}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => (NOT_COPY.has(k) ? [] : copyOf(v, at ? `${at}.${k}` : k)));
  }
  return [];
}

const clip = (s: string) => (s.length > 60 ? s.slice(0, 57) + '...' : s);

function main() {
  const showConfirm = process.argv.includes('--confirm');
  let errorCount = 0;
  let warningCount = 0;

  const slugs = allProperties.map((p) => p.slug);
  const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (dupes.length) {
    console.log(`ERROR  duplicate slugs: ${[...new Set(dupes)].join(', ')}`);
    errorCount += dupes.length;
  }

  for (const p of allProperties) {
    const { errors, warnings } = check(p);
    errorCount += errors.length;
    warningCount += warnings.length;
    const state = p.ready ? '' : '  (not ready, not built)';
    const confirm = p.confirm ?? [];
    console.log(`\n${p.name}  /${p.slug}/  Tier ${p.tier}${state}`);
    for (const e of errors) console.log(`  ERROR  ${e}`);
    for (const w of warnings) console.log(`  warn   ${w}`);
    if (!errors.length && !warnings.length) console.log('  ok');
    if (confirm.length) {
      if (showConfirm) for (const c of confirm) console.log(`  confirm  ${c}`);
      else console.log(`  ${confirm.length} thing(s) to confirm with the owner (npm run check -- --confirm)`);
    }
  }

  console.log(`\n${properties.length} pages to build. ${errorCount} error(s), ${warningCount} warning(s).`);
  if (errorCount) process.exitCode = 1;
}

main();
