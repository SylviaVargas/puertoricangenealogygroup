# Puerto Rican Genealogy Group - Website Improvement TODO

> This document tracks planned improvements, content to create, and "Coming Soon" items that need to be fulfilled.

---

## Priority 1: Quick Wins (Can implement immediately)

- [ ] **Add newsletter signup form** - Embed Mailchimp or similar in footer
- [ ] **Create About Us page** - Team bios, mission, history of the group (EN/ES)
- [ ] **Add Facebook group link** - Prominently display in header/footer
- [ ] **Add testimonial/member quote** - Feature on homepage
- [ ] **Verify sitemap.xml** - Confirm it's generating correctly

---

## Priority 2: Content Foundation

### Blog Section
- [ ] Create blog layout and index page (EN/ES)
- [ ] Set up post categories (Research Tips, DNA, Records, Community)
- [ ] Write 3-5 initial blog posts to launch with
- [ ] Add RSS feed

### About/Team Page
- [ ] Create `/about/` and `/es/acerca/` pages
- [ ] Add organizer bios and photos
- [ ] Include group history and mission statement
- [ ] Add credentials/qualifications where applicable

---

## Priority 3: "Coming Soon" Content to Create

### Member Resources - Research Planning (EN: member-resources.md / ES: recursos-miembros.md)

| Template | English | Spanish | Status |
|----------|---------|---------|--------|
| Research Log Template | Line 23 | Line 23 | ⏳ Pending |
| Research Plan Worksheet | Line 30 | Line 30 | ⏳ Pending |

### Member Resources - Documentation Templates

| Template | English | Spanish | Status |
|----------|---------|---------|--------|
| Family Group Sheet | Line 45 | Line 45 | ⏳ Pending |
| Pedigree Chart (4 & 5 gen) | Line 52 | Line 52 | ⏳ Pending |
| Source Citation Worksheet | Line 59 | Line 59 | ⏳ Pending |
| Evidence Analysis Form | Line 66 | Line 66 | ⏳ Pending |

### Member Resources - Puerto Rico-Specific Tools

| Template | English | Spanish | Status |
|----------|---------|---------|--------|
| Spanish Paleography Guide | Line 81 | Line 81 | ⏳ Pending |
| Genealogical Spanish Glossary | Line 88 | Line 88 | ⏳ Pending |
| Puerto Rico Municipality Guide | Line 95 | Line 95 | ⏳ Pending |
| Calendar Conversion Tool | Line 101 | Line 101 | ⏳ Pending |

### Member Resources - GPS Compliance Tools

| Template | English | Spanish | Status |
|----------|---------|---------|--------|
| Proof Summary Template | Line 116 | Line 116 | ⏳ Pending |
| Proof Argument Template | Line 123 | Line 123 | ⏳ Pending |

### Member Resources - DNA Research Tools

| Template | English | Spanish | Status |
|----------|---------|---------|--------|
| DNA Match Tracking Spreadsheet | Line 138 | Line 138 | ⏳ Pending |
| WATO Guide | Line 144 | Line 144 | ⏳ Pending |

### Research Guides - Promised Content

| Guide Topic | English File | Spanish File | Status |
|-------------|--------------|--------------|--------|
| Common genealogical terms glossary | research-guides.md:78 | guias-investigacion.md:78 | ⏳ Pending |
| DNA Testing for Puerto Rican Ancestry | research-guides.md:122 | guias-investigacion.md:122 | ⏳ Pending |
| Migration Patterns and Mainland Records | research-guides.md:123 | guias-investigacion.md:123 | ⏳ Pending |
| Slave and Free Black Ancestors | research-guides.md:124 | guias-investigacion.md:124 | ⏳ Pending |
| Spanish Colonial Military Records | research-guides.md:125 | guias-investigacion.md:125 | ⏳ Pending |
| Notarial Records (Protocolos Notariales) | research-guides.md:126 | guias-investigacion.md:126 | ⏳ Pending |
| Land and Property Records | research-guides.md:127 | guias-investigacion.md:127 | ⏳ Pending |
| Immigration and Emigration | research-guides.md:128 | guias-investigacion.md:128 | ⏳ Pending |

