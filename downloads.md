---
layout: default
title: Downloads
nav: downloads
description: Download LocationSimulator for iOS, iPadOS, and Mac from the App Store, and the latest LocationSpoofer release for macOS.
permalink: /downloads/
---

<section class="page-hero shell narrow">
  <p class="eyebrow">Both apps are required</p>
  <h1>Install both apps.</h1>
  <p>LocationSimulator runs on iOS, iPadOS, and Mac and provides the map and route controls. LocationSpoofer still runs on a Mac and is the helper that talks to physical devices and iOS Simulator.</p>
</section>

<section class="shell download-stack">
  {% assign visible_downloads = site.data.downloads | where: "visible", true %}
  {% if visible_downloads.size > 0 %}
  {% assign simulator_downloads = visible_downloads | where: "product_key", "locationsimulator" %}
  {% if simulator_downloads.size > 0 %}
  <article class="download-card" id="locationsimulator">
    <img class="download-app-icon" src="{{ '/assets/images/app-icon.png' | relative_url }}" width="152" height="152" alt="LocationSimulator app icon">
    <div class="download-copy">
      <p class="eyebrow">{{ site.data.products.locationsimulator.eyebrow }}</p>
      <h2>LocationSimulator</h2>
      <p>{{ site.data.products.locationsimulator.description }}</p>
      <div class="download-actions">
        {% for download in simulator_downloads %}{% include download-button.html download=download %}{% endfor %}
      </div>
    </div>
  </article>
  {% endif %}

  {% assign spoofer_downloads = visible_downloads | where: "product_key", "locationspoofer" %}
  {% if spoofer_downloads.size > 0 %}
  <article class="download-card" id="locationspoofer">
    <img class="download-app-icon spoofer-icon-cropped" src="{{ '/assets/images/location-spoofer-icon.png' | relative_url }}" width="152" height="152" alt="LocationSpoofer app icon">
    <div class="download-copy">
      <p class="eyebrow">Required helper app</p>
      <h2>LocationSpoofer</h2>
      <p>{{ site.data.products.locationspoofer.description }}</p>
      <div class="download-actions">
        {% for download in spoofer_downloads %}{% include download-button.html download=download %}{% endfor %}
      </div>
    </div>
  </article>
  {% endif %}
  {% else %}
  <div class="empty-downloads"><span aria-hidden="true">—</span><h2>No downloads are currently available.</h2><p>Check back later for the next release.</p></div>
  {% endif %}
</section>
