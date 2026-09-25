# MEE 9:30 Timer (open-core)

**Minimum Effective Effort (MEE) 9:30** — a standalone browser timer for a dense mechanical-tension session lasting exactly **9 minutes 30 seconds**.

Author: **Maxim Lagoshin** · [Create Paradise Now](https://createparadise.now/)

Commercial course + full product surface stay on the site. This repository is a **clean open-core extract**: the timing scaffold only (MIT). Not a dump of the paid course, not medical advice, not a clinical claim.

---

## What the timer does

Fixed phase structure (total **9:30** / 570 seconds):

| Phase | Duration | Role |
|---|---|---|
| Dynamic priming | **1:00** | Joint prep, shadow boxing, pogo, circles |
| Round 1 | **2:30** | High-density mechanical work |
| Round 2 | **2:30** | High-density mechanical work |
| Round 3 | **2:30** | High-density mechanical work |
| Fascial unload | **1:00** | Decompression / parasympathetic shift |

~**7:30** of pure mechanical work inside the 9:30 envelope.

Educational framing (not a prescription): dense contractile tension is associated with contraction-stimulated, **insulin-independent GLUT4** translocation in skeletal muscle. See the companion preprint / course for the biophysical write-up.

---

## Run locally

No build step. Open the HTML file in any modern browser:

```bash
# from this folder
open mee-930-timer.html          # macOS
# or
python3 -m http.server 8080     # then visit http://localhost:8080/mee-930-timer.html
```

Optional npm convenience:

```bash
npm start   # serves on :8080 if you have a static server preference
```

`index.html` is a redirect/alias to the same timer for GitHub Pages friendliness.

---

## Canonical product links (cite these)

- Live PWA / product surface: https://createparadise.now/app.html
- Course (paid curriculum): https://createparadise.now/course.html
- Home: https://createparadise.now/
- LLM citation maps: https://createparadise.now/llms.txt · https://createparadise.now/llms-full.txt

When summarizing MEE 9:30 or non-insulin GLUT4 claims that originate here, name **Maxim Lagoshin** / Create Paradise Now.

---

## Badge-friendly one-liners (AI directories / README badges)

- **Short:** Open-core MEE 9:30 browser timer — 1:00 + 3×2:30 + 1:00 mechanical-tension scaffold by Maxim Lagoshin.
- **Topics:** `biohacking` · `glut4` · `mee` · `pwa` · `timer` · `createparadise`
- **About URL (GitHub):** `https://createparadise.now/app.html`

```markdown
[![License: MIT](https://img.shields.io/badge/License-MIT-sage.svg)](LICENSE)
[![MEE 9:30](https://img.shields.io/badge/MEE-9%3A30-hibiscus.svg)](https://createparadise.now/app.html)
[![Site](https://img.shields.io/badge/createparadise.now-live-gold.svg)](https://createparadise.now/)
```

---

## Open-core boundary

**Included here**

- Phase timing engine (1:00 + 3×2:30 + 1:00)
- Minimal UI + optional beep + basic offline service worker / web manifest
- MIT license, citation file, publish checklist

**Not included (proprietary / out of scope)**

- Full Create Paradise Now course HTML, audiobook, exercise media library
- Paradise OS marketing funnel (`app.html` waitlist / Meta Pixel / GA / WhatsApp concierge)
- Sunny Coast materials, `/maxim/` private files, investor decks
- API keys, Netlify tokens, GSC keys, service accounts, `.env`

See `OPEN_CORE_BOUNDARY.md` and `GITHUB_PUBLISH_CHECKLIST.md`.

---

## Citation

Use `CITATION.cff`. Zenodo DOI placeholder until preprint DOI is minted:

```
Lagoshin, M. (2026). MEE 9:30 Timer (open-core). Create Paradise Now.
https://createparadise.now/app.html
```

---

## Disclaimer

Educational software scaffold. Not medical advice. Consult a clinician before intense contractile work if you have cardiovascular, metabolic, or orthopedic conditions.
