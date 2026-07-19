# Art Deco — Implementation Spec

*Aliases:* Deco, Style Moderne  
*Slug:* `art-deco` · *Category:* historical · *Era:* 1920s–1930s

**Origin.** Paris 1925 Exposition Internationale des Arts Décoratifs.

**Reference example.** Chrysler Building; The Great Gatsby posters; Cassandre travel posters.

## Signature move(s)

Symmetry + geometric stepped (ziggurat) forms, luxurious gold-on-black/jewel tones, sunburst/chevron/zigzag motifs, and elegant high-contrast display type. Opulent and architectural.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Symmetry, geometric and stepped (ziggurat) forms
- Luxurious gold/black/jewel tones
- Sunburst, chevron, zigzag motifs
- Elegant high-contrast display type

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/art-deco.css`.)

```css
/* Art Deco — design tokens (generated from style_catalog.json) */
/* 1920s–1930s | Paris 1925 Exposition Internationale des Arts Décoratifs. */
:root {
  /* color */
  --color-bg: #0e0e12;
  --color-surface: #16161d;
  --color-text: #f5e9c8;
  --color-text-muted: #b8a878;
  --color-primary: #c8a253;
  --color-accent: #1f7a6d;
  --color-gold: #c8a253;
  --color-black: #0e0e12;
  --color-cream: #f5e9c8;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-gold: 0 0 0 1px #c8a253, 0 8px 24px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Poiret One', 'Century Gothic', sans-serif;
  --font-display: 'Cinzel', 'Poiret One', serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.3rem;
  --text-xl: 1.8rem;
  --text-2xl: 2.6rem;
  --text-3xl: 3.8rem;
  --text-4xl: 5.4rem;
  --text-5xl: 7.6rem;
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
  --chevron: #c8a253;
  --sunburst: repeating-conic-gradient(#c8a253 0deg 4deg, transparent 4deg 8deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Art Deco — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0e0e12",
        "surface": "#16161d",
        "text": "#f5e9c8",
        "text-muted": "#b8a878",
        "primary": "#c8a253",
        "accent": "#1f7a6d",
        "gold": "#c8a253",
        "black": "#0e0e12",
        "cream": "#f5e9c8",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "0px",
      },
      boxShadow: {
        "gold": "0 0 0 1px #c8a253, 0 8px 24px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Poiret One'", "'Century Gothic'", "sans-serif"],
        "display": ["'Cinzel'", "'Poiret One'", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.3rem",
        "xl": "1.8rem",
        "2xl": "2.6rem",
        "3xl": "3.8rem",
        "4xl": "5.4rem",
        "5xl": "7.6rem",
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
//   --chevron: #c8a253;
//   --sunburst: repeating-conic-gradient(#c8a253 0deg 4deg, transparent 4deg 8deg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Symmetric rectangle with a thin gold rule/border; elegant let-spaced caps; subtle gold hover. |
| **Input** | Field framed by a fine gold line; centered or elegantly aligned label. |
| **Card** | Panel with a gold hairline frame and a stepped or sunburst header motif. |
| **Nav** | Symmetric centered nav with a gold divider and refined display logo. |
| **Modal** | Framed panel with a chevron/sunburst crown and gold border. |
| **Table** | Gold hairline rules, centered elegant headers, generous leading. |
| **Tooltip** | Small gold-framed chip. |
| **Badge** | A gold-outlined emblem or chevron tag. |
| **Toggle** | Slim track with a gold knob; understated luxury. |
| **Loading** | A radiating sunburst spinner in gold. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Gold-on-black can be low-contrast — use cream/`--color-cream` for body text, gold for accents.
- Elegant thin type must still meet minimum sizes; don't go too light/small.
- Keep decorative sunbursts from sitting behind text.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use symmetry and vertical emphasis.
- ✅ Reserve gold for accents/frames, cream for reading text.
- ✅ Employ chevron/sunburst/stepped motifs structurally.

## Don't

- ❌ Use organic curves (that's Art Nouveau).
- ❌ Overuse gold until text drowns.
- ❌ Mix in casual/rounded modern components.

## Don't confuse this with…

*Commonly confused neighbors:* art-nouveau, streamline-moderne, bauhaus.

vs Art Nouveau: Deco is geometric/symmetric/machine-age; Nouveau is organic/curvy/botanical. vs Streamline Moderne: Streamline is the curvier, aerodynamic late-Deco offshoot.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
