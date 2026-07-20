// Emboss / Deboss — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#dbd6cb",
        "surface": "#d3cebf",
        "surface-strong": "#c8c2b0",
        "border": "#b8b1a0",
        "text": "#4a4538",
        "text-muted": "#6e6857",
        "primary": "#7a5a3a",
        "accent": "#a8763f",
        "shadow-lo": "rgba(60, 55, 40, 0.45)",
        "shadow-hi": "rgba(255, 255, 250, 0.65)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "1px 1px 2px var(--color-shadow-lo), -1px -1px 1px var(--color-shadow-hi)",
        "md": "inset 2px 2px 3px var(--color-shadow-lo), inset -2px -2px 3px var(--color-shadow-hi)",
        "lg": "inset 3px 3px 6px var(--color-shadow-lo), inset -3px -3px 6px var(--color-shadow-hi)",
      },
      fontFamily: {
        "sans": ["'Georgia'", "'Iowan Old Style'", "serif"],
        "display": ["'Caslon'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --emboss-text: 1px 1px 0 var(--color-shadow-hi), -1px -1px 1px var(--color-shadow-lo);
//   --deboss-text: -1px -1px 0 var(--color-shadow-hi), 1px 1px 1px var(--color-shadow-lo);
