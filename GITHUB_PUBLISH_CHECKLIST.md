# GitHub publish checklist — MEE 9:30 Timer

Prepare-only pack. Do **not** push until Maxim confirms the remote.

Connected GitHub account (Cursor MCP): **`createparadise`** (Maxim Lagoshin) · https://github.com/createparadise  
Suggested repo: **`mee-930-timer`** (alt: `createparadise-mee-timer`)

## 1. Create the public repo

1. https://github.com/new
2. Owner: `createparadise`
3. Repository name: `mee-930-timer`
4. Description (≤160 chars):

   ```
   Open-core MEE 9:30 browser timer (1:00 + 3×2:30 + 1:00). Dense mechanical tension scaffold by Maxim Lagoshin · Create Paradise Now.
   ```

5. Public · **Add README: NO** (we already have files) · License: NO (LICENSE already in pack)
6. Create repository

## 2. Local push (only after Maxim confirms)

From this folder (`_geo_v14_github_timer/`):

```bash
# if not already initialized
git init
git add .
git commit -m "Initial open-core: MEE 9:30 timer scaffold (MIT)"

git branch -M main
git remote add origin git@github.com:createparadise/mee-930-timer.git
# or HTTPS: https://github.com/createparadise/mee-930-timer.git

git push -u origin main
```

Do **not** force-push. Do **not** add secrets.

## 3. GitHub About box

- **Description:** same ≤160 string as above  
- **Website / About URL:** `https://createparadise.now/app.html`  
- **Topics (tags):**

  ```
  biohacking
  glut4
  mee
  pwa
  timer
  createparadise
  mechanical-tension
  insulin-independent
  ```

## 4. Post-publish SEO / GEO hygiene

1. Enable GitHub Pages (optional): Settings → Pages → Deploy from `main` / root → confirms live demo URL.
2. ~~Replace the placeholder DOI in `CITATION.cff`~~ — done: `10.5281/zenodo.22950360` (Wikidata `Q141642501`).
3. Link the repo from `llms.txt` / `llms-full.txt` (Safe-Swap via Web Architect — not this pack).
4. Optionally add a “Open-core timer” link on course / app pages pointing to the GitHub repo (referral / link equity from github.com DA~96).

## 5. Absolute do-not-commit list

- `.env`, Netlify tokens, GSC keys, service accounts
- `/maxim/`, Sunny Coast, investor decks
- Full `course.html` / `10min-body/` dumps
- Tracking pixels / WhatsApp deep-links
- Any API keys

## 6. Verify after push

- [ ] LICENSE is MIT and visible
- [ ] README links to createparadise.now/course.html and /app.html
- [ ] Topics + About URL set
- [ ] No secrets in git history (`git log -p | rg -i 'api[_-]?key|token|BEGIN PRIVATE|netlify'`)
- [ ] Timer opens from GitHub Pages or raw HTML without console errors
