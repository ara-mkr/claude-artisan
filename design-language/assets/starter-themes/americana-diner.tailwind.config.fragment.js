// Retro Americana / Diner — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf6e3",
        "surface": "#ffffff",
        "surface-strong": "#fff8ea",
        "border": "#1a1a1a",
        "text": "#1a1a1a",
        "text-muted": "#5c5346",
        "primary": "#d62828",
        "accent": "#1fb6b0",
        "chrome": "#c9ccd1",
      },
      borderRadius: {
        "sm": "4px",
        "md": "10px",
        "lg": "18px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 0 rgba(26,26,26,0.9)",
        "md": "0 4px 0 rgba(26,26,26,0.9)",
        "lg": "0 8px 0 rgba(26,26,26,0.9)",
        "neon": "0 0 6px rgba(31,182,176,0.7), 0 0 16px rgba(31,182,176,0.4)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Pacifico'", "'Brush Script MT'", "cursive"],
        "mono": ["'Courier New'", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --checker: repeating-linear-gradient(45deg, #1a1a1a 0 10px, #fdf6e3 10px 20px);
//   --chrome-edge: linear-gradient(180deg, #f4f4f4, #b8bcc2 50%, #f4f4f4);
