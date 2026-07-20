# Spatial / visionOS — Implementation Spec

*Aliases:* spatial design, visionOS, mixed reality UI
*Slug:* `spatial-visionos` · *Category:* glass · *Era:* 2023–present

**Origin.** Apple visionOS (Vision Pro, 2023–2024).

**Reference example.** Apple Vision Pro visionOS UI.

## Signature move(s)

Panels of heavily-blurred glass (`--blur-backdrop: 24px`, `--blur-backdrop-strong: 40px`) that appear to float in front of a dark, depth-graded scene (`--bg-image`, a radial gradient from indigo through near-black), each with a strong inner-highlight (`--shadow-inset-hi`) along its top edge and an outsized, soft drop shadow (`--shadow-lg`) to sell physical distance from the background. Unlike flat glassmorphism, every panel implies a z-depth — larger blur and shadow the "closer" the panel floats.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Floating glass panels in 3D space
- Depth, parallax, and light-based hierarchy
- Eye/hand-driven interaction affordances
- Translucent materials over the real world

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/spatial-visionos.css`.)

```css
/* Spatial / visionOS — design tokens (generated from style_catalog.json) */
/* 2023–present | Apple visionOS (Vision Pro, 2023–2024). */
:root {
  /* color */
  --color-bg: #05070c;
  --color-bg-gradient-a: #0a1220;
  --color-bg-gradient-b: #141b2e;
  --color-surface: rgba(255, 255, 255, 0.08);
  --color-surface-strong: rgba(255, 255, 255, 0.14);
  --color-border: rgba(255, 255, 255, 0.16);
  --color-text: #f5f7fa;
  --color-text-muted: rgba(245, 247, 250, 0.70);
  --color-primary: #4da3ff;
  --color-accent: #b98cff;
  --color-glow: rgba(77, 163, 255, 0.35);
  /* radius */
  --radius-sm: 14px;
  --radius-md: 22px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 6px 18px rgba(0,0,0,0.35);
  --shadow-md: 0 16px 40px rgba(0,0,0,0.45);
  --shadow-lg: 0 32px 80px rgba(0,0,0,0.55);
  --shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.28);
  /* blur */
  --blur-backdrop: 24px;
  --blur-backdrop-strong: 40px;
  /* font */
  --font-sans: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'SF Pro Display', system-ui, sans-serif;
  --font-mono: 'SF Mono', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  /* extra (depth-graded scene + glass recipe) */
  --bg-image: radial-gradient(90% 70% at 30% 0%, var(--color-bg-gradient-b) 0%, var(--color-bg-gradient-a) 45%, var(--color-bg) 100%);
  --glass-fill: linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
  --glass-border: 1px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Spatial / visionOS — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#05070c",
        "bg-gradient-a": "#0a1220",
        "bg-gradient-b": "#141b2e",
        "surface": "rgba(255, 255, 255, 0.08)",
        "surface-strong": "rgba(255, 255, 255, 0.14)",
        "border": "rgba(255, 255, 255, 0.16)",
        "text": "#f5f7fa",
        "text-muted": "rgba(245, 247, 250, 0.70)",
        "primary": "#4da3ff",
        "accent": "#b98cff",
        "glow": "rgba(77, 163, 255, 0.35)",
      },
      borderRadius: {
        "sm": "14px", "md": "22px", "lg": "32px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 6px 18px rgba(0,0,0,0.35)",
        "md": "0 16px 40px rgba(0,0,0,0.45)",
        "lg": "0 32px 80px rgba(0,0,0,0.55)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.28)",
      },
      backdropBlur: {
        "backdrop": "24px",
        "backdrop-strong": "40px",
      },
      fontFamily: {
        "sans": ["'SF Pro Display'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'SF Pro Display'", "system-ui", "sans-serif"],
        "mono": ["'SF Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.22, 1, 0.36, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
};

// Signature depth-scene/glass tokens are CSS-only (gradients/filters):
//   --bg-image, --glass-fill, --glass-border — see tokens block above.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--glass-fill` + `--glass-border`, `--shadow-inset-hi`; primary tints toward `--color-primary` at ~30% and adds `--color-glow` bleed on hover, simulating gaze-hover in visionOS. |
| **Input** | `--color-surface` (8% white) fill, `--blur-backdrop`, `--glass-border`; focus adds `--color-primary` ring plus `--color-glow`. |
| **Card** | The hero: `--glass-fill`, `--blur-backdrop-strong`, `--glass-border`, `--shadow-lg` + `--shadow-inset-hi`, `--radius-lg` — sized and shadowed to imply it floats closest to the viewer. |
| **Nav** | A pill-shaped floating dock (`--radius-pill`, `--blur-backdrop-strong`) detached from the edges of the viewport, evoking the visionOS home dock. |
| **Modal** | Strongest blur + largest shadow in the system, centered with visible parallax offset from the background scene. |
| **Table** | Keep row backgrounds closer to opaque (`--color-surface-strong`) — full glass tables lose legibility fast in a spatial context. |
| **Tooltip** | Small glass chip, `--blur-backdrop`, `--glass-border`, appears to hover just above its target with a tight `--shadow-sm`. |
| **Badge** | Tiny glass pill tinted with `--color-primary`/`--color-accent` at low opacity. |
| **Toggle** | Glass track with `--shadow-inset-hi`, solid opaque knob (never translucent) so state stays unambiguous at a glance. |
| **Loading** | A soft pulsing glow (`--color-glow`) behind a glass spinner, or frosted skeleton panels shimmering at `--blur-backdrop`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Text on glass over the dark depth-graded scene needs a contrast floor — verify `--color-text` against the *worst-case* composited background (where `--color-surface` sits over the darkest part of `--bg-image`) with `contrast_check.py`.
- Because "depth" is communicated via blur/shadow intensity, also encode hierarchy with size and spacing — blur-only depth cues are lost for users with low vision or `prefers-reduced-transparency`.
- Provide a solid, opaque fallback panel via `@supports not (backdrop-filter:…)` and respect `prefers-reduced-motion` for any parallax/hover-lift animation tied to gaze simulation.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary blur/shadow strength by implied z-depth — closer panels get stronger blur and larger shadows.
- ✅ Keep the background scene (`--bg-image`) singular and dark so floating glass panels have contrast to read against.
- ✅ Make toggles/knobs and other state-bearing controls opaque even when their track is glass.

## Don't

- ❌ Flatten every panel to the same blur/shadow value — that collapses the spatial illusion into plain glassmorphism.
- ❌ Put dense tables or long-form text directly on `--blur-backdrop-strong` glass.
- ❌ Use bright, busy backgrounds — visionOS depth relies on a dark, calm scene as the base layer.

## Don't confuse this with…

*Commonly confused neighbors:* liquid-glass, glassmorphism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
