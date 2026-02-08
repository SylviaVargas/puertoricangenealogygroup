// Puerto Rican Genealogy Group - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current nav item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-item a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // ===== Site Search =====
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchToggle = document.querySelector('.search-toggle');
  const siteSearch = document.querySelector('.site-search');

  if (searchInput && searchResults) {
    let searchIndex = null;
    let debounceTimer = null;
    const currentLang = searchInput.getAttribute('data-lang') || 'en';

    // Load search index on first interaction
    function loadSearchIndex() {
      if (searchIndex !== null) return Promise.resolve();
      return fetch('/search.json')
        .then(function(response) { return response.json(); })
        .then(function(data) {
          searchIndex = data.filter(function(item) {
            return item.lang === currentLang;
          });
        })
        .catch(function(err) {
          console.error('Search index load failed:', err);
          searchIndex = [];
        });
    }

    // Simple case-insensitive multi-term search
    function performSearch(query) {
      if (!query || query.length < 2 || !searchIndex) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        return;
      }

      var terms = query.toLowerCase().split(/\s+/).filter(function(t) {
        return t.length > 1;
      });

      var results = searchIndex.filter(function(item) {
        var searchable = (item.title + ' ' + item.content).toLowerCase();
        return terms.every(function(term) {
          return searchable.indexOf(term) !== -1;
        });
      });

      displayResults(results, query);
    }

    // Display results dropdown
    function displayResults(results, query) {
      if (results.length === 0) {
        var noResultsText = currentLang === 'es'
          ? 'No se encontraron resultados'
          : 'No results found';
        searchResults.innerHTML = '<div class="search-no-results">' + noResultsText + '</div>';
        searchResults.classList.add('active');
        return;
      }

      var shown = results.slice(0, 6);
      var html = shown.map(function(item, index) {
        var snippet = createSnippet(item.content, query);
        return '<a href="' + item.url + '" class="search-result-item" role="option" data-index="' + index + '">'
          + '<span class="search-result-title">' + highlightTerms(item.title, query) + '</span>'
          + '<span class="search-result-snippet">' + highlightTerms(snippet, query) + '</span>'
          + '</a>';
      }).join('');

      searchResults.innerHTML = html;
      searchResults.classList.add('active');
    }

    // Create a text snippet around the first match
    function createSnippet(content, query) {
      var lower = content.toLowerCase();
      var terms = query.toLowerCase().split(/\s+/);
      var pos = lower.indexOf(terms[0]);

      if (pos === -1) {
        return content.substring(0, 120) + '...';
      }

      var start = Math.max(0, pos - 40);
      var end = Math.min(content.length, pos + 80);
      var snippet = '';
      if (start > 0) snippet += '...';
      snippet += content.substring(start, end);
      if (end < content.length) snippet += '...';
      return snippet;
    }

    // Highlight matching terms
    function highlightTerms(text, query) {
      var terms = query.toLowerCase().split(/\s+/).filter(function(t) {
        return t.length > 1;
      });
      var result = text;
      terms.forEach(function(term) {
        var escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var regex = new RegExp('(' + escaped + ')', 'gi');
        result = result.replace(regex, '<mark>$1</mark>');
      });
      return result;
    }

    // Debounced input handler
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      var query = this.value.trim();
      debounceTimer = setTimeout(function() {
        loadSearchIndex().then(function() {
          performSearch(query);
        });
      }, 250);
    });

    // Mobile search toggle
    if (searchToggle) {
      searchToggle.addEventListener('click', function() {
        siteSearch.classList.toggle('expanded');
        if (siteSearch.classList.contains('expanded')) {
          searchInput.focus();
        }
      });
    }

    // Keyboard navigation in results
    searchInput.addEventListener('keydown', function(e) {
      var items = searchResults.querySelectorAll('.search-result-item');
      if (items.length === 0) return;

      var active = searchResults.querySelector('.search-result-item.focused');
      var currentIndex = active ? parseInt(active.getAttribute('data-index')) : -1;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocused(items, Math.min(currentIndex + 1, items.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocused(items, Math.max(currentIndex - 1, 0));
      } else if (e.key === 'Enter' && active) {
        e.preventDefault();
        window.location.href = active.getAttribute('href');
      } else if (e.key === 'Escape') {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        searchInput.blur();
        siteSearch.classList.remove('expanded');
      }
    });

    function setFocused(items, index) {
      items.forEach(function(item) { item.classList.remove('focused'); });
      if (items[index]) {
        items[index].classList.add('focused');
        items[index].scrollIntoView({ block: 'nearest' });
      }
    }

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
      if (!siteSearch.contains(e.target)) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        siteSearch.classList.remove('expanded');
      }
    });
  }
});
