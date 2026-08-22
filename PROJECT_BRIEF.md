# Rangers Legends Project Brief

## 1. Project Purpose

Rangers Legends is a digital storytelling and archive platform celebrating the players, moments, stories, and cultural legacy of Rangers International F.C.

This is not a one-off Christian Chukwu website.

The platform itself is:

**RANGERS LEGENDS**

Christian Chukwu, "Chairman", is:

**LEGEND 001**

The architecture must allow future legends to be added without redesigning the site.

Each future legend should be able to have:

- Overview / Legend Hub
- Comic Story
- Short Film
- Graphics
- Apparel Collection
- Collectible Cards
- Historical / Archive information

The long-term vision may eventually include:

- Multiple Rangers legends
- Comics
- Short films
- Downloadable graphics where rights allow
- Apparel
- Collectible cards
- Physical collector collections
- A shop
- Monetization
- Historical archive content

V1 should remain focused, lightweight, and realistic. Do not build speculative backend, ecommerce, authentication, CMS, payment systems, or complex infrastructure yet.

## 2. Tech Stack

Use:

- React
- Vite
- JavaScript
- Modern plain CSS
- React Router for routing
- Git for version control

Do not use:

- Next.js
- Tailwind
- TypeScript
- Component libraries unless specifically approved later
- Unnecessary state-management libraries
- Unnecessary animation libraries at this stage
- Fake backend/API systems

The goal is a clear frontend codebase that is easy to understand.

## 3. Repository Setup

Create a repository/project named:

```text
rangers-legends
```

Initialize:

- Vite React project
- Git
- `.gitignore`
- `README.md`
- `PROJECT_BRIEF.md`

If a GitHub remote is not yet supplied, do not invent one. Do not push until explicitly asked. Keep initial commits clean and meaningful.

## 4. Source Structure

Use a scalable structure similar to:

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

The exact structure can be refined if there is a strong engineering reason, but it should remain intuitive and avoid over-abstraction.

## 5. Routes

V1 routes:

- `/` - Home
- `/legends` - Legends archive / directory
- `/legends/christian-chukwu` - Legend 001 hub
- `/legends/christian-chukwu/story` - Comic Reader
- `/legends/christian-chukwu/film` - Film page
- `/legends/christian-chukwu/graphics` - Graphics gallery
- `/legends/christian-chukwu/apparel` - Apparel collection
- `/legends/christian-chukwu/cards` - Collectible cards archive

Optional future routes should be architecturally possible but not built yet:

- `/archive`
- `/about`
- `/shop`

Use React Router.

## 6. Content Model

Do not hardcode all legend-specific content throughout components. Create a reusable data structure for legends.

Example:

```text
src/data/legends/christian-chukwu.js
```

The data model should be able to contain:

- `slug`
- `legendNumber`
- `name`
- `nickname`
- `shortTitle`
- `number`
- `roles`
- `summary`
- `years`
- Hero assets
- Comic pages
- Film state
- Graphics
- Apparel
- Cards
- Timeline entries
- Verified historical notes

Components should consume this data wherever practical.

The goal is that Legend 002 should mostly require adding new data and new approved assets, not rebuilding the application.

## 7. Legend 001

Legend 001:

- Name: Christian Chukwu
- Nickname: "Chairman"
- Identity: Rangers International F.C. legend, captain, defender, Nigeria captain, coach, mentor
- Primary number: 5
- Core recurring language: **CAPTAIN. LEADER. RANGER.**
- Collection: **RANGERS LEGENDS 001**

Important: do not invent additional biography or historical facts during implementation. Only use content explicitly supplied and approved.

## 8. Brand Positioning

Rangers Legends should feel like:

**ARCHIVE x EDITORIAL x MODERN DIGITAL PRODUCT**

It should not look like:

- A generic football club website
- A normal ecommerce template
- A sports news site
- A gaming/FIFA interface
- An overly futuristic tech website

The visual idea is historic Rangers material rebuilt as a premium modern digital archive.

Reference language:

- Vintage football programmes
- Editorial magazines
- Sports posters
- Archival documents
- Comics
- Screen-print graphics
- Collectible culture

The UX must remain modern and clean.

