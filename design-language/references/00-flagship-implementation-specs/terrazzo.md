# Terrazzo — Implementation Spec

*Aliases:* speckled, confetti texture
*Slug:* `terrazzo` · *Category:* texture · *Era:* Ancient → 2018 revival

**Origin.** Venetian composite flooring; graphic revival ~2018.

**Reference example.** 2018-era brand patterns; interior design.

## Signature move(s)

A repeating speckled-chip background pattern (`--terrazzo-size: 140px 140px`) built from radial dots in `--color-chip-a/b/c/d`, applied at low density to large surfaces and full density to accent zones, over a warm off-white ground. Radii stay soft and organic; the chips do the visual work, so structure stays calm and rounded.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Speckled chip pattern on solid ground
- Playful multicolor flecks
- Soft pastel or bold color chips
- Fresh, tactile, retro-modern

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/terrazzo.css`.)

```css
/* Terrazzo — design tokens (generated from style_catalog.json) */
/* Ancient → 2018 revival | Venetian composite flooring; graphic revival ~2018. */
:root {
  /* color */
  --color-bg: #f7f3ec;
  --color-surface: #ffffff;
  --color-surface-strong: #efe8db;
  --color-border: #e0d6c2;
  --color-text: #221f1a;
  --color-text-muted: #5c564a;
  --color-primary: #e2574c;
  --color-accent: #2f9e8f;
  --color-chip-a: #f2b705;
  --color-chip-b: #7c5cff;
  --color-chip-c: #2f9e8f;
  --color-chip-d: #e2574c;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(34,31,26,0.08);
  --shadow-md: 0 6px 16px rgba(34,31,26,0.10);
  --shadow-lg: 0 16px 36px rgba(34,31,26,0.14);
  /* font */
  --font-sans: 'Poppins', 'Nunito', system-ui, sans-serif;
  --font-display: 'Poppins', 'Fraunces', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
  /* extra */
  --terrazzo-size: 140px 140px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Terrazzo — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f3ec",
        "surface": "#ffffff",
        "surface-strong": "#efe8db",
        "border": "#e0d6c2",
        "text": "#221f1a",
        "text-muted": "#5c564a",
        "primary": "#e2574c",
        "accent": "#2f9e8f",
        "chip-a": "#f2b705",
        "chip-b": "#7c5cff",
        "chip-c": "#2f9e8f",
        "chip-d": "#e2574c",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(34,31,26,0.08)",
        "md": "0 6px 16px rgba(34,31,26,0.10)",
        "lg": "0 16px 36px rgba(34,31,26,0.14)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Poppins'", "'Fraunces'", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
};

// Terrazzo chip pattern is CSS-only (radial-gradient repeat), sized via:
//   --terrazzo-size: 140px 140px;
// e.g. background-image: radial-gradient(circle at 20% 30%, var(--color-chip-a) 6px, transparent 7px), ...;
//      background-size: var(--terrazzo-size);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` or `--radius-lg` shape, solid `--color-primary` fill with a faint chip pattern overlay at ~8% opacity, `--shadow-sm` lift on hover. |
| **Input** | `--color-surface` fill, `--radius-md`, 1.5px `--color-border`; focus ring in `--color-accent`. Plain — the chips stay off form fields for legibility. |
| **Card** | `--color-surface` with a terrazzo chip pattern (`--terrazzo-size`) filling the full background at low opacity, `--radius-lg`, `--shadow-md`. |
| **Nav** | `--color-surface-strong` bar with a thin terrazzo-chip strip along the bottom edge as a decorative divider. |
| **Modal** | `--color-surface`, `--radius-lg`, `--shadow-lg`; header band carries the full-density chip pattern, body stays plain white for reading. |
| **Table** | Flat `--color-surface` rows, no pattern — chips reserved for decorative zones, not data-dense UI. |
| **Tooltip** | Small solid `--color-text` chip with white text, no pattern (keep it instantly legible). |
| **Badge** | `--radius-pill` chip using one of the four `--color-chip-*` values solid, rotating per category/tag. |
| **Toggle** | Track uses a two-chip mini-pattern when off, solid `--color-accent` when on. |
| **Loading** | Chips "sprinkle in" with a staggered fade/scale-up animation, mimicking terrazzo being poured. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Never place body text directly over the full-density chip pattern — keep text on flat `--color-surface` or `--color-bg`, patterns on background/decorative zones only.
- Check `--color-text-muted` (#5c564a) against `--color-bg` (#f7f3ec) with `contrast_check.py`; muted warm greys can drift below AA on warm off-white grounds.
- Ensure chip colors used for status/category badges (`--color-chip-a/b/c/d`) aren't the sole differentiator — pair with a label or icon for colorblind users.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary chip density deliberately: low for large backgrounds, full for accent bands.
- ✅ Keep the base ground warm and neutral so chip colors pop without competing.
- ✅ Use soft, generous radii throughout — terrazzo reads as tactile and rounded, not sharp.

## Don't

- ❌ Don't run the chip pattern behind paragraphs of body text.
- ❌ Don't use more than 4-5 chip colors at once — it turns into confetti noise instead of terrazzo.
- ❌ Don't apply hard, high-contrast drop shadows — this style stays soft and light.

## Don't confuse this with…

*Commonly confused neighbors:* memphis-design, risograph.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
