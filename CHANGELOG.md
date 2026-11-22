# Changelog

All notable changes to the JOY Dim Sum website are documented here.

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.2] - 2026-11-22

GA4 tracking restored after it went quiet from 11 Nov.

### Fixed

- **Google Analytics is back.** The direct GA4 tag (`G-N644GDSP1K`, property
  550830226) is back in the page head on every route. It was removed on
  10 Nov when tracking moved to Google Tag Manager, but no GA4 tag was ever
  published in the GTM container, so Analytics recorded zero visitors.
- **Conversion events** (`whatsapp_click`, `get_directions_click`,
  `menu_page_view`, `careers_apply_click`) are sent straight to GA4 again via
  `gtag`, instead of into the GTM data layer.

### Notes

- The GTM container (`GTM-W9XQJS82`) stays installed for other tags. Do not add
  a GA4 tag inside it, or every visit is counted twice.
- Data from 11 Nov until this deploy is not recoverable in GA4.

## [1.6.1] - 2026-11-16

A visual QA pass on the careers page so it matches the rest of the site.

### Changed

- **Section pattern rhythm.** The careers sections now alternate pattern and
  plain: green hero (pattern), open roles (plain cream), perks (pink pattern),
  how to apply (plain yellow). The roles section's custom grid lines are gone.
- **Station bento.** Food photo and table graphics removed. Every room uses one
  corner radius, nested inside the board's radius, with a Google Material
  Symbols icon in the top-right corner (skillet, cooking, local cafe, room
  service). Hover now turns the role tag green instead of tinting the room.
- **Ticks** are the Material Symbols rounded check with no circle border.
- **What you get / Who we're looking for** are two separate cards side by side
  (stacked on phones).
- **Scroll reveal.** Sections, role cards and both perk cards fade up once as
  they enter view, using the same reveal as the landing page. No looping;
  reduced-motion users see everything straight away.
- Role cards, section padding and heading sizes now use the same radius, drop
  shadow and spacing as the other pages, and the roles heading gets the shared
  kicker label. Off-palette tints were replaced with brand cream.

## [1.6.0] - 2026-11-16

This release adds a careers page for the Kiara Bay outlet, linked from the
navigation and footer, with the full page available in English, Chinese and
Malay.

### Added

- **Careers page at `/careers/`.** Lists the three open roles: kitchen crew
  (dim sum counter and hot kitchen), service crew (front of house) and barista
  (beverage counter), with tasks, pay and an apply button for each.
- **Station plan in the hero.** A top-down sketch of the outlet's four
  stations; each one links to the role that works there.
- **Full-time / Part-time toggle.** Kitchen crew RM2,000 – RM3,500 a month
  (full-time only for now); service crew and barista from RM2,000 a month
  full-time or RM10 – RM12 an hour part-time.
- **EN / 中文 / BM language switch.** The choice is remembered and written to
  `?lang=` so a shared link opens in the same language.
- **Apply on WhatsApp** to Sherene or Cammy with a prefilled message in the
  chosen language, or by email to hello.joydimsum@gmail.com.
- **`careers_apply_click` data-layer event** on every apply link. GTM needs a
  matching Custom Event trigger before it reaches GA4.
- Metadata, breadcrumbs structured data and sitemap entry for `/careers/`.

### Changed

- **Careers link in the primary nav with a pink Hiring badge** (a pink dot
  between 821px and 1040px, where the bar is tight), in the mobile menu, and in
  the footer's Explore list with a "We're hiring" tag.
- Nav links and the Find Location button no longer wrap onto two lines at
  tablet widths.

## [1.5.2] - 2026-08-27

This release adds a dedicated, responsive full-menu viewer, refreshes the Loh
Mai Kai photography everywhere it is used, and connects the two full-menu calls
to action directly to the new experience.

### Added

- **Dedicated full-menu viewer at `/full-menu/`.** Seven menu files are
  presented in order as a cover, five two-page spreads and a back cover.
- **Previous and Next spread navigation** with matching JOY yellow button
  animation, keyboard arrow support, touch swiping, accessible labels and a
  live spread counter.
- **Indexable metadata, structured-data breadcrumbs and sitemap coverage** for
  the new full-menu route.
- **Optimized WebP menu artwork.** The uploaded high-resolution JPG menu files
  were converted with ImageMagick and adjacent spreads are preloaded for faster
  page turns.

### Changed

- **Only the two annotated View Full Menu buttons**—on the landing-page menu
  section and menu highlights hero—now open `/full-menu/`. Both controls use the
  yellow JOY treatment and retain the existing hover and press motion.
- **Menu-page hero actions were reordered.** View Full Menu is now the primary
  action, while Browse Highlights scrolls to the curated menu cards.
- **The full-menu artwork is displayed without a surrounding card frame** on
  every device, with Previous and Next controls aligned below the image.
