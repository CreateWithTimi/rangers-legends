# Rangers Legends

Rangers Legends is an evolving multi-format storytelling and archive concept exploring football history through connected digital and physical experiences.

The platform is designed as a scalable archive for Rangers International F.C. legends. V1 focuses on:

```text
LEGEND 001
CHRISTIAN CHUKWU - "CHAIRMAN"
```

This project is a concept/demo experience. It is not an official Rangers International F.C. website, official archive, licensed merchandise program, or announced commercial partnership.

## Current V1 Experiences

- Home
- Legends Directory
- Legend 001 Hub
- Comic Reader
- Film / Coming Soon
- Graphics Gallery
- Apparel Lookbook
- Cards Collector Archive

## Tech Stack

- Vite
- React
- React Router
- JavaScript
- Modern plain CSS

No backend, CMS, ecommerce, authentication, payments, or external state-management layer is included in V1.

## Local Development

```bash
npm install
npm run dev
```

Build the project with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/
    global/
    legends/
      christian-chukwu/
        apparel/
        cards/
        collection/
        comic/
        covers/
        graphics/
        hero/
        optimized/
  components/
    layout/
    navigation/
    ui/
    archive/
    legend/
    media/
  data/
    legends/
      christian-chukwu.js
      index.js
    site.js
  pages/
    Home/
    Legends/
    LegendHub/
    ComicReader/
    Film/
    Graphics/
    Apparel/
    Cards/
    NotFound/
  styles/
    tokens.css
    reset.css
    global.css
    utilities.css
  App.jsx
  main.jsx
```

## Content And Asset Status

`PROJECT_BRIEF.md` is the canonical product, design, and content specification.

`ASSET_MANIFEST.md` tracks supplied media and cleanup status. Current concept artwork may contain generated or provisional visual elements, including crest-like marks, generated typography, embedded historical-looking text, and product-detail-looking labels. Those elements are treated as concept artwork only and should not be treated as verified historical claims, licensed brand assets, or final production merchandise details.

Original supplied artwork is preserved in the source asset folders. The application uses non-destructive optimized derivatives from `src/assets/legends/christian-chukwu/optimized/` where practical so the controlled demo can load substantially less media without altering the approved page compositions.

Do not invent historical facts, scores, quotes, product specifications, prices, release dates, official approvals, or partnership language.

## Deployment Note

The app uses React Router with nested client-side routes such as:

- `/legends/christian-chukwu`
- `/legends/christian-chukwu/story`
- `/legends/christian-chukwu/film`
- `/legends/christian-chukwu/graphics`
- `/legends/christian-chukwu/apparel`
- `/legends/christian-chukwu/cards`

No hosting provider configuration is currently present in the repository. When a hosting target is selected, configure that provider to serve `dist/index.html` for direct requests to nested routes so browser refreshes do not produce hosting-level 404s.

Do not switch the app to `HashRouter` solely to avoid hosting configuration.

## Deployment Metadata Checklist

Set `VITE_SITE_URL` to the final public origin when building for deployment:

```bash
VITE_SITE_URL=<production-origin> npm run build
```

Use the origin only, without a trailing slash. The app uses this value to create route-aware canonical URLs and `og:url` values in the client metadata layer, and to inject absolute `og:image` / `twitter:image` tags into the built `index.html`. If `VITE_SITE_URL` is absent during local development, the app does not emit fake production URLs.

After a hosting URL is selected, finalize the remaining domain-dependent metadata:

- Add a favicon only when a safe Rangers Legends identity asset is available.
- Add sitemap / robots hosting details only after the production hostname is known.

## Project Status

V1 concept/demo. Legend 001 feature development is complete for controlled demo review. Remaining public-readiness work is tracked in `V1_QA_REPORT.md`.
