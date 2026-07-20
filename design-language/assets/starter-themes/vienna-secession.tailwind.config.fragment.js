// Vienna Secession — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2ede1",
        "surface": "#ffffff",
        "surface-strong": "#e9e1cd",
        "border": "#1a1a1a",
        "text": "#1a1a1a",
        "text-muted": "#5c5647",
        "primary": "#b8942f",
        "accent": "#6b1f2a",
        "violet": "#4b3a63",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(26,26,26,0.2)",
        "md": "0 2px 0 rgba(26,26,26,0.25)",
        "lg": "0 4px 0 rgba(26,26,26,0.3)",
      },
      fontFamily: {
        "sans": ["'Josefin Sans'", "'Century Gothic'", "sans-serif"],
        "display": ["'Cinzel'", "'Josefin Sans'", "serif"],
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
//   --grid-squares: repeating-linear-gradient(90deg, var(--color-primary) 0 6px, transparent 6px 18px);
//   --gold-border: 4px solid var(--color-primary);
//   --square-corner: 10px;
