# Arts & Crafts — Implementation Spec

*Aliases:* William Morris style  
*Slug:* `arts-and-crafts` · *Category:* historical · *Era:* 1880s–1910

**Origin.** UK (William Morris, John Ruskin).

**Reference example.** Morris & Co wallpapers; Kelmscott Press.

## Signature move(s)

A thick double-line ornamental border (`--border-frame`, 3px double) framing every raised surface, paired with a thin repeating diagonal "leaf-stitch" band (`--leaf-repeat`) used as an accent edge — a direct UI translation of Morris & Co's block-printed botanical repeat borders and the hand-set title pages of Kelmscott Press. The point is handcraft-over-machine: nothing is a perfect pill or a crisp digital gradient, every edge is drawn as if woodblock-printed.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Intricate botanical patterns and repeats
- Handcraft over machine production
- Earthy natural palettes
- Ornamental borders, medieval revival type

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/arts-and-crafts.css`.)

```css
/* Arts & Crafts — design tokens (generated from style_catalog.json) */
/* 1880s–1910 | UK (William Morris, John Ruskin). */
:root {
  /* color */
  --color-bg: #ece2cd;
  --color-surface: #fbf5e6;
  --color-surface-strong: #e3d3ac;
  --color-border: #6b4a2b;
  --color-text: #2b2013;
  --color-text-muted: #5c4a30;
  --color-primary: #7a2e2e;
  --color-accent: #4a6741;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 4px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(43,32,19,0.2);
  --shadow-md: 0 4px 10px rgba(43,32,19,0.22);
  --shadow-lg: 0 10px 22px rgba(43,32,19,0.26);
  /* font */
  --font-sans: 'Crimson Text', 'EB Garamond', Georgia, serif;
  --font-display: 'IM Fell English', 'Crimson Text', Georgia, serif;
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
  --ease-standard: ease-out;
  /* extra (signature gradients, composite borders, filters) */
  --leaf-repeat: repeating-linear-gradient(135deg, var(--color-accent) 0 3px, transparent 3px 14px);
  --border-frame: 3px double var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Arts & Crafts — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ece2cd",
        "surface": "#fbf5e6",
        "surface-strong": "#e3d3ac",
        "border": "#6b4a2b",
        "text": "#2b2013",
        "text-muted": "#5c4a30",
        "primary": "#7a2e2e",
        "accent": "#4a6741",
      },
      borderRadius: {
        "sm": "3px",
        "md": "4px",
        "lg": "6px",
        "pill": "4px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(43,32,19,0.2)",
        "md": "0 4px 10px rgba(43,32,19,0.22)",
        "lg": "0 10px 22px rgba(43,32,19,0.26)",
      },
      fontFamily: {
        "sans": ["'Crimson Text'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'IM Fell English'", "'Crimson Text'", "Georgia", "serif"],
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
        "standard": "ease-out",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --leaf-repeat: repeating-linear-gradient(135deg, var(--color-accent) 0 3px, transparent 3px 14px);
//   --border-frame: 3px double var(--color-border);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md` rectangle, 2px solid `--color-border`, `--shadow-sm`; hover lifts 1px into `--shadow-md`; primary swaps fill to `--color-primary` (Morris madder red). |
| **Input** | `--radius-sm` field, 2px `--color-border`, `--color-surface` fill; focus swaps border to `--color-primary` with a soft ring — no glow, a solid ink-like line. |
| **Card** | The hero surface: `--border-frame` double border plus a `--leaf-repeat` band on the top edge (`border-image`), `--radius-lg`, `--shadow-md`. |
| **Nav** | `--color-surface` bar closed off by `--border-frame` as a bottom rule, like a printed page's header rule. |
| **Modal** | `--border-frame` all around, `--shadow-lg`, over a warm sepia-tinted scrim (`--color-bg` at higher opacity) rather than a cold black scrim. |
| **Table** | Row dividers as thin `--color-border` hairlines, header row on `--color-surface-strong`; keep the leaf-repeat band to the table caption only, never inside cells. |
| **Tooltip** | Small `--radius-sm` chip, 1px `--color-border`, `--color-surface` fill — no double border at this size, it becomes visual clutter. |
| **Badge** | `--color-surface-strong` fill, 1px `--color-border`, `--radius-pill` (a soft near-rectangle, not a true pill — handcraft never machines a perfect circle). |
| **Toggle** | Bordered track in `--color-surface`, knob outlined in `--color-border`; on-state fills the track with `--color-accent` (Morris forest green). |
| **Loading** | A `--leaf-repeat`-patterned bar filling left-to-right, evoking a woodblock print being pulled, rather than a smooth modern progress gradient. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Dense ornamental borders and repeat patterns must stay at the edges of a surface — keep the interior body-text area on plain `--color-surface` with no pattern behind it, and verify text/background pairs with `contrast_check.py`.
- The display font (`--font-display`, a medieval-revival serif) is decorative and should be reserved for headings and short labels; set all paragraph and form-field text in `--font-sans` at `--text-base` or larger.
- Earthy, muted palette values (`--color-text-muted` on `--color-bg`) can drop below body-text contrast minimums — confirm with `contrast_check.py` before shipping any muted-on-muted pairing.
- Ensure focus-visible outlines use `--color-primary` or `--color-accent` at full opacity, not the muted border tones, so keyboard focus doesn't disappear into the ornament.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the `--border-frame` double-line border on every card, nav, and modal.
- ✅ Keep botanical repeat patterns confined to borders/edges, never behind running text.
- ✅ Pair the medieval-revival display font sparingly with a calm serif body font.

## Don't

- ❌ Use a true circular pill anywhere — Arts & Crafts corners are hand-cut, not machined.
- ❌ Let the leaf-repeat pattern run behind body copy or form fields.
- ❌ Introduce a saturated, modern digital color outside the earthy palette.

## Don't confuse this with…

*Commonly confused neighbors:* art-nouveau, victorian.

vs art-nouveau: art-nouveau abstracts the botanical line into a fluid whiplash curve; Arts & Crafts keeps the plant motif literal, symmetrical, and block-printed. vs victorian: Victorian piles on multiple competing typefaces, gilt, and jewel tones for commercial exuberance; Arts & Crafts deliberately restrains itself to one earthy palette and one repeat motif as a reaction against that very excess.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
