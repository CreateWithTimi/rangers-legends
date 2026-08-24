# Rangers Legends V1 QA Report

## Executive Summary

Overall readiness: controlled-demo ready, not yet public-launch ready.

The core V1 product is coherent and impressive: Home, Legend Hub, Comic Reader, Film, Graphics, Apparel, and Cards form a complete Legend 001 journey. The code builds successfully, the major routes are wired, and the interactions for the Comic Reader, Graphics viewer, and Cards inspector are implemented with sensible local state and keyboard support.

The main blockers before serious public or stakeholder sharing are not feature gaps. They are release hygiene, IP/content safety, asset cleanup, performance, and shareability. Most visible artwork is still marked `NEEDS CLEANUP` and contains concept-art issues such as crest-like marks, embedded generated typography, historical-looking copy, and product/spec-like details inside images. The footer disclaimer helps, but for Rangers-related stakeholders or IP collaborators, asset cleanup remains the highest-risk area.

Build result: PASS. `npm run build` completed successfully with 78 modules transformed.

## Route Audit

| Route | Status | Component | Notes |
| --- | --- | --- | --- |
| `/` | PASS | `Home` | Approved Home V1 route resolves. |
| `/legends` | WARNING | `Legends` | Resolves, but remains a simple directory page and is visually much lighter than the approved V1 experiences. Acceptable for V1, but should be improved before serious stakeholder sharing because many CTAs point here. |
| `/legends/christian-chukwu` | PASS | `LegendHub` | Approved Legend 001 Hub route resolves. |
| `/legends/christian-chukwu/story` | PASS | `ComicReader` | Approved Comic Reader route resolves and uses the 8 comic pages. |
| `/legends/christian-chukwu/film` | PASS | `Film` | Approved Coming Soon Film route resolves. |
| `/legends/christian-chukwu/graphics` | PASS | `Graphics` | Approved Graphics Gallery route resolves. |
| `/legends/christian-chukwu/apparel` | PASS | `Apparel` | Approved Apparel Lookbook route resolves. |
| `/legends/christian-chukwu/cards` | PASS | `Cards` | Approved Cards Collector Archive route resolves. |
| Unknown routes | PASS | `NotFound` | `*` route renders a 404 page and links back Home. |

Route architecture note: direct browser navigation depends on static hosting being configured to serve `index.html` for nested routes. The React route table is correct, but deployment fallback should be confirmed before public sharing.

## Navigation Audit

Header and footer links are technically valid. No broken internal links were found by source inspection.

| Area | Status | Finding |
| --- | --- | --- |
| Header logo | PASS | Links to `/`. |
| Header Home | PASS | Links to `/`. |
| Header Legends | PASS | Links to `/legends`. |
| Header Stories | WARNING | Links directly to Legend 001 Comic Reader. This works, but reads like a platform-wide route. |
| Header Films | WARNING | Links directly to Legend 001 Film page. Same platform-wide/deep-link ambiguity. |
| Header Graphics | WARNING | Links directly to Legend 001 Graphics page. |
| Header Apparel | WARNING | Links directly to Legend 001 Apparel page. |
| Header Cards | WARNING | Links directly to Legend 001 Cards page. |
| Footer nav | WARNING | Same deep-link pattern as header. Works, but may confuse users once more legends exist. |
| Home CTAs | PASS | Route to `/legends`, Legend 001 Hub, and Legend 001 media pages. |
| Legend Hub archive nav | PASS | Uses in-page anchors for Overview, Story, Film, Graphics, Apparel, Cards. |
| Legend Hub CTAs | PASS | Link to existing Legend 001 media routes. |
| Graphics CTA | PASS | Links to Apparel. |
| Apparel CTA | PASS | Links to Cards. |
| Cards completion links | PASS | Link to Story, Film, Graphics, Apparel, Cards, Legend Hub, and Legends. |

Broken route/link count: 0 confirmed by source inspection.

Navigation UX warnings:
- Top-level media navigation currently means "Legend 001 media", not platform-wide media libraries.
- `/legends` is structurally correct but visually underpowered compared with the completed pages it introduces.

## Content / Historical Integrity

HTML/site-data historical claims are mostly aligned with the user-approved facts from prior milestones.

