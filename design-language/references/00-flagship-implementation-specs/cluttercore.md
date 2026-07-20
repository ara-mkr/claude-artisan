# Cluttercore — Implementation Spec

*Aliases:* more is more decor, maximal cozy  
*Slug:* `cluttercore` · *Category:* niche · *Era:* 2020–present

**Origin.** Cozy maximalist embrace of visible stuff.

**Reference example.** Cluttercore home tours.

## Signature move(s)

The stacked-shelf shadow: instead of a single soft blur, every raised surface casts a literal multi-layer offset shadow (`--shadow-md`, `--shadow-lg`) — three hard-edged copies stepping back at increasing distance — the way a pile of books or trinkets reads as depth on a crowded shelf. Each card borrows a different accent from a mismatched curio palette (terracotta primary, ochre, teal, forest) so a page of cards reads like a cabinet of collected objects, not a single branded set, and small badges tilt (`--ease-sticker-tilt`) like stickers pressed onto a journal.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Densely layered objects, books, trinkets
- Warm eclectic clutter, no empty space
- Personal, lived-in, collected
- Comfort in abundance

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/cluttercore.css`.)

```css
/* Cluttercore — design tokens (generated from style_catalog.json) */
/* 2020–present | Cozy maximalist embrace of visible stuff. */
:root {
  /* color */
  --color-bg: #e8d9c0;
  --color-surface: #fff8ec;
  --color-surface-strong: #f4e8d0;
  --color-border: #2b1d14;
  --color-text: #2b1d14;
  --color-text-muted: #5c4632;
  --color-primary: #b23a48;
  --color-accent: #d99a2b;
  --color-teal: #2f6f6a;
  --color-forest: #4c7a5e;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 2px 2px 0 var(--color-border), 5px 5px 0 rgba(43,29,20,0.15);
  --shadow-md: 3px 3px 0 var(--color-border), 8px 8px 0 rgba(43,29,20,0.15), 12px 12px 0 rgba(43,29,20,0.08);
  --shadow-lg: 4px 4px 0 var(--color-border), 11px 11px 0 rgba(43,29,20,0.16), 18px 18px 0 rgba(43,29,20,0.08);
  /* font */
  --font-sans: 'Nunito', 'Poppins', system-ui, sans-serif;
  --font-display: 'Fraunces', 'DM Serif Display', Georgia, serif;
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
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-sticker-tilt: rotate(-4deg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Cluttercore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8d9c0",
        "surface": "#fff8ec",
        "surface-strong": "#f4e8d0",
        "border": "#2b1d14",
        "text": "#2b1d14",
        "text-muted": "#5c4632",
        "primary": "#b23a48",
        "accent": "#d99a2b",
        "teal": "#2f6f6a",
        "forest": "#4c7a5e",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 2px 0 #2b1d14, 5px 5px 0 rgba(43,29,20,0.15)",
        "md": "3px 3px 0 #2b1d14, 8px 8px 0 rgba(43,29,20,0.15), 12px 12px 0 rgba(43,29,20,0.08)",
        "lg": "4px 4px 0 #2b1d14, 11px 11px 0 rgba(43,29,20,0.16), 18px 18px 0 rgba(43,29,20,0.08)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'DM Serif Display'", "Georgia", "serif"],
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
        "standard": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};

// The sticker-tilt rotation is CSS-only. Add as a custom property or
// arbitrary value:
//   --ease-sticker-tilt: rotate(-4deg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill, `--radius-md`, `--shadow-sm` stacked-shadow at rest, shadow steps out further on hover (swap to `--shadow-md`) like it's being lifted off the pile. |
| **Input** | `--color-surface`, thick `--color-border` outline, `--radius-sm`; focus adds `--color-accent` inset line. |
| **Card** | The hero: `--color-surface`, `--shadow-lg` (three-step stacked shadow), `--radius-lg`, border in `--color-border` — a different accent color (`--color-teal`/`--color-forest`/`--color-accent`) per card for the curio-shelf mix. |
| **Nav** | `--color-surface-strong` bar with `--shadow-sm` beneath it, as if it's a shelf ledge holding the page content. |
| **Modal** | Card recipe at `--shadow-lg`, slight `--ease-sticker-tilt` on open for a "just placed" feel, then settles level. |
| **Table** | Alternating `--color-surface`/`--color-surface-strong` rows, thick `--color-border` outer frame — like a scrapbook table, not a spreadsheet. |
| **Tooltip** | Small tilted sticky-note chip, `--color-accent` fill, `--ease-sticker-tilt`. |
| **Badge** | Rotated pill or blob shape, cycles through `--color-teal`/`--color-forest`/`--color-primary`/`--color-accent` per instance. |
| **Toggle** | Track `--color-surface-strong` with `--color-border` outline, knob in `--color-primary`, small stacked shadow under the knob. |
| **Loading** | Skeleton "objects" of varying sizes stacking in with a bounce (`--ease-standard`), mimicking things being placed on a shelf. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- With this much visual density, keep body text blocks on a calm, single-color `--color-surface` card — never let paragraph text sit directly on the busy `--color-bg` or overlap another card's shadow stack.
- Rotating badges/tooltips (`--ease-sticker-tilt`) must stay under ~5deg and never apply to body copy — small rotated text quickly becomes unreadable for low-vision users.
- The stacked hard-edge shadows are decorative, not a state signal — hover/active/focus must still change color or add an outline, not rely on shadow depth alone (shadow depth is hard for low-vision users to distinguish).

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Vary accent color per card/badge so the page reads as a personal collection, not a template.
- ✅ Keep the stacked-shadow recipe consistent (same offsets, same opacity steps) across every component so the "shelf" material feels unified.
- ✅ Leave a calm reading surface inside every dense card — clutter lives at the edges, not under body text.

## Don't

- ❌ Use a single soft blurred shadow — it undercuts the hard, layered-object read that defines this style.
- ❌ Let every card share the exact same accent color — that's maximalism's uniform loudness, not cluttercore's collected variety.
- ❌ Leave large areas of flat empty space — this style is explicitly anti-minimal.

## Don't confuse this with…

*Commonly confused neighbors:* maximalism, grandmillennial.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
