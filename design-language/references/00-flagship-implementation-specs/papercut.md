# Papercut / Paper Collage — Implementation Spec

*Aliases:* paper craft, layered paper, kirigami  
*Slug:* `papercut` · *Category:* texture · *Era:* 2016–present

**Origin.** Digital simulation of layered cut paper.

**Reference example.** Google paper-craft doodles; kids'-brand sites.

## Signature move(s)

Every surface is a piece of cut card stock stacked slightly above the one beneath it: a torn/scalloped edge (`--torn-edge-clip` polygon), a warm matte fill, and a soft directional shadow with a small hard offset (`4px 6px 0 rgba(...,0.14), 0 6px 14px rgba(...,0.12)`) that reads as physical thickness, not a UI elevation token.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Layered paper with soft realistic shadows
- Torn/cut edges, fold lines
- Warm matte pastel stock
- Craft, tactile, storybook

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/papercut.css`.)

```css
/* Papercut / Paper Collage — design tokens (generated from style_catalog.json) */
/* 2016–present | Digital simulation of layered cut paper. */
:root {
  /* color */
  --color-bg: #fbf3e7;
  --color-surface: #fff9f0;
  --color-surface-strong: #ffe8cc;
  --color-border: #e3c9a3;
  --color-text: #3b2c22;
  --color-text-muted: #6b5847;
  --color-primary: #e8623d;
  --color-accent: #4f9c8e;
  --color-torn-shadow: rgba(59, 44, 34, 0.18);
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 2px 3px 0 rgba(59, 44, 34, 0.12), 0 2px 6px rgba(59,44,34,0.1);
  --shadow-md: 4px 6px 0 rgba(59, 44, 34, 0.14), 0 6px 14px rgba(59,44,34,0.12);
  --shadow-lg: 6px 10px 0 rgba(59, 44, 34, 0.16), 0 12px 28px rgba(59,44,34,0.14);
  /* font */
  --font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
  --font-display: 'Caveat', 'Comic Neue', cursive;
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
  /* extra (torn edges, fold lines) */
  --torn-edge-clip: polygon(0% 2%, 3% 0%, 8% 3%, 14% 0%, 20% 2%, 27% 0%, 34% 3%, 41% 0%, 48% 2%, 55% 0%, 62% 3%, 69% 0%, 76% 2%, 83% 0%, 90% 3%, 97% 0%, 100% 2%, 100% 98%, 96% 100%, 90% 98%, 83% 100%, 76% 98%, 69% 100%, 62% 98%, 55% 100%, 48% 98%, 41% 100%, 34% 98%, 27% 100%, 20% 98%, 14% 100%, 8% 98%, 3% 100%, 0% 98%);
  --fold-line: linear-gradient(90deg, transparent 0%, rgba(59,44,34,0.08) 50%, transparent 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Papercut / Paper Collage — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fbf3e7",
        "surface": "#fff9f0",
        "surface-strong": "#ffe8cc",
        "border": "#e3c9a3",
        "text": "#3b2c22",
        "text-muted": "#6b5847",
        "primary": "#e8623d",
        "accent": "#4f9c8e",
        "torn-shadow": "rgba(59, 44, 34, 0.18)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 3px 0 rgba(59, 44, 34, 0.12), 0 2px 6px rgba(59,44,34,0.1)",
        "md": "4px 6px 0 rgba(59, 44, 34, 0.14), 0 6px 14px rgba(59,44,34,0.12)",
        "lg": "6px 10px 0 rgba(59, 44, 34, 0.16), 0 12px 28px rgba(59,44,34,0.14)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Caveat'", "'Comic Neue'", "cursive"],
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

// Signature `extra` tokens are CSS-only (clip-path/gradients).
// Add them as CSS custom properties or arbitrary values:
//   --torn-edge-clip: polygon(0% 2%, 3% 0%, 8% 3%, ... 0% 98%);
//   --fold-line: linear-gradient(90deg, transparent 0%, rgba(59,44,34,0.08) 50%, transparent 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Small torn-paper chip: `--radius-md`, `--shadow-sm`, `clip-path: var(--torn-edge-clip)` on larger CTAs only (too fine a clip on small buttons muddies the label). |
| **Input** | Flat matte card (`--color-surface`) with a `--fold-line` gradient along the bottom edge instead of a border; focus deepens to `--shadow-sm`. |
| **Card** | The hero: `--torn-edge-clip`, `--shadow-md`, `--color-surface` fill, subtle rotate(-1deg) so it looks physically placed, not aligned to a grid. |
| **Nav** | A strip of layered paper tabs, each slightly overlapping the next with increasing `--shadow-sm` to `--shadow-md` to suggest a stack. |
| **Modal** | Largest torn card (`--shadow-lg`), floating over a dimmed `--color-bg` scrim so the "lifted off the table" depth reads clearly. |
| **Table** | Rows as thin paper strips with `--fold-line` dividers instead of hard rules; header row gets `--color-surface-strong`. |
| **Tooltip** | Tiny torn scrap with `--shadow-sm`, `--radius-sm`; keep the torn-edge clip subtle at this size or simplify to a plain rounded rect. |
| **Badge** | Solid `--color-primary` or `--color-accent` paper chip, `--radius-pill`, tiny drop shadow only (no torn edge — too small to read). |
| **Toggle** | Track = folded paper channel (`--fold-line` inset), knob = a small circular paper disc with `--shadow-sm` that "lifts" on toggle. |
| **Loading** | A paper strip peeling/unfurling animation, or three dots each with staggered `--shadow-sm` bounce. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The warm, low-contrast matte palette (`--color-text-muted` on `--color-bg`) needs explicit contrast verification — pastel-on-pastel stock is the biggest risk here.
- `clip-path` torn edges can crop focus rings; render focus indicators as an outer `box-shadow` ring drawn *before* the clip-path is applied (on a wrapper element), not relying on native `outline` which gets clipped.
- Keep the script `--font-display` for short headline moments only; body copy and controls stay on `--font-sans`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary the rotation (±1–2deg) and shadow depth per card to simulate a hand-arranged stack.
- ✅ Reserve `--torn-edge-clip` for larger surfaces (cards, modals) where the scalloped detail is visible.
- ✅ Use warm matte pastels consistently — cool or saturated colors break the "craft paper" material read.

## Don't

- ❌ Apply the torn-edge clip-path to tiny elements like badges or icons — it turns to visual noise.
- ❌ Mix glossy/saturated gradients into the palette — papercut reads as matte, not shiny.
- ❌ Stack more than 2–3 layers of "paper" depth on one screen; it starts looking cluttered instead of crafted.

## Don't confuse this with…

*Commonly confused neighbors:* hand-drawn, claymorphism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
