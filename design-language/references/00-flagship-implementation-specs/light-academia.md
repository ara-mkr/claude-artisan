# Light Academia — Implementation Spec

*Aliases:* light academic  
*Slug:* `light-academia` · *Category:* niche · *Era:* 2020–present

**Origin.** Optimistic counterpart to dark academia.

**Reference example.** Light academia moodboards; cottage-scholar aesthetics.

## Signature move(s)

Sunlit scholarship: a warm cream/beige field lit by a soft radial gold glow at the top of the page (`--bg-image`), serif display type for headings, and a thin `--gold-rule` gradient used as a section divider instead of a hard line. Everything reads like a page in a well-loved book left open in a window seat.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Warm creams, beige, soft gold, sage
- Sunlit libraries, linen, pastoral scholarship
- Serif type, gentle and airy
- Hopeful, romantic learning

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/light-academia.css`.)

```css
/* Light Academia — design tokens (generated from style_catalog.json) */
/* 2020–present | Optimistic counterpart to dark academia. */
:root {
  /* color */
  --color-bg: #f7f0e3;
  --color-surface: #fffdf7;
  --color-surface-strong: #efe4c9;
  --color-border: #d8c9a3;
  --color-text: #3b3226;
  --color-text-muted: #7a6d55;
  --color-primary: #a97142;
  --color-accent: #7c8b5f;
  --color-gold: #c9a24a;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(59,50,38,0.10);
  --shadow-md: 0 6px 16px rgba(59,50,38,0.12);
  --shadow-lg: 0 14px 32px rgba(59,50,38,0.14);
  /* font */
  --font-sans: 'Lora', 'Cormorant Garamond', Georgia, serif;
  --font-display: 'Playfair Display', 'Cormorant Garamond', serif;
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
  /* extra (signature gradients, composite borders, filters) */
  --bg-image: radial-gradient(70% 50% at 50% 0%, rgba(201,162,74,0.16) 0%, transparent 65%), var(--color-bg);
  --gold-rule: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Light Academia — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f0e3",
        "surface": "#fffdf7",
        "surface-strong": "#efe4c9",
        "border": "#d8c9a3",
        "text": "#3b3226",
        "text-muted": "#7a6d55",
        "primary": "#a97142",
        "accent": "#7c8b5f",
        "gold": "#c9a24a",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(59,50,38,0.10)",
        "md": "0 6px 16px rgba(59,50,38,0.12)",
        "lg": "0 14px 32px rgba(59,50,38,0.14)",
      },
      fontFamily: {
        "sans": ["'Lora'", "'Cormorant Garamond'", "Georgia", "serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
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
//   --bg-image: radial-gradient(70% 50% at 50% 0%, rgba(201,162,74,0.16) 0%, transparent 65%), var(--color-bg);
//   --gold-rule: linear-gradient(90deg, transparent, var(--color-gold), transparent);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Cream fill, thin `--color-border` outline, `--font-display` label in `--color-primary`; hover brightens to `--color-gold`. |
| **Input** | Underline-style field on `--color-surface` with a soft `--shadow-sm`; focus swaps the underline to `--gold-rule`. |
| **Card** | `--color-surface` panel over the sunlit `--bg-image`, thin `--color-border`, `--shadow-md`, `--radius-lg` corners like a rounded book cover. |
| **Nav** | Serif wordmark, `--gold-rule` as the active-tab underline instead of a solid bar. |
| **Modal** | Parchment-toned panel centered on a dimmed sunlit backdrop; `--font-display` title. |
| **Table** | Rows separated by hairline `--color-border`, no zebra striping — reads like a library ledger. |
| **Tooltip** | Small cream chip, `--shadow-sm`, `--radius-sm`, serif caption text. |
| **Badge** | Pill in `--color-accent` (sage) or `--color-gold`, quiet not loud. |
| **Toggle** | Linen track, gold knob on 'on' state for a warm glow instead of a bright primary. |
| **Loading** | A slow gold-rule shimmer sweep, or a softly pulsing candle-like glow — never a hard spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Cream-on-cream layering (`--color-bg` vs `--color-surface-strong`) is subtle by design — verify every text/surface pairing still clears 4.5:1, especially `--color-text-muted` on `--color-surface-strong`.
- Serif body copy needs generous line-height (≥1.6) and ≥16px size or it reads as decorative rather than readable.
- The gold radial glow (`--bg-image`) must stay decorative — never let it sit directly behind body text without a solid surface underneath.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let the warm gold glow live only in the page background, not inside content cards.
- ✅ Pair serif display headings with a slightly calmer serif or humanist body for readability.
- ✅ Use the gold-rule gradient as a recurring divider motif (nav, section breaks, card footers).

## Don't

- ❌ Push saturation up — light academia stays desaturated and sun-bleached, not candy-bright.
- ❌ Default to hard black rules; everything should feel hand-drawn-soft.
- ❌ Mix in cold grays or blues — every neutral should carry warmth.

## Don't confuse this with…

*Commonly confused neighbors:* dark-academia, cottagecore.

vs dark academia: same scholarly world, opposite value key (creams/sunlight vs browns/candlelight) — see `dark-academia.md`. vs cottagecore: cottagecore is rustic/floral/domestic (gingham, mushrooms, baking); light academia is specifically about study, libraries, and the printed page.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
