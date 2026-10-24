/**
 * Full-page screenshots of each page at phone and desktop width, taken from the
 * static build in out/, plus a few automatic checks (sideways scroll, broken
 * photos, console errors).
 *
 *   npm run build && npm run shots              every page
 *   npm run shots -- small-house-o64e           only these slugs
 *
 * One-time setup: npm i -D playwright && npx playwright install chromium
 * Writes screenshots/<slug>-phone.png and screenshots/<slug>-desktop.png.
 */
import { existsSync, statSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import path from 'node:path';
import { chromium } from 'playwright';
import { properties } from '../content/index';

const OUT = path.join(process.cwd(), 'out');
const SHOTS = path.join(process.cwd(), 'screenshots');
const SIZES = [
  { name: 'phone', width: 375, height: 812 },
  { name: 'desktop', width: 1440, height: 900 },
];
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

async function main() {
  if (!existsSync(path.join(OUT, 'index.html'))) throw new Error('No build found in out/. Run npm run build first.');
  const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const targets = only.length ? properties.filter((p) => only.includes(p.slug)) : properties;
  if (!targets.length) throw new Error('No matching pages.');
  await mkdir(SHOTS, { recursive: true });

  // A tiny static server for out/, like the real host.
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
    let file = path.join(OUT, urlPath);
    if (!file.startsWith(OUT)) return void res.writeHead(403).end();
    if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
    const found = existsSync(file);
    const body = await readFile(found ? file : path.join(OUT, '404.html'));
    res.writeHead(found ? 200 : 404, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;

  // CHROMIUM_PATH is only for machines with a preinstalled browser; normally leave it unset.
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const problems: string[] = [];
  try {
    for (const p of targets) {
      for (const size of SIZES) {
        const page = await browser.newPage({ viewport: { width: size.width, height: size.height } });
        await page.emulateMedia({ reducedMotion: 'reduce' });
        const errors: string[] = [];
        page.on('pageerror', (e) => errors.push(e.message));
        page.on('console', (m) => {
          if (m.type() === 'error' && !/google\.com\/maps|maps\.gstatic/.test(m.text())) errors.push(m.text());
        });
        await page.goto(`${base}/${p.slug}/`, { waitUntil: 'load' });

        // Browser-side code is passed as strings so the TypeScript runner can't rewrite it.
        // Scroll to the bottom and back so lazy photos load, then wait for fonts and photos.
        await page.evaluate(`(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 120));
          }
          window.scrollTo(0, 0);
          await document.fonts.ready;
          await Promise.all([...document.images].map((img) => new Promise((resolve) => {
            if (img.complete) return resolve();
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
            setTimeout(resolve, 10000);
          })));
        })()`);

        const facts = (await page.evaluate(`({
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          broken: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.alt || i.src),
          h1s: document.querySelectorAll('h1').length,
        })`)) as { overflow: number; broken: string[]; h1s: number };
        const where = `${p.slug} (${size.name})`;
        if (facts.overflow > 0) problems.push(`${where}: page scrolls sideways by ${facts.overflow}px`);
        if (facts.broken.length) problems.push(`${where}: ${facts.broken.length} photo(s) failed: ${facts.broken.join('; ')}`);
        if (facts.h1s !== 1) problems.push(`${where}: ${facts.h1s} h1 elements (should be 1)`);
        for (const e of errors) problems.push(`${where}: console error: ${e}`);

        const file = path.join(SHOTS, `${p.slug}-${size.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`  ${path.relative(process.cwd(), file)}`);
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (problems.length) {
    console.log(`\n${problems.length} problem(s):`);
    for (const m of problems) console.log(`- ${m}`);
    process.exitCode = 1;
  } else {
    console.log('\nNo sideways scroll, broken photos or console errors.');
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
