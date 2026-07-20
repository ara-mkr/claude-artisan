# Editorial / Magazine — Implementation Spec

*Aliases:* editorial design, magazine layout
*Slug:* `editorial-layout` · *Category:* minimal-organic · *Era:* Print heritage → web

**Origin.** Magazine/print art direction adapted to screen.

**Reference example.** The New York Times; Kinfolk; editorial portfolio sites.

## Signature move(s)

A print-derived vertical rhythm: a serif `--font-display` (Playfair Display) carries oversized headlines (`--text-4xl`/`--text-5xl`, 3.75rem/5rem) and a large drop cap opens the first paragraph of a story, while body copy runs in a restrained sans at a slightly-larger-than-default `--text-base` (1.0625rem) for print-like readability. Layout is a real multi-column grid with images bleeding full-width between text columns and thin `--radius-sm`/`--radius-md` hairline-framed pull quotes breaking the column rhythm — the page reads like a print spread, not a component stack.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Strong typographic hierarchy, pull quotes
- Multi-column grids, large imagery
- Drop caps, captions, art-directed spreads
- Reading-first rhythm

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/editorial-layout.css`.)

```css
/* Editorial / Magazine — design tokens (generated from style_catalog.json) */
/* Print heritage → web | Magazine/print art direction adapted to screen. */
:root {
  /* color */
  --color-bg: #faf7f2;
  --color-surface: #ffffff;
  --color-surface-strong: #f0ebe1;
  --color-border: #d8cfbe;
  --color-text: #211d17;
  --color-text-muted: #665c4a;
  --color-primary: #8a2a1e;
  --color-accent: #1e4f4a;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 3px;
  --radius-lg: 4px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(33,29,23,0.08);
  --shadow-md: 0 4px 14px rgba(33,29,23,0.10);
  --shadow-lg: 0 12px 32px rgba(33,29,23,0.14);
  /* font */
  --font-sans: 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Playfair Display', 'Georgia', serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1.0625rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.75rem;
  --text-5xl: 5rem;
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
  /* extra (drop-cap font reference) */
  --dropcap-font: var(--font-display);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Editorial / Magazine — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#faf7f2",
        "surface": "#ffffff",
        "surface-strong": "#f0ebe1",
        "border": "#d8cfbe",
        "text": "#211d17",
        "text-muted": "#665c4a",
        "primary": "#8a2a1e",
        "accent": "#1e4f4a",
      },
      borderRadius: {
        "sm": "2px",
        "md": "3px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(33,29,23,0.08)",
        "md": "0 4px 14px rgba(33,29,23,0.10)",
        "lg": "0 12px 32px rgba(33,29,23,0.14)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Playfair Display'", "'Georgia'", "serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1.0625rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.75rem",
        "5xl": "5rem",
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
      },
    },
  },
};

// Signature `extra` token points the drop-cap glyph at the display serif:
//   --dropcap-font: var(--font-display);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, text-forward: often an underlined text link in `--color-primary` rather than a filled box; filled variant uses `--color-primary` with sharp `--radius-sm` corners, never a pill. |
| **Input** | `--radius-sm`, bottom-border-only in `--color-border` (an underline field, not a box) to echo print form aesthetics; focus turns the underline `--color-primary`. |
| **Card** | Acts as an "article tile": `--font-display` headline, `--text-sm` byline in `--color-text-muted`, hairline `--radius-md` image frame, `--shadow-sm` only on hover. |
| **Nav** | A masthead bar: `--font-display` wordmark left, `--font-sans` uppercase-tracked links right, single `--color-border` rule beneath — no shadow, no fill. |
| **Modal** | `--radius-lg`, treated as a "special feature" overlay with a `--font-display` headline and a thin `--color-border` frame; scrim in `--color-text` at low opacity. |
| **Table** | Editorial "index" styling: `--color-border` top/bottom rules only (no full grid), row labels in `--font-mono` for a masthead-credits feel. |
| **Tooltip** | Small `--radius-sm` caption-style chip in `--color-surface-strong`, set in `--text-xs` `--font-sans` — reads like an image caption. |
| **Badge** | `--radius-sm` rectangular kicker label (e.g. "FEATURE", "OPINION") in uppercase `--font-sans` on `--color-accent` or `--color-primary`. |
| **Toggle** | Track `--radius-pill`, otherwise minimal — this primitive is rare in editorial UI; keep it quiet and functional. |
| **Loading** | A slim horizontal rule that fills left-to-right in `--color-primary`, echoing a printing-press progress bar rather than a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Multi-column text layouts must set explicit `column-gap` and reasonable measure (45–75 characters per line) — reflowing columns at narrow viewports is required, not optional.
- The oversized drop cap must not be read redundantly by screen readers (use `::first-letter` styling, not a separate DOM node) so assistive tech still hears the word intact.
- `--color-text-muted` (#665c4a) on `--color-bg` (#faf7f2) should be checked at caption sizes (`--text-xs`/`--text-sm`) — it is intentionally quiet and can dip below AA for small captions.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `--font-display` for headlines and pull quotes only — body text stays in `--font-sans` for readability at length.
- ✅ Let imagery bleed full-bleed between column breaks to create real print-spread drama.
- ✅ Use hairline `--color-border` rules to separate sections instead of shadow or background-color blocks.

## Don't

- ❌ Round corners past `--radius-lg` (4px) — soft corners read as app UI, not print.
- ❌ Center-align long body paragraphs; editorial typography is left-aligned/justified with a real measure.
- ❌ Skip the drop cap or pull quote on long-form pieces — they're load-bearing hierarchy cues, not optional flourishes.

## Don't confuse this with…

*Commonly confused neighbors:* swiss-design, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
