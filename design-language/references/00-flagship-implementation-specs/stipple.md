# Stipple / Pointillism — Implementation Spec

*Aliases:* dotwork, pointillist
*Slug:* `stipple` · *Category:* texture · *Era:* Print/art heritage

**Origin.** Engraving stipple and Seurat's pointillism.

**Reference example.** Wall Street Journal hedcuts; Seurat.

## Signature move(s)

Tone is built entirely from dot density rather than flat fill: a radial-gradient dot pattern (`--stipple-fine` at 4px tiles for shading, `--stipple-coarse` at 7px tiles for shadow/emphasis) is layered over surfaces instead of solid color washes. Backgrounds stay cream/paper-toned so the dotwork reads like ink on stock, and the palette leans near-monochrome with one editorial accent (`--color-accent`).

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Tone built from dots of varying density
- Fine detailed dotwork portraits
- WSJ 'hedcut' style
- Refined, editorial, tactile

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/stipple.css`.)

```css
/* Stipple / Pointillism — design tokens (generated from style_catalog.json) */
/* Print/art heritage | Engraving stipple and Seurat's pointillism. */
:root {
  /* color */
  --color-bg: #f7f5ef;
  --color-surface: #ffffff;
  --color-surface-strong: #ece8dc;
  --color-border: #cfc9b8;
  --color-text: #1e1c17;
  --color-text-muted: #5e594c;
  --color-primary: #2b2620;
  --color-accent: #a1361c;
  --color-dot: #1e1c17;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(30,28,23,0.10);
  --shadow-md: 0 3px 10px rgba(30,28,23,0.12);
  --shadow-lg: 0 10px 24px rgba(30,28,23,0.16);
  /* font */
  --font-sans: 'Georgia', 'Source Serif Pro', serif;
  --font-display: 'Playfair Display', 'Georgia', serif;
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
  /* extra */
  --stipple-fine: radial-gradient(circle, var(--color-dot) 0.6px, transparent 0.6px);
  --stipple-coarse: radial-gradient(circle, var(--color-dot) 1px, transparent 1px);
  --stipple-size-fine: 4px 4px;
  --stipple-size-coarse: 7px 7px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Stipple / Pointillism — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f5ef",
        "surface": "#ffffff",
        "surface-strong": "#ece8dc",
        "border": "#cfc9b8",
        "text": "#1e1c17",
        "text-muted": "#5e594c",
        "primary": "#2b2620",
        "accent": "#a1361c",
        "dot": "#1e1c17",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(30,28,23,0.10)",
        "md": "0 3px 10px rgba(30,28,23,0.12)",
        "lg": "0 10px 24px rgba(30,28,23,0.16)",
      },
      fontFamily: {
        "sans": ["'Georgia'", "'Source Serif Pro'", "serif"],
        "display": ["'Playfair Display'", "'Georgia'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature stipple pattern tokens are CSS-only:
//   background-image: var(--stipple-fine);
//   background-size: var(--stipple-size-fine);
// Swap to --stipple-coarse / --stipple-size-coarse for denser shadow zones.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` solid fill with a `--stipple-fine` overlay at the trailing edge (fading dot density), `--radius-sm`; hover deepens dot density using `--stipple-coarse`. |
| **Input** | `--color-surface` fill, 1px `--color-border`, no dots (keep entry fields clean); focus ring in `--color-accent`. |
| **Card** | `--color-surface` panel, `--radius-md`, a `--stipple-fine` corner accent or portrait frame, `--shadow-sm`. |
| **Nav** | `--color-bg` bar, wordmark in `--font-display`, a single `--stipple-coarse` rule beneath acting as a shaded divider. |
| **Modal** | `--color-surface`, `--radius-lg`, header band textured with `--stipple-fine`, `--shadow-lg`. |
| **Table** | Flat rows, `--color-border` hairline dividers; no dot texture on data cells — dots stay decorative, not on dense text. |
| **Tooltip** | Small `--color-primary` fill, cream text, crisp edges (no texture — must stay instantly legible). |
| **Badge** | `--radius-sm` chip in `--color-accent`, optionally with a faint `--stipple-fine` shading at one edge for tactile depth. |
| **Toggle** | Track shaded with `--stipple-coarse` when off, solid `--color-accent` when on. |
| **Loading** | Dots progressively fill in (sparse → dense) across a bar, literally animating the stippling process. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Never overlay stipple texture behind body text or table data — it must stay confined to decorative zones, portraits, and edges, or reading speed and contrast both suffer.
- Verify `--color-text-muted` (#5e594c) against `--color-bg` (#f7f5ef) with `contrast_check.py`; muted ink tones on cream paper can dip below AA at small sizes.
- The near-monochrome ink palette means `--color-accent` (#a1361c) is the only non-text hue — don't rely on it alone to convey state; pair with icon/label changes.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary dot size/density (`--stipple-fine` vs `--stipple-coarse`) to imply light and shadow, the way engraving does.
- ✅ Keep grounds paper-toned (`--color-bg`) so the dotwork reads as printed ink.
- ✅ Reserve `--color-accent` for a single editorial highlight — a byline, a call-out, a link.

## Don't

- ❌ Don't apply stipple texture across large text blocks or tables.
- ❌ Don't introduce a second saturated hue — the style lives on near-monochrome plus one accent.
- ❌ Don't use hard flat fills where a dot gradient would read more authentically hand-engraved.

## Don't confuse this with…

*Commonly confused neighbors:* halftone, engraving.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
