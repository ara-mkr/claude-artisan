# Metro / Microsoft Design Language — Implementation Spec

*Aliases:* Metro UI, Modern UI, Windows Phone design
*Slug:* `metro` · *Category:* flat-platform · *Era:* 2010–2017

**Origin.** Microsoft, Windows Phone 7 (2010), Windows 8.

**Reference example.** Windows Phone 7/8; Windows 8 Start screen.

## Signature move(s)

A grid of flat, solid-color rectangular tiles with zero radius, zero shadow, and typography doing all the work — Segoe UI Light headlines set oversized and cropped tight against the edge of the viewport, as if the words themselves are the chrome. There is no bevel, no gradient, no drop shadow anywhere: color blocks and type scale are the *only* hierarchy tools, and the thin `--tile-grid-gap` between tiles is the only separator.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Live Tiles grid; content over chrome
- Bold Segoe typography, edge-to-edge
- Motion and typographic hierarchy
- Flat, colorful, no skeuomorphism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/metro.css`.)

```css
/* Metro / Microsoft Design Language — design tokens (generated from style_catalog.json) */
/* 2010–2017 | Microsoft, Windows Phone 7 (2010), Windows 8. */
:root {
  /* color */
  --color-bg: #0d0d0d;
  --color-surface: #1a1a1a;
  --color-surface-strong: #262626;
  --color-border: #3a3a3a;
  --color-text: #ffffff;
  --color-text-muted: #a6a6a6;
  --color-primary: #2d89ef;
  --color-accent: #e51400;
  --color-tile-purple: #6a00ff;
  --color-tile-green: #00a300;
  --color-tile-teal: #00aba9;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  /* font */
  --font-sans: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif;
  --font-display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'Consolas', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.5rem;
  --text-5xl: 5rem;
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
  --ease-standard: cubic-bezier(0.1, 0.9, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --tile-grid-gap: 2px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Metro / Microsoft Design Language — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d0d0d",
        "surface": "#1a1a1a",
        "surface-strong": "#262626",
        "border": "#3a3a3a",
        "text": "#ffffff",
        "text-muted": "#a6a6a6",
        "primary": "#2d89ef",
        "accent": "#e51400",
        "tile-purple": "#6a00ff",
        "tile-green": "#00a300",
        "tile-teal": "#00aba9",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "'Segoe UI Light'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI Light'", "'Segoe UI'", "system-ui", "sans-serif"],
        "mono": ["'Consolas'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.5rem",
        "5xl": "5rem",
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
        "standard": "cubic-bezier(0.1, 0.9, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tile-grid-gap: 2px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat rectangle, `--radius-sm` (0px), solid `--color-primary` fill or a 1px outline on transparent; no shadow; hover simply swaps to `--color-surface-strong`. |
| **Input** | Underline-only field (bottom border in `--color-border`, brightens to `--color-primary` on focus) — no box, no fill. |
| **Card** | A Live Tile: solid flat color block (`--color-primary`/`--color-tile-purple`/`--color-tile-green`/`--color-tile-teal`), square corners, white type pinned to the bottom-left corner. |
| **Nav** | Horizontal Segoe Light wordmarks (Pivot/Panorama pattern) separated by whitespace, not boxes; active item just gets brighter and slightly larger. |
| **Modal** | Full-bleed flat panel sliding in from an edge; no backdrop blur, just a solid `--color-surface` fill covering the tile grid. |
| **Table** | Borderless rows separated only by `--tile-grid-gap` whitespace; column headers in `--font-display` uppercase, no gridlines. |
| **Tooltip** | Small flat rectangle, `--color-surface-strong` fill, no border, no shadow, appears/disappears with a hard cut or slide. |
| **Badge** | Small solid-color square (reuse a tile accent color) with a numeral in `--font-display` — never a rounded pill. |
| **Toggle** | Two flat rectangular states sliding into each other, no rounded knob — a thin bar cross-fades from off-gray to `--color-primary`. |
| **Loading** | The signature Metro progress indicator: a row of square dots translating in sequence (`--ease-standard`), never a spinner or circular ring. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Zero-radius, zero-shadow tiles rely entirely on color-block contrast for separation — verify every tile fill against `--color-text` (white) with `contrast_check.py`, since tile accent colors (`--color-tile-purple`, `--color-tile-green`) vary widely in luminance.
- Because there is no border or shadow to signal focus, focus-visible states need an explicit high-contrast outline (not just a color shift) — a color-only cue fails for low-vision and colorblind users.
- Edge-to-edge, oversized Segoe Light type can crop or truncate at small viewports — set a minimum readable size and never rely on cropping alone to imply "more content."

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let solid color blocks and typographic scale carry all hierarchy — no shadows, no gradients, no bevels.
- ✅ Keep tiles perfectly square-cornered and edge-aligned to a strict grid with a consistent `--tile-grid-gap`.
- ✅ Set headlines in `--font-display` oversized and cropped tight to the viewport edge.

## Don't

- ❌ Add any drop shadow, gradient, or rounded corner — it immediately reads as a different style.
- ❌ Use icons as the primary label — Metro leans on typographic labels over iconography.
- ❌ Let tile colors go below 4.5:1 contrast against white text just because they look "on-brand."

## Don't confuse this with…

*Commonly confused neighbors:* flat-design, fluent-design-2.

vs flat-design: flat-design is the general web aesthetic that followed Metro; Metro specifically means the Live Tile grid, edge-to-edge Segoe type, and zero-ornament color blocks of Windows Phone/8. vs fluent-design-2: Fluent is Metro's successor — it reintroduces depth (Mica/Acrylic, shadow, rounded corners) that Metro deliberately rejects.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
