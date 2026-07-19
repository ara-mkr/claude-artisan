# Pop Art — Implementation Spec

*Aliases:* comic style, Warhol style  
*Slug:* `pop-art` · *Category:* historical · *Era:* 1950s–1960s

**Origin.** UK/US (Andy Warhol, Roy Lichtenstein, Eduardo Paolozzi).

**Reference example.** Lichtenstein 'Whaam!'; Warhol Campbell's Soup.

## Signature move(s)

Bright saturated primaries with bold black outlines, Ben-Day/halftone dot texture, repetition, and comic devices (speech bubbles, 'WHAM!' lettering). Mass-media energy.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Bright saturated primary colors, bold outlines
- Ben-Day dots / halftone comic texture
- Repetition and mass-media imagery
- Speech bubbles, exclamatory type

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/pop-art.css`.)

```css
/* Pop Art — design tokens (generated from style_catalog.json) */
/* 1950s–1960s | UK/US (Andy Warhol, Roy Lichtenstein, Eduardo Paolozzi). */
:root {
  /* color */
  --color-bg: #fff8e7;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-text-muted: #333333;
  --color-primary: #ff2d95;
  --color-accent: #00b3ff;
  --color-yellow: #ffe000;
  --color-red: #ff1e1e;
  --color-black: #111111;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-hard: 5px 5px 0 #111111;
  /* font */
  --font-sans: 'Bangers', 'Archivo Black', sans-serif;
  --font-display: 'Bangers', 'Anton', sans-serif;
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
  --ease-standard: steps(2, end);
  /* extra (signature gradients, composite borders, filters) */
  --benday: radial-gradient(#ff2d95 30%, transparent 31%) 0 0 / 12px 12px;
  --outline: 3px solid #111111;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Pop Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff8e7",
        "surface": "#ffffff",
        "text": "#111111",
        "text-muted": "#333333",
        "primary": "#ff2d95",
        "accent": "#00b3ff",
        "yellow": "#ffe000",
        "red": "#ff1e1e",
        "black": "#111111",
      },
      borderRadius: {
        "sm": "0px",
        "md": "8px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "hard": "5px 5px 0 #111111",
      },
      fontFamily: {
        "sans": ["'Bangers'", "'Archivo Black'", "sans-serif"],
        "display": ["'Bangers'", "'Anton'", "sans-serif"],
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
        "standard": "steps(2, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --benday: radial-gradient(#ff2d95 30%, transparent 31%) 0 0 / 12px 12px;
//   --outline: 3px solid #111111;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Bold-outlined shape, flat bright fill, comic-style label; halftone hover. |
| **Input** | Outlined field; playful label in a speech-bubble. |
| **Card** | Comic panel with a thick black border and a halftone-dot background patch. |
| **Nav** | Bright bar with outlined logo; active item in a burst shape. |
| **Modal** | A comic panel/speech-bubble dialog with bold outline. |
| **Table** | Bold black grid, halftone header, bright accents. |
| **Tooltip** | A speech bubble. |
| **Badge** | A starburst 'POW!' tag. |
| **Toggle** | Outlined pill; bright 'on' fill. |
| **Loading** | Halftone dots animating, or a 'LOADING!' burst. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Halftone patterns behind text kill contrast — keep text on flat fills.
- Bright complementaries can vibrate; separate with black outlines.
- Don't put meaning only in comic decoration.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use bold black outlines everywhere.
- ✅ Apply Ben-Day dots as texture patches.
- ✅ Lean into repetition and bright primaries.

## Don't

- ❌ Set body text over dot patterns.
- ❌ Use muted/pastel colors.
- ❌ Drop the black outlines.

## Don't confuse this with…

*Commonly confused neighbors:* op-art, memphis-design, comic.

vs Memphis: Pop Art quotes mass media (comics/dots); Memphis is abstract 80s pattern. vs halftone (texture): halftone is the dot technique alone; Pop Art is the whole comic language.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
