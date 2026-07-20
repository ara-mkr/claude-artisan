# Dada — Implementation Spec

*Aliases:* Dadaism  
*Slug:* `dada` · *Category:* historical · *Era:* 1916–1924

**Origin.** Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield).

**Reference example.** Hannah Höch photomontages; Heartfield political montage.

## Signature move(s)

Ransom-note typography — three or four clashing type families forced onto one label (monospace, serif, stencil display) — stacked on a "torn paper" rectangle that's rotated a couple degrees off true, sitting over a faint repeating newsprint-hatch texture, with a hard offset shadow (no blur) instead of a soft one. It should look assembled from scraps of found print material by chance rather than drawn by a single hand. Repeat the torn-and-rotated treatment on every surface so the whole interface reads as one cut-up composition, not a single ironic accent.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Photomontage and chance composition
- Ransom-note mixed typography
- Anti-art, absurd, provocative
- Collage of found media

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dada.css`.)

```css
/* Dada — design tokens (generated from style_catalog.json) */
/* 1916–1924 | Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield). */
:root {
  /* color */
  --color-bg: #eae4d6;
  --color-surface: #f5f1e6;
  --color-surface-strong: #ded4b8;
  --color-border: #16151a;
  --color-text: #16151a;
  --color-text-muted: #4a473f;
  --color-primary: #c21807;
  --color-accent: #e8b700;
  --color-newsprint: rgba(22, 21, 26, 0.06);
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: 2px 2px 0 var(--color-border);
  --shadow-md: 4px 3px 0 var(--color-border);
  --shadow-lg: 6px 5px 0 var(--color-border);
  /* font */
  --font-sans: 'Courier New', ui-monospace, monospace;
  --font-display: 'Times New Roman', Georgia, serif;
  --font-stencil: 'Arial Black', Impact, sans-serif;
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
  --ease-standard: linear;
  /* extra: ransom-note mixed type + torn-paper offset rotation */
  --tear-rotate-a: rotate(-1.4deg);
  --tear-rotate-b: rotate(0.9deg);
  --newsprint-texture: repeating-linear-gradient(115deg, var(--color-newsprint) 0 2px, transparent 2px 5px);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dada — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eae4d6",
        "surface": "#f5f1e6",
        "surface-strong": "#ded4b8",
        "border": "#16151a",
        "text": "#16151a",
        "text-muted": "#4a473f",
        "primary": "#c21807",
        "accent": "#e8b700",
        "newsprint": "rgba(22, 21, 26, 0.06)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "2px 2px 0 var(--color-border)",
        "md": "4px 3px 0 var(--color-border)",
        "lg": "6px 5px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Courier New'", "ui-monospace", "monospace"],
        "display": ["'Times New Roman'", "Georgia", "serif"],
        "stencil": ["'Arial Black'", "Impact", "sans-serif"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tear-rotate-a: rotate(-1.4deg);
//   --tear-rotate-b: rotate(0.9deg);
//   --newsprint-texture: repeating-linear-gradient(115deg, var(--color-newsprint) 0 2px, transparent 2px 5px);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Set in `--font-stencil`, uppercase, hard `--shadow-sm`; hover swaps rotation from `--tear-rotate-a` to `--tear-rotate-b` as if the paper scrap shifted; primary variant switches to an italic `--font-display` for ironic contrast with the stencil default. |
| **Input** | Flat `--font-sans` (typewriter monospace) field, 2px hard border, no rotation — the one steady element, since a tilted text field would be actively hostile to typing. |
| **Card** | `--newsprint-texture` background, permanently set to `--tear-rotate-b`, `--shadow-lg` — the clearest "cut-and-pasted scrap" surface in the system. |
| **Nav** | Rotated `--tear-rotate-a`, hard border, `--shadow-sm` — the whole navigation bar reads as one torn strip laid slightly askew across the top. |
| **Modal** | A rotated torn-paper panel over a flat newsprint-textured scrim; close affordance styled as a rubber-stamp mark rather than a clean icon button. |
| **Table** | Hard-ruled grid, but mix `--font-mono` headers with `--font-display` for the caption — inconsistency at the type level while keeping cell alignment functional. |
| **Tooltip** | Small stenciled label, hard shadow, slight rotation — short enough that ransom-note mixing stays legible. |
| **Badge** | `--color-accent` fill, hard border, rotated `-2deg`, set in `--font-display` italic — a stamped, provisional look. |
| **Toggle** | Track and knob both hard-bordered rectangles/circles (not smooth pills), state change is an instant `linear` snap — no easing, echoing chance/mechanical composition over craft. |
| **Loading** | A stack of torn scraps that shuffle position (chance composition) instead of a smooth linear bar. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Ransom-note type mixing must stop at headlines, badges, and buttons — never mix three fonts inside one sentence of body copy or form instructions; keep paragraphs in a single legible face (`--font-sans`).
- Rotation (`--tear-rotate-a/b`) should never exceed a couple degrees and must never be applied to input fields or anything the user needs to read character-by-character while typing.
- `--color-primary` (a strong red) and `--color-accent` (ochre) on the warm `--color-bg`/`--color-surface` tones both need contrast verification — run `contrast_check.py` on every text/fill pairing before shipping, since Dada's deliberately "found" palette wasn't designed for accessibility.
- Keep the `--newsprint-texture` hatch at very low opacity behind any text block, or move text off the texture entirely onto a flat `--color-surface` patch.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Mix 2–3 clashing type families (stencil, serif, monospace) across chrome elements, never within one line of body text.
- ✅ Keep rotation small and inconsistent per-element — no two torn scraps should tilt identically.
- ✅ Use hard offset shadows (`--shadow-sm/md/lg`) everywhere instead of blurred ones, to keep the cut-paper feel.

## Don't

- ❌ Rotate or ransom-note-mix an input field, form label, or any text the user must read precisely.
- ❌ Let the newsprint texture sit directly under body text at full strength.
- ❌ Round any corner — Dada's torn-paper edges are always straight, just off-axis.

## Don't confuse this with…

*Commonly confused neighbors:* dadaist-web, punk-zine. vs dadaist-web: dadaist-web pushes the same chance/collage logic into deliberately broken web-native chrome (overlapping z-index, glitch cursors, marquee text); this spec stays print-collage rooted — torn paper, typewriter type, rubber stamps. vs punk-zine: punk zine culture is a direct descendant (photocopier grain, cut-and-tape lettering) but is explicitly anti-establishment/DIY in tone; Dada is earlier, more absurdist and philosophical (anti-art as protest against WWI-era rationalism) than punk's anti-authority stance.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
