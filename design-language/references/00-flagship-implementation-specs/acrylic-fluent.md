# Acrylic (Fluent Material) — Implementation Spec

*Aliases:* Fluent acrylic, Windows 11 acrylic  
*Slug:* `acrylic-fluent` · *Category:* glass · *Era:* 2017–present

**Origin.** Microsoft Fluent Design System.

**Reference example.** Windows 11 flyouts, command bars, context menus.

## Signature move(s)

A neutral, mode-aware acrylic tint (`--acrylic-tint`) layered over a heavy blur (`--blur-backdrop: 30px`, up to `--blur-backdrop-strong: 40px`) plus a fine repeating-conic noise texture (`--acrylic-noise`) that keeps the material from looking like plain frosted glass — it should read matte and slightly chalky, not glossy. Acrylic is reserved for *transient, light-dismiss* surfaces (menus, flyouts, command bars) that sit as a base layer beneath opaque, fully-legible controls.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Translucency + blur + subtle noise texture
- Light-dismiss transient surfaces (menus, flyouts)
- Mode-aware (light/dark)
- Sits beneath interactive UI as a base layer

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/acrylic-fluent.css`.)

```css
/* Acrylic (Fluent Material) — design tokens (generated from style_catalog.json) */
/* 2017–present | Microsoft Fluent Design System. */
:root {
  /* color */
  --color-bg: #f3f3f3;
  --color-surface: rgba(255, 255, 255, 0.65);
  --color-surface-strong: rgba(255, 255, 255, 0.85);
  --color-border: rgba(0, 0, 0, 0.08);
  --color-text: #1b1b1b;
  --color-text-muted: #5c5c5c;
  --color-primary: #0067c0;
  --color-accent: #744da9;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.14);
  /* blur */
  --blur-backdrop: 30px;
  --blur-backdrop-strong: 40px;
  /* font */
  --font-sans: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif;
  --font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif;
  --font-mono: 'Cascadia Code', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.8, 0, 0.2, 1);
  --ease-entrance: cubic-bezier(0.1, 0.9, 0.2, 1);
  --ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
  /* extra (signature gradients, composite borders, filters) */
  --acrylic-tint: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45));
  --acrylic-noise: repeating-conic-gradient(rgba(0,0,0,0.015) 0% 0.5%, transparent 0% 1%);
  --acrylic-border: 1px solid rgba(255,255,255,0.5);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Acrylic (Fluent Material) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3f3f3",
        "surface": "rgba(255, 255, 255, 0.65)",
        "surface-strong": "rgba(255, 255, 255, 0.85)",
        "border": "rgba(0, 0, 0, 0.08)",
        "text": "#1b1b1b",
        "text-muted": "#5c5c5c",
        "primary": "#0067c0",
        "accent": "#744da9",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.08)",
        "md": "0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
        "lg": "0 12px 32px rgba(0,0,0,0.14)",
      },
      backdropBlur: {
        "backdrop": "30px",
        "backdrop-strong": "40px",
      },
      fontFamily: {
        "sans": ["'Segoe UI Variable'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI Variable Display'", "'Segoe UI'", "sans-serif"],
        "mono": ["'Cascadia Code'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.8, 0, 0.2, 1)",
        "entrance": "cubic-bezier(0.1, 0.9, 0.2, 1)",
        "exit": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --acrylic-tint: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45));
//   --acrylic-noise: repeating-conic-gradient(rgba(0,0,0,0.015) 0% 0.5%, transparent 0% 1%);
//   --acrylic-border: 1px solid rgba(255,255,255,0.5);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Solid `--color-surface-strong` fill (buttons live *on* acrylic, not made *of* it) with `--shadow-sm`; only ghost/menu-item buttons pick up the acrylic material directly. |
| **Input** | Solid opaque `--color-surface-strong` field so typed text stays crisp — acrylic never sits behind editable text. |
| **Card** | Reserved for flyout/panel containers, not persistent content cards: `--acrylic-tint` + `--acrylic-noise` + `blur(30px)`, `--acrylic-border`, `--radius-lg`. |
| **Nav** | Command bar: acrylic base layer with fully opaque icon/label chips floating above it. |
| **Modal** | Light-dismiss flyout/context menu: `blur(40px)` strong acrylic, dismisses on outside click/tap, entrance uses `--ease-entrance`, exit uses `--ease-exit`. |
| **Table** | Never acrylic — tables are dense, persistent data and need a fully opaque surface. |
| **Tooltip** | Small acrylic chip is acceptable since text is short-lived and non-interactive. |
| **Badge** | Solid fill, not acrylic — badges must stay legible at a glance. |
| **Toggle** | Solid track and knob; acrylic is a *background* material, never applied to small binary controls. |
| **Loading** | A subtle acrylic shimmer sweep across a skeleton flyout while content loads. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never place editable or long-form text directly on the acrylic layer — always promote it to `--color-surface-strong` (near-opaque) first, then verify with `contrast_check.py`.
- Respect `prefers-reduced-transparency`: fall back acrylic surfaces to a flat, opaque `--color-surface-strong` fill with no blur or noise.
- Light-dismiss surfaces must remain keyboard-dismissible (Escape) and trap focus appropriately — the visual "lightness" of the material shouldn't imply lighter interaction requirements.
- The noise texture is decorative only; keep its opacity low enough (`~0.015`) that it never competes with text antialiasing.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve acrylic for transient, light-dismiss chrome (menus, flyouts, command bars).
- ✅ Layer the noise texture at very low opacity — it should read as "matte," never as visible static.
- ✅ Keep all text and interactive controls on a solid surface layered above the acrylic base.

## Don't

- ❌ Use acrylic as a persistent card material for primary content — that's glassmorphism's job, not Fluent's.
- ❌ Skip the noise texture and call a plain blurred tint "acrylic" — the matte grain is what differentiates it.
- ❌ Put body text or form fields directly on the acrylic layer.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism, liquid-glass.

vs glassmorphism: glassmorphism sits over a vivid, colorful background and is meant to be seen decoratively on persistent cards; Acrylic sits on a neutral, mode-aware base (`#f3f3f3` light / dark equivalent), always carries a noise texture, and is scoped specifically to transient light-dismiss chrome. vs Liquid Glass: Liquid Glass is a dynamic, refractive, spring-animated material; Acrylic is static, matte, and noise-textured — it never bends or highlights the content behind it.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
