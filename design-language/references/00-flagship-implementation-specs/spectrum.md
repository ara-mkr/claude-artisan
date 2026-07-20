# Adobe Spectrum — Implementation Spec

*Aliases:* Spectrum  
*Slug:* `spectrum` · *Category:* flat-platform · *Era:* 2019–present

**Origin.** Adobe.

**Reference example.** Adobe Creative Cloud web apps.

## Signature move(s)

Neutral canvas-friendly chrome that stays out of the way of creative content: a soft `--color-primary` blue reserved for actions, generous `--radius-md`/`--radius-lg` on interactive surfaces, and a precise dual-ring `--shadow-focus-ring` (white inner ring + colored outer ring) so focus states read clearly even over busy creative canvases.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Creative-tool oriented, neutral canvas-friendly
- Adobe Clean typeface
- Careful density scales (medium/large)
- Strong theming + accessibility

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/spectrum.css`.)

```css
/* Adobe Spectrum — design tokens (generated from style_catalog.json) */
/* 2019–present | Adobe. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #f8f8f8;
  --color-surface-strong: #eaeaea;
  --color-border: #d5d5d5;
  --color-text: #1f1f1f;
  --color-text-muted: #5a5a5a;
  --color-primary: #1473e6;
  --color-accent: #9256d9;
  --color-negative: #e34850;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
  --shadow-focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px var(--color-primary);
  /* font */
  --font-sans: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif;
  --font-display: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif;
  --font-mono: 'Source Code Pro', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.15, 0, 0.15, 1);
  /* extra */
  --focus-ring: var(--shadow-focus-ring);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Adobe Spectrum — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f8f8f8",
        "surface-strong": "#eaeaea",
        "border": "#d5d5d5",
        "text": "#1f1f1f",
        "text-muted": "#5a5a5a",
        "primary": "#1473e6",
        "accent": "#9256d9",
        "negative": "#e34850",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.10)",
        "md": "0 2px 8px rgba(0,0,0,0.12)",
        "lg": "0 8px 24px rgba(0,0,0,0.16)",
        "focus-ring": "0 0 0 2px #ffffff, 0 0 0 4px #1473e6",
      },
      fontFamily: {
        "sans": ["'Adobe Clean'", "'Source Sans Pro'", "system-ui", "sans-serif"],
        "display": ["'Adobe Clean'", "'Source Sans Pro'", "system-ui", "sans-serif"],
        "mono": ["'Source Code Pro'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.15, 0, 0.15, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, solid `--color-primary` fill for primary, `--color-surface` + border for secondary; `--shadow-focus-ring` on keyboard focus. |
| **Input** | `--radius-sm`, 1px `--color-border`, `--color-surface` fill; focus applies `--shadow-focus-ring` around the whole field. |
| **Card** | `--color-surface` panel on `--color-bg`, `--radius-lg`, `--shadow-sm` — kept quiet so creative content/thumbnails inside stay the focus. |
| **Nav** | Slim `--color-surface-strong` sidebar or top bar, icon-first with text labels revealed on hover/expand. |
| **Modal** | `--color-bg`, `--radius-lg`, `--shadow-lg`; scrim behind is neutral gray, never colored, to avoid clashing with creative content. |
| **Table** | `--color-surface` header row, hairline `--color-border` dividers, comfortable density option via `--space-3`/`--space-4` row padding toggle. |
| **Tooltip** | Dark `--color-text` chip, `--radius-sm`, `--shadow-md`; appears after a deliberate hover delay to avoid noise over dense toolbars. |
| **Badge** | `--radius-pill`, tinted fill from `--color-accent`/`--color-negative` at low opacity with full-opacity text. |
| **Toggle** | `--radius-pill` track, smooth `--ease-standard` slide, `--color-primary` on-state. |
| **Loading** | Circular indeterminate spinner in `--color-primary`, or a thin `--color-primary` progress bar for determinate operations. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Because chrome is intentionally neutral/quiet, verify `--color-text-muted` on `--color-surface` still clears 4.5:1 — low-contrast secondary text is an easy regression in this style.
- The dual-ring `--shadow-focus-ring` needs the white inner ring to survive on dark themes too — swap it to match `--color-bg` per theme, not a hardcoded white.
- Icon-only toolbar buttons (common in this style) require `aria-label`s; tooltips alone are not sufficient for screen readers.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the UI chrome neutral so it doesn't compete with user-generated creative content.
- ✅ Use the dual-ring focus treatment consistently across every focusable element.
- ✅ Offer a compact/comfortable density toggle for data-heavy tables and lists.

## Don't

- ❌ Introduce saturated background colors outside of `--color-primary`/`--color-accent` accents.
- ❌ Skip the inner white ring in the focus style — a single colored ring is easy to miss on busy canvases.
- ❌ Overload toolbars with unlabeled icon buttons.

## Don't confuse this with…

*Commonly confused neighbors:* carbon-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
