// Material Design 3 / Material You — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef7ff",
        "surface": "#fef7ff",
        "surface-container": "#f3edf7",
        "surface-variant": "#e7e0ec",
        "text": "#1d1b20",
        "text-muted": "#49454f",
        "primary": "#6750a4",
        "on-primary": "#ffffff",
        "secondary": "#625b71",
        "tertiary": "#7d5260",
        "outline": "#79747e",
        "error": "#b3261e",
      },
      borderRadius: {
        "xs": "4px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "e1": "0 1px 2px rgba(0,0,0,0.30), 0 1px 3px 1px rgba(0,0,0,0.15)",
        "e2": "0 1px 2px rgba(0,0,0,0.30), 0 2px 6px 2px rgba(0,0,0,0.15)",
        "e3": "0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.30)",
      },
      fontFamily: {
        "sans": ["'Roboto'", "'Roboto Flex'", "system-ui", "sans-serif"],
        "display": ["'Roboto Flex'", "'Roboto'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "monospace"],
      },
      fontSize: {
        "label-sm": "0.6875rem",
        "label-md": "0.75rem",
        "body-md": "0.875rem",
        "body-lg": "1rem",
        "title-md": "1rem",
        "title-lg": "1.375rem",
        "headline-md": "1.75rem",
        "headline-lg": "2rem",
        "display-md": "2.8125rem",
        "display-lg": "3.5625rem",
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
        "emphasized": "cubic-bezier(0.2, 0, 0, 1)",
        "spatial-expressive": "cubic-bezier(0.38, 1.21, 0.22, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --state-hover: rgba(103,80,164,0.08);
//   --state-pressed: rgba(103,80,164,0.12);
