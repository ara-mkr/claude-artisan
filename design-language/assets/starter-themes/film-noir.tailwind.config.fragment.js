// Film Noir — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#111111",
        "surface": "#1b1b1b",
        "surface-2": "#292929",
        "text": "#f5eedc",
        "text-muted": "#c9c0ac",
        "primary": "#e8dfc9",
        "accent": "#bb342f",
        "smoke": "#78736a",
      },
      borderRadius: {
        "sm": "0",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "hard": "8px 8px 0 #050505",
        "light": "0 0 0 1px rgba(245,238,220,.28)",
      },
      fontFamily: {
        "sans": ["Arial", "Helvetica", "sans-serif"],
        "display": ["Georgia", "'Times New Roman'", "serif"],
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
        "standard": "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --blind-stripes: repeating-linear-gradient(145deg, transparent 0 15px, rgba(245,238,220,.08) 16px 18px);
