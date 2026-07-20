# Weirdcore — Implementation Spec

*Aliases:* strangecore  
*Slug:* `weirdcore` · *Category:* niche · *Era:* 2020–present

**Origin.** Unsettling amateur-photo internet aesthetic.

**Reference example.** Weirdcore image boards.

## Signature move(s)

Faded disposable-camera photograph energy: a desaturated `--grain-filter` (`contrast(1.05) saturate(0.75) brightness(0.98)`) applied over every image/surface, a slight `--tilt-off` rotation on cards as if scanned crookedly, and a red Impact-font `--arrow-overlay` ("→") pointing at things that shouldn't need pointing at. Sickly yellow-green (`--color-sickly`) appears as an accidental accent, never intentional decoration.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Low-quality nostalgic photos, distorted
- Deliberately 'off', eerie, uncanny
- Text overlays, arrows, dream-logic
- Nostalgic dread

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/weirdcore.css`.)

```css
/* Weirdcore — design tokens (generated from style_catalog.json) */
/* 2020–present | Unsettling amateur-photo internet aesthetic. */
:root {
  /* color */
  --color-bg: #d8d3c4;
  --color-surface: #eae5d6;
  --color-surface-strong: #f4f0e4;
  --color-border: #6b6558;
  --color-text: #201f1a;
  --color-text-muted: #55523f;
  --color-primary: #c23b3b;
  --color-accent: #3b6fc2;
  --color-sickly: #a8b23f;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(0,0,0,0.3);
  --shadow-md: 0 3px 0 rgba(0,0,0,0.3);
  --shadow-lg: 0 6px 10px rgba(0,0,0,0.35);
  /* font */
  --font-sans: 'Times New Roman', 'Georgia', serif;
  --font-display: 'Impact', 'Arial Narrow', sans-serif;
  --font-mono: 'Courier New', monospace;
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
  --ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
  /* extra (signature gradients, composite borders, filters) */
  --grain-filter: contrast(1.05) saturate(0.75) brightness(0.98);
  --tilt-off: rotate(-0.6deg);
  --arrow-overlay: "→";
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Weirdcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d8d3c4",
        "surface": "#eae5d6",
        "surface-strong": "#f4f0e4",
        "border": "#6b6558",
        "text": "#201f1a",
        "text-muted": "#55523f",
        "primary": "#c23b3b",
        "accent": "#3b6fc2",
        "sickly": "#a8b23f",
      },
      borderRadius: {
        "sm": "2px",
        "md": "2px",
        "lg": "2px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(0,0,0,0.3)",
        "md": "0 3px 0 rgba(0,0,0,0.3)",
        "lg": "0 6px 10px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "sans": ["'Times New Roman'", "'Georgia'", "serif"],
        "display": ["'Impact'", "'Arial Narrow'", "sans-serif"],
        "mono": ["'Courier New'", "monospace"],
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
        "standard": "cubic-bezier(0.6, 0, 0.4, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grain-filter: contrast(1.05) saturate(0.75) brightness(0.98);
//   --tilt-off: rotate(-0.6deg);
//   --arrow-overlay: "→";
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat 2px-radius rectangle, `--shadow-sm` hard 1px offset, red Impact-style label; sits slightly `--tilt-off`. |
| **Input** | Faded surface field, `--grain-filter` applied to the whole form area, no soft focus ring — a thick blue outline appears abruptly instead. |
| **Card** | The hero: photo-like surface with `--grain-filter`, a barely-perceptible `--tilt-off` rotation, and a red `--arrow-overlay` pointing at one element as if annotated. |
| **Nav** | Understated, almost too plain — Times New Roman links on the faded bg, unsettling in its normalcy. |
| **Modal** | Appears abruptly (no fade), grainy backdrop, off-center by a few px rather than perfectly centered. |
| **Table** | Slightly misaligned columns (1-2px jitter per row) — orderly but subtly wrong. |
| **Tooltip** | A red Impact-font caption, like a found photo's scrawled annotation. |
| **Badge** | A small `--color-sickly` tag that looks accidental, like a compression artifact got a label. |
| **Toggle** | A plain checkbox-style toggle, unnervingly literal — no smooth animation, just an instant snap. |
| **Loading** | A frozen/stuttering single frame rather than a smooth spinner — deliberately janky (respect reduced-motion by holding the still frame). |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The faded, desaturated `--grain-filter` palette can push real content below contrast minimums — verify `--color-text` on `--color-bg`/`--color-surface` with `contrast_check.py` and never apply the grain filter to text layers themselves, only to photo/decorative layers.
- Jittery/misaligned layouts and abrupt (non-eased) transitions must respect `prefers-reduced-motion` — provide a calm, aligned fallback state.
- Keep the "off" feeling cosmetic: never rely on the deliberately awkward tilt/jitter for anything a screen reader or keyboard user needs to parse structurally.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Apply the grain filter and slight tilt consistently across photo/card surfaces so the unease feels systemic, not random.
- ✅ Use the red arrow/Impact-caption motif sparingly — one or two per view, like a found-photo annotation.
- ✅ Keep real UI structure (nav, forms) plain and almost boringly normal — the wrongness should live in the imagery, not break usability.

## Don't

- ❌ Push the tilt/jitter far enough to disorient or nauseate — this is "slightly off," not glitch-art chaos.
- ❌ Apply the grain/desaturation filter to text — it must stay decorative-only.
- ❌ Explain the eeriness with heavy copy — weirdcore works through visual dissonance, not narration.

## Don't confuse this with…

*Commonly confused neighbors:* dreamcore, liminal-spaces.

vs dreamcore: dreamcore is softer, hazier, glowing and surreal; weirdcore is flatter, grainier, and more aggressively "found-photo" wrong. vs liminal-spaces: liminal-spaces is about empty architectural spaces and fluorescent light; weirdcore is about distorted amateur photography and text-overlay dream-logic, populated or not.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
