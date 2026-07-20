// Dadaist / Collage Web — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff6ea",
        "surface": "#ffffff",
        "surface-strong": "#ffe37a",
        "border": "#101010",
        "text": "#101010",
        "text-muted": "#514c3f",
        "primary": "#ff3b30",
        "accent": "#0043ff",
        "sticker": "#34c759",
        "scrap-shadow": "rgba(16, 16, 16, 0.9)",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "3px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-scrap-shadow)",
        "md": "6px 6px 0 var(--color-scrap-shadow)",
        "lg": "9px 9px 0 var(--color-scrap-shadow)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'Times New Roman'", "'Georgia'", "serif"],
        "stamp": ["'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scrap-rotate-1: rotate(-2.2deg);
//   --scrap-rotate-2: rotate(1.8deg);
//   --scrap-rotate-3: rotate(-0.7deg);
//   --cutout-border: 2px solid var(--color-border);