Verified/established public-facing facts currently used:
- Christian Chukwu was a Rangers International F.C. player and captain.
- He captained Rangers to victory in the 1977 African Cup Winners' Cup.
- He later captained Nigeria's Green Eagles to Nigeria's first Africa Cup of Nations title in 1980.
- After playing, he moved into coaching and later coached Rangers, Kenya, and Nigeria.
- He led Nigeria to third place at the 2004 Africa Cup of Nations.
- No. 5, Legend 001, Chairman, and Captain. Leader. Ranger. are established project content.

Project positioning copy currently used:
- "The stories behind the shirt."
- "An evolving archive..."
- "History, drawn again."
- "Watch the legend."
- "Wear the history."
- "Collect the legacy/story."
- "From story to symbol."
- "History, in your hands."

Warnings:
- `christian-chukwu.js` uses film/story beat labels such as `1975 - The Wound`, `1977 - The Moment`, and `1977 - The Glory`. These were approved as narrative framing in previous page milestones, but they should remain project/story language, not expanded into factual claims without source verification.
- Embedded artwork text contains dates, crest-like marks, generated headlines, and product/spec-like details. These must not be treated as verified site copy.
- No fake prices, buying flows, inventory, ratings, rarity, ownership, or commerce language was found in HTML.

## Official Partnership Risk

Risk level: Medium for broad public/stakeholder sharing. Low to medium for controlled concept demo.

Mitigating factors:
- Footer explicitly states: "Concept storytelling archive."
- Footer explicitly states no official endorsement, licensing, partnership, or merchandise availability is implied.
- No Buy Now, Add to Cart, fake inventory, or official partnership copy was found in HTML.

Remaining risks:
- Many visible concept artworks include crest-like marks and official-looking embedded typography.
- Apparel and cards are visually persuasive enough that users may infer real merchandise or physical collectibles even though the HTML avoids commerce.
- The project name and Rangers subject matter can be misread as official unless the context around the demo is clear.

Recommendation: keep the current footer disclaimer, but before serious stakeholder/public sharing, prioritize cleaned artwork and consider a lightweight, tasteful concept-status note near first entry points if legal/brand risk remains.

## Asset Status

All production-visible Legend 001 media in `ASSET_MANIFEST.md` is marked `NEEDS CLEANUP`. No visible media should be treated as fully rights-clean/public-final yet.

| Asset family | Current status | Used visibly | Notes |
| --- | --- | --- | --- |
| Hero/Chairman graphics | NEEDS CLEANUP | Yes | Used across Home, Legend Hub, Film legacy, and Graphics. Contains crest-like/generated elements. |
| Comic pages 01-08 | NEEDS CLEANUP | Yes | Used by Comic Reader and previews. Embedded comic text should remain artwork only. |
| Film key art | NEEDS CLEANUP | Yes | Reuses `cover-chairman-penalty-home.png`; passive key art only. |
| Graphics 01-03 | NEEDS CLEANUP | Yes | Strong visual set, but not rights-clean/fact-clean. |
| TEE 01-03 | NEEDS CLEANUP | Yes | Optimized derivatives used. Source boards contain product/spec-like text and crest-like marks. |
| Card fronts/backs C01-C05 | NEEDS CLEANUP | Yes | Split assets used in Cards and card previews. Embedded copy and marks remain concept debt. |
| Collection hero | NEEDS CLEANUP | Yes | Used on Home. Contains product visuals and embedded text. |
| Placeholder media | INTENTIONAL | Yes | Film Coming Soon and future legends are intentional public states. |

Manifest mismatch:
- `ASSET_MANIFEST.md` says the split card front/back files are used on the Cards Collector Archive, but `christian-chukwu.js` makes those card fronts the canonical `cards` data, which means Home and Legend Hub card previews also use them.
- Optimized card derivatives in `src/assets/legends/christian-chukwu/optimized/cards/` are present but currently marked "Source only" and not used by data.

## Asset Cleanup Debt

