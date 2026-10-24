# Kickoff

This kit holds everything Claude Code needs to build the nine concept pages: the content for each property (copy, rooms, facts, photo links, themes), the approved Small House design, scripts for photos, checks and screenshots, and `CLAUDE.md` with the rules and the build plan.

## Before you start

- Node.js 20.9 or newer (`node -v`) and npm
- Git
- Claude Code, signed in

## Start

1. Unzip the kit where you keep projects and rename the folder `guesthouse-concepts`.
2. Open a terminal in that folder and run `claude`.
3. Paste the prompts below one at a time. Review what comes back before you send the next one.

## Prompt 1: set up and build Small House

```
Read CLAUDE.md, AGENTS.md (if it exists yet) and content/types.ts first.

Then:
1. Do the Setup section of CLAUDE.md: scaffold Next.js into this folder, install, add the scripts, replace next.config.ts, commit.
2. Run npm run photos and tell me about any photo that fails.
3. Build the shared components and the [slug] route by porting reference/small-house-concept.html, following CLAUDE.md. Only Small House needs to look right for now.
4. Run everything in "Before you say something is done" for small-house-o64e, and compare your screenshots with the reference opened in a browser at the same widths.

Show me the phone and desktop screenshots, then stop. Don't style the other properties until I've approved Small House.
```

## Prompt 2: the other Tier A pages

```
Small House is approved. Now give the other Tier A properties their themes and motifs, following CLAUDE.md > Themes and motifs and each theme's direction in content/themes.ts:
Khalid's (fort-pedlar, arches), Villa 49 (kandy-hill, ridgelines), Jackie's (mirissa-garden, weave and the Day section), The Bay House (weligama-breeze, breeze-block).
Don't change how Small House looks. Run the full check list, then show me phone and desktop screenshots of each.
```

## Prompt 3: the Tier B pages

```
Now check the Tier B pages on the standard theme: The Orange House, College House, Mount Bay and MM'S Guest House.
They have fewer photos and some empty sections; make sure each page still feels complete and nothing looks missing. Run the full check list and show me the screenshots.
```

## Prompt 4: deploy

```
Deploy to Cloudflare as described in CLAUDE.md > Deploy. When it's live, set SITE_URL, rebuild and deploy again, check the noindex header, and give me the URL for each property.
```

## Before you send a link to an owner

1. `npm run check -- --confirm` and read that property's "confirm" list. Some are worth settling first: The Bay House's WhatsApp number, and whether College House matches its Airbnb listing.
2. Refresh the Google rating and review count if they have changed (`rating` in the property's file).
3. Open the page on your own phone, and send the link to yourself on WhatsApp to see the preview card.
4. Keep the pitch message short: what you noticed about their place, the link, and one question.
