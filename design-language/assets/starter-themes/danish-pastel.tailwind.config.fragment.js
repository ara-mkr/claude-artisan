// Danish Pastel — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdeef2",
        "surface": "#ffffff",
        "surface-strong": "#fff1c6",
        "border": "#2b2b2b",
        "text": "#2b2b2b",
        "text-muted": "#5b5450",
        "primary": "#ff8fb1",
        "accent": "#8fd3f4",
        "lilac": "#cdb7f6",
        "mint": "#a8e6c1",
        "yellow": "#ffe27a",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fredoka'", "'Baloo 2'", "'Quicksand'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --checker: conic-gradient(var(--color-lilac) 90deg, transparent 90deg 180deg, var(--color-lilac) 180deg 270deg, transparent 270deg);
//   --checker-size: 24px 24px;
