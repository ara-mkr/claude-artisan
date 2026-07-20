# Neon Sign / Tube — Implementation Spec

*Aliases:* neon, neon glow, tube light
*Slug:* `neon-tube` · *Category:* texture · *Era:* Signage heritage → web

**Origin.** Neon-tube signage simulated with glow.

**Reference example.** Bar/nightlife branding; synthwave crossovers.

## Signature move(s)

Every emphasized element is drawn as a lit glass tube: a saturated stroke (`--tube-stroke`) plus a layered multi-radius glow (`--shadow-sm/md/lg` stacking tight and wide blurs) and, on text, a matching text-shadow glow (`--tube-text-glow`) that simulates light bleeding from the tube into dark surrounding glass — always on a near-black ground so the glow has somewhere dark to bloom into.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Glowing tube strokes on dark ground
- Saturated pink/cyan/orange light bloom
- Flicker and reflection
- Nightlife, retro, vivid

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/neon-tube.css`.)

```css
/* Neon Sign / Tube — design tokens (generated from style_catalog.json) */
/* Signage heritage → web | Neon-tube signage simulated with glow. */
:root {
  /* color */
  --color-bg: #0a0710;
  --color-surface: #150e22;
  --color-surface-strong: #1f1530;
  --color-border: rgba(255, 79, 216, 0.35);
  --color-text: #fbeaff;
  --color-text-muted: #c6a9d6;
  --color-primary: #ff2ee0;
  --color-accent: #24f0ff;
  --color-orange: #ff9d2e;
  --color-glass-tube: #2a1e3d;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 6px rgba(255,46,224,0.55), 0 0 2px rgba(255,46,224,0.9);
  --shadow-md: 0 0 18px rgba(255,46,224,0.55), 0 0 40px rgba(255,46,224,0.30);
  --shadow-lg: 0 0 32px rgba(36,240,255,0.45), 0 0 70px rgba(255,46,224,0.30);
  /* font */
  --font-sans: 'Futura', 'Poppins', system-ui, sans-serif;
  --font-display: 'Pacifico', 'Brush Script MT', cursive;
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
  --tube-text-glow: 0 0 4px #fff, 0 0 12px var(--color-primary), 0 0 28px var(--color-primary), 0 0 48px rgba(255,46,224,0.5);
  --tube-stroke: 2px solid var(--color-primary);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Neon Sign / Tube — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0710",
        "surface": "#150e22",
        "surface-strong": "#1f1530",
        "border": "rgba(255, 79, 216, 0.35)",
        "text": "#fbeaff",
        "text-muted": "#c6a9d6",
        "primary": "#ff2ee0",
        "accent": "#24f0ff",
        "orange": "#ff9d2e",
        "glass-tube": "#2a1e3d",
      },
      borderRadius: {
        "sm": "6px",
        "md": "14px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 6px rgba(255,46,224,0.55), 0 0 2px rgba(255,46,224,0.9)",
        "md": "0 0 18px rgba(255,46,224,0.55), 0 0 40px rgba(255,46,224,0.30)",
        "lg": "0 0 32px rgba(36,240,255,0.45), 0 0 70px rgba(255,46,224,0.30)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Pacifico'", "'Brush Script MT'", "cursive"],
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
//   --tube-text-glow: 0 0 4px #fff, 0 0 12px var(--color-primary), 0 0 28px var(--color-primary), 0 0 48px rgba(255,46,224,0.5);
//   --tube-stroke: 2px solid var(--color-primary);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--tube-stroke` outline on transparent/`--color-glass-tube` fill, `--shadow-md` glow at rest; hover intensifies to `--shadow-lg` and adds `--tube-text-glow` on the label, like the tube brightening. |
| **Input** | Dim `--color-glass-tube` field with a faint 1px `--color-border` outline (unlit tube); focus switches the border to `--tube-stroke` and adds `--shadow-sm`. |
| **Card** | Dark `--color-surface` panel edged in `--tube-stroke`-style border with `--shadow-md`; headline text carries `--tube-text-glow` as the lit sign element. |
| **Nav** | Near-black bar; active tab renders as a lit tube label with `--tube-text-glow` and an accent-colored underline glow, inactive tabs stay dim/unlit. |
| **Modal** | Dark scrim, panel outlined in `--color-accent` tube stroke with `--shadow-lg`, title in `--tube-text-glow`. |
| **Table** | Keep rows on flat dark `--color-surface`, no glow — reserve neon for the header label or a single highlighted row/cell to avoid visual noise. |
| **Tooltip** | Tiny glass-tube chip: `--tube-stroke` border, `--shadow-sm`, glowing text. |
| **Badge** | Pill outlined in `--tube-stroke`, filled with dim `--color-glass-tube`, label glowing — color varies by status (pink/cyan/orange). |
| **Toggle** | Off = unlit dim tube outline; on = full `--tube-stroke` + `--shadow-md` glow on the track, knob glows to match. |
| **Loading** | A tube-outline ring or bar that flickers/pulses glow intensity (subtle, simulating a neon flicker), or a scanning glow along a `--tube-stroke` path. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Glow-only differentiation (lit vs. unlit) is a contrast risk for low-vision users — pair every "unlit/disabled" state with reduced opacity AND an explicit label/icon change, not glow alone.
- Body copy must never sit in `--tube-text-glow` — reserve the glow for short headlines/labels and set long-form text in flat `--color-text` for legibility.
- Flicker/pulse animations are a strong motion trigger — gate them behind `@media (prefers-reduced-motion: no-preference)` and default to a static glow otherwise.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the base ground near-black so glow has contrast to bloom against.
- ✅ Limit lit/glowing elements to 1-2 per view — a wall of neon reads as noise, not signage.
- ✅ Use `--tube-stroke` consistently as the "on" state signal across primitives.

## Don't

- ❌ Put neon glow on a light background — it disappears.
- ❌ Set paragraph text in `--tube-text-glow` or the script `--font-display`.
- ❌ Animate flicker on every element simultaneously.

## Don't confuse this with…

*Commonly confused neighbors:* synthwave, cyberpunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
