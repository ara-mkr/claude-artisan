# Dreamcore — Implementation Spec

*Aliases:* oneiric core  
*Slug:* `dreamcore` · *Category:* niche · *Era:* 2020–present

**Origin.** Surreal dream/nostalgia internet aesthetic.

**Reference example.** Dreamcore compilations.

## Signature move(s)

A hazy lavender-and-lilac field where every raised surface carries a warm, buttery `--color-glow` halo (`--shadow-glow: 0 0 32px rgba(255,233,168,0.55)`) that feels like light bleeding through fog — nothing has a hard edge, and generous soft-purple shadows (`0 8px 28px rgba(150,70,170,0.20)`) keep surfaces floating rather than sitting.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Hazy surreal dreamlike scenes
- Nostalgic uncanny imagery
- Soft glow, impossible spaces
- Between comforting and unsettling

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dreamcore.css`.)

```css
/* Dreamcore — design tokens (generated from style_catalog.json) */
/* 2020–present | Surreal dream/nostalgia internet aesthetic. */
:root {
  /* color */
  --color-bg: #f3e9f7;
  --color-surface: #fdf6ff;
  --color-surface-strong: #ecd9f2;
  --color-border: #d9b8e8;
  --color-text: #3a1f4d;
  --color-text-muted: #6d4a80;
  --color-primary: #c04fd6;
  --color-accent: #f4c96b;
  --color-glow: #ffe9a8;
  /* radius */
  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 10px rgba(150, 70, 170, 0.14);
  --shadow-md: 0 8px 28px rgba(150, 70, 170, 0.20);
  --shadow-lg: 0 20px 50px rgba(150, 70, 170, 0.26);
  --shadow-glow: 0 0 32px rgba(255, 233, 168, 0.55);
  /* font */
  --font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
  /* extra (glow ring) */
  --glow-ring: 0 0 0 6px rgba(255, 233, 168, 0.35);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dreamcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3e9f7",
        "surface": "#fdf6ff",
        "surface-strong": "#ecd9f2",
        "border": "#d9b8e8",
        "text": "#3a1f4d",
        "text-muted": "#6d4a80",
        "primary": "#c04fd6",
        "accent": "#f4c96b",
        "glow": "#ffe9a8",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 10px rgba(150, 70, 170, 0.14)",
        "md": "0 8px 28px rgba(150, 70, 170, 0.20)",
        "lg": "0 20px 50px rgba(150, 70, 170, 0.26)",
        "glow": "0 0 32px rgba(255, 233, 168, 0.55)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
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

// Signature `extra` token is CSS-only (glow ring).
// Add it as a CSS custom property or arbitrary value:
//   --glow-ring: 0 0 0 6px rgba(255, 233, 168, 0.35);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` fill, `--shadow-md`; on hover add `--shadow-glow` so it appears to emit light. |
| **Input** | `--color-surface` fill, thin `--color-border`; focus swaps the ring for `--glow-ring` instead of a solid outline, keeping the hazy feel. |
| **Card** | `--radius-lg`, `--shadow-md`, and a faint `--shadow-glow` bleeding from one corner as if lit from within a dream. |
| **Nav** | Softly blurred bar (`backdrop-filter: blur(6px)`) over `--color-surface-strong`, no hard bottom border. |
| **Modal** | `--shadow-lg` + `--shadow-glow` combined, over a lavender-tinted scrim (`--color-bg` at low opacity), never plain black. |
| **Table** | Rows on `--color-surface`, dividers as 1px `--color-border` — keep this primitive the calmest one so long data stays readable. |
| **Tooltip** | Small glowing chip: `--color-surface-strong` fill, `--shadow-sm` + a thin `--glow-ring`. |
| **Badge** | Pill in `--color-accent` with a soft glow halo, used sparingly for "featured/new" states. |
| **Toggle** | Track in `--color-surface-strong`; active knob picks up `--shadow-glow` to signal the "on" state as literally luminous. |
| **Loading** | A slow pulsing glow (opacity 0.4↔1 on `--shadow-glow`) rather than a spinner — matches the dreamlike pacing. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` on `--color-bg` is a lavender-on-lavender pairing — verify with `contrast_check.py` and darken muted text if it fails, even though it slightly dulls the haze.
- Glow effects (`--shadow-glow`, `--glow-ring`) must never be the *only* focus indicator — pair them with a crisp 2px outline in `--color-text` for keyboard users, since soft glows are easy to miss.
- This style pairs a serif display font with a rounded sans body font — keep the serif to headlines only so body copy stays highly legible.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let glow bleed asymmetrically from one edge/corner rather than centering it — it feels more like ambient dream-light.
- ✅ Keep the palette narrow: lavender/lilac base, gold glow accent, nothing else competing.
- ✅ Slow down transitions (400ms+) to match the woozy, unhurried mood.

## Don't

- ❌ Add sharp black shadows or hard borders — they snap the illusion back to "normal app."
- ❌ Overuse the glow on every element at once; reserve it for 1–2 focal points per screen.
- ❌ Use saturated primary colors outside the lavender/gold pairing — it breaks the hazy palette.

## Don't confuse this with…

*Commonly confused neighbors:* weirdcore, liminal-spaces, dreampunk.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
