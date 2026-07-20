// Balletcore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf3f1",
        "surface": "#fffbfa",
        "surface-strong": "#fbe4e3",
        "border": "#e7b8bd",
        "text": "#5a3a3f",
        "text-muted": "#8a6266",
        "primary": "#c98a9c",
        "accent": "#b9a6d9",
      },
      borderRadius: {
        "sm": "10px",
        "md": "18px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(90,58,63,0.1)",
        "md": "0 8px 20px rgba(90,58,63,0.12)",
        "lg": "0 16px 36px rgba(90,58,63,0.14)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "'Quicksand'", "system-ui", "sans-serif"],
        "display": ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ribbon-border: 2px dashed var(--color-border);
//   --satin-fill: linear-gradient(160deg, #fffbfa 0%, #fce8e7 100%);
