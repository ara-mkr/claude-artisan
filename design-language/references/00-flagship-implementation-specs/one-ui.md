# Samsung One UI — Implementation Spec

*Aliases:* One UI, Samsung design
*Slug:* `one-ui` · *Category:* flat-platform · *Era:* 2018–present

**Origin.** Samsung, One UI (2018).

**Reference example.** Samsung Galaxy phones.

## Signature move(s)

Large, generously rounded content zones (`--radius-lg: 28px`, up to `--reach-zone-radius: 32px`) pushed toward the bottom of the screen, with a reserved `--bottom-safe-pad: 28px` so primary actions always sit in one-handed thumb reach. Surfaces are soft neutral grey/white with a single confident blue for interaction, never competing with content.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Large rounded content zones, reachable UI
- Bottom-weighted layouts for one-handed use
- Soft neutral surfaces, clear color
- Calm, spacious Android skin

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/one-ui.css`.)

```css
/* Samsung One UI — design tokens (generated from style_catalog.json) */
/* 2018–present | Samsung, One UI (2018). */
:root {
  /* color */
  --color-bg: #f5f6f8;
  --color-surface: #ffffff;
  --color-surface-strong: #eef1f6;
  --color-border: #e1e5ec;
  --color-text: #1c1c1e;
  --color-text-muted: #6b7079;
  --color-primary: #1259e3;
  --color-accent: #0091ff;
  /* radius */
  --radius-sm: 14px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 3px rgba(28, 28, 30, 0.06);
  --shadow-md: 0 6px 18px rgba(28, 28, 30, 0.08);
  --shadow-lg: 0 16px 36px rgba(28, 28, 30, 0.1);
  /* font */
  --font-sans: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif;
  --font-display: 'SamsungOne', -apple-system, system-ui, sans-serif;
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
  --reach-zone-radius: 32px;
  --bottom-safe-pad: 28px;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Samsung One UI — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f6f8",
        "surface": "#ffffff",
        "surface-strong": "#eef1f6",
        "border": "#e1e5ec",
        "text": "#1c1c1e",
        "text-muted": "#6b7079",
        "primary": "#1259e3",
        "accent": "#0091ff",
      },
      borderRadius: {
        "sm": "14px",
        "md": "20px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(28, 28, 30, 0.06)",
        "md": "0 6px 18px rgba(28, 28, 30, 0.08)",
        "lg": "0 16px 36px rgba(28, 28, 30, 0.1)",
      },
      fontFamily: {
        "sans": ["'SamsungOne'", "'SF Pro'", "-apple-system", "system-ui", "sans-serif"],
        "display": ["'SamsungOne'", "-apple-system", "system-ui", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
        "xl": "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem", "5xl": "4rem",
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px",
        "8": "32px", "12": "48px", "16": "64px", "24": "96px",
        "reach-zone-radius": "32px",
        "bottom-safe-pad": "28px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` or `--radius-lg`, solid `--color-primary` fill, positioned within `--bottom-safe-pad` of the viewport bottom on mobile layouts; subtle `--shadow-sm` lift. |
| **Input** | `--color-surface-strong` fill (no border by default), `--radius-md`, focus swaps to `--color-surface` with a `--color-primary` ring. |
| **Card** | `--color-surface`, `--radius-lg`, `--shadow-sm`; large content cards use `--reach-zone-radius` for an even softer, huggable corner. |
| **Nav** | Bottom tab bar (not top) with icons and labels, generous touch targets, active tab tinted `--color-primary`. |
| **Modal** | Bottom sheet pattern: slides up from the bottom edge, top corners at `--reach-zone-radius`, flat bottom edge, `--shadow-lg`. |
| **Table** | `--color-surface` rows with `--radius-sm` per-row grouping (One UI favors grouped list cells over hairline tables), `--color-border` separators only within groups. |
| **Tooltip** | `--color-text` fill, `--color-bg` text, `--radius-sm`, minimal and brief. |
| **Badge** | `--radius-pill` chip, `--color-accent` fill for informational, `--color-primary` for active/selected state. |
| **Toggle** | Wide `--radius-pill` track, `--color-primary` when on, generous knob size for thumb accuracy. |
| **Loading** | A calm circular spinner in `--color-primary`, or a bottom-anchored progress bar respecting `--bottom-safe-pad`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Bottom-weighted layouts must still keep top-of-screen content reachable and readable — don't sacrifice upper-screen contrast/legibility just because primary actions live low.
- Verify `--color-text-muted` (#6b7079) against `--color-surface-strong` (#eef1f6) with `contrast_check.py`, since One UI's soft neutral-on-neutral palette can read lower contrast than it looks.
- Touch targets in the reach zone should be no smaller than 44×44px, consistent with the platform's own one-handed-use rationale — treat this as a hard floor, not a suggestion.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Push primary actions and key content toward the bottom third of the viewport on mobile.
- ✅ Use large, consistent radii (`--radius-lg`/`--reach-zone-radius`) across all major content zones.
- ✅ Keep the palette to soft neutrals plus one confident blue — avoid introducing competing accent hues.

## Don't

- ❌ Don't place primary CTAs at the very top of a mobile layout — it defeats the reachability premise.
- ❌ Don't mix in sharp corners; every zone-level surface should share the same rounded language.
- ❌ Don't add heavy shadows or high-contrast borders — One UI stays soft and low-contrast between surfaces.

## Don't confuse this with…

*Commonly confused neighbors:* material-design-3, fluent-design-2.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
