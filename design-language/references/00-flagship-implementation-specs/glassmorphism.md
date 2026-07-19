# Glassmorphism — Implementation Spec

*Aliases:* glass UI, frosted glass, glass morphism  
*Slug:* `glassmorphism` · *Category:* glass · *Era:* 2020–present

**Origin.** Coined by Michał Malewicz (2020); echoes macOS Big Sur / Windows Acrylic.

**Reference example.** macOS Big Sur Control Center; Windows 11 Acrylic; countless 2020–2022 dashboards.

## Signature move(s)

Frosted translucent panel: `backdrop-filter: blur()` + a 1px light top border + a subtle inner highlight, floating over a vivid gradient. Repeat the exact same glass recipe on every raised surface — the material must feel like one system, not stickers.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Frosted translucent panels via background blur
- Thin light border + subtle inner highlight
- Vivid colorful background shows through
- Layered floating cards with depth

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/glassmorphism.css`.)

```css
/* Glassmorphism — design tokens (generated from style_catalog.json) */
/* 2020–present | Coined by Michał Malewicz (2020); echoes macOS Big Sur / Windows Acrylic. */
:root {
  /* color */
  --color-bg: #0f172a;
  --color-bg-gradient-a: #1e3a8a;
  --color-bg-gradient-b: #7c3aed;
  --color-surface: rgba(255, 255, 255, 0.10);
  --color-surface-strong: rgba(255, 255, 255, 0.18);
  --color-border: rgba(255, 255, 255, 0.22);
  --color-text: #f8fafc;
  --color-text-muted: rgba(248, 250, 252, 0.72);
  --color-primary: #38bdf8;
  --color-accent: #e879f9;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 4px 16px rgba(0,0,0,0.18);
  --shadow-md: 0 8px 32px rgba(0,0,0,0.28);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.36);
  --shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.35);
  /* blur */
  --blur-backdrop: 16px;
  --blur-backdrop-strong: 28px;
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
  --ease-entrance: cubic-bezier(0, 0, 0, 1);
  --ease-exit: cubic-bezier(0.3, 0, 1, 1);
  /* extra (signature gradients, composite borders, filters) */
  --bg-image: radial-gradient(120% 120% at 0% 0%, #1e3a8a 0%, #0f172a 55%, #7c3aed 120%);
  --glass-fill: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
  --glass-border: 1px solid rgba(255,255,255,0.22);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Glassmorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0f172a",
        "bg-gradient-a": "#1e3a8a",
        "bg-gradient-b": "#7c3aed",
        "surface": "rgba(255, 255, 255, 0.10)",
        "surface-strong": "rgba(255, 255, 255, 0.18)",
        "border": "rgba(255, 255, 255, 0.22)",
        "text": "#f8fafc",
        "text-muted": "rgba(248, 250, 252, 0.72)",
        "primary": "#38bdf8",
        "accent": "#e879f9",
      },
      borderRadius: {
        "sm": "10px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 16px rgba(0,0,0,0.18)",
        "md": "0 8px 32px rgba(0,0,0,0.28)",
        "lg": "0 16px 48px rgba(0,0,0,0.36)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.35)",
      },
      backdropBlur: {
        "backdrop": "16px",
        "backdrop-strong": "28px",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(120% 120% at 0% 0%, #1e3a8a 0%, #0f172a 55%, #7c3aed 120%);
//   --glass-fill: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
//   --glass-border: 1px solid rgba(255,255,255,0.22);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill, glass fill, inner highlight; primary = tint the fill with `--color-primary` at ~35% and brighten the border. Lift 1px on hover. |
| **Input** | Slightly darker glass than cards (rgba white ~6%), 1px light border; focus adds a `--color-primary` ring. |
| **Card** | The hero of the style: `--glass-fill`, `blur(16px)`, `--glass-border`, `--shadow-md` + inner-highlight, `--radius-lg`. |
| **Nav** | Pill or bar of stronger glass (blur 20–28px) pinned over content so the blur is visible as you scroll. |
| **Modal** | Strongest blur + a dark scrim behind so text stays legible; card floats above the scrim. |
| **Table** | Keep the table body on a near-solid tint (glass only on the header/toolbar) — rows over blur destroy legibility. |
| **Tooltip** | Small glass chip with blur and border; add a solid fallback since it holds critical text. |
| **Badge** | Tiny glass pill; use tinted fills for status, not just opacity. |
| **Toggle** | Glass track, solid knob; the knob must be opaque so state is unambiguous. |
| **Loading** | Frosted skeleton blocks (light rgba) shimmering, or a blurred translucent overlay with a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Body text over glass fails contrast constantly — put a scrim (`--color-scrim`) or a tint floor behind any text block and verify with `contrast_check.py` (compositing the alpha).
- Provide a solid-surface fallback with `@supports not (backdrop-filter:…)` and `@media (prefers-reduced-transparency: reduce)`.
- Keep focus rings solid and high-contrast — a glowy translucent ring is not a visible focus indicator.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use one vivid, busy background so the blur has something to refract.
- ✅ Layer at most 2 glass levels over an opaque base.
- ✅ Tint glass fills toward the accent for state, not just change opacity.

## Don't

- ❌ Stack glass on glass on glass — it turns to mud.
- ❌ Put long-form body text directly on blur with no scrim.
- ❌ Use it on a flat/plain background where the blur does nothing.

## Don't confuse this with…

*Commonly confused neighbors:* liquid-glass, frutiger-aero, acrylic-fluent.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
