// Dark Academia — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1c1712",
        "surface": "#26201a",
        "surface-2": "#332a20",
        "text": "#e8ddc7",
        "text-muted": "#a99a7f",
        "primary": "#8b5e34",
        "accent": "#5a6b4f",
        "oxblood": "#6e2b2b",
        "gold": "#b89b5e",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cormorant Garamond'", "'EB Garamond'", "serif"],
        "mono": ["'Courier Prime'", "monospace"],
      },
      fontSize: {
        "xs": "0.8rem",
        "sm": "0.9rem",
        "base": "1.05rem",
        "lg": "1.3rem",
        "xl": "1.7rem",
        "2xl": "2.3rem",
        "3xl": "3.1rem",
        "4xl": "4.2rem",
        "5xl": "5.6rem",
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --paper: #e8ddc7;
//   --rule: 1px solid #4a3f30;
