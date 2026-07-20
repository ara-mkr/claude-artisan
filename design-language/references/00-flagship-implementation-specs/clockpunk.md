# Clockpunk — Implementation Spec

*Aliases:* Renaissance punk, da Vinci punk  
*Slug:* `clockpunk` · *Category:* retrofuturism · *Era:* 2000s–present

**Origin.** Punk genre set in Renaissance-era clockwork tech.

**Reference example.** Assassin's Creed (Leonardo's machines).

## Signature move(s)

A brass-gradient (`--brass-gradient`) gear ring — a dashed circular border in `--color-primary` (`--gear-ring`) — wraps the important surfaces like a cog visible mid-turn, set against warm walnut-and-parchment tones. Every raised panel reads as a hand-machined mechanism: brass edge, wood-toned body, no straight industrial steel.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Clockwork gears, springs, brass automata
- Da Vinci-style sketches and mechanisms
- Renaissance materials: wood, brass
- Analog pre-steam mechanical fantasy

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/clockpunk.css`.)

```css
/* Clockpunk — design tokens (generated from style_catalog.json) */
/* 2000s–present | Punk genre set in Renaissance-era clockwork tech. */
:root {
  /* color */
  --color-bg: #3b2b1a;
  --color-surface: #4f3a24;
  --color-surface-strong: #61472c;
  --color-border: #b08d4f;
  --color-text: #f2e6cc;
  --color-text-muted: #cbb489;
  --color-primary: #b08d4f;
  --color-accent: #7a9e7e;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 6px 16px rgba(0,0,0,0.45);
  --shadow-lg: 0 14px 32px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Cormorant Garamond', Georgia, serif;
  --font-display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif;
  --font-mono: 'Courier Prime', ui-monospace, monospace;
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
  /* extra (signature gradients, composite borders, filters) */
  --brass-gradient: linear-gradient(180deg, #d8b968 0%, #b08d4f 45%, #8a6a35 100%);
  --gear-ring: 3px dashed var(--color-primary);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Clockpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#3b2b1a",
        "surface": "#4f3a24",
        "surface-strong": "#61472c",
        "border": "#b08d4f",
        "text": "#f2e6cc",
        "text-muted": "#cbb489",
        "primary": "#b08d4f",
        "accent": "#7a9e7e",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "md": "0 6px 16px rgba(0,0,0,0.45)",
        "lg": "0 14px 32px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "Georgia", "serif"],
        "display": ["'Cormorant Garamond'", "'Trajan Pro'", "Georgia", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --brass-gradient: linear-gradient(180deg, #d8b968 0%, #b08d4f 45%, #8a6a35 100%);
//   --gear-ring: 3px dashed var(--color-primary);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--brass-gradient` fill, `--radius-sm`, serif display label; hover adds `--gear-ring` as an outer dashed halo suggesting a cog about to turn. |
| **Input** | Warm `--color-surface` field, `--color-border` (brass) outline; focus swaps the outline solid and adds a thin `--gear-ring` accent underneath. |
| **Card** | The hero: `--color-surface` wood-toned body, `--brass-gradient` header bar or corner medallion, `--gear-ring` framing a small "mechanism" detail, `--shadow-md`. |
| **Nav** | Dark walnut bar, brass-gradient logo medallion with a rotating gear-ring accent on the active item. |
| **Modal** | Larger brass-framed panel, `--gear-ring` border, `--shadow-lg`, sketched (hand-drawn-style) divider rules. |
| **Table** | Flat `--color-surface` rows, brass rules between them; header row gets the `--brass-gradient` treatment. |
| **Tooltip** | Small parchment-toned chip, thin brass border, `--shadow-sm`. |
| **Badge** | Circular brass medallion badge with `--gear-ring` edge, not a flat pill. |
| **Toggle** | Brass-gradient track when on, dull `--color-surface-strong` when off; knob styled as a small brass gear. |
| **Loading** | A rotating gear-ring spinner or ticking clock-hand sweep in `--color-primary`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` (aged parchment tan) on `--color-surface`/`--color-surface-strong` needs verification with `contrast_check.py` — Renaissance-era muted palettes can drift below body-text contrast.
- If gear rotation or ticking animation is used, honor `prefers-reduced-motion` with a static gear-ring fallback.
- The `--gear-ring` dashed border is decorative, not a focus indicator — pair focus-visible with a solid, higher-contrast outline distinct from the constant dashed brass ring.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the brass gradient consistently for all metallic accents — no flat gold fills.
- ✅ Frame emphasis elements with the dashed gear-ring rather than a plain border.
- ✅ Keep the palette warm and analog: wood, brass, parchment — no cool grays or plastics.

## Don't

- ❌ Introduce chrome, steel, or steam-pipe imagery — that's steampunk's Victorian-industrial register, not this one.
- ❌ Use crisp sans-serif display type — the serif/Renaissance letterforms are load-bearing for the era.
- ❌ Make surfaces flat and matte with no brass sheen — the metal must catch light.

## Don't confuse this with…

*Commonly confused neighbors:* steampunk.

vs steampunk: steampunk is Victorian-industrial (steam, iron, rivets, coal smoke); clockpunk is Renaissance-era (brass, wood, hand-cranked gears, da Vinci sketches) with no steam or industrial grime.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
