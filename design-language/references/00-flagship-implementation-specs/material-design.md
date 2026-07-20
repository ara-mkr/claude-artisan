# Material Design (M2) — Implementation Spec

*Aliases:* Material, Material 2
*Slug:* `material-design` · *Category:* flat-platform · *Era:* 2014–2021

**Origin.** Google, introduced 2014.

**Reference example.** Android; Google apps (2014–2021).

## Signature move(s)

The "paper and ink" metaphor: flat colored sheets of virtual paper that stack at discrete integer elevations, each level rendered with a matched umbra/penumbra/ambient shadow triplet (`--shadow-sm/md/lg`) rather than one soft blur. Touch feedback is a literal ripple — a circular `radial-gradient` (`--ease-ripple`) that expands from the tap point and fades — and a Floating Action Button pops one elevation level above everything else with `--shadow-fab`.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Material metaphor: paper and ink with real elevation
- Consistent shadow/elevation system
- Bold color, meaningful motion, grid-based
- Floating action button, ripple feedback

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/material-design.css`.)

```css
/* Material Design (M2) — design tokens (generated from style_catalog.json) */
/* 2014–2021 | Google, introduced 2014. */
:root {
  /* color */
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-surface-strong: #eeeeee;
  --color-border: #e0e0e0;
  --color-text: #212121;
  --color-text-muted: #616161;
  --color-primary: #6200ee;
  --color-accent: #03dac6;
  --color-primary-variant: #3700b3;
  --color-error: #b00020;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.20), 0 1px 1px rgba(0,0,0,0.14);
  --shadow-md: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  --shadow-lg: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  --shadow-fab: 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.20);
  /* font */
  --font-sans: 'Roboto', 'Segoe UI', system-ui, sans-serif;
  --font-display: 'Roboto', system-ui, sans-serif;
  --font-mono: 'Roboto Mono', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-entrance: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-ripple: radial-gradient(circle, rgba(255,255,255,0.35) 10%, transparent 10.5%);
  --ease-elevation-1dp: 0 2px 1px -1px rgba(0,0,0,0.20), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Material Design (M2) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fafafa",
        "surface": "#ffffff",
        "surface-strong": "#eeeeee",
        "border": "#e0e0e0",
        "text": "#212121",
        "text-muted": "#616161",
        "primary": "#6200ee",
        "accent": "#03dac6",
        "primary-variant": "#3700b3",
        "error": "#b00020",
      },
      borderRadius: {
        "sm": "4px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.20), 0 1px 1px rgba(0,0,0,0.14)",
        "md": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        "lg": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        "fab": "0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.20)",
      },
      fontFamily: {
        "sans": ["'Roboto'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Roboto'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.4, 0.0, 0.2, 1)",
        "entrance": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0.0, 1, 1)",
        "ripple": "radial-gradient(circle, rgba(255,255,255,0.35) 10%, transparent 10.5%)",
        "elevation-1dp": "0 2px 1px -1px rgba(0,0,0,0.20), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ease-ripple / --ease-elevation-1dp are already expressed above as
//   transitionTimingFunction entries because the source catalog nests them
//   under "ease" — treat them as raw CSS values, not real easing curves.
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Contained button: flat `--color-primary` fill, `--radius-sm`, `--shadow-sm` at rest, rising to `--shadow-md` on hover/press with a ripple emanating from the click point. Text button: no shadow, no fill, just `--color-primary` text + ripple. |
| **Input** | Filled or outlined text field with a bottom indicator line that thickens and colors `--color-primary` on focus; label floats up from placeholder position. |
| **Card** | White `--color-surface` sheet, `--radius-md`, `--shadow-sm` at rest; hover lifts to `--shadow-md` — the elevation change *is* the affordance. |
| **Nav** | Bottom navigation bar or top app bar in `--color-primary`, `--shadow-sm` separating it from content; active destination gets an ink-colored icon + label. |
| **Modal** | Dialog sheet at `--shadow-lg` (highest elevation short of FAB) centered over a scrim; corners `--radius-md`. |
| **Table** | Data table on `--color-surface` with `--color-border` row dividers, no shadow — flat within its own elevation plane. |
| **Tooltip** | Small dark `--color-text` chip with `--shadow-sm`, appears/disappears with `--ease-entrance`/`--ease-exit`. |
| **Badge** | Small circular `--color-error` or `--color-accent` dot/numeral pinned to the corner of an icon, no shadow. |
| **Toggle** | Switch track in `--color-surface-strong` (off) / `--color-primary` (on) with a circular knob that carries its own tiny `--shadow-sm`. |
| **Loading** | Circular or linear progress indicator in `--color-primary`, indeterminate sweep using `--ease-standard`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The bright `--color-primary` (#6200ee) and `--color-accent` (#03dac6) were tuned for brand recognition, not always for text contrast — verify white-on-primary and dark-on-accent pairs with `contrast_check.py` before using them as text/background combinations.
- Ripple and elevation-lift are the primary affordance cues; ensure focus-visible also gets a persistent, non-animated outline so keyboard users aren't relying on a transient ripple that never fires for them.
- Respect `prefers-reduced-motion` for the ripple and elevation-lift transitions — swap to an instant color/shadow change rather than disabling the state cue entirely.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Treat elevation as a discrete integer scale (`--shadow-sm/md/lg/fab`) — never invent an arbitrary blur between them.
- ✅ Trigger the ripple from the actual pointer/touch coordinate, not the element's center.
- ✅ Reserve the FAB and its `--shadow-fab` for the single most important action on a screen.

## Don't

- ❌ Mix soft ambient-only shadows in with the umbra/penumbra/ambient triplet — it breaks the "real light source" logic.
- ❌ Use more than one FAB per screen.
- ❌ Let a card's elevation change happen instantly — always animate it with `--ease-standard`.

## Don't confuse this with…

*Commonly confused neighbors:* material-design-3, flat-2.

vs material-design-3: M3 replaces literal paper/elevation shadows with tonal-color elevation (surfaces get *lighter*, not just shadowed) and dynamic color; M2 is the original shadow-driven, purple-and-teal Android look. vs flat-2: flat-2 keeps Material's flatness but drops the elevation/shadow and ripple system entirely.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
