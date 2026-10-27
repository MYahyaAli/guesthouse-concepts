@AGENTS.md

# Guesthouse concepts

Concept websites for Sri Lankan guesthouses, one static page per property. M Yahya sends each owner a link to their page as a pitch: "this is what your own website could look like". So every page must be accurate, quick on a phone over mobile data, and look made for that one property.

- **The content is done.** It lives in `content/` and is the source of truth. Your job is the app: components, theming, the route, the build, the deploy.
- **`reference/small-house-concept.html` is the approved design** (Small House). Port it into components faithfully, then reuse those components for every property with its own theme.

## Ground rules (never break these)

1. **No invented facts.** Render only what is in `content/`. If something seems missing (a check-in time, a distance, a room size), leave it out. Never fill a gap with plausible copy, and ask before adding or changing any fact.
2. **No prices** anywhere on the pages.
3. **No fake reviews.** "What guests mention most" is paraphrased themes: no quotes, no reviewer names, no star widgets. The only rating shown is the Google rating line, linked to the listing.
4. **Only the property's own photos** (from its listings or its Google "By owner" photos). Never add stock, AI-generated or other properties' photos. If a photo is missing, the layout adapts.
5. **Every page says it is a concept**: the banner at the top and the note in the footer.
6. **Never indexed.** `robots: { index: false, follow: false }` on every page, plus the `X-Robots-Tag` header in `public/_headers`. No sitemap, no page that lists the properties, no links between properties. Slugs are unguessable on purpose: never change them.
7. **Don't edit `content/properties/`** unless asked. If you spot a problem in the content, tell me instead.

## Setup (first session only)

The folder already holds the kit (this file, `content/`, `lib/`, `scripts/`, `reference/`, `public/`). create-next-app refuses non-empty folders, so scaffold into a subfolder and merge:

1. `npx create-next-app@latest guesthouse-concepts --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --no-react-compiler --disable-git --yes`
2. Move everything from `guesthouse-concepts/` (hidden files included) up into this folder **without overwriting** kit files; `public/` merges. Delete the subfolder. The package name stays `guesthouse-concepts`.
3. `npm install`, then `npm install -D tsx sharp playwright`, then `npx playwright install chromium`.
4. Add to package.json scripts:
   ```json
   "photos": "tsx scripts/fetch-photos.ts",
   "check": "tsx scripts/check-content.ts",
   "shots": "tsx scripts/screenshots.ts",
   "typecheck": "next typegen && tsc --noEmit",
   "preview": "npx serve@latest out"
   ```
5. Add `/screenshots`, `/photos-inbox`, `.wrangler` and `.env*.local` to `.gitignore`. Keep `public/photos/` and `content/photos.generated.json` in git.
6. `git init` and commit.

### next.config.ts

The scaffold turns on `cacheComponents` and `partialPrefetching`. This site doesn't use them, and Cache Components rejects `dynamicParams`. Replace the config with this, keeping the scaffold's Tailwind `turbopack` rule exactly as generated (Tailwind is wired through it; there is no PostCSS config):

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' },
    },
  },
};

export default nextConfig;
```

Static export means no server features: no server actions, route handlers that read the request, rewrites, redirects, `headers()`, cookies, ISR, proxy or the default image loader.

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4. Read `AGENTS.md`: this Next.js is newer than your training data, and its docs are in `node_modules/next/dist/docs/`.
- No database, CMS, UI kit, animation library or icon pack. Inline SVG icons (copy the reference's).
- Hosting: Cloudflare Workers static assets (see Deploy).

## Files

```
app/
  layout.tsx        <html lang="en">, globals.css, default noindex metadata. No fonts here.
  globals.css       Tailwind import, @theme tokens, base styles, motif utilities
  page.tsx          one plain screen: "Website concepts by M Yahya" + link. No list of properties.
  not-found.tsx     short and plain
  [slug]/page.tsx   the property page
