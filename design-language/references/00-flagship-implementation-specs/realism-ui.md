# Hyperrealism UI — Implementation Spec

*Aliases:* photoreal UI, realistic skeuomorphism  
*Slug:* `realism-ui` · *Category:* morphism · *Era:* 2008–2013

**Origin.** High-water mark of skeuomorphic app design.

**Reference example.** Korg iMS-20 synth app; early podcast/voice-memo apps.

## Signature move(s)

A four-layer physical-lighting stack on every raised control: a hard drop shadow (light source implied from above), a 1px inset top highlight (`--color-highlight`), an inset bottom shadow that reads as ambient occlusion, and a micro-texture (`--brushed-metal`) filling the surface itself. Nothing is a flat fill — every panel simulates a physical material lit from a single consistent direction.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Photorealistic materials and reflections
- Physically plausible lighting
- Detailed micro-textures
- Tactile knobs, dials, switches

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/realism-ui.css`.)

```css
/* Hyperrealism UI — design tokens (generated from style_catalog.json) */
/* 2008–2013 | High-water mark of skeuomorphic app design. */
:root {
  /* color */
  --color-bg: #2a2a2c;
  --color-surface: #38383b;
  --color-surface-strong: #46464a;
  --color-border: #1c1c1e;
  --color-text: #f5f5f2;
  --color-text-muted: #b8b8b4;
  --color-primary: #3ea6ff;
  --color-accent: #ffb238;
  --color-highlight: rgba(255,255,255,0.22);
  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 1px 1px rgba(0,0,0,0.5), inset 0 1px 0 var(--color-highlight);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 var(--color-highlight), inset 0 -2px 4px rgba(0,0,0,0.35);
  --shadow-lg: 0 12px 28px rgba(0,0,0,0.6), inset 0 1px 0 var(--color-highlight), inset 0 -3px 6px rgba(0,0,0,0.4);
  /* font */
  --font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-display: 'Helvetica Neue', 'Futura', sans-serif;
  --font-mono: ui-monospace, 'Menlo', monospace;
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
  --brushed-metal: repeating-linear-gradient(180deg, #3a3a3d 0px, #3d3d40 1px, #363638 2px);
  --led-glow: 0 0 6px 2px color-mix(in srgb, var(--color-primary) 70%, transparent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Hyperrealism UI — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#2a2a2c",
        "surface": "#38383b",
        "surface-strong": "#46464a",
        "border": "#1c1c1e",
        "text": "#f5f5f2",
        "text-muted": "#b8b8b4",
        "primary": "#3ea6ff",
        "accent": "#ffb238",
        "highlight": "rgba(255,255,255,0.22)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 1px rgba(0,0,0,0.5), inset 0 1px 0 var(--color-highlight)",
        "md": "0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 var(--color-highlight), inset 0 -2px 4px rgba(0,0,0,0.35)",
        "lg": "0 12px 28px rgba(0,0,0,0.6), inset 0 1px 0 var(--color-highlight), inset 0 -3px 6px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Futura'", "sans-serif"],
        "mono": ["ui-monospace", "'Menlo'", "monospace"],
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
//   --brushed-metal: repeating-linear-gradient(180deg, #3a3a3d 0px, #3d3d40 1px, #363638 2px);
//   --led-glow: 0 0 6px 2px color-mix(in srgb, var(--color-primary) 70%, transparent);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Beveled capsule/knob: `--brushed-metal` fill, `--shadow-md`, pressed state flips to an inset-only shadow (button "sinks" on `:active`). |
| **Input** | Recessed well: invert the highlight/shadow pair so the top edge reads dark and the bottom reads light, like a carved slot. |
| **Card** | The hero surface: `--brushed-metal` or leather-texture fill, `--shadow-lg`, `--radius-lg`, single consistent light source across all children. |
| **Nav** | Metal or wood-grain rail with a hairline highlight along its top edge; icons get individual drop shadows. |
| **Modal** | Glass or acrylic-look panel with `--shadow-lg` cast onto a dimmed backdrop, edges beveled like a physical panel lifted off the desk. |
| **Table** | Rows alternate `--color-surface` / `--color-surface-strong` with a 1px `--color-highlight` divider simulating an etched line. |
| **Tooltip** | Small brushed-metal chip with `--shadow-sm`; corner radius matches the button family for material continuity. |
| **Badge** | LED-style pill: saturated fill plus `--led-glow`, as if backlit. |
| **Toggle** | Physical rocker switch: track is a recessed groove (`--shadow-md`), knob is a beveled dome using the button treatment. |
| **Loading** | A spinning chrome/metal dial or a "power LED" pulsing with `--led-glow`. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- Multi-layer inset/outset shadows create false depth cues for low-vision users — never rely on shadow alone to signal "clickable"; pair with a visible border or label.
- Dark chrome/metal palettes plus subtle highlight text can fail contrast — verify `--color-text-muted` against `--color-surface`, not just `--color-bg`.
- The "pressed" (inset-only) active state must still show a visible focus ring; a control that only changes shadow direction is not perceivable to keyboard/screen-reader users.
- Avoid photoreal textures behind body copy; keep long text on the flattest, most uniform region of the material.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep one consistent light source (top-left or top) across every control on the page.
- ✅ Use texture (`--brushed-metal`) sparingly — on control bodies, not on text blocks.
- ✅ Flip highlight/shadow order to sell a "pressed" or "recessed" state.

## Don't

- ❌ Mix light directions between components — it breaks the physical illusion instantly.
- ❌ Apply the full four-layer shadow stack to small elements like badges; it turns to noise at small sizes.
- ❌ Use photoreal chrome/leather textures as a backdrop for paragraphs of text.

## Don't confuse this with…

*Commonly confused neighbors:* skeuomorphism.

vs skeuomorphism: skeuomorphism borrows an object's *cues* abstractly (a subtle bevel, a felt-green background) with fairly simple, single-layer shadows; Hyperrealism UI pushes those same cues to near-photographic fidelity — multi-layer physically-modeled lighting, brushed-metal/leather micro-textures, and LED-style glows meant to be mistaken for a photograph of a real device.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
