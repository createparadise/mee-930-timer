# Open-core boundary — source audit (2026-09-25)

## Source inspected

- `/Users/mango/Desktop/МОИ САЙТЫ/CreateParadise.Now/createparadise-site/app.html` (~38 KB)
- Related protocol docs: `_geo_v14_zenodo/MEE_930_GLUT4_preprint.md`, `llms.txt`, `llms-full.txt`, `course.html` (structure only; content not copied)

## What `app.html` actually is

`app.html` is a **marketing landing** for “Paradise OS / Sovereign Life Exocortex”, not a functional session timer.

It contains:

- Brand CSS / ambient SVG hero
- Bottleneck diagnostic `<select>` widget (marketing copy)
- Waitlist / WhatsApp CTA
- Upsell link to `course.html` ($17)
- Tracking: Google Analytics (`G-YNCN72B8D5`), Meta Pixel (`25373923752230310`)
- Personal WhatsApp deep-link (`wa.me/628135301720`)

There is **no** countdown engine implementing 1:00 + 3×2:30 + 1:00 in `app.html`.
Course pages mention a “standalone PWA timer” and embed unrelated focus-mode timers; the MEE 9:30 structure itself is documented in protocol text.

## Decision

Ship a **minimal 9:30 timer scaffold** (`mee-930-timer.html`), not a full extract of `app.html`.

| Asset | Open-source? | Reason |
|---|---|---|
| Phase timing (1:00 / 3×2:30 / 1:00) | YES | Core protocol scaffold; public in llms / preprint |
| Minimal standalone UI + beep + SW/manifest | YES | Needed for usable MIT package |
| Full course modules / exercise media | NO | Paid product |
| Paradise OS funnel, waitlist, WhatsApp | NO | Commercial + PII surface |
| GA / Meta Pixel IDs | NO | Tracking / operational |
| Sunny Coast, `/maxim/`, investor | NO | Explicitly excluded |
| `.env`, Netlify, GSC, service accounts | NO | Secrets |

## Secrets / PII found and stripped

| Item | Where | Action |
|---|---|---|
| GA4 `G-YNCN72B8D5` | app.html | Not copied |
| Meta Pixel `25373923752230310` | app.html | Not copied |
| WhatsApp `+62 813 5301 720` | app.html | Not copied |
| Site `.env` (present next to SoT) | createparadise-site/.env | Not opened / not copied |
| IndexNow key files | site root | Not copied |
| Netlify / scripts deploy tokens | scripts/ | Not copied |

Author attribution kept public: Maxim Lagoshin · Create Paradise Now · createparadise.now