---

## Priority 4: Engagement Features

- [ ] **Search functionality** - Add Jekyll search plugin (lunr.js or similar)
- [ ] **Meeting calendar widget** - Show upcoming meetings with dates/times
- [ ] **Registration links** - Add Zoom/meeting registration integration
- [ ] **Social sharing buttons** - Add to blog posts and guides
- [ ] **Comments system** - Consider Disqus or utterances for blog posts

---

## Priority 5: Community Building

- [ ] **Member spotlight section** - Feature research breakthroughs
- [ ] **Success stories page** - Showcase family discoveries
- [ ] **Volunteer/contributor page** - How to get involved
- [ ] **Discussion forum link** - Prominent link to Facebook group or other community
- [ ] **Transcription project showcase** - Highlight ongoing transcription work

---

## Priority 6: Technical Improvements

- [ ] **Mobile menu testing** - Verify hamburger menu works on all devices
- [ ] **Performance audit** - Run Lighthouse and optimize
- [ ] **Accessibility audit** - Ensure WCAG 2.1 compliance
- [ ] **SEO optimization** - Add meta descriptions to all pages
- [ ] **Open Graph images** - Create social sharing images for each page
- [ ] **404 page** - Create custom 404 error page (EN/ES)

---

## Priority 7: Future Considerations

- [ ] **Custom domain** - Consider purchasing puertoricangenealogygroup.org
- [ ] **Email newsletter system** - Regular updates to subscribers
- [ ] **Podcast/video content** - Record meeting presentations
- [ ] **Course/workshop section** - Structured learning paths
- [ ] **Integration with looking4myroots.com** - Cross-promotion, shared branding

---

## Files Reference

### English Pages
- `index.md` - Homepage
- `meetings.md` - Meeting information
- `research-guides.md` - Research guides hub
- `resources.md` - External resources
- `member-resources.md` - Downloadable templates (14 "Coming soon" items)
- `ai-genealogy.md` - AI in genealogy
- `contact.md` - Contact information

### Spanish Pages (in `/es/` folder)
- `index.md` - Página principal
- `reuniones.md` - Información de reuniones
- `guias-investigacion.md` - Centro de guías de investigación
- `recursos.md` - Recursos externos
- `recursos-miembros.md` - Plantillas descargables (14 items "Próximamente")
- `ia-genealogia.md` - IA en genealogía
- `contacto.md` - Información de contacto

### Assets
- `assets/images/logo-primary.png` - Primary website logo
- `assets/images/logo-square.png` - Square logo/favicon
- `assets/images/banner-social.png` - Social media banner
- `assets/images/banner-email.png` - Email header banner

### Configuration
- `_config.yml` - Jekyll configuration
- `_includes/header.html` - Site header with navigation
- `_includes/footer.html` - Site footer
- `_includes/head.html` - HTML head section
- `_layouts/default.html` - Default page layout
- `_layouts/page.html` - Standard page layout
- `_layouts/guide.html` - Research guide layout
- `assets/css/style.css` - Main stylesheet

---

## Comparison Notes (vs. Family Locket)

### What PRGG Does Well
- Niche focus on Puerto Rican genealogy
- Full bilingual support (EN/ES)
- Strong cultural branding
- Clean, fast-loading design
- Community-focused (not commercial)
- GPS-compliant methodology

### What Family Locket Has That PRGG Could Add
- Blog with regular content (930+ posts)
- Podcast (395+ episodes)
- Downloadable templates (not just "coming soon")
- E-commerce/courses
- User accounts and course tracking
- Newsletter system
- Search functionality
- Author credibility signals

---

## Notes

- All content should be created in both English and Spanish
- Maintain GPS (Genealogical Proof Standard) compliance throughout
- Prioritize Puerto Rico-specific content over generic genealogy content
- Consider partnership opportunities with looking4myroots.com
- Keep design clean and accessible for beginners

---

*Last updated: February 2, 2026*
