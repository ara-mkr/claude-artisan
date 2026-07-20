# Egyptian / Ancient Revival — Implementation Spec

*Aliases:* hieroglyphic, Egyptomania
*Slug:* `egyptian-revival` · *Category:* historical · *Era:* 1820s & 1920s revivals

**Origin.** Egyptomania after Napoleon's campaigns and Tutankhamun (1922).

**Reference example.** Art Deco Egyptian revival; museum branding.

## Signature move(s)

A repeating Greek-key border pattern (`--key-pattern`, gold-on-parchment) used as a structural banding device, combined with a thick 4px gold `--banded-border` framing hero surfaces and near-square, low-radius corners (2–6px) that evoke carved stone rather than soft screens. Lapis-blue `--color-primary` and gold `--color-accent` are the only saturated colors — everything else is parchment and ink.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Hieroglyph and papyrus motifs, lotus, scarab
- Gold, lapis blue, terracotta
- Bold slab "Egyptian" typefaces
- Monumental, symmetric, ancient

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/egyptian-revival.css`.)

```css
/* Egyptian / Ancient Revival — design tokens (generated from style_catalog.json) */
/* 1820s & 1920s revivals | Egyptomania after Napoleon's campaigns and Tutankhamun (1922). */
:root {
  /* color */
  --color-bg: #efe2c0;
  --color-surface: #f7ecd3;
  --color-surface-strong: #e6d3a3;
  --color-border: #b8860b;
  --color-text: #241a0e;
  --color-text-muted: #5a4527;
  --color-primary: #1b3f6b;
  --color-accent: #b8860b;
  --color-terracotta: #a3441f;
  /* radius (near-square, carved-stone corners) */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 4px rgba(36,26,14,0.2);
  --shadow-md: 0 6px 16px rgba(36,26,14,0.24);
  --shadow-lg: 0 16px 36px rgba(36,26,14,0.3);
  /* font */
  --font-sans: 'Trajan Pro', 'Cinzel', 'Georgia', serif;
  --font-display: 'Cinzel', 'Trajan Pro', serif;
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
  /* extra (Greek-key border + gold band) */
  --key-pattern: repeating-linear-gradient(90deg, var(--color-accent) 0 8px, transparent 8px 10px, var(--color-accent) 10px 18px, transparent 18px 24px);
  --banded-border: 4px solid var(--color-accent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Egyptian / Ancient Revival — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe2c0",
        "surface": "#f7ecd3",
        "surface-strong": "#e6d3a3",
        "border": "#b8860b",
        "text": "#241a0e",
        "text-muted": "#5a4527",
        "primary": "#1b3f6b",
        "accent": "#b8860b",
        "terracotta": "#a3441f",
      },
      borderRadius: {
        "sm": "2px", "md": "4px", "lg": "6px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 4px rgba(36,26,14,0.2)",
        "md": "0 6px 16px rgba(36,26,14,0.24)",
        "lg": "0 16px 36px rgba(36,26,14,0.3)",
      },
      fontFamily: {
        "sans": ["'Trajan Pro'", "'Cinzel'", "'Georgia'", "serif"],
        "display": ["'Cinzel'", "'Trajan Pro'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature key-pattern/gold-band tokens are CSS-only (repeating-gradient/border):
//   --key-pattern: repeating-linear-gradient(90deg, var(--color-accent) 0 8px, transparent 8px 10px, var(--color-accent) 10px 18px, transparent 18px 24px);
//   --banded-border: 4px solid var(--color-accent);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, lapis `--color-primary` fill, gold `--color-border` outline; hover swaps fill toward `--color-terracotta`. Square, monumental proportions, not pill-shaped. |
| **Input** | `--color-surface` parchment fill, `--color-border` gold outline, `--radius-sm`; focus adds a thin `--key-pattern` strip beneath it. |
| **Card** | Parchment `--color-surface`, `--banded-border` gold frame on all four sides, `--shadow-md`, `--radius-md`; header strip uses `--key-pattern`. |
| **Nav** | Parchment bar with a `--key-pattern` bottom border; centered `--font-display` wordmark in `--color-primary`. |
| **Modal** | `--banded-border` frame, `--key-pattern` header strip, `--shadow-lg`; symmetric layout evoking a temple facade. |
| **Table** | Alternating `--color-surface`/`--color-surface-strong` rows, header row in `--color-primary` with parchment text; a thin `--key-pattern` divider under the header. |
| **Tooltip** | Small parchment chip, gold outline, `--font-display` label for short callouts, `--font-sans` for longer text. |
| **Badge** | Square-ish (`--radius-sm`) chip in `--color-accent` gold or `--color-terracotta`, ink text. |
| **Toggle** | Parchment track with gold outline, lapis knob when on. |
| **Loading** | A rotating scarab or ankh glyph in `--color-accent`, or a shimmering `--key-pattern` progress strip. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The parchment-on-parchment surfaces (`--color-bg` vs `--color-surface-strong`) are close in luminance — verify body text sits on `--color-surface` with `--color-text` and check the gold-on-parchment `--key-pattern` never carries text on top of it.
- Decorative display serif (`--font-display`, Cinzel/Trajan) has no lowercase-optimized forms in some cuts — keep body copy in `--font-sans` and reserve display type for short, often all-caps headings.
- `--key-pattern` and `--banded-border` are decorative only — mark them `aria-hidden` and never use them alone to convey a state change (e.g., error) without also changing text/icon.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Frame hero cards/modals with the full gold `--banded-border` for a monumental, temple-facade feel.
- ✅ Keep corners near-square (2–6px) — soft rounded corners break the carved-stone illusion.
- ✅ Reserve lapis blue and gold as the only saturated colors; let terracotta appear sparingly as a tertiary accent.

## Don't

- ❌ Round corners into pills — this style is angular and monumental, not soft.
- ❌ Overuse the Greek-key pattern as a full background fill — it's a banding/border motif, not wallpaper.
- ❌ Set long paragraphs in the display serif — it's built for short, symmetric headline treatment.

## Don't confuse this with…

*Commonly confused neighbors:* art-deco.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
