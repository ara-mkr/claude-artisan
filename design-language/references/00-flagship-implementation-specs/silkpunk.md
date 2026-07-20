# Silkpunk — Implementation Spec

*Aliases:* East-Asian retrofuturism
*Slug:* `silkpunk` · *Category:* retrofuturism · *Era:* 2015–present

**Origin.** Coined by Ken Liu; East-Asian-inspired bio/mechanical tech.

**Reference example.** Ken Liu "The Grace of Kings".

## Signature move(s)

A diagonal silk-sheen highlight (`--silk-sheen`, a soft translucent band swept across the surface) layered over warm paper/lacquer tones, with asymmetric radii (`--radius-lg: 32px 8px 32px 8px`) that evoke a folded kite or lacquered box rather than a uniform rounded rectangle. A 4px lacquer-red bar (`--lacquer-bar`) marks primary emphasis, like a painted seal.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Bamboo, silk, paper, lacquer materials
- Organic bio-mechanics (airships, kites)
- Classical Chinese/Asian motifs
- Elegant, flowing, nature-integrated tech

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/silkpunk.css`.)

```css
/* Silkpunk — design tokens (generated from style_catalog.json) */
/* 2015–present | Coined by Ken Liu; East-Asian-inspired bio/mechanical tech. */
:root {
  /* color */
  --color-bg: #f3ead9;
  --color-surface: #faf6ec;
  --color-surface-strong: #ece0c6;
  --color-border: #cbb98c;
  --color-text: #2b241c;
  --color-text-muted: #6c5f4c;
  --color-primary: #a3282c;
  --color-accent: #4f7a67;
  --color-lacquer: #7a1518;
  /* radius (asymmetric, kite-fold corners) */
  --radius-sm: 4px;
  --radius-md: 14px;
  --radius-lg: 32px 8px 32px 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(43, 36, 28, 0.12);
  --shadow-md: 0 8px 18px rgba(43, 36, 28, 0.14);
  --shadow-lg: 0 18px 36px rgba(43, 36, 28, 0.16);
  /* font */
  --font-sans: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif;
  --font-display: 'Noto Serif SC', 'Songti SC', Georgia, serif;
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
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  /* extra (lacquer seal bar + silk sheen) */
  --lacquer-bar: 4px solid var(--color-lacquer);
  --silk-sheen: linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 80%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Silkpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ead9",
        "surface": "#faf6ec",
        "surface-strong": "#ece0c6",
        "border": "#cbb98c",
        "text": "#2b241c",
        "text-muted": "#6c5f4c",
        "primary": "#a3282c",
        "accent": "#4f7a67",
        "lacquer": "#7a1518",
      },
      borderRadius: {
        "sm": "4px", "md": "14px", "lg": "32px 8px 32px 8px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(43, 36, 28, 0.12)",
        "md": "0 8px 18px rgba(43, 36, 28, 0.14)",
        "lg": "0 18px 36px rgba(43, 36, 28, 0.16)",
      },
      fontFamily: {
        "sans": ["'Noto Sans SC'", "'Noto Sans'", "system-ui", "sans-serif"],
        "display": ["'Noto Serif SC'", "'Songti SC'", "Georgia", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};

// Signature lacquer-bar/silk-sheen tokens are CSS-only:
//   --lacquer-bar: 4px solid var(--color-lacquer);
//   --silk-sheen: linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 80%);
// Apply --silk-sheen as an overlay pseudo-element swept diagonally across cards.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, lacquer-red `--color-primary` fill, `--silk-sheen` overlay for a subtle woven glint; hover intensifies the sheen sweep. |
| **Input** | Paper `--color-surface` fill, `--color-border` outline, `--radius-sm`; focus ring in `--color-accent` jade. |
| **Card** | The hero: `--color-surface`, `--radius-lg` asymmetric fold, `--silk-sheen` diagonal highlight, `--lacquer-bar` as a left accent stripe, `--shadow-md`. |
| **Nav** | Paper bar with a thin `--lacquer-bar` bottom accent; `--font-display` serif wordmark. |
| **Modal** | `--radius-lg` asymmetric panel, `--silk-sheen`, `--shadow-lg`, `--lacquer-bar` header accent. |
| **Table** | Flat `--color-surface`/`--color-surface-strong` banding, no sheen (keeps data legible), thin `--color-border` rules. |
| **Tooltip** | Small paper chip, `--color-border`, `--font-sans` label, `--shadow-sm`. |
| **Badge** | Asymmetric small pill (`--radius-md`), `--color-accent` jade or `--color-lacquer` fill. |
| **Toggle** | Paper track with `--color-border`, lacquer-red knob when on, faint `--silk-sheen` across the track. |
| **Loading** | A slow diagonal `--silk-sheen` sweep across a skeleton block, or a folding-kite-style rotating glyph in `--color-accent`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The warm paper-on-paper palette (`--color-bg` vs `--color-surface-strong`) needs contrast verification — default body text to `--color-text` on `--color-surface`.
- `--silk-sheen` is an animated/gradient overlay — respect `prefers-reduced-motion` by freezing or removing the sweep animation, and ensure it never reduces text contrast where it crosses a text block.
- Asymmetric radii (`--radius-lg`) can visually imply direction/hierarchy unintentionally — keep the same fold orientation across all cards for consistency, not mirrored at random.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the asymmetric fold radius consistent in orientation across every card-like surface.
- ✅ Use the lacquer-red bar sparingly as a seal/emphasis mark, not a full-surface fill.
- ✅ Let the silk sheen stay subtle and diagonal — a whisper of light, not a visible stripe.

## Don't

- ❌ Symmetrize the radius into a plain rounded rectangle — the asymmetry is the signature.
- ❌ Overuse jade/lacquer together at full saturation in the same component — let one lead.
- ❌ Apply the sheen animation without a reduced-motion fallback.

## Don't confuse this with…

*Commonly confused neighbors:* steampunk, biopunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
