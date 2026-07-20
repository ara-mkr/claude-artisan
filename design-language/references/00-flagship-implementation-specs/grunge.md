# Grunge Design — Implementation Spec

*Aliases:* dirty design, distressed design
*Slug:* `grunge` · *Category:* brutalist · *Era:* 1990s

**Origin.** David Carson (Ray Gun magazine); reaction to clean corporate design.

**Reference example.** David Carson, Ray Gun magazine (1990s).

## Signature move(s)

Layer degraded, torn-edge surfaces (`--extra-torn-clip` polygon clip-path) over a dark ink palette, with hard black offset shadows (`--shadow-sm/md/lg`) and a grain texture (`--extra-grain-svg`) baked into every panel; typography sets in a typewriter/condensed-display pairing and is allowed to overlap and partially break legibility as a texture, not a bug.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Distressed textures, dirt, splatter, torn edges
- Chaotic overlapping type, broken legibility
- Photocopied, degraded, layered collage
- Anti-grid experimental layout

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/grunge.css`.)

```css
/* Grunge Design — design tokens (generated from style_catalog.json) */
/* 1990s | David Carson (Ray Gun magazine); reaction to clean corporate design. */
:root {
  /* color */
  --color-bg: #1a1815;
  --color-surface: #24211c;
  --color-surface-strong: #2e2a23;
  --color-border: #55503f;
  --color-text: #ece6d8;
  --color-text-muted: #a89f8a;
  --color-primary: #c1391f;
  --color-accent: #d9b23c;
  --color-ink: #0c0b09;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 0px;
  --radius-pill: 2px;
  /* shadow */
  --shadow-sm: 2px 2px 0 var(--color-ink);
  --shadow-md: 4px 4px 0 var(--color-ink);
  --shadow-lg: 6px 6px 0 var(--color-ink);
  /* font */
  --font-sans: 'Courier New', 'Special Elite', monospace;
  --font-display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif;
  --font-mono: 'Courier New', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.9rem;
  --text-3xl: 2.6rem;
  --text-4xl: 3.6rem;
  --text-5xl: 5rem;
  /* space */
  --space-1: 4px;
  --space-2: 7px;
  --space-3: 11px;
  --space-4: 15px;
  --space-6: 22px;
  --space-8: 30px;
  --space-12: 44px;
  --space-16: 60px;
  --space-24: 90px;
  /* ease */
  --ease-standard: steps(4, end);
  /* extra */
  --grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
  --torn-clip: polygon(0% 2%, 3% 0%, 8% 3%, 15% 0%, 22% 2%, 30% 0%, 40% 3%, 50% 0%, 60% 2%, 70% 0%, 80% 3%, 90% 0%, 100% 2%, 100% 98%, 92% 100%, 85% 97%, 75% 100%, 65% 98%, 55% 100%, 45% 97%, 35% 100%, 25% 98%, 15% 100%, 8% 97%, 0% 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Grunge Design — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1a1815",
        "surface": "#24211c",
        "surface-strong": "#2e2a23",
        "border": "#55503f",
        "text": "#ece6d8",
        "text-muted": "#a89f8a",
        "primary": "#c1391f",
        "accent": "#d9b23c",
        "ink": "#0c0b09",
      },
      borderRadius: {
        "sm": "0px", "md": "2px", "lg": "0px", "pill": "2px",
      },
      boxShadow: {
        "sm": "2px 2px 0 #0c0b09",
        "md": "4px 4px 0 #0c0b09",
        "lg": "6px 6px 0 #0c0b09",
      },
      fontFamily: {
        "sans": ["'Courier New'", "'Special Elite'", "monospace"],
        "display": ["'Oswald'", "'Impact'", "'Arial Narrow'", "sans-serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.9rem", "3xl": "2.6rem", "4xl": "3.6rem", "5xl": "5rem",
      },
      spacing: {
        "1": "4px", "2": "7px", "3": "11px", "4": "15px", "6": "22px",
        "8": "30px", "12": "44px", "16": "60px", "24": "90px",
      },
      transitionTimingFunction: {
        "standard": "steps(4, end)",
      },
    },
  },
};

// Grain texture and torn-edge clip-path are CSS-only:
//   --grain-svg: url("data:image/svg+xml;utf8,...");
//   --torn-clip: polygon(...);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill, `--shadow-sm`, `--radius-md`, grain overlay (`--grain-svg` at low opacity); hover jitters via `steps(4, end)` rather than smoothing. |
| **Input** | `--color-surface` fill, ragged `--color-border`; placeholder text in `--font-mono` to feel typewritten/photocopied. |
| **Card** | `--color-surface-strong`, `clip-path: var(--torn-clip)` on one edge, `--shadow-md`, grain texture layered on top. |
| **Nav** | Overlapping, uneven baseline links in `--font-display`, some letters slightly offset/rotated for the "broken legibility" trait. |
| **Modal** | Torn-edge panel (`--torn-clip`), `--shadow-lg`, dark scrim with visible grain rather than a clean blur. |
| **Table** | Deliberately imperfect alignment: rules in `--color-border` slightly uneven, grain overlay kept subtle so data stays readable. |
| **Tooltip** | Small photocopied-looking chip, hard `--shadow-sm`, `--font-mono`. |
| **Badge** | Stamped rectangular tag in `--color-accent`, rough edge via a small `--torn-clip` variant. |
| **Toggle** | Mechanical stepped transition (`steps(4, end)`) instead of a smooth slide, echoing an analog switch. |
| **Loading** | A flickering, static-like grain overlay (`--grain-svg`) pulsing over the loading area — evokes a broken CRT/photocopier rather than a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Grain/noise overlays must stay at low opacity (≤10–15%) directly behind body text, or be excluded from text-bearing zones entirely — verify with `contrast_check.py` against the composited (grain + surface) color, not the flat token.
- `steps()` transitions and flicker/static effects can trigger discomfort for vestibular-sensitive users — gate them fully behind `prefers-reduced-motion: reduce`, falling back to instant state changes.
- "Broken legibility" type overlap is a deliberate texture on headlines only — never let critical body copy, form labels, or error text actually overlap or clip.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the grain (`--grain-svg`) subtle and consistent in density across all surfaces.
- ✅ Use torn/ragged edges (`--torn-clip`) as a recurring signature on card and panel boundaries.
- ✅ Let display type get expressive and overlapping — that's where the "broken" texture belongs.

## Don't

- ❌ Let torn edges or grain obscure body copy, form fields, or anything the user must read precisely.
- ❌ Smooth out the stepped transitions — a fluid ease undoes the mechanical/degraded feel.
- ❌ Overuse pure black/white contrast everywhere — the ink/paper palette should stay warm and slightly muddy, not stark.

## Don't confuse this with…

*Commonly confused neighbors:* swiss-punk, glitch-art.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
