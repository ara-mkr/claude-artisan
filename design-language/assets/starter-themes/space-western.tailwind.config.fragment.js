// Space Western — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#17151a",
        "surface": "#272129",
        "surface-2": "#44363a",
        "text": "#f5e5c8",
        "text-muted": "#c6ae91",
        "primary": "#d56b3e",
        "accent": "#74bcc1",
        "dust": "#b58b61",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "panel": "0 1px 0 rgba(255,255,255,.18) inset, 0 8px 18px rgba(0,0,0,.3)",
        "stamp": "3px 3px 0 #17151a",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["Georgia", "serif"],
        "mono": ["'Courier New'", "monospace"],
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
        "standard": "cubic-bezier(.2,.75,.3,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --dust-gradient: linear-gradient(160deg, rgba(181,139,97,.28), transparent 52%);
