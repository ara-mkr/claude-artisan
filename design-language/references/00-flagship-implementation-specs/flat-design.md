# Flat Design — Implementation Spec

*Aliases:* flat UI  
*Slug:* `flat-design` · *Category:* flat-platform · *Era:* 2012–2016

**Origin.** Microsoft Metro (2010) and Apple iOS 7 (2013) cemented it industry-wide.

**Reference example.** iOS 7; Windows Phone; early Google/Microsoft rebrands.

## Signature move(s)

Pure flat color with no shadows, gradients, or texture. Simple geometric shapes; typography and color blocking carry all the hierarchy. Bold, clear, generous whitespace.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- No shadows, gradients, or textures — pure flat color
- Simple geometric shapes and iconography
- Bold color blocking and generous whitespace
- Typography and color carry the hierarchy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/flat-design.css`.)

```css
/* Flat Design — design tokens (generated from style_catalog.json) */
/* 2012–2016 | Microsoft Metro (2010) and Apple iOS 7 (2013) cemented it industry-wide. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #f4f5f7;
  --color-surface-2: #e9ecef;
  --color-text: #212529;
  --color-text-muted: #6c757d;
  --color-primary: #2d8cff;
  --color-accent: #ff5a5f;
  --color-success: #2ecc71;
  --color-warning: #f1c40f;
  --color-danger: #e74c3c;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md: 0 2px 4px rgba(0,0,0,0.08);
  /* font */
  --font-sans: 'Helvetica Neue', Arial, system-ui, sans-serif;
  --font-display: 'Helvetica Neue', Arial, sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Flat Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f4f5f7",
        "surface-2": "#e9ecef",
        "text": "#212529",
        "text-muted": "#6c757d",
        "primary": "#2d8cff",
        "accent": "#ff5a5f",
        "success": "#2ecc71",
        "warning": "#f1c40f",
        "danger": "#e74c3c",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "none": "none",
        "sm": "0 1px 2px rgba(0,0,0,0.06)",
        "md": "0 2px 4px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "system-ui", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Solid flat fill, no shadow, small radius; hover = a flat darker shade; disabled = desaturated. |
| **Input** | Flat field with a 1–2px solid border; focus changes border color (no glow). |
| **Card** | Flat colored block separated by whitespace or a hairline — not by shadow. |
| **Nav** | Solid color bar, flat icons, active item marked by a color block or underline. |
| **Modal** | Flat panel with a plain semi-opaque scrim. |
| **Table** | Hairline rules or zebra fills; flat header band. |
| **Tooltip** | Solid flat rectangle, small radius. |
| **Badge** | Flat colored pill/rectangle. |
| **Toggle** | Flat two-state pill, color = state. |
| **Loading** | Flat progress bar or simple spinner in the accent color. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Flat's biggest risk is invisible affordances — make buttons obviously clickable via color/shape, not subtlety.
- Ensure sufficient contrast between adjacent flat color blocks (borders on same-lightness neighbors).
- Don't rely on color alone for state; add text/icons.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let whitespace and type scale do the work.
- ✅ Use a small, disciplined palette with clear accent.
- ✅ Keep iconography simple and geometric.

## Don't

- ❌ Make everything the same weight so nothing reads as interactive.
- ❌ Add fake single shadows and call it flat (that's flat 2.0).
- ❌ Use low-contrast pastel-on-pastel blocks.

## Don't confuse this with…

*Commonly confused neighbors:* material-design, minimalism, metro.

vs minimalism: flat is a *surface treatment* (no depth) that can still be colorful and busy; minimalism is a *reduction philosophy* (few elements) that may use depth. vs Material: Material adds systematic elevation/shadow — that's flat 2.0, not pure flat.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
