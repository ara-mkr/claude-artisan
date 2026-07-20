# Aurora UI — Implementation Spec

*Aliases:* gradient glow, aurora gradients
*Slug:* `aurora-ui` · *Category:* morphism · *Era:* 2020–present

**Origin.** Popularized ~2020 across product marketing sites (Stripe-influenced).

**Reference example.** Stripe landing pages; many AI startup sites (2023–2024).

## Signature move(s)

Large, soft, blurred color blobs (`--color-glow-a`, `--color-primary`, `--color-accent`) glow behind a near-black canvas, overlapping like a real aurora; content sits on minimal glass surfaces so the color wash reads through the edges. The glow is positioned, not centered — asymmetric placement plus heavy blur (`--blur-backdrop`) is what separates this from a flat gradient hero.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Large soft blurred color blobs behind content
- Aurora-like overlapping gradients
- Often paired with glass surfaces
- Dark backgrounds with luminous color washes

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/aurora-ui.css`.)

```css
/* Aurora UI — design tokens (generated from style_catalog.json) */
/* 2020–present | Popularized ~2020 across product marketing sites (Stripe-influenced). */
:root {
  /* color */
  --color-bg: #080b1a;
  --color-bg-gradient-a: #0d2b4e;
  --color-bg-gradient-b: #1a0f3d;
  --color-surface: rgba(255, 255, 255, 0.06);
  --color-surface-strong: rgba(255, 255, 255, 0.12);
  --color-border: rgba(255, 255, 255, 0.14);
  --color-text: #f4f6ff;
  --color-text-muted: rgba(244, 246, 255, 0.7);
  --color-primary: #6ee7ff;
  --color-accent: #b98bff;
  --color-glow-a: #33e6b0;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 4px 16px rgba(0,0,0,0.3);
  --shadow-md: 0 10px 32px rgba(0,0,0,0.4);
  --shadow-lg: 0 20px 56px rgba(0,0,0,0.5);
  /* blur */
  --blur-backdrop: 20px;
  /* font */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;
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
  /* extra */
  --bg-image: radial-gradient(60% 50% at 15% 10%, var(--color-bg-gradient-a) 0%, transparent 60%),
              radial-gradient(55% 45% at 85% 20%, var(--color-glow-a) 0%, transparent 55%),
              radial-gradient(70% 60% at 50% 100%, var(--color-bg-gradient-b) 0%, var(--color-bg) 70%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Aurora UI — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#080b1a",
        "bg-gradient-a": "#0d2b4e",
        "bg-gradient-b": "#1a0f3d",
        "surface": "rgba(255, 255, 255, 0.06)",
        "surface-strong": "rgba(255, 255, 255, 0.12)",
        "border": "rgba(255, 255, 255, 0.14)",
        "text": "#f4f6ff",
        "text-muted": "rgba(244, 246, 255, 0.7)",
        "primary": "#6ee7ff",
        "accent": "#b98bff",
        "glow-a": "#33e6b0",
      },
      borderRadius: {
        "sm": "10px", "md": "16px", "lg": "22px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 16px rgba(0,0,0,0.3)",
        "md": "0 10px 32px rgba(0,0,0,0.4)",
        "lg": "0 20px 56px rgba(0,0,0,0.5)",
      },
      backdropBlur: {
        "backdrop": "20px",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
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

// Signature `extra` gradient is CSS-only:
//   --bg-image: radial-gradient(...), radial-gradient(...), radial-gradient(...);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill, thin `--color-primary` gradient border on transparent fill; hover fills with a soft `--color-glow-a` → `--color-accent` gradient wash. |
| **Input** | `--color-surface` fill, `--color-border`; focus ring glows with `--color-primary` using a soft outer `--shadow-sm` in primary hue rather than a hard ring. |
| **Card** | `--color-surface-strong`, `--radius-lg`, `--shadow-md`; positioned near an aurora blob so the glow bleeds through the translucent edge. |
| **Nav** | Transparent bar over the aurora background; only gains `--color-surface` + `--blur-backdrop` once scrolled. |
| **Modal** | `--color-surface-strong` panel with `--blur-backdrop`, floating over a darkened aurora scrim so the glow is still faintly visible. |
| **Table** | Flat `--color-bg` body, no glow inside dense data regions — keep the aurora confined to hero/marketing chrome. |
| **Tooltip** | Small `--color-surface-strong` chip, `--radius-sm`, no glow — tooltips must read instantly. |
| **Badge** | Solid tinted pill (`--color-primary`/`--color-accent`/`--color-glow-a` at full opacity for text, not glow). |
| **Toggle** | Track uses a faint gradient echoing the aurora; knob is solid `--color-text` for unambiguous state. |
| **Loading** | Slow-drifting blurred blob animation standing in for a spinner on hero sections; plain shimmer skeleton elsewhere. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- The glow gradients sit behind text at low opacity by design — verify `--color-text` over the busiest part of `--bg-image` still passes contrast with `contrast_check.py`, and add a `--color-bg` floor tint behind any dense text block.
- Animated drifting blobs must respect `prefers-reduced-motion: reduce` — freeze them to a static position.
- Don't rely on hue alone (glow-a vs primary vs accent) to distinguish interactive states; pair with shape/label changes for colorblind users.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the aurora glow confined to 2–3 large, softly overlapping shapes — more reads as noise.
- ✅ Use glass surfaces (`--color-surface`) so the glow visibly transmits through card edges.
- ✅ Reserve full-saturation color for text/icons; keep background glow at low opacity.

## Don't

- ❌ Put the aurora glow directly behind dense body copy or tables.
- ❌ Use more than one accent hue per glow cluster — it turns muddy fast.
- ❌ Forget the reduced-motion fallback if blobs animate.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism, mesh-gradient.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