components/         one file per section (below), plus Photo, Composer, motifs/
content/            GIVEN. types.ts is the contract; read it first.
lib/fonts.ts        GIVEN. next/font declarations for every theme.
scripts/            GIVEN. photos, check, shots.
reference/          GIVEN. The approved Small House design.
```

- `content/index.ts`: `properties` (ready ones only) and `getProperty(slug)`.
- `content/themes.ts`: colours, fonts, motif and design direction per theme; `themeFor(p)` merges overrides; `colorVars(colors)` gives the CSS variables.
- `content/photos.ts`: `resolvePhoto(photo)` (local copy with width/height, or the remote URL before `npm run photos` has run), `ogImageOf(slug)`, `photosOf(p)`.
- `content/site.ts`: `site` (concept author, link, `SITE_URL`), `conceptNote(fullName)`, `greeting(name)`.
- `content/parked/`: leads we chose not to build. Not imported.

## The route

- `app/[slug]/page.tsx`: `generateStaticParams` returns `properties.map((p) => ({ slug: p.slug }))`; `export const dynamicParams = false`. Props are `PageProps<'/[slug]'>` and `params` is a Promise (`const { slug } = await params`). `notFound()` when `getProperty` misses.
- `generateMetadata`: `metadataBase: new URL(site.url)`; title `${name}, ${area} (website concept)`; description `Website concept for ${fullName}, ${area}. Not the official site.`; `robots: { index: false, follow: false }`; Open Graph and Twitter `summary_large_image` with `ogImageOf(slug)` (a 1200x630 JPEG, so the WhatsApp link preview shows the property). `icons`: an inline SVG data URI, the name's first letter in `onAccent` on `accent`.
- `generateViewport`: `themeColor` = the theme's `bg`.

## Theming

- The page renders a `<style>` with `:root { ... }` holding `colorVars(theme.colors)` and `fontVars(theme)`, so `html` and `body` get the theme too. Tailwind reads the same names through `@theme` in `globals.css`, with the standard theme as defaults:
  ```css
  @import "tailwindcss";
  @theme {
    --color-bg: #F5F5F2; --color-surface: #FFFFFF; --color-ink: #1D2329; --color-ink-soft: #575F68;
    --color-line: #DCDEDA; --color-accent: #24564F; --color-accent-deep: #1B423C; --color-on-accent: #FFFFFF;
    --color-highlight: #D98E3A; --color-motif: #DCDEDA; --color-photo-bg: #DADDD8;
    --font-display: ui-serif, Georgia, serif; --font-text: ui-sans-serif, system-ui, sans-serif; --font-ui: ui-sans-serif, system-ui, sans-serif;
  }
  ```
  Then `bg-accent`, `text-ink-soft`, `font-display` and so on follow each page's theme. Don't use `@theme inline` for these: it bakes in the defaults and the per-page override stops working.
- Fonts: `fontVars(theme)` sets `--font-display`, `--font-text` and `--font-ui` from `lib/fonts.ts`. All fonts use `preload: false`; browsers only download faces a page uses. next/font requires literal options at every call, so don't refactor `lib/fonts.ts` into shared option objects.
- `theme.displayStyle` applies to the h1 and section headings (e.g. Archivo at width 125% for The Bay House).
- Light only: delete the scaffold's dark-mode block and set `color-scheme: light`.
- Text uses `ink` and `inkSoft`; links and buttons use `accent` with `onAccent`. `highlight` and `motif` are decorative only. Every text pair in `themes.ts` passes 4.5:1; keep it that way.

## Page anatomy

Port the reference's structure, CSS and behaviour: type scale, spacing, the 700/800/900px breakpoints, 20px gutters (32px from 900px), 1180px max width. Class names can change; the result shouldn't. Sections, in order:

1. **ConceptBanner**: "Website concept for {name} by {M Yahya, linked}. Not the official site." Dark bar, small text, `role="note"`.
2. **Header** (from 900px only): name as a wordmark; nav to `intro.navLabel ?? 'The house'`, Rooms, Location, Availability. Link only to sections that exist.
3. **Hero**: photo, h1 = name, lede, "Check availability" button to `#enquire`, then "Rated {score, one decimal} out of 5 on Google, from {count} reviews" linked to `rating.url`, if there's a rating. Phone: photo first, 56vh (min 340px, max 560px). Desktop: grid 5fr/7fr, text left, photo right, `min(76vh, 700px)` tall. The photo is eager with `fetchPriority="high"` and settles from `scale(1.06)` over 1.6s.
4. **Intro**: photo (4:5, sticky on desktop), title, paragraphs, then "What guests mention most", the mentions (two columns from 700px) and `mentionsSource` as small print.
5. **Day** (only if `day`): see the mirissa-garden motif.
6. **Rooms**: title and intro, then:
   - every item has a photo: photo cards (3:2 photo, name, size, facts, "Ask about this room"), two columns from 800px;
   - otherwise: a compact list of the items with no photos, followed by `rooms.photos` as a captioned row;
   - no items: the intro and `rooms.photos` only, and the composer has no Room field.

   Sizes: with `rooms.sizeTiles`, the reference's to-scale tile (dashed 56px frame, `highlight` square with side `round(56 × √(size / largest))`, `aria-label="Floor area N square metres"`). Otherwise plain text beside the name: "19 m²", or "21–22 m²" for a range. "Ask about this room" picks that room in the composer, scrolls to `#enquire` and focuses the Room select. A `CustomEvent` on `window` keeps the room cards server components.
