---
layout: default
title: Changelog
nav: changelog
description: Release notes for LocationSimulator and LocationSpoofer.
permalink: /changelog/
---

<section class="page-hero shell narrow">
  <p class="eyebrow">Release notes</p>
  <h1>Changelog.</h1>
  <p>Updates for LocationSimulator and LocationSpoofer.</p>
</section>

<section class="shell changelog-grid">
  {% assign simulator_releases = site.releases | where: "product", "locationsimulator" | sort: "date" | reverse %}
  {% assign spoofer_releases = site.releases | where: "product", "locationspoofer" | sort: "date" | reverse %}

  <div class="release-column">
    <div class="release-column-header"><span class="status-dot blue"></span><div><p class="eyebrow">macOS app</p><h2>LocationSimulator</h2></div></div>
    {% if simulator_releases.size > 0 %}
      {% for release in simulator_releases %}
      <article class="release-entry">
        <div class="release-meta"><strong>v{{ release.version }}</strong><time datetime="{{ release.date | date_to_xmlschema }}">{{ release.date | date: "%B %-d, %Y" }}</time></div>
        <div class="release-body">{{ release.content | markdownify }}</div>
      </article>
      {% endfor %}
    {% else %}
      <div class="empty-release"><span>⌁</span><h3>The first release is on its way.</h3><p>LocationSimulator release notes will appear here after launch.</p></div>
    {% endif %}
  </div>

  <div class="release-column">
    <div class="release-column-header"><span class="status-dot green"></span><div><p class="eyebrow">Required helper</p><h2>LocationSpoofer</h2></div></div>
    {% if spoofer_releases.size > 0 %}
      {% for release in spoofer_releases %}
      <article class="release-entry">
        <div class="release-meta"><strong>v{{ release.version }}</strong><time datetime="{{ release.date | date_to_xmlschema }}">{{ release.date | date: "%B %-d, %Y" }}</time></div>
        <div class="release-body">{{ release.content | markdownify }}</div>
        {% if release.download_url %}<a class="release-download" href="{{ release.download_url }}">Download this release <span aria-hidden="true">↓</span></a>{% endif %}
      </article>
      {% endfor %}
    {% else %}
      <div class="empty-release"><span>⌁</span><h3>The first release is on its way.</h3><p>LocationSpoofer release notes will appear here after launch.</p></div>
    {% endif %}
  </div>
</section>

<section class="legacy-callout shell">
  <div><p class="eyebrow">Original app</p><h2>Looking for the legacy changelog?</h2></div>
  <a class="button button-secondary" href="{{ site.data.products.site.legacy_url }}">Open legacy website <span aria-hidden="true">↗</span></a>
</section>
