# Typography-Driven — Implementation Spec

*Aliases:* type-only, typographic layout, big type
*Slug:* `typographic` · *Category:* minimal-organic · *Era:* Timeless (revival 2018+)

**Origin.** Type-as-hero editorial approach.

**Reference example.** Type-foundry sites; award-winning agency landings.

## Signature move(s)

Scale is the entire ornament: type ranges from a modest `--text-base` (1rem) up to a massive `--text-5xl` (9rem) with tight `--tight-tracking: -0.03em`, everything else — radius, shadow — is stripped to zero, and the only structural mark is a heavy 3px solid `--rule` line (`3px solid var(--color-text)`) used to divide sections instead of cards or borders.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Oversized expressive typography as the design
- Minimal imagery; type carries everything
- Variable fonts, kinetic type
- Bold, confident, editorial

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/typographic.css`.)

```css
/* Typography-Driven — design tokens (generated from style_catalog.json) */
/* Timeless (revival 2018+) | Type-as-hero editorial approach. */
:root {
  /* color */
  --color-bg: #f4f4f0;
  --color-surface: #ffffff;
  --color-surface-strong: #eaeae4;
  --color-border: #0f0f0f;
  --color-text: #0f0f0f;
  --color-text-muted: #55554e;
  --color-primary: #0f0f0f;
  --color-accent: #ff3d00;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  /* font */
  --font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.75rem;
  --text-3xl: 4.25rem;
  --text-4xl: 6.5rem;
  --text-5xl: 9rem;
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
  /* extra */
  --tight-tracking: -0.03em;
  --rule: 3px solid var(--color-text);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Typography-Driven — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f4f4f0",
        "surface": "#ffffff",
        "surface-strong": "#eaeae4",
        "border": "#0f0f0f",
        "text": "#0f0f0f",
        "text-muted": "#55554e",
        "primary": "#0f0f0f",
        "accent": "#ff3d00",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["'Neue Haas Grotesk'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Söhne'", "'Neue Haas Grotesk Display'", "'Helvetica Neue'", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.25rem",
        "xl": "1.75rem", "2xl": "2.75rem", "3xl": "4.25rem", "4xl": "6.5rem", "5xl": "9rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
      letterSpacing: {
        "tight-tracking": "-0.03em",
      },
    },
  },
};

// Signature `rule` token is CSS-only:
//   --rule: 3px solid var(--color-text);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm` (0px) rectangle, no shadow, solid `--color-primary` fill with inverted text; hover inverts to outline-only with `--rule`-weight border. |
| **Input** | No box at all — a single `--rule` bottom border on a transparent field, label set in `--text-sm` uppercase tracking. |
| **Card** | No card chrome — content blocks separated purely by a `--rule` divider and whitespace (`--space-12`+). |
| **Nav** | Wordmark set at `--text-2xl`+ with `--tight-tracking`, single `--rule` bottom border, no background fill. |
| **Modal** | Full-bleed or near-full-bleed panel, `--color-bg`, headline at `--text-4xl`, closes via a text "×" not an icon button. |
| **Table** | Rows divided by `--rule`-weight lines only, headers in `--font-display` uppercase, zero fills/shadows. |
| **Tooltip** | Plain `--color-text` fill, `--color-bg` text, sharp corners, no shadow — text label only. |
| **Badge** | Sharp rectangle, `--color-accent` fill used sparingly as the one color note in an otherwise black/white system. |
| **Toggle** | Rendered as a `--rule`-bordered rectangle track with a solid block knob — no rounded pill shape. |
| **Loading** | A `--rule`-weight line grows left-to-right across the viewport width, or numerals count up in `--font-display`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- At `--text-4xl`/`--text-5xl` sizes with `--tight-tracking: -0.03em`, verify letters don't collide — loosen tracking for any non-Latin script or long headline that wraps to multiple lines.
- With `--shadow: none` everywhere, focus states have zero ambient help — every interactive element needs an explicit, high-contrast `--rule`-weight focus outline in `--color-accent`.
- `--color-accent` (#ff3d00) should remain a rare, single-use highlight; confirm it still clears contrast against `--color-bg` for any text use with `contrast_check.py`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let type scale itself carry hierarchy — resist adding cards, shadows, or color to compensate.
- ✅ Use the `--rule` divider as the only structural device between sections.
- ✅ Reserve `--color-accent` for exactly one emphasis moment per view.

## Don't

- ❌ Don't add drop shadows or rounded corners "for polish" — it directly undoes the signature move.
- ❌ Don't use more than two type sizes in the same viewport fold; scale contrast is the whole design.
- ❌ Don't fill backgrounds with imagery that competes with the type for attention.

## Don't confuse this with…

*Commonly confused neighbors:* swiss-design, minimalism, brutalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