- **Loh Mai Kai imagery was replaced globally** across the source PNG, SEO PNG
  and transparent WebP variants while retaining the existing 1144x1051 canvas.

## [1.5.1] - 2026-08-21

A quality pass over the 1.5.0 release. The hero food panels now spin only on
hover, the outlet overview links straight through to each outlet page, and a
second-layer QA review cleared a batch of responsive, accessibility and image
defects.

### Changed

- **Hero food panels rotate on hover only.** The baskets no longer spin as the
  page appears, and the hover rotation slowed from 3.8s to 7s for a full turn.
  The rotation is CSS-driven, so `prefers-reduced-motion` suppresses it.
- **Outlet overview cards link to the outlet pages.** On `/locations/` both
  cards now read **View Location** with a map-pin icon and open the matching
  outlet page. Landing-page cards keep **Get Directions** and continue to open
  Google Maps in a new tab.
- **Kiara Bay opening headline breaks onto two lines**, so "Opening in" reads as
  the label and the countdown as the value instead of wrapping mid-figure.
- **Reviews autoplay now stops when the carousel leaves the viewport.** Its
  in-view gate was latching after the first pass, so the carousel kept
  advancing for the rest of the session. Pause on hover, touch and focus is
  unchanged.

### Fixed

- **Sideways scroll at a 320px viewport.** `body` carried `min-width: 320px`,
  but a classic scrollbar leaves 305px of content width, so every route scrolled
  15px horizontally. This is the width WCAG 2.2 reflow is measured at, and the
  width a 1280px desktop reports at 400% zoom. Nothing overflows without it.
- **Kiara Bay outlet photo declared the wrong dimensions.** The image is
  1080x1920, but it was marked up as 1920x1080, so the browser reserved a
  landscape box for a portrait file. The rendered result is unchanged.
- **The landing page had no `main` landmark**, the only route without one. It
  now matches the menu, outlet and FAQ pages, restoring landmark navigation and
  skip-to-content.
- **The Kiara Bay countdown announced itself every minute.** The `aria-live`
  region re-read "Opening in 25d 14h 0m" on each tick, twice over on pages that
  show two cards. The exact opening date sits in the same card.
- **Menu carousel controls were unlabelled in assistive technology.** The
  `aria-label` sat on a plain `div`, which exposes no role for it to name.
- **Two low-contrast text styles.** The footer copyright line (4.11:1) and the
  review call-to-action subtitle (3.03:1) now clear WCAG AA at 4.95:1 and
  4.72:1, using the same colours at higher opacity.

## [1.5.0] - 2026-08-20

This release expands JOY Dim Sum into a fully prerendered multipage website,
refreshes the food and outlet imagery, and completes the latest responsive,
navigation, accessibility and local-discovery refinements.

### Added

- **Dedicated indexable pages** for the full menu and outlet details,
  Kiara Bay in Kepong, and 15 frequently asked questions.
- **Route-specific SEO metadata, canonical URLs, structured data, breadcrumbs,
  and sitemap entries** for the new pages.
- **Outlet photography** plus refreshed transparent
  WebP product imagery for Chicken Siew Mai, Otak-otak Dumpling, Scallop
  Dumpling, Shanghai Dumpling, Siew Long Pau and Dragonfruit Dumpling.
- **Internal outlet discovery links** from the landing-page cards and outlet
  overview, while keeping direct map actions where appropriate.

### Changed

- **Landing-page navigation and section CTAs** now use the shorter Story,
  Outlets and News labels consistently across desktop, mobile and footer menus.
- **Hero food panels** use centred, responsive basket imagery with deliberate
  in-place rotation on appearance and hover.
- **Menu cards and copy** now reflect the revised JOY dishes and image set.
- **Outlet, FAQ, campaign, review and maintenance layouts** received responsive
  spacing, alignment, interaction and pattern refinements across desktop,
  tablet and mobile.

### Fixed

- **See what is steaming now scrolls directly to the landing-page menu.**
- **View Full Menu now opens the dedicated menu page** instead of presenting
  a disabled coming-soon control.
- **Review cards no longer clip at carousel edges**, and mobile menu, news and
  maintenance interactions no longer create excess whitespace or block normal
  page scrolling.
- **FAQ, social, map and navigation interactions** now have consistent press,
  underline, hover and keyboard behaviour.
- **Maintenance favicon and responsive media handling** now use stable public
  asset paths.

## [1.4.0] - 2026-08-20

The landing page is the live, indexable site. Kiara Bay's target opening moves to
16 September 2026, fonts ship as `woff2`, and this release clears a batch of
accessibility, SEO and mobile-interaction issues.

### Added

- **Custom 404 page** (`public/404.html`) in JOY brand colours, marked
  `noindex, follow`, with a link back to the landing page.
