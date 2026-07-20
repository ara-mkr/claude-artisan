// Seapunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#062c31",
        "surface": "#0d4750",
        "surface-strong": "#135b66",
        "border": "#00e5ff",
        "text": "#eafffc",
        "text-muted": "#9fd9d4",
        "primary": "#00e5ff",
        "accent": "#ff6ec7",
        "lime": "#a6ff3d",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,229,255,0.25)",
        "md": "0 8px 20px rgba(0,229,255,0.28)",
        "lg": "0 18px 40px rgba(0,229,255,0.32)",
      },
      fontFamily: {
        "sans": ["'Verdana'", "'Geneva'", "sans-serif"],
        "display": ["'Papyrus'", "'Herculanum'", "'Verdana'", "sans-serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --holo-gradient: linear-gradient(120deg, #00e5ff, #ff6ec7, #a6ff3d, #00e5ff);
