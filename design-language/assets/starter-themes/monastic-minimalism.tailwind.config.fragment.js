// Monastic Minimalism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e9e6de",
        "surface": "#f6f4ee",
        "surface-2": "#d8d3c8",
        "text": "#292822",
        "text-muted": "#6b685f",
        "primary": "#515c4d",
        "accent": "#8f3e32",
        "stone": "#b9b3a7",
      },
      borderRadius: {
        "sm": "0",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "recessed": "inset 0 1px 2px rgba(41,40,34,.16)",
        "quiet": "0 8px 20px rgba(41,40,34,.08)",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["Georgia", "serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
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
        "standard": "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --rule: linear-gradient(90deg, transparent, #b9b3a7, transparent);
