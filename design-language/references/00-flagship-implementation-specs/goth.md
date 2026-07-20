# Goth / Gothic — Implementation Spec

*Aliases:* gothcore, dark aesthetic  
*Slug:* `goth` · *Category:* niche · *Era:* 1980s–present

**Origin.** Post-punk goth subculture.

**Reference example.** Goth music/fashion; The Cure-era visuals.

## Signature move(s)

A near-black base with a hairline `--border-filigree` and a repeating `--hairline-gradient` (transparent → antique-gold → transparent) run along dividers, like the gilt edge of a Victorian mourning card. Deep blood/rose reds (`--color-blood`, `--color-rose`) appear only as small, deliberate accents against the void, and blackletter/decorative serif display type carries the drama the color palette withholds.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Black-dominant, deep reds/purples
- Ornate Victorian/ecclesiastical motifs
- Blackletter/serif type, crosses, roses
- Romantic, dark, dramatic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/goth.css`.)

```css
/* Goth / Gothic — design tokens (generated from style_catalog.json) */
/* 1980s–present | Post-punk goth subculture. */
:root {
  /* color */
  --color-bg: #0a0508;
  --color-surface: #150c11;
  --color-surface-strong: #1f1218;
  --color-border: #4a1f2e;
  --color-text: #ece3e6;
  --color-text-muted: #b79aa5;
  --color-primary: #7a1128;
  --color-accent: #9c6b3f;
  --color-blood: #5c0e1f;
  --color-rose: #b83a52;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.6);
  --shadow-md: 0 6px 20px rgba(0,0,0,0.7);
  --shadow-lg: 0 14px 40px rgba(0,0,0,0.8);
  --shadow-ecclesiastic: inset 0 0 0 1px rgba(156,107,63,0.35);
  /* font */
  --font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
  --font-display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif;
  --font-mono: 'Courier Prime', ui-monospace, monospace;
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
  /* extra: ornate filigree border + rose-gold hairline, repeated on nav/card/btn */
  --border-filigree: 1px solid var(--color-border);
  --hairline-gradient: linear-gradient(90deg, transparent, var(--color-accent) 50%, transparent);
  --bg-image: radial-gradient(90% 60% at 50% -10%, #1f0c14 0%, #0a0508 60%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Goth / Gothic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0508",
        "surface": "#150c11",
        "surface-strong": "#1f1218",
        "border": "#4a1f2e",
        "text": "#ece3e6",
        "text-muted": "#b79aa5",
        "primary": "#7a1128",
        "accent": "#9c6b3f",
        "blood": "#5c0e1f",
        "rose": "#b83a52",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.6)",
        "md": "0 6px 20px rgba(0,0,0,0.7)",
        "lg": "0 14px 40px rgba(0,0,0,0.8)",
        "ecclesiastic": "inset 0 0 0 1px rgba(156,107,63,0.35)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'UnifrakturCook'", "'Pirata One'", "'Cinzel Decorative'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --border-filigree: 1px solid var(--color-border);
//   --hairline-gradient: linear-gradient(90deg, transparent, var(--color-accent) 50%, transparent);
//   --bg-image: radial-gradient(90% 60% at 50% -10%, #1f0c14 0%, #0a0508 60%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-blood` or `--color-primary` fill, `--border-filigree`, `--shadow-md`; hover reveals a `--hairline-gradient` sweep across the top edge like candlelight catching gilt trim. |
| **Input** | `--color-surface` fill, `--border-filigree`, `--radius-sm`; focus ring in `--color-accent` antique gold, never a bright color. |
| **Card** | The hero: `--bg-image` radial vignette, `--border-filigree`, `--shadow-ecclesiastic` inset gold hairline, `--shadow-lg`. |
| **Nav** | Near-black bar, `--hairline-gradient` divider beneath it, active tab underlined in `--color-rose`. |
| **Modal** | Large `--radius-lg` (still small in absolute terms — goth radii stay tight), `--shadow-lg`, `--border-filigree`, centered over a near-opaque `--color-bg` scrim. |
| **Table** | Rows alternate `--color-surface`/`--color-surface-strong`, `--border-filigree` row dividers, header text in `--font-display` small-caps. |
| **Tooltip** | Small `--color-surface-strong` chip, `--border-filigree`, `--color-rose` text for emphasis words. |
| **Badge** | Pill or narrow rectangle in `--color-blood`, gold `--border-filigree` outline — like a wax seal. |
| **Toggle** | Track in `--color-surface`, knob in `--color-rose`; when active, add `--shadow-ecclesiastic` glow. |
| **Loading** | A slow pulsing hairline gradient sweep (`--hairline-gradient`) traveling across a bar, evoking candlelight rather than a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Near-black-on-black surfaces (`--color-bg` vs `--color-surface`/`--color-surface-strong`) need `contrast_check.py` run on real text, since the visual difference between these tones is subtle by design.
- Blackletter/`UnifrakturCook` `--font-display` is illegible at body-text sizes and for many screen readers' font-rendering paths — restrict it strictly to large display headers, never labels, buttons, or paragraphs.
- `--color-blood` and `--color-primary` reds are dark and can fail contrast against `--color-bg`; use `--color-rose` (the lighter red) for any text that must sit directly on the near-black background.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep reds and golds as accents against the black-dominant base, never as large fills.
- ✅ Reuse `--border-filigree` and `--hairline-gradient` on every card/nav/divider for the ornate-but-restrained signature.
- ✅ Use `--font-display` sparingly — its illegibility at small sizes is a feature for headers, a bug everywhere else.

## Don't

- ❌ Fill large surfaces with saturated red — it should stay a deep, restrained accent.
- ❌ Set body copy or UI labels in blackletter type.
- ❌ Flatten the near-black tonal layering into a single flat black — the subtle depth between bg/surface/surface-strong is the whole "candlelit" effect.

## Don't confuse this with…

*Commonly confused neighbors:* dark-academia, victorian, witchcore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
