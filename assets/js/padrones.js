/**
 * padrones.js
 * Search, filter, and sort for the Padrones Browser.
 *
 * Expects these to be defined inline by the page before this file loads:
 *   PAD_DATA  array  from _data/fs-image-groups.json
 *   PAD_TYPES object from _data/fs_record_types.yml (slug -> labels)
 *   PAD_LANG  'en' | 'es'
 *
 * The image-group titles stay in Spanish because they are the archival titles
 * assigned by the Gobierno de Puerto Rico. Only the interface is translated.
 */
(function () {
  'use strict';

  // --- Labels (bilingual) ---
  const LABELS = {
    en: {
      showing: function (n, total) {
        return 'Showing ' + n.toLocaleString() + ' of ' + total.toLocaleString() + ' image groups';
      },
      noResults: 'No image groups match your filters.',
      noData: 'The image-group index has not been built yet. Run the harvest script in prgg-admin, then rebuild the site.',
      allMunis: 'All municipalities',
      allTypes: 'All record types',
      islandwide: 'Island-wide / unassigned',
      colMuni: 'Municipality',
      colType: 'Record type',
      colTitle: 'Title',
      colYears: 'Years',
      colImages: 'Images',
      view: 'View',
      caja: 'Caja',
      unknown: 'n/a'
    },
    es: {
      showing: function (n, total) {
        return 'Mostrando ' + n.toLocaleString() + ' de ' + total.toLocaleString() + ' grupos de imágenes';
      },
      noResults: 'Ningún grupo de imágenes coincide con sus filtros.',
      noData: 'El índice de grupos de imágenes aún no se ha construido. Ejecute el script de recolección en prgg-admin y reconstruya el sitio.',
      allMunis: 'Todos los municipios',
      allTypes: 'Todos los tipos de registro',
      islandwide: 'Toda la isla / sin asignar',
      colMuni: 'Municipio',
      colType: 'Tipo de registro',
      colTitle: 'Título',
      colYears: 'Años',
      colImages: 'Imágenes',
      view: 'Ver',
      caja: 'Caja',
      unknown: 'n/d'
    }
  };

  var lang = (typeof PAD_LANG !== 'undefined' && PAD_LANG === 'es') ? 'es' : 'en';
  var L = LABELS[lang];
  var data = (typeof PAD_DATA !== 'undefined' && PAD_DATA) ? PAD_DATA : [];
  var types = (typeof PAD_TYPES !== 'undefined' && PAD_TYPES) ? PAD_TYPES : {};

  // Display order for record types, matching the municipality pages.
  var TYPE_ORDER = [
    'padron-almas',
    'padron-jornaleros',
    'padron-habitantes',
    'censo-poblacional',
    'enslavement',
    'other'
  ];

  function typeLabel(slug) {
    var t = types[slug];
    if (!t) return slug || '';
    return (lang === 'es' ? t.es : t.en) || slug;
  }

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function fold(s) {
    return String(s || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  // --- DOM refs ---
  var searchEl = document.getElementById('pad-search');
  var muniEl = document.getElementById('pad-muni');
  var typeEl = document.getElementById('pad-type');
  var yearFromEl = document.getElementById('pad-year-from');
  var yearToEl = document.getElementById('pad-year-to');
  var resetEl = document.getElementById('pad-reset');
  var countEl = document.getElementById('pad-count');
  var tbody = document.getElementById('pad-tbody');
  var table = document.getElementById('pad-table');
  var emptyEl = document.getElementById('pad-empty');

  if (!tbody) return;

  // --- Preprocess ---
  data.forEach(function (row) {
    row._muniName = row.muni_name || '';
    row._typeLabel = typeLabel(row.record_type);
    row._search = fold([
      row.title, row.muni_name, row.place, row.caja, row._typeLabel
    ].join(' '));
  });

  // --- Populate the selects from the data itself ---
  function populateSelects() {
    if (muniEl) {
      var seen = {};
      var munis = [];
      data.forEach(function (row) {
        var name = row.muni_name;
        if (name && !seen[name]) { seen[name] = true; munis.push(name); }
      });
      munis.sort(function (a, b) { return a.localeCompare(b, 'es'); });

      var html = '<option value="">' + esc(L.allMunis) + '</option>';
      munis.forEach(function (m) {
        html += '<option value="' + esc(m) + '">' + esc(m) + '</option>';
      });
      // Rows with no municipality still deserve to be findable.
      if (data.some(function (r) { return !r.muni_name; })) {
        html += '<option value="__none__">' + esc(L.islandwide) + '</option>';
      }
      muniEl.innerHTML = html;
    }

    if (typeEl) {
      var present = {};
      data.forEach(function (row) { present[row.record_type] = true; });
      var html2 = '<option value="">' + esc(L.allTypes) + '</option>';
      TYPE_ORDER.forEach(function (slug) {
        if (!present[slug]) return;
        html2 += '<option value="' + esc(slug) + '">' + esc(typeLabel(slug)) + '</option>';
      });
      typeEl.innerHTML = html2;
    }
  }

  // --- Filtering ---
  var filtered = data.slice();

  function applyFilters() {
    var q = searchEl ? fold(searchEl.value.trim()) : '';
    var terms = q.split(/\s+/).filter(Boolean);
    var muni = muniEl ? muniEl.value : '';
    var type = typeEl ? typeEl.value : '';
    var yFrom = yearFromEl ? (parseInt(yearFromEl.value, 10) || null) : null;
    var yTo = yearToEl ? (parseInt(yearToEl.value, 10) || null) : null;

    filtered = data.filter(function (row) {
      if (terms.length && !terms.every(function (t) { return row._search.indexOf(t) !== -1; })) {
        return false;
      }
      if (muni === '__none__') {
        if (row.muni_name) return false;
      } else if (muni && row.muni_name !== muni) {
        return false;
      }
      if (type && row.record_type !== type) return false;

      // A group overlaps the requested window if it starts before the window
      // ends and ends after the window begins. Rows with no year always show,
      // since excluding them would hide records rather than filter them.
      var start = row.year_start;
      var end = row.year_end || row.year_start;
      if (yFrom && end && end < yFrom) return false;
      if (yTo && start && start > yTo) return false;

      return true;
    });

    render();
  }

  // --- Sorting ---
  var sortCol = null;
  var sortAsc = true;

  var ACCESSORS = {
    0: function (r) { return r._muniName; },
    1: function (r) { return r._typeLabel; },
    2: function (r) { return r.title || ''; },
    3: function (r) { return r.year_start || 0; },
    4: function (r) { return r.image_count || 0; }
  };

  function sortRows(rows) {
    if (sortCol === null) return rows;
    var get = ACCESSORS[sortCol];
    if (!get) return rows;
    return rows.slice().sort(function (a, b) {
      var va = get(a), vb = get(b);
      var cmp;
      if (typeof va === 'number' && typeof vb === 'number') {
        cmp = va - vb;
      } else {
        cmp = String(va).localeCompare(String(vb), 'es');
      }
      return sortAsc ? cmp : -cmp;
    });
  }

  function bindSorting() {
    if (!table) return;
    var headers = table.querySelectorAll('th.sortable');
    Array.prototype.forEach.call(headers, function (th) {
      th.addEventListener('click', function () {
        var col = parseInt(th.getAttribute('data-col'), 10);
        if (sortCol === col) {
          sortAsc = !sortAsc;
        } else {
          sortCol = col;
          sortAsc = true;
        }
        Array.prototype.forEach.call(headers, function (h) {
          h.setAttribute('aria-sort', 'none');
          h.classList.remove('sorted-asc', 'sorted-desc');
        });
        th.setAttribute('aria-sort', sortAsc ? 'ascending' : 'descending');
        th.classList.add(sortAsc ? 'sorted-asc' : 'sorted-desc');
        render();
      });
    });
  }

  // --- Rendering ---
  function yearText(row) {
    if (!row.year_start) return L.unknown;
    if (row.year_end && row.year_end !== row.year_start) {
      return row.year_start + '–' + row.year_end;
    }
    return String(row.year_start);
  }

  function render() {
    var rows = sortRows(filtered);
    var html = '';

    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var muniCell = r.muni_name
        ? '<a href="' + (lang === 'es' ? '/es/guia-municipios/' : '/tools/municipality-guide/')
          + esc(String(r.muni_id).replace(/_/g, '-')) + '/">' + esc(r.muni_name) + '</a>'
        : '<span class="pad-islandwide">' + esc(L.islandwide) + '</span>';

      var titleCell = esc(r.title);
      if (r.caja) {
        titleCell += ' <span class="pad-caja">' + esc(L.caja) + ' ' + esc(r.caja) + '</span>';
      }
      if (r.url) {
        titleCell = '<a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer"><em>'
          + titleCell + '</em></a>';
      }

      html += '<tr>'
        + '<td>' + muniCell + '</td>'
        + '<td><span class="pad-type pad-type-' + esc(r.record_type) + '">'
          + esc(r._typeLabel) + '</span></td>'
        + '<td>' + titleCell + '</td>'
        + '<td class="pad-years">' + esc(yearText(r)) + '</td>'
        + '<td class="pad-images">' + (r.image_count ? r.image_count.toLocaleString() : '') + '</td>'
        + '</tr>';
    }

    tbody.innerHTML = html;

    if (countEl) countEl.textContent = L.showing(rows.length, data.length);

    if (emptyEl) {
      if (data.length === 0) {
        emptyEl.textContent = L.noData;
        emptyEl.hidden = false;
        if (table) table.hidden = true;
      } else if (rows.length === 0) {
        emptyEl.textContent = L.noResults;
        emptyEl.hidden = false;
        if (table) table.hidden = true;
      } else {
        emptyEl.hidden = true;
        if (table) table.hidden = false;
      }
    }
  }

  // --- Wire up ---
  populateSelects();
  bindSorting();

  [searchEl, muniEl, typeEl, yearFromEl, yearToEl].forEach(function (el) {
    if (!el) return;
    el.addEventListener('input', applyFilters);
    el.addEventListener('change', applyFilters);
  });

  if (resetEl) {
    resetEl.addEventListener('click', function () {
      if (searchEl) searchEl.value = '';
      if (muniEl) muniEl.value = '';
      if (typeEl) typeEl.value = '';
      if (yearFromEl) yearFromEl.value = '';
      if (yearToEl) yearToEl.value = '';
      applyFilters();
    });
  }

  // Deep link support: /tools/padrones/?muni=Arecibo or ?type=padron-jornaleros
  (function readQuery() {
    var params = new URLSearchParams(window.location.search);
    var m = params.get('muni');
    var t = params.get('type');
    if (m && muniEl) muniEl.value = m;
    if (t && typeEl) typeEl.value = t;
  })();

  applyFilters();
})();
