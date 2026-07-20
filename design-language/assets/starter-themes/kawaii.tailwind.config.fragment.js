// Kawaii — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff0f6",
        "surface": "#ffffff",
        "surface-strong": "#ffe1ec",
        "border": "#ffb6d5",
        "text": "#6b2447",
        "text-muted": "#a45b82",
        "primary": "#ff6fa5",
        "accent": "#7fd8e8",
        "candy": "#ffd166",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(255,111,165,0.25)",
        "md": "0 6px 18px rgba(255,111,165,0.30)",
        "lg": "0 12px 32px rgba(255,111,165,0.32)",
      },
      fontFamily: {
        "sans": ["'Baloo 2'", "'Quicksand'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Fredoka'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --dots: radial-gradient(circle at 10px 10px, rgba(255,111,165,0.14) 2.5px, transparent 2.5px);
