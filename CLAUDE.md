# CLAUDE.md — Puerto Rican Genealogy Group Website

This file provides focused context for Claude Code when working inside the `puertoricangenealogygroup/` directory.

---

## Site Identity

- **Jekyll** static site deployed to **puertoricangenealogy.org** via GitHub Pages
- **Bilingual**: English (root `/`) and Spanish (`/es/`)
- **Ruby version**: 3.3.6 (pinned in `.ruby-version` — do NOT use Ruby 4+, it breaks the `github-pages` gem)
- **Theme**: `pages-themes/minimal@v0.2.0` (remote theme)

---

## Session Start Protocol

At the start of every session and at the top of every planning or processing block, state the current date and time.

**Format:** `Session: YYYY-MM-DD HH:MM` (local time)

---

## Build & Serve

```bash
# Position in the correct directory
cd /Users/sylviavargas/Documents/GitHub/Claude/puertoricangenealogygroup
rm Gemfile.lock 

# First time or after dependency changes:
bundle install

# Local dev server:
bundle exec jekyll serve
# → http://localhost:4000

# If bundle install fails: delete Gemfile.lock and retry
```

---

## Bilingual Update Rule (CRITICAL)

**Every content change must be applied to BOTH languages.** When you change an English page, also update its Spanish counterpart:

| English path | Spanish counterpart |
|---|---|
| `page.md` (root) | `es/page.md` |
| `_research-guides/guide-name.md` | `_research-guides/es-guide-name.md` |
| `research-guides.md` | `es/guias-investigacion.md` |

Frontmatter pairing: both files must share the same `ref:` value. The `lang:` field must be `en` or `es`.

---

## External Link Format (Required)

All external HTTP/HTTPS links in `.md` files must use this HTML format — **never** plain markdown `[text](url)`:

```html
<a href="URL" target="_blank" rel="noopener noreferrer"><em>Link Text</em></a>
```

- `mailto:` and internal/relative links: keep as standard markdown
- Bold wrappers: `**<a href="..." target="_blank" rel="noopener noreferrer"><em>text</em></a>**`

---

## Navigation

To add a page to the site menu, edit `_config.yml` and add entries to **both** `navigation.en` and `navigation.es`:

```yaml
navigation:
  en:
    - title: Page Title
      url: /page-url/
  es:
    - title: Título de Página
      url: /es/url-de-pagina/
```

---

## Layouts & Collections

| Layout | Used for | Path pattern |
|---|---|---|
| `default` | Home page, bare pages | any `.md` at root or `es/` |
| `page` | Standard content pages with title header + breadcrumb | `layout: page` in frontmatter |
| `guide` | Research guide modules | `_research-guides/*.md` (auto-applied) |
| `resource` | Resource pages | `_resources/*.md` (auto-applied) |
| `municipality` | Municipality detail pages | `_municipalities/*.md` (auto-applied) |

Research guides output at `/research-guides/:name/`; resources at `/resources/:name/`.
Municipality pages output at `/tools/municipality-guide/:name/` (EN) or explicit `permalink:` in frontmatter (ES, e.g., `/es/guia-municipios/san-german/`).

---

## CSS & Styling

- **All CSS** lives in `assets/css/style.css` — the `_sass/` directory is intentionally empty
- **Brand colors** (CSS variables):
  ```css
  --navy: #1a3a5c
  --red: #c41e3a
  --cream: #f5f0e6
  --gold: #c9a962
  ```
- **Fonts**: Merriweather (headings), Open Sans (body) — loaded via Google Fonts in `_includes/head.html`
- **Max width**: 1200px; **Header height**: 80px

---

## Logo Usage

- All pages use logo width `80` except Quick Start guides which use width `60` (intentional — do not change)
- Logo path (relative from `md/` files): `../assets/logo-nobackground.png`

---

## Frontmatter Template

```yaml
---
layout: page
title: "Page Title"
description: "Brief description for SEO."
lang: en          # or es
ref: page-ref     # shared between EN and ES versions for language switcher
permalink: /url/  # required for non-collection pages
---
```

---

## File Conventions

- No em dashes (—) in generated content — use commas, semicolons, or colons instead
- Spanish files: full diacritics always (á, é, í, ó, ú, ñ, ü, ¿, ¡) — run `check-spanish.sh` to verify
- Copyright line at end of course `.md` files: `*© 2026 Sylvia Vargas. Teaching Genealogists AI™. All rights reserved.*`

---

## Copyright Infrastructure

Copyright is managed centrally via `_config.yml` fields. Do not hardcode author name, trademark, or year range in templates.

**`_config.yml` copyright fields:**

```yaml
author:
  name: "Sylvia Vargas"
  url: "https://looking4myroots.com"
copyright_year_start: "2024"
trademark: "Teaching Genealogists AI™"
```

**Template variables:**

| Variable | Value |
| --- | --- |
| `{{ site.author.name }}` | Sylvia Vargas |
| `{{ site.author.url }}` | `https://looking4myroots.com` |
| `{{ site.copyright_year_start }}` | 2024 |
| `{{ site.trademark }}` | Teaching Genealogists AI™ |

**Where copyright appears:**

