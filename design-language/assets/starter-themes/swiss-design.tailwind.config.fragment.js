// Swiss / International Typographic Style — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-2": "#f2f2f2",
        "text": "#111111",
        "text-muted": "#555555",
        "primary": "#e2001a",
        "accent": "#000000",
        "grid": "#d9d9d9",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "none": "none",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Akzidenz-Grotesk'", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.333rem",
        "xl": "1.777rem",
        "2xl": "2.369rem",
        "3xl": "3.157rem",
        "4xl": "4.209rem",
        "5xl": "5.61rem",
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
        "16": "128px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --baseline: 8px;
//   --columns: 12;
