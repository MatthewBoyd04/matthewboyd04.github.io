# Portfolio Improvement Backlog

Exhaustive audit of the site as of 2026-04-29. Items grouped by category and ordered within each category by impact. Pick these up in order or cherry-pick based on what session you're doing.

---

## 1. PERFORMANCE — Critical

| # | Issue | Fix | Files |
|---|-------|-----|-------|
| P1 | Two copies of the chess board PNG (1.8 MB each, 3.6 MB total) | Delete the typo duplicate (`Blog_Images/SoveriegnChessBoard.png`), keep one canonical copy in `public/` | `src/Components/Blog/Blog_Images/SoveriegnChessBoard.png` (delete) |
| P2 | Chess board image is 1.8 MB PNG | Convert to WebP (~150–200 KB) and move to `public/` so it's not bundled into JS | `src/Components/Projects/Project_Images/SovereignChessBoard.png` |
| P3 | No lazy loading on images | Add `loading="lazy"` to all `<img>` tags below the fold | `src/Components/Projects/ProjectCard.tsx:19` |
| P4 | No responsive image sizes | Add `srcset` with 400w / 800w variants for project images | `ProjectCard.tsx` |
| P5 | Bootstrap loaded in full | Import only Bootstrap utilities actually used, or switch to a smaller utility library | `src/main.tsx` |
| P6 | No code splitting / lazy routes | Wrap each tab component in `React.lazy()` + `<Suspense>` | `src/App.tsx` |
| P7 | Unused assets in bundle | Remove `src/assets/react.svg` and `public/vite.svg` | — |

---

## 2. SEO — High

| # | Issue | Fix | Files |
|---|-------|-----|-------|
| S1 | No meta description | Add `<meta name="description" ...>` | `index.html` |
| S2 | No Open Graph tags | Add og:title, og:description, og:image, og:url, og:type | `index.html` |
| S3 | No Twitter/X card | Add twitter:card, twitter:title, twitter:description, twitter:image | `index.html` |
| S4 | No canonical URL | Add `<link rel="canonical" href="https://matthewboyd04.github.io/" />` | `index.html` |
| S5 | No structured data | Add JSON-LD Person schema (name, jobTitle, url, email, sameAs for GitHub) | `index.html` |
| S6 | No `robots.txt` | Add `public/robots.txt` with Allow: / and Sitemap reference | `public/robots.txt` (new) |
| S7 | No `sitemap.xml` | Add static `public/sitemap.xml` | `public/sitemap.xml` (new) |
| S8 | Blog content is JSX, not crawlable | Switch blog post content to markdown files parsed at build time with `react-markdown` | `src/Components/Blog/blogPostsData.tsx` |
| S9 | Favicon is a placeholder | Replace `public/vite.svg` with real favicon files (ico + png) | `public/`, `index.html` |
| S10 | No `theme-color` meta | Add `<meta name="theme-color" content="#0F1117" />` | `index.html` |
| S11 | Page title never changes | Update `document.title` on each tab switch | `src/App.tsx` |

---

## 3. ACCESSIBILITY — High

| # | Issue | Fix | Files |
|---|-------|-----|-------|
| A1 | Nav bar uses `<div>` not `<nav>` | Replace with `<nav aria-label="Main navigation">` | `src/Components/PageLayout/MainNavigationBar.tsx` |
| A2 | Active tab has no `aria-current` | Add `aria-current="page"` to the active NavigationButton | `MainNavigationBar.tsx`, `NavigationButton.tsx` |
| A3 | No skip link | Add `<a href="#main-content">Skip to content</a>` as first body element | `index.html` or `App.tsx` |
| A4 | No `<main>` landmark | Wrap tab content in `<main id="main-content">` | `src/App.tsx` |
| A5 | GitHub link has no aria-label | Add `aria-label="Matthew Boyd on GitHub"` | `src/Components/Tabs/Home.tsx` |
| A6 | Blog back button needs aria-label | Add `aria-label="Back to blog list"` | `src/Components/Blog/BlogPostDetail.tsx` |
| A7 | `prefers-reduced-motion` not handled | Add media query guard for any future animations | `src/index.css` |
| A8 | Focus indicators are browser default | Add custom focus rings in the purple theme colour | `src/index.css` |
| A9 | Blog posts should use `<article>` | Wrap each blog card in `<article>` with `<header>` | `BlogList.tsx`, `BlogPostDetail.tsx` |
| A10 | Heading hierarchy may be broken | Audit h1 → h2 → h3 order across all tabs | `About.tsx`, `Home.tsx`, `CV.tsx` |

---

## 4. UX & NAVIGATION — High

| # | Issue | Fix | Files |
|---|-------|-----|-------|
| U1 | No URL routing — no shareable links | Add React Router v6; map `/`, `/about`, `/projects`, `/blog`, `/blog/:id` | `src/App.tsx`, all tab components |
| U2 | Browser back/forward do nothing | Resolved by U1 | — |
| U3 | No 404 page | Add catch-all route with a friendly NotFound component | `src/Components/Misc/NotFound.tsx` (new) |
| U4 | No scroll-to-top on tab change | Add `window.scrollTo(0, 0)` on tab switch | `src/App.tsx` |
| U5 | No "copy email" or mailto link | Replace raw email text with a `mailto:` link | `src/Components/Tabs/Home.tsx` |
| U6 | Footer year is wrong (2025) | Update to 2026 | `src/Components/PageLayout/Footer.tsx` |
| U7 | No loading state between tabs | Add fade transition or spinner on tab mount | `src/App.tsx` |

---

## 5. VISUAL & DESIGN — Medium

