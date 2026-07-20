// Metro / Microsoft Design Language — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d0d0d",
        "surface": "#1a1a1a",
        "surface-strong": "#262626",
        "border": "#3a3a3a",
        "text": "#ffffff",
        "text-muted": "#a6a6a6",
        "primary": "#2d89ef",
        "accent": "#e51400",
        "tile-purple": "#6a00ff",
        "tile-green": "#00a300",
        "tile-teal": "#00aba9",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "none",
        "md": "none",
        "lg": "none",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "'Segoe UI Light'", "system-ui", "sans-serif"],
        "display": ["'Segoe UI Light'", "'Segoe UI'", "system-ui", "sans-serif"],
        "mono": ["'Consolas'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.5rem",
        "5xl": "5rem",
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
        "standard": "cubic-bezier(0.1, 0.9, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tile-grid-gap: 2px;