| Page | File | Problem | Visibility | Public-launch risk | Recommended action | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Home, Legend Hub, Film, Graphics | `optimized/graphics/graphic-chairman-01-home.png` | Crest-like/generated marks and embedded typography. | High | Visitors may infer official crest/approved imagery. | Clean or replace with rights-safe Chairman artwork. | P1 |
| Comic Reader | `comic/comic-page-01.png` | Embedded generated text/history-style copy. | High | Story may be read as factual archive. | Clean comic lettering/facts or label as concept comic in demo context. | P1 |
| Comic Reader | `comic/comic-page-02.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Comic Reader | `comic/comic-page-03.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Comic Reader | `comic/comic-page-04.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Comic Reader | `comic/comic-page-05.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Comic Reader | `comic/comic-page-06.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Comic Reader | `comic/comic-page-07.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Comic Reader | `comic/comic-page-08.png` | Embedded generated text/history-style copy. | High | Same as above. | Clean/verify before public launch. | P1 |
| Film, Home Story | `optimized/story/cover-chairman-penalty-home.png` | Film-like/campaign artwork with embedded generated elements. | High | Could imply final film/trailer media if not contextualized. | Keep Coming Soon text clear; replace when real film art exists. | P2 |
| Graphics | `optimized/graphics/graphic-kaduna-02-hub.png` | Embedded historical-looking text and generated marks. | Medium | May be read as factual poster/archive. | Clean or verify graphic text. | P1 |
| Graphics | `optimized/story/graphic-champions-03-home.png` | Embedded historical-looking text and generated marks. | Medium | May be read as factual poster/archive. | Clean or verify graphic text. | P1 |
| Apparel | `optimized/apparel/tee-01-home.png` | Source-board specs/product details and crest-like marks. | High | Could imply real merch specs/availability. | Clean mockup or crop/use render without spec text. | P1 |
| Apparel | `optimized/apparel/tee-02-home.png` | Source-board specs/product details and crest-like marks. | High | Same as above. | Clean mockup or crop/use render without spec text. | P1 |
| Apparel | `optimized/apparel/tee-03-home.png` | Source-board specs/product details and crest-like marks. | High | Same as above. | Clean mockup or crop/use render without spec text. | P1 |
| Cards | `cards/C01 - THE LEGEND-FRONT/BACK.png` equivalent supplied files | Crest-like marks, generated typography, embedded story copy. | High | Could be mistaken for official/physical cards. | Clean artwork and verify back copy. | P1 |
| Cards | `cards/C02 - THE MOMENT-FRONT/BACK.png` equivalent supplied files | Crest-like marks, generated typography, embedded story copy. | High | Same as above. | Clean artwork and verify back copy. | P1 |
| Cards | `cards/C03 - THE GLORY-FRONT/BACK.png` equivalent supplied files | Crest-like marks, generated typography, embedded story copy. | High | Same as above. | Clean artwork and verify back copy. | P1 |
| Cards | `cards/C04 - THE CAPTAIN-FRONT/BACK.png` equivalent supplied files | Crest-like marks, generated typography, embedded story copy. | High | Same as above. | Clean artwork and verify back copy. | P1 |
| Cards | `cards/C05 - THE LEGACY-FRONT/BACK.png` equivalent supplied files | Crest-like marks, generated typography, embedded story copy. | High | Same as above. | Clean artwork and verify back copy. | P1 |
| Home Collection | `optimized/collection/collection-hero-main-home.png` | Collection/product visuals and embedded text. | Medium | Could imply merchandise/card availability. | Keep no-commerce UI; clean if public launch. | P2 |

## Placeholder Audit

| Placeholder/state | Status | Decision |
| --- | --- | --- |
| Film Coming Soon | PASS | Intentional public state for V1. |
| Future Legend 002 | PASS | Intentional public state. Do not invent identity. |
| Future Legend 003 | PASS | Intentional public state. Do not invent identity. |
| `/legends` simple directory | WARNING | Acceptable for V1, but should be improved before serious sharing. |
| `PlaceholderBlock.jsx` | WARNING | Unused component; code health cleanup candidate. |
| `MediaPlaceholder` component | PASS | Still useful as a safe image wrapper/fallback pattern on Home. |

## Responsive Audit

Code-level responsive review was completed for the major CSS files. A full rendered device pass should still be run before public sharing.

Strengths:
- Each major experience has page-specific breakpoints.
- Comic Reader disables spread mode at compact widths.
- Cards, Film, Home, and Legend Hub use horizontal scroll intentionally for dense media strips on smaller screens.
- Most images use `max-width: 100%`, `object-fit`, and responsive grids.

