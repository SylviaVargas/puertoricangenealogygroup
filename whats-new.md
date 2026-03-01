---
layout: page
title: What's New
subtitle: Recent courses, research guides, and site updates
lang: en
permalink: /whats-new/
ref: whats-new
last_modified_at: 2026-02-28
---

{% assign featured = site.data.news | where_exp: "item", "item.featured == true" | first %}
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

{% assign courses = site.data.news | where: "category", "courses" | where_exp: "item", "item.featured != true" %}
{% if courses.size > 0 %}
<ul class="resource-list">
  {% for item in courses %}
  <li>
    {% if item.link %}
    <a href="{{ item.link | relative_url }}"><em>{{ item.title }}</em></a>
    {% else %}
    <strong>{{ item.title }}</strong>
    {% endif %}
    <p class="description">{{ item.date | date: "%B %-d, %Y" }}: {{ item.body }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No recent course updates. <a href="{{ '/research-guides/' | relative_url }}">Browse all courses.</a></p>
{% endif %}

<h2>Research Guides</h2>

{% assign guides = site.data.news | where: "category", "guides" | where_exp: "item", "item.featured != true" %}
{% if guides.size > 0 %}
<ul class="resource-list">
  {% for item in guides %}
  <li>
    {% if item.link %}
    <a href="{{ item.link | relative_url }}"><em>{{ item.title }}</em></a>
    {% else %}
    <strong>{{ item.title }}</strong>
    {% endif %}
    <p class="description">{{ item.date | date: "%B %-d, %Y" }}: {{ item.body }}</p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No recent guide updates. <a href="{{ '/research-guides/' | relative_url }}">Browse all guides.</a></p>
{% endif %}

{% assign features = site.data.news | where: "category", "features" %}
{% if features.size > 0 %}
<h2>Site Features</h2>
<ul class="resource-list">
  {% for item in features %}
  <li>
    {% if item.link %}
    <a href="{{ item.link | relative_url }}"><em>{{ item.title }}</em></a>
    {% else %}
    <strong>{{ item.title }}</strong>
    {% endif %}
    <p class="description">{{ item.date | date: "%B %-d, %Y" }}: {{ item.body }}</p>
  </li>
  {% endfor %}
</ul>
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