7. **Gallery** (only with 2+ photos): with 4 or more, a horizontal scroll-snap strip (82% wide cards on phones, three per view on desktop with previous/next buttons); with 2 or 3, a static grid.
8. **Location**: title, text, the walks as label/value rows (hidden when empty), "Get directions in Google Maps", and a lazy, titled map iframe. Map: `https://www.google.com/maps?q={query}&z=16&output=embed`. Directions: `https://www.google.com/maps/dir/?api=1&destination={query}&destination_place_id={placeId}` (drop the last parameter without a place ID). URL-encode both.
9. **Band** (only if `band`): full-bleed photo, 58vh on phones and 80vh on desktop, with its caption.
10. **Enquiry** (`#enquire`): "Check availability", `enquiry.intro`, "Good to know" with the details rows (hidden when empty), and the composer on the theme's motif mat.
11. **Footer**: name, address lines, phone as `tel:+{whatsapp}`, `links` if any, then `conceptNote(fullName)` and a "More of my work" link to `site.conceptLink`.
12. **StickyCta** (phones only): "Check availability", shown only while neither the hero button nor the enquiry section is on screen (IntersectionObserver, as in the reference).

## WhatsApp composer

A client component. Port the reference's `update()` logic exactly, with one change: the first line is `greeting(name)` ("Hello, I'd like to check availability at {name}.").

- Fields: Arrive and Leave (date inputs), Room (select of "Any room" plus the room names; omitted when there are no items), Guests (1 to `enquiry.maxGuests`, default 2), Your name (optional).
- Message, shown live in the WhatsApp-style bubble, one line each:
  `greeting(name)`; then `Dates: Sat 2 Jan 2027 to Tue 5 Jan 2027 (3 nights)`, or `Arriving: …`, `Leaving: …`, or `Dates: not fixed yet`; `Guests: 2`; `Room: any` (only when there is a Room field); `Name: …` (only if given).
- Dates use `toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })`. Parse input values as local dates (`new Date(y, m - 1, d)`), never `new Date('2027-01-02')`, which is UTC.
- Errors: arrival in the past; leave not after arrive. Show the message (`role="alert"`), set `aria-disabled="true"` on the button and block its click.
- Link: `https://wa.me/{whatsapp}?text={encodeURIComponent(message)}`, new tab. Under it: "Opens WhatsApp with this message, ready to send to {phoneDisplay}."
- The page is built ahead of time, so "today" (for `min` and the past-date check) must come from the visitor's browser, never the build. Next's lint rejects setState inside an effect: read today's date with `useSyncExternalStore` (server snapshot `''`), or in the event handlers.

## Photos

