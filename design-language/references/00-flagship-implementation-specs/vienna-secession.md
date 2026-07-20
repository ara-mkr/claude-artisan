# Vienna Secession — Implementation Spec

*Aliases:* Secessionist, Wiener Werkstätte  
*Slug:* `vienna-secession` · *Category:* historical · *Era:* 1897–1905

**Origin.** Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann).

**Reference example.** Klimt Beethoven Frieze; Ver Sacrum journal.

## Signature move(s)

A thin repeating row of small gold squares (`--grid-squares`) run as a border band along the top or bottom edge of every surface — a direct UI translation of Hoffmann's checkerboard grids and the gold-square friezes in Klimt's Beethoven Frieze and the *Ver Sacrum* journal mastheads. Everything sits on sharp `--radius-sm: 0px` corners with heavy 2px black rules, so the gold-square band reads as jewelry laid on a stark geometric frame rather than as decoration for its own sake — the bridge between Art Nouveau's organic line and Deco's coming rigor.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Geometric grids of squares married to ornament
- Gold leaf, decorative symbolism
- Custom geometric lettering
- Bridge between Art Nouveau and Deco

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/vienna-secession.css`.)

```css
/* Vienna Secession — design tokens (generated from style_catalog.json) */
/* 1897–1905 | Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann). */
:root {
  /* color */
  --color-bg: #f2ede1;
  --color-surface: #ffffff;
  --color-surface-strong: #e9e1cd;
  --color-border: #1a1a1a;
  --color-text: #1a1a1a;
  --color-text-muted: #5c5647;
  --color-primary: #b8942f;
  --color-accent: #6b1f2a;
  --color-violet: #4b3a63;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(26,26,26,0.2);
  --shadow-md: 0 2px 0 rgba(26,26,26,0.25);
  --shadow-lg: 0 4px 0 rgba(26,26,26,0.3);
  /* font */
  --font-sans: 'Josefin Sans', 'Century Gothic', sans-serif;
  --font-display: 'Cinzel', 'Josefin Sans', serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --grid-squares: repeating-linear-gradient(90deg, var(--color-primary) 0 6px, transparent 6px 18px);
  --gold-border: 4px solid var(--color-primary);
  --square-corner: 10px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Vienna Secession — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2ede1",
        "surface": "#ffffff",
        "surface-strong": "#e9e1cd",
        "border": "#1a1a1a",
        "text": "#1a1a1a",
        "text-muted": "#5c5647",
        "primary": "#b8942f",
        "accent": "#6b1f2a",
        "violet": "#4b3a63",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(26,26,26,0.2)",
        "md": "0 2px 0 rgba(26,26,26,0.25)",
        "lg": "0 4px 0 rgba(26,26,26,0.3)",
      },
      fontFamily: {
        "sans": ["'Josefin Sans'", "'Century Gothic'", "sans-serif"],
        "display": ["'Cinzel'", "'Josefin Sans'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grid-squares: repeating-linear-gradient(90deg, var(--color-primary) 0 6px, transparent 6px 18px);
//   --gold-border: 4px solid var(--color-primary);
//   --square-corner: 10px;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Square `--radius-sm: 0px` block, 2px `--color-text` border, `--color-surface` fill, `--shadow-sm` (a flat 1px offset, not blur); hover shifts to `(-1px,-1px)` translate and `--shadow-md`; primary fills `--color-primary` gold with the `--grid-squares` band along the bottom. |
| **Input** | Square field, 2px `--color-text` border, `--color-surface` fill; focus swaps to a solid `--color-primary` border plus a flat gold outline ring — no soft glow. |
| **Card** | The hero surface: 2px `--color-text` border, `--grid-squares` band across the top edge, sharp 0px corners, flat `--shadow-md`. |
| **Nav** | `--color-surface` bar closed with `--gold-border` (4px solid gold) as a bottom rule, plus a `--grid-squares` band sitting just above it. |
| **Modal** | Heaviest 2px `--color-text` frame, `--grid-squares` on both top and bottom edges, flat `--shadow-lg`, over a warm parchment-toned scrim rather than a cold black one. |
| **Table** | Square-cornered rows, header row in `--color-surface-strong` with a `--grid-squares` rule underneath it only — the checkerboard band stays out of the data cells themselves. |
| **Tooltip** | Small square chip, 1px `--color-text` border, `--color-surface` fill — no grid-squares band at this size, it would over-decorate. |
| **Badge** | `--color-violet` fill, square corners, thin `--color-text` border — a Wiener Werkstätte-style geometric tag. |
| **Toggle** | Square-cornered track outlined in `--color-text`; on-state fills `--color-primary` gold, knob is a plain square that slides (no rounding, keeping the geometric grid language consistent). |
| **Loading** | The `--grid-squares` band animated marching left-to-right across a flat bar, echoing Hoffmann's repeating checkerboard motif instead of a smooth gradient sweep. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-primary` gold reads beautifully as an ornament band but fails contrast as body text on `--color-bg` or `--color-surface` — reserve it for borders, fills, and short labels, and verify any text use with `contrast_check.py`.
- The all-flat `0 Xpx 0` shadow system doubles as a state cue (offset grows on hover/active) — since it carries no blur or color shift, pair it with a genuine `outline`/border-color change so state isn't conveyed by shadow alone.
- Keep `--font-display` (Cinzel, a geometric serif) to short headline/label use; body and form copy stays in `--font-sans` (Josefin Sans) at `--text-base` or larger, since Cinzel's wide letterforms slow reading at small sizes.
- The `--grid-squares` checkerboard band must remain a fixed-height edge strip and never run behind body text or form fields — verify with `contrast_check.py` if it ever sits near text.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the `--grid-squares` gold-square band on the same edge (top or bottom) across nav, card, and modal for a consistent grid rhythm.
- ✅ Keep every corner at `--radius-sm: 0px` — the sharp square is as core to the identity as the gold.
- ✅ Use the flat offset shadow system (`0 Xpx 0`, no blur) consistently instead of soft drop shadows.

## Don't

- ❌ Round any corner — even slightly — it breaks the grid-geometry language immediately.
- ❌ Set body text in gold (`--color-primary`) or in the Cinzel display face.
- ❌ Add blur to any shadow; Vienna Secession shadows are always flat, hard-edged offsets.

## Don't confuse this with…

*Commonly confused neighbors:* art-nouveau, art-deco.

vs art-nouveau: Art Nouveau (its French/Belgian contemporary) commits fully to organic whiplash curves; Vienna Secession, as the Austrian break-off, deliberately reins that curve in with a strict geometric grid of squares — ornament disciplined by structure. vs art-deco: Art Deco (its successor, c. 1920s-30s) fully commits to the geometric grid and drops the figurative/symbolic ornament; Vienna Secession is the transitional half-step where Klimt's gold symbolism and Hoffmann's grid still coexist.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
