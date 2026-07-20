# Low Poly — Implementation Spec

*Aliases:* lowpoly, faceted 3D  
*Slug:* `low-poly` · *Category:* texture · *Era:* 2012–present

**Origin.** Stylized faceted 3D from real-time graphics constraints.

**Reference example.** Indie game art; low-poly hero backgrounds.

## Signature move(s)

Surfaces are cut into visible triangular facets using `clip-path: polygon(...)` (see `--facet-corner`) so a single flat-color element reads as an angular, faceted crystal rather than a smooth rounded shape. Facets alternate between a base color and a darker `--color-facet-dark` to fake flat per-triangle shading from one fixed light direction, exactly like unlit low-poly 3D renders — never a smooth gradient across the whole shape.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Visible triangular facets and flat shading
- Crystalline geometric forms
- Gradient facet lighting
- Stylized, game-adjacent

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/low-poly.css`.)

```css
/* Low Poly — design tokens (generated from style_catalog.json) */
/* 2012–present | Stylized faceted 3D from real-time graphics constraints. */
:root {
  /* color */
  --color-bg: #1b2a4a;
  --color-surface: #24365c;
  --color-surface-strong: #2f4570;
  --color-border: #3c5480;
  --color-text: #eef3fb;
  --color-text-muted: #aebedc;
  --color-primary: #ff7f5c;
  --color-accent: #46e0c8;
  --color-facet-dark: #16223c;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.35);
  --shadow-md: 0 8px 20px rgba(0,0,0,0.4);
  --shadow-lg: 0 18px 40px rgba(0,0,0,0.45);
  /* font */
  --font-sans: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --facet-corner: polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 70%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Low Poly — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1b2a4a",
        "surface": "#24365c",
        "surface-strong": "#2f4570",
        "border": "#3c5480",
        "text": "#eef3fb",
        "text-muted": "#aebedc",
        "primary": "#ff7f5c",
        "accent": "#46e0c8",
        "facet-dark": "#16223c",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.35)",
        "md": "0 8px 20px rgba(0,0,0,0.4)",
        "lg": "0 18px 40px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Rajdhani'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --facet-corner: polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 70%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rectangular body with one corner cut by `--facet-corner`, filled `--color-primary`; the clipped corner reveals `--color-facet-dark` behind it as a "shadow facet." Hover brightens the fill, active swaps fill/facet-dark for a pressed-in read. |
| **Input** | Un-faceted rectangle (fields stay legible/rectangular), `--color-surface` fill, `--color-border` outline; focus ring in `--color-accent`. |
| **Card** | One or two corners clipped via `--facet-corner`, `--shadow-md`, `--color-facet-dark` sliver visible at the cut edge to sell depth. |
| **Nav** | Bar with a single large facet cut at one end bleeding toward the logo, rest of the bar flat. |
| **Modal** | Faceted top corner only (keep body rectangular for content), `--shadow-lg`. |
| **Table** | Fully rectangular — facets on data rows would obscure cell alignment; reserve faceting for chrome only. |
| **Tooltip** | Small triangular "speech" tail via clip-path pointing at its anchor, otherwise flat chip. |
| **Badge** | Faceted pill corner in `--color-accent` marking it as a distinct crystalline chip. |
| **Toggle** | Track rectangular; knob has one clipped corner so it visibly differs in "facing direction" on/off. |
| **Loading** | Rotating triangular facet shapes (three or four polygon divs cycling `--color-primary`/`--color-facet-dark`) instead of a circular spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never clip interactive hit areas with `clip-path` in a way that shrinks the clickable region below the visual shape — keep the real click target rectangular and layer the facet as a visual-only pseudo-element.
- `--color-facet-dark` (`#16223c`) against `--color-bg` (`#1b2a4a`) is a near-invisible seam by design — never place text in that sliver; verify any text elsewhere with `contrast_check.py`.
- Keep faceting off dense text containers (tables, forms, paragraphs) entirely — reserve it for chrome, illustration, and single-word buttons/badges.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the facet-cut angle and corner consistent across all faceted elements.
- ✅ Use `--color-facet-dark` only as a shadow sliver, never as a primary fill.
- ✅ Reserve full faceting for hero/decorative elements; keep dense-content components rectangular.

## Don't

- ❌ Shrink the actual click target to match a clipped visual corner.
- ❌ Facet every element uniformly — it should read as occasional crystalline accents, not wallpaper.
- ❌ Use smooth gradients across a whole faceted shape — shading must be flat, per-facet.

## Don't confuse this with…

*Commonly confused neighbors:* isometric, voxel.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
