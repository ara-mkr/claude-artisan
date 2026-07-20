# Marble / Stone — Implementation Spec

*Aliases:* marbled, stone texture
*Slug:* `marble` · *Category:* texture · *Era:* Timeless

**Origin.** Natural stone as luxury material reference.

**Reference example.** Luxury/beauty branding; classical museum sites.

## Signature move(s)

A restrained gold hairline (`--gold-hairline: 1px solid rgba(176,138,62,0.55)`) framing every card and section, laid over a cream stone ground with subtle vein-colored (`--color-vein`/`--color-vein-dark`) gradient texture. Corners stay nearly square, type is a classical serif, and weight comes from generous whitespace rather than saturation.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Veined marble surfaces and swirls
- Cream, black, green, gold veining
- Premium, weighty, classical
- Fluid ink-marble variants

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/marble.css`.)

```css
/* Marble / Stone — design tokens (generated from style_catalog.json) */
/* Timeless | Natural stone as luxury material reference. */
:root {
  /* color */
  --color-bg: #f7f4ee;
  --color-surface: #fdfcf9;
  --color-surface-strong: #efe9dd;
  --color-border: #d8cfbd;
  --color-text: #241f1a;
  --color-text-muted: #5c5346;
  --color-primary: #1f3d33;
  --color-accent: #b08a3e;
  --color-vein: #8a8272;
  --color-vein-dark: #38332b;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(36,31,26,0.10);
  --shadow-md: 0 6px 18px rgba(36,31,26,0.14);
  --shadow-lg: 0 16px 40px rgba(36,31,26,0.18);
  /* font */
  --font-sans: 'Cormorant Garamond', 'Georgia', serif;
  --font-display: 'Didot', 'Playfair Display', 'Georgia', serif;
  --font-mono: ui-monospace, 'Courier New', monospace;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra */
  --gold-hairline: 1px solid rgba(176,138,62,0.55);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Marble / Stone — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f4ee",
        "surface": "#fdfcf9",
        "surface-strong": "#efe9dd",
        "border": "#d8cfbd",
        "text": "#241f1a",
        "text-muted": "#5c5346",
        "primary": "#1f3d33",
        "accent": "#b08a3e",
        "vein": "#8a8272",
        "vein-dark": "#38332b",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(36,31,26,0.10)",
        "md": "0 6px 18px rgba(36,31,26,0.14)",
        "lg": "0 16px 40px rgba(36,31,26,0.18)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'Georgia'", "serif"],
        "display": ["'Didot'", "'Playfair Display'", "'Georgia'", "serif"],
        "mono": ["ui-monospace", "'Courier New'", "monospace"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` token is CSS-only:
//   --gold-hairline: 1px solid rgba(176,138,62,0.55);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm` near-square shape, `--color-primary` fill with `--gold-hairline` border, small-caps serif label; hover deepens fill slightly. |
| **Input** | `--color-surface` fill, `--gold-hairline` bottom border only (classical underline field), focus thickens the hairline to 2px. |
| **Card** | `--color-surface` panel, `--gold-hairline` framing all four edges, faint vein-colored radial texture, `--shadow-md`. |
| **Nav** | `--color-bg` bar, single `--gold-hairline` bottom rule, serif wordmark, generous letter-spacing. |
| **Modal** | `--color-surface`, `--radius-lg`, double `--gold-hairline` frame (outer + inner), `--shadow-lg`. |
| **Table** | Header row underlined with `--gold-hairline`; body rows separated by hairlines in `--color-border`, not fills. |
| **Tooltip** | `--color-vein-dark` fill, cream text, `--radius-sm`, thin gold edge. |
| **Badge** | `--radius-sm` chip, `--color-accent` text on transparent with a `--gold-hairline` outline (no solid fill — keeps it precious, not loud). |
| **Toggle** | Track has a `--gold-hairline` outline; knob is `--color-primary` solid. |
| **Loading** | A thin gold hairline sweeps left-to-right across a vein-textured skeleton block, echoing a polished stone reflection. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- `--gold-hairline` at 0.55 alpha is a decorative border, not a state indicator — give focus states a solid, opaque `--color-primary` outline at 2px minimum.
- Verify `--color-text-muted` (#5c5346) against `--color-surface` (#fdfcf9) with `contrast_check.py` — warm greys on cream can read softer than they measure.
- Keep vein texture (`--color-vein`) restricted to backgrounds/borders; never let veining cross behind body paragraphs at strengths that reduce text contrast.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the gold hairline consistently as the one accent color across borders and small UI marks.
- ✅ Lean on generous whitespace and serif type to carry the "premium" feel instead of heavy color.
- ✅ Keep radii small and square — rounded corners undercut the classical stone reference.

## Don't

- ❌ Don't overuse `--color-accent` gold as a fill color — it should stay a line/text accent, not a background.
- ❌ Don't mix in bright saturated hues; the palette is deliberately restrained (cream, deep green, gold, ink).
- ❌ Don't let vein texture become busy enough to compete with typography.

## Don't confuse this with…

*Commonly confused neighbors:* engraving, art-deco.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
