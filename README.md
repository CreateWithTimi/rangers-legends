# Rangers Legends

Rangers Legends is a React/Vite digital storytelling and archive platform for celebrating the players, moments, stories, and cultural legacy of Rangers International F.C.

The first collection centers on `LEGEND 001`: Christian Chukwu, "Chairman". The app architecture is designed so future legends can be added mainly through new data and approved assets, not by rebuilding the site.

## Current Milestone

This repository currently contains the first implementation foundation only:

- Vite + React + JavaScript scaffold
- React Router route structure for V1 pages
- Canonical `PROJECT_BRIEF.md`
- Initial design tokens, reset, and global CSS
- Shared layout with `SiteHeader` and `SiteFooter`
- Simple responsive Home page skeleton
- Placeholder V1 routes with no invented history or assets

Detailed visual implementation, real assets, ecommerce, authentication, backend, CMS, and advanced interactions are intentionally out of scope for this milestone.

## Setup

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
src/
  assets/
    global/
    legends/
      christian-chukwu/
        comic/
        graphics/
        apparel/
        cards/
        film/
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

## Development Notes

- Treat `PROJECT_BRIEF.md` as the canonical product, design, and content specification.
- Do not invent historical facts, quotes, scores, dates, product details, prices, or official partnerships.
- Use approved assets only. Missing assets should render as clearly labeled placeholders.
- Keep the frontend simple, readable, responsive, and beginner-friendly.
