# Baroque / Rococo — Implementation Spec

*Aliases:* baroque, rococo, ornate classical  
*Slug:* `baroque-rococo` · *Category:* historical · *Era:* 1600–1780

**Origin.** European Baroque (17th c.) and Rococo (18th c.).

**Reference example.** Versailles interiors; Fragonard paintings.

## Signature move(s)

A gilded double-line border (`--gilt-frame: 3px double var(--color-accent)`) with a soft top-down gold glow (`--gilt-glow`) behind it — the CSS equivalent of gilt molding catching candlelight on a dark aristocratic wall panel. Radii are asymmetric cartouche curves (`--radius-lg: 34px 8px 34px 8px`) rather than uniform rounding, echoing carved scrollwork frames. The palette stays dark and saturated (deep wine `--color-bg`, crimson `--color-primary`) for the Baroque half of the name; if a project wants the lighter Rococo mood, swap `--color-bg`/`--color-surface` toward pastel while keeping the gilt-frame device untouched — the ornament is what carries the era, not the value of the background.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Lavish ornament, scrollwork, gilding
- Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)
- Curved cartouches and flourishes
- Opulent, theatrical, aristocratic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/baroque-rococo.css`.)

```css
/* Baroque / Rococo — design tokens (generated from style_catalog.json) */
/* 1600–1780 | European Baroque (17th c.) and Rococo (18th c.). */
:root {
  /* color */
  --color-bg: #2a1116;
  --color-surface: #3a1a20;
  --color-surface-strong: #4a232b;
  --color-border: #c9a24b;
  --color-text: #f3e6d0;
  --color-text-muted: #d8bfa0;
  --color-primary: #8c1c2b;
  --color-accent: #c9a24b;
  /* radius — cartouche curves, ornate scrollwork */
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 34px 8px 34px 8px;
  --radius-pill: 999px;
  /* shadow — dramatic Baroque chiaroscuro */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
  --shadow-md: 0 10px 24px rgba(0,0,0,0.5);
  --shadow-lg: 0 22px 48px rgba(0,0,0,0.6);
  --shadow-inset-gilt: inset 0 0 0 1px rgba(201,162,75,0.5);
  /* font */
  --font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
  --font-display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif;
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
  /* extra — signature gilded double-frame border, echoing Versailles molding */
  --gilt-frame: 3px double var(--color-accent);
  --gilt-glow: linear-gradient(180deg, rgba(201,162,75,0.18), transparent 40%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Baroque / Rococo — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#2a1116",
        "surface": "#3a1a20",
        "surface-strong": "#4a232b",
        "border": "#c9a24b",
        "text": "#f3e6d0",
        "text-muted": "#d8bfa0",
        "primary": "#8c1c2b",
        "accent": "#c9a24b",
      },
      borderRadius: {
        "sm": "6px",
        "md": "14px",
        "lg": "34px 8px 34px 8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 10px 24px rgba(0,0,0,0.5)",
        "lg": "0 22px 48px rgba(0,0,0,0.6)",
        "inset-gilt": "inset 0 0 0 1px rgba(201,162,75,0.5)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cinzel Decorative'", "'Playfair Display'", "Georgia", "serif"],
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
//   --gilt-frame: 3px double var(--color-accent);
//   --gilt-glow: linear-gradient(180deg, rgba(201,162,75,0.18), transparent 40%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--gilt-frame` border over `--gilt-glow` + `--color-surface`, plus `--shadow-sm` and `--shadow-inset-gilt` stacked for a molded, three-dimensional edge; hover lifts with `--shadow-md`. `btn--primary` fills deep crimson. |
| **Input** | `--radius-md`, `--gilt-frame` border on `--color-surface`; focus adds a soft gold ring (`0 0 0 3px rgba(201,162,75,0.25)`) rather than a hard outline, matching the material's softness. |
| **Card** | The hero: `--gilt-glow` background wash, `--gilt-frame`, asymmetric `--radius-lg` cartouche corners, `--shadow-lg` + `--shadow-inset-gilt` for chiaroscuro depth. |
| **Nav** | `--gilt-glow` wash with `--gilt-frame` as the bottom border and `--shadow-sm` — a gilded cornice running along the top of the page. |
| **Modal** | Largest gilt treatment: full `--gilt-frame`, `--radius-lg` cartouche shape, `--shadow-lg`, over a near-black scrim so the gold reads as illuminated ornament against dramatic dark. |
| **Table** | `--gilt-frame` only on the outer table edge and header row; interior rows stay flat `--color-surface` to keep dense data readable under the ornament. |
| **Tooltip** | Small chip, thin single gold border (not full double-frame — too heavy at that scale), `--radius-sm`. |
| **Badge** | Outlined pill: transparent fill, 1px gold border, gold text — a small heraldic mark rather than a filled shape. |
| **Toggle** | Track uses `--gilt-frame`; knob is a small gold medallion sliding with `cubic-bezier(0.4,0,0.2,1)`, echoing a scrollwork clasp. |
| **Loading** | `--gilt-glow` sweeping top-to-bottom across a `--gilt-frame`-bordered bar — light catching gilding as it "breathes." |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Gold-on-dark-wine (`--color-accent` on `--color-bg`/`--color-surface`) is a decorative border color, not a body text color — body copy stays on `--color-text` (near-white) for contrast; verify with `contrast_check.py` before using gold for any text larger than a label.
- The dramatic Baroque chiaroscuro shadows (`--shadow-lg`) can make dark-on-dark text nearly invisible at the shadow's edge — keep a minimum-contrast floor and don't let card content bleed past its padded safe area.
- Asymmetric cartouche radii (`--radius-lg`) can visually clip corner content (icons, close buttons) — inset interactive elements enough that the curve never crosses a tap target.
- If adapting toward the lighter Rococo palette (pastels), re-run `contrast_check.py` — pastel-on-pastel is a common Rococo failure mode even though the gilt-frame border stays legible.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Pair `--gilt-frame` with `--gilt-glow` every time — the border alone reads flat without the light wash behind it.
- ✅ Reserve the asymmetric cartouche radius (`--radius-lg`) for hero cards/modals, not small controls.
- ✅ Keep body text on `--color-text`, saving gold for borders, glows, and short labels.

## Don't

- ❌ Use a single solid border where `double` gilt-frame is called for — the double line is what reads as molding.
- ❌ Apply the asymmetric cartouche radius uniformly to every button — it's a hero-surface device, not a default.
- ❌ Flatten the shadows to a single soft blur — Baroque needs the layered `--shadow-lg` + `--shadow-inset-gilt` for its theatrical depth.

## Don't confuse this with…

*Commonly confused neighbors:* victorian, grandmillennial.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
