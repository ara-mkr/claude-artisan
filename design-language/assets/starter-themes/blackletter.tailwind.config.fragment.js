// Blackletter / Gothic Type — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#14110d",
        "surface": "#1e1a13",
        "surface-strong": "#29231a",
        "border": "#6b5b3a",
        "text": "#ece4d0",
        "text-muted": "#b9ac8a",
        "primary": "#a8232f",
        "accent": "#c9a227",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "0 1px 0 rgba(0,0,0,0.6)",
        "md": "0 4px 12px rgba(0,0,0,0.55)",
        "lg": "0 10px 28px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Century Old Style'", "Georgia", "'Iowan Old Style'", "serif"],
        "display": ["'UnifrakturMaguntia'", "'Old English Text MT'", "'Cloister Black'", "serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --rule-double: 3px double var(--color-accent);
//   --masthead-rule: linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%);
//   --texture-vellum: radial-gradient(120% 90% at 50% -10%, rgba(201,162,39,0.08), transparent 60%);
