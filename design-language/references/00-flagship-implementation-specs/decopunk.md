# Decopunk — Implementation Spec

*Aliases:* Deco-punk, raygun deco
*Slug:* `decopunk` · *Category:* retrofuturism · *Era:* 2010s–present

**Origin.** Sleeker, brighter offshoot of dieselpunk (1920s–40s).

**Reference example.** BioShock (Rapture); The Great Gatsby (2013).

## Signature move(s)

A dark near-black canvas polished with a metallic gold gradient (`--gold-gradient`) on every emphasis edge, plus a repeating chevron texture (`--chevron-bg`) at low opacity behind hero surfaces — sharp, symmetric, and geometric where dieselpunk would be gritty. Corners stay tight (2–8px), never soft, evoking machined chrome rather than hand-forged metal.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Polished Art Deco chrome and glamour
- Brighter palette than gritty dieselpunk
- Streamlined luxury machine age
- Gold, cream, chrome, geometric

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/decopunk.css`.)

```css
/* Decopunk — design tokens (generated from style_catalog.json) */
/* 2010s–present | Sleeker, brighter offshoot of dieselpunk (1920s–40s). */
:root {
  /* color */
  --color-bg: #12100a;
  --color-surface: #1c1811;
  --color-surface-strong: #262019;
  --color-border: #caa24b;
  --color-text: #f6ecd6;
  --color-text-muted: #cbb98f;
  --color-primary: #e3b23c;
  --color-accent: #6fd3c7;
  --color-chrome: #e9e4d8;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 4px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.5);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.55);
  /* font */
  --font-sans: 'Century Gothic', 'Futura', system-ui, sans-serif;
  --font-display: 'Poiret One', 'Broadway', 'Futura', serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (gold gradient + chevron texture) */
  --gold-gradient: linear-gradient(135deg, #f6d787, #caa24b 45%, #8a6a24 100%);
  --chevron-bg: repeating-linear-gradient(115deg, rgba(202,162,75,0.08) 0 6px, transparent 6px 26px);
  --border-metal: 1px solid transparent;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Decopunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#12100a",
        "surface": "#1c1811",
        "surface-strong": "#262019",
        "border": "#caa24b",
        "text": "#f6ecd6",
        "text-muted": "#cbb98f",
        "primary": "#e3b23c",
        "accent": "#6fd3c7",
        "chrome": "#e9e4d8",
      },
      borderRadius: {
        "sm": "2px", "md": "4px", "lg": "8px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 4px rgba(0,0,0,0.4)",
        "md": "0 4px 16px rgba(0,0,0,0.5)",
        "lg": "0 12px 32px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Poiret One'", "'Broadway'", "'Futura'", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature gold-gradient/chevron tokens are CSS-only:
//   --gold-gradient: linear-gradient(135deg, #f6d787, #caa24b 45%, #8a6a24 100%);
//   --chevron-bg: repeating-linear-gradient(115deg, rgba(202,162,75,0.08) 0 6px, transparent 6px 26px);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, `--gold-gradient` fill for primary, dark `--color-bg` text; ghost variant uses a 1px `--color-border` gold outline. |
| **Input** | `--color-surface` fill, `--color-border` gold outline, `--radius-sm`; focus adds `--color-accent` teal ring. |
| **Card** | `--color-surface`, `--chevron-bg` low-opacity texture, `--color-border` gold hairline, `--shadow-md`, `--radius-md`. |
| **Nav** | `--color-bg` bar with a `--gold-gradient` bottom border line; centered `--font-display` wordmark in `--color-primary`. |
| **Modal** | `--color-surface-strong` panel, `--gold-gradient` header band, `--chevron-bg` texture, `--shadow-lg`. |
| **Table** | Flat `--color-surface`/`--color-surface-strong` rows, header in `--gold-gradient` with dark text, thin gold rules. |
| **Tooltip** | Small dark chip, gold outline, `--font-sans` label, `--shadow-sm`. |
| **Badge** | `--radius-sm` chip, `--gold-gradient` or `--color-accent` fill, dark text — like an engraved plaque. |
| **Toggle** | Dark track with gold outline, `--gold-gradient` knob when on. |
| **Loading** | A rotating sunburst/chevron glyph in `--color-primary`, or a `--gold-gradient` progress sweep. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Gold-on-dark text (`--color-primary` on `--color-bg`) reads well, but verify `--color-text-muted` (#cbb98f) on `--color-surface` still clears 4.5:1 for body copy.
- `--gold-gradient` fills need a single reliable text color checked against both gradient stops (light champagne and dark bronze) — don't assume the midpoint passes.
- Keep `--chevron-bg` texture strictly decorative and low-opacity — never let it sit directly behind small text without a solid tint floor.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the gold gradient consistently for emphasis edges (buttons, headers, badges) — one gold recipe, reused everywhere.
- ✅ Keep corners tight and geometric (2–8px) to preserve the "machined chrome" feel.
- ✅ Reserve teal `--color-accent` for secondary/informational accents against the gold-dominant palette.

## Don't

- ❌ Soften corners into large rounded radii — decopunk is precise and angular, not friendly.
- ❌ Let the chevron texture become a loud, high-opacity background — it's a whisper of pattern, not wallpaper.
- ❌ Mix in gritty, desaturated tones — decopunk is the *polished*, brighter sibling of dieselpunk.

## Don't confuse this with…

*Commonly confused neighbors:* dieselpunk, art-deco, streamline-moderne.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
