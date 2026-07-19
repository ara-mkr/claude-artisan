# Bauhaus — Implementation Spec

*Aliases:* Bauhaus style  
*Slug:* `bauhaus` · *Category:* historical · *Era:* 1919–1933

**Origin.** German Bauhaus school (Walter Gropius, Weimar/Dessau).

**Reference example.** Herbert Bayer's Universal typeface; Bauhaus exhibition posters.

## Signature move(s)

Form follows function via geometric primitives (circle, square, triangle) in the primary triad (red/yellow/blue) + black/white, geometric sans type, asymmetric balance, zero ornament.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Form follows function; geometric primitives (circle, square, triangle)
- Primary red/yellow/blue plus black & white
- Sans-serif geometric type (Futura lineage)
- Asymmetric balance, no ornament

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/bauhaus.css`.)

```css
/* Bauhaus — design tokens (generated from style_catalog.json) */
/* 1919–1933 | German Bauhaus school (Walter Gropius, Weimar/Dessau). */
:root {
  /* color */
  --color-bg: #f4f1ea;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #4d4d4d;
  --color-primary: #e63946;
  --color-accent: #f4a300;
  --color-blue: #1d4ed8;
  --color-black: #1a1a1a;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-circle: 999px;
  /* shadow */
  --shadow-none: none;
  /* font */
  --font-sans: 'Futura', 'Century Gothic', 'Poppins', sans-serif;
  --font-display: 'Futura', 'Josefin Sans', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.5rem;
  --text-3xl: 3.5rem;
  --text-4xl: 5rem;
  --text-5xl: 7rem;
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
  --ease-standard: linear;
  /* extra (signature gradients, composite borders, filters) */
  --primary-triad: #e63946 #f4a300 #1d4ed8;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Bauhaus — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f4f1ea",
        "surface": "#ffffff",
        "text": "#1a1a1a",
        "text-muted": "#4d4d4d",
        "primary": "#e63946",
        "accent": "#f4a300",
        "blue": "#1d4ed8",
        "black": "#1a1a1a",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "circle": "999px",
      },
      boxShadow: {
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Century Gothic'", "'Poppins'", "sans-serif"],
        "display": ["'Futura'", "'Josefin Sans'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.75rem",
        "2xl": "2.5rem",
        "3xl": "3.5rem",
        "4xl": "5rem",
        "5xl": "7rem",
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --primary-triad: #e63946 #f4a300 #1d4ed8;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | A flat geometric block, possibly with a primary-color accent shape; sans-serif label. |
| **Input** | A clean rectangle aligned to the grid; primary-color focus accent. |
| **Card** | A composition of rectangles and a circle/triangle accent in a primary color. |
| **Nav** | Asymmetric bar using geometric blocks; a bold circle or square as the logo. |
| **Modal** | A rectangular panel with a single primary-color geometric accent. |
| **Table** | Grid with bold rules; header in a primary color block. |
| **Tooltip** | A small geometric block. |
| **Badge** | A circle or square in a primary color. |
| **Toggle** | A circle knob in a rectangular track; primary color for 'on'. |
| **Loading** | A rotating primary-color circle or a geometric progress motif. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Primary colors on white generally pass, but pure yellow text fails — use yellow as a fill, black/blue for text.
- Don't rely on shape-as-meaning alone; label things.
- Keep the geometric type legible at body sizes.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the primary triad + black/white, nothing muddy.
- ✅ Compose asymmetrically but in balance.
- ✅ Let circle/square/triangle be structural, not stickers.

## Don't

- ❌ Add gradients, textures, or extra colors.
- ❌ Center everything symmetrically.
- ❌ Use geometric shapes as random decoration without function.

## Don't confuse this with…

*Commonly confused neighbors:* de-stijl, constructivism, swiss-design.

vs De Stijl: De Stijl uses ONLY horizontals/verticals with thick black rules; Bauhaus allows diagonals, circles, triangles. vs Swiss: Bauhaus is more colorful/geometric-shape-driven; Swiss is grid+type.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
