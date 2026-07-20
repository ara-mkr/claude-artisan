# Nanopunk — Implementation Spec

*Aliases:* nanotech futurism  
*Slug:* `nanopunk` · *Category:* retrofuturism · *Era:* 2000s–present

**Origin.** Cyberpunk offshoot centered on nanotechnology.

**Reference example.** Prey; various near-future sci-fi UIs.

## Signature move(s)

A `--molecular-grid` of tiny radial dots overlays every clinical-dark surface, evoking swarming nanoparticles at rest; on interaction, a `--scan-rule` beam sweeps across the element as if being "assembled" molecule by molecule. Corners stay tight and precise (2–12px), never soft — this is engineered matter, not organic growth.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Swarming particle/grey-goo motifs
- Clinical near-future tech
- Molecular grid overlays
- Smart-material morphing surfaces

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/nanopunk.css`.)

```css
/* Nanopunk — design tokens (generated from style_catalog.json) */
/* 2000s–present | Cyberpunk offshoot centered on nanotechnology. */
:root {
  /* color */
  --color-bg: #050a09;
  --color-surface: #0d1917;
  --color-surface-strong: #142622;
  --color-border: rgba(180, 255, 232, 0.22);
  --color-text: #e6fff8;
  --color-text-muted: #8fc9bc;
  --color-primary: #33f2c0;
  --color-accent: #a6ff3d;
  --color-swarm: #5ad1ff;
  --color-danger: #ff4f6d;
  /* radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 0 8px rgba(51,242,192,0.18);
  --shadow-md: 0 0 22px rgba(51,242,192,0.22);
  --shadow-lg: 0 0 44px rgba(51,242,192,0.26);
  /* font */
  --font-sans: 'Eurostile', 'Orbitron', system-ui, sans-serif;
  --font-display: 'Orbitron', 'Eurostile', sans-serif;
  --font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
  /* extra (signature gradients, composite borders, filters) */
  --molecular-grid: radial-gradient(circle, rgba(51,242,192,0.28) 0.5px, transparent 0.6px) 0 0/14px 14px;
  --scan-rule: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// Nanopunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#050a09",
        "surface": "#0d1917",
        "surface-strong": "#142622",
        "border": "rgba(180, 255, 232, 0.22)",
        "text": "#e6fff8",
        "text-muted": "#8fc9bc",
        "primary": "#33f2c0",
        "accent": "#a6ff3d",
        "swarm": "#5ad1ff",
        "danger": "#ff4f6d",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 8px rgba(51,242,192,0.18)",
        "md": "0 0 22px rgba(51,242,192,0.22)",
        "lg": "0 0 44px rgba(51,242,192,0.26)",
      },
      fontFamily: {
        "sans": ["'Eurostile'", "'Orbitron'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Eurostile'", "sans-serif"],
        "mono": ["'Share Tech Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --molecular-grid: radial-gradient(circle, rgba(51,242,192,0.28) 0.5px, transparent 0.6px) 0 0/14px 14px;
//   --scan-rule: linear-gradient(90deg, transparent, var(--color-primary), transparent);
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | `--color-surface-strong` fill with a faint `--molecular-grid` texture, tight `--radius-sm`; hover sweeps `--scan-rule` across the face left-to-right. |
| **Input** | Dark clinical field, `--color-border` hairline; focus triggers the `--scan-rule` sweep once and settles into a steady `--color-primary` outline. |
| **Card** | `--molecular-grid` background at low opacity on `--color-surface`, thin translucent `--color-border`, `--shadow-md` glow instead of a hard shadow. |
| **Nav** | Clinical dark bar, `--scan-rule` underline that travels to the active item rather than snapping. |
| **Modal** | Panel "assembles" on entry: `--molecular-grid` fades in first, then content, evoking nanoswarm formation; scrim stays near-black. |
| **Table** | Dense grid with `--font-mono` figures; header row carries a persistent faint `--molecular-grid` texture, body rows stay clean for legibility. |
| **Tooltip** | Small chip with `--color-swarm` border, `--shadow-sm`. |
| **Badge** | Sharp `--radius-sm` tag; use `--color-danger` for "goo/contamination" warning states, `--color-accent` for nominal. |
| **Toggle** | Track carries the molecular-grid texture; knob is a solid glowing node that "reassembles" (brief scan-rule flash) on toggle. |
| **Loading** | Swarming dot-field that coalesces into a shape, or a `--scan-rule` beam scanning repeatedly — never a plain spinner. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The `--molecular-grid` dot texture must stay under ~0.3 opacity and never sit directly behind body text — verify with `contrast_check.py` on the composited (texture + surface) value, not the base surface alone.
- The `--scan-rule` sweep and swarm-coalesce loading animation must respect `prefers-reduced-motion` — replace with a static `--color-primary` state change.
- `--color-danger` (contamination/warning red) must be reserved exclusively for actual error/danger states so it isn't confused with the ambient teal/green glow palette.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep the molecular-grid texture subtle and confined to backgrounds, never under text.
- ✅ Use the scan-rule sweep as a state-change signal (focus, load, assemble), not constant ambient motion.
- ✅ Keep corners tight and precise — nanopunk is engineered, not organic.

## Don't

- ❌ Round corners generously or use soft blob shapes — that reads as biopunk, not nanopunk.
- ❌ Run the swarm/scan animations continuously in the background; they should be event-triggered.
- ❌ Let `--color-swarm` (blue) and `--color-primary` (teal) collide without enough separation — reserve swarm-blue for secondary/informational accents only.

## Don't confuse this with…

*Commonly confused neighbors:* cyberpunk, biopunk.

vs cyberpunk: cyberpunk is magenta/cyan neon-noir HUD styling on black with scanlines; nanopunk is teal/green clinical precision with a molecular dot-grid and assembly-sweep motion, no magenta. vs biopunk: biopunk is wet, organic, asymmetric blob shapes with bio-glow; nanopunk is dry, precise, tight-cornered geometry with particle-swarm texture.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
