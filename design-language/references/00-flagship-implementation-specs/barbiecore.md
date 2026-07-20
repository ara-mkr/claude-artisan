# Barbiecore — Implementation Spec

*Aliases:* Barbie pink  
*Slug:* `barbiecore` · *Category:* niche · *Era:* 2022–present

**Origin.** 2023 Barbie film revived hot-pink maximal femininity.

**Reference example.** Barbie (2023) marketing.

## Signature move(s)

Everything is drenched in one inescapable saturated hot pink — background, surfaces, chrome — finished with a diagonal glossy-plastic shine sweep across every raised surface, as if the whole UI were injection-molded and buffed to a showroom shine. Corners go fully soft (pill/rounded) so nothing reads as "serious software," and a sunshine-yellow accent punches through for anything that needs to pop.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Saturated hot/bubblegum pink everywhere
- Glossy plastic, glam, playful
- Bold sans display type
- Fun, femme, unapologetic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/barbiecore.css`.)

```css
/* Barbiecore — design tokens (generated from style_catalog.json) */
/* 2022–present | 2023 Barbie film revived hot-pink maximal femininity. */
:root {
  /* color */
  --color-bg: #ff2e93;
  --color-surface: #ffffff;
  --color-surface-strong: #ffd6ec;
  --color-border: #ffffff;
  --color-text: #3a0021;
  --color-text-muted: #7a0a45;
  --color-primary: #ff0080;
  --color-accent: #ffe600;
  /* radius — glossy plastic pill shapes everywhere */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 4px 10px rgba(122,10,69,0.25);
  --shadow-md: 0 10px 26px rgba(122,10,69,0.3);
  --shadow-lg: 0 20px 46px rgba(122,10,69,0.34);
  /* font */
  --font-sans: 'Poppins', 'Baloo 2', system-ui, sans-serif;
  --font-display: 'Baloo 2', 'Poppins', system-ui, sans-serif;
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
  /* ease — bouncy, toy-like overshoot */
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
  /* extra — signature glossy plastic shine: a diagonal white highlight sweep */
  --gloss-shine: linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Barbiecore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ff2e93",
        "surface": "#ffffff",
        "surface-strong": "#ffd6ec",
        "border": "#ffffff",
        "text": "#3a0021",
        "text-muted": "#7a0a45",
        "primary": "#ff0080",
        "accent": "#ffe600",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 10px rgba(122,10,69,0.25)",
        "md": "0 10px 26px rgba(122,10,69,0.3)",
        "lg": "0 20px 46px rgba(122,10,69,0.34)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Poppins'", "system-ui", "sans-serif"],
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

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --gloss-shine: linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Full `--radius-pill`, `--color-primary` fill layered under `--gloss-shine`; hover brightens the shine, active flattens it to read "pressed plastic." |
| **Input** | White `--color-surface` fill, thick white border, `--radius-md` corners; focus ring in `--color-accent` for maximum pop against pink. |
| **Card** | `--color-surface` or `--color-surface-strong` base with `--gloss-shine` overlay, `--radius-lg`, `--shadow-md`; the shine sweep is the tell that this is Barbiecore and not just "pink UI." |
| **Nav** | Pill-shaped bar (`--radius-pill`) in `--color-primary` with `--gloss-shine`, floating above the hot-pink page background. |
| **Modal** | Large `--radius-lg` white card with glossy sheen, centered over a darkened `--color-bg` scrim so the surrounding hot pink still reads through. |
| **Table** | Keep rows on flat `--color-surface` (no gloss on data-dense areas); use `--color-accent` sparingly for header underline or sort indicator. |
| **Tooltip** | Small pill chip, `--color-text` on `--color-accent`, so it snaps attention without needing gloss. |
| **Badge** | `--radius-pill`, saturated fill (`--color-primary` or `--color-accent`), bold uppercase label — badges are where the "logo tag" energy lives. |
| **Toggle** | Pill track in `--color-surface-strong`, glossy pink knob that slides with `--ease-standard`'s bounce. |
| **Loading** | A pulsing/glossy pink dot or bar bouncing with the overshoot ease — motion itself should feel like a toy, not a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text` (#3a0021) on the hot-pink `--color-bg` reads as decorative, not body copy — keep long-form text on `--color-surface` white cards, never directly on the saturated pink field.
- The bright yellow `--color-accent` on white or pink can fail contrast for small text — reserve it for large display type, icons, or backgrounds behind dark text, and verify with the contrast script.
- Bouncy `--ease-standard` overshoot motion should respect `prefers-reduced-motion` — fall back to a simple linear fade for users who opt out.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve pure white surfaces for anything with body text or dense data.
- ✅ Repeat the gloss-shine sweep on every raised surface so the "plastic" material feels systemic.
- ✅ Let corners go fully soft — sharp corners break the toy-like read.

## Don't

- ❌ Put body copy directly on the saturated pink background.
- ❌ Mix in muted or desaturated pinks — Barbiecore is maximal, not dusty-rose.
- ❌ Use sharp, boxy shadows — softness and gloss are the whole point.

## Don't confuse this with…

*Commonly confused neighbors:* coquette, mcbling, maximalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
