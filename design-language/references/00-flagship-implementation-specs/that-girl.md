# That Girl / Clean Girl — Implementation Spec

*Aliases:* clean girl, cleanfluencer  
*Slug:* `that-girl` · *Category:* niche · *Era:* 2021–present

**Origin.** Wellness/productivity lifestyle aesthetic.

**Reference example.** 'That Girl' TikTok routines.

## Signature move(s)

The air wash: every large surface sits on a barely-there vertical gradient (`--air-wash`, cream fading to beige) instead of a flat fill, like morning light in a clean apartment, and focus states glow with a soft sage halo (`--sage-ring`) instead of a hard outline. Radii run generous (`--radius-lg: 24px`) so every shape feels soft and unhurried; a warm serif (Fraunces) headline sits over clean sans body copy the way a handwritten journal entry sits over a printed planner page.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Airy neutrals: beige, white, sage
- Minimal, clean, aspirational-wellness
- Soft serif + clean sans
- Matcha, journaling, gym, 'wellness'

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/that-girl.css`.)

```css
/* That Girl / Clean Girl — design tokens (generated from style_catalog.json) */
/* 2021–present | Wellness/productivity lifestyle aesthetic. */
:root {
  /* color */
  --color-bg: #f7f3ec;
  --color-surface: #ffffff;
  --color-surface-strong: #f0ebe1;
  --color-border: #e4dcc9;
  --color-text: #4a4238;
  --color-text-muted: #8a7f6d;
  --color-primary: #9caf88;
  --color-accent: #c99f7a;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(74,66,56,0.05);
  --shadow-md: 0 8px 24px rgba(74,66,56,0.08);
  --shadow-lg: 0 16px 40px rgba(74,66,56,0.10);
  /* font */
  --font-sans: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Fraunces', 'Georgia', serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, focus glow) */
  --air-wash: linear-gradient(180deg, #fbf9f4 0%, #f7f3ec 100%);
  --sage-ring: 0 0 0 3px rgba(156,175,136,0.18);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// That Girl / Clean Girl — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f3ec",
        "surface": "#ffffff",
        "surface-strong": "#f0ebe1",
        "border": "#e4dcc9",
        "text": "#4a4238",
        "text-muted": "#8a7f6d",
        "primary": "#9caf88",
        "accent": "#c99f7a",
      },
      borderRadius: {
        "sm": "10px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(74,66,56,0.05)",
        "md": "0 8px 24px rgba(74,66,56,0.08)",
        "lg": "0 16px 40px rgba(74,66,56,0.10)",
        "sage-ring": "0 0 0 3px rgba(156,175,136,0.18)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// The air-wash background gradient is CSS-only. Add as a custom
// property or arbitrary value:
//   --air-wash: linear-gradient(180deg, #fbf9f4 0%, #f7f3ec 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill (`--radius-pill`), `--color-primary` (sage) fill for primary, `--color-surface` ghost for secondary; focus/hover adds `--sage-ring`. |
| **Input** | `--color-surface`, thin `--color-border`, `--radius-md`; focus swaps border to `--color-primary` and adds `--sage-ring`. |
| **Card** | `background: var(--air-wash)`, `--radius-lg`, `--shadow-sm` at rest, `--shadow-md` on hover — soft, never harsh. |
| **Nav** | `--color-surface` bar on `var(--air-wash)` page background, active link underlined in `--color-primary`. |
| **Modal** | Card recipe scaled up, `--shadow-lg`, rounded `--radius-lg`, generous internal padding. |
| **Table** | `--color-surface` rows, `--color-surface-strong` header, hairline `--color-border` dividers — kept airy, not dense. |
| **Tooltip** | Small `--color-text` chip on `--color-bg`, `--radius-sm`, low-opacity `--shadow-sm`. |
| **Badge** | Pill, `--color-accent` (terracotta) or `--color-primary` (sage) tint fill at ~15% opacity with full-opacity text. |
| **Toggle** | `--color-surface-strong` track, `--color-primary` knob when on, `--sage-ring` on focus. |
| **Loading** | A gentle sage pulse or a slow shimmer across `var(--air-wash)` — nothing sharp or fast. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-primary` (#9caf88, sage) on `--color-surface`/`--color-bg` often fails AA for text — use it for fills with dark text or as an accent/ring only, and verify any sage-on-cream text pairing with `contrast_check.py`.
- `--sage-ring` alone (18% opacity) may not meet the 3:1 non-text contrast requirement for focus indicators — pair it with a solid border color shift, not glow alone.
- Keep the air-wash gradient subtle enough that body text placed directly on it (not on a card) still passes contrast at both ends of the gradient.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the air-wash gradient on large background surfaces, not on small text-bearing chips.
- ✅ Keep the sage-ring focus treatment consistent across every focusable element.
- ✅ Reserve the serif display font for headlines; body copy stays in the clean sans for that "productive" clarity.

## Don't

- ❌ Add saturated brand colors — anything beyond sage/terracotta/cream breaks the wellness-neutral read.
- ❌ Use sharp corners or hard shadows — this style has no brutalist or techwear edges.
- ❌ Clutter the layout — "clean girl" fails if the composition looks busy.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, light-academia.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
