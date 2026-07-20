# Base Web — Implementation Spec

*Aliases:* Base, Uber Base
*Slug:* `base-web` · *Category:* flat-platform · *Era:* 2018–present

**Origin.** Uber.

**Reference example.** Uber web products.

## Signature move(s)

A neutral, highly-themeable primitive set: near-flat surfaces (`--radius-sm/md/lg` stay small and consistent, 4/8/12px), a single confident brand blue (`--color-primary`) plus a functional green accent (`--color-accent`), and a signature "seam" underline (`--extra-seam-underline`) used to mark active navigation state instead of pills or backgrounds — everything is built to be re-themed by swapping tokens, not by changing structure.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Highly themeable primitives
- Neutral, functional, mobility-app roots
- Strong theming tokens
- Accessible components

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/base-web.css`.)

```css
/* Base Web — design tokens (generated from style_catalog.json) */
/* 2018–present | Uber. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-strong: #f6f6f6;
  --color-border: #e2e2e2;
  --color-text: #000000;
  --color-text-muted: #5e5e5e;
  --color-primary: #276ef1;
  --color-accent: #06c167;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 24px rgba(0,0,0,0.12);
  /* font */
  --font-sans: 'Uber Move', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Uber Mono', ui-monospace, monospace;
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
  /* extra */
  --seam: var(--color-primary);
  --seam-underline: 3px solid var(--seam);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Base Web — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f6f6f6",
        "border": "#e2e2e2",
        "text": "#000000",
        "text-muted": "#5e5e5e",
        "primary": "#276ef1",
        "accent": "#06c167",
      },
      borderRadius: {
        "sm": "4px", "md": "8px", "lg": "12px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.08)",
        "md": "0 4px 12px rgba(0,0,0,0.1)",
        "lg": "0 10px 24px rgba(0,0,0,0.12)",
      },
      fontFamily: {
        "sans": ["'Uber Move'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Uber Move'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "mono": ["'Uber Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Seam underline token is CSS-only:
//   --seam: var(--color-primary);
//   --seam-underline: 3px solid var(--seam);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill, `--radius-md`, `--shadow-sm`; secondary variant is outline-only using `--color-border`. Active nav-style buttons can use `--seam-underline` instead of a filled background. |
| **Input** | `--color-surface`, 1px `--color-border`, `--radius-sm`; focus swaps border to `--color-primary` at 2px — no glow, just a clean color/weight change. |
| **Card** | `--color-surface`, `--radius-lg`, `--shadow-sm`; hover elevates to `--shadow-md` only for genuinely clickable cards. |
| **Nav** | Flat `--color-surface` bar; the active tab is marked purely by `--seam-underline` beneath the label, not a background pill. |
| **Modal** | `--color-surface`, `--radius-lg`, `--shadow-lg`, centered over a flat dark scrim. |
| **Table** | Flat rows on `--color-surface`, zebra via `--color-surface-strong`, 1px `--color-border` rules; sortable column headers use `--seam-underline` when active. |
| **Tooltip** | Small dark chip, `--radius-sm`, `--shadow-sm`, no border. |
| **Badge** | Solid `--color-accent` (success/positive) or `--color-primary` (informational) pill, `--radius-pill`. |
| **Toggle** | Track/knob pair using `--color-accent` for "on" — functional green reserved specifically for confirmed/active states. |
| **Loading** | Thin `--seam-underline`-colored progress bar or a simple circular spinner in `--color-primary` — no decorative flourish. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- The `--seam-underline` active-state indicator must never be the *only* signal of selection — pair it with `aria-current`/`aria-selected` and a text-weight or color change so it doesn't rely on a 3px line alone.
- `--color-text-muted` (#5e5e5e) on `--color-surface-strong` (#f6f6f6) is borderline — verify with `contrast_check.py` before shipping secondary text at small sizes.
- Because this system is built to be re-themed, run `contrast_check.py` again after any brand-color swap — the neutral scaffolding is safe, but a swapped `--color-primary`/`--color-accent` pair is not guaranteed to be.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the radius scale small and consistent (4/8/12px) across every component — that consistency is what makes it feel "systemic."
- ✅ Reserve `--color-accent` green specifically for positive/success/on states, not decoration.
- ✅ Use the seam-underline pattern consistently for any "currently active" indicator (nav, tabs, sortable headers).

## Don't

- ❌ Introduce large border-radius or heavy shadows — this system stays deliberately understated.
- ❌ Use `--seam-underline` as the sole accessible indicator of state — always pair with an ARIA attribute.
- ❌ Mix in a second brand accent color beyond `--color-primary`/`--color-accent`.

## Don't confuse this with…

*Commonly confused neighbors:* carbon-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
