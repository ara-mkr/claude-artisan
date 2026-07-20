# Silicon Dreams — Implementation Spec

*Aliases:* Frutiger Metro  
*Slug:* `silicon-dreams` · *Category:* retrofuturism · *Era:* 2005–2012

**Origin.** Frutiger-family aesthetic; darker tech-corporate variant.

**Reference example.** Mid-2000s corporate tech keynotes.

## Signature move(s)

A near-black glass panel (`--color-surface`) with a thin `--glass-sheen` highlight along its top edge, floating on a deep-space background and haloed by a soft blue glow (`--color-glow` baked into `--shadow-md`/`--shadow-lg`). The glow is the tell: it should trace the edge of every raised surface like circuit backlighting, not just sit behind headline text.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dark glossy tech backgrounds
- Blue glow, circuitry, HUD hints
- Corporate futurism
- Glass + neon-blue accents

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/silicon-dreams.css`.)

```css
/* Silicon Dreams — design tokens (generated from style_catalog.json) */
/* 2005–2012 | Frutiger-family aesthetic; darker tech-corporate variant. */
:root {
  /* color */
  --color-bg: #050b14;
  --color-surface: #0d1b2a;
  --color-surface-strong: #132840;
  --color-border: #234a6b;
  --color-text: #eaf4ff;
  --color-text-muted: #8fb3d1;
  --color-primary: #2fb8ff;
  --color-accent: #6ee7ff;
  --color-glow: rgba(47,184,255,0.55);
  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.5), 0 0 20px var(--color-glow);
  --shadow-lg: 0 18px 44px rgba(0,0,0,0.55), 0 0 32px var(--color-glow);
  /* font */
  --font-sans: 'Frutiger', 'Segoe UI', system-ui, sans-serif;
  --font-display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif;
  --font-mono: 'Consolas', ui-monospace, monospace;
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
  --glass-sheen: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Silicon Dreams — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#050b14",
        "surface": "#0d1b2a",
        "surface-strong": "#132840",
        "border": "#234a6b",
        "text": "#eaf4ff",
        "text-muted": "#8fb3d1",
        "primary": "#2fb8ff",
        "accent": "#6ee7ff",
        "glow": "rgba(47,184,255,0.55)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 8px 24px rgba(0,0,0,0.5), 0 0 20px var(--color-glow)",
        "lg": "0 18px 44px rgba(0,0,0,0.55), 0 0 32px var(--color-glow)",
      },
      fontFamily: {
        "sans": ["'Frutiger'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Frutiger'", "'Eurostile'", "'Segoe UI'", "sans-serif"],
        "mono": ["'Consolas'", "ui-monospace", "monospace"],
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
//   --glass-sheen: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-surface-strong` fill, `--glass-sheen` top highlight, thin `--color-primary` border that glows with `--color-glow` on hover; active dims the glow briefly. |
| **Input** | Dark `--color-surface` field, `--color-border` outline; focus swaps the border to `--color-primary` and adds the glow shadow. |
| **Card** | The hero: `--color-surface`, `--glass-sheen` overlay, `--shadow-md` (glow baked in), `--radius-lg`, a thin circuitry-hint rule along one edge in `--color-border`. |
| **Nav** | Near-black bar, glowing `--color-primary` underline beneath the active tab, logo lit with `--color-glow`. |
| **Modal** | Strongest glow (`--shadow-lg`) around the panel edge over a near-black scrim, `--glass-sheen` across the header only. |
| **Table** | Flat `--color-surface` rows, `--color-border` rules; header row glows faintly with `--color-glow`. |
| **Tooltip** | Small glass chip, `--color-primary` border, tight glow, `--shadow-sm`. |
| **Badge** | Outlined pill in `--color-primary`/`--color-accent`, no fill — just a glowing ring. |
| **Toggle** | Dark track, `--color-primary` glow ring when on; knob lit with `--color-glow`. |
| **Loading** | A pulsing blue glow ring or a scanning HUD line sweeping across a dark skeleton block. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` on `--color-bg`/`--color-surface` is a mid-value blue-gray on near-black — verify it clears body-text contrast with `contrast_check.py`, not just the primary text color.
- Glow shadows (`--color-glow`) are decorative, not a substitute for a real focus outline — pair focus-visible with a solid `--color-accent` ring.
- Keep long-form body copy off `--color-bg` directly at the deepest blacks; prefer `--color-surface`/`--color-surface-strong` for text-bearing panels so the glow has somewhere to land without washing out type.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let the blue glow trace surface edges consistently, like backlighting on hardware.
- ✅ Keep the base as close to black as `--color-bg` allows so the glow reads as light, not just tint.
- ✅ Use the glass-sheen highlight sparingly — top edge only, never a full-surface wash.

## Don't

- ❌ Warm the palette — this style stays cold blue/near-black, never amber or warm neutrals.
- ❌ Rely on glow alone for focus/active states.
- ❌ Overuse `--color-accent` (cyan) for body text — it's an accent, not a text color.

## Don't confuse this with…

*Commonly confused neighbors:* frutiger-aero, cyberprep.

vs frutiger-aero: frutiger-aero is bright, airy, glossy-nature-lit; silicon dreams is its dark corporate-tech mirror image, near-black with cold blue glow instead of sunlight. vs cyberprep: cyberprep leans preppy/pastel with tech accents; silicon dreams is monochrome-dark corporate keynote futurism with no pastel palette.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