## 9. Core Brand Language

Primary brand:

```text
RANGERS LEGENDS
```

Primary platform tagline:

```text
THE STORIES BEHIND THE SHIRT.
```

Legend naming structure:

```text
LEGEND 001
CHRISTIAN CHUKWU
"CHAIRMAN"
```

Collection naming:

```text
COLLECTION 001
```

Card system:

```text
C01 - THE LEGEND
C02 - THE MOMENT
C03 - THE GLORY
C04 - THE CAPTAIN
C05 - THE LEGACY
```

## 10. Design Tokens

Create CSS custom properties in:

```text
src/styles/tokens.css
```

Use this working V1 palette:

```css
--color-bg: #0B0D0C;
--color-surface: #121513;
--color-cream: #E5D2AD;
--color-paper: #C9AD7E;
--color-red: #A92D24;
--color-green: #183A2D;
--color-gold: #B18A52;
--color-charcoal: #171917;
--color-muted: #8F897C;
--color-white: #F4F0E7;
```

These values are starting points, not immutable brand standards.

Use color deliberately:

- Near-black is the primary digital environment.
- Cream is the primary editorial text tone.
- Rangers red is the heartbeat / high-emphasis accent.
- Deep green is secondary and should not overwhelm layouts.
- Gold is subtle: borders, metadata, archive details.
- Paper tones are used for comic/archive surfaces.
- Do not make every section red or green.

## 11. Typography System

Use only three typographic roles:

1. **Display** - tall, bold, condensed, editorial. Used for `RANGERS LEGENDS`, `CHAIRMAN`, major section headings, dates, numbers, and campaign statements.
2. **Editorial Sans** - clean and highly readable. Used for body copy, navigation, buttons, descriptions, and UI.
3. **Archive Accent** - used sparingly for annotations, signatures, archive labels, and historical metadata.

Do not use excessive distressed fonts. Distress and texture belong primarily to artwork, selected display typography, and archive elements. Body copy must remain clean.

Use web-safe / freely available fonts initially if exact final fonts are not yet specified. Do not download random paid/licensed fonts.

Initial font choices:

- Display: `Impact`, `Arial Black`, `Arial Narrow`, sans-serif fallback stack
- Editorial Sans: `Inter`, `Arial`, `Helvetica`, sans-serif fallback stack
- Archive Accent: `Georgia`, `Times New Roman`, serif fallback stack

These are implementation placeholders until approved final typefaces are supplied.

## 12. Layout System

Desktop:

- 12-column editorial grid
- Generous outer margins
- Strong negative space
- Occasional grid-breaking hero artwork
- Thin archive-style dividers

Do not put every section inside a card.

Allow:

- Large typography
- Asymmetric layouts
- Overlapping imagery
- Oversized numbers
- Full-width media
- Calm empty space

Spacing should feel deliberate and premium.

## 13. Responsive Behavior

Responsive design is mandatory from the beginning. Do not build desktop first and fix mobile later.

Desktop:

- Cinematic/editorial
- Multiple columns
- Large art direction

Tablet:

- Structured archive
- Reduced overlaps
- Simpler grids

Mobile:

- Story-first
- Single-column where appropriate
- Large readable type
- Strong vertical rhythm
- Comfortable touch targets
- Simplified navigation
- Reduced decorative complexity

Comic Reader mobile:

- One page at a time
- Full-width reading
- Swipe or clear previous/next navigation
- No forced two-page spread

Cards mobile:

- Tappable
- Flip interaction must still work
- One focused card at a time

Apparel mobile:

- One product/story at a time

## 14. Motion Principles

Do not add heavy animation during initial scaffold. Architecture should allow motion later.

Approved motion philosophy:

**HISTORY BEING UNCOVERED**

Future examples:

- Subtle parallax
- Masked artwork reveals
- Giant `5` moving slowly on scroll
- Timeline drawing
- Card lift on hover
- Collectible-card flip
- Comic-page transitions
- Gentle film-image movement

Avoid:

- Constant movement
- Gimmicky scroll effects
- Excessive spring animations
- Motion that hurts readability

## 15. Core Reusable Components

