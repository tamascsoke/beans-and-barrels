# Bean & Barrel — Tartalomkezelő útmutató

Ez az útmutató segít a weboldal tartalmának szerkesztésében a **Sveltia CMS** felületen keresztül. Nem kell programozni — csak böngésző és GitHub fiók kell.

## Bejelentkezés

1. Nyisd meg a tartalomkezelőt: **https://www.beanbarrel.coffee/admin**
2. Kattints a **„Login with GitHub”** (Bejelentkezés GitHubnal) gombra.
3. Jelentkezz be a GitHub fiókoddal, amit a fejlesztő meghívott a projekthez.
4. Első alkalommal elfogadni kell a GitHub meghívót (email értesítés érkezik).

Ha nem tudsz belépni, ellenőrizd, hogy elfogadtad-e a meghívót, vagy írj a fejlesztőnek.

## Mentés és publikálás

1. Szerkeszd a kívánt tartalmat a bal oldali menüben.
2. Kattints a **„Mentés”** / **„Publish”** gombra (jobb felső sarok).
3. A rendszer automatikusan elmenti a változtatást.
4. Az éles weboldal **1–3 perc múlva** frissül (automatikus újraépítés).

**Tipp:** Mentés után várj pár percet, majd frissítsd az oldalt (F5), mielőtt azt gondolod, hogy nem jelent meg a változás.

## Mit hol szerkeszthetsz?

| Weboldal rész | CMS menüpont |
|---------------|--------------|
| Főoldal — forgó képes szekció (carousel) | **Főoldal carousel** |
| Főoldal — alul futó képsor + Galéria oldal | **Képgaléria** |
| Kínálat oldal — kategóriák és tételek | **Kínálat kategóriák** |
| Rendezvények — „Miért minket?” kártyák | **Rendezvények — Miért minket** |
| Rendezvények — tipikus alkalmak listája | **Tipikus rendezvények (lista)** |
| Rendezvények — közelgő kitelepülések | **Aktuális kitelepülések** |
| Kontakt oldal + lábléc elérhetőség | **Kontakt információk** |
| Kontakt oldal — helyszín mini térkép | **Kontakt információk** → Helyszín mezők |
| 20 mp tétlenség után megjelenő rejtett szöveg | **Easter egg történet (idle)** |

## Gyakori szerkesztési feladatok

### Telefonszám vagy email módosítása

1. **Kontakt információk** → **Kontakt**
2. Módosítsd a **Telefon (megjelenített)** és **Email** mezőket
3. Mentés

### Helyszín és mini térkép (Kontakt + lábléc)

1. **Kontakt információk** → **Kontakt**
2. Kapcsold be: **Helyszín térkép megjelenítése**
3. Töltsd ki:
   - **Megjelenített cím** — ahogy a látogatóknak látszódjon (pl. `1051 Budapest, Példa utca 1.`)
   - **Helyszín a térképen** — kattints a térképre, keress címre, vagy használd a **GPS gombot**
4. Opcionális: **Megjegyzés** (nyitvatartás, „Ma itt vagyunk”, stb.)
5. Mentés → 1–3 perc múlva a térkép frissül a **Kontakt** oldalon és a **láblécben**

### Helyszín mobilon, GPS-sel (tuktuknál)

1. Nyisd meg telefonon: **https://www.beanbarrel.coffee/admin**
2. **Kontakt információk** → **Kontakt**
3. **Helyszín a térképen** mező:
   - nyomd meg a **GPS / jelenlegi helyem** gombot
   - engedélyezd a helymeghatározást a böngészőben
   - finomítsd a pint, ha kell (kattintással)
4. Írd be a **Megjelenített címet** (a térkép keresőjéből másolhatod, vagy kézzel)
5. Mentés, majd várj 1–3 percet az éles oldal frissülésére

