# Bean & Barrel

Astro static site for Bean & Barrel, deployed on Vercel from the `main` branch.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
npm run cms:proxy   # local CMS auth proxy (optional)
```

Node requirement: `>=22.12.0`.

## Content Editing

Editable JSON content lives under `src/content/`.

- `src/content/carousel/` - homepage carousel slides
- `src/content/categories/` - kínálat categories and item lists
- `src/content/gallery/` - gallery photos (homepage strip + /galeria)
- `src/content/reasons/` - rendezvények reason cards
- `src/content/event-types.json` - typical event list
- `src/content/upcoming-events/` - upcoming public pop-ups
- `src/content/contact.json` - phone, e-mail, form subject
- `src/content/idle.json` - easter egg idle overlay text

Images used by the site should live in `src/assets/uploads/` so Astro can optimize them at build time. Gallery images live in `src/assets/uploads/gallery/`.

Legacy/raw source folders such as `_archive_v1/` and `photoes/` are not used by the build. Keep them only as source archive material; production content should be added through `src/assets/uploads/` or the CMS.

## SEO

On-page SEO targets Budapest events (`/rendezvenyek`) and Hungary-wide franchise (`/franchise`). Structured data lives in [`src/lib/seo.ts`](src/lib/seo.ts).

| Document | Purpose |
|----------|---------|
| [`docs/seo-beallitas.md`](docs/seo-beallitas.md) | Google Search Console + GA4 setup |

Optional Vercel env vars (see [`.env.example`](.env.example)):

- `PUBLIC_GSC_VERIFICATION` — Search Console HTML tag
- `PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID

## CMS

Sveltia CMS is available at **https://www.beanbarrel.coffee/admin**. Config: [`public/admin/config.yml`](public/admin/config.yml).

### Documentation

| Audience | Document |
|----------|----------|
| **Client (Hungarian)** | [`docs/tartalomkezelo-utmutato.md`](docs/tartalomkezelo-utmutato.md) |
| **Developer — OAuth setup** | [`docs/cms-oauth-setup.md`](docs/cms-oauth-setup.md) |
| **Developer — GitHub access** | [`docs/cms-github-hozzaferes.md`](docs/cms-github-hozzaferes.md) |

### First-time setup checklist

1. Deploy OAuth worker: [`infra/sveltia-cms-auth/`](infra/sveltia-cms-auth/) → see [`docs/cms-oauth-setup.md`](docs/cms-oauth-setup.md)
2. Invite client GitHub user: `./scripts/invite-cms-editor.sh USERNAME`
3. Smoke test: login at `/admin`, edit one field, publish, confirm Vercel rebuild

The CMS commits to `main` and uploads images to `src/assets/uploads/` / `src/assets/uploads/gallery/`.

## Forms

Both the Kontakt page and the floating "Keress minket" panel submit to FormSubmit via `src/lib/contact.ts`.

Production checklist:

- activate `info@beanbarrel.coffee` in FormSubmit
- test one real submission from `https://www.beanbarrel.coffee/kontakt`
- verify the `_next` target: `https://www.beanbarrel.coffee/koszonjuk`
- keep the `_honey` honeypot fields in place for spam protection

## Deploy

`astro.config.mjs` sets the production site URL to `https://www.beanbarrel.coffee` and generates the sitemap. Vercel builds with:

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
- CMS login + publish cycle at `/admin`
