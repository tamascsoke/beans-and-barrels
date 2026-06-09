# Bean & Barrel

Astro static site for Bean & Barrel, deployed on Vercel from the `v2` branch.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

Node requirement: `>=22.12.0`.

## Content Editing

Editable JSON content lives under `src/content/`.

- `src/content/carousel/` - homepage carousel slides
- `src/content/categories/` - kínálat categories and item lists
- `src/content/reasons/` - rendezvények reason cards
- `src/content/event-types.json` - typical event list
- `src/content/upcoming-events/` - upcoming public pop-ups
- `src/content/contact.json` - phone, e-mail, form subject

Images used by the site should live in `src/assets/uploads/` so Astro can optimize them at build time. Gallery images live in `src/assets/uploads/gallery/`.

Legacy/raw source folders such as `_archive_v1/` and `photoes/` are not used by the build. Keep them only as source archive material; production content should be added through `src/assets/uploads/` or the CMS.

## CMS

Sveltia CMS is available at `/admin`. The config is in `public/admin/config.yml`.

Before giving editor access, verify:

- GitHub OAuth proxy at `https://sveltia-cms-auth.beanbarrel.workers.dev`
- login to `/admin`
- upload one image
- edit one JSON entry
- publish and confirm the Vercel preview updates

The CMS uploads to `src/assets/uploads` / `src/assets/uploads/gallery` to match the Astro image pipeline.

## Forms

Both the Kontakt page and the floating "Keress minket" panel submit to FormSubmit via `src/lib/contact.ts`.

Production checklist:

- activate `info@beanbarrel.coffee` in FormSubmit
- test one real submission from `https://www.beanbarrel.coffee/kontakt`
- verify the `_next` target: `https://www.beanbarrel.coffee/koszonjuk`
- keep the `_honey` honeypot fields in place for spam protection

## Deploy

`astro.config.mjs` sets the production site URL to `https://www.beanbarrel.coffee` and generates the sitemap. Vercel should build with:

```sh
npm run build
```

Build output: `dist/`.

## Pre-Handoff QA

Check these before final signoff:

- mobile Safari and Android Chrome: hero accents (`SÖR`, `SÖRREL`, `ESKÜVŐ`)
- homepage carousel arrows/dots and gallery strip
- floating contact button vs footer legal links
- `/kontakt?topic=Rendezvény#urlap` and `/kontakt?topic=Franchise#urlap`
- FormSubmit success/error behavior
- `/impresszum` and `/adatvedelem` final legal text
- social links, phone link, e-mail link
- `/sitemap-index.xml`, `/robots.txt`, and page social metadata
