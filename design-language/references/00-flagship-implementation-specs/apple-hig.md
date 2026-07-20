# Apple HIG (pre-Liquid flat) — Implementation Spec

*Aliases:* Human Interface Guidelines, iOS flat, Cupertino
*Slug:* `apple-hig` · *Category:* flat-platform · *Era:* 2013–2025

**Origin.** Apple, iOS 7 through iOS 18.

**Reference example.** iOS 7–18; macOS pre-Tahoe.

## Signature move(s)

Content defers to chrome that nearly disappears: hairline `--color-border` dividers (0.5px), generous whitespace (`--space-6`/`--space-8`), soft rounded rectangles (`--radius-sm/md/lg` scale from icon-tile to sheet), and a single confident blue (`--color-primary`) as the only strong-saturation accent — every surface is legible on its own at any brightness before any vibrancy/blur (`--blur-backdrop`, `--extra-vibrancy`) is layered on top.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Deference: content over chrome
- SF Pro type, generous spacing, subtle depth
- Blur/vibrancy accents, clarity
- Consistent system controls

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/apple-hig.css`.)

```css
/* Apple HIG (pre-Liquid flat) — design tokens (generated from style_catalog.json) */
/* 2013–2025 | Apple, iOS 7 through iOS 18. */
:root {
  /* color */
  --color-bg: #f2f2f7;
  --color-surface: #ffffff;
  --color-surface-strong: #f9f9fb;
  --color-border: rgba(60, 60, 67, 0.29);
  --color-text: #1c1c1e;
  --color-text-muted: #6e6e73;
  --color-primary: #007aff;
  --color-accent: #34c759;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 14px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
  /* blur */
  --blur-backdrop: 20px;
  /* font */
  --font-sans: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif;
  --font-display: -apple-system, 'SF Pro Display', sans-serif;
  --font-mono: 'SF Mono', ui-monospace, monospace;
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
  --ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
  /* extra */
  --vibrancy: rgba(255,255,255,0.72);
  --hairline: 0.5px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Apple HIG (pre-Liquid flat) — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2f2f7",
        "surface": "#ffffff",
        "surface-strong": "#f9f9fb",
        "border": "rgba(60, 60, 67, 0.29)",
        "text": "#1c1c1e",
        "text-muted": "#6e6e73",
        "primary": "#007aff",
        "accent": "#34c759",
      },
      borderRadius: {
        "sm": "8px", "md": "14px", "lg": "20px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.06)",
        "md": "0 4px 14px rgba(0,0,0,0.08)",
        "lg": "0 12px 32px rgba(0,0,0,0.12)",
      },
      backdropBlur: {
        "backdrop": "20px",
      },
      fontFamily: {
        "sans": ["-apple-system", "'SF Pro Text'", "'Helvetica Neue'", "sans-serif"],
        "display": ["-apple-system", "'SF Pro Display'", "sans-serif"],
        "mono": ["'SF Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

// Vibrancy fill and hairline divider are CSS-only:
//   --vibrancy: rgba(255,255,255,0.72);
//   --hairline: 0.5px solid var(--color-border);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-primary` fill, `--radius-pill` or `--radius-md`, no shadow at rest (flat, deferential); pressed state dims fill ~15% rather than adding elevation. |
| **Input** | `--color-surface` fill, `--hairline` bottom border only in grouped lists, or full `--radius-md` rounded field standalone; focus adds `--color-primary` ring. |
| **Card** | `--color-surface`, `--radius-lg`, `--shadow-sm` (barely-there elevation) — grouped list style uses `--hairline` dividers between rows instead of separate cards. |
| **Nav** | Large-title nav bar collapsing to a compact `--hairline`-bordered bar on scroll, optionally with `--blur-backdrop` + `--vibrancy` once translucent. |
| **Modal** | Sheet rising from the bottom, `--radius-lg` on top corners only, `--shadow-lg`, dimmed scrim behind. |
| **Table** | Grouped/inset list style: `--color-surface` rows separated by `--hairline`, `--radius-md` on the whole group, no per-row shadow. |
| **Tooltip** | iOS doesn't really have tooltips — use a small `--color-surface-strong` popover with `--shadow-md` and `--radius-sm` instead. |
| **Badge** | Small `--color-primary` or `--color-accent` filled circle/pill for counts, `--radius-pill`. |
| **Toggle** | The canonical iOS switch: `--color-accent` track when on, `--color-border` when off, white knob with `--shadow-sm`. |
| **Loading** | Native `UIActivityIndicator`-style spinner in `--color-text-muted`, or a thin `--color-primary` progress bar — never a custom skeleton shimmer. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- `--hairline` (0.5px) dividers can vanish entirely on non-Retina displays or with OS-level "Increase Contrast" enabled — respect `prefers-contrast: more` by thickening to a full 1px `--color-border`.
- Vibrancy/blur text must always pass contrast against the busiest content behind it — verify with `contrast_check.py` and provide the `@media (prefers-reduced-transparency: reduce)` opaque fallback.
- Don't rely on `--color-accent` green alone for toggle "on" state — pair with knob position, which HIG already does; never remove that positional cue in a redesign.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use grouped-list hairline dividers instead of individual card shadows wherever content is list-like.
- ✅ Keep exactly one saturated accent (`--color-primary`) as the primary action color per screen.
- ✅ Let large-title headers collapse into compact bars on scroll for the signature deference-to-content motion.

## Don't

- ❌ Add heavy shadows or gradients — depth here is nearly flat by design.
- ❌ Introduce a second bright accent competing with `--color-primary` for attention.
- ❌ Skip the opaque fallback when using `--blur-backdrop`/`--vibrancy`.

## Don't confuse this with…

*Commonly confused neighbors:* liquid-glass, flat-design.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
