// Fantasy Cartography — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8d6ad",
        "surface": "#f6e8c7",
        "surface-2": "#d8c08c",
        "text": "#382b1b",
        "text-muted": "#755e3b",
        "primary": "#3f693f",
        "accent": "#a94832",
        "ink": "#293e48",
      },
      borderRadius: {
        "sm": "0",
        "md": "3px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "paper": "0 1px 0 rgba(255,255,255,.5) inset, 0 8px 18px rgba(56,43,27,.18)",
        "ink": "0 0 0 1px #382b1b",
      },
      fontFamily: {
        "sans": ["Georgia", "serif"],
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
        "standard": "cubic-bezier(.2,.75,.3,1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --contours: repeating-radial-gradient(ellipse at 48% 56%, transparent 0 12px, rgba(41,62,72,.16) 13px 14px, transparent 15px 23px);
