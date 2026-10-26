# NORDEN SKIN — Premium Men's Skincare Landing Page

A production-quality, accessible, high-performance skincare e-commerce landing page built with React, Vite, and Tailwind CSS. The interface strictly adheres to an editorial two-color design system, delivers a 2-minute daily grooming routine for men, and enforces ethical design with zero fabricated reviews or fake clinical claims.

---

## 1. Project Overview

- **Brand Name**: NORDEN SKIN (centralized in `src/config/brand.ts`)
- **Positioning**: Editorial, minimalist, modern masculine grooming.
- **Audience**: Men aged 18–40 (students, professionals, and skincare beginners) looking for straightforward, reliable daily skincare without complicated routines.
- **Strict Two-Color Palette**:
  - **Midnight Navy**: `#101820` (Headings, primary buttons, borders, dark editorial blocks)
  - **Soft Ivory**: `#F5F1E8` (Backgrounds, cards, negative space, light typography contrast)
  - *No third brand color. Only opacity variations of these two approved hex codes are used.*

---

## 2. Key Features

- **Responsive Navigation**: Sticky header with smooth scroll links, live shopping bag count, accessible mobile drawer with keyboard and focus management.
- **Announcement Bar**: Concise editorial brand message with quick navigation anchor.
- **Hero Section**: Confident typographic hierarchy (*"Better Skin. No Complications."*), dual CTAs (*Shop the Collection* and *Find Your Routine*), and high-resolution studio imagery.
- **Featured Products Grid**:
  - Step 01: *Daily Facial Cleanser* ($26.00)
  - Step 02: *Lightweight Face Moisturizer* ($32.00)
  - Step 03: *Daily Sunscreen SPF 30+* ($28.00)
  - *Complete Routine Bundle* quick-add block.
  - Interactive product quick-view modal with step guides and formulation specifications.
- **The Routine Section**: Detailed 3-step breakdown (Cleanse, Moisturize, Protect) with time commitments and Morning vs. Evening protocol breakdown.
- **Why Choose Us**: Three benefit pillars highlighting radical simplicity, fast absorption with a matte finish, and everyday usability.
- **Brand Story**: Modern masculine editorial story focused on habit-building over cosmetics hype.
- **Customer Reviews**: Ethically framed with explicit labeling as **Sample Placeholders** (no fabricated testimonials or fake 5-star claims).
- **Accessible Accordion FAQ**: Keyboard-accessible (`Enter`, `Space`, `Tab`), covers application order, skin types, facial hair compatibility, and order fulfillment.
- **Final CTA**: High-impact closing banner reinforcing the 2-minute daily habit.
- **Demonstration Cart Drawer**: Interactive add-to-bag, quantity increment/decrement, and subtotal calculation with honest prototype disclosures.
- **Footer**: Dynamic copyright year, newsletter validation form with inline errors, and interactive Privacy / Terms modal windows.

---

## 3. Technology Stack

- **React 19**
- **Vite 7**
- **Tailwind CSS 4**
- **TypeScript 5.9**
- **Lucide React** (featherlight accessible icons)
- **clsx** & **tailwind-merge**

---

## 4. Prerequisites

- **Node.js**: `v18.x` or higher (Node 20+ recommended)
- **npm**: `v9.x` or higher

---

## 5. Installation Instructions

Clone the repository and install dependencies:

```bash
npm install
```

---

## 6. Available Scripts

All commands below exist and are tested with `package.json`:

### Start Development Server
Runs Vite in hot-module reload mode:
```bash
npm run dev
```

### Build for Production
Compiles TypeScript and bundles assets with Vite:
```bash
npm run build
```

### Preview Production Build
Locally serves the compiled `dist/` directory:
```bash
npm run preview
```

---

## 7. Project Structure

```text
├── public/
│   └── images/
│       ├── brand-lifestyle.jpg
│       ├── hero-routine.jpg
│       ├── routine-steps.jpg
│       └── products/
│           ├── cleanser.jpg
│           ├── moisturizer.jpg
│           └── sunscreen.jpg
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Benefits.tsx
│   │   ├── BrandStory.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CustomerReviews.tsx
│   │   ├── FAQ.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── FinalCta.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PolicyModal.tsx
│   │   ├── ProductCard.tsx
│   │   ├── QuickViewModal.tsx
│   │   └── RoutineSection.tsx
│   ├── config/
│   │   └── brand.ts           # Central brand name, copy & colors
│   ├── data/
│   │   └── products.ts        # Data-driven product catalog & routine data
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx                # Main application component & drawer states
│   ├── index.css              # Strict CSS variables & typography rules
│   └── main.tsx
├── index.html                 # SEO meta, font preconnects, Open Graph
├── package.json
├── tsconfig.json
└── README.md
```

