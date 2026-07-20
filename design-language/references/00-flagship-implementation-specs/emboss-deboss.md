# Emboss / Deboss — Implementation Spec

*Aliases:* letterpress UI, pressed type  
*Slug:* `emboss-deboss` · *Category:* morphism · *Era:* 2000s–present

**Origin.** Print letterpress heritage adapted to screen (text-shadow technique).

**Reference example.** Letterpress text effects on textured web headers (~2010).

## Signature move(s)

A paired 1px `text-shadow` on type only: a light shadow on one diagonal and a dark shadow on the opposite diagonal (`--emboss-text` / `--deboss-text`), read against a muted, slightly textured mid-tone surface. Embossed type looks raised off the page; deboss looks stamped in. The effect lives entirely in the text layer — the surrounding card geometry stays flat.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Type looks stamped into or raised from the surface
- Subtle 1px light/dark text-shadow pair
- Works on textured/tinted backgrounds
- Tactile, premium feel

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/emboss-deboss.css`.)

```css
/* Emboss / Deboss — design tokens (generated from style_catalog.json) */
/* 2000s–present | Print letterpress heritage adapted to screen (text-shadow technique). */
:root {
  /* color */
  --color-bg: #dbd6cb;
  --color-surface: #d3cebf;
  --color-surface-strong: #c8c2b0;
  --color-border: #b8b1a0;
  --color-text: #4a4538;
  --color-text-muted: #6e6857;
  --color-primary: #7a5a3a;
  --color-accent: #a8763f;
  --color-shadow-lo: rgba(60, 55, 40, 0.45);
  --color-shadow-hi: rgba(255, 255, 250, 0.65);
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 1px 1px 2px var(--color-shadow-lo), -1px -1px 1px var(--color-shadow-hi);
  --shadow-md: inset 2px 2px 3px var(--color-shadow-lo), inset -2px -2px 3px var(--color-shadow-hi);
  --shadow-lg: inset 3px 3px 6px var(--color-shadow-lo), inset -3px -3px 6px var(--color-shadow-hi);
  /* font */
  --font-sans: 'Georgia', 'Iowan Old Style', serif;
  --font-display: 'Caslon', 'Georgia', serif;
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
  /* extra (signature gradients, composite borders, filters) */
  --emboss-text: 1px 1px 0 var(--color-shadow-hi), -1px -1px 1px var(--color-shadow-lo);
  --deboss-text: -1px -1px 0 var(--color-shadow-hi), 1px 1px 1px var(--color-shadow-lo);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Emboss / Deboss — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#dbd6cb",
        "surface": "#d3cebf",
        "surface-strong": "#c8c2b0",
        "border": "#b8b1a0",
        "text": "#4a4538",
        "text-muted": "#6e6857",
        "primary": "#7a5a3a",
        "accent": "#a8763f",
        "shadow-lo": "rgba(60, 55, 40, 0.45)",
        "shadow-hi": "rgba(255, 255, 250, 0.65)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "1px 1px 2px var(--color-shadow-lo), -1px -1px 1px var(--color-shadow-hi)",
        "md": "inset 2px 2px 3px var(--color-shadow-lo), inset -2px -2px 3px var(--color-shadow-hi)",
        "lg": "inset 3px 3px 6px var(--color-shadow-lo), inset -3px -3px 6px var(--color-shadow-hi)",
      },
      fontFamily: {
        "sans": ["'Georgia'", "'Iowan Old Style'", "serif"],
        "display": ["'Caslon'", "'Georgia'", "serif"],
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --emboss-text: 1px 1px 0 var(--color-shadow-hi), -1px -1px 1px var(--color-shadow-lo);
//   --deboss-text: -1px -1px 0 var(--color-shadow-hi), 1px 1px 1px var(--color-shadow-lo);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Label text uses `--emboss-text`; the button body itself gets `--shadow-sm` (a shallow outer bevel), so it reads as a stamped tile, not a glossy control. |
| **Input** | Placeholder/label text uses `--deboss-text`; the field body uses `--shadow-md` (inset) so the whole field looks pressed into the page. |
| **Card** | Flat `--color-surface` fill (no gradient), heading text in `--emboss-text`, body copy left plain for legibility. |
| **Nav** | Wordmark/logo in strong `--emboss-text`; nav links stay flat until hover, when they gain a subtle deboss. |
| **Modal** | Title uses `--emboss-text` over `--color-surface-strong`; body content plain — never emboss long paragraphs. |
| **Table** | Column headers embossed; cell text left flat so dense data stays scannable. |
| **Tooltip** | Small debossed label chip — reads as a stamped tag. |
| **Badge** | Short embossed text on a `--color-surface-strong` pill; no colored fills, the effect *is* the color story. |
| **Toggle** | Track uses `--shadow-md` (recessed groove); "on/off" text label (if present) embossed. |
| **Loading** | A pulsing emboss-to-deboss text crossfade on a status word ("Loading…") rather than a spinner graphic. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The whole premise is *low* text-to-background contrast by design (light/dark shadow pair on a mid-tone surface) — verify actual contrast ratio of the text fill color itself, not the shadow, against the surface with `contrast_check.py`.
- Never emboss/deboss body paragraphs or anything read at length; reserve the effect for headings, labels, and short UI text.
- Provide a `prefers-contrast: more` fallback that drops the dual-shadow and switches to a solid, high-contrast text color.
- Keep interactive text (links, button labels) at sufficient size — 1px shadows disappear at small font sizes on high-DPI displays, so don't use this technique below ~14px.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve emboss/deboss for headings, labels, and short UI copy.
- ✅ Keep the surrounding surface flat and muted so the text effect is the star.
- ✅ Match shadow direction to a single implied light source across the whole page.

## Don't

- ❌ Apply the shadow pair to long-form body text — it becomes an eye strain.
- ❌ Use it on saturated or busy backgrounds; it only reads on calm, low-contrast, textured surfaces.
- ❌ Combine emboss and deboss on the same word or line — pick one direction per element.

## Don't confuse this with…

*Commonly confused neighbors:* neumorphism.

vs neumorphism: neumorphism sculpts the entire *container* — a flat monochrome background where cards/buttons have soft dual-directional box-shadows pushing the whole shape in or out. Emboss/Deboss sculpts *type only*, via `text-shadow`, on a textured/tinted (not flat gray) surface — the card geometry itself stays flat.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