Warnings:
- Film still uses large viewport-based hero sizing: `min-height: clamp(620px, 82svh, 860px)` and other large section min-heights. This was approved visually, but it is the most likely page to require final mobile QA.
- Home and Film contain several large `min-height` values. These may be intentional art direction, but they should be tested on short laptop screens.
- Header navigation wraps rather than becoming a dedicated mobile menu. It remains simple and accessible, but can feel dense at small widths.
- Several horizontal media strips rely on `overflow-x: auto`; they should be checked for visible affordance and touch comfort.
- Cards and Comic Reader use large media; mobile should be checked for no horizontal overflow after deployment.

## Design System Consistency

PASS overall.

The product now has a coherent identity: near-black surfaces, archive cream, red emphasis, muted gold dividers, condensed display type, serif accents, thin rules, and editorial spacing. The pages intentionally have different personalities:
- Home: platform magazine cover.
- Legend Hub: dedicated archive room.
- Comic Reader: quiet reading tool.
- Film: cinematic Coming Soon room.
- Graphics: digital exhibition.
- Apparel: heritage lookbook.
- Cards: collector archive.

Warnings:
- The simple `/legends` and `404` pages use the generic global page style and feel much less finished than the V1 experiences.
- Top-level page title management is inconsistent. Home, Legends, and NotFound rely on the base document title; completed medium pages set `document.title`.

## Interaction Audit

Comic Reader:
- PASS: Single-page mode.
- PASS: Spread mode with compact-width disable.
- PASS: Previous/Next disabled states.
- PASS: Keyboard Left/Right, with editable-target guard.
- PASS: Fullscreen shown only when supported.
- PASS: Image load error state.
- WARNING: `requestFullscreen()` / `exitFullscreen()` promise errors are not caught. Low risk, but worth hardening later.

Graphics:
- PASS: Artwork viewer uses real state, not fake fullscreen/downloads.
- PASS: Escape closes modal.
- PASS: Arrow keys move previous/next.
- PASS: Backdrop click closes modal.
- PASS: Focus returns to trigger.
- WARNING: There is no full focus trap inside the dialog. Current focus behavior is decent for V1, but a focus trap would be stronger for accessibility.

Cards:
- PASS: C01-C05 selector updates focused card.
- PASS: Switching card resets to front.
- PASS: Click/tap card flips.
- PASS: Explicit View Back/View Front button exists.
- PASS: Previous/Next disabled states.
- PASS: Keyboard Left/Right, with editable-target guard.
- PASS: Reduced motion CSS exists.
- WARNING: `aria-current="true"` works but `aria-current="step"` or `aria-pressed` may communicate the selector state more clearly.

## Accessibility

Overall: PASS with warnings.

Strengths:
- Semantic `main`, `section`, headings, nav, links, and buttons are widely used.
- Skip link exists.
- Visible focus ring exists globally.
- Buttons are used for interactive controls; links are used for route navigation.
- Comic and Cards have keyboard controls.
- Graphics viewer has dialog semantics and focus return.
- Reduced motion support exists globally and page-specific where needed.
- Most meaningful images have alt text.

Warnings:
- Film images are marked decorative with empty alt text. This is acceptable if the HTML copy carries the meaning, but the hero visual is central enough that a future pass may add meaningful alt text without duplicating artwork text.
- Graphics dialog lacks a complete focus trap.
- Header mobile navigation may be dense for touch users.
- Embedded text inside images is not accessible. This is acceptable only because essential UI copy is recreated in HTML.

## Performance

Build passed, but media weight is the biggest technical risk.

Production build output:
- JS: `281.70 kB`, gzip `83.96 kB`.
- CSS: `57.51 kB`, gzip `9.83 kB`.
- Built asset folder: about `61M`.
- Source asset folder: about `137M`.

Largest emitted assets:
- Comic pages: about `3.7M` to `4.0M` each.
- Collection hero: about `2.87M`.
- Chairman graphic: about `2.34M`.
- TEE 01 optimized: about `2.01M`.
- Card fronts/backs: about `1.4M` to `1.93M` each.

Warnings:
- `christian-chukwu.js` imports all major Legend 001 media into one shared data module. Vite emits the assets, and routes only request images when rendered, but the data module is now broad and centralized.
- Home and Legend Hub card previews use the large split card fronts through canonical `cards` data. The smaller optimized card preview derivatives exist but are not used.
- No responsive image `srcset` / sizes strategy exists yet.
- No AVIF/WebP derivatives for the largest PNGs yet.
- Comic Reader correctly lazy-loads later pages, but individual page PNGs are still large.

