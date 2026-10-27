/**
 * Copies every photo in content/small-house.ts into public/photos/<slug>/ as WebP
 * (max 1600px wide), makes a 1200x630 JPEG link preview (og.jpg) from the hero, and
 * records paths and sizes in content/photos.generated.json. Listing photos can
 * disappear, so the site never depends on the remote URLs once this has run.
 *
 *   npm run photos               fetch what's missing
 *   npm run photos -- --force    fetch everything again
 *
 * If a host refuses the download, save the image from your browser into photos-inbox/
 * named with the key the script prints (e.g. photos-inbox/3f2a9c1b0d.jpg) and run it again.
 */
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { photosOf, type PhotoFile, type PhotoManifest } from '../content/photos';
import p from '../content/small-house';

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, 'content', 'photos.generated.json');
const PUBLIC = path.join(ROOT, 'public');
const INBOX = path.join(ROOT, 'photos-inbox');
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';

interface Job {
  slug: string;
  slot: string;
  src: string;
}
interface Failure extends Job {
  reason: string;
}

async function main() {
  if (!existsSync(path.join(ROOT, 'content'))) throw new Error('Run this from the project root.');
  const force = process.argv.includes('--force');

  const manifest: PhotoManifest = { photos: {}, og: {}, ...(await readManifest()) };
  const onDisk = (f?: PhotoFile) => !!f && existsSync(path.join(PUBLIC, f.path));

  // One job per photo URL. The same URL in two slots is stored once.
  const jobs: Job[] = [];
  const seen = new Set<string>();
  for (const { slot, photo } of photosOf(p)) {
    if (seen.has(photo.src)) continue;
    seen.add(photo.src);
    if (!force && onDisk(manifest.photos[photo.src])) continue;
    jobs.push({ slug: p.slug, slot, src: photo.src });
  }

  const failures: Failure[] = [];
  let done = 0;
  await pool(jobs, 4, async (job) => {
    try {
      manifest.photos[job.src] = await vendor(job);
      done++;
      console.log(`  ok    ${job.slug}  ${job.slot}`);
    } catch (err) {
      failures.push({ ...job, reason: describe(err) });
      console.log(`  FAIL  ${job.slug}  ${job.slot}`);
    }
  });

  // The link preview, made from the local copy of the hero.
  const hero = manifest.photos[p.hero.src];
  if (onDisk(hero) && (force || !onDisk(manifest.og[p.slug]))) {
    manifest.og[p.slug] = await linkPreview(p.slug, hero!);
  }

  // Forget photos the page no longer uses (the files stay; delete them by hand if you like).
  const used = new Set(photosOf(p).map((x) => x.photo.src));
  for (const src of Object.keys(manifest.photos)) if (!used.has(src)) delete manifest.photos[src];
  for (const slug of Object.keys(manifest.og)) if (slug !== p.slug) delete manifest.og[slug];

  await writeFile(MANIFEST, JSON.stringify(sortKeys(manifest), null, 2) + '\n');

  const skipped = seen.size - jobs.length;
  console.log(`\n${done} downloaded, ${skipped} already local, ${failures.length} failed.`);
  if (failures.length) {
    console.log('\nThese photos could not be downloaded:');
    for (const f of failures) console.log(`- ${f.slug} ${f.slot} (key ${keyOf(f.src)}): ${f.reason}\n  ${f.src}`);
    console.log(
      '\nOpen each URL in a browser. If it loads there, the host is refusing scripts: save the image into' +
        '\nphotos-inbox/ as <key>.jpg (or .png/.webp) and run npm run photos again.' +
        '\nIf it no longer loads, the listing has changed and the photo needs replacing in content/.',
    );
    process.exitCode = 1;
  }
}

/** Short stable name for a photo URL: its local file name and its photos-inbox name. */
function keyOf(src: string): string {
  return createHash('sha1').update(src).digest('hex').slice(0, 10);
}

async function fromInbox(key: string): Promise<Buffer | undefined> {
  if (!existsSync(INBOX)) return undefined;
  const name = (await readdir(INBOX)).find((f) => f.startsWith(`${key}.`));
  return name ? readFile(path.join(INBOX, name)) : undefined;
}

async function download(src: string): Promise<Buffer> {
  const res = await fetch(src, {
    headers: { 'User-Agent': UA, Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8' },
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = res.headers.get('content-type') ?? '';
  if (!type.startsWith('image/')) throw new Error(`not an image (${type || 'no content-type'})`);
  return Buffer.from(await res.arrayBuffer());
}

async function vendor(job: Job): Promise<PhotoFile> {
  const key = keyOf(job.src);
  const input = (await fromInbox(key)) ?? (await download(job.src));

  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toBuffer({ resolveWithObject: true });

  const rel = `/photos/${job.slug}/${key}.webp`;
  await mkdir(path.join(PUBLIC, 'photos', job.slug), { recursive: true });
  await writeFile(path.join(PUBLIC, rel), data);
  return { path: rel, width: info.width, height: info.height };
}

async function linkPreview(slug: string, hero: PhotoFile): Promise<PhotoFile> {
  const rel = `/photos/${slug}/og.jpg`;
  await sharp(path.join(PUBLIC, hero.path))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(PUBLIC, rel));
  return { path: rel, width: 1200, height: 630 };
}

async function readManifest(): Promise<Partial<PhotoManifest>> {
  try {
    return JSON.parse(await readFile(MANIFEST, 'utf8')) as Partial<PhotoManifest>;
  } catch {
    return {};
  }
}

function describe(err: unknown): string {
  if (!(err instanceof Error)) return String(err);
  const cause = (err as Error & { cause?: { code?: string; message?: string } }).cause;
  if (err.name === 'TimeoutError') return 'timed out after 30 s';
  return cause?.code ? `${err.message} (${cause.code})` : err.message;
}

async function pool<T>(items: T[], size: number, fn: (item: T) => Promise<void>) {
  let next = 0;
  const worker = async () => {
    while (next < items.length) await fn(items[next++]);
  };
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, worker));
}

function sortKeys(m: PhotoManifest): PhotoManifest {
  const sort = <V>(o: Record<string, V>) =>
    Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b)));
  return { photos: sort(m.photos), og: sort(m.og) };
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
