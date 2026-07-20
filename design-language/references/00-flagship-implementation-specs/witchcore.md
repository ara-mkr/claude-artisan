# Witchcore / Witchy — Implementation Spec

*Aliases:* witchy aesthetic, goth-witch  
*Slug:* `witchcore` · *Category:* niche · *Era:* 2019–present

**Origin.** Mystical/occult cottage aesthetic.

**Reference example.** Witchcore Pinterest; tarot-brand identities.

## Signature move(s)

A recurring `--moon-phase` crescent glyph (a radial-gradient sliver) sits on hero surfaces alongside a thin gold `--celestial-border`, over a deep purple-black base. A faint `--starfield-tint` of scattered pinpoint dots gives the background depth without a real image. The combination reads as candlelit and mystical rather than aggressively dark, distinguishing it from straight goth.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Crystals, herbs, candles, tarot, moons
- Deep purples, black, forest green, gold
- Celestial and botanical symbols
- Mystical, earthy, cozy-dark

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/witchcore.css`.)

```css
/* Witchcore / Witchy — design tokens (generated from style_catalog.json) */
/* 2019–present | Mystical/occult cottage aesthetic. */
:root {
  /* color */
  --color-bg: #1a1523;
  --color-surface: #241d31;
  --color-surface-strong: #2e2540;
  --color-border: #6b4f9e;
  --color-text: #ece6f5;
  --color-text-muted: #b6a8d1;
  --color-primary: #7e57c2;
  --color-accent: #c9a24b;
  --color-forest: #2f5233;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.5);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.55);
  --shadow-glow: 0 0 18px rgba(201,162,75,0.25);
  /* font */
  --font-sans: 'Cormorant Garamond', 'Georgia', serif;
  --font-display: 'UnifrakturCook', 'Cinzel', serif;
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
  --ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --moon-phase: radial-gradient(circle at 70% 30%, var(--color-accent) 0 10%, transparent 11%);
  --celestial-border: 1px solid var(--color-border);
  --starfield-tint: radial-gradient(1px 1px at 20% 30%, rgba(236,230,245,0.5), transparent),
    radial-gradient(1px 1px at 70% 60%, rgba(236,230,245,0.4), transparent),
    radial-gradient(1px 1px at 40% 80%, rgba(236,230,245,0.3), transparent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Witchcore / Witchy — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1a1523",
        "surface": "#241d31",
        "surface-strong": "#2e2540",
        "border": "#6b4f9e",
        "text": "#ece6f5",
        "text-muted": "#b6a8d1",
        "primary": "#7e57c2",
        "accent": "#c9a24b",
        "forest": "#2f5233",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 8px 24px rgba(0,0,0,0.5)",
        "lg": "0 16px 40px rgba(0,0,0,0.55)",
        "glow": "0 0 18px rgba(201,162,75,0.25)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'Georgia'", "serif"],
        "display": ["'UnifrakturCook'", "'Cinzel'", "serif"],
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
        "standard": "cubic-bezier(0.3, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --moon-phase: radial-gradient(circle at 70% 30%, var(--color-accent) 0 10%, transparent 11%);
//   --celestial-border: 1px solid var(--color-border);
//   --starfield-tint: radial-gradient(1px 1px at 20% 30%, rgba(236,230,245,0.5), transparent), radial-gradient(1px 1px at 70% 60%, rgba(236,230,245,0.4), transparent), radial-gradient(1px 1px at 40% 80%, rgba(236,230,245,0.3), transparent);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill, `--celestial-border`, `--moon-phase` glyph tucked in a corner; hover adds `--shadow-glow` gold candlelight. |
| **Input** | `--color-surface` fill, `--celestial-border`, `--radius-md`; focus ring in `--color-accent` gold like a lit candle. |
| **Card** | The hero: `--color-surface-strong` base, `--starfield-tint` background, `--moon-phase` accent, `--celestial-border`, `--shadow-md`. |
| **Nav** | Dark bar in `--color-surface`, `--celestial-border` bottom hairline, `--color-accent` gold underline on the active tab. |
| **Modal** | Large `--radius-lg` card with `--shadow-lg` + `--shadow-glow` combined, `--starfield-tint` behind the scrim — feels like opening a grimoire by candlelight. |
| **Table** | Rows alternate `--color-surface`/`--color-surface-strong`, thin `--celestial-border` dividers, `--color-forest` used sparingly for a botanical accent column. |
| **Tooltip** | Small `--color-surface-strong` chip with `--celestial-border` and a tiny `--moon-phase` dot. |
| **Badge** | Pill in `--color-primary` purple or `--color-forest` green, gold `--celestial-border` outline — like a wax-seal tag. |
| **Toggle** | Track in `--color-surface`, knob in `--color-accent` gold that glows (`--shadow-glow`) when active, like a lit candle flame. |
| **Loading** | A slow-pulsing moon-phase glyph cycling through crescent states, or a gently rotating `--starfield-tint` shimmer. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The dark purple-black base needs `--color-text` and `--color-text-muted` checked against both `--color-bg` and `--color-surface` with `contrast_check.py` — deep jewel tones can look rich while quietly failing WCAG AA for body text.
- Blackletter/UnifrakturCook `--font-display` is decorative and hard to read at small sizes or in long strings — restrict it to short headers/labels, never body copy or form fields.
- Keep `--starfield-tint` dot density low and never place it directly behind text; it should live on background layers only.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the `--moon-phase` glyph and gold `--celestial-border` across hero surfaces for a cohesive "ritual" feel.
- ✅ Use `--color-forest` green sparingly as an earthy botanical counterpoint to the purple/gold.
- ✅ Reserve `--shadow-glow` for interactive/active states so it reads as "lit," not default.

## Don't

- ❌ Set body copy in the blackletter display font.
- ❌ Let the palette drift toward pure black-and-red — that tips into straight goth, not witchy.
- ❌ Overuse the starfield texture behind dense text content.

## Don't confuse this with…

*Commonly confused neighbors:* dark-academia, goblincore, cottagecore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
