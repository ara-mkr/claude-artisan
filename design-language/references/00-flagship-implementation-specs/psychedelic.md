# Psychedelic Art — Implementation Spec

*Aliases:* 1960s psychedelia, acid poster  
*Slug:* `psychedelic` · *Category:* historical · *Era:* 1965–1971

**Origin.** San Francisco (Wes Wilson, Victor Moscoso).

**Reference example.** Fillmore concert posters (Wes Wilson).

## Signature move(s)

A hard-edged, no-blur "vibrating" outline ring in a complementary hue (`--color-vibrate-a`/`--color-vibrate-b`) wrapped around every raised surface, combined with melting, asymmetric blob border-radii that look hand-drawn rather than geometric. The vibration comes from placing two intense, equal-value complementary colors directly against each other with zero gradient softening — the eye can't settle, exactly like Wilson's lettering pulsing against Moscoso's clashing fields.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Warped, melting, hand-drawn lettering
- Intense vibrating complementary colors
- Swirling Art-Nouveau-derived forms
- Kaleidoscopic symmetry

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/psychedelic.css`.)

```css
/* Psychedelic Art — design tokens (generated from style_catalog.json) */
/* 1965–1971 | San Francisco (Wes Wilson, Victor Moscoso). */
:root {
  /* color */
  --color-bg: #ff5f9e;
  --color-surface: #ffe14d;
  --color-surface-strong: #ff8a3d;
  --color-border: #1a0b2e;
  --color-text: #1a0b2e;
  --color-text-muted: #4b2c63;
  --color-primary: #00c2a8;
  --color-accent: #6a1fd0;
  --color-vibrate-a: #ff5f9e;
  --color-vibrate-b: #00c2a8;
  /* radius */
  --radius-sm: 12px;
  --radius-md: 40% 60% 55% 45% / 50% 40% 60% 50%;
  --radius-lg: 60% 40% 30% 70% / 60% 30% 70% 40%;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 0 4px var(--color-vibrate-a);
  --shadow-md: 0 0 0 4px var(--color-vibrate-b), 0 8px 24px rgba(26,11,46,0.3);
  --shadow-lg: 0 0 0 6px var(--color-accent), 0 16px 40px rgba(26,11,46,0.35);
  /* font */
  --font-sans: 'Cooper Black', 'Baloo 2', system-ui, sans-serif;
  --font-display: 'Cooper Black', 'Baloo 2', cursive;
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
  --ease-standard: cubic-bezier(0.65, 0, 0.35, 1);
  /* extra (signature gradients, composite borders, filters) */
  --swirl-bg: radial-gradient(circle at 20% 30%, #ffe14d 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00c2a8 0%, transparent 45%), radial-gradient(circle at 50% 80%, #6a1fd0 0%, transparent 50%), var(--color-bg);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Psychedelic Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ff5f9e",
        "surface": "#ffe14d",
        "surface-strong": "#ff8a3d",
        "border": "#1a0b2e",
        "text": "#1a0b2e",
        "text-muted": "#4b2c63",
        "primary": "#00c2a8",
        "accent": "#6a1fd0",
        "vibrate-a": "#ff5f9e",
        "vibrate-b": "#00c2a8",
      },
      borderRadius: {
        "sm": "12px",
        "md": "40% 60% 55% 45% / 50% 40% 60% 50%",
        "lg": "60% 40% 30% 70% / 60% 30% 70% 40%",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 4px var(--color-vibrate-a)",
        "md": "0 0 0 4px var(--color-vibrate-b), 0 8px 24px rgba(26,11,46,0.3)",
        "lg": "0 0 0 6px var(--color-accent), 0 16px 40px rgba(26,11,46,0.35)",
      },
      fontFamily: {
        "sans": ["'Cooper Black'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Cooper Black'", "'Baloo 2'", "cursive"],
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
        "standard": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --swirl-bg: radial-gradient(circle at 20% 30%, #ffe14d 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00c2a8 0%, transparent 45%), radial-gradient(circle at 50% 80%, #6a1fd0 0%, transparent 50%), var(--color-bg);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Pill shape, `--shadow-sm` vibrating ring; hover scales 1.05 and rotates -2deg like a poster letterform warping; `--btn--primary` uses `--color-primary` fill against the vibrating outline. |
| **Input** | Pill field, no border, `--shadow-sm` ring at rest; focus swaps to `--shadow-md` (the second complementary hue) so the ring itself signals state. |
| **Card** | The hero surface: `--color-surface-strong` fill, melting `--radius-md` blob shape, `--shadow-md` double-ring, sits directly on `--swirl-bg`. |
| **Nav** | Pill bar in `--color-surface`, floating on the kaleidoscopic `--swirl-bg` so the background swirl reads through the page. |
| **Modal** | Largest blob radius (`--radius-lg`), `--shadow-lg` triple-ring in `--color-accent`, over a darkened `--color-bg`-tinted scrim so the vibration doesn't fight the page behind it. |
| **Table** | Flatten to `--radius-sm` rows on `--color-surface` — melting blobs on a data grid destroy scanability; keep the vibrating ring only on the header. |
| **Tooltip** | Small pill chip, `--color-surface` fill, thin `--shadow-sm` ring; never place body copy directly on `--vibrate-a`/`--vibrate-b` raw hues. |
| **Badge** | Tiny pill, `--color-accent` fill, no ring (rings compound at small sizes into visual noise). |
| **Toggle** | Pill track alternates between `--color-vibrate-a` and `--color-vibrate-b` for off/on; knob stays a plain opaque circle so state reads without motion. |
| **Loading** | A slow hue-cycle between `--color-vibrate-a` and `--color-vibrate-b` on a pill bar, echoing the vibrating-color optical effect instead of a spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The warped display font (`--font-display`) is a legibility risk at body sizes — restrict it to headlines/short labels and set all paragraph and form text in `--font-sans` at `--text-base` or larger.
- Vibrating complementary colors are designed to strain the eye on purpose; never place body text directly on `--color-bg`, `--color-vibrate-a`, or `--color-vibrate-b` — always land text on the flatter `--color-surface`/`--color-text` pair and verify with `contrast_check.py`.
- The melting/asymmetric radii and hover rotate/scale transforms should collapse to a plain border-radius and opacity-only hover under `prefers-reduced-motion: reduce` — rapid shape distortion can trigger discomfort.
- Keep focus rings a single solid, high-contrast color distinct from the vibrating ring so keyboard focus doesn't get lost in the pattern.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Pair every raised surface with the same vibrating-ring + melting-radius combo.
- ✅ Reserve full-saturation complementary pairs for chrome and rings, not body text backgrounds.
- ✅ Let the kaleidoscopic `--swirl-bg` show through on nav/page level, not inside dense content blocks.

## Don't

- ❌ Set body copy in the warped display font.
- ❌ Stack more than two vibrating rings on one element — it turns into flicker.
- ❌ Use perfectly round or perfectly square corners anywhere; it breaks the "melting" illusion.

## Don't confuse this with…

*Commonly confused neighbors:* art-nouveau, op-art, vaporwave.

vs art-nouveau: art-nouveau's curves are botanical and restrained in color; psychedelic pushes the same whiplash line into full-saturation vibration and hand-lettered distortion. vs op-art: op-art achieves its buzz through geometric black/white or monochrome pattern precision; psychedelic gets there through loose, organic color clash instead of grid precision. vs vaporwave: vaporwave is a cool-toned, nostalgic pastel/neon 1980s-90s digital pastiche; psychedelic is warm, hand-drawn, and rooted in 1960s poster printing.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
