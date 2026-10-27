@AGENTS.md

# Small House: website concept

A concept website for Small House Boutique Guest House, Galle Fort, as a one-page static site served at `/`. M Yahya sends the owner the link as a pitch: "this is what your own website could look like". So the page must be accurate, quick on a phone over mobile data, and look made for this property.

This project holds Small House only. Another guesthouse gets its own new project.

- **The content is done.** It lives in `content/small-house.ts` and is the source of truth. Your job is the app: components, styling, the build, the deploy.
- **`reference/small-house-concept.html` is the approved design.** The components are a faithful port of it; keep them that way.

## Ground rules (never break these)

1. **No invented facts.** Render only what is in `content/`. If something seems missing (a check-in time, a distance, a room size), leave it out. Never fill a gap with plausible copy, and ask before adding or changing any fact.
2. **No prices** anywhere on the page.
3. **No fake reviews.** "What guests mention most" is paraphrased themes: no quotes, no reviewer names, no star widgets. The only rating shown is the Google rating line, linked to the listing.
4. **Only the property's own photos** (from its listings or its Google "By owner" photos). Never add stock, AI-generated or other properties' photos.
5. **It says it is a concept**: the banner at the top and the note in the footer.
6. **Never indexed.** `robots: { index: false, follow: false }` in the metadata, plus the `X-Robots-Tag` header in `public/_headers`. No sitemap.
7. **Don't edit `content/small-house.ts`** unless asked. If you spot a problem in the content, tell me instead.

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4. Read `AGENTS.md`: this Next.js is newer than your training data, and its docs are in `node_modules/next/dist/docs/`.
- Static export (`output: 'export'` in `next.config.ts`), so no server features: no server actions, route handlers that read the request, rewrites, redirects, `headers()`, cookies, ISR, proxy or the default image loader. Tailwind is wired through the `turbopack` rule in `next.config.ts`; there is no PostCSS config.
- No database, CMS, UI kit, animation library or icon pack. Inline SVG icons (`components/icons.tsx`, copied from the reference).
- Hosting: Cloudflare Workers static assets (see Deploy).

## Files

```
app/
  layout.tsx        <html>, metadata (title, noindex, link preview, icon), viewport, font variables
  globals.css       Tailwind import, @theme colour tokens, base styles, the lattice motif
  page.tsx          the Small House page, at /
  not-found.tsx     short and plain
components/         one file per section, plus Photo/PhotoImg, Composer, AskAboutRoom, GalleryNav, Pairs, icons, styles
content/
  small-house.ts    all the copy, facts and photo URLs
  types.ts          the content contract
  photos.ts         resolvePhoto(photo), photosOf(p), ogImageOf(slug)
  photos.generated.json   written by npm run photos
  site.ts           site (concept author, link, SITE_URL), conceptNote(fullName), greeting(name)
lib/fonts.ts        next/font: Libre Caslon Display, Libre Caslon Text, Hanken Grotesk
scripts/            photos, check, shots
reference/          the approved design
public/             _headers, robots.txt, photos/small-house-o64e/
```

The slug (`small-house-o64e`) now only names the photo folder and the link-preview key. Don't change it.

## Look

- Colours live in `@theme` in `globals.css`: `bg` whitewash, `ink` and `ink-soft` for text, `accent` grey-blue for links and buttons (with `on-accent`), `highlight` terracotta for the room size tiles, `motif` for the lattice, `line`, `surface`, `photo-bg`. Every text pair passes 4.5:1; keep it that way. `highlight` and `motif` are decorative only.
- Fonts: `font-display` (Libre Caslon Display, the h1 and headings), `font-text` (Libre Caslon Text, body copy), `font-ui` (Hanken Grotesk, buttons, labels, captions, small print). The layout sets the three variables from `lib/fonts.ts`. next/font needs literal options at every call.
- Light only (`color-scheme: light`).
- The motif is the wooden lattice over the doors: two `repeating-linear-gradient`s at ±45°, 1px lines every 22px in `motif`, on the mat behind the composer. Plus the to-scale room size tiles.

## Page anatomy

The reference's structure, CSS and behaviour: type scale, spacing, the 700/800/900px breakpoints, 20px gutters (32px from 900px), 1180px max width. Sections, in order:

1. **ConceptBanner**: "Website concept for {name} by {M Yahya, linked}. Not the official site." Dark bar, small text, `role="note"`.
2. **Header** (from 900px only): name as a wordmark; nav to The house, Rooms, Location, Availability.
3. **Hero**: photo, h1 = name, lede, "Check availability" button to `#enquire`, then "Rated {score, one decimal} out of 5 on Google, from {count} reviews" linked to `rating.url`. Phone: photo first, 56vh (min 340px, max 560px). Desktop: grid 5fr/7fr, text left, photo right, `min(76vh, 700px)` tall. The photo is eager with `fetchPriority="high"` and settles from `scale(1.06)` over 1.6s.
4. **Intro** (`#house`): photo (4:5, sticky on desktop), title, paragraphs, then "What guests mention most", the mentions (two columns from 700px) and `mentionsSource` as small print.
5. **Rooms**: title and intro, then photo cards (3:2 photo, name, size tile, facts, "Ask about this room"), two columns from 800px. The tile is a dashed 56px frame with a `highlight` square of side `round(56 × √(size / largest))` and `aria-label="Floor area N square metres"`. "Ask about this room" picks that room in the composer, scrolls to `#enquire` and focuses the Room select; a `CustomEvent` on `window` keeps the room cards server components.
6. **Gallery**: a horizontal scroll-snap strip (82% wide cards on phones, three per view on desktop with previous/next buttons).
7. **Location**: title, text, the walks as label/value rows, "Get directions in Google Maps", and a lazy, titled map iframe. Map: `https://www.google.com/maps?q={query}&z=16&output=embed`. Directions: `https://www.google.com/maps/dir/?api=1&destination={query}&destination_place_id={placeId}`. URL-encode both.
8. **Band**: full-bleed photo, 58vh on phones and 80vh on desktop, with its caption.
9. **Enquiry** (`#enquire`): "Check availability", `enquiry.intro`, "Good to know" with the details rows, and the composer on the lattice mat.
10. **Footer**: name, address lines, phone as `tel:+{whatsapp}`, then `conceptNote(fullName)` and a "More of my work" link to `site.conceptLink`.
11. **StickyCta** (phones only): "Check availability", shown only while neither the hero button nor the enquiry section is on screen (IntersectionObserver).

