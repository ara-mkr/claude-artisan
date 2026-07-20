# Art Hoe — Implementation Spec

*Aliases:* artsy aesthetic  
*Slug:* `art-hoe` · *Category:* niche · *Era:* 2015–present

**Origin.** Art-student creative-expression subculture.

**Reference example.** Art Hoe Tumblr collective.

## Signature move(s)

The scrapbook tilt: every card, photo, and badge sits very slightly rotated (`--ease-tilt-card`, `--ease-tilt-badge`) against a warm cream page, as if it were taped or glued in by hand, with a heavier ink-dark border standing in for a torn paper edge. Warm earthy neutrals carry the page; a single terracotta or ochre accent (never both loudly) does the work of a paint daub or highlighter mark. Display headlines run in a serif that reads like a journal title, not a UI label.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Van Gogh/sunflower motifs, paint splatter
- Warm earthy + bright accents
- Journals, film photos, collage
- Creative, expressive, personal

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/art-hoe.css`.)

```css
/* Art Hoe — design tokens (generated from style_catalog.json) */
/* 2015–present | Art-student creative-expression subculture. */
:root {
  /* color */
  --color-bg: #f5ead9;
  --color-surface: #fdf3e0;
  --color-surface-strong: #f7e2c3;
  --color-border: #3a2b1e;
  --color-text: #3a2b1e;
  --color-text-muted: #6b5847;
  --color-primary: #c1440e;
  --color-accent: #d4a017;
  --color-olive: #6b7a3f;
  --color-clay: #b5651d;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(58,43,30,0.14);
  --shadow-md: 0 8px 20px rgba(58,43,30,0.18);
  --shadow-lg: 0 16px 36px rgba(58,43,30,0.22);
  /* font */
  --font-sans: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif;
  --font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
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
  --ease-standard: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-tilt-card: rotate(-1.2deg);
  --ease-tilt-badge: rotate(2deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Art Hoe — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5ead9",
        "surface": "#fdf3e0",
        "surface-strong": "#f7e2c3",
        "border": "#3a2b1e",
        "text": "#3a2b1e",
        "text-muted": "#6b5847",
        "primary": "#c1440e",
        "accent": "#d4a017",
        "olive": "#6b7a3f",
        "clay": "#b5651d",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(58,43,30,0.14)",
        "md": "0 8px 20px rgba(58,43,30,0.18)",
        "lg": "0 16px 36px rgba(58,43,30,0.22)",
      },
      fontFamily: {
        "sans": ["'Nunito Sans'", "'Avenir Next'", "system-ui", "sans-serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
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
    },
  },
};

// Signature `extra` tokens are CSS-only (rotations/gradients). Add them
// as custom properties or arbitrary values:
//   --ease-tilt-card: rotate(-1.2deg);
//   --ease-tilt-badge: rotate(2deg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Cream fill, thick `--color-border` outline, `--radius-md`; primary variant fills solid `--color-primary` (terracotta). Rests dead level; only cards/badges tilt. |
| **Input** | `--color-surface`, thin border that thickens to `--color-border` on focus — like underlining in a journal, not a glow ring. |
| **Card** | The hero: `transform: var(--ease-tilt-card)`, `--color-surface`, thick ink border, `--shadow-md` as if propped against the page, `--radius-lg`. |
| **Nav** | Flat cream bar, no tilt (it's the page, not a pasted item), bottom border only. |
| **Modal** | Card recipe scaled up, tilt reduced to ~0.5deg so it stays readable, `--shadow-lg`. |
| **Table** | Level, untilted, alternating `--color-surface`/`--color-surface-strong` rows like ruled notebook paper. |
| **Tooltip** | Small tilted sticky-note chip, `--color-accent` fill, dark text. |
| **Badge** | `transform: var(--ease-tilt-badge)`, pill or sticker shape, `--color-olive`/`--color-clay` rotate per instance for a hand-placed feel. |
| **Toggle** | Track in `--color-surface-strong`, knob in `--color-primary`; no tilt — mechanical elements stay level. |
| **Loading** | A "wet paint" shimmer sweep across a tilted skeleton card, or a spinning brush-stroke mark. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Rotated cards must not rotate their text past a few degrees — cap `--ease-tilt-card` well under 3deg or comprehension and readability suffer, especially for low-vision users.
- `--color-text-muted` (#6b5847) on `--color-bg` (#f5ead9) is close to the AA edge — verify with `contrast_check.py` before shipping body copy at that pairing.
- Respect `prefers-reduced-motion`: any "wet paint"/collage entrance animation must reduce to a simple fade.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary the tilt angle slightly per card so the page reads as hand-assembled, not templated.
- ✅ Keep one accent color per composition (terracotta OR ochre) so it reads as a highlighter mark, not a rainbow.
- ✅ Use the serif display font sparingly for titles; keep body copy in the humanist sans for readability.

## Don't

- ❌ Tilt every single element uniformly — that reads as a CSS bug, not a collage.
- ❌ Use pure white or cool greys — the warmth of the cream/clay palette is the whole point.
- ❌ Overload every card with texture; leave breathing room like a journal page margin.

## Don't confuse this with…

*Commonly confused neighbors:* cottagecore, maximalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
