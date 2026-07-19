# Scandinavian / Nordic — Implementation Spec

*Aliases:* Nordic design, hygge  
*Slug:* `scandinavian` · *Category:* minimal-organic · *Era:* 1930s–present

**Origin.** Nordic modernism (Alvar Aalto, Arne Jacobsen).

**Reference example.** IKEA; Muuto; HAY.

## Signature move(s)

Warm minimalism: light woods, soft neutrals, functional and cozy (hygge), uncluttered, with muted natural accents. Human-centered simplicity.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Warm minimalism: light woods, soft neutrals
- Functional, cozy (hygge), uncluttered
- Natural materials and muted accents
- Human-centered simplicity

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/scandinavian.css`.)

```css
/* Scandinavian / Nordic — design tokens (generated from style_catalog.json) */
/* 1930s–present | Nordic modernism (Alvar Aalto, Arne Jacobsen). */
:root {
  /* color */
  --color-bg: #f7f4ef;
  --color-surface: #ffffff;
  --color-surface-2: #efe9e1;
  --color-text: #2b2b2b;
  --color-text-muted: #6f6a63;
  --color-primary: #3a5a40;
  --color-accent: #c98a6a;
  --color-sky: #a8c5d6;
  --color-wood: #d8b8a0;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-soft: 0 6px 20px rgba(43,43,43,0.06);
  /* font */
  --font-sans: 'Poppins', 'Work Sans', system-ui, sans-serif;
  --font-display: 'Fraunces', 'Poppins', serif;
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
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;
  --space-16: 128px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --hairline: 1px solid #e4ddd2;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Scandinavian / Nordic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f4ef",
        "surface": "#ffffff",
        "surface-2": "#efe9e1",
        "text": "#2b2b2b",
        "text-muted": "#6f6a63",
        "primary": "#3a5a40",
        "accent": "#c98a6a",
        "sky": "#a8c5d6",
        "wood": "#d8b8a0",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "soft": "0 6px 20px rgba(43,43,43,0.06)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Work Sans'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'Poppins'", "serif"],
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
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
        "16": "128px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --hairline: 1px solid #e4ddd2;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Soft rounded button in a muted natural accent; gentle shadow; calm hover. |
| **Input** | Rounded field with a hairline border; warm neutral focus. |
| **Card** | Warm off-white card with a soft shadow and a hairline; generous padding. |
| **Nav** | Airy bar, small wordmark, muted accent for active. |
| **Modal** | A calm rounded panel with soft light. |
| **Table** | Hairline rules, airy rows, muted header. |
| **Tooltip** | A small warm-neutral chip. |
| **Badge** | A soft muted pill. |
| **Toggle** | A calm rounded toggle; muted-green 'on'. |
| **Loading** | A gentle, unobtrusive spinner or bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Muted palettes risk low contrast — darken text on warm off-whites and verify.
- Keep the calm aesthetic from making affordances too subtle.
- Maintain adequate touch targets in the airy layout.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use warm neutrals, light wood tones, soft shadows.
- ✅ Prioritize function and calm.
- ✅ Add a single muted natural accent.

## Don't

- ❌ Go stark/cold (that's plain minimalism).
- ❌ Over-saturate — keep accents muted.
- ❌ Clutter the generous whitespace.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, japandi, mid-century-modern.

vs Japandi: Japandi adds Japanese wabi-sabi (imperfection, darker woods, more negative space); Scandinavian is lighter and cozier. vs minimalism: Scandinavian is warm/cozy, minimalism can be cold/neutral.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
