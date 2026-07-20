// Steampunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#241b12",
        "surface": "#34281a",
        "surface-strong": "#422f1c",
        "border": "#8a6a3a",
        "text": "#f2e2c4",
        "text-muted": "#cbb188",
        "primary": "#b5762b",
        "accent": "#7a9e8e",
        "brass": "#c99a3d",
        "rivet": "#5a4326",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(0,0,0,0.4)",
        "md": "0 6px 14px rgba(0,0,0,0.5)",
        "lg": "0 14px 30px rgba(0,0,0,0.55)",
        "bevel": "inset 0 1px 0 rgba(255,229,173,0.25), inset 0 -2px 3px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Rockwell'", "'Roboto Slab'", "Georgia", "serif"],
        "display": ["'Playfair Display'", "'Old Standard TT'", "'Georgia'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --brass-sheen: linear-gradient(160deg, #e0b563, var(--color-brass) 50%, #8f6a2a);
