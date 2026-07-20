# Fairycore — Implementation Spec

*Aliases:* faeriecore  
*Slug:* `fairycore` · *Category:* niche · *Era:* 2020–present

**Origin.** Whimsical fairy-tale nature aesthetic.

**Reference example.** Fairycore Pinterest/TikTok.

## Signature move(s)

A dual-tone pink-to-mint gradient backdrop (`--bg-gradient-a` to `--bg-gradient-b`) with a warm gold glow (`--color-glow: #fff3c4`) pooling at the edges of key surfaces like captured sunlight, paired with an elegant serif/script display font for headlines against a soft rounded sans body. Every elevated surface gets both a rose-tinted shadow and, on hero moments, a `--shadow-glow` halo.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Ethereal pastels, wings, flowers, glow
- Enchanted-forest whimsy
- Sparkle and soft light
- Dreamy, magical, delicate

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/fairycore.css`.)

```css
/* Fairycore — design tokens (generated from style_catalog.json) */
/* 2020–present | Whimsical fairy-tale nature aesthetic. */
:root {
  /* color */
  --color-bg: #fdf3f8;
  --color-bg-gradient-a: #f6e3f5;
  --color-bg-gradient-b: #e3f0e6;
  --color-surface: #fffdfb;
  --color-surface-strong: #fbeaf3;
  --color-border: #e7bfd9;
  --color-text: #4a2b45;
  --color-text-muted: #7a5573;
  --color-primary: #c9679a;
  --color-accent: #8fb98a;
  --color-glow: #fff3c4;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(201,103,154,0.16);
  --shadow-md: 0 8px 24px rgba(201,103,154,0.20);
  --shadow-lg: 0 16px 40px rgba(201,103,154,0.24);
  --shadow-glow: 0 0 24px rgba(255,243,196,0.55);
  /* font */
  --font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
  --font-display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif;
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
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Fairycore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf3f8",
        "bg-gradient-a": "#f6e3f5",
        "bg-gradient-b": "#e3f0e6",
        "surface": "#fffdfb",
        "surface-strong": "#fbeaf3",
        "border": "#e7bfd9",
        "text": "#4a2b45",
        "text-muted": "#7a5573",
        "primary": "#c9679a",
        "accent": "#8fb98a",
        "glow": "#fff3c4",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(201,103,154,0.16)",
        "md": "0 8px 24px rgba(201,103,154,0.20)",
        "lg": "0 16px 40px rgba(201,103,154,0.24)",
        "glow": "0 0 24px rgba(255,243,196,0.55)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Cormorant Garamond'", "'Parisienne'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` fill, `--shadow-sm`; hover adds `--shadow-glow` so it seems to catch light. |
| **Input** | `--color-surface` fill, thin `--color-border`; focus ring blends `--color-primary` with a faint `--shadow-glow`. |
| **Card** | `--radius-lg` on a gradient wash between `--color-bg-gradient-a` and `--color-bg-gradient-b`, `--shadow-md`, glow pooled in one corner. |
| **Nav** | Translucent bar over the gradient background, `--font-display` for the wordmark, `--font-sans` for links. |
| **Modal** | `--radius-lg`, `--shadow-lg` + `--shadow-glow`, floating over a softly gradient-tinted scrim rather than flat black. |
| **Table** | Keep rows on plain `--color-surface` with minimal decoration — reserve the glow/gradient treatment for marketing surfaces, not dense data. |
| **Tooltip** | Small `--color-surface-strong` chip, `--shadow-sm`, `--font-sans` (never script — too hard to read at that size). |
| **Badge** | `--radius-pill`, `--color-accent` (moss green) or `--color-primary` (rose), subtle glow on "featured" variants only. |
| **Toggle** | Track in `--color-surface-strong`; active state adds `--shadow-glow` around the knob, like a firefly. |
| **Loading** | A slow shimmer/sparkle animation (small radial highlights drifting across a skeleton) rather than a mechanical spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Script/serif `--font-display` (Parisienne/Cormorant) is decorative and low-legibility at small sizes — restrict it to display headings ≥ `--text-2xl`, never body copy or form labels.
- The pastel gradient background can reduce contrast for `--color-text-muted` — verify it against both `--color-bg-gradient-a` and `--color-bg-gradient-b` endpoints with `contrast_check.py`, not just the flat `--color-bg`.
- Glow effects must not be the sole focus indicator — pair `--shadow-glow` with a solid, high-contrast outline for keyboard focus.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the pink-to-mint gradient as an ambient backdrop, not on top of readable content.
- ✅ Let the gold glow feel like a single light source, not evenly distributed everywhere.
- ✅ Reserve `--font-display` script styling for hero headlines and short labels only.

## Don't

- ❌ Put dense text directly on the gradient without a solid card surface underneath.
- ❌ Use hard, neutral gray shadows — every shadow here should carry a warm rose tint.
- ❌ Overuse the glow on more than one or two elements per screen; it should feel rare and magical.

## Don't confuse this with…

*Commonly confused neighbors:* cottagecore, angelcore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
