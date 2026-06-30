# AI Portfolio Management — Mobile App

A self-contained, installable **mobile HTML app** (PWA) that rebuilds the
*AI Portfolio Management: Comprehensive Wiki* (v1.0, March 2026) as a fast,
touch-friendly field guide and toolkit.

It is a static app — **no build step, no dependencies, no server-side code**.
Open `index.html` and it runs.

## Features

- **Mobile-first UI** — app bar, bottom tab navigation, scroll progress, safe-area
  insets, and a dark, modern theme with a per-section accent color.
- **Full wiki content** — all six sections (A–F) and 32 topics, modeled as
  structured data in `data.js` and rendered into cards, key/value lists, formula
  callouts, tables, step timelines, and notes.
- **Instant search** across every topic, with highlighted snippets.
- **Bookmarks** — save topics for quick access (persisted in `localStorage`).
- **Seven interactive calculators** for the framework's core formulas:
  - Portfolio Health Score (6 weighted dimensions)
  - Risk Tier classifier (interactive B.4 decision tree)
  - Gate 1 · Business Viability score
  - Quick Win Priority score
  - User Persona classifier (PPM / DAM)
  - Knowledge Foundation Health composite
  - Value Realization & Portfolio ROI
- **Installable & offline-capable** — web app manifest + service worker cache.

## Run it

Any static file server works. For example:

```bash
cd ai-portfolio-app
python3 -m http.server 8765
# open http://localhost:8765 on your phone or in a mobile-emulated browser tab
```

On a phone, use the browser's **"Add to Home Screen"** to install it as a
standalone app.

## Project structure

```
ai-portfolio-app/
├── index.html                 # app shell (app bar, tab bar, search, overlays)
├── styles.css                 # mobile-first, dark, themeable styles
├── data.js                    # the entire wiki as structured content blocks
├── app.js                     # hash router, block renderer, search, bookmarks
├── tools.js                   # the seven interactive calculators
├── manifest.webmanifest       # PWA manifest
├── sw.js                      # service worker (offline cache)
└── icons/
    ├── icon.svg               # source vector mark
    ├── icon-{180,192,512}.png # app icons
    ├── icon-maskable-512.png  # maskable icon
    └── generate-icons.cjs     # dependency-free PNG generator (regenerates icons)
```

## Regenerating icons

```bash
node icons/generate-icons.cjs
```

## Content source

All text is derived from the *AI Portfolio Management: Comprehensive Wiki*
(Document Version 1.0, March 2026). For detailed formulas, templates, and
workflows, refer to the original toolkit document.
