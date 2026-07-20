# Blackletter / Gothic Type — Implementation Spec

*Aliases:* Fraktur, Old English, gothic script  
*Slug:* `blackletter` · *Category:* historical · *Era:* 1150–1500 (revived)

**Origin.** Medieval European calligraphy; Gutenberg's type.

**Reference example.** The New York Times masthead; metal-band logos.

## Signature move(s)

A heavy double-rule border (`--rule-double: 3px double var(--color-accent)`) — an illuminated-manuscript-style frame reduced to type-only ink — wraps the nav, every card, and the primary button, so the page reads as one masthead rather than a set of unrelated panels. Display text sits in a Fraktur-flavored face (`--font-display: 'UnifrakturMaguntia'`) reserved strictly for short headline words, while everything else — body copy, buttons, labels — stays in a readable serif (`--font-sans: 'Century Old Style'`) so the dense, angular, condensed blackletter mood never compromises actual reading. A faint radial `--texture-vellum` wash sits behind the whole page like aged paper catching low light.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dense angular condensed letterforms
- Ornate capitals, heavy vertical strokes
- Newspaper mastheads, tattoo, metal-band use
- Solemn, historic, dramatic

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/blackletter.css`.)

```css
/* Blackletter / Gothic Type — design tokens (generated from style_catalog.json) */
/* 1150–1500 (revived) | Medieval European calligraphy; Gutenberg's type. */
:root {
  /* color */
  --color-bg: #14110d;
  --color-surface: #1e1a13;
  --color-surface-strong: #29231a;
  --color-border: #6b5b3a;
  --color-text: #ece4d0;
  --color-text-muted: #b9ac8a;
  --color-primary: #a8232f;
  --color-accent: #c9a227;
  /* radius: blackletter is all sharp condensed strokes, no soft corners */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(0,0,0,0.6);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.55);
  --shadow-lg: 0 10px 28px rgba(0,0,0,0.6);
  /* font: a Fraktur-flavored display face over a readable body serif */
  --font-sans: 'Century Old Style', Georgia, 'Iowan Old Style', serif;
  --font-display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra: illuminated double-rule border + drop-cap gold vein */
  --rule-double: 3px double var(--color-accent);
  --masthead-rule: linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%);
  --texture-vellum: radial-gradient(120% 90% at 50% -10%, rgba(201,162,39,0.08), transparent 60%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Blackletter / Gothic Type — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#14110d",
        "surface": "#1e1a13",
        "surface-strong": "#29231a",
        "border": "#6b5b3a",
        "text": "#ece4d0",
        "text-muted": "#b9ac8a",
        "primary": "#a8232f",
        "accent": "#c9a227",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(0,0,0,0.6)",
        "md": "0 4px 12px rgba(0,0,0,0.55)",
        "lg": "0 10px 28px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Century Old Style'", "Georgia", "'Iowan Old Style'", "serif"],
        "display": ["'UnifrakturMaguntia'", "'Old English Text MT'", "'Cloister Black'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --rule-double: 3px double var(--color-accent);
//   --masthead-rule: linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%);
//   --texture-vellum: radial-gradient(120% 90% at 50% -10%, rgba(201,162,39,0.08), transparent 60%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | 1px `--color-border` outline, `--color-surface-strong` fill, `--shadow-sm`; `btn--primary` swaps to the full `--rule-double` frame and crimson fill — the primary action gets the masthead treatment, secondary actions stay quieter. |
| **Input** | 2px `--color-border`, sharp square corners, body serif type only — never the display face, since Fraktur digits/letters are illegible in a live input. |
| **Card** | `--rule-double` border, `--shadow-md`; card headings (`h3`) use `--font-display` at heading scale only, body copy inside stays on `--font-sans`. |
| **Nav** | `--rule-double` as the bottom rule; the logotype/masthead text alone gets `--font-display` at `--text-xl`, nav links stay in `--font-sans`. |
| **Modal** | Full `--rule-double` frame, `--shadow-lg`, over a near-black scrim — the heaviest "masthead" moment on the page, reserved for the one modal at a time. |
| **Table** | `--masthead-rule` gradient as a 2px top border on the header row only; body rows use plain 1px `--color-border` hairlines so dense data stays scannable. |
| **Tooltip** | Small chip, 1px `--color-accent` border, `--font-sans` only — tooltips carry critical short text and cannot afford Fraktur's illegibility at small sizes. |
| **Badge** | Uppercase `--font-sans` (not display), `--color-primary` fill, 1px accent border, letter-spacing — reads as a wax-seal date stamp ("Est. MCDLV"). |
| **Toggle** | Square track (radius 0) with 1px border; knob is a square accent block that steps between states rather than sliding smoothly. |
| **Loading** | `--masthead-rule` gradient bar filling left to right against the square track — a printing-press ink roller pass. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Never set body copy, form labels, input text, or anything below `--text-2xl` in the Fraktur-flavored `--font-display` — genuine blackletter fails legibility at small sizes and for anyone unfamiliar with the script; restrict it to standalone headline words of a few characters.
- The dark palette (`--color-bg` near-black) with muted gold accents can drop below 4.5:1 for body text — always pair `--color-text` (not `--color-text-muted`) with `--color-bg`/`--color-surface`, and verify with `contrast_check.py`.
- The `--texture-vellum` radial wash must stay subtle (under ~10% opacity) and never sit directly behind small text — check contrast with the texture composited in, not just the flat background color.
- Provide a non-color state indicator alongside the crimson/gold distinction (icon, text, or pattern) for colorblind users, since the palette leans on a single warm hue family.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `--font-display` for short masthead words and card headings only.
- ✅ Repeat `--rule-double` on nav, primary button, card, and modal so it reads as one system.
- ✅ Keep corners perfectly square (`radius: 0`) everywhere — it's core to the condensed, angular mood.

## Don't

- ❌ Set body copy, inputs, or table data in the Fraktur-flavored display face.
- ❌ Round any corner — a single soft radius breaks the woodcut/type-metal illusion.
- ❌ Let `--texture-vellum` or dark-on-dark combinations sit behind text without a contrast check.

## Don't confuse this with…

*Commonly confused neighbors:* goth, illuminated-manuscript.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
