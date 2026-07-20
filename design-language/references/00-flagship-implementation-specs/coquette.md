# Coquette — Implementation Spec

*Aliases:* coquettecore, balletcore-adjacent  
*Slug:* `coquette` · *Category:* niche · *Era:* 2022–present

**Origin.** Hyper-feminine bows-and-lace aesthetic.

**Reference example.** Coquette TikTok; Lana Del Rey-adjacent moodboards.

## Signature move(s)

A dotted "lace" border (`--lace-border: 2px dotted var(--color-border)`) rimming cards and inputs, paired with a rose-pink-to-mauve `--ribbon-underline` gradient that traces beneath headings like a satin ribbon, all set on a blush-cream field with a decorative script accent font reserved for flourish moments only.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Soft pinks, cream, lace, ribbon bows
- Delicate serif/script type
- Vintage romance, pearls, ballet
- Dainty, flirtatious, nostalgic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/coquette.css`.)

```css
/* Coquette — design tokens (generated from style_catalog.json) */
/* 2022–present | Hyper-feminine bows-and-lace aesthetic. */
:root {
  /* color */
  --color-bg: #fdf1f3;
  --color-surface: #fffafb;
  --color-surface-strong: #fbe4e9;
  --color-border: #e8b6c3;
  --color-text: #5c2a37;
  --color-text-muted: #8a5a67;
  --color-primary: #d6486a;
  --color-accent: #c98fae;
  --color-lace: rgba(232, 182, 195, 0.55);
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(92, 42, 55, 0.10);
  --shadow-md: 0 6px 18px rgba(92, 42, 55, 0.14);
  --shadow-lg: 0 12px 30px rgba(92, 42, 55, 0.16);
  /* font */
  --font-sans: 'Poppins', system-ui, -apple-system, sans-serif;
  --font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-script: 'Dancing Script', cursive;
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
  --ease-entrance: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  /* extra (lace border, ribbon underline) */
  --lace-border: 2px dotted var(--color-border);
  --ribbon-underline: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Coquette — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf1f3",
        "surface": "#fffafb",
        "surface-strong": "#fbe4e9",
        "border": "#e8b6c3",
        "text": "#5c2a37",
        "text-muted": "#8a5a67",
        "primary": "#d6486a",
        "accent": "#c98fae",
        "lace": "rgba(232, 182, 195, 0.55)",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(92, 42, 55, 0.10)",
        "md": "0 6px 18px rgba(92, 42, 55, 0.14)",
        "lg": "0 12px 30px rgba(92, 42, 55, 0.16)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        "script": ["'Dancing Script'", "cursive"],
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
        "entrance": "cubic-bezier(0, 0, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (lace border/ribbon gradient).
// Add them as CSS custom properties or arbitrary values:
//   --lace-border: 2px dotted var(--color-border);
//   --ribbon-underline: linear-gradient(90deg, var(--color-primary), var(--color-accent));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` fill, `--shadow-sm`; hover reveals `--ribbon-underline` sweeping beneath the label. |
| **Input** | `--lace-border` dotted outline on `--color-surface`; focus solidifies the border to `--color-primary` at 2px. |
| **Card** | `--radius-lg`, `--lace-border` framing the whole card, `--shadow-md`, headline in `--font-display`. |
| **Nav** | Cream bar, wordmark in `--font-script` for personality, links in `--font-sans`, active link gets `--ribbon-underline`. |
| **Modal** | `--radius-lg`, `--shadow-lg`, `--lace-border` frame, close button styled as a small bow glyph if illustration budget allows. |
| **Table** | Flat `--color-surface` rows with `--lace-border`-style dotted dividers instead of solid rules. |
| **Tooltip** | Small `--color-surface-strong` chip, `--shadow-sm`, thin dotted lace edge. |
| **Badge** | `--radius-pill`, `--color-accent` fill, tiny bow or heart glyph optional. |
| **Toggle** | Track with `--lace-border` outline; knob in `--color-primary`, satin-ribbon gradient on the active track fill. |
| **Loading** | A ribbon-bow untying/tying loop animation, or a simple pulsing dotted-lace ring. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--font-script` (Dancing Script) must be reserved for short decorative flourishes only — never body copy, form labels, button text, or table headers, where it is genuinely hard to read.
- Blush-on-blush pairings (`--color-text-muted` on `--color-surface-strong`) need explicit verification with `contrast_check.py` — the palette is intentionally soft and can easily slip below 4.5:1.
- Dotted `--lace-border` at 2px can be too thin/faint as the sole focus indicator — pair focus states with a solid `--color-primary` outline in addition to the lace styling.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the dotted lace border consistently on cards, inputs, and modals as the connective visual thread.
- ✅ Keep `--font-script` to logotype, section labels, or a single pull-quote per page.
- ✅ Let the ribbon-gradient underline mark "active/selected" state so it earns its decorative role functionally.

## Don't

- ❌ Set entire paragraphs or nav labels in script font.
- ❌ Overload every corner with bows/lace motifs — one or two well-placed details read as intentional, ten reads as clutter.
- ❌ Use harsh black shadows — every shadow should carry the warm rose-brown tint from `--color-text`.

## Don't confuse this with…

*Commonly confused neighbors:* barbiecore, light-academia.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
