// Victorian — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#241713",
        "surface": "#2f1f19",
        "surface-strong": "#3a2620",
        "border": "#b8862f",
        "text": "#f2e6d0",
        "text-muted": "#cbb896",
        "primary": "#8a1f2b",
        "accent": "#b8862f",
        "emerald": "#1f4d38",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.4)",
        "md": "0 4px 14px rgba(0,0,0,0.5)",
        "lg": "0 10px 28px rgba(0,0,0,0.55)",
        "inset-gilt": "inset 0 0 0 1px rgba(184,134,47,0.5)",
      },
      fontFamily: {
        "sans": ["'Playfair Display'", "'Georgia'", "serif"],
        "display": ["'UnifrakturCook'", "'Playfair Display'", "'Georgia'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --filigree-border: 2px double var(--color-accent);
//   --gilt-corner: conic-gradient(from 45deg, var(--color-accent), #f2d98a, var(--color-accent));
//   --damask-tint: radial-gradient(circle at 50% 50%, rgba(184,134,47,0.06) 0, transparent 65%);
