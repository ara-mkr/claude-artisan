# WPA / Vintage Poster — Implementation Spec

*Aliases:* travel poster, screenprint poster, WPA  
*Slug:* `wpa-poster` · *Category:* historical · *Era:* 1935–1943

**Origin.** US Works Progress Administration Federal Art Project.

**Reference example.** WPA national park posters; vintage airline/travel posters.

## Signature move(s)

A flat, banded "sky gradient" — three discrete screen-print color stops, mustard to rust to ink-blue, no soft blending — paired with a thick ink-colored rule (`--ink-band`, 6px solid) that reads as the outer registration line of a limited-color print run. Every raised surface gets a heavy 3px border in the same ink color, because WPA posters were built from a handful of hand-cut screens, not infinite color. Type is set in bold condensed sans (`--font-display: 'Bebas Neue'`), always uppercase, doing the work that illustration would in a real poster.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Flat screen-printed color areas
- Bold simplified shapes and shadows
- Limited ink palette, gradient skies
- Optimistic public-service messaging

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/wpa-poster.css`.)

```css
/* WPA / Vintage Poster — design tokens (generated from style_catalog.json) */
/* 1935–1943 | US Works Progress Administration Federal Art Project. */
:root {
  /* color */
  --color-bg: #e8d9b5;
  --color-surface: #f0e6c8;
  --color-surface-strong: #dcc98f;
  --color-border: #1c3d5a;
  --color-text: #1c1c1c;
  --color-text-muted: #4a3f2c;
  --color-primary: #c1502e;
  --color-accent: #1c3d5a;
  --color-mustard: #d69c2f;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 2px 2px 0 var(--color-border);
  --shadow-md: 4px 4px 0 var(--color-border);
  --shadow-lg: 6px 6px 0 var(--color-border);
  /* font */
  --font-sans: 'Futura', 'Century Gothic', sans-serif;
  --font-display: 'Bebas Neue', 'Futura', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.2rem;
  --text-xl: 1.6rem;
  --text-2xl: 2.2rem;
  --text-3xl: 3rem;
  --text-4xl: 4rem;
  --text-5xl: 5.5rem;
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
  --ease-standard: linear;
  /* extra (signature gradients, composite borders, filters) */
  --sky-gradient: linear-gradient(180deg, var(--color-mustard) 0%, var(--color-primary) 55%, var(--color-accent) 100%);
  --ink-band: 6px solid var(--color-border);
  --sun-rays: repeating-conic-gradient(from 0deg, var(--color-mustard) 0deg 4deg, transparent 4deg 20deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// WPA / Vintage Poster — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8d9b5",
        "surface": "#f0e6c8",
        "surface-strong": "#dcc98f",
        "border": "#1c3d5a",
        "text": "#1c1c1c",
        "text-muted": "#4a3f2c",
        "primary": "#c1502e",
        "accent": "#1c3d5a",
        "mustard": "#d69c2f",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 2px 0 var(--color-border)",
        "md": "4px 4px 0 var(--color-border)",
        "lg": "6px 6px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Century Gothic'", "sans-serif"],
        "display": ["'Bebas Neue'", "'Futura'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.2rem",
        "xl": "1.6rem",
        "2xl": "2.2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5.5rem",
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --sky-gradient: linear-gradient(180deg, var(--color-mustard) 0%, var(--color-primary) 55%, var(--color-accent) 100%);
//   --ink-band: 6px solid var(--color-border);
//   --sun-rays: repeating-conic-gradient(from 0deg, var(--color-mustard) 0deg 4deg, transparent 4deg 20deg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | 3px `--color-border` border, `--shadow-sm`, uppercase `--font-display`; hover lifts to `--shadow-md`, active seats flush with no shadow (like ink pressed flat). `btn--primary` fills with `--sky-gradient`. |
| **Input** | 3px border, flat `--color-surface` fill, no gradient (gradients are reserved for hero surfaces); focus swaps border to `--color-primary`. |
| **Card** | 3px border + `--shadow-lg`, an 8px `--sky-gradient` strip across the top edge standing in for the poster's illustrated band. |
| **Nav** | Flat surface with `--ink-band` as the bottom rule — the single thick line that would separate a poster's title block from its image. |
| **Modal** | Full `--sky-gradient` header band inside the modal card, 3px border, `--shadow-lg`, over a flat (not blurred) dark scrim. |
| **Table** | Alternate rows between `--color-surface` and `--color-surface-strong`; header row uses `--color-accent` fill with light text, thick bottom rule. |
| **Tooltip** | Small flat chip, 2px border, no gradient — gradients stay reserved for hero surfaces so tooltips read instantly. |
| **Badge** | Pill in a deep rust/ink tone (`#8a3a20`), 2px border, uppercase condensed type — like a rubber date-stamp on a poster corner. |
| **Toggle** | Flat rectangular track using the ink-band border; knob is a solid mustard square, snapping (not easing) between states. |
| **Loading** | `--sun-rays` repeating-conic-gradient rotating slowly and evenly (`linear` easing) — a screen-printed sunburst standing in for a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The limited-ink palette can produce mid-contrast pairs (mustard on ink-blue, rust on cream) that look period-correct but fail 4.5:1 — verify every text/fill pair with `contrast_check.py` before shipping, not just the primary text color.
- Reserve `--sky-gradient` and `--sun-rays` for decorative bands, never as a background directly under body text — flatten to a single solid ink or cream behind any paragraph.
- `linear` easing on motion can feel mechanical at speed on large elements — keep transitions short (120–150ms) and respect `prefers-reduced-motion` by disabling translate/lift effects.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Limit the palette to the defined ink set — no fifth color sneaking in.
- ✅ Keep gradients banded/stepped, never smoothly blended, to preserve the screenprint illusion.
- ✅ Set all display type in uppercase condensed sans for the optimistic public-service voice.

## Don't

- ❌ Soften the `--ink-band` rule into a thin hairline — it must read as a bold registration mark.
- ❌ Round any corners — WPA posters were cut, printed, and trimmed square.
- ❌ Put body copy directly on the `--sky-gradient` — it's a decorative band, not a text surface.

## Don't confuse this with…

*Commonly confused neighbors:* mid-century-modern, risograph.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
