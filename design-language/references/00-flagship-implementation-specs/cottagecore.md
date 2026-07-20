# Cottagecore — Implementation Spec

*Aliases:* farmcore, countrycore  
*Slug:* `cottagecore` · *Category:* niche · *Era:* 2018–present (peak 2020)

**Origin.** Tumblr/TikTok idealized rural life.

**Reference example.** Cottagecore Tumblr; 'Anne with an E' moodboards.

## Signature move(s)

Handmade domesticity: a dashed `--stitch-border` (like gingham bias tape) framing panels, a `--font-script` accent for little handwritten notes ("baked fresh!"), and a warm cream/olive/rust palette that reads like a quilt. The whole UI should feel stitched together rather than manufactured.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Soft floral, gingham, pastoral palettes
- Mushrooms, wildflowers, baking, cottages
- Handwritten/serif type, warm nostalgia
- Cozy, wholesome, slow-living

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cottagecore.css`.)

```css
/* Cottagecore — design tokens (generated from style_catalog.json) */
/* 2018–present (peak 2020) | Tumblr/TikTok idealized rural life. */
:root {
  /* color */
  --color-bg: #f6f0e3;
  --color-surface: #fffdf7;
  --color-surface-strong: #ede2c8;
  --color-border: #b8a473;
  --color-text: #3f3423;
  --color-text-muted: #6b5c3f;
  --color-primary: #7a8450;
  --color-accent: #c1694f;
  --color-gingham: rgba(122, 132, 80, 0.16);
  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 5px rgba(63, 52, 35, 0.10);
  --shadow-md: 0 6px 14px rgba(63, 52, 35, 0.14);
  --shadow-lg: 0 12px 26px rgba(63, 52, 35, 0.16);
  /* font */
  --font-sans: 'Nunito', system-ui, sans-serif;
  --font-display: 'Playfair Display', 'Lora', Georgia, serif;
  --font-script: 'Caveat', cursive;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-entrance: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  /* extra (signature gradients, composite borders, filters) */
  --stitch-border: 2px dashed var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cottagecore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f0e3",
        "surface": "#fffdf7",
        "surface-strong": "#ede2c8",
        "border": "#b8a473",
        "text": "#3f3423",
        "text-muted": "#6b5c3f",
        "primary": "#7a8450",
        "accent": "#c1694f",
        "gingham": "rgba(122, 132, 80, 0.16)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 5px rgba(63, 52, 35, 0.10)",
        "md": "0 6px 14px rgba(63, 52, 35, 0.14)",
        "lg": "0 12px 26px rgba(63, 52, 35, 0.16)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Playfair Display'", "'Lora'", "Georgia", "serif"],
        "script": ["'Caveat'", "cursive"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
        "entrance": "cubic-bezier(0, 0, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --stitch-border: 2px dashed var(--color-border);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rounded (`--radius-md`) olive-fill button, `--stitch-border` on outline variants; a little wobble on hover, like fabric giving. |
| **Input** | Cream field with a `--stitch-border` frame instead of a solid rule; a `--font-script` placeholder ("what's your name?"). |
| **Card** | `--color-surface` card, `--stitch-border`, soft `--shadow-md`, generous `--radius-lg` — like a recipe card pinned to a corkboard. |
| **Nav** | A `--color-gingham` tinted bar; active link gets a hand-drawn underline via `--font-script`. |
| **Modal** | A parchment card with a `--stitch-border` seam and a rust (`--color-accent`) wax-seal-style close button. |
| **Table** | Rows on alternating `--color-bg`/`--color-surface`, dashed row dividers echoing the stitch motif. |
| **Tooltip** | Small cream note with a `--font-script` label, like a tag tied with twine. |
| **Badge** | Rust or olive pill badge, `--radius-pill`, reading like a jam-jar label. |
| **Toggle** | Linen track, olive knob; 'on' state feels like a lit stove. |
| **Loading** | A gently rotating flower/leaf icon, or a soft cross-stitch progress dash — reduced-motion gets a static "baking…" label. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--font-script` is decorative-only — never use it for body copy, form labels people must read precisely, or error text; keep those in `--font-sans`.
- Dashed `--stitch-border` at 2px can read as a focus ring; give real focus states a distinct solid outline in `--color-accent` so they aren't lost in the decoration.
- Verify `--color-text-muted` on `--color-surface-strong` (both warm mid-tones) clears 4.5:1 before shipping body text on it.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve the script font for short accent phrases, never paragraphs.
- ✅ Use the dashed stitch-border motif consistently as the style's one structural signature.
- ✅ Keep the palette warm and muted — olive, rust, cream, never a cool gray.

## Don't

- ❌ Oversaturate florals/greens into a garish, cartoonish palette — cottagecore is sun-faded, not neon.
- ❌ Use hard drop shadows or sharp corners — everything should feel soft and handmade.
- ❌ Let gingham/stitch textures compete with body text for attention.

## Don't confuse this with…

*Commonly confused neighbors:* light-academia, fairycore, goblincore.

vs light academia: light academia is about books and study; cottagecore is about gardens, baking, and domestic craft. vs fairycore: fairycore is ethereal/magical with sparkle and glow; cottagecore stays grounded and rustic. vs goblincore: goblincore is intentionally messy/muddy/"ugly-cute"; cottagecore is tidy and idealized.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
