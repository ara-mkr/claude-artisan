# Frutiger Aero — Implementation Spec

*Aliases:* Web 2.0 gloss, Aero, cleancore  
*Slug:* `frutiger-aero` · *Category:* retrofuturism · *Era:* 2004–2013

**Origin.** Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism.

**Reference example.** Windows Vista/7; Wii/iOS-era wallpapers; Windows XP 'Bliss'.

## Signature move(s)

Nature-meets-tech optimism: glossy skeuomorphic bubbles and glass, water/bubbles/grass/blue-sky imagery, aqua gradients, lens flares, auto-glow, humanist Frutiger/Myriad type.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Glossy skeuomorphic bubbles and glass
- Nature imagery: water, bubbles, grass, blue skies
- Aqua gradients, lens flares, clean tech
- Humanist Frutiger/Myriad type, auto-glow

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/frutiger-aero.css`.)

```css
/* Frutiger Aero — design tokens (generated from style_catalog.json) */
/* 2004–2013 | Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism. */
:root {
  /* color */
  --color-bg: #eaf6ff;
  --color-surface: rgba(255,255,255,0.55);
  --color-text: #0b3d2e;
  --color-text-muted: #2f6b57;
  --color-primary: #38b6ff;
  --color-accent: #7ed957;
  --color-sky: #8fd3ff;
  --color-green: #5bd06a;
  --color-aqua: #00c2c7;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-gloss: inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 20px rgba(56,182,255,0.25);
  --shadow-sm: 0 4px 12px rgba(56,182,255,0.2);
  /* blur */
  --blur-backdrop: 10px;
  /* font */
  --font-sans: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif;
  --font-display: 'Myriad Pro', 'Segoe UI', sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --glossy: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4) 51%, rgba(255,255,255,0.65) 100%);
  --sky-bg: linear-gradient(180deg, #eaf6ff 0%, #bfe8ff 55%, #d9f7d0 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Frutiger Aero — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eaf6ff",
        "surface": "rgba(255,255,255,0.55)",
        "text": "#0b3d2e",
        "text-muted": "#2f6b57",
        "primary": "#38b6ff",
        "accent": "#7ed957",
        "sky": "#8fd3ff",
        "green": "#5bd06a",
        "aqua": "#00c2c7",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "gloss": "inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 20px rgba(56,182,255,0.25)",
        "sm": "0 4px 12px rgba(56,182,255,0.2)",
      },
      backdropBlur: {
        "backdrop": "10px",
      },
      fontFamily: {
        "sans": ["'Frutiger'", "'Myriad Pro'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Myriad Pro'", "'Segoe UI'", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --glossy: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4) 51%, rgba(255,255,255,0.65) 100%);
//   --sky-bg: linear-gradient(180deg, #eaf6ff 0%, #bfe8ff 55%, #d9f7d0 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Glossy aqua pill with a top gloss highlight and soft glow; humanist label. |
| **Input** | Rounded glossy field with an inner sheen; sky-tint focus. |
| **Card** | Translucent glossy card over a sky/water background; soft glow edges. |
| **Nav** | Glassy bar with glossy buttons and a nature-photo accent. |
| **Modal** | Glossy translucent panel with a bright bloom. |
| **Table** | Light glossy rows; aqua header; airy. |
| **Tooltip** | A glossy aqua bubble. |
| **Badge** | A shiny leaf/water-drop pill. |
| **Toggle** | Glossy aqua pill toggle. |
| **Loading** | A glossy aqua spinner or bubbling progress. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Bright glossy backgrounds reduce contrast — put text on the solid/darker part of the gloss and verify.
- Auto-glow can blur edges of controls; keep a defined border.
- Provide reduced-transparency fallback for the glass.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Combine glass/gloss with nature imagery (water, grass, sky).
- ✅ Use aqua/sky/green palette with humanist sans.
- ✅ Add gentle bloom/glow and lens flare.

## Don't

- ❌ Make it cold/chrome (that's Y2K).
- ❌ Skip the nature motifs — they define the style.
- ❌ Let gloss wash out text.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism, y2k-futurism, solarpunk.

vs glassmorphism: Frutiger Aero is glossy *skeuomorphic* 2000s optimism with nature imagery; glassmorphism is the flat 2020s `backdrop-filter` trend. vs Y2K: Aero adds nature and cleaner glass, less chrome.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
