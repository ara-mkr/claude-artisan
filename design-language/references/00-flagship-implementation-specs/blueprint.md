# Blueprint / Technical Drawing — Implementation Spec

*Aliases:* schematic, wireframe aesthetic, draft  
*Slug:* `blueprint` · *Category:* texture · *Era:* Drafting heritage

**Origin.** Architectural/engineering cyanotype drawings.

**Reference example.** Product "how it works" sections; engineering brand sites.

## Signature move(s)

White line-work on a cyanotype-blue ground: everything is drawn, not filled — 1px `--color-primary` (white) strokes for borders, a faint `--grid-line` graph-paper grid behind all content, and `--dim-line` dashed dimension lines with monospace callout labels annotating key measurements, exactly like an engineering drawing.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- White line-work on cyan/blue ground
- Grid paper, dimension lines, callouts
- Monospace annotations
- Precise, technical, honest

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/blueprint.css`.)

```css
/* Blueprint / Technical Drawing — design tokens (generated from style_catalog.json) */
/* Drafting heritage | Architectural/engineering cyanotype drawings. */
:root {
  /* color */
  --color-bg: #0d3b66;
  --color-surface: #0f4a7d;
  --color-surface-strong: #135a96;
  --color-border: #bcd9f0;
  --color-text: #eaf4ff;
  --color-text-muted: #9fc4e6;
  --color-primary: #ffffff;
  --color-accent: #ffb703;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 2px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(255,255,255,0.15);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.35);
  --shadow-lg: 0 6px 18px rgba(0,0,0,0.4);
  /* font */
  --font-sans: 'Archivo', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Archivo', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', ui-monospace, monospace;
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
  --ease-standard: linear;
  /* extra (signature grid + dimension lines) */
  --grid-line: rgba(234,244,255,0.14);
  --dim-line: 1px dashed var(--color-text-muted);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Blueprint / Technical Drawing — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d3b66",
        "surface": "#0f4a7d",
        "surface-strong": "#135a96",
        "border": "#bcd9f0",
        "text": "#eaf4ff",
        "text-muted": "#9fc4e6",
        "primary": "#ffffff",
        "accent": "#ffb703",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "2px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(255,255,255,0.15)",
        "md": "0 2px 8px rgba(0,0,0,0.35)",
        "lg": "0 6px 18px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Archivo'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Archivo'", "system-ui", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only. Add as custom properties:
//   --grid-line: rgba(234,244,255,0.14);
//   --dim-line: 1px dashed var(--color-text-muted);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Zero radius, transparent fill with 1px `--color-primary` (white) outline; on hover, fill with `--color-surface-strong`, never a gradient. |
| **Input** | Zero radius, `--color-surface` fill, 1px `--color-primary` border; focus adds `--color-accent` border like a highlighted schematic layer. |
| **Card** | Transparent/`--color-surface` panel outlined in 1px `--color-primary`, `--grid-line` graph paper visible behind content. |
| **Nav** | Flat `--color-bg` bar, 1px `--color-primary` bottom rule, `--font-mono` callout-style nav labels. |
| **Modal** | `--color-surface`, 1px `--color-primary` border, `--dim-line` dashed annotations pointing to key modal regions if relevant. |
| **Table** | `--dim-line` dashed row dividers, `--font-mono` for all numeric/technical columns, header in `--color-primary` solid rule. |
| **Tooltip** | Small chip with `--color-surface-strong` fill, 1px `--color-primary` border, styled like a callout label with a `--dim-line` leader. |
| **Badge** | Zero radius or `--radius-pill: 2px`, outlined in `--color-accent`, `--font-mono` uppercase text. |
| **Toggle** | Rectangular (not pill) track outlined in `--color-primary`, `--color-accent` knob when on — drawn like a schematic switch symbol. |
| **Loading** | An animated dashed `--dim-line` progress path, or a rotating compass/protractor motif in `--color-primary`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- White-on-blue line-work relies on thin 1px strokes — verify those strokes still meet the 3:1 non-text contrast minimum against `--color-bg`, especially at smaller component sizes.
- `--grid-line` graph paper must stay very low opacity (≤0.15) behind text-bearing regions or it will visually compete with `--font-mono` annotation labels.
- `--color-text-muted` on `--color-bg` blue needs verification — muted blues-on-blue is an easy contrast failure in this palette.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Draw everything with line-work (borders/strokes) rather than filled shapes wherever possible.
- ✅ Use `--font-mono` consistently for numeric, technical, or annotation text to sell the drafting-callout feel.
- ✅ Keep the grid visible but subordinate — it's a texture cue, not a focal element.

## Don't

- ❌ Fill surfaces with solid color blocks — this style is about outline, not fill.
- ❌ Round any corners — blueprints are drawn with rulers, not compasses (except the pill toggle knob).
- ❌ Let the dashed dimension-line pattern get so dense it competes with real content.

## Don't confuse this with…

*Commonly confused neighbors:* ascii-terminal, isometric.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
