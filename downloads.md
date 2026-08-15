---
layout: default
title: Downloads
nav: downloads
description: Download LocationSimulator from the App Store and the latest LocationSpoofer release for macOS.
permalink: /downloads/
---

<section class="page-hero shell narrow">
  <p class="eyebrow">Both apps are required</p>
  <h1>Install both apps.</h1>
  <p>LocationSimulator provides the map and route controls. LocationSpoofer runs on your Mac and communicates with physical devices and iOS Simulator.</p>
</section>

<section class="shell download-stack">
  {% assign visible_downloads = site.data.downloads | where: "visible", true %}
  {% if visible_downloads.size > 0 %}
  {% for download in visible_downloads %}
  {% assign product = site.data.products[download.product_key] %}
  <article class="download-card" id="{{ download.id }}">
    <img class="download-app-icon{% if download.kind == 'spoofer' %} spoofer-icon-cropped{% endif %}" src="{{ download.icon | relative_url }}" width="152" height="152" alt="{{ product.name }} app icon">
    <div class="download-copy">
      <p class="eyebrow">{{ download.eyebrow }}</p>
      <h2>{{ download.label }}</h2>
      <p>{{ download.description }}</p>
      {% include download-button.html download=download %}
    </div>
    <div class="download-meta">{% for item in download.meta %}<span>{{ item }}</span>{% endfor %}</div>
  </article>
  {% endfor %}
  {% else %}
  <div class="empty-downloads"><span aria-hidden="true">—</span><h2>No downloads are currently available.</h2><p>Check back later for the next release.</p></div>
  {% endif %}
</section>
