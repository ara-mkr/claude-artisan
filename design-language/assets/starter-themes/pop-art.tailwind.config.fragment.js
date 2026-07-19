// Pop Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff8e7",
        "surface": "#ffffff",
        "text": "#111111",
        "text-muted": "#333333",
        "primary": "#ff2d95",
        "accent": "#00b3ff",
        "yellow": "#ffe000",
        "red": "#ff1e1e",
        "black": "#111111",
      },
      borderRadius: {
        "sm": "0px",
        "md": "8px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "hard": "5px 5px 0 #111111",
      },
      fontFamily: {
        "sans": ["'Bangers'", "'Archivo Black'", "sans-serif"],
        "display": ["'Bangers'", "'Anton'", "sans-serif"],
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
        "standard": "steps(2, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --benday: radial-gradient(#ff2d95 30%, transparent 31%) 0 0 / 12px 12px;
//   --outline: 3px solid #111111;
