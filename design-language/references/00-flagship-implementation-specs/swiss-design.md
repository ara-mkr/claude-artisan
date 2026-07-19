# Swiss / International Typographic Style — Implementation Spec

*Aliases:* International Style, Swiss Style, grid design  
*Slug:* `swiss-design` · *Category:* historical · *Era:* 1950s–1960s

**Origin.** Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools.

**Reference example.** Müller-Brockmann concert posters; Helvetica.

## Signature move(s)

A mathematical grid with rigorous alignment, Helvetica/Akzidenz-Grotesk set flush-left ragged-right, objective hierarchy through size/weight, and generous whitespace. Photography over illustration.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Mathematical grid systems and rigorous alignment
- Helvetica/Akzidenz-Grotesk, flush-left ragged-right
- Objective, neutral, hierarchy via size/weight
- Generous whitespace, photography over illustration

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/swiss-design.css`.)

```css
/* Swiss / International Typographic Style — design tokens (generated from style_catalog.json) */
/* 1950s–1960s | Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-2: #f2f2f2;
  --color-text: #111111;
  --color-text-muted: #555555;
  --color-primary: #e2001a;
  --color-accent: #000000;
  --color-grid: #d9d9d9;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-none: none;
  /* font */
  --font-sans: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif;
  --font-display: 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.333rem;
  --text-xl: 1.777rem;
  --text-2xl: 2.369rem;
  --text-3xl: 3.157rem;
  --text-4xl: 4.209rem;
  --text-5xl: 5.61rem;
  /* space */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;
  --space-16: 128px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --baseline: 8px;
  --columns: 12;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Swiss / International Typographic Style — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-2": "#f2f2f2",
        "text": "#111111",
        "text-muted": "#555555",
        "primary": "#e2001a",
        "accent": "#000000",
        "grid": "#d9d9d9",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Akzidenz-Grotesk'", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.333rem",
        "xl": "1.777rem",
        "2xl": "2.369rem",
        "3xl": "3.157rem",
        "4xl": "4.209rem",
        "5xl": "5.61rem",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
        "16": "128px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --baseline: 8px;
//   --columns: 12;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Minimal: a flush rectangle or an underlined text action; hierarchy via weight, not decoration. |
| **Input** | Clean field aligned to the grid with a hairline underline or border. |
| **Card** | A grid cell delineated by whitespace and alignment, rarely by borders/shadows. |
| **Nav** | A precise horizontal grid of text links; strong baseline alignment. |
| **Modal** | A grid-aligned panel; content-first, no ornament. |
| **Table** | The grid's natural home: precise columns, hairline rules, aligned numerals. |
| **Tooltip** | Plain rectangle, gridded, minimal. |
| **Badge** | A small flush label; often just colored text. |
| **Toggle** | Understated; label + minimal control aligned to the grid. |
| **Loading** | A thin determinate bar aligned to the grid, or restrained text. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- High contrast is inherent (black on white) — keep it; avoid trendy gray-on-gray.
- Strong hierarchy aids screen readers if it maps to real heading levels.
- Don't sacrifice min font sizes for 'purity' — keep body ≥16px.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Design the grid first; align everything to it.
- ✅ Use one grotesque typeface in a few weights.
- ✅ Let whitespace and scale create hierarchy.

## Don't

- ❌ Center everything — Swiss is flush-left and asymmetric.
- ❌ Add decorative flourishes or shadows.
- ❌ Break the grid without intent.

## Don't confuse this with…

*Commonly confused neighbors:* bauhaus, minimalism, flat-design.

vs minimalism: Swiss is a *grid/typographic system* (can be dense and colorful within the grid); minimalism is about *how few* elements. vs Bauhaus: Bauhaus adds primary-color geometric shapes; Swiss is more purely typographic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
