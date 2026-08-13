---
layout: default
title: Downloads
nav: downloads
description: Download LocationSimulator from the App Store and the latest LocationSpoofer release for macOS.
permalink: /downloads/
---

<section class="page-hero shell narrow">
  <p class="eyebrow">Get both apps</p>
  <h1>Two downloads.<br>One connected workflow.</h1>
  <p>LocationSimulator is the controller. LocationSpoofer is the macOS companion that communicates with your devices and Xcode Simulator.</p>
</section>

<section class="shell download-stack">
  <article class="download-card">
    <img class="download-app-icon" src="{{ '/assets/images/app-icon.png' | relative_url }}" width="152" height="152" alt="LocationSimulator app icon">
    <div class="download-copy">
      <p class="eyebrow">Step 1 · Controller</p>
      <h2>{{ site.data.products.locationsimulator.name }}</h2>
      <p>{{ site.data.products.locationsimulator.description }}</p>
      <a class="button button-primary" href="{{ site.data.products.locationsimulator.app_store_url }}"><span class="button-symbol" aria-hidden="true">●</span><span><small>Download on the</small>App Store</span></a>
    </div>
    <div class="download-meta"><span>Distributed by Apple</span><span>App Store ID {{ site.data.products.locationsimulator.app_store_id }}</span></div>
  </article>

  <article class="download-card">
    <div class="download-icon spoofer-icon"><span></span></div>
    <div class="download-copy">
      <p class="eyebrow">Step 2 · macOS companion</p>
      <h2>{{ site.data.products.locationspoofer.name }}</h2>
      <p>{{ site.data.products.locationspoofer.description }}</p>
      <div class="inline-actions">
        <a class="button button-accent" href="{{ site.data.products.locationspoofer.download_url }}">Download latest <span aria-hidden="true">↓</span></a>
        <a class="text-link" href="{{ site.data.products.locationspoofer.releases_url }}">All releases <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="download-meta"><span>Direct from GitHub Releases</span><span>Automatic updates with Sparkle</span></div>
  </article>
</section>

<section class="section shell setup-section">
  <div class="section-heading compact">
    <p class="eyebrow">Quick start</p>
    <h2>Connect in three steps.</h2>
  </div>
  <ol class="steps">
    <li><span>1</span><div><strong>Open LocationSpoofer</strong><p>Leave the companion running on the Mac connected to your devices.</p></div></li>
    <li><span>2</span><div><strong>Open LocationSimulator</strong><p>A companion on the same Mac is discovered automatically.</p></div></li>
    <li><span>3</span><div><strong>Select a device</strong><p>Choose a physical device or Xcode Simulator, then pick a location on the map.</p></div></li>
  </ol>
</section>
