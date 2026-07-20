// Egyptian / Ancient Revival — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#efe2c0",
        "surface": "#f7ecd3",
        "surface-strong": "#e6d3a3",
        "border": "#b8860b",
        "text": "#241a0e",
        "text-muted": "#5a4527",
        "primary": "#1b3f6b",
        "accent": "#b8860b",
        "terracotta": "#a3441f",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 4px rgba(36,26,14,0.2)",
        "md": "0 6px 16px rgba(36,26,14,0.24)",
        "lg": "0 16px 36px rgba(36,26,14,0.3)",
      },
      fontFamily: {
        "sans": ["'Trajan Pro'", "'Cinzel'", "'Georgia'", "serif"],
        "display": ["'Cinzel'", "'Trajan Pro'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --key-pattern: repeating-linear-gradient(90deg, var(--color-accent) 0 8px, transparent 8px 10px, var(--color-accent) 10px 18px, transparent 18px 24px);
//   --banded-border: 4px solid var(--color-accent);
