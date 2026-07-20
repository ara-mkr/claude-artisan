# Stonepunk — Implementation Spec

*Aliases:* prehistoric punk  
*Slug:* `stonepunk` · *Category:* retrofuturism · *Era:* 2000s–present

**Origin.** Punk genre using stone-age technology.

**Reference example.** The Flintstones; The Croods.

## Signature move(s)

A carved-stone surface: `--shadow-carve`'s inset shadow reads like a chiseled recess in limestone, finished with a `--daub-texture` diagonal hatch (cave-tool scratch marks) and the occasional `--char-mark` soot smudge fading from a burnt edge. Every surface looks hand-carved out of rock or daubed with ochre pigment — nothing is smooth, printed, or machined.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Stone, bone, wood 'technology'
- Earthy, rough, primitive materials
- Cave-painting motifs
- Anachronistic prehistoric tech

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/stonepunk.css`.)

```css
/* Stonepunk — design tokens (generated from style_catalog.json) */
/* 2000s–present | Punk genre using stone-age technology. */
:root {
  /* color */
  --color-bg: #d8c9a8;
  --color-surface: #cabb96;
  --color-surface-strong: #b8a67d;
  --color-border: #7a6242;
  --color-text: #2c2013;
  --color-text-muted: #52422b;
  --color-primary: #8a3b1f;
  --color-accent: #4a6b4a;
  --color-ochre: #b5772b;
  --color-char: #2c2013;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 5px;
  --radius-lg: 9px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 3px rgba(44,32,19,0.35);
  --shadow-md: 0 5px 10px rgba(44,32,19,0.4);
  --shadow-lg: 0 12px 22px rgba(44,32,19,0.45);
  --shadow-carve: inset 0 2px 3px rgba(44,32,19,0.4), inset 0 -1px 0 rgba(255,247,224,0.15);
  /* font */
  --font-sans: 'Rockwell', 'Roboto Slab', Georgia, serif;
  --font-display: 'Rock Salt', 'Kalam', 'Rockwell', serif;
  --font-mono: 'Courier Prime', ui-monospace, monospace;
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
  --daub-texture: repeating-linear-gradient(115deg, rgba(44,32,19,0.06) 0px, rgba(44,32,19,0.06) 2px, transparent 2px, transparent 6px);
  --char-mark: linear-gradient(180deg, rgba(44,32,19,0.08), transparent 60%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Stonepunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d8c9a8",
        "surface": "#cabb96",
        "surface-strong": "#b8a67d",
        "border": "#7a6242",
        "text": "#2c2013",
        "text-muted": "#52422b",
        "primary": "#8a3b1f",
        "accent": "#4a6b4a",
        "ochre": "#b5772b",
        "char": "#2c2013",
      },
      borderRadius: {
        "sm": "2px",
        "md": "5px",
        "lg": "9px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 3px rgba(44,32,19,0.35)",
        "md": "0 5px 10px rgba(44,32,19,0.4)",
        "lg": "0 12px 22px rgba(44,32,19,0.45)",
        "carve": "inset 0 2px 3px rgba(44,32,19,0.4), inset 0 -1px 0 rgba(255,247,224,0.15)",
      },
      fontFamily: {
        "sans": ["'Rockwell'", "'Roboto Slab'", "Georgia", "serif"],
        "display": ["'Rock Salt'", "'Kalam'", "'Rockwell'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --daub-texture: repeating-linear-gradient(115deg, rgba(44,32,19,0.06) 0px, rgba(44,32,19,0.06) 2px, transparent 2px, transparent 6px);
//   --char-mark: linear-gradient(180deg, rgba(44,32,19,0.08), transparent 60%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` (rust-ochre) fill with `--shadow-carve`'s inset chisel effect, `--radius-sm` rough-hewn corners; hover deepens the carve, active flattens it to look pressed into stone. |
| **Input** | `--color-surface-strong` slab, `--daub-texture` hatch faintly visible, `--shadow-carve` inset border; focus swaps to a solid `--color-primary` outline. |
| **Card** | The hero: `--color-surface` stone slab, `--daub-texture` overlay, `--char-mark` smudge in one corner, `--shadow-md`, `--radius-md`. |
| **Nav** | Heavy `--color-surface-strong` bar carved with `--shadow-carve`, active link marked with an ochre daub underline. |
| **Modal** | Large carved-stone tablet panel, `--shadow-lg`, `--char-mark` framing the header like a torch-smoked border. |
| **Table** | Flat `--color-surface` rows with `--color-border` (dark umber) rules; header row gets the daub-texture treatment. |
| **Tooltip** | Small carved chip on `--color-surface-strong`, `--shadow-sm`. |
| **Badge** | Rough circular/oval pill in `--color-ochre` or `--color-accent`, no gloss. |
| **Toggle** | Carved-stone track (`--shadow-carve`); on-state fills with `--color-primary`, off stays bare stone. |
| **Loading** | A hand slowly "chiseling" a progress bar, or a soot-smudge (`--char-mark`) spreading across a skeleton block. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The palette is entirely earth-toned (tan/ochre/umber) with low hue separation — verify `--color-primary` and `--color-accent` against `--color-bg` with `contrast_check.py` since warm-on-warm combinations often under-perform on contrast.
- Keep the `--daub-texture` hatch and `--char-mark` smudge at low opacity behind text-bearing areas — texture must never compete with `--color-text` for legibility.
- `--font-display` (Rock Salt / Kalam, a handwritten cave-scrawl face) should stay to short headlines only; body copy must use `--font-sans` (Rockwell/Roboto Slab) for readability.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Carve every raised surface with the inset `--shadow-carve` rather than a normal drop shadow.
- ✅ Keep corners rough and slightly irregular (`--radius-sm`/`--radius-md`), never crisp or uniform.
- ✅ Use ochre/char accents sparingly, like actual pigment marks on stone.

## Don't

- ❌ Introduce metal, glass, or glossy finishes — stonepunk technology is stone, bone, and wood only.
- ❌ Use a cool or desaturated palette — warmth (tan/ochre/umber) is essential to the "sun-baked earth" feel.
- ❌ Overuse the handwritten display font for long text — it's a cave-scrawl accent, not a body face.

## Don't confuse this with…

*Commonly confused neighbors:* steampunk.

vs steampunk: steampunk is Victorian-industrial (brass, steam, gears); stonepunk is prehistoric (stone, bone, wood, ochre pigment) with no metal or steam technology at all.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
