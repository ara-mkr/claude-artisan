# Dadaist / Collage Web — Implementation Spec

*Aliases:* dada web, collage UI
*Slug:* `dadaist-web` · *Category:* brutalist · *Era:* 2015–present (from 1916 Dada)

**Origin.** Digital revival of Dada photomontage and chance-based layout.

**Reference example.** Art-school microsites; fashion editorial pages.

## Signature move(s)

Every surface behaves like a cut-out paper scrap: hard `--color-scrap-shadow` drop shadow, a random rotation from `--extra-scrap-rotate-1/2/3`, and a visible `--extra-cutout-border` as if scissored from a magazine and glued down; mix serif "ransom note" display type with stamped monospace labels so nothing feels like it came from the same source document.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Cut-and-paste photomontage, ransom-note type
- Absurd juxtaposition and chaos
- Mixed media scraps and stickers
- Anti-rational composition

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dadaist-web.css`.)

```css
/* Dadaist / Collage Web — design tokens (generated from style_catalog.json) */
/* 2015–present (from 1916 Dada) | Digital revival of Dada photomontage and chance-based layout. */
:root {
  /* color */
  --color-bg: #fff6ea;
  --color-surface: #ffffff;
  --color-surface-strong: #ffe37a;
  --color-border: #101010;
  --color-text: #101010;
  --color-text-muted: #514c3f;
  --color-primary: #ff3b30;
  --color-accent: #0043ff;
  --color-sticker: #34c759;
  --color-scrap-shadow: rgba(16, 16, 16, 0.9);
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 3px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-scrap-shadow);
  --shadow-md: 6px 6px 0 var(--color-scrap-shadow);
  --shadow-lg: 9px 9px 0 var(--color-scrap-shadow);
  /* font */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Times New Roman', 'Georgia', serif;
  --font-stamp: 'Courier New', ui-monospace, monospace;
  --font-mono: 'Courier New', ui-monospace, monospace;
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
  /* extra */
  --scrap-rotate-1: rotate(-2.2deg);
  --scrap-rotate-2: rotate(1.8deg);
  --scrap-rotate-3: rotate(-0.7deg);
  --cutout-border: 2px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dadaist / Collage Web — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff6ea",
        "surface": "#ffffff",
        "surface-strong": "#ffe37a",
        "border": "#101010",
        "text": "#101010",
        "text-muted": "#514c3f",
        "primary": "#ff3b30",
        "accent": "#0043ff",
        "sticker": "#34c759",
        "scrap-shadow": "rgba(16, 16, 16, 0.9)",
      },
      borderRadius: {
        "sm": "0px", "md": "2px", "lg": "3px", "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 rgba(16,16,16,0.9)",
        "md": "6px 6px 0 rgba(16,16,16,0.9)",
        "lg": "9px 9px 0 rgba(16,16,16,0.9)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Times New Roman'", "'Georgia'", "serif"],
        "stamp": ["'Courier New'", "ui-monospace", "monospace"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Scrap rotation and cutout border are CSS-only:
//   --scrap-rotate-1: rotate(-2.2deg); --scrap-rotate-2: rotate(1.8deg); --scrap-rotate-3: rotate(-0.7deg);
//   --cutout-border: 2px solid var(--color-border);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Looks like a paper sticker: `--color-sticker` or `--color-primary` fill, `--cutout-border`, `--shadow-sm`, `--scrap-rotate-2`; hover "peels" by increasing rotation and shadow offset slightly. |
| **Input** | White scrap on `--color-bg`, `--cutout-border`, `--font-stamp` placeholder as if typed on a label maker; no rotation (inputs stay legible/functional). |
| **Card** | The core scrap unit: `--color-surface`, `--cutout-border`, `--shadow-md`, `--scrap-rotate-1`; layer 2–3 cards overlapping at different rotations for a true collage feel. |
| **Nav** | Individual stickers/tabs each independently rotated (`--scrap-rotate-1/2/3`) rather than one uniform bar. |
| **Modal** | A large torn/cut scrap, `--shadow-lg`, centered but slightly rotated, over a flat scrim (not blurred — Dada rejects glass polish). |
| **Table** | Kept mostly uncollaged for legibility, but the header row can be a stamped `--font-stamp` strip glued at a slight rotation. |
| **Tooltip** | A tiny stamped label chip, `--font-stamp`, `--shadow-sm`, no rotation (must resolve instantly). |
| **Badge** | A round "sticker" (`--radius-pill`) in `--color-sticker` with `--cutout-border`, rotated `--scrap-rotate-3`. |
| **Toggle** | Track drawn like a torn paper strip; knob is a small round sticker that visibly overlaps the track edge when off. |
| **Loading** | Scraps shuffling/reassembling into place with the bouncy `--ease-standard` easing, evoking chance-based collage assembly. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Ransom-note mixed typography must stay confined to decorative headlines/stickers — body copy, form labels, and errors need one consistent, upright, legible font (`--font-sans`).
- Rotation (`--scrap-rotate-*`) should be excluded from inputs, tables, and any text the user must read precisely or select/copy.
- Hard offset shadows are not focus indicators — add an explicit high-contrast focus outline on top of the scrap treatment for keyboard users.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary rotation per scrap using the three provided angles so the page doesn't feel patterned/repetitive.
- ✅ Mix `--font-display` (serif ransom-note) and `--font-stamp` (monospace label) deliberately for contrast.
- ✅ Keep functional text (inputs, tables, errors) upright and in the plain sans stack.

## Don't

- ❌ Rotate or collage form fields, tables, or anything requiring precise reading/interaction.
- ❌ Use more than 3 distinct rotation angles across one view — cap it at the provided tokens.
- ❌ Smooth the bouncy `--ease-standard` into a linear ease — the slight overshoot is what sells "physically placed."

## Don't confuse this with…

*Commonly confused neighbors:* anti-design, punk-zine.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
