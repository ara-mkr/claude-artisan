# Dieselpunk — Implementation Spec

*Aliases:* interwar retrofuturism  
*Slug:* `dieselpunk` · *Category:* retrofuturism · *Era:* 2001–present

**Origin.** Term coined ~2001; aesthetic of 1920s–1940s diesel era.

**Reference example.** BioShock; Sky Captain and the World of Tomorrow.

## Signature move(s)

Riveted steel plating: hard, near-square corners (`--radius-sm`–`--radius-lg` all under 4px), a `--rivet-dot` radial pattern stamped along panel edges, and a propaganda-poster palette of rust-red primary against olive accent. Hazard stripes (`--hazard-stripe`) mark anything urgent or interactive, like stenciled factory signage.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Interwar/WWII industrial machine age
- Art Deco + military-industrial forms
- Muted metals, propaganda-poster palette
- Streamlined engines, zeppelins, riveted steel

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dieselpunk.css`.)

```css
/* Dieselpunk — design tokens (generated from style_catalog.json) */
/* 2001–present | Term coined ~2001; aesthetic of 1920s–1940s diesel era. */
:root {
  /* color */
  --color-bg: #23201a;
  --color-surface: #2e2a22;
  --color-surface-strong: #3a352b;
  --color-border: #6b5f45;
  --color-text: #ece3cf;
  --color-text-muted: #b8ab8c;
  --color-primary: #b5461f;
  --color-accent: #8a9a5b;
  --color-rivet: #4a4436;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 3px;
  --radius-lg: 4px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.55);
  --shadow-lg: 0 10px 24px rgba(0,0,0,0.6);
  /* font */
  --font-sans: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif;
  --font-display: 'Bebas Neue', 'Oswald', sans-serif;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature gradients, composite borders, filters) */
  --rivet-dot: radial-gradient(circle at 10px 10px, var(--color-rivet) 2px, transparent 2.4px);
  --hazard-stripe: repeating-linear-gradient(45deg, var(--color-primary) 0 10px, var(--color-accent) 10px 20px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dieselpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#23201a",
        "surface": "#2e2a22",
        "surface-strong": "#3a352b",
        "border": "#6b5f45",
        "text": "#ece3cf",
        "text-muted": "#b8ab8c",
        "primary": "#b5461f",
        "accent": "#8a9a5b",
        "rivet": "#4a4436",
      },
      borderRadius: {
        "sm": "2px",
        "md": "3px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.5)",
        "md": "0 4px 10px rgba(0,0,0,0.55)",
        "lg": "0 10px 24px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Oswald'", "'Bebas Neue'", "'Arial Narrow'", "sans-serif"],
        "display": ["'Bebas Neue'", "'Oswald'", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --rivet-dot: radial-gradient(circle at 10px 10px, var(--color-rivet) 2px, transparent 2.4px);
//   --hazard-stripe: repeating-linear-gradient(45deg, var(--color-primary) 0 10px, var(--color-accent) 10px 20px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Squared `--radius-sm` block, `--color-primary` fill, `--rivet-dot` corner marks, uppercase `--font-display`; hover swaps to `--hazard-stripe` fill for destructive/urgent actions only. |
| **Input** | Flat riveted-frame field on `--color-surface`, thick `--color-border`; focus turns the border `--color-accent` — no glow, just a hard color swap. |
| **Card** | Steel-plate panel: `--color-surface`, `--rivet-dot` along the top edge, `--shadow-md`, square corners. |
| **Nav** | Riveted girder bar, uppercase `--font-display` labels tracked wide, active item underlined in `--color-primary`. |
| **Modal** | Bulkhead-hatch framing: thick border, corner rivets, `--shadow-lg`, dark scrim. |
| **Table** | Requisition-ledger styling: `--font-mono` figures, hard hairline rules, header row in `--color-surface-strong` with stenciled uppercase labels. |
| **Tooltip** | Small stenciled placard, sharp corners, `--shadow-sm`. |
| **Badge** | Hazard-stripe or solid `--color-primary` tag, square, uppercase, stenciled letterspacing. |
| **Toggle** | Industrial switch/lever metaphor: rectangular track, hard-edged knob that snaps (no easing bounce) between states. |
| **Loading** | Rotating gear cog or a marching hazard-stripe bar — mechanical, not smooth. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Rust-red primary on the dark olive/brown background needs an explicit contrast check — propaganda-poster palettes trend toward muddy mid-tones that fail AA at body-text sizes.
- Condensed display faces (`--font-display`) go illegible below ~18px — restrict them to headings and short labels, use `--font-sans` for anything longer than a phrase.
- Reserve `--hazard-stripe` for genuinely urgent/destructive states — if it's used decoratively everywhere, users can't tell what's actually a warning.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every corner near-square — dieselpunk is angular where steampunk is curved.
- ✅ Use hazard stripes as a functional warning signal, not wallpaper.
- ✅ Stencil/uppercase display type for headers and labels.

## Don't

- ❌ Round the corners or add ornate filigree — that's steampunk's territory, not this one's.
- ❌ Use bright saturated neon — the palette is muted propaganda-poster tones, not electric.
- ❌ Overuse the rivet-dot pattern as a background fill; it belongs on edges/seams.

## Don't confuse this with…

*Commonly confused neighbors:* atompunk, art-deco, steampunk.

vs atompunk: dieselpunk is 1920s–40s riveted-steel military-industrial; atompunk is 1950s–60s Googie-curved atomic optimism with chrome and pastel teal/orange. vs art-deco: art-deco is the decorative style itself (geometric ornament, gold/black luxury); dieselpunk is grittier, propaganda-poster, and utilitarian. vs steampunk: steampunk is brass/copper Victorian clockwork with curves; dieselpunk is grey steel machine-age with hard angles.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