Plan reusable components such as:

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `ArchiveBreadcrumb`
- `SectionHeading`
- `SectionNumber`
- `PrimaryButton`
- `SecondaryButton`
- `LegendCard`
- `StoryCard`
- `ArtworkCard`
- `ApparelCard`
- `CollectibleCard`
- `Timeline`
- `QuoteBlock`
- `MediaFrame`
- `ArchiveStamp`
- `ComingSoon`
- `PageTransitionLink`

Do not build everything immediately. Create components only when actually needed. Avoid premature abstraction.

## 16. Page Purposes

### Home

Goal: introduce the Rangers Legends universe.

Suggested content hierarchy:

1. Hero: `RANGERS LEGENDS`, `THE STORIES BEHIND THE SHIRT.`
2. Featured Legend: `LEGEND 001`, `CHRISTIAN CHUKWU`, `"CHAIRMAN"`
3. Story preview: `History, drawn again.`
4. Film preview: `COMING SOON`
5. Apparel: `Wear the history.`
6. Cards: `Collect the legacy.`
7. Living Archive / mission
8. Future legends: `Legend 002 / 003 coming soon`
9. Collection 001 hero

The Home page sells the platform, not only Chairman.

### Legend Hub

Purpose: personal archive/hub for Christian Chukwu.

Should contain:

- Hero
- Biography / overview
- Timeline
- Story
- Film
- Graphics
- Apparel
- Cards
- Legacy

### Comic Reader

Purpose: comfortable reading experience.

Needs:

- Exact approved 8 comic pages
- Previous / next
- Page index
- Desktop spread option
- Single-page option
- Mobile single-page default
- Fullscreen eventually
- No invented chapters or comic text

### Film

Current state: `COMING SOON`

Purpose: cinematic room, not another card-heavy page.

Suggested:

- Huge cinematic hero/media frame
- `CHAIRMAN - A RANGERS LEGENDS FILM`
- `Coming Soon`
- Film journey:
  - `THE WOUND`
  - `THE MOMENT`
  - `THE GLORY`
  - `THE NATION`
  - `THE LEGACY`
- Synopsis
- CTA to read comic while waiting

Do not invent:

- Release date
- Exact runtime
- Trailer
- Production credits

### Graphics

Purpose: digital exhibition/gallery.

Use:

- Approved Chairman graphics
- Fullscreen viewing eventually
- Categories/filters only if actually useful

Do not promise downloads unless approved.

### Apparel

Purpose: editorial heritage streetwear lookbook.

Collection:

- `TEE 01 - THE MAN / CHAIRMAN`
- `TEE 02 - THE MOMENT / KADUNA 1977`
- `TEE 03 - THE GLORY / AFRICAN CHAMPIONS`

Do not show:

- Fake prices
- Fake inventory
- Fake fabric specifications
- Fake sizes
- `Buy Now` unless commerce exists

Use:

- `EXPLORE COLLECTION`
- `COMING SOON`
- `REGISTER INTEREST` only if that function is actually implemented

### Cards

Purpose: interactive digital collector archive.

Collection:

- `C01 - THE LEGEND`
- `C02 - THE MOMENT`
- `C03 - THE GLORY`
- `C04 - THE CAPTAIN`
- `C05 - THE LEGACY`

Desired interaction later:

- Select card
- Card comes forward
- Flip front/back
- Previous/next
- Collection progress

Do not imitate FIFA-style ratings. History itself is the collectible system.

## 17. Strict Content / Historical Rules

This section is non-negotiable.

- No invented crests.
- No fake history.
- No invented scores.
- No invented dates.
- No invented quotes.
- No invented player names.
- No invented kit details.
- No invented newspaper headlines presented as real archive.
- No fake product specifications.
- No fake prices.
- No fake release dates.
- No fake downloads.
- No fake shopping functionality.

If content is unknown:

- Use a neutral placeholder
- Mark it clearly
- Or omit it

Never fill in missing history for visual completeness.

The current modern Rangers crest may only be used if an approved actual asset is explicitly supplied. Do not generate or redraw a Rangers crest.

For historical 1970s kits:

- Do not place a modern crest on them.
- Use conservative kit treatment.
- Typography / stripes / number `5` are safer than invented badges.

