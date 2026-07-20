# Carbon Design System — Implementation Spec

*Aliases:* Carbon, IBM Carbon
*Slug:* `carbon-design` · *Category:* flat-platform · *Era:* 2017–present

**Origin.** IBM.

**Reference example.** IBM Cloud; enterprise dashboards.

## Signature move(s)

Everything is a rectangle: `--radius-sm/md/lg` are all `0px`, so no card, button, or field ever curves — the only "soft" token in the whole system is the 2px `--radius-pill` used sparingly for tags. Interactive state is communicated by a 2px `--underline-active` bottom rule and by IBM Plex Sans/Mono's distinctive geometric letterforms, laid out on the strict 2x grid, rather than by shape or shadow.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- 2x grid, IBM Plex typeface
- Restrained, enterprise, data-dense
- Productive vs expressive themes
- Strong accessibility standards

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/carbon-design.css`.)

```css
/* Carbon Design System — design tokens (generated from style_catalog.json) */
/* 2017–present | IBM. */
:root {
  /* color */
  --color-bg: #161616;
  --color-surface: #262626;
  --color-surface-strong: #393939;
  --color-border: #525252;
  --color-text: #f4f4f4;
  --color-text-muted: #c6c6c6;
  --color-primary: #4589ff;
  --color-accent: #08bdba;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 2px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 2px 6px rgba(0,0,0,0.35);
  --shadow-lg: 0 4px 12px rgba(0,0,0,0.4);
  /* font */
  --font-sans: 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: 2.875rem;
  --text-5xl: 3.75rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  /* ease */
  --ease-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
  /* extra (signature gradients, composite borders, filters) */
  --underline-active: 2px solid var(--color-primary);
  --grid-tint: rgba(255,255,255,0.02);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Carbon Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#161616",
        "surface": "#262626",
        "surface-strong": "#393939",
        "border": "#525252",
        "text": "#f4f4f4",
        "text-muted": "#c6c6c6",
        "primary": "#4589ff",
        "accent": "#08bdba",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "2px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.3)",
        "md": "0 2px 6px rgba(0,0,0,0.35)",
        "lg": "0 4px 12px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'IBM Plex Sans'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "2.875rem",
        "5xl": "3.75rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "16px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --underline-active: 2px solid var(--color-primary);
//   --grid-tint: rgba(255,255,255,0.02);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Sharp rectangle (`--radius-sm`, 0px), solid `--color-primary` fill, 48px-ish comfortable height; hover darkens fill, no radius change ever. |
| **Input** | Rectangular field on `--color-surface`, bottom border only; focus swaps the bottom border to `--underline-active` (2px solid primary), no ring, no radius. |
| **Card** | Flat `--color-surface` rectangle, `--shadow-sm` at most, 1px `--color-border` top rule; never rounded. |
| **Nav** | Fixed-height rectangular UI Shell header in `--color-bg`, tab items get `--underline-active` when selected. |
| **Modal** | Square-cornered panel, `--shadow-lg`, slides in from the right edge rather than fading in centered — a Carbon-specific pattern for side panels. |
| **Table** | Dense `--color-surface` rows on `--grid-tint` zebra striping, square cells, sortable column headers with `--underline-active` on the active sort. |
| **Tooltip** | Small square `--color-text` chip with a tiny triangle pointer, no radius. |
| **Badge** | Rectangular tag (`--radius-pill` 2px only), IBM Plex Mono for numeric counts. |
| **Toggle** | Rectangular track (not pill-shaped) with a square knob that slides — deliberately un-rounded, unlike most toggles. |
| **Loading** | Thin linear progress bar in `--color-primary`, or the Carbon "skeleton" rectangles pulsing on `--grid-tint`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Carbon's dark theme (`--color-bg` #161616) is tuned for high contrast by design — preserve that intent and re-verify `--color-text-muted` against every surface variant with `contrast_check.py` rather than lightening it for "softness."
- Because there is no radius or shadow signaling interactivity, focus and hover states rely entirely on the `--underline-active` rule and fill changes — make sure focus-visible always shows a 2px outline independent of hover-only cues.
- Dense 2x-grid tables need generous row height and clear zebra striping (`--grid-tint`) so scanning rows doesn't require color perception alone.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every corner sharp — `--radius-sm/md/lg` are all 0px; treat any curve as a bug.
- ✅ Signal active/selected state with the 2px `--underline-active` rule, not with fills or radius.
- ✅ Lay content out on the strict 2x spacing grid (`--space-*` values are all multiples of 4/8).

## Don't

- ❌ Round any corner "for friendliness" — it breaks the entire visual language instantly.
- ❌ Add soft ambient shadows beyond the flat `--shadow-sm/md/lg` triplet.
- ❌ Rely on IBM Plex Sans alone for numeric/tabular data — use `--font-mono` (IBM Plex Mono) for figures and code.

## Don't confuse this with…

*Commonly confused neighbors:* ant-design, polaris.

vs ant-design: Ant Design keeps small 4–8px radii and soft shadows for a friendlier enterprise feel; Carbon is uncompromisingly square with zero radius. vs polaris: Polaris uses generous rounding (`--radius-lg` 12px) and warm neutral surfaces; Carbon is sharp-cornered and cooler/darker by default.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
