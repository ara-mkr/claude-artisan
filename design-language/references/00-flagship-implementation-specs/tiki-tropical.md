# Tiki / Tropical — Implementation Spec

*Aliases:* tropical, exotica, tiki bar
*Slug:* `tiki-tropical` · *Category:* niche · *Era:* 1930s–1960s revival

**Origin.** Mid-century Polynesian pop fantasy.

**Reference example.** Tiki bars; Trader Vic's; exotica album covers.

## Signature move(s)

A bamboo-stripe border (`--bamboo-stripe`, a repeating linear-gradient of wood tones) framing every card, plus a sunset gradient (`--sunset-fade`, orange → hibiscus pink → deep plum) as the hero background. Every raised surface reads as "carved from bamboo, lit by sunset," never flat.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Bamboo, palms, hibiscus, tiki masks
- Sunset oranges, teal, wood tones
- Exotica lounge vibe
- Escapist, kitschy, warm

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/tiki-tropical.css`.)

```css
/* Tiki / Tropical — design tokens (generated from style_catalog.json) */
/* 1930s–1960s revival | Mid-century Polynesian pop fantasy. */
:root {
  /* color */
  --color-bg: #f2d9a8;
  --color-surface: #f8e6c4;
  --color-surface-strong: #eccb92;
  --color-border: #a9631f;
  --color-text: #2e1a0f;
  --color-text-muted: #6b4526;
  --color-primary: #e0631f;
  --color-accent: #1f7a6c;
  --color-hibiscus: #d92b52;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(46,26,15,0.18);
  --shadow-md: 0 6px 18px rgba(46,26,15,0.24);
  --shadow-lg: 0 14px 36px rgba(46,26,15,0.30);
  /* font */
  --font-sans: 'Poppins', 'Futura', system-ui, sans-serif;
  --font-display: 'Bungee', 'Baloo 2', cursive;
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
  /* extra (bamboo border + sunset gradient) */
  --bamboo-stripe: repeating-linear-gradient(90deg, #a9631f 0 6px, #7a4515 6px 8px, #c17a30 8px 14px);
  --sunset-fade: linear-gradient(180deg, #e0631f 0%, #d92b52 60%, #7a1f4a 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Tiki / Tropical — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2d9a8",
        "surface": "#f8e6c4",
        "surface-strong": "#eccb92",
        "border": "#a9631f",
        "text": "#2e1a0f",
        "text-muted": "#6b4526",
        "primary": "#e0631f",
        "accent": "#1f7a6c",
        "hibiscus": "#d92b52",
      },
      borderRadius: {
        "sm": "6px", "md": "12px", "lg": "20px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(46,26,15,0.18)",
        "md": "0 6px 18px rgba(46,26,15,0.24)",
        "lg": "0 14px 36px rgba(46,26,15,0.30)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Bungee'", "'Baloo 2'", "cursive"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature bamboo/sunset tokens are CSS-only (gradients). Add as custom properties:
//   --bamboo-stripe: repeating-linear-gradient(90deg, #a9631f 0 6px, #7a4515 6px 8px, #c17a30 8px 14px);
//   --sunset-fade: linear-gradient(180deg, #e0631f 0%, #d92b52 60%, #7a1f4a 100%);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--sunset-fade` background, cream text, `--shadow-sm`; hover deepens toward `--color-hibiscus`. |
| **Input** | `--color-surface` fill, 2px `--bamboo-stripe` bottom border instead of a plain rule, `--radius-sm`. |
| **Card** | The hero: `--color-surface` fill, full `--bamboo-stripe` frame (border-image), `--shadow-md`, `--radius-lg`; header strip uses `--sunset-fade`. |
| **Nav** | Wood-tone bar (`--bamboo-stripe` as a top accent line), `--font-display` wordmark in `--color-primary`. |
| **Modal** | `--sunset-fade` header band, bamboo-framed body, `--shadow-lg`. |
| **Table** | Alternating `--color-surface` / `--color-surface-strong` rows; header row in `--color-border` wood tone with cream text. |
| **Tooltip** | Small teal (`--color-accent`) chip with `--radius-sm`, evokes a lagoon-colored flag. |
| **Badge** | Pill in `--color-hibiscus` or `--color-accent`, cream text — like a paper drink umbrella tag. |
| **Toggle** | Bamboo-striped track, carved-wood-look knob; on-state glows `--color-primary`. |
| **Loading** | Rotating tiki-mask or palm-frond icon in `--color-primary`, or a shimmering `--sunset-fade` skeleton bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The warm tan-on-tan palette (`--color-bg` vs `--color-surface-strong`) needs contrast verification for body text — default to `--color-text` (near-black brown) on `--color-surface`.
- `--sunset-fade` gradients behind text must be checked at their darkest stop (deep plum) as well as their lightest (orange) — pick a single text color that passes both.
- Keep `--font-display` (Bungee/Baloo) to short headings and buttons only; it becomes illegible at body-copy sizes.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the bamboo-stripe border consistently as the "frame" motif across cards, inputs, and nav.
- ✅ Let the sunset gradient do the heavy lifting on hero/header surfaces only — not every panel.
- ✅ Keep body text on solid `--color-surface`, reserving gradients for decorative bands.

## Don't

- ❌ Overuse the display cursive font for paragraphs — it's a headline/button typeface only.
- ❌ Clash teal accent and hibiscus pink in the same small component — pick one per surface.
- ❌ Flatten the bamboo border into a plain solid line — the repeating stripe is the signature.

## Don't confuse this with…

*Commonly confused neighbors:* mid-century-modern, googie.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
