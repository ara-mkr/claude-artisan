# Holographic / Iridescent — Implementation Spec

*Aliases:* iridescent, foil, holo  
*Slug:* `holographic` · *Category:* texture · *Era:* 2017–present

**Origin.** Holographic foil / oil-slick trend.

**Reference example.** Holographic packaging; iridescent brand identities.

## Signature move(s)

A rainbow gradient that shifts by angle — oil-slick/soap-bubble iridescence or metallic foil sheen — on dark or white. Futuristic, dreamy, premium.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Rainbow gradient that shifts by angle
- Oil-slick / soap-bubble iridescence
- Metallic foil sheen on dark or white
- Futuristic, dreamy, premium

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/holographic.css`.)

```css
/* Holographic / Iridescent — design tokens (generated from style_catalog.json) */
/* 2017–present | Holographic foil / oil-slick trend. */
:root {
  /* color */
  --color-bg: #0b0b12;
  --color-surface: rgba(255,255,255,0.08);
  --color-text: #ffffff;
  --color-text-muted: #c7c7d9;
  --color-primary: #a0f0ff;
  --color-accent: #ff9ff3;
  --color-cyan: #7cf9ff;
  --color-pink: #ff9ff3;
  --color-lime: #c8ff8f;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-iri: 0 8px 30px rgba(160,240,255,0.35);
  /* blur */
  --blur-backdrop: 8px;
  /* font */
  --font-sans: 'Space Grotesk', system-ui, sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'Space Mono', monospace;
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
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --holo: linear-gradient(115deg, #ff9ff3, #a0f0ff, #c8ff8f, #ff9ff3);
  --foil: conic-gradient(from 0deg, #ff9ff3, #a0f0ff, #c8ff8f, #ffd28f, #ff9ff3);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Holographic / Iridescent — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0b12",
        "surface": "rgba(255,255,255,0.08)",
        "text": "#ffffff",
        "text-muted": "#c7c7d9",
        "primary": "#a0f0ff",
        "accent": "#ff9ff3",
        "cyan": "#7cf9ff",
        "pink": "#ff9ff3",
        "lime": "#c8ff8f",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "iri": "0 8px 30px rgba(160,240,255,0.35)",
      },
      backdropBlur: {
        "backdrop": "8px",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "sans-serif"],
        "mono": ["'Space Mono'", "monospace"],
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
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --holo: linear-gradient(115deg, #ff9ff3, #a0f0ff, #c8ff8f, #ff9ff3);
//   --foil: conic-gradient(from 0deg, #ff9ff3, #a0f0ff, #c8ff8f, #ffd28f, #ff9ff3);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Holo-gradient fill or a foil border that shimmers; dark text on light holo, or holo text on dark. |
| **Input** | Dark field with an iridescent focus border. |
| **Card** | Dark card with a holographic gradient edge or a subtle foil sheen overlay. |
| **Nav** | Dark bar with a holo-gradient logo/underline. |
| **Modal** | Dark panel with an iridescent frame. |
| **Table** | Dark grid; holo accents on headers/active rows only. |
| **Tooltip** | Small foil-edged chip. |
| **Badge** | An iridescent pill. |
| **Toggle** | Holo-gradient 'on' track. |
| **Loading** | A rotating iridescent conic gradient spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never put body text in a holo gradient — contrast is unpredictable; use it for accents/edges and keep text solid.
- Provide a static fallback if you animate the shimmer (reduced-motion).
- Verify text over any iridescent patch.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use holo for edges, accents, and hero moments.
- ✅ Pair with a dark or clean neutral base.
- ✅ Keep functional text on solid color.

## Don't

- ❌ Fill large text areas with the gradient.
- ❌ Animate constantly without reduced-motion.
- ❌ Overuse until it looks like a car wrap.

## Don't confuse this with…

*Commonly confused neighbors:* chrome-metal, mesh-gradient, vaporwave.

vs chrome/liquid-metal: chrome is reflective metal (silver, environment reflections); holographic is rainbow iridescence. vs mesh gradient: mesh is smooth multi-hue blend without the angle-shift foil quality.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
