# Atlassian Design System — Implementation Spec

*Aliases:* ADS, Atlassian
*Slug:* `atlassian-design` · *Category:* flat-platform · *Era:* 2017–present

**Origin.** Atlassian.

**Reference example.** Jira; Confluence; Trello.

## Signature move(s)

A friendly-but-serious productivity palette built on Atlassian's signature deep navy text (`--color-text` #172b4d, not black) paired with a saturated blue primary (`#0052cc`) and green accent (`#36b37e`); the two-color pairing shows up literally as `--accent-bar`, a horizontal gradient bar used to mark featured/highlighted sections. Layered `9,30,66`-tinted shadows (a subtle navy tint instead of pure black) give cards and dialogs a soft, slightly-blue depth that's distinct from a neutral-gray shadow system.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Friendly-professional productivity tone
- Blue/neutral palette, clear hierarchy
- Strong content + accessibility guidance
- Componentized (Atlaskit)

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/atlassian-design.css`.)

```css
/* Atlassian Design System — design tokens (generated from style_catalog.json) */
/* 2017–present | Atlassian. */
:root {
  /* color */
  --color-bg: #f7f8f9;
  --color-surface: #ffffff;
  --color-surface-strong: #f1f2f4;
  --color-border: #dcdfe4;
  --color-text: #172b4d;
  --color-text-muted: #44546f;
  --color-primary: #0052cc;
  --color-accent: #36b37e;
  /* radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(9,30,66,0.13);
  --shadow-md: 0 4px 8px rgba(9,30,66,0.14), 0 0 1px rgba(9,30,66,0.28);
  --shadow-lg: 0 8px 16px rgba(9,30,66,0.16), 0 0 1px rgba(9,30,66,0.31);
  /* font */
  --font-sans: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'SFMono-Regular', ui-monospace, monospace;
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
  /* extra (signature gradients, composite borders, filters) */
  --focus-ring: 0 0 0 2px rgba(0,82,204,0.4);
  --accent-bar: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Atlassian Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f8f9",
        "surface": "#ffffff",
        "surface-strong": "#f1f2f4",
        "border": "#dcdfe4",
        "text": "#172b4d",
        "text-muted": "#44546f",
        "primary": "#0052cc",
        "accent": "#36b37e",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(9,30,66,0.13)",
        "md": "0 4px 8px rgba(9,30,66,0.14), 0 0 1px rgba(9,30,66,0.28)",
        "lg": "0 8px 16px rgba(9,30,66,0.16), 0 0 1px rgba(9,30,66,0.31)",
      },
      fontFamily: {
        "sans": ["'Charlie Sans'", "'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Charlie Sans'", "'Segoe UI'", "system-ui", "sans-serif"],
        "mono": ["'SFMono-Regular'", "ui-monospace", "monospace"],
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
//   --focus-ring: 0 0 0 2px rgba(0,82,204,0.4);
//   --accent-bar: linear-gradient(90deg, var(--color-primary), var(--color-accent));
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-sm` (3px), solid `--color-primary` fill for primary; hover darkens slightly, focus adds the crisp 2px `--focus-ring`. |
| **Input** | `--radius-sm` field, `--color-border` outline; focus swaps to `--color-primary` border + `--focus-ring`. |
| **Card** | `--color-surface`, `--radius-md`, navy-tinted `--shadow-sm`; a featured/pinned card can use `--accent-bar` as a top edge stripe. |
| **Nav** | Global navigation in `--color-surface` with `--color-text-muted` icons; active item gets `--color-primary` text + icon tint. |
| **Modal** | Centered `--radius-md` dialog, navy-tinted `--shadow-lg`, dark scrim; header/body/footer separated by `--color-border`. |
| **Table** | Clean rows on `--color-surface`, `--color-border` hairlines, sortable headers in `--color-text-muted` uppercase. |
| **Tooltip** | Dark chip, `--radius-sm`, navy-tinted `--shadow-sm`. |
| **Badge** | Rounded status lozenge, semantic tints derived from `--color-primary`/`--color-accent`/red-danger. |
| **Toggle** | Pill track, `--color-primary` on-state, white knob with a light `--shadow-sm`. |
| **Loading** | Thin `--color-primary` progress bar, or a spinner using `--ease-standard`; skeleton blocks on `--color-surface-strong`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The navy `--color-text` (#172b4d) is intentionally darker/warmer than pure black — verify it still clears 4.5:1 against both `--color-surface` and `--color-surface-strong` with `contrast_check.py` rather than lightening it toward gray.
- `--accent-bar`'s green end (#36b37e) has lower contrast than the blue end — never render text directly on the gradient bar itself; use it as a decorative edge only.
- Content-heavy productivity tools (Jira/Confluence-style) need `--color-text-muted` to stay legible at `--text-sm` for metadata rows — check it isn't dropped below 4.5:1 when reused at smaller sizes.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the navy-tinted shadow (`rgba(9,30,66,…)`) consistently instead of a neutral gray shadow — it's what gives Atlassian surfaces their specific "cool" depth.
- ✅ Reserve `--accent-bar` for featured/highlighted section edges, not general decoration.
- ✅ Keep the crisp 2px `--focus-ring` on every interactive control for clear keyboard navigation.

## Don't

- ❌ Swap `--color-text` for pure black — the navy tint is a deliberate brand signature.
- ❌ Overuse the blue/green gradient bar as a background fill; it's an accent stripe, not a surface.
- ❌ Round corners more than `--radius-lg` (10px) — Atlassian stays crisper than Polaris or gradient-SaaS styles.

## Don't confuse this with…

*Commonly confused neighbors:* polaris, carbon-design.

vs polaris: Polaris uses a greener primary, near-flat 1px-line shadows, and warmer neutrals; Atlassian uses a bluer primary, navy-tinted layered shadows, and the signature navy text color. vs carbon-design: Carbon is zero-radius and IBM Plex-typeset with underline-based active states; Atlassian rounds corners modestly and signals state through fill/focus-ring changes.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