| # | Issue | Fix |
|---|-------|-----|
| V1 | No page transitions | Add subtle CSS fade-in on tab mount (or Framer Motion) |
| V2 | Skills badges are plain coloured text | Add icons via Simple Icons or Devicons for well-known tech |
| V3 | No profile photo | Add a professional headshot to the hero section |
| V4 | No-image project cards have a coloured block | Generate a placeholder SVG with initials or project icon |
| V5 | Footer is a single line | Add a social links row (GitHub, LinkedIn, email icons) |
| V6 | No dark/light mode toggle | Implement a toggle between dark theme and a light variant |
| V7 | Inline styles scattered everywhere | Migrate to CSS Modules or define full colour system as `:root` CSS variables in `index.css` |
| V8 | Hex values hardcoded throughout | Define colour palette as `:root` CSS variables; reference `var(--color-...)` everywhere |
| V9 | No scroll-reveal animations | Add intersection-observer-based fade-in for sections on Home |
| V10 | No "back to top" button | Add a sticky button that appears after scrolling past the hero |

---

## 6. CONTENT — Medium

| # | Issue | Fix |
|---|-------|-----|
| C1 | Only 1 blog post | Write posts on: dissertation findings, SDE internship learnings, CNC dev projects |
| C2 | Only 3 projects in Projects tab | Add entries for the 10 projects listed in `About.tsx` — they're already documented |
| C3 | Dissertation and Portfolio Website have no images | Add screenshots or representative images |
| C4 | Home bio duplicates About tab content | Make Home bio a teaser with a "Read more" link to About |
| C5 | Employment status will become stale | Update "Incoming L4 @ Amazon" after August 2026 |
| C6 | No LinkedIn link | Add LinkedIn to contact section and footer |
| C7 | Project descriptions are 1–2 sentences | Expand with impact, key decisions, and challenges |
| C8 | About page "Other Projects" have no links | Add live/repo URLs to all 10 entries in `About.tsx` |

---

## 7. CODE QUALITY — Medium

| # | Issue | Fix | Files |
|---|-------|-----|-------|
| Q1 | `console.log` in production | Remove `console.log("Tab " + ...)` | `src/App.tsx:61` |
| Q2 | Unused `ListGroup.tsx` | Delete it | `src/Components/Misc/ListGroup.tsx` |
| Q3 | Unused CSS class `.custom-nav-bg` | Delete it | `src/Components/PageLayout/MainNavigationBar.css` |
| Q4 | Duplicate `vite.config.js` and `vite.config.ts` | Delete the `.js` copy | project root |
| Q5 | Old `build/` folder committed | Add `build/` to `.gitignore` and remove from tracking | `.gitignore` |
| Q6 | `package.json` name is `"react-learning-app"` | Rename to `"matthew-boyd-portfolio"` | `package.json` |
| Q7 | No ESLint config | Add `eslint` + `@typescript-eslint` + `eslint-plugin-jsx-a11y` | project root |
| Q8 | No Prettier config | Add `.prettierrc` and format the codebase | project root |
| Q9 | Inline `style={{}}` objects recreated on every render | Extract to `const styles = {}` outside component functions | All tab components |
| Q10 | Blog content is raw JSX in a data file | Switch to markdown + `react-markdown` | `src/Components/Blog/blogPostsData.tsx` |
| Q11 | TypeScript is `^4.9.3` | Upgrade to TypeScript 5.x | `package.json` |

---

## 8. DEVELOPER EXPERIENCE — Low

| # | Issue | Fix |
|---|-------|-----|
| D1 | No test suite | Add Vitest + React Testing Library; smoke-test all tab components |
| D2 | No GitHub Actions CI | Add `.github/workflows/ci.yml` to run `tsc`, ESLint, and tests on every PR |
| D3 | Manual deployment only | Add `.github/workflows/deploy.yml` to auto-deploy on merge to main |
| D4 | No README | Document how to run locally, add blog posts, add projects |
| D5 | No `.env.example` | Add as a template for future env vars |
| D6 | No pre-commit hooks | Add `husky` + `lint-staged` to run ESLint + Prettier on staged files |

---

## 9. FEATURES — Nice-to-have

| # | Feature | Description |
|---|---------|-------------|
| F1 | Contact form | Replace static email link with Formspree or EmailJS form |
| F2 | Project filtering | Tag-based filter buttons on the Projects page |
| F3 | Blog search | Client-side search/filter on title and tags |
| F4 | RSS feed | Static `public/feed.xml` for blog subscribers |
| F5 | Analytics | Plausible Analytics (privacy-friendly) or Google Analytics 4 |
| F6 | PWA manifest | `public/manifest.json` + service worker for offline support |
| F7 | Print/PDF CV | Print stylesheet so About page prints as a clean résumé |
| F8 | Blog pagination | Needed once posts exceed ~6 entries |
| F9 | OG image | Branded 1200×630 image for social sharing previews |

---

## Recommended Starting Order

1. **P1, P2** — Fix duplicate/unoptimised image (immediate bundle win, 5 min)
2. **U6, Q1** — Fix footer year + remove console.log (trivial)
3. **S1–S4, S10, S11** — Meta tags and dynamic page title (30 min, high SEO impact)
4. **S9** — Real favicon (15 min, looks unprofessional without it)
5. **U1** — React Router (foundational; unblocks shareable URLs and 404 page)
6. **A1–A6** — Semantic HTML + skip link + ARIA basics (1–2 hours)
7. **Q7, Q8** — ESLint + Prettier (improves all future work)
8. **C2, C6** — More projects + LinkedIn link
9. **V3** — Profile photo (big personal-brand impact)
10. Everything else in order of interest/available time
