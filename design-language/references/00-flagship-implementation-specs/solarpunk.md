# Solarpunk — Implementation Spec

*Aliases:* eco-futurism  
*Slug:* `solarpunk` · *Category:* retrofuturism · *Era:* 2008–present

**Origin.** Emerged online ~2008 as optimistic counter to cyberpunk.

**Reference example.** Solarpunk art collections; 'Chobani' Solarpunk ad (2021).

## Signature move(s)

Optimistic eco-future: lush greenery fused with clean tech, warm sunlit greens/gold/sky/terracotta, Art-Nouveau-influenced organic linework. Hopeful and community-centered.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Lush greenery fused with clean technology
- Warm sunlit palette: greens, gold, sky blue, terracotta
- Art-Nouveau-influenced organic linework
- Hopeful, sustainable, community-centered

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/solarpunk.css`.)

```css
/* Solarpunk — design tokens (generated from style_catalog.json) */
/* 2008–present | Emerged online ~2008 as optimistic counter to cyberpunk. */
:root {
  /* color */
  --color-bg: #f5f9e8;
  --color-surface: #ffffff;
  --color-text: #1f3a2e;
  --color-text-muted: #4f6f5f;
  --color-primary: #2f9e6e;
  --color-accent: #f4b23e;
  --color-leaf: #6cbf6c;
  --color-sky: #8fd0e6;
  --color-clay: #d98a5c;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-soft: 0 8px 24px rgba(47,158,110,0.15);
  /* font */
  --font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
  --font-display: 'Fraunces', 'Quicksand', serif;
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
  --ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
  /* extra (signature gradients, composite borders, filters) */
  --foliage: radial-gradient(circle at 20% 10%, rgba(108,191,108,0.25), transparent 40%);
  --art-nouveau-line: 2px solid #2f9e6e;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Solarpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f9e8",
        "surface": "#ffffff",
        "text": "#1f3a2e",
        "text-muted": "#4f6f5f",
        "primary": "#2f9e6e",
        "accent": "#f4b23e",
        "leaf": "#6cbf6c",
        "sky": "#8fd0e6",
        "clay": "#d98a5c",
      },
      borderRadius: {
        "sm": "10px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "soft": "0 8px 24px rgba(47,158,110,0.15)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'Quicksand'", "serif"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --foliage: radial-gradient(circle at 20% 10%, rgba(108,191,108,0.25), transparent 40%);
//   --art-nouveau-line: 2px solid #2f9e6e;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rounded organic button in leaf-green or gold; soft shadow; nature-line accent. |
| **Input** | Rounded field with a botanical line motif; green focus. |
| **Card** | Warm card with organic curves, a foliage accent, and soft light. |
| **Nav** | Airy bar with an Art-Nouveau leaf logo and warm tones. |
| **Modal** | Rounded panel with a sunlit gradient and vine motif. |
| **Table** | Light warm rows; green header; airy spacing. |
| **Tooltip** | A small leaf-shaped chip. |
| **Badge** | A rounded green/gold pill. |
| **Toggle** | Organic pill; green 'on'. |
| **Loading** | A growing-vine or blooming animation. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Warm light palettes can go low-contrast — darken green/gold text on light backgrounds and verify.
- Keep organic decoration from crowding text.
- Ensure nature imagery has proper alt/decorative handling.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Blend greenery with clean technology.
- ✅ Use warm sunlit greens/gold/sky/terracotta.
- ✅ Add Art-Nouveau organic linework.

## Don't

- ❌ Make it dark/dystopian (that's cyberpunk's opposite by design).
- ❌ Use cold industrial grays.
- ❌ Forget the hopeful, human tone.

## Don't confuse this with…

*Commonly confused neighbors:* frutiger-aero, art-nouveau, cottagecore.

vs cottagecore: solarpunk keeps visible *technology* (solar, clean energy) integrated with nature; cottagecore is pre-industrial rural nostalgia. vs Frutiger Aero: Aero is glossy corporate 2000s tech; solarpunk is organic and hopeful-future.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
