// Webcore / Old Web — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ff00ff",
        "surface": "#c0c0c0",
        "surface-strong": "#e0e0e0",
        "border": "#000080",
        "text": "#000000",
        "text-muted": "#333366",
        "primary": "#0000ff",
        "accent": "#00ff00",
        "link-visited": "#800080",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff",
        "md": "inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff",
        "lg": "4px 4px 0 #000000",
      },
      fontFamily: {
        "sans": ["'Comic Sans MS'", "'Comic Neue'", "cursive"],
        "display": ["'Comic Sans MS'", "'Impact'", "cursive"],
        "mono": ["'Courier New'", "monospace"],
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
        "standard": "linear",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --tile-bg: repeating-conic-gradient(#ff00ff 0% 25%, #cc00cc 0% 50%) 0 0/24px 24px;
//   --bevel-outset: 2px outset #c0c0c0;
//   --bevel-inset: 2px inset #c0c0c0;
