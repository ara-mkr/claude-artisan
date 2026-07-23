// Fauvism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fff8ee",
        "surface": "#ffffff",
        "surface-2": "#ffe9d1",
        "text": "#1a1a1a",
        "text-muted": "#5c4a3a",
        "primary": "#ff5e1a",
        "accent": "#1c3fab",
        "viridian": "#00a878",
        "magenta": "#d6146b",
      },
      borderRadius: {
        "sm": "4px",
        "md": "12px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "bold": "6px 6px 0 #1c3fab",
        "bold-sm": "3px 3px 0 #d6146b",
      },
      fontFamily: {
        "sans": ["'Fraunces'", "'Georgia'", "serif"],
        "display": ["'Fraunces'", "'Playfair Display'", "serif"],
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
//   --brushstroke-border: 3px solid #1a1a1a;
//   --clash-gradient: linear-gradient(105deg, #ff5e1a 0%, #d6146b 45%, #1c3fab 100%);
