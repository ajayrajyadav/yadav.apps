# github.website

Standalone static site for public app marketing, privacy, and support pages.

## Apps

- `Nudgy`
- `Layout Studio`

## Structure

- `src/data/apps.mjs`: app content, screenshots, support/privacy details
- `src/templates/site.mjs`: shared page templates
- `src/assets/`: shared CSS, JS, favicon, and copied public screenshots
- `scripts/build.mjs`: renders static HTML into `dist/`
- `scripts/validate.mjs`: checks links, assets, and GitHub Pages-safe paths

## Commands

```bash
npm run build
npm run lint
```

## Deployment

The included GitHub Actions workflow deploys `dist/` to GitHub Pages using the
official Pages actions.
