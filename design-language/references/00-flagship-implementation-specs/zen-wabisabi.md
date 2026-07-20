# Zen / Wabi-Sabi / Ma — Implementation Spec

*Aliases:* wabi-sabi, ma, Japanese minimalism
*Slug:* `zen-wabisabi` · *Category:* minimal-organic · *Era:* Traditional Japanese → modern

**Origin.** Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma).

**Reference example.** Traditional tea-ceremony aesthetics; MUJI.

## Signature move(s)

Layout is built around `ma` — deliberate, oversized negative space using a stretched spacing scale (`--space-4` is 28px here, not 16px; `--space-24` reaches 160px) so single elements sit alone in a field of quiet. Container edges use `--organic-radius`/`--organic-radius-inverse` — asymmetric, hand-imperfect corner values instead of a uniform radius — and elevation is nearly absent (`--shadow-none` exists as a token, used more than the sm/md/lg set) because depth here comes from spacing and tone, not shadow.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Embraces imperfection, age, asymmetry
- Generous negative space ('ma')
- Muted natural, earthen tones
- Calm, contemplative, handmade

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/zen-wabisabi.css`.)

```css
/* Zen / Wabi-Sabi / Ma — design tokens (generated from style_catalog.json) */
/* Traditional Japanese → modern | Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma). */
:root {
  /* color */
  --color-bg: #f2ede4;
  --color-surface: #e9e1d2;
  --color-surface-strong: #ded2ba;
  --color-border: #c9bea9;
  --color-text: #33302a;
  --color-text-muted: #71685c;
  --color-primary: #7a4f36;
  --color-accent: #566349;
  --color-ink: #4a4740;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(51, 48, 42, 0.08);
  --shadow-md: 0 3px 10px rgba(51, 48, 42, 0.10);
  --shadow-lg: 0 6px 20px rgba(51, 48, 42, 0.12);
  --shadow-none: none;
  /* font */
  --font-sans: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif;
  --font-display: 'Shippori Mincho', serif;
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
  /* space (stretched for generous "ma") */
  --space-1: 6px;
  --space-2: 12px;
  --space-3: 18px;
  --space-4: 28px;
  --space-6: 40px;
  --space-8: 56px;
  --space-12: 80px;
  --space-16: 112px;
  --space-24: 160px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-entrance: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  /* extra (signature imperfect corners + hairline crack) */
  --organic-radius: 22px 6px 26px 4px / 14px 20px 8px 24px;
  --organic-radius-inverse: 6px 22px 4px 26px / 20px 14px 24px 8px;
  --hairline-crack: 1px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Zen / Wabi-Sabi / Ma — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2ede4",
        "surface": "#e9e1d2",
        "surface-strong": "#ded2ba",
        "border": "#c9bea9",
        "text": "#33302a",
        "text-muted": "#71685c",
        "primary": "#7a4f36",
        "accent": "#566349",
        "ink": "#4a4740",
      },
      borderRadius: {
        "sm": "3px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(51, 48, 42, 0.08)",
        "md": "0 3px 10px rgba(51, 48, 42, 0.10)",
        "lg": "0 6px 20px rgba(51, 48, 42, 0.12)",
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Shippori Mincho'", "'Noto Serif JP'", "'Iowan Old Style'", "Georgia", "serif"],
        "display": ["'Shippori Mincho'", "serif"],
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
        "1": "6px",
        "2": "12px",
        "3": "18px",
        "4": "28px",
        "6": "40px",
        "8": "56px",
        "12": "80px",
        "16": "112px",
        "24": "160px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
        "entrance": "cubic-bezier(0, 0, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (imperfect asymmetric corner pair +
// hairline crack border). Add as custom properties or arbitrary values:
//   --organic-radius: 22px 6px 26px 4px / 14px 20px 8px 24px;
//   --organic-radius-inverse: 6px 22px 4px 26px / 20px 14px 24px 8px;
//   --hairline-crack: 1px solid var(--color-border);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm`, flat fill, `--shadow-none` at rest; a single `--hairline-crack` border is the only definition. Surrounded by at least `--space-6` of empty margin — never packed into a toolbar row. |
| **Input** | `--radius-sm`, `--hairline-crack` bottom border only (no full box) — evokes a brush stroke under a character, not a form field. |
| **Card** | The hero: `--organic-radius` on one card, `--organic-radius-inverse` on its neighbor so no two containers match exactly; `--shadow-sm` at most, floated in a sea of `--space-16`+ whitespace. |
| **Nav** | A single line of text-links separated by wide `--space-8` gaps, no background, no border — presence through spacing alone. |
| **Modal** | `--radius-lg`, appears with a slow fade (`--ease-entrance`) not a slide; scrim is a soft `--color-ink` wash, not solid black. |
| **Table** | Rows separated only by `--hairline-crack`, no header fill — column labels sit in `--color-text-muted` to stay quiet. |
| **Tooltip** | Plain text on `--color-surface-strong`, `--radius-sm`, no shadow — appears and disappears with a slow fade. |
| **Badge** | `--radius-sm`, unfilled — just `--hairline-crack` border and `--color-text-muted` label, resisting the urge to add color. |
| **Toggle** | Track `--radius-pill` (only geometric exception), knob a plain filled circle in `--color-primary`, transition uses `--ease-standard`. |
| **Loading** | A single slow-breathing dot (opacity pulse, multi-second cycle) rather than a spinner — contemplative pace, not urgency. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- `--color-text-muted` (#71685c) on `--color-surface` (#e9e1d2) is a deliberately quiet pairing — verify it clears 4.5:1 for body copy and reserve anything lower-contrast for decorative labels only.
- The near-absence of borders/shadows (`--shadow-none`) means focus states need an explicit, visible treatment — use a solid 2px `--color-primary` outline; don't rely on ambient elevation cues that don't exist here.
- Slow multi-second animations (the breathing loading dot, fade-only transitions) must still complete or be replaceable with a static state under `prefers-reduced-motion: reduce`.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Let single elements occupy generous empty space — resist the instinct to fill the viewport.
- ✅ Vary corner treatments slightly (`--organic-radius` vs `--organic-radius-inverse`) between sibling containers.
- ✅ Keep motion slow and fade-based, never bouncy or snappy.

## Don't

- ❌ Add shadows or borders to compensate for "flatness" — the calm comes from restraint, not more chrome.
- ❌ Pack UI density up to fill whitespace; density is the opposite of `ma`.
- ❌ Use pure black or pure white — every surface here is a warm, aged neutral.

## Don't confuse this with…

*Commonly confused neighbors:* japandi, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
