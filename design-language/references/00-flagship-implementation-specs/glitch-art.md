# Glitch Art — Implementation Spec

*Aliases:* glitch, datamosh, databending  
*Slug:* `glitch-art` · *Category:* texture · *Era:* 2010s–present

**Origin.** Digital-error aesthetics (databending, datamoshing).

**Reference example.** Glitch music visuals; cyberpunk UIs; error-art.

## Signature move(s)

Digital-error aesthetics: RGB channel split/chromatic aberration, pixel sorting, block corruption, scan tearing, and jitter. Broken-signal energy — usually an accent layer on dark UI.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- RGB channel split / chromatic aberration
- Pixel sorting, block corruption, tearing
- Scan glitches, jitter, noise
- Broken-signal energy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/glitch-art.css`.)

```css
/* Glitch Art — design tokens (generated from style_catalog.json) */
/* 2010s–present | Digital-error aesthetics (databending, datamoshing). */
:root {
  /* color */
  --color-bg: #050505;
  --color-surface: #0d0d0d;
  --color-text: #f2f2f2;
  --color-text-muted: #8a8a8a;
  --color-primary: #ff003c;
  --color-accent: #00f0ff;
  --color-green: #00ff5f;
  --color-border: #ff003c;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-rgb-split: 2px 0 #ff003c, -2px 0 #00f0ff;
  /* font */
  --font-sans: 'Space Mono', 'Courier New', monospace;
  --font-display: 'Major Mono Display', monospace;
  --font-mono: 'Space Mono', monospace;
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
  --ease-standard: steps(2, jump-none);
  /* extra (signature gradients, composite borders, filters) */
  --chromatic: drop-shadow(2px 0 #ff003c) drop-shadow(-2px 0 #00f0ff);
  --noise: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 2px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Glitch Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#050505",
        "surface": "#0d0d0d",
        "text": "#f2f2f2",
        "text-muted": "#8a8a8a",
        "primary": "#ff003c",
        "accent": "#00f0ff",
        "green": "#00ff5f",
        "border": "#ff003c",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "rgb-split": "2px 0 #ff003c, -2px 0 #00f0ff",
      },
      fontFamily: {
        "sans": ["'Space Mono'", "'Courier New'", "monospace"],
        "display": ["'Major Mono Display'", "monospace"],
        "mono": ["'Space Mono'", "monospace"],
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
        "standard": "steps(2, jump-none)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chromatic: drop-shadow(2px 0 #ff003c) drop-shadow(-2px 0 #00f0ff);
//   --noise: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 2px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | On hover/focus, RGB-split the label and jitter; base is a hard-edged dark button. |
| **Input** | Dark field; glitch the border/label briefly on focus. |
| **Card** | Dark card with occasional datamosh/tear texture and RGB-split heading. |
| **Nav** | Dark bar; hovered items glitch/tear. |
| **Modal** | Panel that glitches in (block corruption) then settles. |
| **Table** | Dark grid; corrupt/tear an accent element, not the data. |
| **Tooltip** | A chip that flickers in with RGB split. |
| **Badge** | An RGB-split 'ERROR'/'404' style tag. |
| **Toggle** | Track that glitches on switch. |
| **Loading** | Datamosh/scan-corruption animation or a glitching bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Glitch/flicker can trigger motion sensitivity and seizures — keep it brief, low-frequency, and fully disabled under `prefers-reduced-motion`.
- Never glitch body text that users must read; glitch decoration only.
- Keep a stable, readable resting state.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use RGB split and tearing as brief accents.
- ✅ Anchor it on a clean dark, readable base.
- ✅ Give everything a stable settled state.

## Don't

- ❌ Glitch continuously or glitch readable content.
- ❌ Ignore reduced-motion/seizure safety.
- ❌ Let it become pure noise.

## Don't confuse this with…

*Commonly confused neighbors:* cyberpunk, vhs, crt.

vs cyberpunk: glitch is a *technique* (signal corruption) often used within cyberpunk, but cyberpunk is the whole neon-dystopia world. vs VHS: VHS is analog-tape artifacts (tracking, warble); glitch is digital corruption.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
