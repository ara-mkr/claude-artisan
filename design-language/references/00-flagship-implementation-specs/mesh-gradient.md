# Mesh Gradient — Implementation Spec

*Aliases:* gradient mesh, fluid gradient
*Slug:* `mesh-gradient` · *Category:* morphism · *Era:* 2021–present

**Origin.** Popularized by design tools (Mesh Gradient generators, Figma plugins).

**Reference example.** Stripe backgrounds; Apple event key art.

## Signature move(s)

A four-plus-point color mesh (`--color-mesh-a/b/c/d`) blended into one smooth, cloud-like field that fills hero backgrounds — no visible hard stops, no radial-only symmetry. Layer UI surfaces as low-opacity glass on top so the mesh keeps moving/reading through, and optionally animate the mesh points slowly for a living-background effect.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Multi-point smooth gradients that blend many hues
- Organic, cloud-like color transitions
- Used as hero backgrounds
- Often animated/shifting

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/mesh-gradient.css`.)

```css
/* Mesh Gradient — design tokens (generated from style_catalog.json) */
/* 2021–present | Popularized by design tools (Mesh Gradient generators, Figma plugins). */
:root {
  /* color */
  --color-bg: #0b0b16;
  --color-surface: rgba(255, 255, 255, 0.06);
  --color-surface-strong: rgba(255, 255, 255, 0.11);
  --color-border: rgba(255, 255, 255, 0.14);
  --color-text: #f5f4fb;
  --color-text-muted: rgba(245, 244, 251, 0.70);
  --color-primary: #7c6bff;
  --color-accent: #ff8fd6;
  --color-mesh-a: #4f46e5;
  --color-mesh-b: #06b6d4;
  --color-mesh-c: #f472b6;
  --color-mesh-d: #fbbf24;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 26px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 4px 14px rgba(0,0,0,0.30);
  --shadow-md: 0 10px 30px rgba(0,0,0,0.36);
  --shadow-lg: 0 22px 56px rgba(0,0,0,0.42);
  /* font */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Cabinet Grotesk', 'Inter', sans-serif;
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
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  /* extra */
  --bg-image: radial-gradient(45% 40% at 10% 15%, var(--color-mesh-a) 0%, transparent 65%),
              radial-gradient(50% 40% at 85% 10%, var(--color-mesh-b) 0%, transparent 65%),
              radial-gradient(50% 45% at 90% 85%, var(--color-mesh-c) 0%, transparent 65%),
              radial-gradient(45% 40% at 15% 90%, var(--color-mesh-d) 0%, transparent 65%),
              var(--color-bg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Mesh Gradient — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0b16",
        "surface": "rgba(255, 255, 255, 0.06)",
        "surface-strong": "rgba(255, 255, 255, 0.11)",
        "border": "rgba(255, 255, 255, 0.14)",
        "text": "#f5f4fb",
        "text-muted": "rgba(245, 244, 251, 0.70)",
        "primary": "#7c6bff",
        "accent": "#ff8fd6",
        "mesh-a": "#4f46e5",
        "mesh-b": "#06b6d4",
        "mesh-c": "#f472b6",
        "mesh-d": "#fbbf24",
      },
      borderRadius: {
        "sm": "10px", "md": "16px", "lg": "26px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 14px rgba(0,0,0,0.30)",
        "md": "0 10px 30px rgba(0,0,0,0.36)",
        "lg": "0 22px 56px rgba(0,0,0,0.42)",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Cabinet Grotesk'", "'Inter'", "sans-serif"],
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
        "entrance": "cubic-bezier(0, 0, 0, 1)",
      },
    },
  },
};

// Mesh background is CSS-only, layered radial-gradients:
//   --bg-image: radial-gradient(...), radial-gradient(...), radial-gradient(...), radial-gradient(...), var(--color-bg);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Solid `--color-primary`→`--color-accent` gradient fill, `--radius-pill`; hover shifts the gradient angle slightly for a "liquid" feel. |
| **Input** | `--color-surface` fill, `--color-border`; focus ring uses `--color-mesh-b` for contrast against the warm mesh. |
| **Card** | `--color-surface-strong`, `--radius-lg`, `--shadow-md`, positioned over the mesh so 1–2 mesh hues visibly bleed through the translucent edge. |
| **Nav** | Transparent over the mesh at top of page; solidifies to `--color-surface` + `--shadow-sm` on scroll. |
| **Modal** | `--color-surface-strong` panel, `--shadow-lg`, over a dimmed/desaturated version of the mesh so focus stays on content. |
| **Table** | Flat `--color-bg`, mesh excluded entirely from dense data views. |
| **Tooltip** | Solid `--color-surface-strong` chip, no gradient — must resolve instantly. |
| **Badge** | Small solid-color pill sampling one mesh hue at full saturation for status meaning. |
| **Toggle** | Track samples two mesh hues as a mini gradient; knob stays solid `--color-text` for clarity. |
| **Loading** | The mesh itself slowly animates its gradient positions as the loading state — no separate spinner needed on hero sections. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Mesh hues shift wildly across the canvas — text placed anywhere on it needs a `contrast_check.py` pass at the specific coordinates it sits over, not just an average; add a `--color-surface-strong` floor behind text blocks.
- If the mesh animates, gate it behind `prefers-reduced-motion: reduce` and freeze to a single frame.
- Keep primary CTAs off the busiest mesh intersections (where 2+ hues overlap) — place them over calmer single-hue regions or on a card.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use 4 mesh points minimum to avoid a plain two-color gradient look.
- ✅ Keep foreground UI on translucent-but-legible surfaces, not raw mesh.
- ✅ Slow any animation to 20s+ per cycle — fast mesh motion reads as glitchy, not fluid.

## Don't

- ❌ Use fewer than 3 mesh colors — it collapses into an ordinary gradient.
- ❌ Place body text directly on unmodified mesh.
- ❌ Animate mesh and aurora glow effects together in the same view — pick one moving background system.

## Don't confuse this with…

*Commonly confused neighbors:* aurora-ui, holographic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
