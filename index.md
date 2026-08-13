---
layout: default
title: Location simulation, rebuilt
nav: home
description: LocationSimulator2 pairs a focused controller with LocationSpoofer on macOS to test location-aware apps on Apple devices.
---

<section class="hero shell">
  <div class="hero-copy">
    <p class="eyebrow">Location testing, without the detour</p>
    <h1>Move anywhere.<br><span>Test everything.</span></h1>
    <p class="hero-lede">LocationSimulator gives you a precise, map-first controller for testing location-aware experiences on Apple devices. LocationSpoofer handles the device connection on your Mac.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ site.data.products.locationsimulator.app_store_url }}">
        <span class="button-symbol" aria-hidden="true">●</span>
        <span><small>Download on the</small>App Store</span>
      </a>
      <a class="button button-secondary" href="{{ site.data.products.locationspoofer.download_url }}">Download LocationSpoofer <span aria-hidden="true">↓</span></a>
    </div>
    <p class="hero-note">Two apps. One straightforward testing workflow.</p>
  </div>

  <div class="product-stage">
    <div class="screenshot-glow" aria-hidden="true"></div>
    <picture class="screenshot-picture">
      <source srcset="{{ '/assets/images/location-simulator-dark.png' | relative_url }}" media="(prefers-color-scheme: dark)">
      <img src="{{ '/assets/images/location-simulator-light.png' | relative_url }}" width="1800" height="971" alt="LocationSimulator showing connected iOS devices and a simulated walking route through London">
    </picture>
    <div class="screenshot-badge">
      <img src="{{ '/assets/images/app-icon.png' | relative_url }}" alt="">
      <span><strong>LocationSimulator</strong>Real app interface</span>
    </div>
  </div>
</section>

<section class="trust-strip" aria-label="Highlights">
  <span>No jailbreak</span><i></i><span>Physical devices</span><i></i><span>Xcode Simulator</span><i></i><span>Routes &amp; GPX</span>
</section>

<section class="section shell workflow">
  <div class="section-heading">
    <p class="eyebrow">A clean division of work</p>
    <h2>Your map in one app.<br>Your devices in another.</h2>
    <p>Each app does one job well. They discover each other automatically on the same Mac and can pair securely across your local network.</p>
  </div>

  <div class="product-grid">
    <article class="product-card simulator-card">
      <div class="card-index">01</div>
      <p class="eyebrow">{{ site.data.products.locationsimulator.eyebrow }}</p>
      <h3>{{ site.data.products.locationsimulator.name }}</h3>
      <p>{{ site.data.products.locationsimulator.description }}</p>
      <ul>
        <li><span>⌖</span> Select exact coordinates</li>
        <li><span>↝</span> Build and replay routes</li>
        <li><span>⌘</span> Automate with AppleScript</li>
      </ul>
      <a href="{{ site.data.products.locationsimulator.app_store_url }}">Get it on the App Store <span aria-hidden="true">→</span></a>
    </article>

    <div class="pairing-mark" aria-hidden="true"><span></span><span></span><span></span></div>

    <article class="product-card spoofer-card">
      <div class="card-index">02</div>
      <p class="eyebrow">{{ site.data.products.locationspoofer.eyebrow }}</p>
      <h3>{{ site.data.products.locationspoofer.name }}</h3>
      <p>{{ site.data.products.locationspoofer.description }}</p>
      <ul>
        <li><span>◉</span> Physical devices and simulators</li>
        <li><span>⌁</span> Local and network connections</li>
        <li><span>↻</span> Automatic update checks</li>
      </ul>
      <a href="{{ site.data.products.locationspoofer.download_url }}">Download for macOS <span aria-hidden="true">↓</span></a>
    </article>
  </div>
</section>

<section class="section feature-section">
  <div class="shell">
    <div class="section-heading compact">
      <p class="eyebrow">Made for real testing</p>
      <h2>From a single point to a complete journey.</h2>
    </div>
    <div class="feature-grid">
      <article><span class="feature-number">01</span><h3>Teleport precisely</h3><p>Search for a place, enter coordinates, or choose a point directly on the map.</p></article>
      <article><span class="feature-number">02</span><h3>Move naturally</h3><p>Walk, cycle, or drive along calculated routes with adjustable speed and direction.</p></article>
      <article><span class="feature-number">03</span><h3>Test your way</h3><p>Use the interface, keyboard controls, GPX files, or AppleScript automation.</p></article>
      <article><span class="feature-number">04</span><h3>Stay connected</h3><p>Work with devices on the same Mac or pair with LocationSpoofer over your network.</p></article>
    </div>
  </div>
</section>

<section class="section shell final-cta">
  <p class="eyebrow">Ready when your test plan is</p>
  <h2>Start with LocationSimulator.<br>Add LocationSpoofer to connect.</h2>
  <div class="hero-actions centered">
    <a class="button button-primary" href="{{ site.data.products.locationsimulator.app_store_url }}"><span class="button-symbol" aria-hidden="true">●</span><span><small>Download on the</small>App Store</span></a>
    <a class="button button-secondary" href="{{ '/downloads/' | relative_url }}">See setup details <span aria-hidden="true">→</span></a>
  </div>
</section>
