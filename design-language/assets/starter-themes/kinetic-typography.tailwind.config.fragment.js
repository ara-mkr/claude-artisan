// Kinetic Typography — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f8f6ef",
        "surface": "#ffffff",
        "surface-2": "#e9e5da",
        "text": "#121212",
        "text-muted": "#5d5b55",
        "primary": "#ff3b30",
        "accent": "#1455d9",
        "lime": "#c8ff00",
      },
      borderRadius: {
        "sm": "0",
        "md": "0",
        "lg": "0",
        "pill": "0",
      },
      boxShadow: {
        "type": "6px 6px 0 #121212",
        "rule": "0 2px 0 #121212",
      },
      fontFamily: {
        "sans": ["Arial Black", "Arial", "sans-serif"],
        "display": ["Arial Black", "Arial", "sans-serif"],
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
        "standard": "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --marquee-gradient: linear-gradient(90deg, #ff3b30, #c8ff00, #1455d9, #ff3b30);
