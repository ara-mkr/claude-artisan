# shadcn/ui (New York) — Implementation Spec

*Aliases:* shadcn, new-york style, radix + tailwind
*Slug:* `shadcn-ui` · *Category:* flat-platform · *Era:* 2023–present

**Origin.** shadcn/ui (Radix + Tailwind) by shadcn; default of countless 2023+ apps.

**Reference example.** shadcn/ui showcase; Vercel/Cal.com-style apps.

## Signature move(s)

A restrained zinc-neutral palette with one small consistent radius (`--radius-md: 0.5rem`) everywhere, a hairline `--color-border` on every surface, and a soft double-layer focus ring (`--ring` + `--ring-offset`) built from `color-mix`. Nothing shouts — the discipline is the point: every primitive uses the exact same border weight, radius, and ring recipe.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Neutral, refined, subtle borders and rings
- Small radius (0.5rem), muted zinc/slate palette
- Accessible Radix primitives
- Understated developer-favorite polish

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/shadcn-ui.css`.)

```css
/* shadcn/ui (New York) — design tokens (generated from style_catalog.json) */
/* 2023–present | shadcn/ui (Radix + Tailwind) by shadcn; default of countless 2023+ apps. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-surface-strong: #f4f4f5;
  --color-border: #e4e4e7;
  --color-text: #09090b;
  --color-text-muted: #71717a;
  --color-primary: #18181b;
  --color-accent: #2563eb;
  --color-ring: #a1a1aa;
  /* radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05);
  /* font */
  --font-sans: 'Geist', 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Geist', 'Inter', system-ui, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, 'SFMono-Regular', monospace;
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
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  /* extra (focus ring recipe) */
  --ring-offset: 0 0 0 2px var(--color-bg);
  --ring: 0 0 0 4px color-mix(in srgb, var(--color-ring) 35%, transparent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// shadcn/ui (New York) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f4f4f5",
        "border": "#e4e4e7",
        "text": "#09090b",
        "text-muted": "#71717a",
        "primary": "#18181b",
        "accent": "#2563eb",
        "ring": "#a1a1aa",
      },
      borderRadius: {
        "sm": "0.375rem", "md": "0.5rem", "lg": "0.75rem", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.04)",
        "md": "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        "lg": "0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        "sans": ["'Geist'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Geist'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["'Geist Mono'", "ui-monospace", "'SFMono-Regular'", "monospace"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature focus-ring recipe is CSS-only (color-mix). Add as custom properties:
//   --ring-offset: 0 0 0 2px var(--color-bg);
//   --ring: 0 0 0 4px color-mix(in srgb, var(--color-ring) 35%, transparent);
// Apply both together on :focus-visible as a stacked box-shadow.
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-md`, `--color-primary` (near-black) fill for primary, `--color-surface` + `--color-border` for outline variant; focus-visible stacks `--ring-offset` + `--ring`. |
| **Input** | `--color-surface` fill, 1px `--color-border`, `--radius-md`; focus swaps border to `--color-ring` and adds the `--ring` glow. |
| **Card** | `--color-surface`, 1px `--color-border`, `--shadow-sm`, `--radius-lg` — deliberately understated, no gradient, no color. |
| **Nav** | White bar, single bottom `--color-border` hairline, no shadow — flat and quiet. |
| **Modal** | `--color-surface` panel, `--shadow-lg`, `--radius-lg`, centered with a neutral scrim; same ring recipe on its close button. |
| **Table** | `--color-border` row dividers only (no zebra striping by default), `--color-surface-strong` on header row and hover. |
| **Tooltip** | `--color-primary` dark fill, white text, `--radius-sm`, `--shadow-md` — the one place near-black is used as a surface, not just text. |
| **Badge** | `--radius-pill`, `--color-surface-strong` fill with `--color-text-muted` text for neutral status, `--color-accent` tint for informational. |
| **Toggle** | `--color-surface-strong` track, `--color-primary` when on, same ring recipe on focus. |
| **Loading** | `--color-surface-strong` skeleton blocks with a subtle shimmer, or a thin `--color-primary` spinner stroke. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Because the palette is intentionally low-saturation, verify `--color-text-muted` on `--color-surface-strong` still clears 4.5:1 — muted-on-muted is the most common shadcn contrast failure.
- Never drop the two-layer focus ring (`--ring-offset` + `--ring`) — a single thin ring is easy to miss against the near-white background.
- Keep disabled-state opacity high enough (≥ 0.5 combined with the border) that disabled controls remain distinguishable from active ones without relying on color alone.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep radius, border weight, and ring recipe identical across every primitive — consistency is the whole aesthetic.
- ✅ Use `--color-accent` (blue) sparingly, only for links/informational states, never as a dominant fill.
- ✅ Lean on `--shadow-sm`/`--shadow-md` restraint — most surfaces need only a border, not a shadow.

## Don't

- ❌ Introduce a second radius scale or a rounder "friendly" button — the flat 0.5rem discipline is load-bearing.
- ❌ Add saturated gradients or glows — this style is defined by its absence of decoration.
- ❌ Skip the focus-ring offset — a ring with no offset gap looks like a glitch, not a focus state.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, geist, linear-dark.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
