# GitHub hozzáférés a tartalomkezelőhöz

Az ügyfél a saját GitHub fiókjával jelentkezik be a `/admin` felületre. Ehhez **Write** jog kell a `tamascsoke/beans-and-barrels` repóban.

## Meghívó küldése

1. Nyisd meg: https://github.com/tamascsoke/beans-and-barrels/settings/access
2. **Add people** → add meg az ügyfél GitHub felhasználónevét
3. Jogosultság: **Write** (nem kell Admin)
4. Küldd el a meghívót

Parancssorból (ha `gh` CLI elérhető):

```sh
gh api repos/tamascsoke/beans-and-barrels/collaborators/UGYFEL_GITHUB_USER \
  -X PUT \
  -f permission=push
```

Cseréld ki az `UGYFEL_GITHUB_USER` részt a tényleges felhasználónévre.

## Ügyfél oldali lépések

1. Email értesítés a GitHub meghívóról → **Accept invitation**
2. Böngészőben: https://www.beanbarrel.coffee/admin
3. **Login with GitHub** → bejelentkezés az elfogadott fiókkal

## Fontos

- Az ügyfélnek **nem** kell kódot írnia vagy terminált használnia.
- A CMS minden mentéskor automatikusan commitol a `main` branchre.
- A Vercel ~1–3 percen belül újra buildeli az oldalt.
- Több szerkesztő is meghívható külön GitHub fiókkal.

## Jelenlegi collaboratorok listázása

```sh
gh api repos/tamascsoke/beans-and-barrels/collaborators --jq '.[].login'
```