- **Footer (every page):** `_includes/footer.html` — single legal row: `© 2024–[year] Sylvia Vargas | Copyright & Usage | Privacy Policy`; trademark line in dimmer sub-row below
- **`<head>` meta tags:** `_includes/head.html` — `author`, `copyright`, and `rights` meta tags; Schema.org `founder`, `copyrightHolder`, `copyrightYear`
- **Course/guide files:** Hardcoded `© 2026 Sylvia Vargas. Teaching Genealogists AI™.` at end of each file — do NOT make these dynamic; 2026 is the year of first publication
- **Copyright pages:** `copyright.md` (EN) and `es/derechos-de-autor.md` (ES) — full terms of use, linked from footer
- **Privacy Policy pages:** `privacy-policy.md` (EN) and `es/politica-de-privacidad.md` (ES) — analytics disclosure, data practices, linked from footer

---

## Municipality Images

Coat of arms and historical map images follow a strict naming convention. Full details in `prgg-admin/municipality-pages/CONVENTIONS.md`.

**Folders:**

- Escudos: `assets/images/municipalities/escudos/`
- Maps: `assets/images/municipalities/maps/`

**Naming format:** `[municipality-id]-[year].[ext]`

- `municipality-id`: JSON `id` field with underscores as hyphens (e.g., `san-german`, `cabo-rojo`)
- `year`: escudo grant year (royal decree/resolution) or map depicted year; use `unknown` when unconfirmed
- `ext`: `svg` preferred for escudos; `jpg` for maps

**Examples:** `san-german-1574.svg`, `ponce-unknown.jpg`

Before placing any image: verify the license on Wikimedia Commons manually (automated access returns 403). Update the `escudo.license` and `escudo.attribution_url` fields in `_data/pr-municipalities.json`.

---

## Before Completing Any Website Change

**Verify every internal link in new or modified files before finishing.** For each internal href (relative path or absolute path starting with `/`):

1. Resolve the target: check `permalink:` in the matching `.md` file or `_research-guides/`/`_resources/` collection file.
2. Confirm the file exists in the repo. If not, find the correct permalink and fix the link.
3. Spanish pages must link to Spanish permalinks (e.g., `/es/guias-investigacion/...` not `/research-guides/...`).

Common broken-link patterns to watch for:

- Using a guessed slug like `/research-guides/getting-started-overview/` when the real permalink is `/research-guides/getting-started/`
- English links copy-pasted into Spanish files without updating to the ES permalink

External links do not need verification during editing (they change without notice), but must follow the `<a href="..." target="_blank" rel="noopener noreferrer"><em>text</em></a>` format.

---

## Required Verification — Before Marking Any Task Done

**This is mandatory. Do not report a task complete without running these steps.**

1. Start the Jekyll server (from `puertoricangenealogygroup/`):

   ```bash
   bundle exec jekyll serve
   ```

2. Visit the affected page(s) at `http://localhost:4000`
3. Confirm the change is correct and nothing is visually broken
4. Visit the Spanish counterpart and confirm parity
5. Resize to mobile width (~375px) if the change is CSS or layout

Full per-type checklists are in `prgg-admin/FAQ.md` under "Verification & Testing".

---

## After Every Website Change

Append an entry to `../prgg-admin/CHANGELOG.md`:

```
## YYYY-MM-DD
- File(s) changed: ...
- What changed and why: ...
```

No exceptions.

---

## What's New — Required Update (Required)

**Any new page, new feature, or significant enhancement** must be added to both news files before the session ends:

- `_data/news.yml` — English entry
- `_data/news_es.yml` — Spanish entry

**What counts as a What's New entry:**

- New municipality detail page
- New research guide or course module
- New tool or interactive feature
- Significant enhancement to an existing page (new fields, redesigned sections, new data)

**Entry format:**

```yaml
- date: YYYY-MM-DD
  category: features        # features | courses | guides
  featured: true            # true for ONE entry at a time — demote the previous featured to false
  title: "New: Short Title"
  body: "1-2 sentences describing what was added and why it matters to researchers."
  link: /internal/path/
```

**Spanish entry rules:**

- Use `category: funciones` (not `features`)
- `link:` must point to the Spanish permalink (e.g., `/es/guia-municipios/cabo-rojo/`)
- Full diacritics required

**No exceptions.** If you add a municipality page, guide, tool, or enhancement and do not update these files, the session is incomplete.

---

## Key File Paths

| File | Purpose |
|---|---|
| `_config.yml` | Site config, navigation, collections, defaults |
| `_includes/header.html` | Site header, nav, search |
| `_includes/footer.html` | Site footer |
| `_includes/head.html` | `<head>` tag, fonts, SEO |
| `assets/css/style.css` | All CSS styles |
| `assets/js/main.js` | Site-wide JS (search, nav, smooth scroll) |
| `search.json` | Client-side search index generator |
| `_data/` | YAML/JSON data files (news, municipalities, funeral cards) |
| `assets/images/` | Site images and logos |
| `assets/pdfs/` | PDF course materials |
| `copyright.md` | English copyright and terms of use page (`/copyright/`) |
| `es/derechos-de-autor.md` | Spanish copyright and terms of use page (`/es/derechos-de-autor/`) |
| `privacy-policy.md` | English privacy policy page (`/privacy-policy/`) |
| `es/politica-de-privacidad.md` | Spanish privacy policy page (`/es/politica-de-privacidad/`) |
