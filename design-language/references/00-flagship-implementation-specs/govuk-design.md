# GOV.UK Design System — Implementation Spec

*Aliases:* GDS, GOV.UK  
*Slug:* `govuk-design` · *Category:* flat-platform · *Era:* 2012–present

**Origin.** UK Government Digital Service.

**Reference example.** gov.uk.

## Signature move(s)

Radical clarity through subtraction: zero border-radius, black text on white, a single 2px bottom `--shadow-sm` rule under buttons to convey "press me" without any gradient, and a loud yellow `--color-focus` outline that is impossible to miss. GDS earns its trust by refusing every decorative impulse — the interface disappears so the task doesn't.

> Apply the signature move to *every relevant surface*, not once decoratively. Repeating it is what makes the style read as intentional.

## Defining traits

- Radically clear, task-focused, accessible
- Transport/GDS typeface, black on white
- No decoration; content and usability only
- Rigorous WCAG compliance

## Design tokens (CSS custom properties)

Paste into a `:root` block. (Also saved as a ready-to-import file at `assets/starter-themes/govuk-design.css`.)

```css
/* GOV.UK Design System — design tokens (generated from style_catalog.json) */
/* 2012–present | UK Government Digital Service. */
:root {
  /* color */
  --color-bg: #ffffff;
  --color-surface: #f3f2f1;
  --color-surface-strong: #ebeae9;
  --color-border: #0b0c0c;
  --color-text: #0b0c0c;
  --color-text-muted: #505a5f;
  --color-primary: #00703c;
  --color-accent: #1d70b8;
  --color-focus: #ffdd00;
  --color-error: #d4351c;
  /* radius */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 0px;
  /* shadow */
  --shadow-sm: 0 2px 0 #002d18;
  --shadow-md: 0 2px 0 #002d18;
  --shadow-lg: 0 2px 0 #002d18;
  /* font */
  --font-sans: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'GDS Transport Mono', ui-monospace, monospace;
  /* text */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1.1875rem;
  --text-lg: 1.375rem;
  --text-xl: 1.75rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3rem;
  --text-5xl: 3.75rem;
  /* space */
  --space-1: 5px;
  --space-2: 10px;
  --space-3: 15px;
  --space-4: 20px;
  --space-6: 30px;
  --space-8: 40px;
  --space-12: 50px;
  --space-16: 60px;
  --space-24: 80px;
  /* ease (signature focus treatment) */
  --ease-standard: ease-in-out;
  --focus-ring: 3px solid var(--color-focus);
  --focus-shadow: 0 0 0 3px #0b0c0c;
}
```

## Tailwind config fragment

Merge into `tailwind.config.js` under `theme.extend`.

```js
// GOV.UK Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#f3f2f1",
        "surface-strong": "#ebeae9",
        "border": "#0b0c0c",
        "text": "#0b0c0c",
        "text-muted": "#505a5f",
        "primary": "#00703c",
        "accent": "#1d70b8",
        "focus": "#ffdd00",
        "error": "#d4351c",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "0 2px 0 #002d18",
        "md": "0 2px 0 #002d18",
        "lg": "0 2px 0 #002d18",
      },
      fontFamily: {
        "sans": ["'GDS Transport'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'GDS Transport'", "'Helvetica Neue'", "Arial", "sans-serif"],
        "mono": ["'GDS Transport Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1.1875rem",
        "lg": "1.375rem",
        "xl": "1.75rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "3.75rem",
      },
      spacing: {
        "1": "5px",
        "2": "10px",
        "3": "15px",
        "4": "20px",
        "6": "30px",
        "8": "40px",
        "12": "50px",
        "16": "60px",
        "24": "80px",
      },
      transitionTimingFunction: {
        "standard": "ease-in-out",
      },
    },
  },
};

// Signature focus tokens are CSS-only:
//   --focus-ring: 3px solid var(--color-focus);
//   --focus-shadow: 0 0 0 3px #0b0c0c;
```

## Component rules (the 10 primitives)

Each shows how that primitive expresses the signature move.

| Primitive | How it expresses the style |
| --- | --- |
| **Button** | Square corners, solid `--color-primary` fill, `--shadow-sm` "button shadow" that compresses to 0 on `:active` for a physical press feel. |
| **Input** | Square corners, thick 2px `--color-border`, label always above (never inline/floating); on focus, `--focus-ring` + `--focus-shadow` stack. |
| **Card** | Rare in GDS — prefer plain content sections separated by a `--color-border` rule instead of boxed cards. |
| **Nav** | Black bar, white Transport-typeface text, service name left-aligned, no icons unless functionally necessary. |
| **Modal** | Avoided by convention — GDS prefers full-page transitions over dialogs; if used, square, solid, and dismiss-by-button only. |
| **Table** | Square cells, `--color-border` row dividers, header row bold with a heavier bottom border. |
| **Tooltip** | Avoided — GDS uses inline hint text (`--color-text-muted`) under form fields instead of hover tooltips. |
| **Badge** | Square "tag" component: solid `--color-primary`/`--color-error` fill, white text, uppercase, high contrast only. |
| **Toggle** | Rendered as a standard checkbox/radio pair, never a stylized switch — GDS avoids ambiguous custom controls. |
| **Loading** | Plain text "Loading…" with an accessible live region; spinner is secondary, never the only signal. |

Cover all interactive states for the button at minimum: default / hover / active / disabled (and focus-visible for accessibility).

## Accessibility corrections (required)

Trendy styles often fight legibility by default. For this style specifically:

- The yellow `--color-focus` outline must always pair with the black `--focus-shadow` — yellow alone fails contrast against light backgrounds.
- Never substitute a custom-styled toggle/switch for a native checkbox — GDS patterns are chosen because they're proven accessible, not for visual novelty.
- Error messages must appear both as a page-level summary and inline next to the field, per GDS error-summary pattern.

Always finish with `scripts/contrast_check.py` on real text/background pairs and `scripts/consistency_audit.py` on the codebase.

## Do

- ✅ Keep every corner square — zero radius is a deliberate accessibility/trust signal, not an oversight.
- ✅ Use the black-on-white default and reserve color for links, primary actions, and status only.
- ✅ Write in plain, direct, second-person language matching the visual restraint.

## Don't

- ❌ Add rounded corners, gradients, or shadows beyond the 2px button shadow.
- ❌ Replace native form controls with custom-styled equivalents.
- ❌ Use a modal/dialog where a full page transition would serve the task better.

## Don't confuse this with…

*Commonly confused neighbors:* uswds, minimalism.

---
*Generated from `scripts/style_catalog.json` + authored spec. Regenerate rather than hand-editing so tokens stay in sync.*
