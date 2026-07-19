// Brutalist Web Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-2": "#f0f0f0",
        "text": "#000000",
        "text-muted": "#333333",
        "primary": "#0000ff",
        "accent": "#ff0000",
        "visited": "#800080",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "none": "none",
        "hard": "4px 4px 0 #000000",
      },
      fontFamily: {
        "sans": ["'Times New Roman'", "Times", "serif"],
        "display": ["'Courier New'", "'Times New Roman'", "serif"],
        "mono": ["'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.6rem",
        "2xl": "2.2rem",
        "3xl": "3rem",
        "4xl": "4.5rem",
        "5xl": "6rem",
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
      },
      transitionTimingFunction: {
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --link-decoration: underline;
//   --border: 2px solid #000000;
