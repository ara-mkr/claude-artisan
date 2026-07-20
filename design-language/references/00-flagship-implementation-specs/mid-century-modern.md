# Mid-Century Modern — Implementation Spec

*Aliases:* MCM, atomic age design  
*Slug:* `mid-century-modern` · *Category:* historical · *Era:* 1945–1969

**Origin.** Post-war US/Scandinavia (Charles & Ray Eames, Paul Rand era).

**Reference example.** Eames furniture; Paul Rand IBM/Westinghouse logos; Saul Bass.

## Signature move(s)

An orbiting-dot "atomic motif" (`--atomic-motif`) tucked into a corner of nav and card surfaces — a UI echo of period atomic-diagram imagery — paired with a 3px `--sunburst-rule` gradient stripe (terracotta → mustard → teal) used as a border accent and primary-button fill. Corners are `--radius-md`/`--radius-lg`, rounded but not pill-soft: organic enough to feel warm and hand-designed like an Eames shell chair, geometric enough to stay confident, echoing Paul Rand's balance of playful mark and disciplined grid.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Clean organic + geometric balance
- Warm retro palette (mustard, teal, orange, brown)
- Simple friendly illustration, atomic motifs
- Functional optimism

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/mid-century-modern.css`.)

```css
/* Mid-Century Modern — design tokens (generated from style_catalog.json) */
/* 1945–1969 | Post-war US/Scandinavia (Charles & Ray Eames, Paul Rand era). */
:root {
  /* color */
  --color-bg: #f2e9d8;
  --color-surface: #fbf5e9;
  --color-surface-strong: #e8dcc0;
  --color-border: #b08d4f;
  --color-text: #2b241a;
  --color-text-muted: #6b5c42;
  --color-primary: #c1531c;
  --color-accent: #2f7d6e;
  --color-mustard: #e0a52c;
  --color-brown: #6f4324;
  /* radius */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 4px rgba(43,36,26,0.14);
  --shadow-md: 0 6px 14px rgba(43,36,26,0.18);
  --shadow-lg: 0 14px 32px rgba(43,36,26,0.22);
  /* font */
  --font-sans: 'Futura', 'Century Gothic', 'Poppins', sans-serif;
  --font-display: 'Cooper Black', 'Futura', serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --atomic-motif: radial-gradient(circle at 92% 8%, var(--color-mustard) 0 6px, transparent 7px), radial-gradient(circle at 82% 18%, var(--color-primary) 0 4px, transparent 5px);
  --sunburst-rule: linear-gradient(90deg, var(--color-primary), var(--color-mustard) 50%, var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Mid-Century Modern — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2e9d8",
        "surface": "#fbf5e9",
        "surface-strong": "#e8dcc0",
        "border": "#b08d4f",
        "text": "#2b241a",
        "text-muted": "#6b5c42",
        "primary": "#c1531c",
        "accent": "#2f7d6e",
        "mustard": "#e0a52c",
        "brown": "#6f4324",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(43,36,26,0.14)",
        "md": "0 6px 14px rgba(43,36,26,0.18)",
        "lg": "0 14px 32px rgba(43,36,26,0.22)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Century Gothic'", "'Poppins'", "sans-serif"],
        "display": ["'Cooper Black'", "'Futura'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.3, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --atomic-motif: radial-gradient(circle at 92% 8%, var(--color-mustard) 0 6px, transparent 7px), radial-gradient(circle at 82% 18%, var(--color-primary) 0 4px, transparent 5px);
//   --sunburst-rule: linear-gradient(90deg, var(--color-primary), var(--color-mustard) 50%, var(--color-accent));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` shape (Eames-shell friendly), 2px `--color-brown` border, `--color-surface-strong` fill; hover shifts fill to `--color-mustard`; primary uses the full `--sunburst-rule` gradient fill. |
| **Input** | `--radius-md` field, 2px `--color-border`, `--color-surface` fill; focus swaps border to `--color-accent` teal with a soft ring — friendly, not sharp. |
| **Card** | The hero surface: `--atomic-motif` tucked in the top-right corner over `--color-surface`, `--radius-lg`, `--shadow-md`, 1px `--color-border`. |
| **Nav** | `--atomic-motif` corner accent plus a `--sunburst-rule` bottom border (`border-image`), `--shadow-sm` — a friendly, confident header bar. |
| **Modal** | `--radius-lg`, `--shadow-lg`, `--sunburst-rule` top edge stripe, over a warm brown-tinted scrim rather than a cold neutral one. |
| **Table** | Flat rows on `--color-surface`, header row using `--sunburst-rule` as a thin top rule only — keep the atomic dots out of the data grid to preserve scanability. |
| **Tooltip** | Small `--radius-md` chip in `--color-surface-strong`, no motif — motifs are reserved for larger chrome surfaces. |
| **Badge** | `--color-accent` fill, `--radius-pill`, white text — a clean teal "tag" in the Paul Rand mark tradition. |
| **Toggle** | Pill track in `--color-surface-strong`; on-state fills with `--color-accent`, knob is a plain warm-white circle for friendly contrast. |
| **Loading** | A slow left-to-right sweep of the `--sunburst-rule` gradient across a pill bar — optimistic motion, never jittery. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-mustard` and `--color-accent` teal read as friendly accents but can fail contrast against `--color-bg` at small text sizes — reserve them for large headlines, icons, and fills, and verify any text use with `contrast_check.py`.
- The rounded-but-not-pill `--radius-md`/`--radius-lg` geometry is a visual signature, not a functional cue — never rely on shape alone to distinguish interactive elements; pair with the `--color-border`/`--sunburst-rule` treatment consistently.
- Keep `--font-display` (Cooper Black) to short headlines; body and form copy stays in `--font-sans` (Futura/Century Gothic) at `--text-base` or larger for comfortable reading.
- The `--atomic-motif` dot cluster must stay a low-opacity corner accent, never placed under running text, so it doesn't degrade legibility.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Repeat the atomic-motif corner accent and sunburst-rule stripe across nav, card, and modal.
- ✅ Keep the warm retro palette (mustard, terracotta, teal, brown) balanced — no single hue should dominate more than the others.
- ✅ Use rounded-but-not-pill radii everywhere for the organic/geometric balance.

## Don't

- ❌ Use pure black, pure white, or a cool neutral gray — the palette must stay warm.
- ❌ Place the atomic-motif dots behind or overlapping running text.
- ❌ Sharpen all corners to 0px — that reads as brutalist/Bauhaus, not MCM optimism.

## Don't confuse this with…

*Commonly confused neighbors:* scandinavian, atompunk, space-age.

vs scandinavian: Scandinavian design shares the wood-warm minimalism but drops the atomic motifs and saturated terracotta/mustard/teal palette for a cooler, more muted, near-monochrome one. vs atompunk/space-age: those push the atomic-era imagery into full speculative-fiction sci-fi (rockets, ray guns, chrome); Mid-Century Modern stays grounded in period-accurate furniture, editorial design, and corporate identity work.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
