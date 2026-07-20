# Illuminated Manuscript — Implementation Spec

*Aliases:* medieval manuscript, illumination  
*Slug:* `illuminated-manuscript` · *Category:* historical · *Era:* 500–1500 CE

**Origin.** Medieval European monastic scriptoria.

**Reference example.** Book of Kells; Très Riches Heures.

## Signature move(s)

A gilded border rule (`--vine-rule`) — a repeating gold-then-crimson dash pattern standing in for hand-painted vine-and-leaf marginalia — frames every surface like a page margin, joined by gold corner flourishes (`--illum-corner`, four small radial dots) at each card's edges. The rule isn't reserved for headings: it runs along the nav's base and wraps cards and inputs, so gold trim reads as the page's structural grid, the way a scriptorium ruled every folio before a single letter was inked. Display type leans on a Fraktur-adjacent face (`--font-display: 'UnifrakturMaguntia'`) reserved for large drop-caps and short headlines only.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Ornate drop caps and gold-leaf illumination
- Decorative borders, vines, marginalia
- Blackletter script
- Rich reds, blues, gold on vellum

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/illuminated-manuscript.css`.)

```css
/* Illuminated Manuscript — design tokens (generated from style_catalog.json) */
/* 500–1500 CE | Medieval European monastic scriptoria. */
:root {
  /* color */
  --color-bg: #f3e6c4;
  --color-surface: #f8edd0;
  --color-surface-strong: #efdbaa;
  --color-border: #7a5a1e;
  --color-text: #2a1a10;
  --color-text-muted: #5a4632;
  --color-primary: #7a1f2b;
  --color-accent: #b8860b;
  --color-blue: #1e3a6e;
  --color-gold: #c9971f;
  /* radius: manuscripts are hand-ruled, not rounded — sharp panels with an
     ornamented border standing in for corner treatment */
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-pill: 999px;
  /* shadow: soft, low, like candlelight on vellum */
  --shadow-sm: 0 1px 3px rgba(42,26,16,0.25);
  --shadow-md: 0 4px 10px rgba(42,26,16,0.3);
  --shadow-lg: 0 10px 22px rgba(42,26,16,0.35);
  /* font */
  --font-sans: 'EB Garamond', 'Palatino', Georgia, serif;
  --font-display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.75rem;
  --text-5xl: 5rem;
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
  /* extra: a gilded initial-capital treatment (drop cap in gold on a red
     medallion) plus a repeating vine-and-gold-leaf border rule — the two
     signature moves of scriptorium illumination, repeated on nav, card and
     input so gold trim frames every surface, not just headings */
  --gilt-border: 3px solid var(--color-gold);
  --vine-rule: repeating-linear-gradient(90deg, var(--color-gold) 0 10px, transparent 10px 16px,
               var(--color-primary) 16px 20px, transparent 20px 26px);
  --illum-corner: radial-gradient(circle at 0% 0%, var(--color-gold) 0 3px, transparent 4px),
                   radial-gradient(circle at 100% 0%, var(--color-gold) 0 3px, transparent 4px),
                   radial-gradient(circle at 0% 100%, var(--color-gold) 0 3px, transparent 4px),
                   radial-gradient(circle at 100% 100%, var(--color-gold) 0 3px, transparent 4px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Illuminated Manuscript — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3e6c4",
        "surface": "#f8edd0",
        "surface-strong": "#efdbaa",
        "border": "#7a5a1e",
        "text": "#2a1a10",
        "text-muted": "#5a4632",
        "primary": "#7a1f2b",
        "accent": "#b8860b",
        "blue": "#1e3a6e",
        "gold": "#c9971f",
      },
      borderRadius: {
        "sm": "2px",
        "md": "2px",
        "lg": "2px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(42,26,16,0.25)",
        "md": "0 4px 10px rgba(42,26,16,0.3)",
        "lg": "0 10px 22px rgba(42,26,16,0.35)",
      },
      fontFamily: {
        "sans": ["'EB Garamond'", "'Palatino'", "Georgia", "serif"],
        "display": ["'UnifrakturMaguntia'", "'Blackletter'", "'Cinzel'", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5rem",
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
//   --gilt-border: 3px solid var(--color-gold);
//   --vine-rule: repeating-linear-gradient(90deg, var(--color-gold) 0 10px, transparent 10px 16px, var(--color-primary) 16px 20px, transparent 20px 26px);
//   --illum-corner: radial-gradient(circle at 0% 0%, var(--color-gold) 0 3px, transparent 4px), radial-gradient(circle at 100% 0%, var(--color-gold) 0 3px, transparent 4px), radial-gradient(circle at 0% 100%, var(--color-gold) 0 3px, transparent 4px), radial-gradient(circle at 100% 100%, var(--color-gold) 0 3px, transparent 4px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | 2px `--color-border`, `--shadow-sm`; hover lifts 1px and deepens to `--shadow-md`. `btn--primary` fills deep crimson `--color-primary` with a gold border. |
| **Input** | `--gilt-border` (3px solid gold) around a parchment fill; focus adds a soft gold glow (`0 0 0 3px rgba(184,134,11,0.28)`), like candlelight catching leaf on the edge of a ruled line. |
| **Card** | `--illum-corner` gold roundels at all four corners plus an inset 1px gold hairline — the two devices scriptoria used to frame an illuminated page. |
| **Nav** | `--gilt-border` as the bottom rule, with `--vine-rule` running just beneath it as a second, thinner decorative band — margin-and-rule, doubled. |
| **Modal** | Heaviest gilt treatment: full `--gilt-border` frame plus `--illum-corner` roundels, over a dark scrim so the gold reads as illuminated, not washed out. |
| **Table** | `--vine-rule` as the header's bottom border only; body rows stay on flat `--color-surface` so long data stays legible — gold trim frames, it doesn't fill. |
| **Tooltip** | Small chip with a thin 1.5px gold border, no vine pattern (too fine at that scale) — legibility over ornament at small sizes. |
| **Badge** | Solid `--color-gold` fill, dark text — reads as a wax-seal-adjacent mark. |
| **Toggle** | Track uses `--gilt-border`; knob is a small gold medallion that slides with `cubic-bezier(0.4,0,0.2,1)`. |
| **Loading** | A thin `--vine-rule` band scrolling horizontally — the illuminated border pattern standing in for a progress indicator. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never set body copy in the Fraktur-flavored `--font-display` — reserve it for drop caps and short headlines; long-form text must stay in `--font-sans` (EB Garamond) at full size, since blackletter-adjacent faces fail readability past a few words.
- Gold-on-parchment (`--color-gold` on `--color-bg`) is a decorative accent, not a text color — verify any gold text against its background with `contrast_check.py`, and default body text to `--color-text` on `--color-surface`.
- Keep the `--vine-rule` and `--illum-corner` ornament confined to borders/corners — never let it run behind body paragraphs, where its alternating gold/crimson dashes will fight reading.
- Deep jewel tones (`--color-primary` crimson, `--color-blue`) as text need a light `--color-surface` background to clear 4.5:1; don't pair them with `--color-surface-strong` without checking.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the gilt border/corner-roundel pair on every card-like surface so gold reads as structure.
- ✅ Reserve the Fraktur-flavored display face for drop caps and short headline words only.
- ✅ Keep shadows soft and low (`--shadow-sm/md/lg`), evoking candlelight rather than hard daylight.

## Don't

- ❌ Set paragraph text in the blackletter-flavored display font.
- ❌ Run `--vine-rule` or `--illum-corner` ornament directly behind body text.
- ❌ Use pure white or stark black — every surface should sit in the warm parchment/vellum range.

## Don't confuse this with…

*Commonly confused neighbors:* blackletter, goth, victorian.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
