# Sumi-e (Japanese Ink Wash) — Implementation Spec

*Aliases:* ink wash painting, suibokuga, brush ink style  
*Slug:* `sumi-e` · *Category:* historical · *Era:* 14th century–present

**Origin.** Traditional East Asian ink wash painting, brought to Japan via Zen Buddhist monks from Song-dynasty China.

**Reference example.** Sesshu Toyo's landscape scrolls; Hasegawa Tohaku 'Pine Trees' screen.

## Signature move(s)

A single ink value (near-black) graded from a dense, wet stroke to a dry, almost-vanished trail (bokashi), painted across a warm cream rice-paper ground. The composition leaves most of the surface empty — negative space (ma) is the design, not the leftover — and the whole thing is asymmetric and organic, never gridded. One small red seal (hanko) is the only color, placed deliberately off-balance.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds
- Visible brush-stroke texture and ink-bleed edges
- Deliberate negative space (ma) as a compositional element
- Asymmetric, organic compositions with a single red seal (hanko) accent

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/sumi-e.css`.)

```css
/* Sumi-e — design tokens (generated from style_catalog.json) */
/* 14th century–present | Traditional East Asian ink wash painting. */
:root {
  /* color */
  --color-bg: #f4efe4;
  --color-surface: #faf6ec;
  --color-surface-2: #ede5d3;
  --color-text: #1c1c1c;
  --color-text-muted: #5a564c;
  --color-primary: #232323;
  --color-accent: #b13d2c;
  --color-ink-grey: #8c8676;
  --color-ink-wash: #3d3a33;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 14px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-ink-bleed: 0 6px 18px rgba(28,28,28,0.14);
  --shadow-ink-bleed-sm: 0 2px 8px rgba(28,28,28,0.10);
  /* font */
  --font-sans: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif;
  --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;
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
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --ink-gradient: linear-gradient(160deg, #232323 0%, #5a564c 55%, transparent 100%);
  --seal-stamp: 0 0 0 2px #b13d2c;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Sumi-e — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f4efe4",
        "surface": "#faf6ec",
        "surface-2": "#ede5d3",
        "text": "#1c1c1c",
        "text-muted": "#5a564c",
        "primary": "#232323",
        "accent": "#b13d2c",
        "ink-grey": "#8c8676",
        "ink-wash": "#3d3a33",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "ink-bleed": "0 6px 18px rgba(28,28,28,0.14)",
        "ink-bleed-sm": "0 2px 8px rgba(28,28,28,0.10)",
      },
      fontFamily: {
        "sans": ["'Shippori Mincho'", "'Noto Serif JP'", "'Zen Old Mincho'", "serif"],
        "display": ["'Zen Old Mincho'", "'Shippori Mincho'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ink-gradient: linear-gradient(160deg, #232323 0%, #5a564c 55%, transparent 100%);
//   --seal-stamp: 0 0 0 2px #b13d2c;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Ink-black fill fading via `--ink-gradient` toward one edge; cream text; sharp near-square radius. |
| **Input** | Plain cream field with a single thin ink-grey underline (not a full border) — evokes a brushed baseline. |
| **Card** | Generous empty margin around a small block of content (ma); one soft ink-bleed shadow, no hard border. |
| **Nav** | Minimal bar, mostly empty, ink-black wordmark left-aligned, nothing else competing for space. |
| **Modal** | Fades in like ink spreading on wet paper; panel edge softly blurred rather than crisp. |
| **Table** | Ultra-minimal rules — a single hairline under the header, no cell borders, lots of row padding. |
| **Tooltip** | Small cream bubble with a thin ink-grey rule, understated. |
| **Badge** | The one place full color appears: a small red-seal (hanko) circle or square, off-center. |
| **Toggle** | Track as a thin ink brush-stroke line; knob is a solid ink dot that slides along it. |
| **Loading** | A single expanding ink blot/ring that fades, echoing a brush touching paper. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Near-black ink text (`--color-text: #1c1c1c`) on cream (`--color-bg: #f4efe4`) passes AA comfortably — verify with `contrast_check.py` on every text/background pairing, especially `--color-text-muted` on `--color-surface-2`.
- Don't let the ink-gradient fade obscure button or label text — keep the gradient decorative (background/border) and set label text at full opacity on a solid ink value.
- The negative-space philosophy can tempt over-thin touch targets — keep real hit areas at 44px even when the visual mark is small.
- Keep focus rings a solid, visible ink or seal-red outline; the style's minimalism should never remove focus indication.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Leave real empty space — ma is structural, not leftover margin.
- ✅ Keep color to one red seal accent; everything else stays ink-on-paper.
- ✅ Let strokes/borders taper or fade rather than terminate abruptly.

## Don't

- ❌ Add multiple accent colors — sumi-e is monochrome-plus-one-red-seal, not a palette.
- ❌ Use bold flat outlines or heavy borders — that's ukiyo-e's woodblock language, not ink wash.
- ❌ Treat this as an interior-design/product mood board (soft neutrals, rounded furniture) — that's japandi; sumi-e is a painting technique with visible brushwork.

## Don't confuse this with…

*Commonly confused neighbors:* ukiyo-e, japandi, wabi-sabi.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
