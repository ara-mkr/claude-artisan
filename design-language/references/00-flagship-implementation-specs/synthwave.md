# Synthwave / Outrun — Implementation Spec

*Aliases:* outrun, retrowave, retro-futurism 80s  
*Slug:* `synthwave` · *Category:* retrofuturism · *Era:* 2009–present

**Origin.** Music-driven revival of 1980s sci-fi/action visuals.

**Reference example.** Kavinsky 'Nightcall'; Hotline Miami; Far Cry Blood Dragon.

## Signature move(s)

Earnest 1980s sci-fi/action revival: a neon grid horizon with a giant gradient sun, magenta/cyan on deep blue-purple night, chrome 80s type, VHS glow. Cinematic retro-future.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Neon grid horizon and giant gradient sun
- Magenta/cyan on deep blue-purple night
- Chrome 80s type, palm trees, sports cars
- Retro-futuristic, cinematic, VHS glow

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/synthwave.css`.)

```css
/* Synthwave / Outrun — design tokens (generated from style_catalog.json) */
/* 2009–present | Music-driven revival of 1980s sci-fi/action visuals. */
:root {
  /* color */
  --color-bg: #0d0221;
  --color-surface: #170a3a;
  --color-text: #f6f0ff;
  --color-text-muted: #9d8bd6;
  --color-primary: #ff2a6d;
  --color-accent: #05d9e8;
  --color-purple: #d300c5;
  --color-orange: #ff8b00;
  --color-grid: #ff2a6d;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-glow-pink: 0 0 8px #ff2a6d, 0 0 24px rgba(255,42,109,0.6);
  --shadow-glow-cyan: 0 0 8px #05d9e8, 0 0 24px rgba(5,217,232,0.6);
  /* font */
  --font-sans: 'Kanit', 'Rajdhani', system-ui, sans-serif;
  --font-display: 'Monoton', 'Audiowide', cursive;
  --font-mono: 'Share Tech Mono', monospace;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --sun: linear-gradient(180deg, #ff8b00 0%, #ff2a6d 60%, #d300c5 100%);
  --perspective-grid: linear-gradient(#05d9e8 1px, transparent 1px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Synthwave / Outrun — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d0221",
        "surface": "#170a3a",
        "text": "#f6f0ff",
        "text-muted": "#9d8bd6",
        "primary": "#ff2a6d",
        "accent": "#05d9e8",
        "purple": "#d300c5",
        "orange": "#ff8b00",
        "grid": "#ff2a6d",
      },
      borderRadius: {
        "sm": "0px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "glow-pink": "0 0 8px #ff2a6d, 0 0 24px rgba(255,42,109,0.6)",
        "glow-cyan": "0 0 8px #05d9e8, 0 0 24px rgba(5,217,232,0.6)",
      },
      fontFamily: {
        "sans": ["'Kanit'", "'Rajdhani'", "system-ui", "sans-serif"],
        "display": ["'Monoton'", "'Audiowide'", "cursive"],
        "mono": ["'Share Tech Mono'", "monospace"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --sun: linear-gradient(180deg, #ff8b00 0%, #ff2a6d 60%, #d300c5 100%);
//   --perspective-grid: linear-gradient(#05d9e8 1px, transparent 1px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Chrome or neon-outlined button with a pink/cyan glow; uppercase 80s display. |
| **Input** | Dark field, neon border, glow on focus. |
| **Card** | Night-gradient card with a grid floor and a sun-gradient accent. |
| **Nav** | Dark bar with a neon underline and chrome logo. |
| **Modal** | Gradient-sun panel over a grid backdrop. |
| **Table** | Dark grid, neon rules, glowing header. |
| **Tooltip** | Neon chip. |
| **Badge** | Neon-outlined tag. |
| **Toggle** | Neon track; glowing knob. |
| **Loading** | A rising gradient sun or a scrolling perspective grid. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Neon-on-dark body text needs verification; desaturate slightly for reading.
- Grid/sun animation should honor reduced-motion.
- Keep a solid focus indicator beyond glow.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the sun+grid horizon as a signature backdrop.
- ✅ Chrome/neon display type; deep purple-blue base.
- ✅ Add subtle VHS grain/glow.

## Don't

- ❌ Make it ironic/kitsch (that's vaporwave).
- ❌ Use bright/light backgrounds.
- ❌ Neglect reduced-motion.

## Don't confuse this with…

*Commonly confused neighbors:* vaporwave, cyberpunk.

vs vaporwave: synthwave = earnest 80s neon; vaporwave = ironic mall nostalgia. vs cyberpunk: cyberpunk is dystopian HUD; synthwave is nostalgic and cinematic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
