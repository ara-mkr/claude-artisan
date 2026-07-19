# Maximalism — Implementation Spec

*Aliases:* more is more, maximal  
*Slug:* `maximalism` · *Category:* minimal-organic · *Era:* 2018–present

**Origin.** Reaction against flat minimalism; 'more is more'.

**Reference example.** Gucci editorial; many 2020s portfolio/agency sites.

## Signature move(s)

'More is more': dense layering, clashing color and pattern, big expressive type, many focal points, ornament and texture. Bold, joyful visual overload — but anchored.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dense layering, clashing color and pattern
- Big expressive type, many focal points
- Ornament, texture, collage, saturation
- Bold, joyful visual overload

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/maximalism.css`.)

```css
/* Maximalism — design tokens (generated from style_catalog.json) */
/* 2018–present | Reaction against flat minimalism; 'more is more'. */
:root {
  /* color */
  --color-bg: #14002e;
  --color-surface: #2a0a52;
  --color-text: #fff6d5;
  --color-text-muted: #f2c9ff;
  --color-primary: #ff007a;
  --color-accent: #ffd400;
  --color-lime: #aaff00;
  --color-cyan: #00e5ff;
  --color-orange: #ff6a00;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-pop: 8px 8px 0 #ffd400, 16px 16px 0 #ff007a;
  --shadow-glow: 0 0 24px rgba(255,0,122,0.6);
  /* font */
  --font-sans: 'Fraunces', 'Poppins', system-ui, sans-serif;
  --font-display: 'Rubik Mono One', 'Fraunces', serif;
  --font-mono: 'Space Mono', monospace;
  /* text */
  --text-xs: 0.8rem;
  --text-sm: 1rem;
  --text-base: 1.15rem;
  --text-lg: 1.5rem;
  --text-xl: 2.1rem;
  --text-2xl: 3rem;
  --text-3xl: 4.2rem;
  --text-4xl: 6rem;
  --text-5xl: 8.5rem;
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
  --clash: linear-gradient(135deg, #ff007a, #ffd400, #00e5ff);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Maximalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#14002e",
        "surface": "#2a0a52",
        "text": "#fff6d5",
        "text-muted": "#f2c9ff",
        "primary": "#ff007a",
        "accent": "#ffd400",
        "lime": "#aaff00",
        "cyan": "#00e5ff",
        "orange": "#ff6a00",
      },
      borderRadius: {
        "sm": "6px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "pop": "8px 8px 0 #ffd400, 16px 16px 0 #ff007a",
        "glow": "0 0 24px rgba(255,0,122,0.6)",
      },
      fontFamily: {
        "sans": ["'Fraunces'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Rubik Mono One'", "'Fraunces'", "serif"],
        "mono": ["'Space Mono'", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "1rem",
        "base": "1.15rem",
        "lg": "1.5rem",
        "xl": "2.1rem",
        "2xl": "3rem",
        "3xl": "4.2rem",
        "4xl": "6rem",
        "5xl": "8.5rem",
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
//   --clash: linear-gradient(135deg, #ff007a, #ffd400, #00e5ff);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Big, loud, gradient/patterned, oversized type; playful hover. |
| **Input** | Bold-bordered field on a busy background; keep the field itself clean. |
| **Card** | Layered, patterned, colorful card with overlapping elements and big type. |
| **Nav** | Loud bar with clashing colors and oversized logo. |
| **Modal** | A busy, decorated panel — but keep the content zone readable. |
| **Table** | Colorful but structured; alternating bold fills; strong header. |
| **Tooltip** | A bold, colorful chip. |
| **Badge** | A loud patterned pill. |
| **Toggle** | A vivid gradient toggle. |
| **Loading** | An energetic, colorful animated loader. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Anchor chaos with a clear focal hierarchy so it's navigable, not overwhelming.
- Keep text on solid, high-contrast zones amid the busyness; verify.
- Provide calm/reduced-motion zones for sensitive users.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Layer color, pattern, and big type intentionally.
- ✅ Establish one clear focal point per view.
- ✅ Keep reading zones clean within the maximal frame.

## Don't

- ❌ Let it become unstructured noise.
- ❌ Put body text over busy patterns.
- ❌ Clash without any unifying element.

## Don't confuse this with…

*Commonly confused neighbors:* memphis-design, neubrutalism.

vs Memphis: Memphis is a specific 80s pattern language; maximalism is a broad 'more-is-more' approach that may include Memphis, Pop, ornament, etc.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
