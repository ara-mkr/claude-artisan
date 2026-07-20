# Danish Pastel — Implementation Spec

*Aliases:* pastel maximal  
*Slug:* `danish-pastel` · *Category:* niche · *Era:* 2021–present

**Origin.** Playful pastel maximalist decor aesthetic.

**Reference example.** Danish Pastel TikTok interiors.

## Signature move(s)

The checkerboard wink: a soft conic-gradient checker pattern (`--checker`, in lilac) appears as a texture strip or corner accent on cards and headers — echoing the checkerboard rugs and wavy mirrors of the trend — paired with a flat, hard-edged offset shadow in ink (`--shadow-sm/md/lg` are literal `Npx Npx 0` offsets, no blur) so every shape looks like a cheerful die-cut sticker. Colors mix freely and loudly: pink primary, sky accent, lilac, mint, and yellow all appear across different components in the same view, the way a pastel room mixes furniture colors without hesitation.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Soft multicolor pastels mixed freely
- Checkerboard, wavy mirrors, smiley motifs
- Cheerful cluttered coziness
- Retro-playful decor

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/danish-pastel.css`.)

```css
/* Danish Pastel — design tokens (generated from style_catalog.json) */
/* 2021–present | Playful pastel maximalist decor aesthetic. */
:root {
  /* color */
  --color-bg: #fdeef2;
  --color-surface: #ffffff;
  --color-surface-strong: #fff1c6;
  --color-border: #2b2b2b;
  --color-text: #2b2b2b;
  --color-text-muted: #5b5450;
  --color-primary: #ff8fb1;
  --color-accent: #8fd3f4;
  --color-lilac: #cdb7f6;
  --color-mint: #a8e6c1;
  --color-yellow: #ffe27a;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font */
  --font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
  --font-display: 'Fredoka', 'Baloo 2', 'Quicksand', sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra (signature checker motif) */
  --checker: conic-gradient(var(--color-lilac) 90deg, transparent 90deg 180deg, var(--color-lilac) 180deg 270deg, transparent 270deg);
  --checker-size: 24px 24px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Danish Pastel — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdeef2",
        "surface": "#ffffff",
        "surface-strong": "#fff1c6",
        "border": "#2b2b2b",
        "text": "#2b2b2b",
        "text-muted": "#5b5450",
        "primary": "#ff8fb1",
        "accent": "#8fd3f4",
        "lilac": "#cdb7f6",
        "mint": "#a8e6c1",
        "yellow": "#ffe27a",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #2b2b2b",
        "md": "5px 5px 0 #2b2b2b",
        "lg": "8px 8px 0 #2b2b2b",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fredoka'", "'Baloo 2'", "'Quicksand'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// The checker motif is CSS-only. Add as a custom property or
// arbitrary value:
//   --checker: conic-gradient(var(--color-lilac) 90deg, transparent 90deg 180deg, var(--color-lilac) 180deg 270deg, transparent 270deg);
//   background-size: 24px 24px; /* --checker-size */
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` (bubblegum pink) fill, thick `--color-border` outline, `--shadow-sm`, `--radius-pill`; press it in and the offset shadow disappears (button "sits down"). |
| **Input** | `--color-surface`, thick `--color-border`, `--radius-md`; focus adds a `--color-accent` fill behind the border. |
| **Card** | `--color-surface`, thick `--color-border`, `--shadow-lg` (flat offset), `--radius-lg`; a `var(--checker)` strip along the top or a corner as decoration. |
| **Nav** | `--color-surface-strong` (buttery yellow) bar with `--shadow-sm` beneath it, thick bottom border. |
| **Modal** | Card recipe, `--shadow-lg`, a full `var(--checker)` header band for extra playfulness. |
| **Table** | Alternating `--color-surface`/pastel-tinted rows (cycle mint/lilac/sky at low opacity), thick outer `--color-border` frame. |
| **Tooltip** | Small bubble chip, `--color-yellow` fill, `--color-border` outline, `--radius-pill`. |
| **Badge** | Pill, cycles `--color-mint`/`--color-lilac`/`--color-accent`/`--color-yellow` fill with `--color-border` outline. |
| **Toggle** | `--color-surface-strong` track with `--color-border` outline, `--color-primary` knob, tiny `--shadow-sm` under the knob. |
| **Loading** | A bouncy checker-pattern shimmer (`var(--checker)` sliding) using `--ease-standard`'s overshoot bounce. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Pastel fills (`--color-mint`, `--color-yellow`, `--color-lilac`) are light by nature — never place `--color-text` directly on them without checking `contrast_check.py`; use them as backgrounds behind the darker `--color-border`-outlined text container instead.
- The bounce/overshoot `--ease-standard` easing must be gated behind `prefers-reduced-motion` — snappy spring motion across many simultaneous elements can be uncomfortable.
- Keep the checker motif decorative and low-opacity behind text zones; never run `var(--checker)` directly under body copy — it's a corner/strip accent, not a text background.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Mix at least three of the five accent colors across a single view for the "playroom" effect.
- ✅ Keep every shape outlined in `--color-border` with the flat offset shadow — that ink outline is what makes pastel read as intentional instead of washed-out.
- ✅ Use the checker motif sparingly as an accent strip, not a full background.

## Don't

- ❌ Drop the ink outline in favor of soft blurred shadows — that turns this into a generic pastel-minimal style and loses the retro-sticker read.
- ❌ Use only one pastel color throughout — the "mixed freely" trait requires variety.
- ❌ Let the checker pattern run under body text — it's decoration, not a text surface.

## Don't confuse this with…

*Commonly confused neighbors:* cluttercore, kidcore, memphis-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
