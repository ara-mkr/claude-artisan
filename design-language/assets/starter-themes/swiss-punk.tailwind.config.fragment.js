// Swiss Punk / New Wave — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f1f0ea",
        "surface": "#ffffff",
        "surface-strong": "#e7e5db",
        "border": "#16161a",
        "text": "#16161a",
        "text-muted": "#4c4c50",
        "primary": "#ff2e63",
        "accent": "#08b2e3",
        "yellow": "#ffd400",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "9px 9px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Univers'", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Univers'", "Arial", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.6, 0, 0.4, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tilt-deg: -2.5deg;
//   --rule-line: 3px solid var(--color-border);
