# Grandmillennial — Implementation Spec

*Aliases:* granny chic, grandmacore
*Slug:* `grandmillennial` · *Category:* niche · *Era:* 2019–present

**Origin.** Millennial embrace of "grandma" decor.

**Reference example.** Grandmillennial interiors (House Beautiful).

## Signature move(s)

A scalloped edge cut into every card, header, and section divider (built from a repeating radial-gradient mask) paired with chintz-warm cream surfaces, a needlepoint-red primary, and a serif display face standing in for embroidered lettering. The scallop is the tell — it turns a flat rectangle into a doily.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Chintz florals, ruffles, needlepoint
- Scalloped edges, toile, warm traditional
- Ornate but cozy
- Nostalgic maximal comfort

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/grandmillennial.css`.)

```css
/* Grandmillennial — design tokens (generated from style_catalog.json) */
/* 2019–present | Millennial embrace of 'grandma' decor. */
:root {
  /* color */
  --color-bg: #faf3e8;
  --color-surface: #fffaf1;
  --color-surface-strong: #f5e6d3;
  --color-border: #d8b892;
  --color-text: #3f2e22;
  --color-text-muted: #6f5a45;
  --color-primary: #b3435a;
  --color-accent: #4f7a5c;
  --color-gold: #c8933f;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(63,46,34,0.12);
  --shadow-md: 0 8px 18px rgba(63,46,34,0.16);
  --shadow-lg: 0 16px 34px rgba(63,46,34,0.2);
  /* font */
  --font-sans: 'Libre Franklin', 'Century Gothic', sans-serif;
  --font-display: 'Playfair Display', 'Cormorant Garamond', serif;
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
  /* extra (signature scallop edge) */
  --scallop-edge: radial-gradient(circle at 10px 0, transparent 9px, var(--color-surface) 9.5px) 0 0/20px 12px repeat-x;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Grandmillennial — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#faf3e8",
        "surface": "#fffaf1",
        "surface-strong": "#f5e6d3",
        "border": "#d8b892",
        "text": "#3f2e22",
        "text-muted": "#6f5a45",
        "primary": "#b3435a",
        "accent": "#4f7a5c",
        "gold": "#c8933f",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(63,46,34,0.12)",
        "md": "0 8px 18px rgba(63,46,34,0.16)",
        "lg": "0 16px 34px rgba(63,46,34,0.2)",
      },
      fontFamily: {
        "sans": ["'Libre Franklin'", "'Century Gothic'", "sans-serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
        "mono": ["ui-monospace", "monospace"],
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

// Signature scallop edge is CSS-only (mask/gradient). Add as a custom property:
//   --scallop-edge: radial-gradient(circle at 10px 0, transparent 9px, var(--color-surface) 9.5px) 0 0/20px 12px repeat-x;
// Apply via ::before/::after pseudo-elements at the top/bottom of scalloped surfaces.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, needlepoint-red `--color-primary` fill, cream text; a thin gold `--color-gold` hairline as a "piped edge." Hover deepens to a warmer red. |
| **Input** | `--color-surface` fill, `--color-border` (dusty tan) outline, `--radius-md`; focus ring in `--color-accent` sage green, evoking embroidery thread. |
| **Card** | The hero: `--color-surface` fill, `--shadow-md`, `--radius-lg`, and a `--scallop-edge` pseudo-element along the top edge like a doily border. |
| **Nav** | Cream bar with a scalloped bottom edge (`--scallop-edge` flipped), display-serif wordmark in `--color-primary`. |
| **Modal** | Larger `--radius-lg` panel, scalloped top and bottom, `--shadow-lg`, gold hairline border for a "framed portrait" feel. |
| **Table** | Alternating `--color-surface` / `--color-surface-strong` rows (toile-like banding), thin `--color-border` rules, no scallops (keeps data legible). |
| **Tooltip** | Small cream chip, `--radius-sm`, gold border, serif label in `--color-text`. |
| **Badge** | Pill shape, `--color-accent` or `--color-gold` fill depending on status, cream text. |
| **Toggle** | Track in `--color-surface-strong`, knob edged with a mini scallop, primary-red when on. |
| **Loading** | Soft cream shimmer over `--color-surface-strong`, or a spinning floral rosette icon in `--color-gold`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The cream-on-cream palette (`--color-bg` vs `--color-surface`) is low-contrast by design — verify body text always sits on `--color-text` over `--color-surface`, never over decorative florals or `--color-surface-strong` tints without a contrast check.
- Scallop pseudo-elements must be `aria-hidden` and non-interactive — they are decoration, not content boundaries.
- Keep the serif display font (`--font-display`) to headings only; long-form body copy in a decorative serif hurts readability at small sizes.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve the scallop edge for card/section boundaries — repeat it consistently, not just on the hero.
- ✅ Pair the red primary with the sage accent sparingly, like piping on a cushion.
- ✅ Keep body copy in `--font-sans` for legibility; save `--font-display` for headings and labels.

## Don't

- ❌ Scallop every single element (buttons, badges, inputs) — it turns cozy into cluttered.
- ❌ Use pure white or pure black — this palette is warm cream and ink-brown throughout.
- ❌ Mix in cold, saturated neons — the whole point is warm, faded-textile harmony.

## Don't confuse this with…

*Commonly confused neighbors:* cottagecore, victorian, maximalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
