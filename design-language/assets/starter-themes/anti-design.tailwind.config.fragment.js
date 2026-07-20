// Anti-Design — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffe600",
        "surface": "#ff00ff",
        "surface-strong": "#00ffff",
        "border": "#000000",
        "text": "#000000",
        "text-muted": "#1a1a1a",
        "primary": "#0000ff",
        "accent": "#ff0000",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "3px 3px 0 #ff0000",
        "md": "5px 5px 0 #0000ff, -3px -3px 0 #00ffff",
        "lg": "8px 8px 0 #ff0000, -5px -5px 0 #0000ff",
      },
      fontFamily: {
        "sans": ["'Times New Roman'", "Times", "serif"],
        "display": ["'Comic Sans MS'", "'Chalkboard SE'", "cursive"],
        "mono": ["'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.7rem",
        "sm": "0.9rem",
        "base": "1rem",
        "lg": "1.2rem",
        "xl": "1.6rem",
        "2xl": "2.1rem",
        "3xl": "2.8rem",
        "4xl": "3.6rem",
        "5xl": "4.8rem",
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
        "standard": "steps(1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tilt-a: rotate(-1.6deg);
//   --tilt-b: rotate(1.1deg);