- **`robots.txt` and `sitemap.xml` are now generated at build time** by
  `scripts/prerender.mjs`, driven by the same `MAINTENANCE_MODE` flag as the
  robots meta tag. Maintenance builds emit `Disallow: /`; live builds emit
  `Allow: /` plus the sitemap reference. Sitemap `lastmod` tracks the build date
  instead of a hardcoded value.
- **`<noscript>` fallback styles** in `index.html`. The prerender bakes
  framer-motion's initial `opacity: 0` and transform values into the HTML, so
  the page rendered effectively blank without JavaScript. Scripted visitors are
  unaffected.
- **`?preview=maintenance`** now forces the maintenance page, alongside the
  existing `?preview=landing`. Either page can be reviewed regardless of how
  `MAINTENANCE_MODE` is set.
- **Shared `KiaraBayCountdown` and social icon modules** (`src/lib/kiaraBay.tsx`,
  `src/lib/SocialIcons.tsx`), replacing copies duplicated across `Locations`,
  `MaintenancePage` and `Footer`.
- **`PORT` support for the dev server** in `vite.config.ts`. Vite does not read
  `PORT` on its own, so a launcher-assigned port was previously ignored. Builds
  are unaffected.

### Changed

- **Kiara Bay target opening date moved from 15 to 16 September 2026**, updated
  across the FAQ copy, the Locations and Footer cards, the maintenance page and
  both `Restaurant` and `FAQPage` JSON-LD blocks. The date now has a single
  source of truth in `KIARA_BAY_OPENING_LABEL`.
- **Fonts converted from `.ttf` to `.woff2`** (SN Pro variable, Cal Sans Text UI
  Regular/Medium/SemiBold/Bold) for substantially smaller font payloads.
- **Dropped the unused Sarina display face** and the unused Cal Sans Text UI
  italic face, along with the `--font-accent` token.
- **Full-bleed sections now measure from `100%` instead of `100vw`**, so a
  classic scrollbar no longer shifts them out of alignment with the section
  shell.

### Fixed

- **Hero `<h1>` no longer scoped to the small kicker.** The keyword line and the
  "FULL BITE OF JOY" headline are now wrapped in a single `<h1>`, so the page's
  main heading reflects the actual headline. Styling moved to the inner elements,
  so nothing shifts visually.
- **Anchor jumps landed under the fixed nav.** Section targets now carry
  `scroll-margin-top: 104px`, clearing the measured nav bottom (95px desktop,
  86px mobile).
- **`prefers-reduced-motion` was not fully honoured.** Several sections passed
  `initial={false}` or omitted the check entirely, which left elements stuck at
  `opacity: 0` in prerendered HTML. Reduced-motion users now get explicit
  visible initial states across Hero, Navigation, About, FAQ, Menu, Instagram,
  Reviews, `SectionReveal` and the maintenance page.
- **Collapsed FAQ answers were still reachable** by keyboard and screen readers.
  They now carry `inert` alongside `aria-hidden`.
- **Reviews carousel fought manual swipes.** Autoplay now derives its position
  from the scroller's actual `scrollLeft` rather than a stale counter, pauses on
  touch, and waits 4s after a flick before resuming. The resume timer is cleared
  on unmount.
- **Non-semantic scroll regions.** The menu track, menu ticker and reviews
  scroller used `<div aria-label>`, which exposes no role; each is now a
  `<section>` so the label is announced.
- **Touch targets below the WCAG 2.5.8 24x24 minimum.** Footer and nav links
  gained vertical padding, lifting them from 21px to 24–25px tall without
  changing the spacing rhythm.
- **Footer link underlines were invisible.** Tailwind preflight resets anchors to
  `text-decoration: inherit`, leaving no line for the colour to paint;
  `text-decoration-line` is now set explicitly and transitions its colour.
- **"See Full Menu" behaved like an active control** while the PDF is pending. It
  now announces "(coming soon)" to screen readers and no longer shows a hover or
  pointer state while `aria-disabled`.
- **FAQ heading forced onto one line** via `white-space: nowrap`, which overflowed
  on narrow screens. It now breaks across two lines.
- **Mobile nav menu trapped its links** when the viewport was too short. It now
  scrolls with `overscroll-behavior: contain`.
- **Nav brand link pointed at bare `#`**, which appended a stray fragment; it now
  targets `#top`.
- **Maintenance page stickers drifted past their bounds** on drag release
  (`dragElastic` reduced to `0`).
- **`CNAME` moved into `public/`** so the custom domain survives a rebuild
  instead of relying on the file sitting at the repo root.

## [1.3.0] - 2026-08-18

- Landing page taken out of maintenance mode and made indexable.
- Prerendered SSR build via `scripts/prerender.mjs`.
- GitHub Pages deployment workflow.

[1.5.2]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.5.2
[1.5.1]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.5.1
[1.5.0]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.5.0
[1.4.0]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.4.0
[1.3.0]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.3.0
