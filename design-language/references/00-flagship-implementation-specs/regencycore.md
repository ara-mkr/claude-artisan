# Regencycore — Implementation Spec

*Aliases:* Bridgerton aesthetic, Regency
*Slug:* `regencycore` · *Category:* niche · *Era:* 2020–present

**Origin.** Regency-era romance revival (Bridgerton, 2020).

**Reference example.** Netflix 'Bridgerton'.

## Signature move(s)

A double gilt frame — a 1px inner `--gilt-frame` line in `--color-accent` plus a 2px outer `--gilt-outer` line in `--color-border` — wraps every card and panel like a miniature portrait frame, with a soft floral radial wash (`--floral-wash`) bleeding from one corner and a script display face (`--font-display`) for headings.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Pastel florals, empire silhouettes, pearls
- Ornate script, gilt frames
- Soft romantic period palette
- Aristocratic, dreamy, floral

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/regencycore.css`.)

```css
/* Regencycore — design tokens (generated from style_catalog.json) */
/* 2020–present | Regency-era romance revival (Bridgerton, 2020). */
:root {
  /* color */
  --color-bg: #fbeef0;
  --color-surface: #fffaf6;
  --color-surface-strong: #f6e0e4;
  --color-border: #e3b8c2;
  --color-text: #4a2c3a;
  --color-text-muted: #8a6274;
  --color-primary: #c1436a;
  --color-accent: #c9a35c;
  --color-sage: #8fa583;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(193, 67, 106, 0.10);
  --shadow-md: 0 8px 20px rgba(193, 67, 106, 0.14);
  --shadow-lg: 0 18px 36px rgba(193, 67, 106, 0.16);
  /* font */
  --font-sans: 'Cormorant Garamond', Georgia, serif;
  --font-display: 'Great Vibes', 'Snell Roundhand', cursive;
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
  --ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
  /* extra */
  --gilt-frame: 1px solid var(--color-accent);
  --gilt-outer: 2px solid var(--color-border);
  --floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(201,163,92,0.14), transparent 55%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Regencycore — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fbeef0",
        "surface": "#fffaf6",
        "surface-strong": "#f6e0e4",
        "border": "#e3b8c2",
        "text": "#4a2c3a",
        "text-muted": "#8a6274",
        "primary": "#c1436a",
        "accent": "#c9a35c",
        "sage": "#8fa583",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(193, 67, 106, 0.10)",
        "md": "0 8px 20px rgba(193, 67, 106, 0.14)",
        "lg": "0 18px 36px rgba(193, 67, 106, 0.16)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "Georgia", "serif"],
        "display": ["'Great Vibes'", "'Snell Roundhand'", "cursive"],
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
        "standard": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only:
//   --gilt-frame: 1px solid var(--color-accent);
//   --gilt-outer: 2px solid var(--color-border);
//   --floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(201,163,92,0.14), transparent 55%);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill`, `--color-primary` fill, thin `--gilt-frame` inner ring; hover brightens toward `--color-accent`. |
| **Input** | `--color-surface` fill, `--gilt-frame` bottom border, `--radius-md`; focus adds the full `--gilt-outer` frame. |
| **Card** | `--color-surface` with `--floral-wash` bleeding from top-right, double gilt frame (`--gilt-frame` inner + `--gilt-outer` outer), `--radius-lg`, `--shadow-md`. |
| **Nav** | `--color-bg` bar, script wordmark in `--font-display`, `--gilt-frame` bottom rule. |
| **Modal** | `--color-surface`, `--radius-lg`, full double gilt frame, `--floral-wash` behind the header, `--shadow-lg`. |
| **Table** | Rows on `--color-surface`, `--color-border` hairline dividers, header row underlined with `--gilt-frame`. |
| **Tooltip** | Small `--color-surface-strong` chip, `--gilt-frame` outline, script accent optional on titles only. |
| **Badge** | `--radius-pill` chip, `--color-sage` or `--color-accent` fill for variety, cream text. |
| **Toggle** | Track outlined with `--gilt-frame`; knob solid `--color-primary` when on. |
| **Loading** | A thin gilt frame border traces around a card outline (like a portrait being framed), or florals fade in/out. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Script display font (`--font-display`) must never carry body copy or long labels — restrict it to short headings/titles; verify legibility separately from `--font-sans` body text.
- `--color-text-muted` (#8a6274) on `--color-bg` (#fbeef0) needs a `contrast_check.py` pass — dusty rose-on-pink pairings often sit right at the AA edge.
- Gilt frame lines are thin (1-2px) and decorative — ensure focus-visible states use a thicker, higher-contrast solid outline distinct from the frame.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Frame every card/modal with the double gilt-line motif for a consistent "portrait" feel.
- ✅ Reserve the script `--font-display` for short, ornamental headings only.
- ✅ Let the floral wash gradient bleed from a consistent corner across all surfaces.

## Don't

- ❌ Don't set body paragraphs in the script font — it becomes illegible at length.
- ❌ Don't skip the gilt frame on any card-like surface; an unframed card looks unfinished, not minimal.
- ❌ Don't push saturation past dusty pastel — regencycore stays soft, not neon-bright.

## Don't confuse this with…

*Commonly confused neighbors:* coquette, baroque-rococo, grandmillennial.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