## WhatsApp composer

A client component, porting the reference's `update()` logic, with one change: the first line is `greeting(name)` ("Hello, I'd like to check availability at Small House.").

- Fields: Arrive and Leave (date inputs), Room (select of "Any room" plus the room names), Guests (1 to `enquiry.maxGuests`, default 2), Your name (optional).
- Message, shown live in the WhatsApp-style bubble, one line each: `greeting(name)`; then `Dates: Sat 2 Jan 2027 to Tue 5 Jan 2027 (3 nights)`, or `Arriving: …`, `Leaving: …`, or `Dates: not fixed yet`; `Guests: 2`; `Room: any`; `Name: …` (only if given).
- Dates use `toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })`. Parse input values as local dates (`new Date(y, m - 1, d)`), never `new Date('2027-01-02')`, which is UTC.
- Errors: arrival in the past; leave not after arrive. Show the message (`role="alert"`), set `aria-disabled="true"` on the button and block its click.
- Link: `https://wa.me/{whatsapp}?text={encodeURIComponent(message)}`, new tab. Under it: "Opens WhatsApp with this message, ready to send to {phoneDisplay}."
- The page is built ahead of time, so "today" (for `min` and the past-date check) comes from the visitor's browser, never the build: `useSyncExternalStore` with a server snapshot of `''`. Next's lint rejects setState inside an effect.

## Photos

- `npm run photos` copies every photo into `public/photos/small-house-o64e/` as WebP (max 1600px wide), makes the hero's `og.jpg` link preview and writes `content/photos.generated.json`. Run it after any photo URL changes and commit the results. If a host refuses a download, the script prints a key: save the image from a browser as `photos-inbox/<key>.jpg` and run it again.
- Every photo renders through `Photo` (server) and `PhotoImg` (client): a plain `<img>` with width and height from `resolvePhoto`, `loading="lazy"` (the hero is eager), `decoding="async"`, `referrerPolicy="no-referrer"`, `object-fit: cover` and `object-position` from `photo.position`.
- A photo that fails becomes a placeholder box of the same shape showing its alt text (`.ph`). Errors can fire before hydration, so the ref also checks `img.complete && img.naturalWidth === 0`.
- If a photo can't be fetched, tell me which one. Don't swap in another.

## Design rules

- Mobile first. Design at 375px, then check 1440px. The owner opens the link on their phone, from WhatsApp.
- Avoid template tells: all-caps eyebrow labels above headings, "·"-separated meta strings, "→" in buttons, rows of identical shadowed cards, emoji, gradient text, centred-everything layouts.
- Use the content's copy. No extra slogans, headings or microcopy beyond what this file lists.
- Accessibility: a skip link, one h1, sections labelled by their headings, a label on every input, a visible 2px `accent` focus outline, 44px touch targets, alt text from the content, and `prefers-reduced-motion` respected (no smooth scrolling, no hero animation).
- Client JavaScript only for the composer, sticky button, gallery buttons, room buttons and photo fallback. Everything else is a server component.

## Commands

- `npm run dev`, then http://localhost:3000/
- `npm run photos`, `npm run check` (`-- --confirm` lists what to ask the owner), `npm run typecheck`, `npm run lint`
- `npm run build` writes `out/`; `npm run preview` serves it; `npm run shots` screenshots it into `screenshots/phone.png` and `screenshots/desktop.png`

## Before you say something is done

1. `npm run check`, `npm run typecheck`, `npm run lint` and `npm run build` all pass.
2. `npm run shots` passes, then open both screenshots and look: crops that cut off what matters, wrapping headings, empty or orphaned sections, motif legibility, spacing that drifts from the reference.
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
   The `name` becomes part of the `*.workers.dev` address the owner sees.
2. `npx wrangler login` once (it opens a browser for me to approve).
3. `npm run build && npx wrangler deploy`. The first deploy prints the `*.workers.dev` URL. Put it in `.env.production` as `SITE_URL=https://…workers.dev`, then build and deploy again so link previews use absolute image URLs.
4. `public/_headers` is copied into `out/` and adds the noindex header. Check it: `curl -sI <url>/ | grep -i x-robots`.

Cloudflare Pages also works (`npx wrangler pages deploy out --project-name guesthouse-concepts`). Not Vercel Hobby: it is for non-commercial use only, and this page is a sales pitch.

## Not in scope

Booking engines, availability calendars, payments, chat widgets, a CMS, admin pages, analytics, cookie banners, translations, blogs, review widgets, newsletter forms. If the owner signs up, their site becomes its own project: no concept banner, no noindex, and photos they send us. Not before.
