# Acubi — Implementation Spec

*Aliases:* Y2K minimal, cyber-y2k fashion  
*Slug:* `acubi` · *Category:* niche · *Era:* 2022–present

**Origin.** Korean-origin sleek minimal-Y2K fashion aesthetic.

**Reference example.** Acubi TikTok/Korean fashion.

## Signature move(s)

The brushed-metal sheen: primary surfaces catch a directional `--metal-gradient` — a five-stop diagonal sweep from graphite to silver and back — like light raking across a metal buckle or bag hardware, applied only to the elements that should read as "the object," while everything else stays flat charcoal. A single hairline (`--hairline`) traces edges instead of a visible border, and text sizes run slightly compressed (0.95rem base) for that low-rise, tightly-cut silhouette. Cool cyan (`--color-accent`) is the only color note against an otherwise monochrome grey-on-black system.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Cool-toned grey, silver, black, white
- Minimal cyber-Y2K, low-rise sleek
- Metallic + muted, clean lines
- Edgy, futuristic, understated

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/acubi.css`.)

```css
/* Acubi — design tokens (generated from style_catalog.json) */
/* 2022–present | Korean-origin sleek minimal-Y2K fashion aesthetic. */
:root {
  /* color */
  --color-bg: #121316;
  --color-surface: #1c1e22;
  --color-surface-strong: #26282d;
  --color-border: #35383f;
  --color-text: #f2f3f5;
  --color-text-muted: #a7abb3;
  --color-primary: #c7ccd4;
  --color-accent: #7dd3fc;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
  --shadow-md: 0 6px 20px rgba(0,0,0,0.5);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.55);
  /* font */
  --font-sans: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif;
  --font-display: 'Helvetica Neue', 'Pretendard', sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.85rem;
  --text-base: 0.95rem;
  --text-lg: 1.1rem;
  --text-xl: 1.3rem;
  --text-2xl: 1.7rem;
  --text-3xl: 2.2rem;
  --text-4xl: 2.9rem;
  --text-5xl: 3.8rem;
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
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* extra (signature metallic gradient + hairline) */
  --metal-gradient: linear-gradient(135deg, #7d828c 0%, #dde1e6 22%, #6b6f78 48%, #c7ccd4 74%, #7d828c 100%);
  --hairline: 1px solid var(--color-border);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Acubi — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#121316",
        "surface": "#1c1e22",
        "surface-strong": "#26282d",
        "border": "#35383f",
        "text": "#f2f3f5",
        "text-muted": "#a7abb3",
        "primary": "#c7ccd4",
        "accent": "#7dd3fc",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.4)",
        "md": "0 6px 20px rgba(0,0,0,0.5)",
        "lg": "0 16px 40px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Pretendard'", "system-ui", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Pretendard'", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.85rem",
        "base": "0.95rem",
        "lg": "1.1rem",
        "xl": "1.3rem",
        "2xl": "1.7rem",
        "3xl": "2.2rem",
        "4xl": "2.9rem",
        "5xl": "3.8rem",
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// The metallic gradient is CSS-only. Add as a custom property or
// arbitrary value:
//   --metal-gradient: linear-gradient(135deg, #7d828c 0%, #dde1e6 22%, #6b6f78 48%, #c7ccd4 74%, #7d828c 100%);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Primary = `background: var(--metal-gradient)` with dark text, `--radius-sm`; secondary = `--color-surface` with `var(--hairline)`. |
| **Input** | `--color-surface`, `var(--hairline)`, `--radius-sm`; focus swaps hairline to `--color-accent`. |
| **Card** | `--color-surface`, `var(--hairline)` border, `--shadow-md`; an optional top accent strip uses `var(--metal-gradient)` for "featured" cards only. |
| **Nav** | Flat `--color-bg` bar, bottom `var(--hairline)`, active item underlined in `--color-accent`. |
| **Modal** | Card recipe, `--shadow-lg`, header bar in `var(--metal-gradient)` for emphasis. |
| **Table** | `--color-surface` rows, `var(--hairline)` dividers, header row `--color-surface-strong` uppercase tight-tracked labels. |
| **Tooltip** | Small `--color-surface-strong` chip, `var(--hairline)` edge, no color fill. |
| **Badge** | `var(--metal-gradient)` fill for "premium" status, flat `--color-surface-strong` + hairline for default. |
| **Toggle** | `--color-surface-strong` track, `var(--metal-gradient)` knob when on for the metallic-hardware read. |
| **Loading** | A metallic sheen sweeping left-to-right across a `--color-surface-strong` skeleton block — the gradient itself animates position. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Text placed on top of `var(--metal-gradient)` shifts contrast across its width — verify the darkest stop (#6b6f78) against your text color with `contrast_check.py`, not just the average.
- `--color-text-muted` (#a7abb3) at the compressed `--text-sm`/`--text-base` sizes on `--color-bg` needs an explicit AA check — small type plus muted grey is a common failure combo.
- Hairline-only borders on inputs need a stronger focus treatment than a color swap alone; add a 2px `--color-accent` outline so keyboard focus is unambiguous against the near-monochrome palette.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve `var(--metal-gradient)` for the one or two elements that should read as "the hardware" — overuse flattens its effect.
- ✅ Keep the palette cool and desaturated; `--color-accent` (icy cyan) is the only color permitted.
- ✅ Use hairlines consistently instead of visible borders for a low-rise, seamless silhouette.

## Don't

- ❌ Warm up the palette — any amber/orange undertone breaks the cool cyber-Y2K read.
- ❌ Apply the metal gradient to body text or large background fields — it's a hardware accent, not a wallpaper.
- ❌ Round corners past `--radius-lg` — this style stays tight and structured, not soft.

## Don't confuse this with…

*Commonly confused neighbors:* y2k-futurism, chromecore, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
