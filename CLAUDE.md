# CLAUDE.md — Puerto Rican Genealogy Group Website

This file provides focused context for Claude Code when working inside the `puertoricangenealogygroup/` directory.

---

## Site Identity

- **Jekyll** static site deployed to **puertoricangenealogy.org** via GitHub Pages
- **Bilingual**: English (root `/`) and Spanish (`/es/`)
- **Ruby version**: 3.3.6 (pinned in `.ruby-version` — do NOT use Ruby 4+, it breaks the `github-pages` gem)
- **Theme**: `pages-themes/minimal@v0.2.0` (remote theme)

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

Research guides output at `/research-guides/:name/`; resources at `/resources/:name/`.

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

## After Every Website Change

Append an entry to `../prgg-admin/CHANGELOG.md`:

```
## YYYY-MM-DD
- File(s) changed: ...
- What changed and why: ...
```

No exceptions.

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
