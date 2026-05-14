---
layout: page
title: Novedades
subtitle: Cursos recientes, guías de investigación y actualizaciones del sitio
lang: es
permalink: /es/novedades/
ref: whats-new
last_modified_at: 2026-02-28
---

{% assign featured_es = site.data.news_es | where_exp: "item", "item.featured == true" | first %}
{% if featured_es %}
<div class="poll-callout">
  <h3>
    {% if featured_es.link %}<a href="{{ featured_es.link | relative_url }}">{{ featured_es.title }}</a>{% else %}{{ featured_es.title }}{% endif %}
  </h3>
  <p>{{ featured_es.body }}</p>
  <p><em>{{ featured_es.date | date: "%d/%m/%Y" }}</em></p>
  {% if featured_es.link %}
  <a href="{{ featured_es.link | relative_url }}" class="btn btn-primary">Más información</a>
  {% endif %}
</div>
{% endif %}

<h2>Cursos y Módulos</h2>

{% assign cursos = site.data.news_es | where: "category", "cursos" | where_exp: "item", "item.featured != true" %}
{% if cursos.size > 0 %}
<ul class="news-stacked">
  {% for item in cursos %}
  <li class="news-entry">
    <p class="news-entry-date">{{ item.date | date: "%-d %b %Y" }}</p>
    {% if item.link %}
    <h3 class="news-entry-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h3>
    {% else %}
    <h3 class="news-entry-title">{{ item.title }}</h3>
    {% endif %}
    <p class="news-entry-body">
      {% assign truncated = item.body | truncatewords: 25 %}
      {{ truncated }}{% if truncated != item.body and item.link %} <a href="{{ item.link | relative_url }}" class="news-read-more">Leer más</a>{% endif %}
    </p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No hay actualizaciones recientes de cursos. <a href="{{ '/es/guias-investigacion/' | relative_url }}">Ver todos los cursos.</a></p>
{% endif %}

<h2>Guías de Investigación</h2>

{% assign guias = site.data.news_es | where: "category", "guias" | where_exp: "item", "item.featured != true" %}
{% if guias.size > 0 %}
<ul class="news-stacked">
  {% for item in guias %}
  <li class="news-entry">
    <p class="news-entry-date">{{ item.date | date: "%-d %b %Y" }}</p>
    {% if item.link %}
    <h3 class="news-entry-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h3>
    {% else %}
    <h3 class="news-entry-title">{{ item.title }}</h3>
    {% endif %}
    <p class="news-entry-body">
      {% assign truncated = item.body | truncatewords: 25 %}
      {{ truncated }}{% if truncated != item.body and item.link %} <a href="{{ item.link | relative_url }}" class="news-read-more">Leer más</a>{% endif %}
    </p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No hay actualizaciones recientes de guías. <a href="{{ '/es/guias-investigacion/' | relative_url }}">Ver todas las guías.</a></p>
{% endif %}

{% assign todas_funciones = site.data.news_es | where: "category", "funciones" %}
{% assign muni_funciones = todas_funciones | where_exp: "item", "item.link contains 'municipio'" %}
{% if todas_funciones.size > 0 %}
<h2>Funciones del Sitio</h2>

<ul class="news-stacked">
  {% for item in todas_funciones %}{% unless item.link contains 'municipio' %}
  <li class="news-entry">
    <p class="news-entry-date">{{ item.date | date: "%-d %b %Y" }}</p>
    {% if item.link %}
    <h3 class="news-entry-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h3>
    {% else %}
    <h3 class="news-entry-title">{{ item.title }}</h3>
    {% endif %}
    <p class="news-entry-body">
      {% assign truncated = item.body | truncatewords: 25 %}
      {{ truncated }}{% if truncated != item.body and item.link %} <a href="{{ item.link | relative_url }}" class="news-read-more">Leer más</a>{% endif %}
    </p>
  </li>
  {% endunless %}{% endfor %}
</ul>

{% if muni_funciones.size > 0 %}
<div class="news-municipality-section">
  <h3>Páginas de Detalle de Municipios</h3>
  <p class="news-municipality-count">{{ muni_funciones.size }} páginas de municipios añadidas — cada una incluye historia de fundación, barrios, fechas de registros parroquiales y civiles, y una guía de investigación genealógica. <a href="{{ '/es/guia-municipios/' | relative_url }}">Ver todos los municipios.</a></p>
  {% assign mes_anterior = "" %}
  {% for item in muni_funciones %}
    {% assign mes_item = item.date | date: "%B %Y" %}
    {% if mes_item != mes_anterior %}
      {% unless forloop.first %}</ul>{% endunless %}
      {% assign mes_anterior = mes_item %}
      <h4 class="news-month-label">{{ mes_item }}</h4>
      <ul class="news-muni-list">
    {% endif %}
    {% assign muni_nombre = item.title | replace: "Nueva: ", "" | replace: "Nuevo: ", "" | replace: "Mejorada: ", "" | replace: "Actualizada: ", "" | replace: " — Página de Detalle del Municipio", "" | replace: " — Página de Detalle de Municipio", "" | split: " — " | first | strip %}
    <li><a href="{{ item.link | relative_url }}">{{ muni_nombre }}</a></li>
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
{% endif %}

{% endif %}

<hr>

<h2>Próximamente</h2>

<p>Estos proyectos están actualmente en desarrollo:</p>

<ul>
  <li><strong>Recursos para Miembros: Plantillas Descargables</strong> — Registros de investigación, hojas de grupo familiar, hojas de trabajo para citas de fuentes y más. Herramientas prácticas para organizar su investigación genealógica puertorriqueña.</li>
  <li><strong>Guía de Investigación: Pruebas de ADN para la Genealogía Puertorriqueña</strong> — Una guía dedicada a las pruebas de ADN en la investigación puertorriqueña, con opciones de pruebas, interpretación de resultados y documentación conforme al GPS.</li>
  <li><strong>Registros Censales: Módulos 5 y 10</strong> — El Módulo 5 (Enumeraciones Municipales y de Barrio) y el Módulo 10 (Uso de IA para el Análisis del Censo) se están ampliando con contenido completo para finalizar el curso de 10 módulos.</li>
</ul>

<hr>

<h2>Archivo</h2>

<p>Las actualizaciones anteriores se organizan por año a medida que la lista crece.</p>

<ul>
  <li><em>Archivo de 2025 próximamente</em></li>
</ul>

<p class="text-center mt-2">
  <a href="{{ '/es/guias-investigacion/' | relative_url }}" class="btn btn-secondary">Ver Todas las Guías de Investigación</a>
</p>
