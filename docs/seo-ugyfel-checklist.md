# Google SEO — ügyfél checklist

Ez az 1 oldalas útmutató az ügyfélnek szól. A fejlesztői rész (kód, schema, GYIK) már kész — ezeket a lépéseket **Google-fiókkal** kell végigvinni.

Becsült idő: **30–45 perc** (Business Profile igazolás külön, 1–3 nap).

---

## Amit már megcsináltunk (neked nem kell)

- Oldal meta címek és leírások (főoldal, rendezvények, franchise, galéria)
- Strukturált adatok (schema): szolgáltatás, esemény, helyszín, közösségi linkek
- Térkép és cím a kontakt oldalon és a footerben
- Sitemap: `https://www.beanbarrel.coffee/sitemap-index.xml`
- Robots.txt (admin tiltva)

---

## 1. Google Search Console (kötelező)

1. Nyisd meg: [search.google.com/search-console](https://search.google.com/search-console)
2. **Add property** → **URL prefix**: `https://www.beanbarrel.coffee`
3. Verifikáció: válaszd az **HTML tag** módszert
4. Másold ki **csak** a `content="..."` értéket a meta tagből (idézőjel nélkül) — ne a teljes `<meta ...>` sort
   - Példa: `BcLccCpfA49xhLtz_vPVya318IawBHL2arIt3dkVF14`
5. Küldd el a fejlesztőnek — ő beállítja a Vercelben:
   - Változó neve: `PUBLIC_GSC_VERIFICATION`
   - Environment: **Production**
6. Redeploy után a Search Console-ban kattints: **Verify**
7. **Sitemaps** menü → Add new sitemap:
   ```
   https://www.beanbarrel.coffee/sitemap-index.xml
   ```
8. **URL Inspection** — kérj indexelést ezekre:
   - `https://www.beanbarrel.coffee/`
   - `https://www.beanbarrel.coffee/rendezvenyek`
   - `https://www.beanbarrel.coffee/franchise`
   - `https://www.beanbarrel.coffee/kontakt`

---

## 2. Google Analytics 4 (ajánlott)

1. Nyisd meg: [analytics.google.com](https://analytics.google.com)
2. Admin → **Create property** → név: `Bean & Barrel`
3. Data stream: Web → URL: `https://www.beanbarrel.coffee`
4. Másold ki a **Measurement ID**-t (pl. `G-XXXXXXXXXX`)
5. Küldd el a fejlesztőnek — Vercel env:
   - `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Production → Redeploy
6. Ellenőrzés: GA4 **Realtime** nézet — látogass el az oldalra, meg kell jelenned

> **GDPR:** az adatvédelmi tájékoztató említi az analitikát. Cookie banner bevezetése előtt érdemes egyeztetni.

---

## 3. Google Business Profile (ha van állandó kitelepülés)

1. [business.google.com](https://business.google.com) → profil létrehozása
2. **Név:** Bean & Barrel
3. **Cím:** 1097 Budapest, Könyves Kálmán körút 34. (ugyanaz, mint a weboldalon)
4. **Telefon:** +36 20 246 9775
5. **Web:** https://www.beanbarrel.coffee
6. Kategória: mobil vendéglátás / kávézó (ami legjobban illik)
7. Fotók: tuktuk, pult, csapat
8. Közösségi profilok linkje a weboldalra

> A cég székhelye (Kékesd, impresszum) és a kitelepülési cím (Budapest) **különböző** — a Business Profile a **vendég által látogatható hely** címét kapja.

---

## 4. Közösségi profilok (10 perc)

Ellenőrizd, hogy minden profilon:

- A **weboldal link** be van állítva: `https://www.beanbarrel.coffee`
- A **név** és **telefon** egyezik a weboldallal

Profilok: Instagram, Facebook, TikTok (`@beanbarrel_bp`)

---

## 5. CMS tartalom (folyamatos)

Az admin felületen (`/admin`):

| Mit | Hol | Miért |
|-----|-----|-------|
| Közelgő kitelepülések | Rendezvények / upcoming | `published: true` + jövőbeli dátum → Google Event schema |
| Galéria alt szöveg | Galéria képek | „Budapest, esküvő” stb. — képkeresés |
| Helyszín cím + GPS | Kapcsolat | Térkép és schema frissül deploy után |

---

## 6. Ellenőrzés (bárki, bejelentkezés nélkül)

- Rich Results teszt: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
  - Teszteld: `/rendezvenyek`, `/franchise`, `/kontakt`
- PageSpeed: [pagespeed.web.dev](https://pagespeed.web.dev) → `https://www.beanbarrel.coffee`

---

## 7. Mit nézz 2–4 hét múlva (Search Console)

- **Performance** → mely keresések hoznak megjelenést
- **Pages** → minden fontos oldal indexelve van-e
- Ha alacsony a CTR: finomítsuk a címeket/leírásokat

---

## Gyors összefoglaló — mit küldj a fejlesztőnek

| Adat | Honnan | Vercel env név |
|------|--------|----------------|
| GSC verification kód | Search Console → HTML tag | `PUBLIC_GSC_VERIFICATION` |
| GA4 Measurement ID | Analytics → Data stream | `PUBLIC_GA_MEASUREMENT_ID` |

Redeploy után mindkettő automatikusan megjelenik az oldalon.

---

## Kapcsolódó dokumentáció

- Fejlesztői részletek: [`seo-beallitas.md`](seo-beallitas.md)
- CMS szerkesztés: [`tartalomkezelo-utmutato.md`](tartalomkezelo-utmutato.md)
