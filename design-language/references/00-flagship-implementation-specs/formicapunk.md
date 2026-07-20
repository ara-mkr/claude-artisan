# Formicapunk — Implementation Spec

*Aliases:* 1980s corporate futurism
*Slug:* `formicapunk` · *Category:* retrofuturism · *Era:* 2010s (evokes 1980s)

**Origin.** Neon-lit 1980s corporate/consumer futurism.

**Reference example.** Miami Vice; 80s corporate design.

## Signature move(s)

A hairline neon-gradient edge — `--ease-neon-edge`, a horizontal blend from `--color-primary` to `--color-accent` — laid across the top of every raised surface, paired with sharp near-square corners and a soft magenta/teal double-glow shadow. The effect reads like a lit Formica countertop or a chrome-and-glass tower catching sunset light: crisp geometry, glowing seams.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Formica, neon, geometric 80s corporate style
- Miami-Vice pastels + chrome
- Grid patterns, glass towers
- Optimistic 80s consumer future

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/formicapunk.css`.)

```css
/* Formicapunk — design tokens (generated from style_catalog.json) */
/* 2010s (evokes 1980s) | Neon-lit 1980s corporate/consumer futurism. */
:root {
  /* color */
  --color-bg: #170f2e;
  --color-surface: #241a44;
  --color-surface-strong: #2e2158;
  --color-border: #5b4b96;
  --color-text: #f4eefe;
  --color-text-muted: #b6a7dd;
  --color-primary: #ff5fa2;
  --color-accent: #2fe6d8;
  --color-chrome: #c9c3e0;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 0 1px rgba(255,95,162,0.3), 0 2px 8px rgba(0,0,0,0.4);
  --shadow-md: 0 0 18px rgba(255,95,162,0.35), 0 8px 24px rgba(0,0,0,0.5);
  --shadow-lg: 0 0 32px rgba(47,230,216,0.3), 0 16px 40px rgba(0,0,0,0.55);
  /* font */
  --font-sans: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif;
  --font-display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif;
  --font-mono: 'Space Mono', ui-monospace, monospace;
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
  /* extra (signature gradients, composite borders) */
  --bg-image: linear-gradient(180deg, #170f2e 0%, #291a4e 55%, #170f2e 100%);
  --neon-edge: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Formicapunk — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#170f2e",
        "surface": "#241a44",
        "surface-strong": "#2e2158",
        "border": "#5b4b96",
        "text": "#f4eefe",
        "text-muted": "#b6a7dd",
        "primary": "#ff5fa2",
        "accent": "#2fe6d8",
        "chrome": "#c9c3e0",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 1px rgba(255,95,162,0.3), 0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 0 18px rgba(255,95,162,0.35), 0 8px 24px rgba(0,0,0,0.5)",
        "lg": "0 0 32px rgba(47,230,216,0.3), 0 16px 40px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Eurostile'", "'Avenir Next'", "'Century Gothic'", "sans-serif"],
        "display": ["'Eurostile Extended'", "'Bank Gothic'", "'Arial Narrow'", "sans-serif"],
        "mono": ["'Space Mono'", "ui-monospace", "monospace"],
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

// Signature `extra` tokens are CSS-only:
//   --bg-image: linear-gradient(180deg, #170f2e 0%, #291a4e 55%, #170f2e 100%);
//   --neon-edge: linear-gradient(90deg, var(--color-primary), var(--color-accent));
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Sharp `--radius-sm` rectangle, chrome `--color-chrome` fill on secondary, `--neon-edge` 2px top border on primary, `--shadow-sm` glow; hover intensifies to `--shadow-md`. |
| **Input** | Flat `--color-surface` fill, 1px `--color-border`, focus swaps border to `--neon-edge` gradient via a wrapping div (borders can't gradient natively). |
| **Card** | `--color-surface` panel, `--radius-md`, top edge is a 3px `--neon-edge` bar, `--shadow-md` double-hue glow beneath. |
| **Nav** | Full-width bar in `--color-surface-strong` with a `--neon-edge` bottom hairline; grid-pattern background at low opacity behind logo zone. |
| **Modal** | `--color-surface-strong`, `--radius-lg`, `--shadow-lg` (teal-dominant glow), neon-edge top bar doubled in thickness for emphasis. |
| **Table** | Header row gets the neon-edge underline; body rows alternate `--color-surface`/`--color-bg` with `--color-chrome` divider lines. |
| **Tooltip** | Small chrome-bordered chip, `--radius-sm`, `--shadow-sm`, arrow tinted `--color-primary`. |
| **Badge** | Pill or `--radius-sm` chip filled solid `--color-primary` or `--color-accent`, chrome text for neutral status. |
| **Toggle** | Track in `--color-surface-strong` with neon-edge outline when on; knob in `--color-chrome`. |
| **Loading** | Horizontal neon-edge gradient bar sweeping left-to-right (progress), or a chrome grid-pulse skeleton. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- The neon glow shadows are decorative, not focus indicators — pair every focusable element with a solid `--color-accent` outline at 2px minimum so keyboard users get a real target.
- `--color-text-muted` (#b6a7dd) on `--color-bg` (#170f2e) sits near the AA threshold for small text — verify with `contrast_check.py` and bump weight/size if it fails.
- Reserve pure neon saturation (`--color-primary`/`--color-accent` at full strength) for accents and edges, not body copy — full-saturation text on dark backgrounds vibrates and fatigues reading.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep corners sharp (`--radius-sm`/`md`) — rounded corners undercut the chrome-tower geometry.
- ✅ Use the neon-edge gradient as a consistent 1-3px seam, never a full fill.
- ✅ Let the dark `--color-bg` gradient breathe behind panels so glows have room to read.

## Don't

- ❌ Don't round every element into pills — that reads as 2020s SaaS, not 80s corporate.
- ❌ Don't apply the neon glow to every border on a page; reserve it for hero/primary surfaces.
- ❌ Don't drop the chrome neutral entirely — pure magenta/teal without chrome loses the "corporate" half of the style.

## Don't confuse this with…

*Commonly confused neighbors:* synthwave, memphis-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
