# Japandi — Implementation Spec

*Aliases:* Japanese Scandinavian
*Slug:* `japandi` · *Category:* minimal-organic · *Era:* 2017–present

**Origin.** Hybrid of Japanese wabi-sabi and Scandinavian minimalism.

**Reference example.** Muji-adjacent interiors; premium wellness brands.

## Signature move(s)

Nearly-flat surfaces in warm neutrals (`--color-bg` #f1ece2 through `--color-surface-strong` #e8e0d0) with barely-there radii (`--radius-sm` 2px, `--radius-md` 4px) so nothing looks digitally rounded — corners feel milled, not CSS-rounded. A single `--brush-line` accent (a horizontal rule that's 40% solid, 60% transparent, mimicking an ink brush stroke) marks section starts, and a 3.5%-opacity SVG `--grain` texture sits over flat fills so surfaces read as paper/wood rather than screen-flat vector.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Muted earthy neutrals, natural materials
- Calm, warm, functional restraint
- Handcraft imperfection (wabi-sabi)
- Negative space and balance

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/japandi.css`.)

```css
/* Japandi — design tokens (generated from style_catalog.json) */
/* 2017–present | Hybrid of Japanese wabi-sabi and Scandinavian minimalism. */
:root {
  /* color */
  --color-bg: #f1ece2;
  --color-surface: #faf7f0;
  --color-surface-strong: #e8e0d0;
  --color-border: #d8cdb8;
  --color-text: #2f2a22;
  --color-text-muted: #6b6153;
  --color-primary: #8a6b4a;
  --color-accent: #7c8a6f;
  --color-ink: #3d3527;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(47,42,34,0.08);
  --shadow-md: 0 4px 10px rgba(47,42,34,0.10);
  --shadow-lg: 0 10px 24px rgba(47,42,34,0.12);
  /* font */
  --font-sans: 'Zen Kaku Gothic New', 'Work Sans', system-ui, sans-serif;
  --font-display: 'Shippori Mincho', 'Noto Serif JP', serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature grain + brush-line accent) */
  --grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  --brush-line: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 40%, transparent 40%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Japandi — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f1ece2",
        "surface": "#faf7f0",
        "surface-strong": "#e8e0d0",
        "border": "#d8cdb8",
        "text": "#2f2a22",
        "text-muted": "#6b6153",
        "primary": "#8a6b4a",
        "accent": "#7c8a6f",
        "ink": "#3d3527",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(47,42,34,0.08)",
        "md": "0 4px 10px rgba(47,42,34,0.10)",
        "lg": "0 10px 24px rgba(47,42,34,0.12)",
      },
      fontFamily: {
        "sans": ["'Zen Kaku Gothic New'", "'Work Sans'", "system-ui", "sans-serif"],
        "display": ["'Shippori Mincho'", "'Noto Serif JP'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (paper grain overlay + ink brush-line
// accent). Add as custom properties or arbitrary values:
//   --grain: url("data:image/svg+xml,...");
//   --brush-line: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 40%, transparent 40%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, flat `--color-surface-strong` fill, no shadow at rest; hover adds `--shadow-sm` only — restraint over flourish. Primary variant fills `--color-primary`. |
| **Input** | `--radius-sm`, 1px `--color-border`, no fill change on focus — only the border shifts to `--color-primary`; keep it quiet. |
| **Card** | `--radius-md`, `--shadow-sm`, `--grain` texture layered at low opacity over `--color-surface`, generous `--space-8` padding — negative space (`ma`) is part of the design. |
| **Nav** | Flat bar, no shadow, a single `--brush-line` rule beneath it instead of a hard border. |
| **Modal** | `--radius-lg`, scrim in `--color-ink` at low opacity; keep corner radius minimal so it still feels architectural, not app-like. |
| **Table** | Hairline `--color-border` row dividers only — no zebra striping; let whitespace (`--space-6` row height) do the separating work. |
| **Tooltip** | `--radius-sm` chip in `--color-ink` with `--color-surface` text — small, understated, no shadow needed. |
| **Badge** | `--radius-sm`, flat tint of `--color-accent` (moss green) — never a bright pill. |
| **Toggle** | Track `--radius-pill` is the one exception to sharp corners (mechanical necessity); keep the knob a plain circle in `--color-primary`. |
| **Loading** | A slow single-stroke `--brush-line` sweep rather than a spinner — reinforces the ink-brush motif. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The muted palette runs close together in luminance — verify `--color-text-muted` (#6b6153) against `--color-bg` (#f1ece2) explicitly; it sits near the edge of AA at small sizes.
- The `--grain` texture must stay under ~4% opacity and never sit directly beneath body text at 1x zoom — bump it up and it starts to read as noise/dirt on-screen.
- Keep focus rings solid `--color-primary`, 2px minimum — the restrained palette means a subtle default outline can vanish against `--color-surface`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let whitespace do the separating — favor `--space-8`/`--space-12` gaps over borders or shadows.
- ✅ Use `--font-display` (Shippori Mincho) sparingly, for section titles only, to keep the calm register.
- ✅ Apply `--grain` consistently across all flat surfaces so the "material" feels continuous.

## Don't

- ❌ Add drop shadows beyond `--shadow-sm`/`--shadow-md` — depth here comes from tone, not elevation.
- ❌ Introduce saturated color; the accent green and clay-brown are as bold as this palette gets.
- ❌ Round corners past `--radius-lg` (6px) — anything softer starts reading as generic "friendly SaaS," not Japandi.

## Don't confuse this with…

*Commonly confused neighbors:* scandinavian, zen-wabisabi, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
