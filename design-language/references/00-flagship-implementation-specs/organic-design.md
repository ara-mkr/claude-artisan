# Organic / Biomorphic — Implementation Spec

*Aliases:* biomorphic, nature-inspired
*Slug:* `organic-design` · *Category:* minimal-organic · *Era:* 2018–present

**Origin.** Reaction to rigid grids; nature-derived forms.

**Reference example.** Wellness/beauty brand sites; many 2020s landing pages.

## Signature move(s)

Every rectangle gets softened into an asymmetric blob: `border-radius: var(--radius-blob)` (four unequal corner pairs, not a uniform round) on hero art and feature cards, paired with a wave-shaped SVG divider between sections instead of a hard horizontal line. Section transitions curve instead of cut, and clay/terracotta accents sit against warm off-white paper — nothing in the layout should read as a straight-edged box.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Flowing curves and asymmetric blobs
- Soft natural palettes
- Fluid, hand-tuned layouts
- Wave dividers, rounded everything

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/organic-design.css`.)

```css
/* Organic / Biomorphic — design tokens (generated from style_catalog.json) */
/* 2018–present | Reaction to rigid grids; nature-derived forms. */
:root {
  /* color */
  --color-bg: #f6f1e7;
  --color-surface: #ffffff;
  --color-surface-strong: #eee6d6;
  --color-border: #dccdb0;
  --color-text: #2f3b2a;
  --color-text-muted: #5c6b53;
  --color-primary: #6f8f4e;
  --color-accent: #d98b5f;
  --color-clay: #e7c9a9;
  /* radius */
  --radius-sm: 16px;
  --radius-md: 28px;
  --radius-lg: 44px;
  --radius-pill: 999px;
  --radius-blob: 60% 40% 55% 45% / 45% 55% 40% 60%;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(47, 59, 42, 0.08);
  --shadow-md: 0 8px 24px rgba(47, 59, 42, 0.12);
  --shadow-lg: 0 20px 48px rgba(47, 59, 42, 0.16);
  /* font */
  --font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
  --font-display: 'Fraunces', Georgia, serif;
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
  --ease-standard: cubic-bezier(0.34, 1.2, 0.4, 1);
  /* extra (signature wave divider) */
  --wave-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 V20 H0 Z' fill='%23f6f1e7'/%3E%3C/svg%3E");
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Organic / Biomorphic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f1e7",
        "surface": "#ffffff",
        "surface-strong": "#eee6d6",
        "border": "#dccdb0",
        "text": "#2f3b2a",
        "text-muted": "#5c6b53",
        "primary": "#6f8f4e",
        "accent": "#d98b5f",
        "clay": "#e7c9a9",
      },
      borderRadius: {
        "sm": "16px",
        "md": "28px",
        "lg": "44px",
        "pill": "999px",
        "blob": "60% 40% 55% 45% / 45% 55% 40% 60%",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(47, 59, 42, 0.08)",
        "md": "0 8px 24px rgba(47, 59, 42, 0.12)",
        "lg": "0 20px 48px rgba(47, 59, 42, 0.16)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "Georgia", "serif"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.4, 1)",
      },
    },
  },
};

// Signature `extra` token is CSS-only (SVG data-URI divider). Add as a
// custom property or arbitrary value:
//   --wave-divider: url("data:image/svg+xml,...");
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, soft fill in `--color-surface-strong`; primary variant fills `--color-primary`. Hover lifts with `translateY(-2px) scale(1.02)` on `--ease-standard`, never a sharp snap. |
| **Input** | `--radius-md`, no visible corner — border softens to `--color-border`; focus ring uses `--color-primary` glow, not a hard rectangle outline. |
| **Card** | The hero: `--radius-blob` (asymmetric four-corner mix), `--shadow-md`, generous `--space-8` padding so the organic edge has room to read. |
| **Nav** | Pill-shaped bar (`--radius-pill`) floating on `--color-surface` with `--shadow-sm` — never a hard-edged strip. |
| **Modal** | `--radius-lg` panel with a blob accent shape bleeding off one corner behind it; scrim in warm-tinted black, not cold gray. |
| **Table** | Rows keep straight edges for scannability, but the table wrapper itself takes `--radius-lg` and a wave-divider header cap. |
| **Tooltip** | Small `--radius-md` chip in `--color-surface-strong`, no hard point — a rounded blob tail instead of a triangle. |
| **Badge** | `--radius-pill`, filled with `--color-clay` or `--color-accent` tints. |
| **Toggle** | Pill track (`--radius-pill`), knob transitions with the bouncy `--ease-standard` overshoot curve. |
| **Loading** | A soft blob shape pulsing/morphing between two `--radius-blob` variants rather than a spinning ring. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Asymmetric blob radii on cards can clip corner content (icons, close buttons) — keep interactive targets in the card's rectangular safe zone, not near the extreme curve points.
- The bouncy overshoot easing (`cubic-bezier(0.34, 1.2, 0.4, 1)`) reads as playful but must respect `prefers-reduced-motion` — swap to a linear fade for users who opt out.
- `--color-text-muted` (#5c6b53) on `--color-bg` (#f6f1e7) is a low-contrast pairing at small sizes — reserve it for captions ≥14px and verify with the contrast tool.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary the blob radius formula slightly between cards so nothing looks stamped from one template.
- ✅ Use the wave divider (or a blob mask) at every hard section boundary, not just the hero.
- ✅ Keep body copy on flat `--color-surface`, saving the curved edges for containers, not text blocks.

## Don't

- ❌ Apply `--radius-blob` uniformly to every element — a fully rounded UI reads as generic "rounded," not organic.
- ❌ Mix in hard 90° corners on primary containers; it breaks the natural-forms illusion instantly.
- ❌ Overload the palette with saturated color — the style depends on soft, desaturated naturals plus one clay accent.

## Don't confuse this with…

*Commonly confused neighbors:* blobmorphism, solarpunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
