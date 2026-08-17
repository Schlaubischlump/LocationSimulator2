# Developer disk image catalog

This schema-version-1 catalog is the only source of developer-image payload URLs
used by LocationSimulator. Each platform has two deliberately different entry
shapes:

- `legacyVersions` maps an exact `X.Y` or `X.Y.Z` operating-system version to a
  legacy image and signature.
- `personalized` is one optional, unversioned image, trust cache, and build
  manifest shared by every personalized-image OS release on that platform.

The platform transition versions are not catalog data. They are defined once in
`ApplePlatformCompatibility` and cover iOS, watchOS, tvOS, and visionOS. Catalog
decoding rejects a legacy entry at or beyond its platform's personalized-image
transition, preventing the settings UI and cache from ever representing a
versioned personalized image.

Catalog versions may use either `X.Y` or `X.Y.Z`. When a device reports an
`X.Y.Z` version and no exact entry is present, LocationSimulator falls back to
the corresponding `X.Y` legacy entry.

## Development notes

An installed legacy image is identified by platform and normalized version. An
installed personalized image is identified only by platform.

- Adding an image manually is rejected if a complete image with the same
  identity is already installed. The existing files are not replaced.
- After an image is added manually, the matching catalog entry is hidden from
  the Available list. To replace the manual image with the catalog download,
  delete the installed image first; the matching Get button then reappears.
- `X.Y` and `X.Y.Z` are distinct installed entries and may coexist. For a device
  using a legacy image, an exact `X.Y.Z` image is preferred and `X.Y` is the
  fallback.
- Personalized images have no version field or fallback. Every personalized OS
  version for a platform resolves to the same entry.

The cache mirrors these identities:

```text
DeveloperImages/
  ios/
    16.7/
    personalized/
  watchos/
    9.0/
    personalized/
```

LocationSimulator2 bundles this file as the first-launch and offline fallback.
App startup checks the persisted download timestamp and refreshes the catalog
from the production GitHub URL in `Config` when it is more than two hours old.
Only a fully decoded, supported catalog atomically replaces the cached JSON. A
release or test build can set `DEVELOPER_IMAGE_CATALOG_URL` to fetch another
complete copy of the same schema.
