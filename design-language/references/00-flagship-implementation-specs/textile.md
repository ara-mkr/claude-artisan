# Textile / Knit / Embroidery — Implementation Spec

*Aliases:* knit, embroidered, stitched
*Slug:* `textile` · *Category:* texture · *Era:* Craft heritage

**Origin.** Simulated fabric/stitch textures.

**Reference example.** Apparel brands; cozy holiday campaigns.

## Signature move(s)

Edges are sewn, not drawn: borders repeat as a `--stitch-dash` dashed thread line or a `--stitch-border` repeating hairline pattern in `--color-thread`, and any flat fill gets a faint `--weave-fill` diagonal cross-hatch (two interleaved 45°/-45° repeating gradients in primary/accent at ~5% opacity) that reads as a woven weft rather than a printed pattern.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Woven, knitted, or embroidered textures
- Visible thread and stitch detail
- Warm tactile materiality
- Cozy, crafted

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/textile.css`.)

```css
/* Textile / Knit / Embroidery — design tokens (generated from style_catalog.json) */
/* Craft heritage | Simulated fabric/stitch textures. */
:root {
  /* color */
  --color-bg: #efe6d8;
  --color-surface: #f7f1e6;
  --color-surface-strong: #ece0cd;
  --color-border: #c9b28c;
  --color-text: #3a2a20;
  --color-text-muted: #6b5744;
  --color-primary: #b5502f;
  --color-accent: #4a6b4d;
  --color-thread: #d9c299;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(58,42,32,0.12);
  --shadow-md: 0 4px 12px rgba(58,42,32,0.16);
  --shadow-lg: 0 10px 28px rgba(58,42,32,0.20);
  /* font */
  --font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
  --font-display: 'Fraunces', 'Georgia', serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --stitch-border: repeating-linear-gradient(90deg, var(--color-thread) 0 8px, transparent 8px 16px);
  --weave-fill: repeating-linear-gradient(45deg, rgba(181,80,47,0.05) 0 6px, rgba(74,107,77,0.05) 6px 12px);
  --stitch-dash: 2px dashed var(--color-thread);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Textile / Knit / Embroidery — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe6d8",
        "surface": "#f7f1e6",
        "surface-strong": "#ece0cd",
        "border": "#c9b28c",
        "text": "#3a2a20",
        "text-muted": "#6b5744",
        "primary": "#b5502f",
        "accent": "#4a6b4d",
        "thread": "#d9c299",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(58,42,32,0.12)",
        "md": "0 4px 12px rgba(58,42,32,0.16)",
        "lg": "0 10px 28px rgba(58,42,32,0.20)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --stitch-border: repeating-linear-gradient(90deg, var(--color-thread) 0 8px, transparent 8px 16px);
//   --weave-fill: repeating-linear-gradient(45deg, rgba(181,80,47,0.05) 0 6px, rgba(74,107,77,0.05) 6px 12px);
//   --stitch-dash: 2px dashed var(--color-thread);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--weave-fill` texture on the surface, `--stitch-dash` outline standing in for a hard border, `--radius-md` softened "sewn" corners. |
| **Input** | `--color-surface` field edged with `--stitch-dash`; focus swaps the dash for a solid `--color-primary` "pulled taut" stitch line. |
| **Card** | The hero: `--weave-fill` background, `--stitch-border` running along the top edge like a hem, `--shadow-sm` (soft, fabric doesn't cast hard shadows), `--radius-lg` rounded corners like a cushion. |
| **Nav** | Bar with a `--stitch-border` bottom hem instead of a hard rule; active item underlined with a short `--stitch-dash` segment. |
| **Modal** | Panel framed like an embroidery hoop: `--stitch-border` ring near the edge, `--weave-fill` interior, generous `--radius-lg`. |
| **Table** | Row dividers rendered as `--stitch-dash` instead of solid hairlines; header band gets `--weave-fill`. |
| **Tooltip** | Small patch-shaped chip with a `--stitch-dash` outline, as if appliquéd on. |
| **Badge** | Pill with `--stitch-border` edge, like an embroidered patch label. |
| **Toggle** | Track textured with `--weave-fill`; knob is a solid "button" with a subtle `--shadow-sm`, echoing a fabric toggle/snap. |
| **Loading** | A "stitching" animation — a dash pattern progressively drawing itself along a path — or a gentle knit-stitch pulse. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--stitch-dash`/`--stitch-border` are decorative-only; never use a dashed thread line as the sole affordance for an actionable border — pair with a solid state change on focus/hover.
- Keep `--weave-fill` opacity low (as tokened, ~5%) and never place it directly behind small text; verify contrast with `contrast_check.py` including the texture's darkest point.
- The rounded, soft `--font-sans` (Quicksand/Nunito) can compress at small sizes — check body text stays at `--text-sm` or larger for legibility.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use `--stitch-dash`/`--stitch-border` consistently as the "edge" language across all bordered primitives.
- ✅ Keep shadows soft and low (`--shadow-sm`/`--shadow-md`) — fabric doesn't cast crisp shadows.
- ✅ Favor warm, muted, cream-based surfaces over stark white or black.

## Don't

- ❌ Use hard 1px solid borders where a stitch treatment would read as more authentic.
- ❌ Apply `--weave-fill` at high opacity — it should whisper, not shout.
- ❌ Pair the style with cold, high-saturation neon accents.

## Don't confuse this with…

*Commonly confused neighbors:* skeuomorphism, papercut.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
