---
layout: page
title: What's New
subtitle: Recent courses, research guides, and site updates
lang: en
permalink: /whats-new/
ref: whats-new
last_modified_at: 2026-02-28
---

{% assign visible_news = visible_news | where_exp: "item", "item.hidden != true" %}
{% assign featured = visible_news | where_exp: "item", "item.featured == true" | first %}
{% if featured %}
<div class="poll-callout">
  <h3>
    {% if featured.link %}<a href="{{ featured.link | relative_url }}">{{ featured.title }}</a>{% else %}{{ featured.title }}{% endif %}
  </h3>
  <p>{{ featured.body }}</p>
  <p><em>{{ featured.date | date: "%B %-d, %Y" }}</em></p>
  {% if featured.link %}
  <a href="{{ featured.link | relative_url }}" class="btn btn-primary">Learn More</a>
  {% endif %}
</div>
{% endif %}

<h2>Courses &amp; Modules</h2>

{% assign courses = visible_news | where: "category", "courses" | where_exp: "item", "item.featured != true" %}
{% if courses.size > 0 %}
<ul class="news-stacked">
  {% for item in courses %}
  <li class="news-entry">
    <p class="news-entry-date">{{ item.date | date: "%b %-d, %Y" }}</p>
    {% if item.link %}
    <h3 class="news-entry-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h3>
    {% else %}
    <h3 class="news-entry-title">{{ item.title }}</h3>
    {% endif %}
    <p class="news-entry-body">
      {% assign truncated = item.body | truncatewords: 25 %}
      {{ truncated }}{% if truncated != item.body and item.link %} <a href="{{ item.link | relative_url }}" class="news-read-more">Read more</a>{% endif %}
    </p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No recent course updates. <a href="{{ '/research-guides/' | relative_url }}">Browse all courses.</a></p>
{% endif %}

<h2>Research Guides</h2>

{% assign guides = visible_news | where: "category", "guides" | where_exp: "item", "item.featured != true" %}
{% if guides.size > 0 %}
<ul class="news-stacked">
  {% for item in guides %}
  <li class="news-entry">
    <p class="news-entry-date">{{ item.date | date: "%b %-d, %Y" }}</p>
    {% if item.link %}
    <h3 class="news-entry-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h3>
    {% else %}
    <h3 class="news-entry-title">{{ item.title }}</h3>
    {% endif %}
    <p class="news-entry-body">
      {% assign truncated = item.body | truncatewords: 25 %}
      {{ truncated }}{% if truncated != item.body and item.link %} <a href="{{ item.link | relative_url }}" class="news-read-more">Read more</a>{% endif %}
    </p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No recent guide updates. <a href="{{ '/research-guides/' | relative_url }}">Browse all guides.</a></p>
{% endif %}

{% assign all_features = visible_news | where: "category", "features" %}
{% assign muni_features = all_features | where_exp: "item", "item.link contains 'municipality-guide'" %}
{% if all_features.size > 0 %}
<h2>Site Features</h2>

<ul class="news-stacked">
  {% for item in all_features %}{% unless item.link contains 'municipality-guide' %}
  <li class="news-entry">
    <p class="news-entry-date">{{ item.date | date: "%b %-d, %Y" }}</p>
    {% if item.link %}
    <h3 class="news-entry-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h3>
    {% else %}
    <h3 class="news-entry-title">{{ item.title }}</h3>
    {% endif %}
    <p class="news-entry-body">
      {% assign truncated = item.body | truncatewords: 25 %}
      {{ truncated }}{% if truncated != item.body and item.link %} <a href="{{ item.link | relative_url }}" class="news-read-more">Read more</a>{% endif %}
    </p>
  </li>
  {% endunless %}{% endfor %}
</ul>

{% if muni_features.size > 0 %}
<div class="news-municipality-section">
  <h3>Municipality Detail Pages</h3>
  <p class="news-municipality-count">{{ muni_features.size }} municipality pages added — each includes founding history, barrios, parish and civil registry dates, and a genealogy research toolkit. <a href="{{ '/tools/municipality-guide/' | relative_url }}">Browse all municipalities.</a></p>
  {% assign prev_month = "" %}
  {% for item in muni_features %}
    {% assign item_month = item.date | date: "%B %Y" %}
    {% if item_month != prev_month %}
      {% unless forloop.first %}</ul>{% endunless %}
      {% assign prev_month = item_month %}
      <h4 class="news-month-label">{{ item_month }}</h4>
      <ul class="news-muni-list">
    {% endif %}
    {% assign muni_name = item.title | replace: "New: ", "" | replace: "Enhanced: ", "" | replace: "Updated: ", "" | replace: " Municipality Detail Page", "" | split: " — " | first | strip %}
    <li><a href="{{ item.link | relative_url }}">{{ muni_name }}</a></li>
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
{% endif %}

{% endif %}

<hr>

<h2>Coming Soon</h2>

<p>These projects are currently in progress:</p>

<ul>
  <li><strong>Member Resources: Downloadable Templates</strong> — Research logs, family group sheets, source citation worksheets, and more. Practical tools for organizing your Puerto Rican genealogical research.</li>
  <li><strong>Research Guide: DNA Testing for Puerto Rican Ancestry</strong> — A dedicated guide to DNA testing in Puerto Rican research, covering testing options, interpreting results, and GPS-compliant documentation.</li>
  <li><strong>Census Records Modules 5 and 10</strong> — Module 5 (Municipal and Barrio Enumerations) and Module 10 (Using AI for Census Analysis) are being expanded with full content to complete the 10-module course.</li>
</ul>

<hr>

<h2>Archive</h2>

<p>Earlier updates are organized by year as the list grows.</p>

<ul>
  <li><em>2025 archive coming soon</em></li>
</ul>

<p class="text-center mt-2">
  <a href="{{ '/research-guides/' | relative_url }}" class="btn btn-secondary">Browse All Research Guides</a>
</p>
