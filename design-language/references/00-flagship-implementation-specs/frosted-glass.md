# Frosted Glass — Implementation Spec

*Aliases:* frosted panel, blur overlay
*Slug:* `frosted-glass` · *Category:* glass · *Era:* 2013–present

**Origin.** Generic pattern popularized by iOS 7 blur layers.

**Reference example.** iOS Control Center; modal backdrops across the web.

## Signature move(s)

A simple, workmanlike `backdrop-filter: blur(--blur-backdrop)` behind an overlay with a semi-opaque white scrim (`--color-surface` at 55–72% opacity) — no edge lighting, no refraction tricks, no colorful gradient underneath. The point is pure legibility: whatever is behind the panel gets softened into an unobtrusive smear so foreground content reads cleanly.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Simple backdrop-filter blur behind modals/overlays
- Semi-opaque white or dark scrim
- Content legibility via blur + tint
- No strong refraction or edge lighting

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/frosted-glass.css`.)

```css
/* Frosted Glass — design tokens (generated from style_catalog.json) */
/* 2013–present | Generic pattern popularized by iOS 7 blur layers. */
:root {
  /* color */
  --color-bg: #7c8a99;
  --color-bg-photo-a: #93a2b0;
  --color-bg-photo-b: #5c6b7a;
  --color-surface: rgba(255, 255, 255, 0.55);
  --color-surface-strong: rgba(255, 255, 255, 0.72);
  --color-border: rgba(255, 255, 255, 0.4);
  --color-text: #16202b;
  --color-text-muted: #3d4a58;
  --color-primary: #1f6feb;
  --color-accent: #1a1f26;
  /* radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(10,16,24,0.18);
  --shadow-md: 0 6px 20px rgba(10,16,24,0.22);
  --shadow-lg: 0 14px 36px rgba(10,16,24,0.26);
  /* blur */
  --blur-backdrop: 12px;
  /* font */
  --font-sans: 'SF Pro Text', -apple-system, system-ui, sans-serif;
  --font-display: 'SF Pro Display', -apple-system, system-ui, sans-serif;
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
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* extra */
  --bg-image: linear-gradient(160deg, var(--color-bg-photo-a) 0%, var(--color-bg-photo-b) 100%);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Frosted Glass — Tailwind theme fragment (generated).
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#7c8a99",
        "bg-photo-a": "#93a2b0",
        "bg-photo-b": "#5c6b7a",
        "surface": "rgba(255, 255, 255, 0.55)",
        "surface-strong": "rgba(255, 255, 255, 0.72)",
        "border": "rgba(255, 255, 255, 0.4)",
        "text": "#16202b",
        "text-muted": "#3d4a58",
        "primary": "#1f6feb",
        "accent": "#1a1f26",
      },
      borderRadius: {
        "sm": "8px", "md": "14px", "lg": "20px", "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(10,16,24,0.18)",
        "md": "0 6px 20px rgba(10,16,24,0.22)",
        "lg": "0 14px 36px rgba(10,16,24,0.26)",
      },
      backdropBlur: {
        "backdrop": "12px",
      },
      fontFamily: {
        "sans": ["'SF Pro Text'", "-apple-system", "system-ui", "sans-serif"],
        "display": ["'SF Pro Display'", "-apple-system", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Background photo gradient is CSS-only:
//   --bg-image: linear-gradient(160deg, var(--color-bg-photo-a) 0%, var(--color-bg-photo-b) 100%);
```

## Component rules (the 10 primitives)

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--radius-pill` or `--radius-md`, `--color-surface-strong` fill with `blur(--blur-backdrop)`, `--shadow-sm`; primary variant uses solid `--color-primary` (no blur) for max legibility. |
| **Input** | `--color-surface` fill with backdrop blur, 1px `--color-border`; focus swaps to `--color-surface-strong` for a firmer read. |
| **Card** | `--color-surface`, `blur(--blur-backdrop)`, `--radius-lg`, `--shadow-md` — sits over a photographic or gradient background (`--bg-image`). |
| **Nav** | Full-width bar, `--color-surface-strong` + blur, pinned so content visibly frosts as it scrolls beneath. |
| **Modal** | The canonical use case: `--color-surface-strong` panel with strong blur over a dimmed backdrop; this is the pattern's origin (iOS action sheets). |
| **Table** | Keep table body on near-opaque `--color-surface-strong` (not the lighter `--color-surface`) so rows of text stay legible. |
| **Tooltip** | Small `--color-surface-strong` chip with blur; add a solid fallback for browsers without backdrop-filter support. |
| **Badge** | Solid-tint pill, no blur — badges are small enough that blur adds nothing but cost. |
| **Toggle** | Frosted track, solid opaque knob so state is unambiguous against the translucent track. |
| **Loading** | A blurred `--color-surface-strong` overlay with a centered spinner — classic "loading sheet" pattern. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

- Always provide a solid fallback via `@supports not (backdrop-filter: blur(1px))` — this pattern is old enough that some contexts still lack support, and text must never depend on the blur to be legible.
- Honor `prefers-reduced-transparency: reduce` by swapping `--color-surface`/`--color-surface-strong` to fully opaque equivalents.
- Verify `--color-text` on `--color-surface` (55% white) passes contrast against the busiest expected background photo — use `contrast_check.py` with the worst-case composited color, not just the token alone.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Reserve strong blur (`--blur-backdrop`) for temporary overlays: modals, sheets, nav-on-scroll.
- ✅ Use `--color-surface-strong` (72% opacity) wherever body text lives, `--color-surface` (55%) only for large chrome.
- ✅ Provide an opaque fallback for reduced-transparency and unsupported browsers.

## Don't

- ❌ Add colorful edge lighting or refraction — that's glassmorphism, a different, more decorative style.
- ❌ Stack two frosted layers on top of each other.
- ❌ Use frosted panels over plain flat backgrounds — the blur has nothing to soften and looks pointless.

## Don't confuse this with…

*Commonly confused neighbors:* glassmorphism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
