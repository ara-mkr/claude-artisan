# Brutalist Minimalism — Implementation Spec

*Aliases:* minimal brutalism  
*Slug:* `editorial-brutalist-minimal` · *Category:* minimal-organic · *Era:* 2018–present

**Origin.** Cross of brutalism's honesty with minimalism's restraint.

**Reference example.** Fashion/agency portfolios; type-foundry sites.

## Signature move(s)

Oversized type set against total structural silence: massive `--text-4xl`/`--text-5xl` display sizes on zero-radius, zero-shadow surfaces separated only by a `--hairline` rule, with small `--tag-font` monospace labels acting as the only ornament allowed. Nothing floats, nothing glows — hierarchy comes entirely from scale and whitespace.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Big type, hairline rules, monospace accents
- Lots of whitespace, few colors
- Exposed structure without decoration
- Cold, confident, editorial

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/editorial-brutalist-minimal.css`.)

```css
/* Brutalist Minimalism — design tokens (generated from style_catalog.json) */
/* 2018–present | Cross of brutalism's honesty with minimalism's restraint. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-strong: #f2f2f0;
  --color-border: #111111;
  --color-text: #0a0a0a;
  --color-text-muted: #6b6b6b;
  --color-primary: #0a0a0a;
  --color-accent: #ff3b1f;
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
  --font-sans: 'Helvetica Neue', 'Arial', sans-serif;
  --font-display: 'Helvetica Neue', 'Arial', sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 4rem;
  --text-5xl: 5.5rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 40px;
  --space-12: 64px;
  --space-16: 96px;
  --space-24: 144px;
  /* ease */
  --ease-standard: linear;
  /* extra (signature hairline + tag font) */
  --hairline: 1px solid var(--color-border);
  --tag-font: 700 var(--text-xs) var(--font-mono);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Brutalist Minimalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f2f2f0",
        "border": "#111111",
        "text": "#0a0a0a",
        "text-muted": "#6b6b6b",
        "primary": "#0a0a0a",
        "accent": "#ff3b1f",
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
        "sans": ["'Helvetica Neue'", "'Arial'", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Arial'", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "4rem",
        "5xl": "5.5rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "40px",
        "12": "64px",
        "16": "96px",
        "24": "144px",
      },
      transitionTimingFunction: {
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only. Add as custom properties:
//   --hairline: 1px solid var(--color-border);
//   --tag-font: 700 var(--text-xs) var(--font-mono);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Zero radius, solid `--color-primary` fill or transparent with `--hairline` border; no shadow, invert colors on hover instead of lifting. |
| **Input** | `--hairline` bottom border only, `--color-bg` fill, no radius; focus swaps border to `--color-accent`. |
| **Card** | Just a `--hairline` divider between content blocks — avoid boxed "cards" entirely where possible; if used, zero radius, zero shadow. |
| **Nav** | Oversized wordmark in `--font-display`, `--hairline` bottom rule, nav items styled with `--tag-font` monospace labels. |
| **Modal** | Full-bleed or edge-to-edge panel, zero radius, `--hairline` border, no scrim blur — a hard-edged overlay. |
| **Table** | `--hairline` row dividers, monospace `--tag-font` for numeric columns, no zebra striping. |
| **Tooltip** | Minimal `--tag-font` label with `--hairline` border, no shadow. |
| **Badge** | `--tag-font` monospace uppercase tag with `--hairline` border, transparent fill. |
| **Toggle** | Square-cornered track (not pill), `--color-accent` fill when on, hairline outline when off. |
| **Loading** | A `--hairline`-thickness bar filling linearly (`--ease-standard: linear`), no easing, no spinner curves. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Oversized display type (`--text-4xl`/`5xl`) at tight `line-height` can clip descenders — verify line-height ≥1.05 minimum and test at real viewport widths.
- Because shadows and radius are entirely absent, focus states depend entirely on the `--hairline`/`--color-accent` border swap — make sure that swap is visually obvious (2px minimum) and never removed.
- `--color-text-muted` gray must clear 4.5:1 against `--color-bg` white — verify explicitly since a "cold, confident" gray often skews too light.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let type scale alone create hierarchy — resist the urge to add boxes or shadows for emphasis.
- ✅ Use `--tag-font` monospace labels as the only decorative flourish permitted.
- ✅ Keep spacing generous and consistent (`--space-8` and up) between major sections.

## Don't

- ❌ Add any border-radius, shadow, or gradient — the flatness is the entire point.
- ❌ Default to boxed "card" containers when a hairline divider would do.
- ❌ Use ease-out/spring transitions — stick to `linear` for the cold, mechanical feel.

## Don't confuse this with…

*Commonly confused neighbors:* brutalism, minimalism, swiss-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
