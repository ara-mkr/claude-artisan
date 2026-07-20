# Gorpcore — Implementation Spec

*Aliases:* outdoorsy, techwear-lite  
*Slug:* `gorpcore` · *Category:* niche · *Era:* 2017–present

**Origin.** Fashion trend elevating technical outdoor gear ('GORP').

**Reference example.** Arc'teryx/Salomon-driven fashion.

## Signature move(s)

The gear-tag treatment: sharp, barely-rounded rectangles (`--radius-sm: 2px`) in earthy khaki/olive, trimmed with a repeating dashed "stitch line" (`--ease-stitch-line`) that mimics reinforced trail-gear seams, and exactly one hi-vis lime accent (`--color-hi-vis`) reserved for the single most important action — like a rescue-orange zipper pull on an otherwise muted jacket. Condensed all-caps display type stands in for gear-label typography ("WATERPROOF", "3L SHELL").

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Technical outdoor apparel as everyday style
- Earthy + hi-vis accent palette
- Functional, rugged, utilitarian
- Trail/mountain aesthetic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/gorpcore.css`.)

```css
/* Gorpcore — design tokens (generated from style_catalog.json) */
/* 2017–present | Fashion trend elevating technical outdoor gear ('GORP'). */
:root {
  /* color */
  --color-bg: #e8e4d8;
  --color-surface: #f2efe6;
  --color-surface-strong: #ddd7c4;
  --color-border: #4a4638;
  --color-text: #24221b;
  --color-text-muted: #565243;
  --color-primary: #3c5a3e;
  --color-accent: #e8630a;
  --color-hi-vis: #d7ff3f;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(36,34,27,0.2);
  --shadow-md: 0 4px 12px rgba(36,34,27,0.24);
  --shadow-lg: 0 10px 24px rgba(36,34,27,0.28);
  /* font */
  --font-sans: 'Helvetica Neue', 'Inter', Arial, sans-serif;
  --font-display: 'Bebas Neue', 'Oswald', Arial, sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra (signature gradients, composite borders, filters) */
  --stitch-line: repeating-linear-gradient(90deg, var(--color-hi-vis) 0 6px, transparent 6px 12px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Gorpcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8e4d8",
        "surface": "#f2efe6",
        "surface-strong": "#ddd7c4",
        "border": "#4a4638",
        "text": "#24221b",
        "text-muted": "#565243",
        "primary": "#3c5a3e",
        "accent": "#e8630a",
        "hi-vis": "#d7ff3f",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(36,34,27,0.2)",
        "md": "0 4px 12px rgba(36,34,27,0.24)",
        "lg": "0 10px 24px rgba(36,34,27,0.28)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Inter'", "Arial", "sans-serif"],
        "display": ["'Bebas Neue'", "'Oswald'", "Arial", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` token is CSS-only (repeating gradient). Add as a
// custom property or arbitrary value:
//   --stitch-line: repeating-linear-gradient(90deg, var(--color-hi-vis) 0 6px, transparent 6px 12px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Rectangular, `--radius-sm`, `--color-primary` fill for primary; the single hi-vis button style (`--color-hi-vis` bg, dark text) is reserved for the one critical CTA per screen. |
| **Input** | `--color-surface`, 1px `--color-border`, `--radius-sm`; focus ring uses `--color-hi-vis` at low width like a piped seam. |
| **Card** | `--color-surface`, `--radius-md`, top edge decorated with `--stitch-line`, `--shadow-sm` — reads as a gear pouch, not a glossy panel. |
| **Nav** | Flat `--color-surface-strong` bar, bottom `--stitch-line` instead of a shadow. |
| **Modal** | Card recipe, `--shadow-lg`, corner "tag" badge in `--color-hi-vis` for status (e.g. "ACTIVE"). |
| **Table** | Dense rows, `--color-border` hairlines, header row in `--color-surface-strong` with condensed display type. |
| **Tooltip** | Small dark chip (`--color-text` bg, `--color-bg` text) — utilitarian, no blur, no glass. |
| **Badge** | Rectangular gear-tag shape, `--radius-sm`, `--stitch-line` edge; hi-vis fill only for "new/live" states. |
| **Toggle** | Olive track (`--color-primary`), hi-vis knob when on — unmistakable at a glance like a carabiner gate. |
| **Loading** | A `--stitch-line` pattern sliding horizontally, mimicking a zipper being pulled. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-hi-vis` (#d7ff3f) is near-white in luminance — never use it as body text color; reserve it for fills with dark text, and verify pairings with `contrast_check.py`.
- Keep hi-vis to a strict single-accent budget per screen; overuse defeats its "emergency signal" legibility function and creates visual noise.
- The stitch-line pattern must stay decorative (`aria-hidden`), never used to convey state on its own — pair with text or icon.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `--color-hi-vis` for exactly one action or status per view.
- ✅ Keep corners nearly square — the utilitarian read depends on `--radius-sm`.
- ✅ Use condensed uppercase display type for labels like real gear tags.

## Don't

- ❌ Round every corner into pills — that reads as soft lifestyle branding, not technical gear.
- ❌ Mix in more than one bright accent — hi-vis loses meaning if everything glows.
- ❌ Use glossy gradients or glass blur — the material language is matte technical fabric.

## Don't confuse this with…

*Commonly confused neighbors:* normcore, techwear.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