## Code Health

PASS overall with cleanup warnings.

Findings:
- No `console.log`, `TODO`, or `FIXME` patterns were found in source.
- `npm run build` passes.
- `.DS_Store` files exist throughout `src` and asset folders. They appear ignored/untracked, but should be removed from the workspace before packaging or archiving.
- `README.md` is stale and still describes the project as the first scaffold/foundation milestone with placeholder routes. This is public-demo misleading.
- `PlaceholderBlock.jsx` appears unused.
- Some CSS has accumulated large page-specific rules. This is acceptable for V1 because the pages are deliberately distinct, but future cleanup should remove obsolete leftovers only after visual approval.

## SEO / Shareability

Current state:
- `index.html` has a meaningful base title.
- `index.html` has a base meta description.
- Several completed pages set `document.title` in `useEffect`.

Missing or incomplete:
- No Open Graph tags.
- No Twitter/social preview tags.
- No favicon/app icon observed in `index.html`.
- No per-route meta description system.
- No canonical URL handling.
- Home, Legends, and NotFound do not set route-specific document titles.

Recommendation: before public sharing, add basic share metadata and a public-safe preview image. Avoid implying official Rangers endorsement in metadata.

## Error Handling

Strengths:
- Unknown routes render `NotFound`.
- Comic Reader has an empty-data state and image-specific load error messages.
- Graphics modal closes cleanly and restores body scroll.
- Cards handles first/last disabled states.

Warnings:
- There is no app-level error boundary.
- Most non-comic images do not have visible image-load fallbacks.
- Bad legend slugs are not supported because routes are static, which is acceptable for V1.
- Direct nested routes need deployment fallback confirmation.

## Product Coherence

PASS.

The product journey is clear:

Home -> Legend 001 -> Read -> Watch -> See -> Wear -> Collect

Observations:
- Home explains Rangers Legends as a platform.
- Legend Hub gives Christian Chukwu a dedicated archive room.
- Comic Reader shifts into a true reading tool.
- Film is an intentional Coming Soon room rather than a fake player.
- Graphics, Apparel, and Cards each translate the same Legend 001 story into a different medium.
- Cards successfully feels like the current completion point.
- Future Legend 002/003 states make the platform scalable without inventing players.

Warnings:
- The architecture is data-aware, but still route-hardcoded around Christian Chukwu. This is fine for V1; Legend 002 should trigger a dynamic route/data-loading milestone.
- The `/legends` page is the weakest link in the product journey because it is still much simpler than the rest of the site.

## CreateWithTimi Demo Readiness

Assessment: strong controlled demo, especially when presented as a case study rather than an official public product.

The current experience demonstrates:
- Storytelling and world-building.
- Multi-format IP architecture.
- AI-assisted visual storytelling.
- Comic publishing UX.
- Cinematic extension planning.
- Apparel/lookbook extension.
- Collectible card interaction.
- Historical/cultural archive thinking.
- Scalable legend architecture.
- Interactive web design across media types.

What would make it more convincing without changing Rangers Legends itself:
- A short external case-study wrapper or presentation context.
- Clean demo-safe social preview metadata.
- A rights/content status note for concept artwork when sharing with stakeholders.
- A targeted performance pass so the first public load feels polished.

## Priority Matrix

### P0 - MUST FIX BEFORE ANY PUBLIC DEMO

Count: 0.

No build-breaking, route-breaking, or feature-breaking issue was found that blocks a controlled public demo.

### P1 - FIX BEFORE SERIOUS STAKEHOLDER SHARING

Count: 8.

1. Clean or replace visible artwork with crest-like/generated marks before Rangers-related or IP-sensitive stakeholder sharing.
2. Verify or clean embedded artwork text that looks historical, official, or archival.
3. Remove or neutralize apparel/card artwork details that can imply real merchandise specs or physical availability.
4. Update stale `README.md` so the repository accurately describes V1, not Milestone 01 scaffolding.
5. Add basic SEO/social preview metadata that does not imply official endorsement.
6. Confirm deployment fallback for nested React Router URLs.
7. Improve `/legends` enough that "Explore the Legends" and "Explore All Legends" do not feel like a downgrade from the approved pages.
8. Correct asset manifest/data usage mismatch for card previews and decide whether Home/Hub should use optimized card derivatives.

### P2 - ACCEPTABLE V1 DEBT

