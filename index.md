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
    <p class="hero-lede">Set a location, move manually, or follow a route on a physical iPhone, iPad, or iOS Simulator.</p>
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

<section class="section shell pair-section">
  <div class="pair-heading">
    <p class="eyebrow">Two apps, one workflow</p>
    <h2>Choose it. Spoof it.</h2>
  </div>
  <div class="pair-flow">
    <article>
      <img src="{{ '/assets/images/app-icon.png' | relative_url }}" alt="">
      <div><h3>LocationSimulator</h3><p>Choose a device, location, or route.</p></div>
    </article>
    <span class="flow-arrow" aria-hidden="true">→</span>
    <article>
      <img src="{{ '/assets/images/location-spoofer-icon.png' | relative_url }}" alt="">
      <div><h3>LocationSpoofer</h3><p>Applies it while both apps are running.</p></div>
    </article>
  </div>
</section>

<section class="section automation-section">
  <div class="shell automation-grid">
    <div class="automation-copy">
      <p class="eyebrow">AppleScript</p>
      <h2>Automate a test drive.</h2>
      <p>Cycle east at 18 km/h, one step at a time.</p>
      <img src="{{ '/assets/images/movement-control.png' | relative_url }}" width="202" height="212" alt="LocationSimulator movement control set to walking">
    </div>
    <div class="code-window" aria-label="AppleScript example">
      <div class="code-title"><span></span><span></span><span></span><strong>test-drive.applescript</strong></div>
<pre><code><span class="code-keyword">tell application</span> <span class="code-string">"LocationSimulator"</span>
    <span class="code-keyword">set</span> win <span class="code-keyword">to</span> first window
    <span class="code-keyword">set</span> movement type <span class="code-keyword">of</span> win <span class="code-keyword">to</span> cycle
    <span class="code-keyword">set</span> speed <span class="code-keyword">of</span> win <span class="code-keyword">to</span> <span class="code-number">18</span>

    <span class="code-keyword">tell</span> map view <span class="code-keyword">of</span> win
        <span class="code-keyword">set</span> heading <span class="code-keyword">to</span> <span class="code-number">90</span>
        step movement
    <span class="code-keyword">end tell</span>
<span class="code-keyword">end tell</span></code></pre>
    </div>
  </div>
</section>

<aside class="usage-note shell">
  <strong>Made for app testing.</strong>
  <span>Game cheating is unsupported and discouraged.</span>
</aside>
