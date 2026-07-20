# Dark Mode — Implementation Spec

*Aliases:* dark theme, night mode
*Slug:* `dark-mode` · *Category:* minimal-organic · *Era:* 2018–present

**Origin.** Mainstreamed by iOS/Android/macOS dark themes (2018–2019).

**Reference example.** System dark modes; Linear; developer tools.

## Signature move(s)

Elevation is communicated by *tint*, not shadow: a four-step `--elevation-0` through `--elevation-3` scale where each level is a progressively lighter flat white-tint overlay on near-black (`--color-bg` #0c0c10 → `--elevation-3` #26262f), so a raised card is simply a lighter gray rectangle, never a dark box with a black drop shadow. Accent colors (`--color-primary` #7c9cff, `--color-accent` #7fd9c4) are deliberately desaturated pastels — never neon-bright — so nothing vibrates against the dark field, and no surface ever touches pure `#000000`.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Dark neutral backgrounds (#0d0d12-ish, not pure black)
- Desaturated accent colors to avoid vibration
- Elevation via lighter surfaces, not shadow
- Reduced eye strain, OLED-friendly

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/dark-mode.css`.)

```css
/* Dark Mode — design tokens (generated from style_catalog.json) */
/* 2018–present | Mainstreamed by iOS/Android/macOS dark themes (2018–2019). */
:root {
  /* color: near-black neutrals (never pure #000), desaturated accents so
     nothing vibrates against the dark field */
  --color-bg: #0c0c10;
  --color-surface: #16161c;
  --color-surface-strong: #1e1e26;
  --color-border: rgba(255,255,255,0.09);
  --color-text: #e8e8ec;
  --color-text-muted: #9a9aa5;
  --color-primary: #7c9cff;
  --color-accent: #7fd9c4;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  /* shadow: intentionally minimal — elevation comes from surface tint below */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.45);
  --shadow-lg: 0 12px 28px rgba(0,0,0,0.5);
  /* font */
  --font-sans: 'Inter', -apple-system, system-ui, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
  /* extra (signature OLED-black elevation system — flat tint, not shadow) */
  --elevation-0: var(--color-bg);
  --elevation-1: var(--color-surface);
  --elevation-2: var(--color-surface-strong);
  --elevation-3: #26262f;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Dark Mode — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0c0c10",
        "surface": "#16161c",
        "surface-strong": "#1e1e26",
        "border": "rgba(255,255,255,0.09)",
        "text": "#e8e8ec",
        "text-muted": "#9a9aa5",
        "primary": "#7c9cff",
        "accent": "#7fd9c4",
        "elevation-0": "#0c0c10",
        "elevation-1": "#16161c",
        "elevation-2": "#1e1e26",
        "elevation-3": "#26262f",
      },
      borderRadius: {
        "sm": "8px",
        "md": "12px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "md": "0 4px 10px rgba(0,0,0,0.45)",
        "lg": "0 12px 28px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Inter'", "-apple-system", "system-ui", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Sits at `--elevation-2`; hover steps up to `--elevation-3` (lighter tint, not a shadow bump). Primary variant fills `--color-primary` at full saturation — the one place saturation is allowed. |
| **Input** | `--elevation-1` fill, 1px `--color-border`; focus ring in `--color-primary` at reduced opacity so it glows rather than glares. |
| **Card** | The hero: `--elevation-1` against `--elevation-0` page background — the *only* depth cue is that the card is a lighter gray, no `--shadow-*` needed (kept minimal, for scroll containers only). |
| **Nav** | `--elevation-2`, sits visually "above" page content purely by being lighter; bottom border is the 9%-opacity `--color-border`, not a hard line. |
| **Modal** | `--elevation-3` (lightest step, maximum prominence), scrim is `--color-bg` at high opacity rather than pure black. |
| **Table** | Header row at `--elevation-1`, body rows at `--elevation-0`; alternate striping (if used) steps to `--elevation-1` — never introduce a shadow between rows. |
| **Tooltip** | `--elevation-3`, `--radius-sm`, `--shadow-sm` only for the tiny lift off the cursor — the one component allowed a real shadow since it floats over arbitrary content. |
| **Badge** | `--radius-pill`, filled with a 15%-opacity tint of `--color-primary`/`--color-accent` over `--elevation-2`, text at full accent color. |
| **Toggle** | Track at `--elevation-2` off / `--color-primary` on; knob stays `--color-text` colored so it never disappears into the track. |
| **Loading** | A ring or bar cycling through the elevation steps (`--elevation-1` → `--elevation-3` → back) rather than a bright spinner, staying calm at night. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Body text contrast still needs explicit verification — `--color-text` (#e8e8ec) on `--elevation-0`/`--elevation-1` should exceed 7:1 for comfort at night, and `--color-text-muted` (#9a9aa5) must be checked separately since it's the one most likely to fail on `--elevation-3`.
- Never drop pure black (`#000000`) or pure white (`#ffffff`) into the palette — both cause halation/eye strain against this near-black system; stick to the token set.
- Desaturated accents (`--color-primary`, `--color-accent`) can still fail contrast for small text even though they look "muted enough" — verify explicitly rather than assuming desaturation equals accessible.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Use the `--elevation-0..3` scale consistently for stacking order — never mix elevation-tint with a heavy drop shadow on the same surface.
- ✅ Keep saturated color reserved for primary actions and status; everything else stays in the gray elevation scale.
- ✅ Test every screen at both this dark theme and a light counterpart if the product ships both — dark mode is not just "invert the colors."

## Don't

- ❌ Reuse light-mode shadow values as-is; dark surfaces need much lower shadow opacity or none at all.
- ❌ Use saturated neon accent colors — they vibrate uncomfortably against near-black and undermine the "reduced eye strain" premise.
- ❌ Let borders/dividers use solid opaque grays; keep them as low-opacity white (`rgba(255,255,255,0.09)`) so they scale with any elevation beneath them.

## Don't confuse this with…

*Commonly confused neighbors:* minimalism, bento-grid.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
