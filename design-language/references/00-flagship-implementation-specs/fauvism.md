# Fauvism — Implementation Spec

*Aliases:* Les Fauves, wild beasts style  
*Slug:* `fauvism` · *Category:* historical · *Era:* 1904–1908

**Origin.** Paris (Henri Matisse, Andre Derain, Maurice de Vlaminck); named after a critic called the painters 'les fauves' (wild beasts).

**Reference example.** Matisse 'Woman with a Hat' (1905); Derain's Collioure harbor paintings.

## Signature move(s)

Color used arbitrarily, not descriptively: a face can be green, a sky can be orange, a shadow can be magenta — whatever makes the composition vibrate. Paint sits flat and unmixed straight from the tube, bounded by loose, visibly hand-drawn (not ruled) edges. Nothing is toned down to feel "correct"; the palette clashes on purpose and stays high-energy throughout.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Wild, non-naturalistic, highly saturated clashing color
- Bold flat unmixed color fields applied straight from the tube
- Expressive, loose, brush-like edges and borders
- High-energy arbitrary palette: hot orange, cobalt, viridian, magenta

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/fauvism.css`.)

```css
/* Fauvism — design tokens (generated from style_catalog.json) */
/* 1904–1908 | Matisse, Derain, Vlaminck — arbitrary, clashing, saturated color. */
:root {
  /* color */
  --color-bg: #fff8ee;
  --color-surface: #ffffff;
  --color-surface-2: #ffe9d1;
  --color-text: #1a1a1a;
  --color-text-muted: #5c4a3a;
  --color-primary: #ff5e1a;
  --color-accent: #1c3fab;
  --color-viridian: #00a878;
  --color-magenta: #d6146b;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-bold: 6px 6px 0 #1c3fab;
  --shadow-bold-sm: 3px 3px 0 #d6146b;
  /* font */
  --font-sans: 'Fraunces', 'Georgia', serif;
  --font-display: 'Fraunces', 'Playfair Display', serif;
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
  --brushstroke-border: 3px solid #1a1a1a;
  --clash-gradient: linear-gradient(105deg, #ff5e1a 0%, #d6146b 45%, #1c3fab 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Fauvism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff8ee",
        "surface": "#ffffff",
        "surface-2": "#ffe9d1",
        "text": "#1a1a1a",
        "text-muted": "#5c4a3a",
        "primary": "#ff5e1a",
        "accent": "#1c3fab",
        "viridian": "#00a878",
        "magenta": "#d6146b",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "bold": "6px 6px 0 #1c3fab",
        "bold-sm": "3px 3px 0 #d6146b",
      },
      fontFamily: {
        "sans": ["'Fraunces'", "'Georgia'", "serif"],
        "display": ["'Fraunces'", "'Playfair Display'", "serif"],
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
//   --brushstroke-border: 3px solid #1a1a1a;
//   --clash-gradient: linear-gradient(105deg, #ff5e1a 0%, #d6146b 45%, #1c3fab 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat unmixed `--color-primary` fill, thick hand-drawn-feeling black border, dark text for contrast; hover swaps to a clashing accent color rather than darkening. |
| **Input** | Flat cream field, thick black brushstroke border, no soft inner shadow — the border does the work. |
| **Card** | Flat colored surface panel (rotate slightly through primary/accent/viridian across a grid) with the offset `--shadow-bold` hard shadow, never a soft blur. |
| **Nav** | Bold flat-color bar with a thick black bottom border, wordmark in the display serif. |
| **Modal** | Panel pops in at a slight rotation, thick black border, single clashing accent fill behind it. |
| **Table** | Header row in one clashing flat color, body rows plain — keep body text readable, save color chaos for the header. |
| **Tooltip** | Small flat-magenta chip with a thick black border, no gradient. |
| **Badge** | Flat viridian or magenta pill, thick black outline, dark text. |
| **Toggle** | Thick-bordered track; knob is a solid clashing color that swaps hue on toggle rather than just sliding. |
| **Loading** | Alternating flat-color dots/blocks cycling through the clash palette, no blur or gradient. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Saturated color-on-color routinely fails AA — `--color-primary` (#ff5e1a) only reaches AA text contrast with **dark** text (#1a1a1a), not white; verify every fill/text pairing with `contrast_check.py` before shipping.
- Never rely on hue alone to convey state (e.g. "green means success") — Fauvism's arbitrary color use means hue carries no semantic meaning by default; pair with icons/text.
- Keep the thick black border on interactive elements — it doubles as a strong, visible boundary for low-vision users, not just a stylistic flourish.
- Keep focus rings a distinct, high-contrast color (e.g. viridian) that doesn't blend into the surrounding clash palette.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let color be arbitrary and expressive — a card doesn't need a "correct" color to justify its hue.
- ✅ Keep every fill flat and unmixed; no gradients on primary shapes (gradients are reserved for the rare `--clash-gradient` accent).
- ✅ Use the thick black border/brushstroke edge to unify otherwise-clashing colors.

## Don't

- ❌ Soften the palette toward pastels "for taste" — that defeats the wild, saturated point of the style.
- ❌ Add halftone dots or comic outlines — that's pop-art's vocabulary, not Fauvism's loose brush edge.
- ❌ Use smooth gradients or soft shadows throughout — Fauvism is flat color and hard offset shadows, not blended tones.

## Don't confuse this with…

*Commonly confused neighbors:* pop-art, psychedelic, memphis-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
