# Sveltia CMS — GitHub OAuth beállítás (fejlesztői)

A tartalomkezelő (`/admin`) GitHub-on keresztül menti a változtatásokat. A bejelentkezéshez egy ingyenes **Cloudflare Worker** OAuth proxy kell.

Cél URL: `https://sveltia-cms-auth.beanbarrel.workers.dev`

## 1. GitHub OAuth App

1. Nyisd meg: https://github.com/settings/applications/new
2. Töltsd ki:
   - **Application name:** `Bean & Barrel CMS`
   - **Homepage URL:** `https://www.beanbarrel.coffee`
   - **Authorization callback URL:** `https://sveltia-cms-auth.beanbarrel.workers.dev/callback`
3. Mentsd el, majd generálj **Client Secret**-et.
4. Jegyezd fel a **Client ID** és **Client Secret** értékeket (a secret csak egyszer látszik).

## 2. Cloudflare Worker deploy

A worker forráskód a repóban: [`infra/sveltia-cms-auth/`](../infra/sveltia-cms-auth/).

```sh
cd infra/sveltia-cms-auth
npm install
npx wrangler login
npm run deploy
```

Deploy után a Cloudflare dashboardon állítsd be a workers.dev aldomaint (ha kell): `sveltia-cms-auth.beanbarrel`.

## 3. Worker környezeti változók

Cloudflare dashboard → Workers → `sveltia-cms-auth` → **Settings** → **Variables**:

| Változó | Érték |
|---------|--------|
| `GITHUB_CLIENT_ID` | GitHub OAuth Client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth Client Secret (Encrypt) |
| `ALLOWED_DOMAINS` | `www.beanbarrel.coffee,beans-and-barrels.vercel.app` |

## 4. Ellenőrzés

1. Nyisd meg: https://www.beanbarrel.coffee/admin
2. Kattints: **Login with GitHub**
3. Engedélyezd a hozzáférést
4. A CMS felületnek meg kell jelennie

Ha hibaüzenet jön (`MISCONFIGURED_CLIENT`, `UNSUPPORTED_DOMAIN`), ellenőrizd a worker változókat és az `ALLOWED_DOMAINS` listát.

## 5. Lokális fejlesztés (opcionális)

CMS szerkesztéshez lokálisan proxy:

```sh
npm run cms:proxy
```

Majd másik terminálban: `npm run dev`, és nyisd meg: http://localhost:4321/admin

Lokális proxy esetén a `public/admin/config.yml` `backend` szekciójában ideiglenesen használható:

```yaml
local_backend: true
```

(Élesben ne hagyd bekapcsolva.)

## Kapcsolódó dokumentáció

- Ügyfél útmutató: [`tartalomkezelo-utmutato.md`](tartalomkezelo-utmutato.md)
- GitHub hozzáférés: [`cms-github-hozzaferes.md`](cms-github-hozzaferes.md)
- Hivatalos forrás: https://github.com/sveltia/sveltia-cms-auth
