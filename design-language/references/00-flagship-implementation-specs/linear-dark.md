# Linear Style — Implementation Spec

*Aliases:* Linear app style, product dark gradient
*Slug:* `linear-dark` · *Category:* flat-platform · *Era:* 2020–present

**Origin.** Linear (issue tracker) product aesthetic.

**Reference example.** Linear.app; many 2020s dev-tool sites.

## Signature move(s)

A near-black canvas with a single soft radial glow bleeding down from the top (`--bg-image`: `radial-gradient(60% 45% at 50% -5%, rgba(94,106,210,0.18) 0%, transparent 60%)`), hairline borders at 9% white opacity, and an indigo `--color-primary` that reappears as a diffuse `--color-glow` behind focused/active elements. The glow is always top-anchored and always the same indigo — it's the one splash of color in an otherwise monochrome system.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dark UI with subtle purple/blue gradients
- Crisp small type, hairline borders
- Glow accents, fast micro-interactions
- Refined, fast, premium SaaS

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/linear-dark.css`.)

```css
/* Linear Style — design tokens (generated from style_catalog.json) */
/* 2020–present | Linear (issue tracker) product aesthetic. */
:root {
  /* color */
  --color-bg: #08090a;
  --color-surface: #101113;
  --color-surface-strong: #17181b;
  --color-border: rgba(255,255,255,0.09);
  --color-text: #f7f8f8;
  --color-text-muted: #8a8f98;
  --color-primary: #5e6ad2;
  --color-accent: #4ea7fc;
  --color-glow: rgba(94,106,210,0.5);
  /* radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.5);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.6);
  /* font (Linear runs a slightly compressed type scale) */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;
  --font-mono: 'Berkeley Mono', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.9375rem;
  --text-lg: 1.0625rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.625rem;
  --text-3xl: 2.125rem;
  --text-4xl: 2.75rem;
  --text-5xl: 3.75rem;
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
  /* extra (signature top-anchored glow) */
  --bg-image: radial-gradient(60% 45% at 50% -5%, rgba(94,106,210,0.18) 0%, transparent 60%), var(--color-bg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Linear Style — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#08090a",
        "surface": "#101113",
        "surface-strong": "#17181b",
        "border": "rgba(255,255,255,0.09)",
        "text": "#f7f8f8",
        "text-muted": "#8a8f98",
        "primary": "#5e6ad2",
        "accent": "#4ea7fc",
        "glow": "rgba(94,106,210,0.5)",
      },
      borderRadius: {
        "sm": "6px", "md": "8px", "lg": "12px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "md": "0 4px 16px rgba(0,0,0,0.5)",
        "lg": "0 16px 40px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
        "mono": ["'Berkeley Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.8125rem", "base": "0.9375rem", "lg": "1.0625rem",
        "xl": "1.25rem", "2xl": "1.625rem", "3xl": "2.125rem", "4xl": "2.75rem", "5xl": "3.75rem",
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

// The top-anchored radial glow is CSS-only. Add as a custom property applied
// to the page/body background:
//   --bg-image: radial-gradient(60% 45% at 50% -5%, rgba(94,106,210,0.18) 0%, transparent 60%), var(--color-bg);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, `--color-primary` indigo fill for primary; on hover/focus add a diffuse `--color-glow` box-shadow bleed behind it. Ghost variant uses `--color-border` hairline only. |
| **Input** | `--color-surface` fill, `--color-border` hairline, `--radius-md`; focus swaps to `--color-accent` border plus a soft `--color-glow` ring. |
| **Card** | `--color-surface`, `--color-border` hairline, `--shadow-sm`, `--radius-lg`; sits directly on the glowing `--bg-image` canvas so the ambient glow reads through negative space. |
| **Nav** | `--color-bg` bar, single bottom hairline, small `--text-sm` labels — deliberately quiet so the glow stays the visual anchor. |
| **Modal** | `--color-surface-strong` panel, `--shadow-lg`, centered above the radial glow which intensifies slightly behind it. |
| **Table** | Hairline row dividers, `--color-surface-strong` header, tabular numerals, `--text-sm` throughout for density. |
| **Tooltip** | `--color-surface-strong` chip, hairline border, `--shadow-md`, tight `--text-xs` label. |
| **Badge** | `--radius-pill`, `--color-surface-strong` fill, colored dot (`--color-primary`/`--color-accent`) for status — never a full-saturation badge fill. |
| **Toggle** | `--color-surface-strong` track, `--color-primary` fill + `--color-glow` bleed when on. |
| **Loading** | Thin `--color-primary` spinner arc with a faint `--color-glow` trail, or a shimmering `--color-surface-strong` skeleton. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` (#8a8f98) on `--color-bg`/`--color-surface` is close to the AA threshold for small UI text — verify with `contrast_check.py`, especially for `--text-xs` labels.
- The condensed type scale (`--text-base: 0.9375rem`) trims default sizes below 16px — ensure body copy never drops smaller than `--text-sm` and respect user zoom/font-size overrides.
- Glow effects (`--color-glow`, `--bg-image`) must never be the only signal for focus or active state — always pair with a visible border or fill change for users with reduced contrast sensitivity or `prefers-reduced-motion`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the ambient radial glow singular and top-anchored — one glow source per screen, not scattered accents.
- ✅ Use hairline borders (`rgba(255,255,255,0.09)`) as the primary structural device between the three tone steps.
- ✅ Reserve indigo/blue saturation for interactive and focus states only.

## Don't

- ❌ Add multiple competing glow sources or colors — Linear's restraint depends on a single indigo accent.
- ❌ Increase border opacity/weight beyond a hairline — heavier borders read as a different, boxier style.
- ❌ Drop below the condensed but still-accessible type scale — smaller than `--text-xs` breaks legibility.

## Don't confuse this with…

*Commonly confused neighbors:* dark-mode, bento-grid, geist.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
