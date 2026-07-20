# Flat 2.0 / Semi-flat — Implementation Spec

*Aliases:* almost flat, flat design 2.0, semi-flat
*Slug:* `flat-2` · *Category:* morphism · *Era:* 2015–present

**Origin.** Google Material (2014) and industry reaction to pure flat's usability problems.

**Reference example.** Google Material Design; most modern SaaS dashboards.

## Signature move(s)

Restore just enough elevation to make hit targets legible again: a flat, saturated color foundation gets layered "paper" cards that lift on a soft multi-stop shadow (`--radius-sm/md/lg` here are actually layered box-shadow stacks, not corner radii) — no bevels, no gradients on the surface itself, just stacked ambient + directional shadow to imply z-order.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Flat foundation with subtle shadows and depth cues restored
- Long/ghost shadows, subtle gradients
- Clear affordances without skeuomorphic texture
- Layered card surfaces

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/flat-2.css`.)

```css
/* Flat 2.0 / Semi-flat — design tokens (generated from style_catalog.json) */
/* 2015–present | Google Material (2014) and industry reaction to pure flat's usability problems. */
:root {
  /* color */
  --color-bg: #eef1f6;
  --color-surface: #ffffff;
  --color-surface-strong: #f4f6fa;
  --color-border: #dbe1ea;
  --color-text: #1c2430;
  --color-text-muted: #5a6472;
  --color-primary: #3f6df0;
  --color-accent: #ff7a45;
  /* elevation (layered shadow stacks used as "radius" tier tokens) */
  --elevation-sm: 0 1px 2px rgba(28,36,48,0.06), 0 4px 8px rgba(28,36,48,0.06);
  --elevation-md: 0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10);
  --elevation-lg: 0 4px 8px rgba(28,36,48,0.08), 0 24px 48px rgba(28,36,48,0.14);
  --radius-pill: 999px;
  --radius-card: 8px;
  /* font */
  --font-sans: 'Roboto', 'Google Sans', system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-entrance: cubic-bezier(0, 0, 0.2, 1);
  --lift-hover: translateY(-2px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Flat 2.0 / Semi-flat — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1f6",
        "surface": "#ffffff",
        "surface-strong": "#f4f6fa",
        "border": "#dbe1ea",
        "text": "#1c2430",
        "text-muted": "#5a6472",
        "primary": "#3f6df0",
        "accent": "#ff7a45",
      },
      borderRadius: {
        "card": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(28,36,48,0.06), 0 4px 8px rgba(28,36,48,0.06)",
        "md": "0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10)",
        "lg": "0 4px 8px rgba(28,36,48,0.08), 0 24px 48px rgba(28,36,48,0.14)",
      },
      fontFamily: {
        "sans": ["'Roboto'", "'Google Sans'", "system-ui", "sans-serif"],
        "display": ["'Roboto'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
        "entrance": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Solid `--color-primary` fill, `--radius-card`, `--elevation-sm` at rest; hover applies `--lift-hover` and steps up to `--elevation-md`. No gradient. |
| **Input** | Flat `--color-surface` fill with a 1px `--color-border` line, no shadow at rest; focus adds `--elevation-sm` plus a 2px primary outline. |
| **Card** | The hero: `--color-surface`, `--radius-card`, `--elevation-md` at rest, `--elevation-lg` + `--lift-hover` on hover for clickable cards. |
| **Nav** | Flat bar on `--color-surface` with `--elevation-sm` separating it from page content below. |
| **Modal** | `--color-surface` panel, `--elevation-lg`, centered with a flat semi-opaque scrim (no blur). |
| **Table** | Flat rows, zebra via `--color-surface-strong`; header row gets a 1px `--color-border` rule, not a shadow. |
| **Tooltip** | Small dark chip, `--elevation-sm`, no border — shadow alone implies it floats above content. |
| **Badge** | Flat pill fill (`--radius-pill`), no shadow — badges stay visually "on" the surface, not above it. |
| **Toggle** | Flat track, `--color-surface` knob lifted with `--elevation-sm` so it visibly floats over the track. |
| **Loading** | Flat skeleton blocks in `--color-surface-strong` with a shimmer sweep; no shadow while loading. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Shadow-only depth cues can be invisible to low-vision users — always pair elevation changes with a visible border or fill change, never shadow alone.
- Keep `--color-text` on `--color-surface` (not `--color-bg`) for body copy; verify with `contrast_check.py`.
- Respect `prefers-reduced-motion` for the `--lift-hover` translate — swap to an opacity/shadow-only transition.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use shadow tiers consistently to encode z-order (sm = resting, md = card, lg = modal).
- ✅ Keep corner radius modest and uniform (`--radius-card`) so the flat foundation still reads as one system.
- ✅ Reserve `--color-accent` for one clear call-to-action per view.

## Don't

- ❌ Add gradients or bevels to surfaces — that's skeuomorphism, not this.
- ❌ Stack more than 3 elevation tiers in a single view.
- ❌ Rely on shadow alone to signal a clickable element — add a hover fill or lift too.

## Don't confuse this with…

*Commonly confused neighbors:* flat-design, material-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
