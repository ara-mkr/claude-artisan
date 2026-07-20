# Op Art — Implementation Spec

*Aliases:* Optical Art  
*Slug:* `op-art` · *Category:* historical · *Era:* 1960s

**Origin.** Bridget Riley, Victor Vasarely.

**Reference example.** Bridget Riley's *Movement in Squares*; Vasarely's geometric grids.

## Signature move(s)

A precise, machine-regular repeating black-and-white stripe or concentric-ring pattern (`--stripe-pattern`, `--concentric-pattern`) applied as a border, background fill, or hover state so the eye keeps re-registering false motion where nothing is actually moving. Interaction feedback snaps in discrete frames (`steps(6, end)`) rather than easing smoothly — the interface should feel like it's flickering between fixed optical states, the way Riley's canvases seem to pulse without a single moving pixel.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Black-and-white (or vibrating color) geometric patterns
- Illusions of motion, depth, and warping
- Precise repetition of lines/shapes
- Perceptual, hypnotic effects

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/op-art.css`.)

```css
/* Op Art — design tokens (generated from style_catalog.json) */
/* 1960s | Bridget Riley, Victor Vasarely. */
:root {
  /* color: near-monochrome, high-contrast vibration */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-strong: #f0f0f0;
  --color-border: #0a0a0a;
  --color-text: #0a0a0a;
  --color-text-muted: #4a4a4a;
  --color-primary: #0a0a0a;
  --color-accent: #e10600;
  /* radius: precise geometry, no softness */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 0 rgba(0,0,0,0);
  --shadow-md: 0 6px 0 rgba(10,10,10,1);
  --shadow-lg: 0 10px 0 rgba(10,10,10,1);
  /* font */
  --font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-display: 'Futura', 'Helvetica Neue', sans-serif;
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
  --ease-standard: steps(6, end);
  /* extra: repeating-stripe pattern that vibrates at edges */
  --stripe-pattern: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 6px, #ffffff 6px, #ffffff 12px);
  --stripe-pattern-tight: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 3px, #ffffff 3px, #ffffff 6px);
  --concentric-pattern: repeating-radial-gradient(circle at 50% 50%, #0a0a0a 0px, #0a0a0a 4px, #ffffff 4px, #ffffff 8px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Op Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f0f0f0",
        "border": "#0a0a0a",
        "text": "#0a0a0a",
        "text-muted": "#4a4a4a",
        "primary": "#0a0a0a",
        "accent": "#e10600",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 rgba(0,0,0,0)",
        "md": "0 6px 0 rgba(10,10,10,1)",
        "lg": "0 10px 0 rgba(10,10,10,1)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        "display": ["'Futura'", "'Helvetica Neue'", "sans-serif"],
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
        "standard": "steps(6, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --stripe-pattern: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 6px, #ffffff 6px, #ffffff 12px);
//   --stripe-pattern-tight: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 3px, #ffffff 3px, #ffffff 6px);
//   --concentric-pattern: repeating-radial-gradient(circle at 50% 50%, #0a0a0a 0px, #0a0a0a 4px, #ffffff 4px, #ffffff 8px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Plain surface at rest; hover fills with `--stripe-pattern-tight` (the denser stripe, so the vibration reads at button scale) and flips text to white; `steps(6, end)` transition makes the swap feel like a strobe cut, not a fade. |
| **Input** | 3px black border, flat white fill (patterns stay off text-entry fields entirely — they'd fight legibility); focus ring uses `--color-accent` at full opacity, no pattern. |
| **Card** | Solid border + a `--stripe-pattern` band along the top edge only, so the vibration is a framing device rather than covering the whole surface. |
| **Nav** | `border-image: var(--stripe-pattern)` as the bottom border — a thin vibrating rule separating chrome from content. |
| **Modal** | Flat white panel, hard border, no pattern inside the content area; the scrim behind it can carry `--concentric-pattern` at low density since no one reads text through it. |
| **Table** | Hard-ruled grid with alternating stripe-pattern header cells; body rows stay flat white/`--surface-strong` so data stays legible — pattern is decoration for structure, not for content rows. |
| **Tooltip** | Flat black fill, white text, no pattern — tooltips carry critical text and must stay maximally legible. |
| **Badge** | Small pill with a `--stripe-pattern-tight` fill and white text, or a solid `--color-accent` fill for status badges that need to be read at a glance. |
| **Toggle** | Track alternates between flat black (off) and `--color-accent` (on) — no pattern on the track since state must be instantly unambiguous; knob is a plain white circle. |
| **Loading** | A `--concentric-pattern` ring that appears to spin via `steps()` frame-jumps rather than smooth rotation — a literal optical-illusion spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- High-frequency black/white stripe and concentric patterns are a documented photosensitive-seizure trigger risk — never animate the patterns themselves (no scrolling, pulsing, or rotating stripe fills), and cap any pattern-swap transition to a single discrete `steps()` frame change, not a rapid repeated flicker.
- Under `prefers-reduced-motion: reduce`, disable the `steps()` transition entirely and fall back to an instant state change — do not substitute a smoothed animation, since smooth motion over a stripe pattern can itself trigger the illusion.
- Keep all patterns off text-bearing surfaces (inputs, tooltips, table body rows, paragraph backgrounds) — reserve them for borders, headers, and non-text chrome only, and verify text contrast with `contrast_check.py` on every surface that does carry a pattern edge.
- Provide a `prefers-reduced-motion` and, where feasible, a user-facing "reduce patterns" toggle that swaps stripe fills for flat `--color-surface-strong`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the palette near-monochrome (black/white plus one accent red) so the optical effect stays sharp.
- ✅ Reserve patterns for borders, headers, and hover states — never under running text.
- ✅ Use `steps()` easing for pattern-related transitions so swaps feel like discrete optical frames, not smooth motion.

## Don't

- ❌ Animate or scroll a stripe/concentric pattern continuously — this is a real seizure-trigger risk.
- ❌ Put body text or form labels directly over a striped background.
- ❌ Soften the style with rounded corners or shadows — Op Art is hard-edged and flat by definition.

## Don't confuse this with…

*Commonly confused neighbors:* pop-art, psychedelic. vs Pop Art: Pop Art (Warhol, Lichtenstein) is about mass-media imagery, bright flat color, and irony; Op Art has no imagery at all — it's pure abstract geometry engineered to trick the eye. vs psychedelic: psychedelic design uses warped type, saturated rainbow color, and organic swirls to evoke altered perception; Op Art achieves a perceptual effect through cold, precise, mathematically repeating black-and-white geometry, not color or organic distortion.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
