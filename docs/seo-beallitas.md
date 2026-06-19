# SEO beállítás — Google Search Console és Analytics

Ez az útmutató a Bean & Barrel weboldal keresőoptimalizálásának technikai bekötéséhez készült.

## Google Search Console (GSC)

1. Nyisd meg: https://search.google.com/search-console
2. **Add property** → **URL prefix**: `https://www.beanbarrel.coffee`
3. Verifikáció — **HTML tag** módszer:
   - Másold ki a `content="..."` értéket a meta tagből
   - Vercel dashboard → Project → Settings → Environment Variables
   - Új változó: `PUBLIC_GSC_VERIFICATION` = a content érték (csak a kód, idézőjel nélkül)
   - Production environment, majd redeploy
4. **Sitemaps** → Add new sitemap:
   ```
   https://www.beanbarrel.coffee/sitemap-index.xml
   ```
5. URL inspection: ellenőrizd a `/rendezvenyek` és `/franchise` oldalakat

## Google Analytics 4 (GA4)

1. https://analytics.google.com → Admin → Create property
2. Property neve: `Bean & Barrel`
3. Data stream: Web → `https://www.beanbarrel.coffee`
4. Másold ki a **Measurement ID**-t (pl. `G-XXXXXXXXXX`)
5. Vercel environment variable:
   - `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Production only (vagy preview is, ha tesztelsz)
6. Redeploy után a GA4 Realtime nézetben látszanak a látogatók

A mérőkód csak akkor töltődik be, ha a `PUBLIC_GA_MEASUREMENT_ID` env be van állítva.

## Mit optimalizáltunk az oldalon

| Oldal | Fókusz | Látható oldal |
|-------|--------|----------------|
| `/rendezvenyek` | Rendezvény vendéglátás Budapest (meta + schema) | Eredeti copy, változatlan |
| `/franchise` | Franchise Magyarország (meta + GYIK schema) | Eredeti copy, látható GYIK nélkül |
| `/` | Bővített meta + `FoodEstablishment` schema | Eredeti copy |

**Budapest** csak metaadatokban és strukturált adatban szerepel (title, description, JSON-LD) — a weboldal látható szövege nem tartalmaz külön budapesti szekciókat.

Structured data:

| Típus | Hol |
|-------|-----|
| `Service` | `/rendezvenyek`, `/franchise` |
| `FAQPage` | `/rendezvenyek`, `/franchise` (csak JSON-LD; látható GYIK később CMS-ből) |
| `Event` | `/rendezvenyek` — automatikusan minden publikált CMS kitelepülésből |
| `FoodEstablishment` | `/` |
| `LocalBusiness` | `/kontakt` — cím, GPS, közösségi linkek |

Ellenőrzés: https://search.google.com/test/rich-results → `https://www.beanbarrel.coffee/rendezvenyek`

## Ajánlott követő lépések (nem kód)

1. **Google Business Profile** — ha van fix kitelepülési / üzleti profil
2. Közösségi profilok NAP konzisztencia: név, web, telefon (`beanbarrel_bp`)
3. 2–4 hét után GSC **Performance** → mely kulcsszavakra jelenik meg az oldal
4. CMS-ben galéria alt szövegekben helyszín (pl. „Budapest, esküvő”)

**Ügyfél checklist (Google-fiók):** [`seo-ugyfel-checklist.md`](seo-ugyfel-checklist.md)

## Kapcsolódó dokumentáció

- [`tartalomkezelo-utmutato.md`](tartalomkezelo-utmutato.md) — CMS szerkesztés
- [`../README.md`](../README.md) — fejlesztői összefoglaló
