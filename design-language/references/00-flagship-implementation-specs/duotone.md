# Duotone — Implementation Spec

*Aliases:* two-tone, bitone  
*Slug:* `duotone` · *Category:* texture · *Era:* Print heritage → 2015 web

**Origin.** Spotify's 2015 rebrand mainstreamed digital duotone.

**Reference example.** Spotify 2015 identity; festival branding.

## Signature move(s)

Every photographic or textured surface is mapped through exactly two brand colors — a dark `--tone-shadow` and a bright `--tone-highlight` — via a diagonal `--duotone-ramp` gradient (simulating a CSS `filter` duotone effect: darks go to shadow, lights go to highlight, no third color, no true grayscale). A thin `--duotone-wash` overlay ties flat UI chrome back to the same two-color story even where there's no photo to map.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Two-color gradient mapped onto photos
- High-contrast bold pairings
- Unifies mixed imagery
- Punchy, modern, brand-forward

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/duotone.css`.)

```css
/* Duotone — design tokens (generated from style_catalog.json) */
/* Print heritage → 2015 web | Spotify's 2015 rebrand mainstreamed digital duotone. */
:root {
  /* color */
  --color-bg: #0e1f17;
  --color-surface: #133527;
  --color-surface-strong: #1a4732;
  --color-border: #2fae74;
  --color-text: #eafff2;
  --color-text-muted: #9fe3bd;
  --color-primary: #34d980;
  --color-accent: #ff3e6c;
  --color-tone-shadow: #0e1f17;
  --color-tone-highlight: #ff3e6c;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
  --shadow-md: 0 6px 20px rgba(0,0,0,0.4);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Circular', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Gotham', 'Circular', system-ui, sans-serif;
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
  --duotone-ramp: linear-gradient(135deg, var(--color-tone-shadow) 0%, var(--color-primary) 55%, var(--color-tone-highlight) 130%);
  --duotone-wash: linear-gradient(180deg, rgba(52,217,128,0.16), rgba(255,62,108,0.10));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Duotone — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0e1f17",
        "surface": "#133527",
        "surface-strong": "#1a4732",
        "border": "#2fae74",
        "text": "#eafff2",
        "text-muted": "#9fe3bd",
        "primary": "#34d980",
        "accent": "#ff3e6c",
        "tone-shadow": "#0e1f17",
        "tone-highlight": "#ff3e6c",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.3)",
        "md": "0 6px 20px rgba(0,0,0,0.4)",
        "lg": "0 16px 40px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Circular'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Gotham'", "'Circular'", "system-ui", "sans-serif"],
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
//   --duotone-ramp: linear-gradient(135deg, var(--color-tone-shadow) 0%, var(--color-primary) 55%, var(--color-tone-highlight) 130%);
//   --duotone-wash: linear-gradient(180deg, rgba(52,217,128,0.16), rgba(255,62,108,0.10));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Solid `--color-primary` fill by default; primary CTA uses `--duotone-ramp` diagonally, text always `--color-tone-shadow` or `--color-tone-highlight`, never a third hue. |
| **Input** | Flat `--color-surface`, border in `--color-border`; focus ring uses `--color-accent` (the highlight tone) so focus reads as "lit." |
| **Card** | Any image/illustration inside gets the duotone treatment (`mix-blend-mode: color` layer of `--duotone-ramp` over a grayscale photo); card chrome stays flat `--color-surface`. |
| **Nav** | Bar with `--duotone-wash` as a subtle background gradient; active link underlined in `--color-tone-highlight`. |
| **Modal** | Scrim tinted with `--duotone-wash` instead of neutral black, keeping the two-tone story even behind the modal. |
| **Table** | Flat surface rows; only data-viz bars/sparklines get the duotone ramp, never body text background. |
| **Tooltip** | Small `--color-tone-shadow` chip, `--color-tone-highlight` text — the ramp's two extremes, no gradient (too small to read). |
| **Badge** | Pill alternating solid `--color-primary` or `--color-accent`, never both blended, to stay legible at small size. |
| **Toggle** | Track uses `--duotone-wash`; knob solid `--color-tone-highlight` when on, `--color-tone-shadow` when off — the toggle literally IS the two tones. |
| **Loading** | Bar or spinner animates the `--duotone-ramp` gradient position (background-position sweep) rather than a plain color fill. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Photos run through a duotone filter can lose the luminance contrast that made them readable — always composite the ramp with `mix-blend-mode` over a desaturated base and check that key image content (faces, icons) survives at both gradient extremes.
- `--color-tone-highlight` (`#ff3e6c`) on `--color-tone-shadow` (`#0e1f17`) must be checked with `contrast_check.py` before using it for body text — reserve the highlight tone for large text/accents if it fails.
- Don't let the duotone wash reduce a focus ring's visibility — focus indicators need a solid, non-gradient outline on top of any wash.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Run every photo/illustration through the same two-color ramp, no exceptions.
- ✅ Use the ramp's extremes as flat solids for small UI (badges, ticks) — never blend at tiny sizes.
- ✅ Keep the ramp direction and angle constant across the page.

## Don't

- ❌ Introduce a third arbitrary hue outside `--color-tone-shadow`/`--color-tone-highlight`.
- ❌ Apply the gradient to dense body text or small UI labels.
- ❌ Let photos stay full-color anywhere near duotone-treated ones — mixed treatment reads as a bug.

## Don't confuse this with…

*Commonly confused neighbors:* halftone, risograph.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
