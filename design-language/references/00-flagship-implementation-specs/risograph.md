# Risograph — Implementation Spec

*Aliases:* riso, riso print  
*Slug:* `risograph` · *Category:* texture · *Era:* 1980s stencil printing → 2010s revival

**Origin.** Riso Kagaku duplicator; indie print revival.

**Reference example.** Indie zines; risograph art prints; event posters.

## Signature move(s)

Limited bright spot-ink palette (fluoro pink, blue) with visible misregistration, grain, and overprint multiply blends. Handmade, imperfect, zine-like.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Limited bright spot-ink palette (fluoro pink, blue)
- Visible misregistration and grain
- Overprint multiply blends
- Handmade, imperfect, zine-like

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/risograph.css`.)

```css
/* Risograph — design tokens (generated from style_catalog.json) */
/* 1980s stencil printing → 2010s revival | Riso Kagaku duplicator; indie print revival. */
:root {
  /* color */
  --color-bg: #f3ecde;
  --color-surface: #f3ecde;
  --color-text: #1a1a1a;
  --color-text-muted: #444444;
  --color-primary: #ff5b45;
  --color-accent: #0078bf;
  --color-yellow: #ffd200;
  --color-green: #00a95c;
  --color-pink: #ff48b0;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-none: none;
  /* font */
  --font-sans: 'Space Grotesk', 'Archivo', system-ui, sans-serif;
  --font-display: 'Archivo Black', sans-serif;
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
  --ease-standard: linear;
  /* extra (signature gradients, composite borders, filters) */
  --grain: url('data:image/svg+xml;...noise');
  --halftone: radial-gradient(#ff5b45 30%, transparent 31%) 0 0 / 6px 6px;
  --multiply: multiply;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Risograph — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ecde",
        "surface": "#f3ecde",
        "text": "#1a1a1a",
        "text-muted": "#444444",
        "primary": "#ff5b45",
        "accent": "#0078bf",
        "yellow": "#ffd200",
        "green": "#00a95c",
        "pink": "#ff48b0",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Archivo'", "system-ui", "sans-serif"],
        "display": ["'Archivo Black'", "sans-serif"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grain: url('data:image/svg+xml;...noise');
//   --halftone: radial-gradient(#ff5b45 30%, transparent 31%) 0 0 / 6px 6px;
//   --multiply: multiply;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat spot-ink fill with a slight offset 'misprint' shadow in a second ink; grainy texture. |
| **Input** | Bordered field in one ink; grain overlay. |
| **Card** | Two-ink overprint card with visible grain and offset registration. |
| **Nav** | Bold spot-ink bar with a grainy texture and offset logo. |
| **Modal** | Two-ink panel with a misregistered border. |
| **Table** | Spot-ink rules; grainy header band. |
| **Tooltip** | A small spot-ink chip. |
| **Badge** | An overprinted two-ink tag. |
| **Toggle** | Spot-ink track; second-ink knob. |
| **Loading** | A grainy spot-ink progress bar or halftone spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Fluoro inks on light stock can be low-contrast — darken or overprint for text and verify.
- Grain/noise must not reduce text legibility; keep type on cleaner areas.
- Multiply overprints change effective color — check the resulting contrast.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Limit to 2–3 spot inks; embrace overprint multiply.
- ✅ Add deliberate misregistration and grain.
- ✅ Use the paper-stock color as a real background.

## Don't

- ❌ Use smooth full-color gradients.
- ❌ Make it pixel-perfect (defeats the charm).
- ❌ Set small text in fluoro ink on white.

## Don't confuse this with…

*Commonly confused neighbors:* halftone, duotone, wpa-poster.

vs halftone: halftone is the dot technique; riso is the whole spot-ink print process (grain + misregistration + overprint). vs duotone: duotone maps a photo to two colors smoothly; riso is textured/imperfect print.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
