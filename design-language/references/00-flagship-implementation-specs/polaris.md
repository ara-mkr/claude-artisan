# Shopify Polaris — Implementation Spec

*Aliases:* Polaris
*Slug:* `polaris` · *Category:* flat-platform · *Era:* 2017–present

**Origin.** Shopify.

**Reference example.** Shopify admin.

## Signature move(s)

Merchant-first calm: content lives inside generously rounded (`--radius-lg`, 12px) white cards separated by hairline `--card-divider`s, floating just barely above a cool neutral `--color-bg` (#f1f2f4) with the lightest possible `--shadow-sm` (a 1px bottom line, not a blur). Every actionable element gets a wide, soft `--focus-ring` (4px, low-opacity blue) instead of a hard ring, so the whole admin feels quiet and legible even when a merchant is staring at it for hours.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Merchant-admin focused, calm and legible
- Card-based layouts, clear affordances
- Accessible, restrained color
- Content guidelines baked in

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/polaris.css`.)

```css
/* Shopify Polaris — design tokens (generated from style_catalog.json) */
/* 2017–present | Shopify. */
:root {
  /* color */
  --color-bg: #f1f2f4;
  --color-surface: #ffffff;
  --color-surface-strong: #f6f6f7;
  --color-border: #d2d5d9;
  --color-text: #1a1c1d;
  --color-text-muted: #5c5f62;
  --color-primary: #008060;
  --color-accent: #2c6ecb;
  --color-critical: #d82c0d;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(26, 28, 29, 0.05);
  --shadow-md: 0 1px 3px rgba(26, 28, 29, 0.1), 0 1px 2px rgba(26,28,29,0.06);
  --shadow-lg: 0 4px 10px rgba(26, 28, 29, 0.12);
  /* font */
  --font-sans: -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: -apple-system, 'Segoe UI', system-ui, sans-serif;
  --font-mono: ui-monospace, 'SFMono-Regular', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.625rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.25rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 20px;
  --space-8: 28px;
  --space-12: 40px;
  --space-16: 56px;
  --space-24: 80px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --focus-ring: 0 0 0 4px rgba(0, 91, 211, 0.24);
  --card-divider: 1px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Shopify Polaris — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f1f2f4",
        "surface": "#ffffff",
        "surface-strong": "#f6f6f7",
        "border": "#d2d5d9",
        "text": "#1a1c1d",
        "text-muted": "#5c5f62",
        "primary": "#008060",
        "accent": "#2c6ecb",
        "critical": "#d82c0d",
      },
      borderRadius: {
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(26, 28, 29, 0.05)",
        "md": "0 1px 3px rgba(26, 28, 29, 0.1), 0 1px 2px rgba(26,28,29,0.06)",
        "lg": "0 4px 10px rgba(26, 28, 29, 0.12)",
      },
      fontFamily: {
        "sans": ["-apple-system", "'Segoe UI'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["-apple-system", "'Segoe UI'", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "'SFMono-Regular'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.625rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "20px",
        "8": "28px",
        "12": "40px",
        "16": "56px",
        "24": "80px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --focus-ring: 0 0 0 4px rgba(0, 91, 211, 0.24);
//   --card-divider: 1px solid var(--color-border);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md` rectangle, `--color-primary` (Shopify green) fill for primary actions, plain/outline for secondary; focus gets the wide 4px `--focus-ring`. |
| **Input** | `--radius-md` field, 1px `--color-border`; focus swaps border to `--color-accent` and grows `--focus-ring`. |
| **Card** | The hero: white `--color-surface`, `--radius-lg`, `--shadow-sm` bottom-line only, internal sections separated by `--card-divider` hairlines rather than nested cards. |
| **Nav** | Left rail on `--color-bg`, items get `--color-surface-strong` pill background when active, calm and low-contrast until hovered. |
| **Modal** | Centered `--radius-lg` card, `--shadow-lg`, header/body/footer split by `--card-divider`. |
| **Table** | Rows separated by `--card-divider` hairlines inside a single `--radius-lg` card shell, not individually boxed. |
| **Tooltip** | Small dark chip, `--radius-sm`, `--shadow-md`. |
| **Badge** | Rounded status pill using semantic tints (success = primary green, critical = `--color-critical`). |
| **Toggle** | Pill track, `--color-primary` when on, white knob with `--shadow-sm`. |
| **Loading** | Thin `--color-primary` progress bar at the top of the viewport (Shopify's "page loading" bar), or skeleton blocks on `--color-surface-strong`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Polaris deliberately keeps color restrained — don't let `--color-text-muted` (#5c5f62) drift lighter for "elegance"; verify it against both `--color-surface` and `--color-surface-strong` with `contrast_check.py`.
- The signature wide `--focus-ring` is soft by design (24% opacity); confirm it's still visually distinct enough at 3:1 against adjacent card backgrounds, and never rely on it as the sole focus cue on custom controls.
- Because sections within a card are divided only by hairlines (`--card-divider`), don't let related-but-distinct actions (e.g., "Save" vs "Delete") sit close enough that a merchant could misclick — preserve Polaris's generous internal padding (`--space-4`+).

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Group related content into one `--radius-lg` card with internal `--card-divider` hairlines, not multiple stacked mini-cards.
- ✅ Keep the palette restrained — one green primary, one blue accent, one red critical; resist adding more brand colors.
- ✅ Use the soft 4px `--focus-ring` consistently on every focusable control.

## Don't

- ❌ Add heavy shadows or gradients to cards — Polaris cards are nearly flat, separated by a hairline, not elevation.
- ❌ Introduce a second accent color for "visual interest" — restraint is the point.
- ❌ Nest cards inside cards; use dividers within one card instead.

## Don't confuse this with…

*Commonly confused neighbors:* carbon-design, atlassian-design.

vs carbon-design: Carbon is zero-radius, cooler, and darker by default; Polaris rounds everything (12px cards) and stays light/neutral. vs atlassian-design: Atlassian leans bluer and more saturated with heavier layered shadows; Polaris is calmer, greener-primaried, and nearly shadow-free.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
