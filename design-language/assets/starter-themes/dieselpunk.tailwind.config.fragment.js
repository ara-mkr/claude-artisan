// Dieselpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#23201a",
        "surface": "#2e2a22",
        "surface-strong": "#3a352b",
        "border": "#6b5f45",
        "text": "#ece3cf",
        "text-muted": "#b8ab8c",
        "primary": "#b5461f",
        "accent": "#8a9a5b",
        "rivet": "#4a4436",
      },
      borderRadius: {
        "sm": "2px",
        "md": "3px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.5)",
        "md": "0 4px 10px rgba(0,0,0,0.55)",
        "lg": "0 10px 24px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Oswald'", "'Bebas Neue'", "'Arial Narrow'", "sans-serif"],
        "display": ["'Bebas Neue'", "'Oswald'", "sans-serif"],
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
//   --rivet-dot: radial-gradient(circle at 10px 10px, var(--color-rivet) 2px, transparent 2.4px);
//   --hazard-stripe: repeating-linear-gradient(45deg, var(--color-primary) 0 10px, var(--color-accent) 10px 20px);