If historical verification is unclear, do not make the claim.

## 18. Asset Rules

Do not create substitute AI assets inside the codebase unless explicitly requested. Use placeholders until approved source assets are supplied.

Create clear asset folders. Use descriptive filenames.

Examples:

```text
chairman-hero.webp
chairman-cover-main.webp
chairman-cover-penalty.webp

comic-page-01.webp
...
comic-page-08.webp

graphic-chairman-01.webp
graphic-kaduna-02.webp
graphic-champions-03.webp

tee-chairman.webp
tee-kaduna.webp
tee-champions.webp

card-c01-front.webp
card-c01-back.webp
```

If assets are missing, render a clearly labeled placeholder block. Do not invent an image.

## 19. Accessibility

Use:

- Semantic HTML
- Visible focus states
- Keyboard-accessible navigation
- Sufficient contrast
- Descriptive alt text
- Proper buttons vs links
- Reduced-motion support
- Meaningful heading hierarchy

Do not sacrifice accessibility for aesthetic effect.

## 20. Performance

This project will eventually have many high-resolution images.

Plan for:

- Responsive images
- Lazy loading
- Modern formats where available
- Appropriate image sizing
- Avoiding unnecessary full-resolution assets
- Route-level loading only if later needed

Do not prematurely optimize, but avoid obviously wasteful implementations.

## 21. SEO / Metadata

For V1:

- Meaningful document title
- Description
- Route titles where practical
- Basic Open Graph structure prepared later

Do not invent official Rangers endorsements or partnerships in metadata.

## 22. Legal / Brand Safety

Do not imply:

- Rangers International officially commissioned the project
- Official licensing
- Official merchandise status
- Formal partnership
- Product availability

unless explicitly supplied/approved later.

Use neutral language in V1. The platform is conceptually a Rangers Legends storytelling archive.

## 23. Version 1 Philosophy

Start small. Build the system. Make it real. Do not overengineer.

V1 priorities:

1. Project architecture
2. Design tokens
3. Global styles
4. Shared navigation/footer
5. Home page
6. Responsive Home
7. Legend Hub
8. Comic Reader
9. Film
10. Graphics
11. Apparel
12. Cards

Do not build all pages in the first pass.

## 24. First Implementation Milestone

For the first coding pass, do only the following:

1. Scaffold the React + Vite app.
2. Initialize project structure.
3. Create `PROJECT_BRIEF.md` containing the complete specification, cleaned into readable documentation.
4. Create `README.md` with:
   - Project overview
   - Setup instructions
   - Scripts
   - Project structure
   - Current milestone
5. Create:
   - `tokens.css`
   - `reset.css`
   - `global.css`
6. Configure React Router.
7. Create placeholder routes for all V1 pages.
8. Create functional:
   - `SiteHeader`
   - `SiteFooter`
   - Basic `Layout`
9. Build a simple Home-page skeleton using placeholder content blocks.
10. Make the skeleton responsive.
11. Do not fully art-direct the homepage yet.
12. Do not add invented assets.
13. Do not add fake history.

After completing this milestone:

- Stop.
- Run `npm install`.
- Run `npm run build`.
- Fix any errors.

Then report:

- What was created
- Final project tree
- Important architecture decisions
- Any assumptions
- Any missing assets/content needed
- Exact files recommended for the next work session

Do not proceed into detailed visual implementation until the foundation is approved.

## 25. Engineering Style

Write code that is:

- Clear
- Readable
- Beginner-friendly
- Well organized
- Minimally clever
- Easy to edit manually
- Componentized only where useful

Prefer:

- Simple over abstract
- Explicit over magical
- Maintainable over impressive

Avoid:

- Huge components
- Unexplained abstractions
- Giant dependency lists
- Unnecessary hooks
- Premature optimization
- Complicated state management
- Generated filler text

Use comments only when they genuinely explain something non-obvious.

## 26. Final Instruction

Treat `PROJECT_BRIEF.md` as the project's canonical product, design, and content specification.

If a future coding instruction conflicts with `PROJECT_BRIEF.md`:

- Flag the conflict.
- Follow the newer explicit instruction only after making the change clear.

Do not silently change established product rules.
