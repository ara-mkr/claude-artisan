# Tidalpunk — Implementation Spec

*Aliases:* oceanpunk
*Slug:* `tidalpunk` · *Category:* retrofuturism · *Era:* 2019–present

**Origin.** Ocean-focused optimistic offshoot of solarpunk.

**Reference example.** Tidalpunk art community.

## Signature move(s)

A wave-crest scalloped edge (`--wave-crest`, the same radial-gradient scallop technique as a shoreline) topping every card and panel, sitting on a deep-teal ocean gradient (`--kelp-fade`) that darkens toward the page background — as if each surface is a platform emerging from the sea. Gold `--color-accent` marks solar/energy elements against the dominant blues and greens.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Ocean tech: wave/tidal energy, kelp, coral
- Blues, teals, salvaged materials
- Sustainable seafaring future
- Hopeful, aquatic, resourceful

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/tidalpunk.css`.)

```css
/* Tidalpunk — design tokens (generated from style_catalog.json) */
/* 2019–present | Ocean-focused optimistic offshoot of solarpunk. */
:root {
  /* color */
  --color-bg: #0a3d3f;
  --color-surface: #0f4d4f;
  --color-surface-strong: #145e60;
  --color-border: #2f8b83;
  --color-text: #e8f6f3;
  --color-text-muted: #a9d6cf;
  --color-primary: #22b8a3;
  --color-accent: #d9a441;
  --color-kelp: #3f7d4a;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.25);
  --shadow-md: 0 8px 20px rgba(0,0,0,0.30);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.35);
  /* font */
  --font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', 'Poppins', sans-serif;
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
  /* extra (wave-crest edge + kelp-fade gradient) */
  --wave-crest: radial-gradient(circle at 10px -6px, transparent 8px, var(--color-primary) 9px) 0 0/20px 12px repeat-x;
  --kelp-fade: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Tidalpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a3d3f",
        "surface": "#0f4d4f",
        "surface-strong": "#145e60",
        "border": "#2f8b83",
        "text": "#e8f6f3",
        "text-muted": "#a9d6cf",
        "primary": "#22b8a3",
        "accent": "#d9a441",
        "kelp": "#3f7d4a",
      },
      borderRadius: {
        "sm": "8px", "md": "14px", "lg": "22px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.25)",
        "md": "0 8px 20px rgba(0,0,0,0.30)",
        "lg": "0 16px 40px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "'Poppins'", "sans-serif"],
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

// Signature wave-crest/kelp-fade tokens are CSS-only (gradients):
//   --wave-crest: radial-gradient(circle at 10px -6px, transparent 8px, var(--color-primary) 9px) 0 0/20px 12px repeat-x;
//   --kelp-fade: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` teal fill, cream text; gold `--color-accent` variant for "energy" CTAs (solar/tidal power actions). |
| **Input** | `--color-surface` fill, `--color-border` outline, `--radius-md`; focus ring in `--color-accent` gold, like sunlight on water. |
| **Card** | `--kelp-fade` background, `--wave-crest` scalloped top edge, `--color-border` hairline, `--shadow-md`, `--radius-lg`. |
| **Nav** | Deep-teal bar with a `--wave-crest` bottom edge; `--font-display` wordmark in `--color-primary`. |
| **Modal** | `--kelp-fade` panel, `--wave-crest` top and bottom edges, `--shadow-lg`. |
| **Table** | Flat `--color-surface`/`--color-surface-strong` banding (no wave texture — keeps data legible), thin `--color-border` rules. |
| **Tooltip** | Small teal chip, `--color-border`, cream text, `--shadow-sm`. |
| **Badge** | Pill in `--color-accent` gold (energy/positive) or `--color-kelp` green (eco status), dark or cream text depending on fill. |
| **Toggle** | `--color-surface-strong` track, `--color-primary` teal knob when on, faint wave-crest texture on the track. |
| **Loading** | A pulsing wave-crest ripple animation, or a rotating turbine/kelp-frond glyph in `--color-primary`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- This is a dark-surface style — verify `--color-text-muted` (#a9d6cf) on `--color-surface`/`--color-bg` clears 4.5:1, especially where `--kelp-fade` darkens toward `--color-bg`.
- `--wave-crest` scallop pseudo-elements must be `aria-hidden` and non-interactive — decoration only, never a content boundary.
- Don't rely on teal-vs-gold alone to distinguish status (info vs. energy/warning) — colorblind users need an icon or label pairing.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the wave-crest scallop consistently at card/section boundaries, echoing a shoreline.
- ✅ Let `--kelp-fade` darken surfaces toward the page background for a sense of depth/submersion.
- ✅ Reserve gold `--color-accent` for energy/positive actions against the dominant teal-green palette.

## Don't

- ❌ Apply the wave-crest scallop to small interactive controls like buttons — it's a section/card-level motif.
- ❌ Introduce cold grays or neutrals — this palette stays in the ocean blue-green-gold family throughout.
- ❌ Skip the gradient depth cue (`--kelp-fade`) and use flat single-color surfaces — the sense of submersion is part of the signature.

## Don't confuse this with…

*Commonly confused neighbors:* solarpunk, seapunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
