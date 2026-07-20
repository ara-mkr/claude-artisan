# Ukiyo-e — Implementation Spec

*Aliases:* Japanese woodblock, floating world  
*Slug:* `ukiyo-e` · *Category:* historical · *Era:* 1603–1868

**Origin.** Edo-period Japan (Hokusai, Hiroshige).

**Reference example.** Hokusai "Great Wave off Kanagawa".

## Signature move(s)

A bold, flat black key-line (`--keyline: 2.5px solid var(--color-border)`) wraps every surface with no soft shadow underneath it — the woodblock registration line that held each flat color area in place. A small vermillion "seal" square, echoing the artist's chop mark, appears in a corner of the nav and every card. Color stays in flat, unmodulated fields (indigo `--color-primary`, ochre `--color-bg`, vermillion `--color-accent`) rather than gradients, and layout leans on generous negative space rather than dense grids, in keeping with ukiyo-e's asymmetric compositional balance.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Flat areas of color with bold outlines
- Woodblock print texture and registration
- Nature, waves, Mt Fuji, everyday life
- Asymmetric balance, negative space

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/ukiyo-e.css`.)

```css
/* Ukiyo-e — design tokens (generated from style_catalog.json) */
/* 1603–1868 | Edo-period Japan (Hokusai, Hiroshige). */
:root {
  /* color */
  --color-bg: #eee3c8;
  --color-surface: #f6ecd2;
  --color-surface-strong: #e6d7ac;
  --color-border: #1c1a15;
  --color-text: #1c1a15;
  --color-text-muted: #4a4736;
  --color-primary: #1d4e89;
  --color-accent: #b23a2e;
  --color-wave: #2f6f8f;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 2px 2px 0 rgba(28,26,21,0.15);
  --shadow-md: 4px 4px 0 rgba(28,26,21,0.18);
  --shadow-lg: 6px 6px 0 rgba(28,26,21,0.22);
  /* font */
  --font-sans: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif;
  --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;
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
  /* extra: bold flat-ink outline + a vermillion seal-stamp accent, standing in
     for woodblock key-line and the artist's chop mark */
  --keyline: 2.5px solid var(--color-border);
  --seal-stamp: var(--color-accent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Ukiyo-e — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eee3c8",
        "surface": "#f6ecd2",
        "surface-strong": "#e6d7ac",
        "border": "#1c1a15",
        "text": "#1c1a15",
        "text-muted": "#4a4736",
        "primary": "#1d4e89",
        "accent": "#b23a2e",
        "wave": "#2f6f8f",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "2px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "2px 2px 0 rgba(28,26,21,0.15)",
        "md": "4px 4px 0 rgba(28,26,21,0.18)",
        "lg": "6px 6px 0 rgba(28,26,21,0.22)",
      },
      fontFamily: {
        "sans": ["'Zen Old Mincho'", "'Noto Serif JP'", "'Georgia'", "serif"],
        "display": ["'Zen Old Mincho'", "'Shippori Mincho'", "serif"],
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
//   --keyline: 2.5px solid var(--color-border);
//   --seal-stamp: var(--color-accent);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Flat fill, `--keyline` border, `--shadow-sm` (a hard step, not a soft blur); hover nudges 1px, active flattens to no shadow. `btn--primary` fills solid indigo. |
| **Input** | `--color-surface-strong` fill, `--keyline` border, no inner glow — flat like a printed panel; focus adds `--shadow-sm` only. |
| **Card** | `--keyline` border, `--shadow-md`, and a small `--seal-stamp` square fixed in the top-right corner like an artist's chop mark. |
| **Nav** | `--keyline` border with the seal square pinned to the top-right via `::after` — the logotype sits left, asymmetric against generous empty space to the right. |
| **Modal** | Heaviest `--keyline` (3px) and `--shadow-lg`, centered with large negative-space margins rather than filling the viewport — asymmetric balance even in a centered layout. |
| **Table** | Flat `--color-surface` rows with a single `--keyline` under the header only — no zebra striping, which would read as decoration foreign to the style. |
| **Tooltip** | Small flat chip in `--seal-stamp` vermillion, `--keyline` border, white text — reads as a stamped annotation. |
| **Badge** | Pill in `--seal-stamp` color, thin 1.5px border — a miniature chop mark. |
| **Toggle** | Flat rectangular track with `--keyline`, knob is a solid indigo square (not circle) sliding with `cubic-bezier(0.2,0,0,1)`. |
| **Loading** | A single flat wave-shaped bar (using `--color-wave`) filling left to right — a nod to the Great Wave's curling foam, kept simple and flat. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Flat color-on-color fields (indigo text on ochre, vermillion on cream) can sit right at the contrast edge — verify every combination with `contrast_check.py`, not just the darkest text color.
- Generous negative space is core to the aesthetic, but don't let it push primary actions below the fold or out of a predictable reading order — asymmetry should guide the eye, not hide controls.
- The seal-stamp accent must never be the *only* signal for state (e.g. "new" or "selected") — pair it with text or an icon for colorblind users.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every color area flat — no gradients, no soft shadows, only the hard keyline.
- ✅ Reserve vermillion (`--seal-stamp`) for small accent marks, never large fills.
- ✅ Let compositions breathe with asymmetric negative space rather than centered symmetry.

## Don't

- ❌ Blur the `--keyline` border or its offset shadow — both must stay crisp and flat.
- ❌ Fill large areas with the accent vermillion — it belongs on stamps and small badges only.
- ❌ Center every layout symmetrically — it fights the style's asymmetric-balance trait.

## Don't confuse this with…

*Commonly confused neighbors:* japandi, comic.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
