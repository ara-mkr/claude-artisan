# Vectordelia — Implementation Spec

*Aliases:* Web 2.0 vectors, swirl graphics  
*Slug:* `vectordelia` · *Category:* retrofuturism · *Era:* 2004–2010

**Origin.** Mid-2000s vector-art trend (part of Frutiger family).

**Reference example.** Mid-2000s tech ads; Windows Vista promo art.

## Signature move(s)

A glossy swooping "wirebird" swirl: a saturated blue-to-violet-to-magenta ribbon rendered in flat vector shapes, capped with a bright glass highlight band raked across its top edge like it was drawn in Illustrator with a gradient mesh and a soft-light layer. Every raised surface gets its own miniature swirl-and-sheen treatment, never just a flat fill.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Swooping vector swirls and 'wirebirds'
- Glossy gradients, floral flourishes
- Bright saturated color
- Adobe Illustrator flourish era

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/vectordelia.css`.)

```css
/* Vectordelia — design tokens (generated from style_catalog.json) */
/* 2004–2010 | Mid-2000s vector-art trend (part of Frutiger family). */
:root {
  /* color */
  --color-bg: #eaf6ff;
  --color-surface: #ffffff;
  --color-surface-strong: #f2fbff;
  --color-text: #0b2545;
  --color-text-muted: #45607e;
  --color-primary: #0ea5e9;
  --color-accent: #ec4899;
  --color-lime: #a3e635;
  --color-violet: #8b5cf6;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(14, 165, 233, 0.18);
  --shadow-md: 0 6px 20px rgba(14, 165, 233, 0.24);
  --shadow-lg: 0 12px 36px rgba(14, 165, 233, 0.28);
  --shadow-inset-hi: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  /* font */
  --font-sans: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif;
  --font-display: 'Trebuchet MS', 'Segoe UI', sans-serif;
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
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.3, 0, 1, 1);
  /* extra (signature gradients, composite borders, filters) */
  --swirl-gradient: linear-gradient(120deg, #0369a1 0%, #0e7490 30%, #6d28d9 65%, #be185d 100%);
  --gloss-sheen: linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 60%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Vectordelia — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eaf6ff",
        "surface": "#ffffff",
        "surface-strong": "#f2fbff",
        "text": "#0b2545",
        "text-muted": "#45607e",
        "primary": "#0ea5e9",
        "accent": "#ec4899",
        "lime": "#a3e635",
        "violet": "#8b5cf6",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(14, 165, 233, 0.18)",
        "md": "0 6px 20px rgba(14, 165, 233, 0.24)",
        "lg": "0 12px 36px rgba(14, 165, 233, 0.28)",
        "inset-hi": "inset 0 1px 0 rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        "sans": ["'Myriad Pro'", "'Segoe UI'", "-apple-system", "sans-serif"],
        "display": ["'Trebuchet MS'", "'Segoe UI'", "sans-serif"],
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
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --swirl-gradient: linear-gradient(120deg, #0369a1 0%, #0e7490 30%, #6d28d9 65%, #be185d 100%);
//   --gloss-sheen: linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 60%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill (`--radius-pill`) filled with `--swirl-gradient`, `--gloss-sheen` raked across the top third; primary uses `--color-primary`→`--color-accent` blend, hover deepens saturation and lifts 1px with `--shadow-md`. |
| **Input** | White surface, `--radius-md`, a thin `--color-primary` swirl-tinted border; focus ring bleeds `--color-accent` and the `--gloss-sheen` band brightens. |
| **Card** | The hero: `--color-surface` base with a swirl accent band (`--swirl-gradient`) bleeding off one corner, `--gloss-sheen` overlay, `--radius-lg`, `--shadow-md`. |
| **Nav** | White glossy bar with a thin swirl underline in `--color-primary`/`--color-accent`; logo mark gets the full wirebird treatment. |
| **Modal** | Larger swirl card floating on a soft `--color-bg` scrim, `--shadow-lg`, gloss band at the header only. |
| **Table** | Flat `--color-surface` rows (no swirl on body text) with a swirl-gradient header bar and `--color-lime`/`--color-violet` used sparingly for status. |
| **Tooltip** | Small glossy pill chip, swirl-tinted border, `--shadow-sm`. |
| **Badge** | Mini gradient pill using `--color-lime` or `--color-violet` fills with a thin gloss highlight. |
| **Toggle** | Swirl-gradient track when on, flat `--color-surface-strong` when off; glossy round knob. |
| **Loading** | A rotating wirebird swirl or a shimmering gloss sweep across a skeleton block. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The swirl gradient is saturated and shifts hue across its length — never place body text directly over it; keep body copy on flat `--color-surface` with `--color-text`.
- Gloss-sheen overlays reduce effective contrast at the top of a surface; verify text placed near the sheen band still clears contrast with `contrast_check.py`.
- Keep `--color-lime` and `--color-accent` for small accents/badges only — both fail on light backgrounds at body-text size.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let the swirl gradient bleed off a card corner rather than boxing it in.
- ✅ Keep the base canvas light and airy (`--color-bg`) so the saturated swirls pop.
- ✅ Rake the gloss-sheen highlight consistently top-to-bottom on every glossy surface.

## Don't

- ❌ Put body copy directly on the swirl gradient.
- ❌ Use flat, hard-edged shapes with no gloss — that reads as flat design, not this era.
- ❌ Darken the base background — this style is bright, airy, and optimistic, not moody.

## Don't confuse this with…

*Commonly confused neighbors:* frutiger-aero, y2k-futurism.

vs frutiger-aero: frutiger-aero is glassy/wet/nature-lit surfaces; vectordelia is flat vector swirls with gloss, no realistic glass or water. vs y2k-futurism: y2k-futurism leans chrome/metallic and bubble-UI; vectordelia stays in flat saturated vector illustration.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
