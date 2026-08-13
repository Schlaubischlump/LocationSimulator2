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
    <img class="download-app-icon" src="{{ '/assets/images/location-spoofer-icon.png' | relative_url }}" width="152" height="152" alt="LocationSpoofer app icon">
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

<section class="section shell setup-section">
  <div class="section-heading compact">
    <p class="eyebrow">Physical device setup</p>
    <h2>Before the first connection.</h2>
  </div>
  <div class="setup-notes">
    <article>
      <span class="setup-symbol" aria-hidden="true">USB</span>
      <div><h3>Pair over USB first</h3><p>Connect and unlock the device, accept its trust prompt, then pair it. A Wi-Fi connection only works after the Mac has a saved pairing record for that device.</p></div>
    </article>
    <article>
      <span class="setup-symbol" aria-hidden="true">16+</span>
      <div><h3>Enable Developer Mode</h3><p>iOS 16 and later require Developer Mode. The option should appear in Settings after the first preparation attempt shows the warning. You can also open the device information view with the information button beside the device. From <strong>Device Setup</strong>, ask LocationSimulator to reveal the setting. Keep the device unlocked and follow the restart and confirmation prompts.</p></div>
    </article>
  </div>
</section>

<section class="section shell spoofing-section">
  <div class="section-heading compact">
    <p class="eyebrow">Basic use</p>
    <h2>Start spoofing.</h2>
  </div>
  <ol class="steps four-steps">
    <li><span>1</span><div><strong>Select a target</strong><p>Run both apps, then choose a connected physical device or running iOS Simulator from the sidebar.</p></div></li>
    <li><span>2</span><div><strong>Set the first location</strong><p>Long-click a point on the map. The selected device immediately begins reporting that coordinate.</p></div></li>
    <li><span>3</span><div><strong>Move or navigate</strong><p>Choose Walk, Cycle, Drive, or a custom speed. Use the direction control or arrow keys, or long-click another point and choose Navigate Here.</p></div></li>
    <li><span>4</span><div><strong>Return to the real location</strong><p>Use Reset Location when the test is finished to stop the simulation.</p></div></li>
  </ol>
</section>
