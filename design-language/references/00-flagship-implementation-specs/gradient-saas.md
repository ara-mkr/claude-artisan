# Modern Gradient SaaS — Implementation Spec

*Aliases:* startup gradient, SaaS landing
*Slug:* `gradient-saas` · *Category:* flat-platform · *Era:* 2019–present

**Origin.** Ubiquitous startup landing-page look.

**Reference example.** Countless YC/startup landing pages.

## Signature move(s)

Soft blurred color blobs (`--blob-a`, `--blob-b`, `--blob-c` in violet/pink/cyan) floating behind a clean white canvas, with every primary CTA carrying a two-stop `--btn-gradient` (violet → pink) instead of a flat fill. Cards stay crisp white with tinted purple shadows (`rgba(109,91,246,...)`) so even the elevation reads on-brand.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Vibrant gradient hero + soft blurred blobs
- Rounded cards, subtle shadows, gradient buttons
- Friendly geometric sans
- Optimistic, clean, conversion-focused

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/gradient-saas.css`.)

```css
/* Modern Gradient SaaS — design tokens (generated from style_catalog.json) */
/* 2019–present | Ubiquitous startup landing-page look. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-strong: #f5f4ff;
  --color-border: #e6e3fb;
  --color-text: #1a1533;
  --color-text-muted: #635f7a;
  --color-primary: #6d5bf6;
  --color-accent: #ff6fa5;
  --color-blob-a: #8b7bff;
  --color-blob-b: #ff9ac2;
  --color-blob-c: #6fe3ff;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow (tinted toward primary, not neutral gray) */
  --shadow-sm: 0 2px 8px rgba(109,91,246,0.08);
  --shadow-md: 0 10px 30px rgba(109,91,246,0.14);
  --shadow-lg: 0 24px 60px rgba(109,91,246,0.20);
  /* font */
  --font-sans: 'Manrope', 'Inter', system-ui, sans-serif;
  --font-display: 'Manrope', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
  /* extra (signature CTA gradient) */
  --btn-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Modern Gradient SaaS — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f5f4ff",
        "border": "#e6e3fb",
        "text": "#1a1533",
        "text-muted": "#635f7a",
        "primary": "#6d5bf6",
        "accent": "#ff6fa5",
        "blob-a": "#8b7bff",
        "blob-b": "#ff9ac2",
        "blob-c": "#6fe3ff",
      },
      borderRadius: {
        "sm": "10px", "md": "16px", "lg": "24px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(109,91,246,0.08)",
        "md": "0 10px 30px rgba(109,91,246,0.14)",
        "lg": "0 24px 60px rgba(109,91,246,0.20)",
      },
      fontFamily: {
        "sans": ["'Manrope'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Manrope'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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

// The signature button gradient is CSS-only. Add as a custom property:
//   --btn-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent));
// Blurred hero blobs (--color-blob-a/b/c) are placed as absolutely-positioned
// divs with `filter: blur(80px)` behind the hero content, not as CSS variables alone.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, primary CTA fills with `--btn-gradient`, white text, `--shadow-md` tinted purple; hover lifts 1–2px and deepens the shadow to `--shadow-lg`. |
| **Input** | White fill, `--color-border` (lavender-tinted) outline, `--radius-md`; focus ring in `--color-primary`. |
| **Card** | `--color-surface` white, `--radius-lg`, `--shadow-sm` (tinted), sits above the blurred hero blobs so the gradient shows only in negative space around it. |
| **Nav** | White bar, `--color-border` bottom hairline; CTA button in the nav still carries `--btn-gradient`. |
| **Modal** | White panel, `--radius-lg`, `--shadow-lg`, optional soft blob glow visible at the panel's edges. |
| **Table** | Keep rows on flat `--color-surface` — no gradient inside tables, only `--color-surface-strong` (pale lavender) for header/hover. |
| **Tooltip** | Small white chip, `--color-border`, `--shadow-sm`, `--text-xs` label. |
| **Badge** | `--radius-pill`, soft-tinted fill from `--color-blob-a`/`--color-blob-b` at low opacity, not the full CTA gradient. |
| **Toggle** | `--color-surface-strong` track, `--btn-gradient` fill when on. |
| **Loading** | Pulsing blurred-blob shimmer (`--color-blob-a` at low opacity) or a `--btn-gradient` progress bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- White text on `--btn-gradient` must be checked at both gradient stops (violet and pink) — pick a text color/weight that clears contrast against the lighter stop, since gradients are only as accessible as their weakest point.
- Blurred background blobs must stay decorative and behind all text-bearing surfaces (`z-index` below cards) — never let hero copy sit directly on unblurred blob color without a white/near-white panel beneath it.
- Verify `--color-text-muted` (#635f7a) on `--color-surface-strong` (pale lavender) still passes 4.5:1 — pastel-on-pastel is a common failure mode here.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the gradient confined to CTAs, hero blobs, and progress indicators — not every surface.
- ✅ Let white/near-white cards do the heavy lifting for content; the gradient is atmosphere, not substance.
- ✅ Tint shadows toward the primary color instead of neutral gray for cohesion.

## Don't

- ❌ Put the full `--btn-gradient` behind body text — reserve it for short CTA labels.
- ❌ Stack more than 2–3 blurred blobs in one viewport — it turns "optimistic" into "muddy." 
- ❌ Use sharp, non-blurred gradient shapes — the softness of the blur is what reads as friendly rather than aggressive.

## Don't confuse this with…

*Commonly confused neighbors:* aurora-ui, corporate-memphis, mesh-gradient.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
