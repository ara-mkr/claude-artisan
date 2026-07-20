# Primer — Implementation Spec

*Aliases:* GitHub Primer  
*Slug:* `primer` · *Category:* flat-platform · *Era:* 2017–present

**Origin.** GitHub.

**Reference example.** GitHub.com.

## Signature move(s)

Dense-but-calm developer-tool clarity: hairline `--color-border` at 1px everywhere, tight 6px radii, and a restrained two-color system (`--color-primary` green for affirmative actions, `--color-accent` blue for links/info) laid over a near-white `--color-bg`/`--color-surface` pairing. Content density beats whitespace — this style trusts the user to scan, not be guided by generous air.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Developer-tool clarity, dense but calm
- Mona Sans / system fonts, octicon iconography
- Robust light/dark theming
- Content-first, code-friendly

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/primer.css`.)

```css
/* Primer — design tokens (generated from style_catalog.json) */
/* 2017–present | GitHub. */
:root {
  /* color */
  --color-bg: #f6f8fa;
  --color-surface: #ffffff;
  --color-surface-strong: #f6f8fa;
  --color-border: #d0d7de;
  --color-text: #1f2328;
  --color-text-muted: #59636e;
  --color-primary: #1f883d;
  --color-accent: #0969da;
  --color-danger: #cf222e;
  /* radius */
  --radius-sm: 6px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 0 rgba(31, 35, 40, 0.04);
  --shadow-md: 0 3px 6px rgba(140, 149, 159, 0.15);
  --shadow-lg: 0 8px 24px rgba(140, 149, 159, 0.2);
  /* font */
  --font-sans: -apple-system, 'Segoe UI', 'Noto Sans', 'Helvetica Neue', sans-serif;
  --font-display: -apple-system, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, 'SFMono-Regular', 'Consolas', monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.25rem;
  /* space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 20px;
  --space-8: 28px;
  --space-12: 40px;
  --space-16: 56px;
  --space-24: 80px;
  /* ease */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra */
  --focus-ring: 0 0 0 3px rgba(9, 105, 218, 0.3);
  --code-diff-add: #d1f4dc;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Primer — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f8fa",
        "surface": "#ffffff",
        "surface-strong": "#f6f8fa",
        "border": "#d0d7de",
        "text": "#1f2328",
        "text-muted": "#59636e",
        "primary": "#1f883d",
        "accent": "#0969da",
        "danger": "#cf222e",
      },
      borderRadius: {
        "sm": "6px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(31, 35, 40, 0.04)",
        "md": "0 3px 6px rgba(140, 149, 159, 0.15)",
        "lg": "0 8px 24px rgba(140, 149, 159, 0.2)",
        "focus-ring": "0 0 0 3px rgba(9, 105, 218, 0.3)",
      },
      fontFamily: {
        "sans": ["-apple-system", "'Segoe UI'", "'Noto Sans'", "'Helvetica Neue'", "sans-serif"],
        "display": ["-apple-system", "'Segoe UI'", "sans-serif"],
        "mono": ["ui-monospace", "'SFMono-Regular'", "'Consolas'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.8125rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "20px",
        "8": "28px",
        "12": "40px",
        "16": "56px",
        "24": "80px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// --code-diff-add: #d1f4dc; add as a CSS custom property for diff/status chips.
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md` (6px), 1px `--color-border`; primary variant fills `--color-primary` solid, secondary stays `--color-surface` with border only. |
| **Input** | 1px `--color-border`, `--radius-sm`, `--color-surface` fill; focus swaps border to `--color-accent` and adds `--focus-ring`. |
| **Card** | `--color-surface` on `--color-bg`, 1px `--color-border`, `--shadow-sm` only — depth is implied by the border, not the shadow. |
| **Nav** | Flat `--color-bg` bar, bottom hairline border, octicon + label pairs, active tab underlined in `--color-primary`. |
| **Modal** | `--color-surface`, `--shadow-lg`, `--radius-md`, header separated by a hairline, no blur — this is a solid-surface style. |
| **Table** | Zebra rows optional but always a bottom hairline per row in `--color-border`; header row uses `--color-surface-strong`. |
| **Tooltip** | Dark `--color-text` fill with light text, `--radius-sm`, tight padding, `--shadow-md`. |
| **Badge** | Pill or `--radius-sm` chip, tinted background (10–15% of state color) with matching text, never a solid loud fill. |
| **Toggle** | Small track/knob, `--color-primary` when on, `--color-border` track when off; instant, no bounce. |
| **Loading** | Thin animated bar in `--color-primary` at the top of the viewport, or skeleton blocks in `--color-surface-strong`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The style relies on subtle borders instead of shadows for separation — verify `--color-border` still reads at 3:1 against both `--color-bg` and `--color-surface` in dark theme variants.
- Green/red status pairs (`--color-primary`/`--color-danger`) must never be the *only* signal — pair with icon or text label for colorblind users.
- Dense layouts compress line-height; keep body text at 1.5 line-height even though the UI chrome itself runs tighter.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep borders hairline (1px) and consistent everywhere — that discipline is the whole style.
- ✅ Reserve `--color-primary` (green) for the single primary action per view.
- ✅ Ship a full dark-theme token swap; this style is defined partly by doing theming well.

## Don't

- ❌ Add decorative shadows or gradients — Primer reads as flat and structural.
- ❌ Let icon-only buttons ship without accessible labels — density is not an excuse.
- ❌ Loosen the border/radius discipline "for variety" — consistency is the signature move here.

## Don't confuse this with…

*Commonly confused neighbors:* atlassian-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
