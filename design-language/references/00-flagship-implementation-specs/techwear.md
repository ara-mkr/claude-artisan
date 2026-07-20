# Techwear — Implementation Spec

*Aliases:* cyber-utility, dark ninja  
*Slug:* `techwear` · *Category:* niche · *Era:* 2014–present

**Origin.** Functional futuristic urban apparel subculture.

**Reference example.** Acronym; techwear communities.

## Signature move(s)

The strap-and-buckle notch: surfaces are near-black matte panels (`--color-bg`/`--color-surface`) with a diagonally clipped corner (`--buckle-notch`) as if a webbing strap were cinched across it, edged with a dashed `--stitch-line` in `--color-strap` grey. A single acid-lime (`--color-primary`) glows sparingly as a functional status LED — never decorative — with a hot-orange (`--color-accent`) reserved for alerts. Everything else stays matte, tight-radius, and utilitarian.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- All-black technical fabrics, straps, buckles
- Cyberpunk-utility silhouette
- Matte, tactical, waterproof
- Urban-ninja futurism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/techwear.css`.)

```css
/* Techwear — design tokens (generated from style_catalog.json) */
/* 2014–present | Functional futuristic urban apparel subculture. */
:root {
  /* color */
  --color-bg: #0b0c0d;
  --color-surface: #17181a;
  --color-surface-strong: #212325;
  --color-border: #35383b;
  --color-text: #eceeef;
  --color-text-muted: #9aa0a4;
  --color-primary: #c8ff3d;
  --color-accent: #ff5b2e;
  --color-strap: #55595c;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.55);
  --shadow-lg: 0 12px 28px rgba(0,0,0,0.6);
  /* font */
  --font-sans: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif;
  --font-display: 'Eurostile', 'Oswald', 'Inter', sans-serif;
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
  --ease-standard: cubic-bezier(0.3, 0, 0.15, 1);
  /* extra (signature gradients, composite borders, filters) */
  --stitch-line: repeating-linear-gradient(90deg, var(--color-strap) 0 6px, transparent 6px 11px);
  --buckle-notch: linear-gradient(135deg, transparent 8px, var(--color-border) 8px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Techwear — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0c0d",
        "surface": "#17181a",
        "surface-strong": "#212325",
        "border": "#35383b",
        "text": "#eceeef",
        "text-muted": "#9aa0a4",
        "primary": "#c8ff3d",
        "accent": "#ff5b2e",
        "strap": "#55595c",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.5)",
        "md": "0 4px 10px rgba(0,0,0,0.55)",
        "lg": "0 12px 28px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Neue Haas Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Oswald'", "'Inter'", "sans-serif"],
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
        "standard": "cubic-bezier(0.3, 0, 0.15, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (repeating gradients / clipped
// corner). Add as custom properties or arbitrary values:
//   --stitch-line: repeating-linear-gradient(90deg, var(--color-strap) 0 6px, transparent 6px 11px);
//   --buckle-notch: linear-gradient(135deg, transparent 8px, var(--color-border) 8px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-surface-strong` fill, `--radius-sm`, one corner clipped via `--buckle-notch`; primary = `--color-primary` fill with dark text, glowing `--shadow-sm` on hover. |
| **Input** | `--color-surface`, 1px `--color-border`, bottom edge only in `--color-strap` — mimics a zip track; focus = `--color-primary` outline. |
| **Card** | `--color-surface`, `--buckle-notch` corner, `--stitch-line` along one edge, `--shadow-md`, `--radius-md`. |
| **Nav** | Near-black bar, bottom `--stitch-line`, active item underlined in `--color-primary` like an armband LED. |
| **Modal** | Card recipe scaled up, `--shadow-lg`, scrim in `--color-bg` at 85% opacity. |
| **Table** | `--color-surface` rows separated by `--color-border` hairlines, header row `--color-surface-strong` uppercase condensed. |
| **Tooltip** | Small `--color-surface-strong` chip, `--radius-sm`, `--color-primary` 1px edge — like a HUD callout. |
| **Badge** | Clipped-corner rectangle, `--color-accent` for alert states, `--color-primary` for active/online. |
| **Toggle** | `--color-surface-strong` track, `--color-primary` knob glow when on — reads as a powered indicator. |
| **Loading** | A thin `--color-primary` scan-line sweeping across a `--color-surface` skeleton block. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` (#9aa0a4) on `--color-bg` (#0b0c0d) must be checked with `contrast_check.py` — dark-on-dark utilitarian palettes drift below AA easily.
- The acid-lime `--color-primary` glow is a strong photosensitivity trigger if animated as a pulse — keep any "LED pulse" motion subtle and gate it behind `prefers-reduced-motion`.
- Don't rely on the clipped `--buckle-notch` corner alone to convey interactivity or state — it's a material cue, not a semantic one; pair with color/icon.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the palette almost entirely black/grey and spend the lime accent only on the truly active/primary element.
- ✅ Use the clipped-corner + stitch-line combo consistently so panels read as one garment system.
- ✅ Keep type condensed and uppercase for labels, regular case for body copy.

## Don't

- ❌ Round corners generously — softness kills the tactical read; stay at `--radius-sm`/`--radius-md`.
- ❌ Use more than two accent colors at once (lime + orange max, and rarely both).
- ❌ Add glossy highlights or glass blur — the material is matte technical fabric, not glass.

## Don't confuse this with…

*Commonly confused neighbors:* cyberpunk, gorpcore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
