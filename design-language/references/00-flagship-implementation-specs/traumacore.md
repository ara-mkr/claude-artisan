# Traumacore — Implementation Spec

*Aliases:* traumcore  
*Slug:* `traumacore` · *Category:* niche · *Era:* 2020–present

**Origin.** Bittersweet childhood-nostalgia-with-pain aesthetic.

**Reference example.** Traumacore edits (sensitive-content subculture).

## Signature move(s)

A hard, hand-scrawled black `--scrawl-border` ring on soft candy-pastel surfaces, paired with a hard-offset black `--shadow-*` (no blur, pure offset like a sticker peeling off paper) — the deliberate collision of childlike softness and a harsh, marker-drawn edge is the whole style. A `--faded-photo` filter (sepia + desaturation) sits over any imagery to suggest an old, worn snapshot re-surfacing.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Childlike imagery (stickers, pastel) + heavy text
- Faded nostalgic photos
- Juxtaposition of innocence and distress
- Emotionally raw

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/traumacore.css`.)

```css
/* Traumacore — design tokens (generated from style_catalog.json) */
/* 2020–present | Bittersweet childhood-nostalgia-with-pain aesthetic. */
:root {
  /* color */
  --color-bg: #f5e1ea;
  --color-surface: #fdf3f7;
  --color-surface-strong: #efd0de;
  --color-border: #1a1a1a;
  --color-text: #1a1a1a;
  --color-text-muted: #6b5560;
  --color-primary: #ff4d6d;
  --color-accent: #9ec9e8;
  --color-sticker: #fff27a;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 2px 2px 0 #1a1a1a;
  --shadow-md: 4px 4px 0 #1a1a1a;
  --shadow-lg: 6px 6px 0 #1a1a1a;
  /* font */
  --font-sans: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif;
  --font-display: 'Permanent Marker', 'Caveat', cursive;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra: harsh scrawled black border on soft pastel — a hard-edged hand-drawn
     ring juxtaposed against candy-pink surfaces, plus a faded-photo grain filter */
  --scrawl-border: 3px solid #1a1a1a;
  --faded-photo: sepia(0.15) contrast(0.92) brightness(1.04) saturate(1.1);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Traumacore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5e1ea",
        "surface": "#fdf3f7",
        "surface-strong": "#efd0de",
        "border": "#1a1a1a",
        "text": "#1a1a1a",
        "text-muted": "#6b5560",
        "primary": "#ff4d6d",
        "accent": "#9ec9e8",
        "sticker": "#fff27a",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 2px 0 #1a1a1a",
        "md": "4px 4px 0 #1a1a1a",
        "lg": "6px 6px 0 #1a1a1a",
      },
      fontFamily: {
        "sans": ["'Comic Neue'", "'Chalkboard'", "'Comic Sans MS'", "sans-serif"],
        "display": ["'Permanent Marker'", "'Caveat'", "cursive"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scrawl-border: 3px solid #1a1a1a;
//   --faded-photo: sepia(0.15) contrast(0.92) brightness(1.04) saturate(1.1);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-sticker` yellow or `--color-primary` fill, `--scrawl-border`, `--shadow-sm` hard offset; active state removes the shadow and shifts the button 2px to fake a "pressed sticker" feel. |
| **Input** | `--color-surface` fill with `--scrawl-border`, no radius softness beyond `--radius-sm`; placeholder text in `--color-text-muted` reads like a diary prompt. |
| **Card** | The hero surface: `--color-surface-strong` fill, `--scrawl-border`, `--shadow-md` hard offset, often holding a `--faded-photo`-filtered image — innocence and harshness on the same surface. |
| **Nav** | Thin bar with `--scrawl-border` bottom edge only, `--color-sticker` accent tab for the active item, like a taped-on nametag. |
| **Modal** | Larger `--shadow-lg` offset card, `--scrawl-border`, centered on a dimmed `--color-bg` — feels like a diary page pulled forward. |
| **Table** | Keep grid lines as thin `--scrawl-border`-style hairlines, not full black; rows alternate `--color-surface` / `--color-surface-strong`. |
| **Tooltip** | Small sticker-note shape: `--color-sticker` fill, `--scrawl-border`, `--shadow-sm`. |
| **Badge** | Circular or pill sticker in `--color-primary` or `--color-accent`, `--scrawl-border` outline — like a school sticker-chart reward. |
| **Toggle** | Track in `--color-surface-strong` with `--scrawl-border`, knob in `--color-primary`; deliberately a little wobbly/imprecise in transform, not perfectly centered. |
| **Loading** | A hand-drawn-feeling scribble spinner or a sticker that wiggles — avoid smooth corporate spinners entirely. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- This aesthetic intentionally handles emotionally sensitive subject matter — never use it for content warnings, crisis resources, or safety-critical flows where a scrawled/faded treatment could undercut clarity or trivialize distress; keep those flows on a plain, calm system UI.
- `--color-text` (#1a1a1a) on `--color-bg` pastel passes contrast, but keep hand-lettered `--font-display` script to short labels only — never body copy, since scrawl/cursive fonts fail legibility at small sizes.
- The hard-offset `--shadow-*` values have no blur and can look like a stray artifact to screen users relying on high-contrast mode; ensure focus-visible states still get a real, unambiguous outline in addition to the shadow.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Pair every soft pastel surface with the same hard black `--scrawl-border` for the signature contrast.
- ✅ Apply `--faded-photo` consistently to any photographic imagery so it reads as one aged collection.
- ✅ Keep hand-drawn/script type to short accents — headers, stickers, stamps.

## Don't

- ❌ Use this style for actual crisis-support or safety-critical UI — its emotional register is wrong for those contexts.
- ❌ Smooth out the hard-offset shadows into soft blurred ones — that erases the "sticker" signature.
- ❌ Set long body paragraphs in the scrawl/marker display font.

## Don't confuse this with…

*Commonly confused neighbors:* weirdcore, kidcore.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
