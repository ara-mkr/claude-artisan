# Fluent Design 2 (Fluent 2) — Implementation Spec

*Aliases:* Fluent, Fluent Design System, Windows 11 design  
*Slug:* `fluent-design-2` · *Category:* flat-platform · *Era:* 2017–present

**Origin.** Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11).

**Reference example.** Windows 11; Microsoft 365; Teams.

## Signature move(s)

Microsoft's system built on five fundamentals (light, depth, motion, material, scale) and four materials (Solid, Mica, Acrylic, Smoke). Mica tints long-lived surfaces with the desktop color; Acrylic frosts transient ones. Subtle depth, rounded corners, reveal highlight.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Five fundamentals: light, depth, motion, material, scale
- Materials: solid, Mica, Acrylic, Smoke
- Mica tints long-lived surfaces with desktop color
- Reveal highlight, subtle depth, rounded corners

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/fluent-design-2.css`.)

```css
/* Fluent Design 2 (Fluent 2) — design tokens (generated from style_catalog.json) */
/* 2017–present | Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11). */
:root {
  /* color */
  --color-bg: #f3f3f3;
  --color-surface: rgba(255,255,255,0.70);
  --color-mica: rgba(243,243,243,0.85);
  --color-acrylic: rgba(252,252,252,0.60);
  --color-text: #1b1b1b;
  --color-text-muted: #616161;
  --color-primary: #0f6cbd;
  --color-accent: #005fb8;
  --color-stroke: rgba(0,0,0,0.10);
  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.14);
  --shadow-md: 0 8px 16px rgba(0,0,0,0.14);
  --shadow-lg: 0 32px 64px rgba(0,0,0,0.19);
  --shadow-card-stroke: inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.10);
  /* blur */
  --blur-acrylic: 30px;
  --blur-acrylic-thin: 60px;
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
  --ease-standard: cubic-bezier(0.33, 0, 0.67, 1);
  --ease-decel: cubic-bezier(0.1, 0.9, 0.2, 1);
  --ease-accel: cubic-bezier(0.7, 0, 1, 0.5);
  /* extra (signature gradients, composite borders, filters) */
  --acrylic-noise: 0.02;
  --reveal-highlight: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Fluent Design 2 (Fluent 2) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3f3f3",
        "surface": "rgba(255,255,255,0.70)",
        "mica": "rgba(243,243,243,0.85)",
        "acrylic": "rgba(252,252,252,0.60)",
        "text": "#1b1b1b",
        "text-muted": "#616161",
        "primary": "#0f6cbd",
        "accent": "#005fb8",
        "stroke": "rgba(0,0,0,0.10)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(0,0,0,0.14)",
        "md": "0 8px 16px rgba(0,0,0,0.14)",
        "lg": "0 32px 64px rgba(0,0,0,0.19)",
        "card-stroke": "inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.10)",
      },
      backdropBlur: {
        "acrylic": "30px",
        "acrylic-thin": "60px",
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
        "standard": "cubic-bezier(0.33, 0, 0.67, 1)",
        "decel": "cubic-bezier(0.1, 0.9, 0.2, 1)",
        "accel": "cubic-bezier(0.7, 0, 1, 0.5)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --acrylic-noise: 0.02;
//   --reveal-highlight: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Standard/accent/subtle styles; 4px radius; subtle top-light stroke; gentle hover elevation. |
| **Input** | TextBox with a bottom accent line on focus and a subtle inner stroke. |
| **Card** | Layer/Card on Mica base with the card-stroke inset border; modest elevation. |
| **Nav** | NavigationView (rail/pane) on Mica; selected item has an accent pill indicator. |
| **Modal** | ContentDialog with Smoke scrim; Acrylic flyouts for menus. |
| **Table** | DataGrid with subtle row hover and a Mica header. |
| **Tooltip** | Small Acrylic or solid tip with subtle shadow. |
| **Badge** | InfoBadge (dot/icon/number) on nav items. |
| **Toggle** | ToggleSwitch with accent 'on' track and a sliding knob. |
| **Loading** | ProgressRing / ProgressBar in the accent color. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Acrylic/Mica are mode-aware but still need contrast checks for text over them — verify both light and dark.
- Provide the fallback to Solid material when transparency is disabled.
- Keep the reveal-highlight subtle; never make it the only focus cue.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use Mica for base/long-lived surfaces, Acrylic for transient flyouts.
- ✅ Honor the accent color the OS/user picks.
- ✅ Keep corners and depth restrained and consistent.

## Don't

- ❌ Over-blur everything — Windows 11 uses Mica (opaque) for most surfaces.
- ❌ Confuse Acrylic (transient) with base surfaces.
- ❌ Ignore light/dark mode adaptation.

## Don't confuse this with…

*Commonly confused neighbors:* material-design-3, acrylic-fluent.

vs glassmorphism: Fluent's Acrylic adds noise texture and is a *system material* for transient surfaces; most Fluent surfaces are actually opaque Mica, not glass.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
