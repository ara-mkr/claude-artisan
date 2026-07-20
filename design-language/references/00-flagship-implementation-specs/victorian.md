# Victorian — Implementation Spec

*Aliases:* ornate Victorian, 1800s ornament  
*Slug:* `victorian` · *Category:* historical · *Era:* 1837–1901

**Origin.** Victorian-era Britain and US.

**Reference example.** Victorian trade cards; circus posters.

## Signature move(s)

A gilded double-line border (`--filigree-border`, 2px double gold) framing every raised surface, with a second inset hairline (`.card::before`) 6px in to suggest an engraved plate mark — the layered-frame effect of a hand-engraved trade card or circus bill. Deep jewel-tone surfaces (`--color-surface`, near-black `--color-bg`) let the gilt border read as gold leaf against dark wood or velvet, and a faint radial `--damask-tint` behind everything hints at wallpaper texture without competing with content.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dense ornamentation, filigree, flourishes
- Multiple decorative typefaces per page
- Gold, deep jewel tones, engravings
- Circus/advertising exuberance

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/victorian.css`.)

```css
/* Victorian — design tokens (generated from style_catalog.json) */
/* 1837–1901 | Victorian-era Britain and US. */
:root {
  /* color */
  --color-bg: #241713;
  --color-surface: #2f1f19;
  --color-surface-strong: #3a2620;
  --color-border: #b8862f;
  --color-text: #f2e6d0;
  --color-text-muted: #cbb896;
  --color-primary: #8a1f2b;
  --color-accent: #b8862f;
  --color-emerald: #1f4d38;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 14px rgba(0,0,0,0.5);
  --shadow-lg: 0 10px 28px rgba(0,0,0,0.55);
  --shadow-inset-gilt: inset 0 0 0 1px rgba(184,134,47,0.5);
  /* font */
  --font-sans: 'Playfair Display', 'Georgia', serif;
  --font-display: 'UnifrakturCook', 'Playfair Display', 'Georgia', serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
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
  --filigree-border: 2px double var(--color-accent);
  --gilt-corner: conic-gradient(from 45deg, var(--color-accent), #f2d98a, var(--color-accent));
  --damask-tint: radial-gradient(circle at 50% 50%, rgba(184,134,47,0.06) 0, transparent 65%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Victorian — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#241713",
        "surface": "#2f1f19",
        "surface-strong": "#3a2620",
        "border": "#b8862f",
        "text": "#f2e6d0",
        "text-muted": "#cbb896",
        "primary": "#8a1f2b",
        "accent": "#b8862f",
        "emerald": "#1f4d38",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.4)",
        "md": "0 4px 14px rgba(0,0,0,0.5)",
        "lg": "0 10px 28px rgba(0,0,0,0.55)",
        "inset-gilt": "inset 0 0 0 1px rgba(184,134,47,0.5)",
      },
      fontFamily: {
        "sans": ["'Playfair Display'", "'Georgia'", "serif"],
        "display": ["'UnifrakturCook'", "'Playfair Display'", "'Georgia'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
//   --filigree-border: 2px double var(--color-accent);
//   --gilt-corner: conic-gradient(from 45deg, var(--color-accent), #f2d98a, var(--color-accent));
//   --damask-tint: radial-gradient(circle at 50% 50%, rgba(184,134,47,0.06) 0, transparent 65%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm` rectangle, 1px `--color-accent` border on `--color-surface-strong`, `--shadow-sm`; hover lifts into `--shadow-md`; primary fills with `--color-primary` (deep crimson) and keeps the gilt border. |
| **Input** | `--filigree-border` double-line frame on `--color-surface-strong`; focus swaps to a solid champagne-gold border plus `--shadow-inset-gilt`, like a plate being lit. |
| **Card** | The hero surface: `--filigree-border`, an inset engraved hairline (`::before`), `--radius-md`, `--shadow-md`, sitting on the `--damask-tint` wallpaper glow. |
| **Nav** | `--color-surface` bar wrapped in `--filigree-border`, `--radius-md` corners — a framed marquee rather than a flat toolbar. |
| **Modal** | Largest gilt frame, `--shadow-lg`, `--gilt-corner` conic sweep in a corner flourish, over a near-black scrim so the gold reads as lit gilding. |
| **Table** | Header row in `--color-surface-strong` with a single `--color-accent` rule beneath it; body rows stay flat and undecorated — filigree belongs to the frame, not the data. |
| **Tooltip** | Small `--color-surface-strong` chip, single 1px `--color-accent` border — the double-line frame is reserved for larger surfaces. |
| **Badge** | `--color-emerald` fill with a thin `--color-accent` border, evoking an engraved emerald seal. |
| **Toggle** | Bordered track in `--color-surface-strong`; on-state fills with `--color-primary`, knob rimmed in `--color-accent` gold. |
| **Loading** | A `--gilt-corner` conic sweep rotating slowly, like a gold medallion catching light, rather than a flat bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never run body text in `--font-display` (a blackletter/UnifrakturCook face) — reserve it for large decorative headlines only; body and form text must use `--font-sans` (Playfair Display) at `--text-base` or larger, since blackletter at small sizes is close to unreadable.
- The style intentionally mixes multiple decorative typefaces per "page" — cap it at two (one display, one text) inside any single UI view so it doesn't collapse into noise; verify body copy against `--color-bg`/`--color-surface` with `contrast_check.py`, since dark jewel tones plus muted gold text can sit close to the contrast floor.
- Keep the `--damask-tint` background glow subtle and never place it directly behind small text — verify with `contrast_check.py` on the actual composited color.
- Use a solid, saturated focus outline (not the muted `--color-accent` gilt line) so keyboard focus is distinguishable from decorative gold borders everywhere else on the page.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Frame every raised surface with the same `--filigree-border` double gold line.
- ✅ Keep the jewel-tone palette (crimson, emerald, gold) to a small, deliberate set of roles.
- ✅ Reserve blackletter/display type for short, large headlines only.

## Don't

- ❌ Set body copy or form labels in the blackletter display font.
- ❌ Let ornamental borders and damask tints run behind dense data (tables, long text).
- ❌ Flatten the frame to a single solid line — the double-line "double" is the whole point.

## Don't confuse this with…

*Commonly confused neighbors:* arts-and-crafts, steampunk.

vs arts-and-crafts: Arts & Crafts is a deliberate, restrained anti-industrial reaction using one earthy palette and one repeat motif; Victorian is the maximalist commercial exuberance it was reacting against, with gilt, jewel tones, and multiple competing typefaces per page. vs steampunk: steampunk borrows Victorian ornament but bolts on visible brass machinery, rivets, and gauges as a speculative-fiction layer; plain Victorian stays period-accurate engraving and typography without the mechanical fantasy elements.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
