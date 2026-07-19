# Constructivism — Implementation Spec

*Aliases:* Russian Constructivism, Soviet design  
*Slug:* `constructivism` · *Category:* historical · *Era:* 1915–1930s

**Origin.** Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers).

**Reference example.** Rodchenko posters; El Lissitzky 'Beat the Whites with the Red Wedge'.

## Signature move(s)

Bold diagonals and dynamic asymmetry, red/black/cream, heavy sans/slab type, photomontage and geometric shapes as propaganda. Industrial and purposeful.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Bold diagonals and dynamic asymmetry
- Red, black, cream; heavy sans/slab type
- Photomontage, geometric shapes as propaganda
- Industrial, purposeful, revolutionary

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/constructivism.css`.)

```css
/* Constructivism — design tokens (generated from style_catalog.json) */
/* 1915–1930s | Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers). */
:root {
  /* color */
  --color-bg: #f0ece1;
  --color-surface: #ffffff;
  --color-text: #141414;
  --color-text-muted: #3a3a3a;
  --color-primary: #d7261e;
  --color-accent: #141414;
  --color-cream: #f0ece1;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-none: none;
  /* font */
  --font-sans: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif;
  --font-display: 'Anton', 'Oswald', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.3rem;
  --text-xl: 1.9rem;
  --text-2xl: 2.8rem;
  --text-3xl: 4rem;
  --text-4xl: 5.6rem;
  --text-5xl: 8rem;
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
  --diagonal: -15deg;
  --red-black: #d7261e #141414;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Constructivism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f0ece1",
        "surface": "#ffffff",
        "text": "#141414",
        "text-muted": "#3a3a3a",
        "primary": "#d7261e",
        "accent": "#141414",
        "cream": "#f0ece1",
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
        "sans": ["'Alternate Gothic'", "'Oswald'", "'Anton'", "sans-serif"],
        "display": ["'Anton'", "'Oswald'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.3rem",
        "xl": "1.9rem",
        "2xl": "2.8rem",
        "3xl": "4rem",
        "4xl": "5.6rem",
        "5xl": "8rem",
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
//   --diagonal: -15deg;
//   --red-black: #d7261e #141414;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Angular block, often rotated on a diagonal axis; heavy uppercase slab/gothic label; red or black fill. |
| **Input** | Hard-edged field on a strong diagonal grid; bold label. |
| **Card** | Asymmetric composition with a diagonal red bar and montage imagery. |
| **Nav** | Diagonal or hard-left bar; oversized bold type; red accent wedge. |
| **Modal** | Angular panel crossing the grid with a red/black split. |
| **Table** | Bold rules, heavy header, red accent row. |
| **Tooltip** | Angular red/black chip. |
| **Badge** | A red wedge or bold slab tag. |
| **Toggle** | Blocky track; red for 'on'. |
| **Loading** | A rotating wedge / diagonal progress bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Red-on-black is risky — put text on cream or use red as a shape, not small text.
- Diagonal type harms readability; keep body text horizontal.
- Maintain reading order despite dynamic layout.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use strong diagonals and asymmetric tension.
- ✅ Limit to red/black/cream with heavy type.
- ✅ Employ photomontage and geometric wedges.

## Don't

- ❌ Center or make it static/symmetric.
- ❌ Add soft/rounded/pastel elements.
- ❌ Set body copy on a diagonal.

## Don't confuse this with…

*Commonly confused neighbors:* suprematism, bauhaus, futurism-italian.

vs Suprematism: Suprematism floats pure abstract shapes for feeling; Constructivism is utilitarian/propagandistic with type + montage. vs Bauhaus: Bauhaus is calmer/primary-triad; Constructivism is red/black and diagonal.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
