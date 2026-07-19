# De Stijl / Neoplasticism — Implementation Spec

*Aliases:* Neoplasticism, Mondrian style  
*Slug:* `de-stijl` · *Category:* historical · *Era:* 1917–1931

**Origin.** Netherlands (Theo van Doesburg, Piet Mondrian).

**Reference example.** Mondrian 'Composition' paintings; Rietveld Schröder House.

## Signature move(s)

Only horizontals and verticals with thick black rules, primary colors + white/gray/black, asymmetric rectangular compositions. Pure geometric abstraction.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Only horizontals and verticals; thick black rules
- Primary colors + white/gray/black
- Asymmetric rectangular compositions
- Pure abstraction, universal harmony

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/de-stijl.css`.)

```css
/* De Stijl / Neoplasticism — design tokens (generated from style_catalog.json) */
/* 1917–1931 | Netherlands (Theo van Doesburg, Piet Mondrian). */
:root {
  /* color */
  --color-bg: #f7f7f2;
  --color-surface: #ffffff;
  --color-text: #0d0d0d;
  --color-text-muted: #333333;
  --color-primary: #d40000;
  --color-accent: #0000c8;
  --color-yellow: #ffd500;
  --color-black: #0d0d0d;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-none: none;
  /* font */
  --font-sans: 'Futura', 'Century Gothic', 'Poppins', sans-serif;
  --font-display: 'Archivo Black', 'Futura', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: 3rem;
  --text-5xl: 4rem;
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
  --ease-standard: linear;
  /* extra (signature gradients, composite borders, filters) */
  --rule: 6px solid #0d0d0d;
  --primaries: #d40000 #ffd500 #0000c8;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// De Stijl / Neoplasticism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f7f2",
        "surface": "#ffffff",
        "text": "#0d0d0d",
        "text-muted": "#333333",
        "primary": "#d40000",
        "accent": "#0000c8",
        "yellow": "#ffd500",
        "black": "#0d0d0d",
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
        "sans": ["'Futura'", "'Century Gothic'", "'Poppins'", "sans-serif"],
        "display": ["'Archivo Black'", "'Futura'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "4rem",
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --rule: 6px solid #0d0d0d;
//   --primaries: #d40000 #ffd500 #0000c8;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | A rectangle bounded by thick black rules; fill white or a single primary; no rounding. |
| **Input** | Field defined by black rules on two+ sides; primary-color focus block. |
| **Card** | A Mondrian-like composition of rectangles; one or two primary-color blocks. |
| **Nav** | Horizontal black rule with rectangular link zones; a primary accent block. |
| **Modal** | Rectangular panel divided by thick black rules. |
| **Table** | Thick black grid lines; occasional primary-color cell. |
| **Tooltip** | A small ruled rectangle. |
| **Badge** | A primary-color square. |
| **Toggle** | Rectangular track split by a black rule; primary 'on' block. |
| **Loading** | Growing primary-color rectangle within a ruled frame. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Primary yellow/red blocks are fills — keep text black on white for contrast.
- Don't rely on color-block position alone for meaning.
- Keep the thick rules from crowding small text.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use only straight horizontal/vertical black rules.
- ✅ Compose asymmetrically with rectangles.
- ✅ Limit color to red/yellow/blue + neutrals.

## Don't

- ❌ Use any diagonal or curve.
- ❌ Add more than the primary triad.
- ❌ Round any corner.

## Don't confuse this with…

*Commonly confused neighbors:* bauhaus, constructivism.

vs Bauhaus: De Stijl forbids diagonals/circles; Bauhaus embraces them. vs Mondrian 'clones': keep asymmetry and unequal block sizes, not a uniform grid.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