Count: 12.

1. Film remains Coming Soon.
2. Legend 002 and Legend 003 remain Coming Soon.
3. Top-level media nav deep-links to Legend 001 media pages.
4. Header wraps on mobile instead of using a dedicated mobile menu.
5. Large PNG payloads remain, especially comic/card media.
6. No `srcset`/responsive-image strategy yet.
7. Graphics modal has no full focus trap.
8. Fullscreen promise errors in Comic Reader are not caught.
9. Most non-comic images do not show visible load-failure fallback UI.
10. `.DS_Store` files are present in `src` and asset folders.
11. Unused `PlaceholderBlock.jsx` remains.
12. Route-specific titles/meta are incomplete on simple pages.

### P3 - FUTURE ENHANCEMENT

Count: 7.

1. Dynamic legend routes and data loading for Legend 002+.
2. Platform-level Stories/Films/Graphics/Apparel/Cards index pages.
3. WebP/AVIF responsive asset pipeline.
4. Route-level code splitting.
5. App-level error boundary.
6. More robust modal focus management utility.
7. Case-study/demo wrapper for CreateWithTimi prospects.

## Recommended Fix Sequence

### Milestone 11.1 - Public Demo Integrity Pass

- Update README.
- Confirm route fallback/deployment behavior.
- Improve `/legends` minimally.
- Review top-level nav copy/targets without redesigning the full nav.
- Add or refine concept/official-status language only if needed.

### Milestone 11.2 - Asset Risk and Manifest Cleanup

- Audit visible artwork with human review.
- Identify must-clean crest-like/generated marks.
- Decide which assets can remain concept-only for controlled demo.
- Fix manifest/data mismatches, especially card preview usage.

### Milestone 11.3 - Performance and Media Pass

- Use optimized card previews where appropriate.
- Create non-destructive WebP/AVIF derivatives for largest PNGs.
- Add responsive image handling for heavy pages.
- Keep comic readability as the quality floor.

### Milestone 11.4 - Accessibility and Resilience Pass

- Add focus trap to Graphics viewer if desired.
- Catch fullscreen promise errors.
- Add graceful image fallback patterns for key non-comic media.
- Run rendered keyboard/mobile QA.

### Milestone 11.5 - SEO and Shareability Pass

- Add favicon/app icons.
- Add Open Graph/Twitter tags.
- Set route-aware titles/descriptions.
- Prepare public-safe social preview image and description.

## Milestone 11.1 Resolution

README - RESOLVED.

- Rewritten to describe the current V1 concept/demo state.
- Documents Legend 001 experiences, tech stack, local development, structure, content/asset status, and client-side route fallback requirements.
- Explicitly avoids official Rangers International F.C. product, licensed merchandise, official archive, or partnership claims.

Deployment fallback - BLOCKED PENDING HOST.

- No deployment-provider configuration was found in the repository.
- No provider-specific fallback file was added because no hosting target is established.
- README now documents the SPA fallback requirement: the selected host must serve `dist/index.html` for nested React Router routes.

Legends directory - RESOLVED.

- `/legends` now functions as a more substantial Living Archive Directory.
- Legend 001 is presented as the active archive entry with approved project data and existing supplied artwork.
- Legend 002 and Legend 003 remain quiet Coming Soon states with no invented identities.

Concept-status risk - CURRENT STATE ACCEPTABLE FOR CONTROLLED DEMO.

- Footer concept/archive and non-endorsement language is preserved.
- The Legends Directory now describes Rangers Legends as a growing concept archive in restrained product copy.
- No large legal disclaimer or disruptive "unofficial/fan site" treatment was added.

Navigation - INTENTIONALLY MOSTLY UNCHANGED.

- Header/footer destination targets remain the existing V1 routes.
- Top-level Stories, Films, Graphics, Apparel, and Cards still deep-link to Legend 001 experiences because Christian Chukwu is the only completed V1 legend.
- Mobile navigation was upgraded from wrapping links to a real hamburger menu with Escape, close-button, and link-selection dismissal.

Legend Hub archive navigation - RESOLVED.

- Existing Overview, Story, Film, Graphics, Apparel, and Cards archive navigation now scrolls smoothly to sections.
- Active section state is indicated with IntersectionObserver.
- Small-screen behavior remains horizontal/compact rather than becoming a dense second navbar.
