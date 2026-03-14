---
layout: page
title: "Funeral Cards — Rincón, Puerto Rico"
description: "Browse and search funeral card images from Rincón and surrounding towns, 1965–2020. A genealogical resource for Puerto Rican family research."
lang: en
ref: funeral-cards
permalink: /funeral-cards/
parent_title: Tools
parent_url: /tools/
---

This collection contains funeral cards from Rincón, Puerto Rico and neighboring towns, spanning 1965 to 2020. These cards record names, birth dates, death dates, birthplaces, and funeral home information — valuable sources for genealogical research.

**How to use:** Type a name or place in the search box to filter the cards. Click any card to view the image and full details.

<div class="fc-contribute">
  <h3>Contribute to this collection</h3>
  <p>Do you have funeral cards from Rincón or nearby towns? We welcome scans from any Puerto Rican community. Email your scans to <a href="mailto:puertoricangenealogygroup@gmail.com">puertoricangenealogygroup@gmail.com</a> and help us preserve this shared memory.</p>
</div>

<div class="fc-controls">
  <input type="search" id="fc-search" placeholder="Search by name or place..." aria-label="Search funeral cards">
  <div class="fc-year-filter">
    <label for="fc-year-from">Death year:</label>
    <input type="number" id="fc-year-from" placeholder="1965" min="1922" max="2020" aria-label="Year from">
    <span aria-hidden="true">–</span>
    <input type="number" id="fc-year-to" placeholder="2020" min="1922" max="2020" aria-label="Year to">
  </div>
</div>

<p class="fc-count" id="fc-count"></p>

<div class="fc-grid" id="fc-grid"></div>

<div class="fc-modal" id="fc-modal" role="dialog" aria-modal="true" aria-labelledby="fc-modal-name" hidden>
  <div class="fc-modal-overlay" id="fc-modal-overlay"></div>
  <div class="fc-modal-inner">
    <button class="fc-modal-close" id="fc-modal-close" aria-label="Close">&#x2715;</button>
    <div class="fc-modal-nav">
      <button class="fc-nav-btn" id="fc-nav-prev" aria-label="Previous card">&#x2039;</button>
      <button class="fc-nav-btn" id="fc-nav-next" aria-label="Next card">&#x203A;</button>
    </div>
    <h2 class="fc-modal-name" id="fc-modal-name"></h2>
    <div class="fc-modal-img-wrap">
      <img class="fc-modal-img" id="fc-modal-img" src="" alt="">
    </div>
    <div class="fc-modal-toggle" id="fc-modal-toggle">
      <button class="fc-toggle-btn active" id="fc-btn-interior" data-side="interior">Card interior</button>
      <button class="fc-toggle-btn" id="fc-btn-front" data-side="front">Card front</button>
    </div>
    <dl class="fc-modal-meta" id="fc-modal-meta"></dl>
  </div>
</div>

<script>
const FC_LANG = 'en';
const FC_BASE_URL = '/assets/images/funeralcards/';
const FC_DATA = {{ site.data.funeralcards | jsonify }};
</script>
<script src="{{ '/assets/js/funeralcards.js' | relative_url }}"></script>