---

## 8. Customization Guide

### Changing the Brand Name and Copy
Open `src/config/brand.ts`:
```typescript
export const BRAND_CONFIG = {
  brandName: "NORDEN SKIN",
  tagline: "Better Skin. No Complications.",
  heroHeadline: "Better Skin. No Complications.",
  // ...
};
```
Modifying `brandName` updates the logo, hero copy, footer, and modals automatically.

### Updating the Two-Color Palette
The palette is governed strictly by CSS custom properties in `src/index.css` and `src/config/brand.ts`:
```css
:root {
  --color-primary: #101820;   /* Midnight Navy */
  --color-secondary: #F5F1E8; /* Soft Ivory */
}
```

### Modifying Products & Prices
All products are data-driven in `src/data/products.ts`. You can change prices, descriptions, step numbers, and bottle sizes without modifying UI components.

### Replacing Image Assets
Replace files in `public/images/`:
- `public/images/hero-routine.jpg` (Hero editorial banner)
- `public/images/brand-lifestyle.jpg` (About brand editorial)
- `public/images/products/cleanser.jpg` (Cleanser photo)
- `public/images/products/moisturizer.jpg` (Moisturizer photo)
- `public/images/products/sunscreen.jpg` (Sunscreen photo)

---

## 9. Accessibility (a11y) Considerations

- **WCAG AA Compliance**: High-contrast ratio between Midnight Navy (`#101820`) and Soft Ivory (`#F5F1E8`) exceeds 14:1 for text contrast (well above 4.5:1 required).
- **Keyboard Navigation**: Interactive controls (buttons, links, drawers, accordions) feature prominent `:focus-visible` ring indicators.
- **Semantic Structure**: Semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>`).
- **Screen Reader Support**: ARIA attributes used where needed (`aria-expanded`, `aria-controls`, `aria-labelledby`, `role="region"`).
- **Reduced Motion**: Respects `prefers-reduced-motion` media queries by disabling transitions.

---

## 10. Security & Responsible Implementation

- **Untrusted Input Handling**: Newsletter input is sanitized and validated client-side; React default JSX escaping prevents XSS.
- **No Insecure Methods**: No use of `dangerouslySetInnerHTML`, `eval()`, or inline event strings.
- **Client-Side Boundaries**: Shopping cart and newsletter subscriptions are client-memory mockups. No deceptive claims of server security are made.
- **Sensitive Data Notice**: No payment data, credit cards, or personal identifiers are stored in `localStorage` or transmitted over networks.
- **Recommended Production Backend Measures**:
  - Implement server-side validation and schema checks (e.g., Zod).
  - Configure rate limiting on newsletter and checkout endpoints.
  - Implement CSRF protection and HTTP-only cookies.
  - Enforce Content Security Policy (CSP) headers:
    ```http
    Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    ```

---

## 11. Known Limitations & Placeholders

1. **E-Commerce Checkout**: Clicking *"Proceed to Checkout"* displays a demo dialog informing the user that no payment gateway is attached.
2. **Customer Reviews**: Explicitly labeled as *"Sample Placeholders"* in compliance with FTC truth-in-advertising guidelines.
3. **Newsletter Submission**: Simulates an instant client confirmation without sending an HTTP POST request.
4. **Legal Policies**: Privacy and Terms modals contain sample template text intended to be replaced with attorney-reviewed policies upon commercial launch.

---

## 12. Security Audit & Dependency Verification Results

An automated security audit was performed with `npm audit`:
- **Audited packages**: 97 packages.
- **Reported issues**: 2 advisory notices related to upstream build dev-dependencies (`vite` / `esbuild` Windows path handling in dev mode server). These affect only local development servers on Windows and do not impact static production build output or runtime client security.
- **Client runtime**: Zero runtime client vulnerabilities; all user inputs are rendered using escaped React JSX with no direct DOM injections.

---

## 12. Deployment Instructions

This application builds to static assets suitable for deployment on any modern CDN or static web host (e.g., Vercel, Netlify, Cloudflare Pages, GitHub Pages, AWS S3/CloudFront).

```bash
# Generate the production bundle
npm run build

# Deploy the resulting /dist folder
```
