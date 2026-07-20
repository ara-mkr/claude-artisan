# Swiss Punk / New Wave — Implementation Spec

*Aliases:* new wave typography, punk typography
*Slug:* `swiss-punk` · *Category:* brutalist · *Era:* 1978–1990

**Origin.** Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman in the US.

**Reference example.** April Greiman "Does It Make Sense?" (1986); Weingart Typographische Monatsblätter.

## Signature move(s)

Take the rigid Swiss/International-Style grid and deliberately break it: type set at `--extra-tilt-deg`, thick rule lines (`--extra-rule-line`) layered at odd angles, and hard offset shadows (`--shadow-sm/md/lg`) standing in for the depth Swiss Design never used. Helvetica/Univers stays as the type backbone — the punk move is composition, not typeface choice.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Deconstructed Swiss grid; tilted, layered type
- Wide letter-spacing, stepped baselines, rules
- Photographic collage, gradients (Greiman's digital work)
- Rebellion against rigid International Style

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/swiss-punk.css`.)

```css
/* Swiss Punk / New Wave — design tokens (generated from style_catalog.json) */
/* 1978–1990 | Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman in the US. */
:root {
  /* color */
  --color-bg: #f1f0ea;
  --color-surface: #ffffff;
  --color-surface-strong: #e7e5db;
  --color-border: #16161a;
  --color-text: #16161a;
  --color-text-muted: #4c4c50;
  --color-primary: #ff2e63;
  --color-accent: #08b2e3;
  --color-yellow: #ffd400;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 9px 9px 0 var(--color-border);
  /* font */
  --font-sans: 'Helvetica Neue', 'Univers', Arial, sans-serif;
  --font-display: 'Helvetica Neue', 'Univers', Arial, sans-serif;
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
  --ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
  /* extra */
  --tilt-deg: -2.5deg;
  --rule-line: 3px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Swiss Punk / New Wave — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f1f0ea",
        "surface": "#ffffff",
        "surface-strong": "#e7e5db",
        "border": "#16161a",
        "text": "#16161a",
        "text-muted": "#4c4c50",
        "primary": "#ff2e63",
        "accent": "#08b2e3",
        "yellow": "#ffd400",
      },
      borderRadius: {
        "sm": "0px", "md": "0px", "lg": "0px", "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #16161a",
        "md": "5px 5px 0 #16161a",
        "lg": "9px 9px 0 #16161a",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Univers'", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Univers'", "Arial", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.6, 0, 0.4, 1)",
      },
    },
  },
};

// Tilt and rule tokens are CSS-only:
//   --tilt-deg: -2.5deg;
//   --rule-line: 3px solid var(--color-border);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Sharp zero-radius rectangle, `--color-primary` fill, `--shadow-sm` offset; label set in wide-tracked uppercase Helvetica, slightly rotated with `--tilt-deg` on hover. |
| **Input** | `--rule-line` bottom border only (no box), `--color-surface` fill; focus adds a second thick rule in `--color-accent` above it, stepped baseline style. |
| **Card** | Rectangular, `--shadow-md`, layered with a `--rule-line` crossing the corner at `--tilt-deg` as a graphic accent. |
| **Nav** | Justified/stepped baseline links at varying sizes (not uniform), `--rule-line` beneath, one link tilted for punctuation. |
| **Modal** | Rectangular panel, `--shadow-lg`, deliberately off-grid position rather than perfectly centered. |
| **Table** | Strict Swiss grid alternated with one rule-line break for tension; header row in `--color-yellow`. |
| **Tooltip** | Small rectangular chip, `--shadow-sm`, no radius, connected to its target by a thin rule line instead of an arrow. |
| **Badge** | Rectangular tag, `--color-accent` or `--color-yellow` fill, uppercase wide-tracked label. |
| **Toggle** | Rectangular track (not pill), knob snaps between two rule-marked positions. |
| **Loading** | A rule-line "progress bar" that steps in blocks (`cubic-bezier(0.6,0,0.4,1)`) rather than a smooth circular spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Tilted (`--tilt-deg`) headline type must stay decorative-only — never rotate body paragraphs or form labels past a few degrees, and never tilt the text a screen reader needs verbatim.
- Wide letter-spacing plus small `--text-xs`/`--text-sm` sizes can hurt legibility — keep body copy at `--text-base` or larger and verify contrast of `--color-text-muted` on `--color-bg` with `contrast_check.py`.
- Offset hard shadows (`--shadow-*`) are decorative, not focus indicators — always add a separate visible focus outline for keyboard navigation.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep Helvetica/Univers as the disciplined typographic backbone even while composition breaks the grid.
- ✅ Use rule lines (`--rule-line`) as a recurring graphic device tying sections together.
- ✅ Reserve tilt for a small number of accent elements per view — one or two, not everything.

## Don't

- ❌ Use a script or display font other than the Swiss sans stack — the tension comes from disciplined type in a broken layout, not decorative lettering.
- ❌ Round any corners — zero radius is structural to this style.
- ❌ Tilt more than a couple of elements per screen; over-tilting reads as sloppy, not intentional.

## Don't confuse this with…

*Commonly confused neighbors:* swiss-design, deconstructivism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
