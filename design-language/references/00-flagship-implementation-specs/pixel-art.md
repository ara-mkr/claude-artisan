# Pixel Art / 8-bit — Implementation Spec

*Aliases:* 8-bit, 16-bit, retro game  
*Slug:* `pixel-art` · *Category:* texture · *Era:* 1970s–present

**Origin.** Constraint of early raster displays, now deliberate style.

**Reference example.** Game Boy/NES games; Celeste; pixel-art portfolios.

## Signature move(s)

`image-rendering: pixelated` on every bitmap, `--pixel-grid-bg` (a crossed 1px `linear-gradient` grid) exposed at large sizes to make the underlying pixel unit visible, and a `--dither-fill` repeating-conic-gradient standing in for dithered gradients (real dithering, not smooth CSS gradients, simulate a limited palette). Zero border-radius and hard `NNpx NNpx 0` offset shadows keep every shape locked to the pixel grid — nothing in this style may render on a sub-pixel or anti-aliased edge.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Visible grid of chunky pixels
- Limited palettes (NES/Game Boy)
- Dithering for gradients
- Nostalgic, playful, game-y

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/pixel-art.css`.)

```css
/* Pixel Art / 8-bit — design tokens (generated from style_catalog.json) */
/* 1970s–present | Constraint of early raster displays, now deliberate style. */
:root {
  /* color */
  --color-bg: #0f1e2e;
  --color-surface: #1c3a4f;
  --color-surface-strong: #2a5470;
  --color-border: #7fd8c5;
  --color-text: #eaf6f2;
  --color-text-muted: #9fc9c0;
  --color-primary: #f4c542;
  --color-accent: #ef5b5b;
  --color-pixel-grid: rgba(0, 0, 0, 0.25);
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: 4px 4px 0 #0a1622;
  --shadow-md: 6px 6px 0 #0a1622;
  --shadow-lg: 8px 8px 0 #0a1622;
  /* font */
  --font-sans: 'Press Start 2P', 'VT323', monospace;
  --font-display: 'Press Start 2P', monospace;
  --font-mono: 'VT323', ui-monospace, monospace;
  /* text */
  --text-xs: 0.7rem;
  --text-sm: 0.8rem;
  --text-base: 0.95rem;
  --text-lg: 1.1rem;
  --text-xl: 1.3rem;
  --text-2xl: 1.7rem;
  --text-3xl: 2.1rem;
  --text-4xl: 2.6rem;
  --text-5xl: 3.4rem;
  /* space */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 16px;
  --space-4: 24px;
  --space-6: 32px;
  --space-8: 40px;
  --space-12: 56px;
  --space-16: 72px;
  --space-24: 96px;
  /* ease */
  --ease-standard: steps(4, end);
  /* extra (signature gradients, composite borders, filters) */
  --pixel-grid-bg: linear-gradient(var(--color-pixel-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-pixel-grid) 1px, transparent 1px);
  --dither-fill: repeating-conic-gradient(#f4c542 0% 25%, #ef5b5b 0% 50%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Pixel Art / 8-bit — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0f1e2e",
        "surface": "#1c3a4f",
        "surface-strong": "#2a5470",
        "border": "#7fd8c5",
        "text": "#eaf6f2",
        "text-muted": "#9fc9c0",
        "primary": "#f4c542",
        "accent": "#ef5b5b",
        "pixel-grid": "rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "4px 4px 0 #0a1622",
        "md": "6px 6px 0 #0a1622",
        "lg": "8px 8px 0 #0a1622",
      },
      fontFamily: {
        "sans": ["'Press Start 2P'", "'VT323'", "monospace"],
        "display": ["'Press Start 2P'", "monospace"],
        "mono": ["'VT323'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.7rem",
        "sm": "0.8rem",
        "base": "0.95rem",
        "lg": "1.1rem",
        "xl": "1.3rem",
        "2xl": "1.7rem",
        "3xl": "2.1rem",
        "4xl": "2.6rem",
        "5xl": "3.4rem",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "16px",
        "4": "24px",
        "6": "32px",
        "8": "40px",
        "12": "56px",
        "16": "72px",
        "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "steps(4, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --pixel-grid-bg: linear-gradient(var(--color-pixel-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-pixel-grid) 1px, transparent 1px);
//   --dither-fill: repeating-conic-gradient(#f4c542 0% 25%, #ef5b5b 0% 50%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Zero radius, `--shadow-sm` hard pixel offset, `--font-display` label in caps; hover swaps fill to `--dither-fill` briefly or brightens by one palette step, active drops the shadow to 0 and nudges the label 2px down-right (pressed into the grid). |
| **Input** | Zero radius, `--color-border` outline sized to whole pixels, `--pixel-grid-bg` visible faintly inside large textareas only; focus swaps border to `--color-primary`. |
| **Card** | `--color-surface` fill, `--shadow-md`, optional `--pixel-grid-bg` overlay at low opacity to imply a "screen." |
| **Nav** | Chunky bar, zero radius, bottom edge a solid 4px `--color-border` "bezel" line. |
| **Modal** | Larger bordered block with `--shadow-lg`, corners perfectly square, scrim a flat dark fill (no blur — blur is anti-pixel). |
| **Table** | Monospace cells, thick pixel-grid dividers using `--color-pixel-grid`, header row filled `--color-primary`. |
| **Tooltip** | Small bordered chip with a triangular pixel "notch" built from a 3-step staircase clip-path, not a smooth CSS triangle. |
| **Badge** | Zero-radius chip, 2px hard shadow, `--font-display` for the label. |
| **Toggle** | Track built from visible grid cells; knob steps across in `--space-1` (8px) increments using `steps(4, end)`, never sliding smoothly. |
| **Loading** | Blocky animated progress bar filling in `--space-1` (8px) chunks per tick, or a 3-frame sprite-style spinner cycling with `steps()`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Pixel/bitmap display fonts (`Press Start 2P`) are hard to read at body-copy sizes — cap their use to headings/labels and use the more legible `VT323`/mono stack for any paragraph-length text, per the `--font-sans` fallback order.
- `image-rendering: pixelated` on scaled images can make thin lines vanish or moiré at non-integer zoom — always scale bitmap assets by whole-number multiples.
- Respect `prefers-reduced-motion` for the stepped loading/toggle animations — collapse to instant state changes rather than looping sprite frames.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Scale every bitmap and grid unit by whole-number multiples only.
- ✅ Use `steps()` easing for all motion — smooth easing breaks the frame-by-frame illusion.
- ✅ Keep the palette limited to the defined tokens; simulate extra tones with `--dither-fill`, not new hex values.

## Don't

- ❌ Anti-alias or blur any edge — `image-rendering: pixelated` and hard shadows only.
- ❌ Set body text in the pixel display font below ~14px equivalent.
- ❌ Round any corner or soften any shadow.

## Don't confuse this with…

*Commonly confused neighbors:* voxel, crt.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
