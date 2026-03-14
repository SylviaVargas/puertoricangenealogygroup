---
layout: page
title: "Tarjetas Funerarias — Rincón, Puerto Rico"
description: "Busca y visualiza imágenes de tarjetas funerarias de Rincón y pueblos cercanos, 1965–2020. Un recurso genealógico para la investigación de familias puertorriqueñas."
lang: es
ref: funeral-cards
permalink: /es/tarjetas-funerarias/
parent_title: Herramientas
parent_url: /es/herramientas/
---

Esta colección contiene tarjetas funerarias de Rincón, Puerto Rico y pueblos vecinos, que abarcan de 1965 a 2020. Estas tarjetas registran nombres, fechas de nacimiento, fechas de fallecimiento, lugares de origen e información sobre funerarias, fuentes valiosas para la investigación genealógica.

**Cómo usar:** Escribe un nombre o lugar en el campo de búsqueda para filtrar las tarjetas. Haz clic en cualquier tarjeta para ver la imagen y todos los detalles.

<div class="fc-contribute">
  <h3>Contribuye a esta colección</h3>
  <p>¿Tienes tarjetas funerarias de Rincón o pueblos cercanos? Aceptamos escaneos de cualquier comunidad puertorriqueña. Envía tus escaneos a <a href="mailto:puertoricangenealogygroup@gmail.com">puertoricangenealogygroup@gmail.com</a> y ayúdanos a preservar esta memoria compartida.</p>
</div>

<div class="fc-controls">
  <input type="search" id="fc-search" placeholder="Buscar por nombre o lugar..." aria-label="Buscar tarjetas funerarias">
  <div class="fc-year-filter">
    <label for="fc-year-from">Año de fallecimiento:</label>
    <input type="number" id="fc-year-from" placeholder="1965" min="1922" max="2020" aria-label="Año desde">
    <span aria-hidden="true">–</span>
    <input type="number" id="fc-year-to" placeholder="2020" min="1922" max="2020" aria-label="Año hasta">
  </div>
</div>

<p class="fc-count" id="fc-count"></p>

<div class="fc-grid" id="fc-grid"></div>

<div class="fc-modal" id="fc-modal" role="dialog" aria-modal="true" aria-labelledby="fc-modal-name" hidden>
  <div class="fc-modal-overlay" id="fc-modal-overlay"></div>
  <div class="fc-modal-inner">
    <button class="fc-modal-close" id="fc-modal-close" aria-label="Cerrar">&#x2715;</button>
    <div class="fc-modal-nav">
      <button class="fc-nav-btn" id="fc-nav-prev" aria-label="Tarjeta anterior">&#x2039;</button>
      <button class="fc-nav-btn" id="fc-nav-next" aria-label="Tarjeta siguiente">&#x203A;</button>
    </div>
    <h2 class="fc-modal-name" id="fc-modal-name"></h2>
    <div class="fc-modal-img-wrap">
      <img class="fc-modal-img" id="fc-modal-img" src="" alt="">
    </div>
    <div class="fc-modal-toggle" id="fc-modal-toggle">
      <button class="fc-toggle-btn active" id="fc-btn-interior" data-side="interior">Interior</button>
      <button class="fc-toggle-btn" id="fc-btn-front" data-side="front">Frente</button>
    </div>
    <dl class="fc-modal-meta" id="fc-modal-meta"></dl>
  </div>
</div>

<script>
const FC_LANG = 'es';
const FC_BASE_URL = '/assets/images/funeralcards/';
const FC_DATA = {{ site.data.funeralcards | jsonify }};
</script>
<script src="{{ '/assets/js/funeralcards.js' | relative_url }}"></script>
