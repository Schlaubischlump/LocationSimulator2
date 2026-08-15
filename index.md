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
    {% assign visible_downloads = site.data.downloads | where: "visible", true %}
    {% if visible_downloads.size > 0 %}
    <div class="hero-actions">
      {% for download in visible_downloads %}{% include download-button.html download=download %}{% endfor %}
    </div>
    {% endif %}
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

<section class="section pair-section-band">
  <div class="shell pair-section">
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
        <img class="spoofer-icon-cropped" src="{{ '/assets/images/location-spoofer-icon.png' | relative_url }}" alt="">
        <div><h3>LocationSpoofer</h3><p>Applies it while both apps are running.</p></div>
      </article>
    </div>
  </div>
</section>

<section class="section shell onboarding-section">
  <div class="section-heading compact">
    <p class="eyebrow">Get started</p>
    <h2>From cable to test route.</h2>
  </div>

  <div class="onboarding-block">
    <div class="subsection-heading">
      <span>01</span>
      <div><p class="eyebrow">Physical device setup</p><h3>Before the first connection.</h3></div>
    </div>
    <div class="setup-notes">
      <article>
        <span class="setup-symbol" aria-hidden="true">USB</span>
        <div><h3>Pair over USB first</h3><p>Connect and unlock the device, accept its trust prompt, then pair it. A Wi-Fi connection only works after the Mac has a saved pairing record for that device.</p></div>
      </article>
      <article>
        <span class="setup-symbol" aria-hidden="true">16+</span>
        <div><h3>Enable Developer Mode</h3><p>iOS 16 and later require Developer Mode. The option should appear in Settings after the first preparation attempt shows the warning. You can also open the device information view with the information button beside the device. From <strong>Device Setup</strong>, ask LocationSimulator to reveal the setting, then follow the restart and confirmation prompts.</p></div>
      </article>
    </div>
  </div>

  <div class="onboarding-block">
    <div class="subsection-heading">
      <span>02</span>
      <div><p class="eyebrow">Basic use</p><h3>Start spoofing.</h3></div>
    </div>
    <ol class="steps four-steps">
      <li><span>1</span><div><strong>Select a target</strong><p>Run both apps, then choose a connected physical device or running iOS Simulator from the sidebar.</p></div></li>
      <li><span>2</span><div><strong>Set the first location</strong><p>Long-click a point on the map. The selected device immediately begins reporting that coordinate.</p></div></li>
      <li><span>3</span><div><strong>Move or navigate</strong><p>Choose Walk, Cycle, Drive, or a custom speed. Use the direction control or arrow keys, or long-click another point and choose Navigate Here.</p></div></li>
      <li><span>4</span><div><strong>Stop spoofing</strong><p>Use Reset Location when the test is finished to return control to the device's normal location services.</p></div></li>
    </ol>
  </div>
</section>

<section class="section automation-section">
  <div class="shell automation-grid">
    <div class="automation-copy">
      <p class="eyebrow">AppleScript</p>
      <h2>Automate a full test drive.</h2>
      <p>Calculate a route, move to its start, drive to the destination, wait for arrival, then reset the device.</p>
    </div>
    <div class="code-window" aria-label="AppleScript example">
      <div class="code-title"><span></span><span></span><span></span><strong>test-drive.applescript</strong></div>
<pre><code><span class="code-keyword">set</span> startPoint <span class="code-keyword">to</span> {<span class="code-number">48.1372</span>, <span class="code-number">11.5756</span>}
<span class="code-keyword">set</span> finishPoint <span class="code-keyword">to</span> {<span class="code-number">48.1456</span>, <span class="code-number">11.5658</span>}

<span class="code-keyword">tell application</span> <span class="code-string">"LocationSimulator"</span>
    <span class="code-keyword">set</span> testMap <span class="code-keyword">to</span> map view <span class="code-keyword">of</span> first window
    <span class="code-keyword">set</span> movement type <span class="code-keyword">of</span> first window <span class="code-keyword">to</span> drive
    <span class="code-keyword">set</span> speed <span class="code-keyword">of</span> first window <span class="code-keyword">to</span> <span class="code-number">50</span>
<span class="code-keyword">end tell</span>

<span class="code-keyword">tell application</span> <span class="code-string">"LocationSpoofer"</span>
    <span class="code-keyword">set</span> testRoute <span class="code-keyword">to</span> calculate route from startPoint ¬
        to finishPoint movement type drive
<span class="code-keyword">end tell</span>

<span class="code-keyword">tell application</span> <span class="code-string">"LocationSimulator"</span>
    <span class="code-keyword">tell</span> testMap
        relocate to startPoint
        start navigation route testRoute
        <span class="code-keyword">repeat while</span> playback state <span class="code-keyword">is</span> playback playing
            delay <span class="code-number">0.5</span>
        <span class="code-keyword">end repeat</span>
        reset simulation
    <span class="code-keyword">end tell</span>
<span class="code-keyword">end tell</span></code></pre>
    </div>
  </div>
</section>

<section class="section shell feature-list-section">
  <div class="section-heading compact">
    <p class="eyebrow">Features</p>
    <h2>What it handles.</h2>
  </div>
  <div class="feature-list">
    <article><span aria-hidden="true">⌁</span><div><h3>Physical devices</h3><p>Spoof an iPhone or iPad without a jailbreak or an app installed on the device.</p></div></article>
    <article><span aria-hidden="true">▣</span><div><h3>iOS Simulator</h3><p>Use the same map and movement controls with devices running in iOS Simulator.</p></div></article>
    <article><span aria-hidden="true">↯</span><div><h3>Developer images</h3><p>Automatically look for and download the DeveloperDiskImage files required by the connected iOS version.</p></div></article>
    <article><span aria-hidden="true">⌘</span><div><h3>Network devices</h3><p>Pair a physical device over USB first, then reconnect to it over Wi-Fi.</p></div></article>
    <article><span aria-hidden="true">⌖</span><div><h3>Set a location</h3><p>Long-click anywhere on the map to make the device report that coordinate.</p></div></article>
    <article><span aria-hidden="true">⌕</span><div><h3>Location search</h3><p>Find a place or address and move the map directly to it.</p></div></article>
    <article><span aria-hidden="true">↝</span><div><h3>Route navigation</h3><p>Calculate a route from the current location and simulate traveling along it.</p></div></article>
    <article><span aria-hidden="true">◴</span><div><h3>Movement speeds</h3><p>Use custom speeds or switch between the predefined Walk, Cycle, and Drive modes.</p></div></article>
    <article><span aria-hidden="true">↑</span><div><h3>Keyboard control</h3><p>Move and change direction with the arrow keys while testing.</p></div></article>
    <article><span aria-hidden="true">◐</span><div><h3>Dark mode</h3><p>Follow the current macOS appearance or choose the app appearance yourself.</p></div></article>
  </div>
</section>

<aside class="usage-note shell">
  <strong>Made for app testing.</strong>
  <span>Game cheating is unsupported and discouraged.</span>
</aside>
