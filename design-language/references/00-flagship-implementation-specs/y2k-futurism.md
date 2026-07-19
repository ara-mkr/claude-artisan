# Y2K Futurism — Implementation Spec

*Aliases:* Y2K, millennium bug aesthetic, cyber-y2k  
*Slug:* `y2k-futurism` · *Category:* retrofuturism · *Era:* 1995–2004

**Origin.** Turn-of-millennium optimistic tech aesthetic.

**Reference example.** iMac G3; The Matrix marketing; early Windows XP era ads.

## Signature move(s)

Turn-of-millennium techno-optimism: glossy translucent 'blobjects' and chrome, metallic silver + icy blue + hot-pink accents, bubble/inflatable UI, lens flares and starbursts.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Glossy translucent 'blobjects' and chrome
- Metallic silver, icy blues, hot pink accents
- Bubble/inflatable UI, lens flares, starbursts
- Techno-optimism, iMac G3 / bubble tech

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/y2k-futurism.css`.)

```css
/* Y2K Futurism — design tokens (generated from style_catalog.json) */
/* 1995–2004 | Turn-of-millennium optimistic tech aesthetic. */
:root {
  /* color */
  --color-bg: #dfe9f5;
  --color-surface: #ffffff;
  --color-text: #1b2a4a;
  --color-text-muted: #5a6b8c;
  --color-primary: #8ab6ff;
  --color-accent: #c0f0ff;
  --color-silver: #c7d2df;
  --color-lilac: #d6c7ff;
  --color-hotpink: #ff8fd6;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 18px;
  --radius-lg: 999px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-bubble: inset 0 2px 6px rgba(255,255,255,0.9), 0 6px 14px rgba(120,160,220,0.4);
  --shadow-chrome: inset 0 1px 0 #ffffff, inset 0 -3px 6px rgba(0,0,0,0.15);
  /* font */
  --font-sans: 'Michroma', 'Eurostile', 'Arial', sans-serif;
  --font-display: 'Michroma', 'Orbitron', sans-serif;
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
  /* extra (signature gradients, composite borders, filters) */
  --aqua-gel: linear-gradient(180deg, #ffffff 0%, #c0f0ff 45%, #8ab6ff 100%);
  --chrome-metal: linear-gradient(180deg, #f4f8ff, #c7d2df 50%, #9fb0c4 51%, #eef3fb);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Y2K Futurism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#dfe9f5",
        "surface": "#ffffff",
        "text": "#1b2a4a",
        "text-muted": "#5a6b8c",
        "primary": "#8ab6ff",
        "accent": "#c0f0ff",
        "silver": "#c7d2df",
        "lilac": "#d6c7ff",
        "hotpink": "#ff8fd6",
      },
      borderRadius: {
        "sm": "8px",
        "md": "18px",
        "lg": "999px",
        "pill": "999px",
      },
      boxShadow: {
        "bubble": "inset 0 2px 6px rgba(255,255,255,0.9), 0 6px 14px rgba(120,160,220,0.4)",
        "chrome": "inset 0 1px 0 #ffffff, inset 0 -3px 6px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        "sans": ["'Michroma'", "'Eurostile'", "'Arial'", "sans-serif"],
        "display": ["'Michroma'", "'Orbitron'", "sans-serif"],
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

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --aqua-gel: linear-gradient(180deg, #ffffff 0%, #c0f0ff 45%, #8ab6ff 100%);
//   --chrome-metal: linear-gradient(180deg, #f4f8ff, #c7d2df 50%, #9fb0c4 51%, #eef3fb);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Glossy aqua-gel or chrome pill with a top highlight; bubbly and reflective. |
| **Input** | Rounded glossy field with an inner light sheen. |
| **Card** | Bubble/blob card with aqua-gel gloss and a chrome edge. |
| **Nav** | Chrome/glossy bar with bubble buttons and a lens-flare accent. |
| **Modal** | Glossy translucent panel with a chrome frame. |
| **Table** | Light glossy rows; metallic header. |
| **Tooltip** | A glossy bubble. |
| **Badge** | A shiny gel pill or star burst. |
| **Toggle** | Glossy pill with a chrome knob. |
| **Loading** | A spinning chrome ring or a bubbly progress blob. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Glossy highlights can wash out text — keep labels on the matte part and verify contrast.
- Icy-blue-on-white is often too light; darken text.
- Don't rely on shine for state.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use aqua-gel gloss, chrome, bubble shapes.
- ✅ Silver + icy blue + hot-pink accents.
- ✅ Add tasteful lens flares/starbursts.

## Don't

- ❌ Confuse with Frutiger Aero (nature-tech) — Y2K is chrome/space-tech.
- ❌ Overuse gloss until text disappears.
- ❌ Go matte/flat.

## Don't confuse this with…

*Commonly confused neighbors:* frutiger-aero, vaporwave, chromecore.

vs Frutiger Aero: Y2K (1995–2004) is chrome/space-age/blobjects; Frutiger Aero (2004–2013) adds nature imagery (water, grass, skies) and cleaner glass. vs chromecore: chromecore is the 2020s liquid-chrome revival subset.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