- `npm run photos` copies every photo into `public/photos/<slug>/` as WebP (max 1600px wide), makes each hero's `og.jpg` link preview and writes `content/photos.generated.json`. Run it after any photo URL changes and commit the results. If a host refuses a download, the script prints a key: save the image from a browser as `photos-inbox/<key>.jpg` and run it again.
- Render every photo through one `Photo` component: a plain `<img>` (disable `@next/next/no-img-element` for that file only) with width and height from `resolvePhoto`, `loading="lazy"` (the hero is eager), `decoding="async"`, `referrerPolicy="no-referrer"`, `object-fit: cover` and `object-position` from `photo.position`.
- A photo that fails becomes a placeholder box of the same shape showing its alt text (the reference's `.ph`). Errors can fire before hydration, so on mount also check `img.complete && img.naturalWidth === 0`.
- If a photo can't be fetched, tell me which one. Don't swap in another.

## Themes and motifs

Tier A properties get a bespoke theme with one memorable element, the motif. Tier B share the `standard` theme with their own accent: same components, same care, no motif. Read each theme's `direction` in `content/themes.ts` before styling it. A motif is one small component or CSS utility; keep it subtle and never let it hurt legibility.

- **lattice** (Small House): as in the reference: two `repeating-linear-gradient`s at ±45°, 1px lines every 22px in `motif`, on the mat behind the composer. Plus the room size tiles.
- **arches** (Khalid's): arch-topped frames (`border-radius: 999px 999px 0 0` gives a semicircular top) on the intro photo, the room photos and, from 900px, the hero photo, as if seen through the house's arched hallway. A thin arch outline in `motif` on the composer mat.
- **ridgelines** (Villa 49): three or four layered hill silhouettes (inline SVG, `motif` at 8 to 25% opacity), like Kandy's ridges seen from the rooftop, at the foot of the hero text and as dividers before Location and the footer. Irregular like real ridges, never sine waves.
- **weave** (Jackie's): a rattan basket-weave pattern (CSS gradients in `motif`) on the composer mat and as a thin band under the hero. The Day section is a full-bleed `accent` panel with `bg`-coloured text, its three moments side by side from 900px, with `day.photo` beside them.
- **breeze-block** (The Bay House): one SVG breeze-block tile (a square block with a four-petal cut-out, in `motif`) repeated on the composer mat and as a narrow full-width strip under the hero, echoing the lit walls in the hero photo.

## Design rules

- Mobile first. Design at 375px, then check 1440px. Owners open these links on their phones, from WhatsApp.
- Avoid template tells: all-caps eyebrow labels above headings, "·"-separated meta strings, "→" in buttons, rows of identical shadowed cards, emoji, gradient text, centred-everything layouts.
- Use the content's copy. No extra slogans, headings or microcopy beyond what this file lists.
- Accessibility: a skip link, one h1, sections labelled by their headings, a label on every input, a visible 2px `accent` focus outline, 44px touch targets, alt text from the content, and `prefers-reduced-motion` respected (no smooth scrolling, no hero animation).
- Client JavaScript only for the composer, sticky button, gallery buttons, room buttons and photo fallback. Everything else is a server component.

## Commands

- `npm run dev`, then http://localhost:3000/small-house-o64e/
- `npm run photos`, `npm run check` (`-- --confirm` lists what to ask each owner), `npm run typecheck`, `npm run lint`
- `npm run build` writes `out/`; `npm run preview` serves it; `npm run shots` screenshots it

## Before you say something is done

1. `npm run check`, `npm run typecheck`, `npm run lint` and `npm run build` all pass (photo and rating warnings are fine while we're still on remote photos).
2. `npm run shots -- <slugs>` passes, then open every screenshot (phone and desktop) and look: crops that cut off what matters, wrapping headings, empty or orphaned sections, motif legibility, spacing that drifts from the reference.
3. At 375px, click through: nav links, "Ask about this room", the composer (a past date, leave before arrive, a valid stay), the WhatsApp link (right number, message intact), directions, the phone link.
4. Show me the screenshots and say what you couldn't check.

## Deploy (Cloudflare Workers static assets)

1. `npm install -D wrangler`, and add `wrangler.jsonc`:
   ```jsonc
   {
     "$schema": "node_modules/wrangler/config-schema.json",
     "name": "guesthouse-concepts",
     "compatibility_date": "2025-09-01",
     "assets": { "directory": "./out", "not_found_handling": "404-page" }
   }
   ```
2. `npx wrangler login` once (it opens a browser for me to approve).
3. `npm run build && npx wrangler deploy`. The first deploy prints the `*.workers.dev` URL. Put it in `.env.production` as `SITE_URL=https://…workers.dev`, then build and deploy again so link previews use absolute image URLs.
4. `public/_headers` is copied into `out/` and adds the noindex header. Check it: `curl -sI <url>/small-house-o64e/ | grep -i x-robots`.

Cloudflare Pages also works (`npx wrangler pages deploy out --project-name guesthouse-concepts`). Not Vercel Hobby: it is for non-commercial use only, and these pages are sales pitches.

## Not in scope

Booking engines, availability calendars, payments, chat widgets, a CMS, admin pages, analytics, cookie banners, translations, blogs, review widgets, newsletter forms. When an owner signs up, their page becomes its own project: no concept banner, no noindex, and photos they send us. Not before.

## Adding a property later

Copy a Tier B file in `content/properties/`, give it a new slug (name + "-" + 4 random lowercase letters or digits), add it to `allProperties` in `content/index.ts`, then run `npm run photos` and `npm run check`.
