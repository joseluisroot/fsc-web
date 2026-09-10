# Console cleanup increment

- Tailwind configuration moved to `tailwind.config.js` and the invalid inline object was removed from `index.html`.
- Web branding links are declared explicitly in `<head>`.
- `site.webmanifest` references the valid FSC SVG icon while PNG app icons are being normalized.
- Browser lazy-loading intervention messages are informational and are intentionally retained.
- The Tailwind CDN warning remains expected during the static prototype phase and will disappear when the project switches to a compiled Tailwind build for production.
