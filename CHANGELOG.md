# Changelog

All notable changes to the JOY Dim Sum website are documented here.

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-08-20

This release expands JOY Dim Sum into a fully prerendered multipage website,
refreshes the food and outlet imagery, and completes the latest responsive,
navigation, accessibility and local-discovery refinements.

### Added

- **Dedicated indexable pages** for the full menu, all outlets, Sentul Point,
  Kiara Bay in Kepong, and 15 frequently asked questions.
- **Route-specific SEO metadata, canonical URLs, structured data, breadcrumbs,
  and sitemap entries** for the new pages.
- **Sentul Point and Kiara Bay outlet photography** plus refreshed transparent
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

[1.5.0]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.5.0
[1.4.0]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.4.0
[1.3.0]: https://github.com/heyhizlan/joy-dim-sum-website/releases/tag/production-v1.3.0
