# LocationSimulator2 website

This branch contains the static Jekyll website published by GitHub Pages.

## Configure downloads

The ordered download list lives in `_data/downloads.yml`:

- `LocationSimulator App Store`
- `LocationSimulator TestFlight`
- `LocationSpoofer`

Each entry has its own `visible` switch and `url`. Set any combination to
`true` or `false`; App Store and TestFlight can both be visible, and all three
entries can be hidden. A visible entry must also have a non-empty URL.

The TestFlight entry currently uses a clearly marked dummy URL for layout
testing. Replace it with the public TestFlight invitation before publishing.

The LocationSpoofer download uses a permanent GitHub Releases URL. Each release
should contain an asset named `LocationSpoofer.zip` so the website always
downloads the latest published version without a website edit.

Issue and legacy URLs remain in `_data/products.yml`.

## Add a changelog entry

Create a Markdown file in `_releases`. The filename is only for organization;
the front matter controls where and how the entry appears.

```markdown
---
product: locationspoofer
version: 1.1.0
date: 2026-09-01
download_url: https://github.com/Schlaubischlump/LocationSpoofer-App/releases/download/v1.1.0/LocationSpoofer-1.1.0.zip
---

- Added a new feature.
- Fixed a connection issue.
```

Use `product: locationsimulator` for LocationSimulator releases. The optional
`download_url` is normally omitted for App Store releases.

## Preview locally

Docker Desktop is the only prerequisite. Run:

```sh
./script/serve
```

Then open <http://localhost:4000>. The preview reloads automatically when a
Markdown, HTML, YAML, or CSS file changes. Stop it with `Control-C`.

To perform a production build without starting the preview server:

```sh
./script/build
```

The generated site is written to `_site`.

## Publish

Configure the repository's Pages source as **Deploy from a branch**, select the
`gh-pages` branch, and use the repository root (`/`). GitHub Pages will build
and publish the site at:

<https://schlaubischlump.github.io/LocationSimulator2/>
