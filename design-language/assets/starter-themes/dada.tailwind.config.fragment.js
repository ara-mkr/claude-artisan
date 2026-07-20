// Dada — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eae4d6",
        "surface": "#f5f1e6",
        "surface-strong": "#ded4b8",
        "border": "#16151a",
        "text": "#16151a",
        "text-muted": "#4a473f",
        "primary": "#c21807",
        "accent": "#e8b700",
        "newsprint": "rgba(22, 21, 26, 0.06)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "2px 2px 0 var(--color-border)",
        "md": "4px 3px 0 var(--color-border)",
        "lg": "6px 5px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Courier New'", "ui-monospace", "monospace"],
        "display": ["'Times New Roman'", "Georgia", "serif"],
        "stencil": ["'Arial Black'", "Impact", "sans-serif"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
//   --tear-rotate-a: rotate(-1.4deg);
//   --tear-rotate-b: rotate(0.9deg);
//   --newsprint-texture: repeating-linear-gradient(115deg, var(--color-newsprint) 0 2px, transparent 2px 5px);
