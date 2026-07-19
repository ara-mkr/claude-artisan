# Dark Academia — Implementation Spec

*Aliases:* dark academic  
*Slug:* `dark-academia` · *Category:* niche · *Era:* 2015–present (peak 2020)

**Origin.** Tumblr/TikTok subculture romanticizing classic scholarship.

**Reference example.** 'Dead Poets Society' / 'The Secret History' moodboards.

## Signature move(s)

Moody scholarly romance: browns/oxblood/forest-green/cream, serif type, old books and candlelight, Gothic/Ivy architecture motifs. Nostalgic and melancholic. (Mood layer over a real editorial/minimal system.)

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Moody browns, oxblood, forest green, cream
- Serif type, old books, candlelight, tweed
- Gothic/Ivy-League architecture motifs
- Scholarly, nostalgic, melancholic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dark-academia.css`.)

```css
/* Dark Academia — design tokens (generated from style_catalog.json) */
/* 2015–present (peak 2020) | Tumblr/TikTok subculture romanticizing classic scholarship. */
:root {
  /* color */
  --color-bg: #1c1712;
  --color-surface: #26201a;
  --color-surface-2: #332a20;
  --color-text: #e8ddc7;
  --color-text-muted: #a99a7f;
  --color-primary: #8b5e34;
  --color-accent: #5a6b4f;
  --color-oxblood: #6e2b2b;
  --color-gold: #b89b5e;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'EB Garamond', Georgia, serif;
  --font-display: 'Cormorant Garamond', 'EB Garamond', serif;
  --font-mono: 'Courier Prime', monospace;
  /* text */
  --text-xs: 0.8rem;
  --text-sm: 0.9rem;
  --text-base: 1.05rem;
  --text-lg: 1.3rem;
  --text-xl: 1.7rem;
  --text-2xl: 2.3rem;
  --text-3xl: 3.1rem;
  --text-4xl: 4.2rem;
  --text-5xl: 5.6rem;
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
  --paper: #e8ddc7;
  --rule: 1px solid #4a3f30;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dark Academia — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1c1712",
        "surface": "#26201a",
        "surface-2": "#332a20",
        "text": "#e8ddc7",
        "text-muted": "#a99a7f",
        "primary": "#8b5e34",
        "accent": "#5a6b4f",
        "oxblood": "#6e2b2b",
        "gold": "#b89b5e",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cormorant Garamond'", "'EB Garamond'", "serif"],
        "mono": ["'Courier Prime'", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "0.9rem",
        "base": "1.05rem",
        "lg": "1.3rem",
        "xl": "1.7rem",
        "2xl": "2.3rem",
        "3xl": "3.1rem",
        "4xl": "4.2rem",
        "5xl": "5.6rem",
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
//   --paper: #e8ddc7;
//   --rule: 1px solid #4a3f30;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Serif-labeled button with a thin gold/oxblood border; understated, bookish. |
| **Input** | Field framed by a thin rule on a cream/parchment field; serif label. |
| **Card** | Parchment or dark-wood card with a thin gold rule and serif heading. |
| **Nav** | Serif wordmark, thin rule divider, muted scholarly links. |
| **Modal** | A framed 'page' panel with serif type and a warm scrim. |
| **Table** | Ruled like a ledger; serif headers; warm rows. |
| **Tooltip** | A small parchment note. |
| **Badge** | A wax-seal-style or gold-rule tag. |
| **Toggle** | An understated toggle; oxblood/gold 'on'. |
| **Loading** | A quiet serif 'Loading…' or a candle-flicker (reduced-motion aware) accent. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Dark warm palettes can go low-contrast — use cream/`--color-text` on dark, verify serif body text at readable sizes.
- Serif body must stay ≥16px and well-spaced for legibility.
- Any candlelight flicker must honor reduced-motion.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use serif type, warm dark palette, scholarly motifs.
- ✅ Layer the mood over a solid editorial/minimal structure.
- ✅ Keep imagery (books, architecture) atmospheric.

## Don't

- ❌ Treat it as a full component system on its own — it's a mood layer.
- ❌ Go so dark/low-contrast that text suffers.
- ❌ Use bright/modern accents that break the period feel.

## Don't confuse this with…

*Commonly confused neighbors:* light-academia, victorian.

vs light academia: same scholarly world, opposite value key (creams/sunlight vs browns/candlelight). vs goth: goth is darker/ecclesiastical/dramatic; dark academia is bookish/tweed/collegiate.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
