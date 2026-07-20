# Voxel Art — Implementation Spec

*Aliases:* voxel, 3D pixel  
*Slug:* `voxel` · *Category:* texture · *Era:* 2010s–present

**Origin.** 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent).

**Reference example.** Minecraft; MagicaVoxel dioramas.

## Signature move(s)

Every surface is built as a cube: zero border-radius everywhere, a lighter `--voxel-top` gradient band standing in for the lit top face, a thick `--voxel-side` border for the shaded side face, and a hard, unblurred offset shadow for depth. The `--pixel-notch` (8px) sets the grid unit every cube-like shape snaps to, so buttons, chips, and icons all feel cut from the same blocky material.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Cubic 3D 'pixels' build objects
- Blocky charming forms
- Bright toy-like palettes
- Isometric voxel scenes

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/voxel.css`.)

```css
/* Voxel Art — design tokens (generated from style_catalog.json) */
/* 2010s–present | 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent). */
:root {
  /* color */
  --color-bg: #a8e0f0;
  --color-surface: #ffffff;
  --color-surface-strong: #eef7fb;
  --color-border: #16324a;
  --color-text: #16324a;
  --color-text-muted: #3b5a72;
  --color-primary: #ff6b3d;
  --color-accent: #2fbf71;
  --color-yellow: #ffc93c;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 8px 8px 0 var(--color-border);
  /* font */
  --font-sans: 'Space Grotesk', 'Segoe UI', sans-serif;
  --font-display: 'Press Start 2P', 'Space Grotesk', monospace;
  --font-mono: 'VT323', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: 2.75rem;
  --text-5xl: 3.5rem;
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
  --ease-standard: steps(4, end);
  /* extra (signature gradients, composite borders, filters) */
  --voxel-top: linear-gradient(180deg, rgba(255,255,255,0.55) 0 30%, transparent 30%);
  --voxel-side: 4px solid var(--color-border);
  --pixel-notch: 8px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Voxel Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#a8e0f0",
        "surface": "#ffffff",
        "surface-strong": "#eef7fb",
        "border": "#16324a",
        "text": "#16324a",
        "text-muted": "#3b5a72",
        "primary": "#ff6b3d",
        "accent": "#2fbf71",
        "yellow": "#ffc93c",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Segoe UI'", "sans-serif"],
        "display": ["'Press Start 2P'", "'Space Grotesk'", "monospace"],
        "mono": ["'VT323'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "2.75rem",
        "5xl": "3.5rem",
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
        "standard": "steps(4, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --voxel-top: linear-gradient(180deg, rgba(255,255,255,0.55) 0 30%, transparent 30%);
//   --voxel-side: 4px solid var(--color-border);
//   --pixel-notch: 8px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Zero radius, `--voxel-side` thick border, `--voxel-top` highlight band across the top third, `--shadow-sm` offset; hover nudges 2px toward the shadow, active seats fully flush (cube pressed into the grid). |
| **Input** | Zero radius, `--voxel-side` border, flat `--color-surface` (no top-highlight — fields aren't "cubes," they're slots); focus thickens the border to `--color-accent`. |
| **Card** | Full cube treatment: `--voxel-top` band, `--voxel-side` border, `--shadow-md`; content padding snaps to multiples of `--pixel-notch`. |
| **Nav** | Chunky bar, zero radius, thick bottom `--voxel-side` border standing in for the block's front face. |
| **Modal** | Large cube with `--shadow-lg`, floating over a flat scrim; corners stay hard, never rounded. |
| **Table** | Grid cells sized to multiples of `--pixel-notch`, zero radius, thick borders between cells like voxel seams. |
| **Tooltip** | Small cube chip, `--shadow-sm`, `--voxel-top` band even at tiny size for consistency. |
| **Badge** | Small square (not pill — `--radius-pill` is `0px` in this style) with `--voxel-side` border. |
| **Toggle** | Track is a groove of blocks; knob is a full cube (top band + side border) that steps across in `--pixel-notch` increments using `steps(4, end)` easing, never a smooth slide. |
| **Loading** | A row of small cubes filling in one at a time (steps easing), echoing voxel construction rather than a spinner or smooth bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- All motion should use `steps()` easing per the tokens, which reads as blocky/staccato — respect `prefers-reduced-motion` by collapsing multi-step animations (toggle slide, loading fill) to a single instant state change.
- Zero border-radius plus thick dark borders on bright toy-like fills is high-contrast by default, but double-check `--color-primary` (`#ff6b3d`) text-on-fill combinations with `contrast_check.py` since orange-on-orange-family accents are common in this palette.
- Keep dense text off cube "side" faces (`--voxel-side` border areas) — those are visual framing, not a text zone.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Snap every dimension (padding, gaps, sizes) to multiples of `--pixel-notch`.
- ✅ Keep border-radius at 0 everywhere — rounding breaks the voxel illusion instantly.
- ✅ Use `steps()` easing for all motion, not smooth cubic-bezier curves.

## Don't

- ❌ Round any corner, ever, in this style.
- ❌ Smooth-ease a transition — it must feel like discrete block-steps.
- ❌ Skip the top-highlight band on primary interactive cubes — it's what sells "3D," not just "square."

## Don't confuse this with…

*Commonly confused neighbors:* pixel-art, low-poly.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
