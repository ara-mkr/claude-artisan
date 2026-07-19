# Flat, Material & Platform Design Systems

*22 styles in this family (3 flagship). Generated from `scripts/style_catalog.json` — the single source of truth.*

The mainstream working styles: flat design plus the vendor systems (Material 3, Fluent 2, Apple HIG) and enterprise systems (Carbon, Polaris, Ant, and friends). These come with real, documented token sets, component libraries, and accessibility baselines — the job is to honor the system's rules, not reinvent them.

> **How to apply this family.** **When a project targets a named platform system, follow its published spec** (elevation, state layers, motion, spacing) rather than approximating. These are the safest defaults for products that need to feel native and accessible out of the box.

## Contents
- [Flat Design](#flat-design) ⭐
- [Fluent Design 2 (Fluent 2)](#fluent-design-2-fluent-2) ⭐
- [Material Design 3 / Material You](#material-design-3--material-you) ⭐
- [Adobe Spectrum](#adobe-spectrum)
- [Analytics Dashboard](#analytics-dashboard)
- [Ant Design](#ant-design)
- [Apple HIG (pre-Liquid flat)](#apple-hig-pre-liquid-flat)
- [Atlassian Design System](#atlassian-design-system)
- [Base Web](#base-web)
- [Carbon Design System](#carbon-design-system)
- [GOV.UK Design System](#govuk-design-system)
- [Linear Style](#linear-style)
- [Material Design (M2)](#material-design-m2)
- [Metro / Microsoft Design Language](#metro--microsoft-design-language)
- [Modern Gradient SaaS](#modern-gradient-saas)
- [Primer](#primer)
- [Salesforce Lightning](#salesforce-lightning)
- [Samsung One UI](#samsung-one-ui)
- [Shopify Polaris](#shopify-polaris)
- [U.S. Web Design System](#us-web-design-system)
- [Vercel Geist](#vercel-geist)
- [shadcn/ui (New York)](#shadcnui-new-york)

---

### Flat Design  ⭐ *flagship — full spec in [00-flagship-implementation-specs/flat-design.md](00-flagship-implementation-specs/flat-design.md)*
*Aliases:* flat UI  
*Slug:* `flat-design` · *Era:* 2012–2016

**Origin.** Microsoft Metro (2010) and Apple iOS 7 (2013) cemented it industry-wide.

**Defining traits.**
- No shadows, gradients, or textures — pure flat color
- Simple geometric shapes and iconography
- Bold color blocking and generous whitespace
- Typography and color carry the hierarchy

**Reference example.** iOS 7; Windows Phone; early Google/Microsoft rebrands.

**Don't confuse with:** material-design, minimalism, metro.

---

### Fluent Design 2 (Fluent 2)  ⭐ *flagship — full spec in [00-flagship-implementation-specs/fluent-design-2.md](00-flagship-implementation-specs/fluent-design-2.md)*
*Aliases:* Fluent, Fluent Design System, Windows 11 design  
*Slug:* `fluent-design-2` · *Era:* 2017–present

**Origin.** Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11).

**Defining traits.**
- Five fundamentals: light, depth, motion, material, scale
- Materials: solid, Mica, Acrylic, Smoke
- Mica tints long-lived surfaces with desktop color
- Reveal highlight, subtle depth, rounded corners

**Reference example.** Windows 11; Microsoft 365; Teams.

**Don't confuse with:** material-design-3, acrylic-fluent.

---

### Material Design 3 / Material You  ⭐ *flagship — full spec in [00-flagship-implementation-specs/material-design-3.md](00-flagship-implementation-specs/material-design-3.md)*
*Aliases:* M3, Material You, M3 Expressive  
*Slug:* `material-design-3` · *Era:* 2021–present

**Origin.** Google; Material You (2021), Material 3 Expressive (Google I/O 2025).

**Defining traits.**
- Dynamic color extracted from user wallpaper (tonal palettes)
- Larger rounded shapes, shape-morphing tokens
- Expressive spring-physics motion
- Design tokens as single source of truth; updated components

**Reference example.** Android 12+; Google apps; Wear OS 5.

**Don't confuse with:** material-design, fluent-design-2.

---

### Adobe Spectrum
*Aliases:* Spectrum  
*Slug:* `spectrum` · *Era:* 2019–present

**Origin.** Adobe.

**Defining traits.**
- Creative-tool oriented, neutral canvas-friendly
- Adobe Clean typeface
- Careful density scales (medium/large)
- Strong theming + accessibility

**Reference example.** Adobe Creative Cloud web apps.

**Don't confuse with:** carbon-design.

---

### Analytics Dashboard
*Aliases:* admin dashboard, data dashboard  
*Slug:* `dashboard-analytics` · *Era:* Ongoing

**Origin.** Conventional data-product UI patterns.

**Defining traits.**
- Card grids, KPI tiles, charts, tables
- Neutral surfaces, one or two accent colors
- Dense but scannable, clear hierarchy
- Function-first legibility

**Reference example.** Stripe Dashboard; Vercel Analytics; admin panels.

**Don't confuse with:** bento-grid, material-design-3, carbon-design.

---

### Ant Design
*Aliases:* antd  
*Slug:* `ant-design` · *Era:* 2015–present

**Origin.** Ant Group / Alibaba (Chinese enterprise ecosystem).

**Defining traits.**
- Dense, component-rich enterprise UI
- Blue primary, subtle shadows, 6px radius default
- Comprehensive form/table components
- Pragmatic, information-heavy

**Reference example.** Alibaba enterprise consoles; many admin panels.

**Don't confuse with:** carbon-design, material-design.

---

### Apple HIG (pre-Liquid flat)
*Aliases:* Human Interface Guidelines, iOS flat, Cupertino  
*Slug:* `apple-hig` · *Era:* 2013–2025

**Origin.** Apple, iOS 7 through iOS 18.

**Defining traits.**
- Deference: content over chrome
- SF Pro type, generous spacing, subtle depth
- Blur/vibrancy accents, clarity
- Consistent system controls

**Reference example.** iOS 7–18; macOS pre-Tahoe.

**Don't confuse with:** liquid-glass, flat-design.

---

### Atlassian Design System
*Aliases:* ADS, Atlassian  
*Slug:* `atlassian-design` · *Era:* 2017–present

**Origin.** Atlassian.

**Defining traits.**
- Friendly-professional productivity tone
- Blue/neutral palette, clear hierarchy
- Strong content + accessibility guidance
- Componentized (Atlaskit)

**Reference example.** Jira; Confluence; Trello.

**Don't confuse with:** polaris, carbon-design.

---

### Base Web
*Aliases:* Base, Uber Base  
*Slug:* `base-web` · *Era:* 2018–present

**Origin.** Uber.

**Defining traits.**
- Highly themeable primitives
- Neutral, functional, mobility-app roots
- Strong theming tokens
- Accessible components

**Reference example.** Uber web products.

**Don't confuse with:** carbon-design.

---

### Carbon Design System
*Aliases:* Carbon, IBM Carbon  
*Slug:* `carbon-design` · *Era:* 2017–present

**Origin.** IBM.

**Defining traits.**
- 2x grid, IBM Plex typeface
- Restrained, enterprise, data-dense
- Productive vs expressive themes
- Strong accessibility standards

**Reference example.** IBM Cloud; enterprise dashboards.

**Don't confuse with:** ant-design, polaris.

---

### GOV.UK Design System
*Aliases:* GDS, GOV.UK  
*Slug:* `govuk-design` · *Era:* 2012–present

**Origin.** UK Government Digital Service.

**Defining traits.**
- Radically clear, task-focused, accessible
- Transport/GDS typeface, black on white
- No decoration; content and usability only
- Rigorous WCAG compliance

**Reference example.** gov.uk.

**Don't confuse with:** uswds, minimalism.

---

### Linear Style
*Aliases:* Linear app style, product dark gradient  
*Slug:* `linear-dark` · *Era:* 2020–present

**Origin.** Linear (issue tracker) product aesthetic.

**Defining traits.**
- Dark UI with subtle purple/blue gradients
- Crisp small type, hairline borders
- Glow accents, fast micro-interactions
- Refined, fast, premium SaaS

**Reference example.** Linear.app; many 2020s dev-tool sites.

**Don't confuse with:** dark-mode, bento-grid, geist.

---

### Material Design (M2)
*Aliases:* Material, Material 2  
*Slug:* `material-design` · *Era:* 2014–2021

**Origin.** Google, introduced 2014.

**Defining traits.**
- Material metaphor: paper and ink with real elevation
- Consistent shadow/elevation system
- Bold color, meaningful motion, grid-based
- Floating action button, ripple feedback

**Reference example.** Android; Google apps (2014–2021).

**Don't confuse with:** material-design-3, flat-2.

---

### Metro / Microsoft Design Language
*Aliases:* Metro UI, Modern UI, Windows Phone design  
*Slug:* `metro` · *Era:* 2010–2017

**Origin.** Microsoft, Windows Phone 7 (2010), Windows 8.

**Defining traits.**
- Live Tiles grid; content over chrome
- Bold Segoe typography, edge-to-edge
- Motion and typographic hierarchy
- Flat, colorful, no skeuomorphism

**Reference example.** Windows Phone 7/8; Windows 8 Start screen.

**Don't confuse with:** flat-design, fluent-design-2.

---

### Modern Gradient SaaS
*Aliases:* startup gradient, SaaS landing  
*Slug:* `gradient-saas` · *Era:* 2019–present

**Origin.** Ubiquitous startup landing-page look.

**Defining traits.**
- Vibrant gradient hero + soft blurred blobs
- Rounded cards, subtle shadows, gradient buttons
- Friendly geometric sans
- Optimistic, clean, conversion-focused

**Reference example.** Countless YC/startup landing pages.

**Don't confuse with:** aurora-ui, corporate-memphis, mesh-gradient.

---

### Primer
*Aliases:* GitHub Primer  
*Slug:* `primer` · *Era:* 2017–present

**Origin.** GitHub.

**Defining traits.**
- Developer-tool clarity, dense but calm
- Mona Sans / system fonts, octicon iconography
- Robust light/dark theming
- Content-first, code-friendly

**Reference example.** GitHub.com.

**Don't confuse with:** atlassian-design.

---

### Salesforce Lightning
*Aliases:* SLDS, Lightning Design System  
*Slug:* `lightning-design` · *Era:* 2015–present

**Origin.** Salesforce.

**Defining traits.**
- Enterprise CRM density and consistency
- Token-driven theming (SLDS)
- Data tables, utility icons
- Neutral, professional palette

**Reference example.** Salesforce Lightning Experience.

**Don't confuse with:** carbon-design, ant-design.

---

### Samsung One UI
*Aliases:* One UI, Samsung design  
*Slug:* `one-ui` · *Era:* 2018–present

**Origin.** Samsung, One UI (2018).

**Defining traits.**
- Large rounded content zones, reachable UI
- Bottom-weighted layouts for one-handed use
- Soft neutral surfaces, clear color
- Calm, spacious Android skin

**Reference example.** Samsung Galaxy phones.

**Don't confuse with:** material-design-3, fluent-design-2.

---

### Shopify Polaris
*Aliases:* Polaris  
*Slug:* `polaris` · *Era:* 2017–present

**Origin.** Shopify.

**Defining traits.**
- Merchant-admin focused, calm and legible
- Card-based layouts, clear affordances
- Accessible, restrained color
- Content guidelines baked in

**Reference example.** Shopify admin.

**Don't confuse with:** carbon-design, atlassian-design.

---

### U.S. Web Design System
*Aliases:* USWDS  
*Slug:* `uswds` · *Era:* 2017–present

**Origin.** U.S. General Services Administration (18F).

**Defining traits.**
- Accessibility- and trust-first (Section 508)
- Government blue/red/neutral palette
- Public Sans typeface
- Plain-language, high-legibility

**Reference example.** US federal government websites.

**Don't confuse with:** govuk-design.

---

### Vercel Geist
*Aliases:* Geist, Vercel design  
*Slug:* `geist` · *Era:* 2023–present

**Origin.** Vercel Geist design system + Geist typeface.

**Defining traits.**
- High-contrast black/white, precise geometry
- Geist Sans/Mono, tight grid
- Subtle gradients and grain accents
- Developer-premium minimalism

**Reference example.** Vercel.com; Next.js docs.

**Don't confuse with:** minimalism, shadcn-ui, bento-grid.

---

### shadcn/ui (New York)
*Aliases:* shadcn, new-york style, radix + tailwind  
*Slug:* `shadcn-ui` · *Era:* 2023–present

**Origin.** shadcn/ui (Radix + Tailwind) by shadcn; default of countless 2023+ apps.

**Defining traits.**
- Neutral, refined, subtle borders and rings
- Small radius (0.5rem), muted zinc/slate palette
- Accessible Radix primitives
- Understated developer-favorite polish

**Reference example.** shadcn/ui showcase; Vercel/Cal.com-style apps.

**Don't confuse with:** minimalism, geist, linear-dark.

---
