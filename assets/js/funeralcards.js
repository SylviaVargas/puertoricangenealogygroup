/**
 * funeralcards.js
 * Search, filter, and lightbox for the Funeral Cards collection.
 * Expects FC_DATA (array), FC_LANG ('en'|'es'), and FC_BASE_URL to be defined inline.
 */
(function () {
  'use strict';

  // --- Labels (bilingual) ---
  const LABELS = {
    en: {
      showing: function (n, total) { return 'Showing ' + n + ' of ' + total + ' cards'; },
      noResults: 'No cards match your search.',
      born: 'Born',
      died: 'Died',
      birthPlace: 'Birthplace',
      deathPlace: 'Death place',
      funeralHome: 'Funeral home',
      unknown: 'Unknown',
      cardInterior: 'Card interior',
      cardFront: 'Card front',
      altMain: 'Funeral card for ',
      altFront: 'Front of funeral card for ',
    },
    es: {
      showing: function (n, total) { return 'Mostrando ' + n + ' de ' + total + ' tarjetas'; },
      noResults: 'Ninguna tarjeta coincide con tu búsqueda.',
      born: 'Nacimiento',
      died: 'Fallecimiento',
      birthPlace: 'Lugar de nacimiento',
      deathPlace: 'Lugar de fallecimiento',
      funeralHome: 'Funeraria',
      unknown: 'Desconocido',
      cardInterior: 'Interior',
      cardFront: 'Frente',
      altMain: 'Tarjeta funeraria de ',
      altFront: 'Frente de la tarjeta de ',
    }
  };

  var lang = (typeof FC_LANG !== 'undefined' && FC_LANG === 'es') ? 'es' : 'en';
  var L = LABELS[lang];
  var baseUrl = (typeof FC_BASE_URL !== 'undefined') ? FC_BASE_URL : '/assets/images/funeralcards/';
  var data = (typeof FC_DATA !== 'undefined') ? FC_DATA : [];

  // Pre-process: add year and search string to each record
  data.forEach(function (card) {
    var m = card.filename.match(/^(\d{4})-/);
    card._year = m ? parseInt(m[1]) : null;
    card._search = [card.name, card.birth_place, card.death_place].join(' ').toLowerCase();
    // Build image URLs
    var base = card.filename.replace(/\.jpg$/i, '');
    card._mainUrl = baseUrl + card.filename;
    card._frontUrl = card.has_front ? (baseUrl + 'front/' + base + '-Front.jpg') : null;
  });

  var filtered = data.slice(); // current filtered set
  var currentIndex = -1;       // index in filtered[] of open modal card
  var currentSide = 'interior'; // 'interior' or 'front'

  // --- DOM refs ---
  var grid = document.getElementById('fc-grid');
  var countEl = document.getElementById('fc-count');
  var searchEl = document.getElementById('fc-search');
  var yearFromEl = document.getElementById('fc-year-from');
  var yearToEl = document.getElementById('fc-year-to');
  var modal = document.getElementById('fc-modal');
  var modalOverlay = document.getElementById('fc-modal-overlay');
  var modalClose = document.getElementById('fc-modal-close');
  var modalName = document.getElementById('fc-modal-name');
  var modalImg = document.getElementById('fc-modal-img');
  var modalToggle = document.getElementById('fc-modal-toggle');
  var modalMeta = document.getElementById('fc-modal-meta');
  var btnInterior = document.getElementById('fc-btn-interior');
  var btnFront = document.getElementById('fc-btn-front');
  var navPrev = document.getElementById('fc-nav-prev');
  var navNext = document.getElementById('fc-nav-next');

  // --- Filtering ---
  function applyFilters() {
    var q = searchEl ? searchEl.value.trim().toLowerCase() : '';
    var terms = q.split(/\s+/).filter(Boolean);
    var yearFrom = yearFromEl ? parseInt(yearFromEl.value) || null : null;
    var yearTo = yearToEl ? parseInt(yearToEl.value) || null : null;

    filtered = data.filter(function (card) {
      if (terms.length > 0 && !terms.every(function (t) { return card._search.indexOf(t) !== -1; })) {
        return false;
      }
      if (yearFrom && card._year && card._year < yearFrom) return false;
      if (yearTo && card._year && card._year > yearTo) return false;
      return true;
    });

    renderGrid();
  }

  // --- Rendering ---
  function renderGrid() {
    if (!grid) return;
    if (countEl) {
      countEl.textContent = L.showing(filtered.length, data.length);
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="fc-no-results">' + L.noResults + '</p>';
      return;
    }

    var html = '';
    filtered.forEach(function (card, i) {
      var year = card._year || '';
      var name = card.name || L.unknown;
      var deathDate = card.death_date || (year ? year : '');
      html += '<button class="fc-card" data-index="' + i + '" aria-label="' + escAttr(name) + '">';
      html += '<img class="fc-thumb" src="' + escAttr(card._mainUrl) + '" alt="" loading="lazy">';
      html += '<div class="fc-card-info">';
      html += '<span class="fc-card-name">' + esc(name) + '</span>';
      if (deathDate) {
        html += '<span class="fc-card-date">' + (lang === 'es' ? 'f. ' : 'd. ') + esc(deathDate) + '</span>';
      }
      html += '</div>';
      html += '</button>';
    });
    grid.innerHTML = html;

    // Attach click handlers
    grid.querySelectorAll('.fc-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal(parseInt(btn.dataset.index));
      });
    });
  }

  // --- Modal ---
  function openModal(index) {
    currentIndex = index;
    currentSide = 'interior';
    updateModal();
    modal.hidden = false;
    document.body.classList.add('fc-modal-open');
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('fc-modal-open');
  }

  function updateModal() {
    var card = filtered[currentIndex];
    if (!card) return;

    var name = card.name || L.unknown;
    if (modalName) modalName.textContent = name;

    // Image
    var imgUrl = currentSide === 'front' && card._frontUrl ? card._frontUrl : card._mainUrl;
    var altPrefix = currentSide === 'front' ? L.altFront : L.altMain;
    if (modalImg) {
      modalImg.src = imgUrl;
      modalImg.alt = altPrefix + name;
    }

    // Toggle buttons
    if (modalToggle) {
      if (card.has_front) {
        modalToggle.hidden = false;
        if (btnInterior) btnInterior.classList.toggle('active', currentSide === 'interior');
        if (btnFront) btnFront.classList.toggle('active', currentSide === 'front');
      } else {
        modalToggle.hidden = true;
      }
    }

    // Nav buttons
    if (navPrev) navPrev.disabled = currentIndex <= 0;
    if (navNext) navNext.disabled = currentIndex >= filtered.length - 1;

    // Metadata
    if (modalMeta) {
      var entries = [];
      if (card.death_date) entries.push([L.died, card.death_date]);
      if (card.death_place) entries.push([L.deathPlace, card.death_place]);
      if (card.birth_date) entries.push([L.born, card.birth_date]);
      if (card.birth_place) entries.push([L.birthPlace, card.birth_place]);
      if (card.funeral_company) entries.push([L.funeralHome, card.funeral_company]);
      var metaHtml = entries.map(function (e) {
        return '<dt>' + esc(e[0]) + '</dt><dd>' + esc(e[1]) + '</dd>';
      }).join('');
      modalMeta.innerHTML = metaHtml;
    }
  }

  // --- Event handlers ---
  var debounceTimer;
  function debounce(fn, ms) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fn, ms);
  }

  if (searchEl) searchEl.addEventListener('input', function () { debounce(applyFilters, 250); });
  if (yearFromEl) yearFromEl.addEventListener('input', function () { debounce(applyFilters, 400); });
  if (yearToEl) yearToEl.addEventListener('input', function () { debounce(applyFilters, 400); });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  if (btnInterior) btnInterior.addEventListener('click', function () {
    currentSide = 'interior';
    updateModal();
  });
  if (btnFront) btnFront.addEventListener('click', function () {
    currentSide = 'front';
    updateModal();
  });

  if (navPrev) navPrev.addEventListener('click', function () {
    if (currentIndex > 0) { currentIndex--; currentSide = 'interior'; updateModal(); }
  });
  if (navNext) navNext.addEventListener('click', function () {
    if (currentIndex < filtered.length - 1) { currentIndex++; currentSide = 'interior'; updateModal(); }
  });

  document.addEventListener('keydown', function (e) {
    if (modal && !modal.hidden) {
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--; currentSide = 'interior'; updateModal();
      }
      if (e.key === 'ArrowRight' && currentIndex < filtered.length - 1) {
        currentIndex++; currentSide = 'interior'; updateModal();
      }
    }
  });

  // --- Utilities ---
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function escAttr(str) {
    return esc(str).replace(/"/g, '&quot;');
  }

  // --- Init ---
  applyFilters();
})();
