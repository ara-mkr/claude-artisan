# Material Design 3 / Material You — Implementation Spec

*Aliases:* M3, Material You, M3 Expressive  
*Slug:* `material-design-3` · *Category:* flat-platform · *Era:* 2021–present

**Origin.** Google; Material You (2021), Material 3 Expressive (Google I/O 2025).

**Reference example.** Android 12+; Google apps; Wear OS 5.

## Signature move(s)

Google's token-driven system: dynamic color (tonal palettes, optionally from wallpaper), large rounded shapes with shape-morphing, systematic elevation, and expressive spring-physics motion. Follow the M3 token spec rather than approximating.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dynamic color extracted from user wallpaper (tonal palettes)
- Larger rounded shapes, shape-morphing tokens
- Expressive spring-physics motion
- Design tokens as single source of truth; updated components

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/material-design-3.css`.)

```css
/* Material Design 3 / Material You — design tokens (generated from style_catalog.json) */
/* 2021–present | Google; Material You (2021), Material 3 Expressive (Google I/O 2025). */
:root {
  /* color */
  --color-bg: #fef7ff;
  --color-surface: #fef7ff;
  --color-surface-container: #f3edf7;
  --color-surface-variant: #e7e0ec;
  --color-text: #1d1b20;
  --color-text-muted: #49454f;
  --color-primary: #6750a4;
  --color-on-primary: #ffffff;
  --color-secondary: #625b71;
  --color-tertiary: #7d5260;
  --color-outline: #79747e;
  --color-error: #b3261e;
  /* radius */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-e1: 0 1px 2px rgba(0,0,0,0.30), 0 1px 3px 1px rgba(0,0,0,0.15);
  --shadow-e2: 0 1px 2px rgba(0,0,0,0.30), 0 2px 6px 2px rgba(0,0,0,0.15);
  --shadow-e3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.30);
  /* font */
  --font-sans: 'Roboto', 'Roboto Flex', system-ui, sans-serif;
  --font-display: 'Roboto Flex', 'Roboto', system-ui, sans-serif;
  --font-mono: 'Roboto Mono', monospace;
  /* text */
  --text-label-sm: 0.6875rem;
  --text-label-md: 0.75rem;
  --text-body-md: 0.875rem;
  --text-body-lg: 1rem;
  --text-title-md: 1rem;
  --text-title-lg: 1.375rem;
  --text-headline-md: 1.75rem;
  --text-headline-lg: 2rem;
  --text-display-md: 2.8125rem;
  --text-display-lg: 3.5625rem;
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
  --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --ease-spatial-expressive: cubic-bezier(0.38, 1.21, 0.22, 1);
  /* extra (signature gradients, composite borders, filters) */
  --state-hover: rgba(103,80,164,0.08);
  --state-pressed: rgba(103,80,164,0.12);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Material Design 3 / Material You — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef7ff",
        "surface": "#fef7ff",
        "surface-container": "#f3edf7",
        "surface-variant": "#e7e0ec",
        "text": "#1d1b20",
        "text-muted": "#49454f",
        "primary": "#6750a4",
        "on-primary": "#ffffff",
        "secondary": "#625b71",
        "tertiary": "#7d5260",
        "outline": "#79747e",
        "error": "#b3261e",
      },
      borderRadius: {
        "xs": "4px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "e1": "0 1px 2px rgba(0,0,0,0.30), 0 1px 3px 1px rgba(0,0,0,0.15)",
        "e2": "0 1px 2px rgba(0,0,0,0.30), 0 2px 6px 2px rgba(0,0,0,0.15)",
        "e3": "0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.30)",
      },
      fontFamily: {
        "sans": ["'Roboto'", "'Roboto Flex'", "system-ui", "sans-serif"],
        "display": ["'Roboto Flex'", "'Roboto'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "monospace"],
      },
      fontSize: {
        "label-sm": "0.6875rem",
        "label-md": "0.75rem",
        "body-md": "0.875rem",
        "body-lg": "1rem",
        "title-md": "1rem",
        "title-lg": "1.375rem",
        "headline-md": "1.75rem",
        "headline-lg": "2rem",
        "display-md": "2.8125rem",
        "display-lg": "3.5625rem",
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
        "emphasized": "cubic-bezier(0.2, 0, 0, 1)",
        "spatial-expressive": "cubic-bezier(0.38, 1.21, 0.22, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --state-hover: rgba(103,80,164,0.08);
//   --state-pressed: rgba(103,80,164,0.12);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Filled/tonal/elevated/outlined/text variants; state layers (hover 8%, pressed 12% overlay); pill radius; ripple on press. |
| **Input** | Filled or outlined text field with a floating label and a supporting-text/error slot. |
| **Card** | Elevated (`--shadow-e1`) or filled/outlined; 12–16px radius; state layer on interactive cards. |
| **Nav** | Navigation bar/rail/drawer with a pill 'active indicator' behind the selected item. |
| **Modal** | Dialog at higher elevation with emphasized-motion enter; full-screen dialog on mobile. |
| **Table** | Data table with 56px rows, dividers, and hover state layers; sortable headers. |
| **Tooltip** | Plain or rich tooltip; short, on the surface color. |
| **Badge** | Small/large badge on nav icons; use `--color-error` for count badges. |
| **Toggle** | M3 Switch with an icon in the handle when on; ripple + spring. |
| **Loading** | Circular or linear determinate/indeterminate progress in `--color-primary`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Use the tonal system's on-color roles (on-primary, on-surface) so contrast is guaranteed by construction.
- State layers must be visible on all backgrounds; don't remove them.
- Respect reduced-motion for the expressive spring transitions.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Theme via design tokens, not hardcoded hex.
- ✅ Use the 3 tonal palettes (primary/secondary/tertiary) + surfaces coherently.
- ✅ Apply shape and motion tokens for the 'expressive' feel.

## Don't

- ❌ Mix M2 shadows/components with M3 — pick one version.
- ❌ Hardcode colors instead of using role tokens.
- ❌ Skip state layers, making touch targets feel dead.

## Don't confuse this with…

*Commonly confused neighbors:* material-design, fluent-design-2.

vs Material 2: M3/Material You adds dynamic color, larger rounded shapes, tonal surfaces and (2025) shape-morphing + spring motion; M2 is flatter, more shadow-driven, fixed-color. vs Fluent 2: Fluent uses Mica/Acrylic materials and Segoe; Material uses tonal elevation and Roboto.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
