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
  <article class="download-card">
    <img class="download-app-icon" src="{{ '/assets/images/app-icon.png' | relative_url }}" width="152" height="152" alt="LocationSimulator app icon">
    <div class="download-copy">
      <p class="eyebrow">Step 1 · macOS app</p>
      <h2>{{ site.data.products.locationsimulator.name }}</h2>
      <p>{{ site.data.products.locationsimulator.description }}</p>
      <a class="button button-primary" href="{{ site.data.products.locationsimulator.app_store_url }}"><span class="app-store-symbol" aria-hidden="true"></span><span><small>Download on the</small>App Store</span></a>
    </div>
    <div class="download-meta"><span>For macOS</span><span>Installed from the App Store</span></div>
  </article>

  <article class="download-card">
    <img class="download-app-icon spoofer-icon-cropped" src="{{ '/assets/images/location-spoofer-icon.png' | relative_url }}" width="152" height="152" alt="LocationSpoofer app icon">
    <div class="download-copy">
      <p class="eyebrow">Step 2 · macOS companion</p>
      <h2>{{ site.data.products.locationspoofer.name }}</h2>
      <p>{{ site.data.products.locationspoofer.description }}</p>
      <div class="inline-actions">
        <a class="button button-accent" href="{{ site.data.products.locationspoofer.download_url }}">Download latest <span aria-hidden="true">↓</span></a>
      </div>
    </div>
    <div class="download-meta"><span>Separate macOS helper</span><span>Keep it running while testing</span></div>
  </article>
</section>
