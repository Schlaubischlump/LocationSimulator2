---
layout: default
title: Location testing for Apple devices
nav: home
description: Spoof locations on physical iPhones and iPads or devices running in iOS Simulator.
---

<section class="hero shell">
  <div class="hero-copy">
    <p class="eyebrow">LocationSimulator for macOS</p>
    <h1>Spoof locations.<br><span>Test your app.</span></h1>
    <p class="hero-lede">LocationSimulator lets you change the reported location of a physical iPhone or iPad, as well as devices running in iOS Simulator. It is intended for developers testing location-based applications.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ site.data.products.locationsimulator.app_store_url }}">
        <span class="app-store-symbol" aria-hidden="true"></span>
        <span><small>Download on the</small>App Store</span>
      </a>
      <a class="button button-secondary" href="{{ site.data.products.locationspoofer.download_url }}"><img class="button-icon" src="{{ '/assets/images/location-spoofer-icon.png' | relative_url }}" alt="">Download LocationSpoofer <span aria-hidden="true">↓</span></a>
    </div>
    <p class="hero-note">Requires LocationSpoofer, installed separately on your Mac.</p>
  </div>

  <div class="product-stage">
    <div class="screenshot-glow" aria-hidden="true"></div>
    <picture class="screenshot-picture">
      <source srcset="{{ '/assets/images/location-simulator-dark.png' | relative_url }}" media="(prefers-color-scheme: dark)">
      <img src="{{ '/assets/images/location-simulator-light.png' | relative_url }}" width="1800" height="971" alt="LocationSimulator showing connected iOS devices and a simulated walking route through London">
    </picture>
    <div class="screenshot-badge">
      <img src="{{ '/assets/images/app-icon.png' | relative_url }}" alt="">
      <span><strong>LocationSimulator</strong>macOS app</span>
    </div>
  </div>
</section>

<section class="trust-strip" aria-label="Highlights">
  <span>Physical iPhone &amp; iPad</span><i></i><span>iOS Simulator</span><i></i><span>Routes &amp; GPX</span><i></i><span>No jailbreak</span>
</section>

<section class="section shell workflow">
  <div class="section-heading">
    <p class="eyebrow">Two apps, both required</p>
    <h2>LocationSimulator works with LocationSpoofer.</h2>
    <p>LocationSimulator is not a standalone app. LocationSpoofer must be installed separately, and both applications need to be running while you spoof a device's location.</p>
  </div>

  <div class="product-grid">
    <article class="product-card simulator-card">
      <div class="card-index">01</div>
      <p class="eyebrow">{{ site.data.products.locationsimulator.eyebrow }}</p>
      <h3>{{ site.data.products.locationsimulator.name }}</h3>
      <p>{{ site.data.products.locationsimulator.description }}</p>
      <ul>
        <li><span>⌖</span> Choose exact coordinates</li>
        <li><span>↝</span> Create and follow routes</li>
        <li><span>⌘</span> Use GPX files or AppleScript</li>
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
        <li><span>◉</span> Connect physical devices</li>
        <li><span>⌁</span> Work with iOS Simulator</li>
        <li><span>↻</span> Run locally or across your network</li>
      </ul>
      <a href="{{ site.data.products.locationspoofer.download_url }}">Download for macOS <span aria-hidden="true">↓</span></a>
    </article>
  </div>
</section>

<section class="section feature-section">
  <div class="shell">
    <div class="section-heading compact">
      <p class="eyebrow">Device and OS support</p>
      <h2>Designed to keep setup manageable.</h2>
    </div>
    <div class="feature-grid">
      <article><span class="feature-number">01</span><h3>Physical devices</h3><p>Change the reported location of connected iPhones and iPads without installing an app on the device.</p></article>
      <article><span class="feature-number">02</span><h3>iOS Simulator</h3><p>Use the same map and route controls with devices running in iOS Simulator.</p></article>
      <article><span class="feature-number">03</span><h3>Current iOS releases</h3><p>LocationSimulator and LocationSpoofer are maintained together to support new iOS versions with as little manual setup as possible.</p></article>
      <article><span class="feature-number">04</span><h3>Developer images</h3><p>When an iOS version requires a personalized developer disk image, you can manage it from within the app.</p></article>
    </div>
  </div>
</section>

<section class="section shell purpose-section">
  <div>
    <p class="eyebrow">Intended use</p>
    <h2>For development and testing.</h2>
  </div>
  <div class="purpose-copy">
    <p>LocationSimulator is intended primarily for developers testing location-based applications. I do not encourage using it to cheat in iOS games, and I do not provide support for that use.</p>
    <p>If you use the application outside its intended purpose, you do so at your own risk.</p>
    <p class="future-note">A future iOS version of LocationSimulator is planned. It will connect remotely to LocationSpoofer running on a Mac on the same network.</p>
  </div>
</section>

<section class="section shell final-cta">
  <p class="eyebrow">Get started</p>
  <h2>Install LocationSimulator<br>and LocationSpoofer.</h2>
  <div class="hero-actions centered">
    <a class="button button-primary" href="{{ site.data.products.locationsimulator.app_store_url }}"><span class="app-store-symbol" aria-hidden="true"></span><span><small>Download on the</small>App Store</span></a>
    <a class="button button-secondary" href="{{ '/downloads/' | relative_url }}">See setup details <span aria-hidden="true">→</span></a>
  </div>
</section>
