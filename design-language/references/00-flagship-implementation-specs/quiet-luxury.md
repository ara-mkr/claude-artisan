# Quiet Luxury / Old Money — Implementation Spec

*Aliases:* old money, stealth wealth  
*Slug:* `quiet-luxury` · *Category:* niche · *Era:* 2022–present

**Origin.** Anti-logo luxury minimalism (post-'Succession').

**Reference example.** 'Succession' costuming; Loro Piana-adjacent.

## Signature move(s)

The hairline: a single 1px gold-grey rule (`--hairline`) is the only ornament this style permits — under a header, around a card, beneath a nav — standing in for the stitching on a bespoke suit. There is no logo, no loud color, no gradient; wealth is signaled by restraint, generous whitespace, and one serif display face (Canela) used only for the largest headline on a page. Micro-labels get wide letter-spacing (`--letterspace-label: 0.08em`) instead of color or weight to feel considered rather than shouted.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Understated neutral tones: camel, cream, navy
- No visible branding; quality materials
- Serif type, restrained elegance
- Timeless, expensive-looking calm

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/quiet-luxury.css`.)

```css
/* Quiet Luxury / Old Money — design tokens (generated from style_catalog.json) */
/* 2022–present | Anti-logo luxury minimalism (post-'Succession'). */
:root {
  /* color */
  --color-bg: #f6f2e9;
  --color-surface: #fffdf8;
  --color-surface-strong: #ece3d1;
  --color-border: #d9cdad;
  --color-text: #2a2620;
  --color-text-muted: #6b6153;
  --color-primary: #1f2a44;
  --color-accent: #a9825c;
  --color-hairline: #b8a575;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(42, 38, 32, 0.06);
  --shadow-md: 0 4px 12px rgba(42, 38, 32, 0.08);
  --shadow-lg: 0 12px 28px rgba(42, 38, 32, 0.10);
  /* font */
  --font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Canela', 'Times New Roman', Georgia, serif;
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
  /* extra (signature hairline + label tracking) */
  --hairline: 1px solid var(--color-hairline);
  --letterspace-label: 0.08em;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Quiet Luxury / Old Money — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f2e9",
        "surface": "#fffdf8",
        "surface-strong": "#ece3d1",
        "border": "#d9cdad",
        "text": "#2a2620",
        "text-muted": "#6b6153",
        "primary": "#1f2a44",
        "accent": "#a9825c",
        "hairline": "#b8a575",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(42, 38, 32, 0.06)",
        "md": "0 4px 12px rgba(42, 38, 32, 0.08)",
        "lg": "0 12px 28px rgba(42, 38, 32, 0.10)",
      },
      fontFamily: {
        "sans": ["'Neue Haas Grotesk'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Canela'", "'Times New Roman'", "Georgia", "serif"],
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
      letterSpacing: {
        "label": "0.08em",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// The hairline itself is a CSS-only construct — apply as a raw property:
//   border-bottom: var(--hairline);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat `--color-primary` (navy) fill or a hairline-bordered ghost variant; `--radius-sm`, no shadow at rest — restraint over affordance tricks. |
| **Input** | Underline-only: `border-bottom: var(--hairline)`, no fill, no box — like a form on cream stationery. Focus thickens the hairline to 2px `--color-primary`. |
| **Card** | `--color-surface`, `var(--hairline)` border, `--shadow-sm` at most, `--radius-md` — never a bold shadow. |
| **Nav** | Cream bar, single `var(--hairline)` bottom rule, wordmark in `--font-display` at normal weight, no logo mark. |
| **Modal** | Card recipe, `--shadow-lg` kept soft (opacity ≤0.10), generous padding (`--space-12`+). |
| **Table** | Header row uses `--letterspace-label` uppercase micro-labels over a `var(--hairline)` rule; body rows separated by hairlines, no zebra striping. |
| **Tooltip** | Cream chip, `var(--hairline)` border, `--color-text` — no dark inverted chip, stay in-palette. |
| **Badge** | Text-only micro-label with `--letterspace-label`, no fill; a thin hairline outline at most. |
| **Toggle** | Track in `--color-surface-strong` with `var(--hairline)` edge, knob in `--color-primary` — quiet, not colorful. |
| **Loading** | A slow hairline-width progress rule filling left to right; no spinners, no bounce. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The whole system is built on low-contrast hairlines by design — verify every hairline-only divider still gives a 3:1 non-text contrast ratio, and never use a hairline alone to indicate an interactive input's boundary without a focus-state check via `contrast_check.py`.
- `--color-text-muted` (#6b6153) on `--color-bg`/`--color-surface-strong` must be checked — restrained palettes tempt low-contrast muted text that reads as "elegant" but fails AA.
- Focus indicators must not rely on the hairline alone; add a visible 2px `--color-primary` focus ring so keyboard users get real signal, not just a subtler line.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let whitespace (`--space-12`, `--space-16`, `--space-24`) do the work that decoration would in louder styles.
- ✅ Reserve `--font-display` for one headline per view; everything else stays in the quiet sans.
- ✅ Use the hairline as the single consistent ornament across every component.

## Don't

- ❌ Add a logo, icon badge, or any branded mark — the whole point is anti-logo restraint.
- ❌ Introduce a second accent color beyond `--color-accent` (camel/tan) — one is plenty.
- ❌ Use heavy shadows or saturated fills — anything louder than `--shadow-md` breaks the calm.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, scandinavian.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
