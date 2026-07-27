// Islamic Geometric — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6eddb",
        "surface": "#fffaf0",
        "surface-2": "#e6d9be",
        "text": "#173a3a",
        "text-muted": "#49625e",
        "primary": "#066c72",
        "accent": "#c69332",
        "lapis": "#214f87",
      },
      borderRadius: {
        "sm": "0",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "tile": "0 1px 0 #fffaf0 inset, 0 6px 18px rgba(23,58,58,.14)",
        "inlay": "0 0 0 2px #c69332 inset",
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
        "standard": "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --star-grid: conic-gradient(from 30deg at 50% 50%, #066c72 0 30deg, transparent 31deg 60deg, #c69332 61deg 90deg, transparent 91deg 120deg, #214f87 121deg 150deg, transparent 151deg 180deg);