**Tartalék módszer (GPS nélkül):** [Google Maps](https://maps.google.com) → hely megkeresése → pin a térképen → **Helyszín a térképen** mezőben keresővel ugyanazt a címet megadni.

### Új kitelepülés hozzáadása

1. **Aktuális kitelepülések** → **Új kitelepülés**
2. Töltsd ki: cím, dátum, helyszín, rövid leírás
3. **Publikálva:** kapcsoló be = megjelenik az oldalon
4. Mentés

Ha lejárt egy esemény, kapcsold ki a **Publikálva** kapcsolót, vagy töröld a bejegyzést.

### Kínálat frissítése (új ital / snack)

1. **Kínálat kategóriák** → válaszd ki a kategóriát (pl. Kávé)
2. A **Tételek** listában add hozzá vagy szerkeszd a nevet
3. Kategória kép cseréje: **Kép** mező → új fotó feltöltése
4. Mentés

### Galéria fotó feltöltése

1. **Képgaléria** → **Új fotó**
2. **Sorrend:** kisebb szám = előrébb jelenik meg
3. **Fotó:** tölts fel JPG vagy WebP képet (ajánlott arány: 4:3, max. ~2 MB)
4. **Leírás (alt szöveg):** pl. „Bean & Barrel tuktuk egy esküvőn Balatonfüreden”
5. Mentés

### Főoldal carousel slide szerkesztése

1. **Főoldal carousel** → válaszd ki a slide-ot
2. Módosítható: kis cím, cím, leírás, gomb felirat, gomb link, kép
3. **Sorrend** szám határozza meg a megjelenési sorrendet
4. Mentés

## Képfeltöltés szabályai

- **Formátum:** WebP vagy JPG (WebP előnyben)
- **Méret:** max. ~2 MB fájlméret
- **Galéria fotók:** automatikusan a galéria mappába kerülnek
- **Carousel / kínálat képek:** a fő feltöltési mappába kerülnek
- Ha a kép nem jelenik meg az oldalon, várj 2–3 percet az újraépítésre; ha utána sem látszik, jelezd a fejlesztőnek

## Amit most nem tudsz szerkeszteni

Ezek a weboldal kódjában vannak — változtatáshoz fejlesztői segítség kell:

- **Rólunk** oldal — alapítók, történet szöveg, fotók elrendezése
- **Franchise** oldal teljes tartalma
- **Impresszum** és **Adatvédelem** jogi szövegek
- Oldal elrendezés, design, betűtípusok, animációk

## Gyakori problémák

| Probléma | Megoldás |
|----------|----------|
| Nem tudok belépni | Elfogadtad a GitHub meghívót? Próbáld inkognitó ablak nélkül. |
| Mentés után nem látom a változást | Várj 1–3 percet, majd frissítsd az oldalt (Ctrl+F5). |
| Kép nem jelenik meg | Ellenőrizd, hogy mentetted-e; várj az újraépítésre. |
| Véletlenül rossz adatot mentettem | A CMS korábbi verziókat is tárol — írj a fejlesztőnek visszaállításhoz. |

## SEO tippek szerkesztőknek

A keresőben való jobb megjelenéshez érdemes:

- **Galéria:** alt szövegben helyszín is legyen (pl. „Bean & Barrel tuktuk esküvőn, Budapest”)
- **Kitelepülések:** helyszín mezőben város + pontos hely (pl. „Budapest, Városliget”)
- **Carousel:** rendezvény slide szövegében Budapest, ha releváns
- **Kínálat:** terméknevek maradjanak érthetőek, ne csak rövidítések

Technikai SEO (Google Search Console, Analytics): [`seo-beallitas.md`](seo-beallitas.md)

## Segítség

Technikai probléma vagy olyan módosítás, ami nincs a fenti listában:

- **Fejlesztő:** Tamás Csőke — tamascsoke@gmail.com
- **Weboldal:** https://www.beanbarrel.coffee

---

*Utolsó frissítés: 2026. június*
