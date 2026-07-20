// Duotone — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0e1f17",
        "surface": "#133527",
        "surface-strong": "#1a4732",
        "border": "#2fae74",
        "text": "#eafff2",
        "text-muted": "#9fe3bd",
        "primary": "#34d980",
        "accent": "#ff3e6c",
        "tone-shadow": "#0e1f17",
        "tone-highlight": "#ff3e6c",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.3)",
        "md": "0 6px 20px rgba(0,0,0,0.4)",
        "lg": "0 16px 40px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        "sans": ["'Circular'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'Gotham'", "'Circular'", "system-ui", "sans-serif"],
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
//   --duotone-ramp: linear-gradient(135deg, var(--tone-shadow) 0%, var(--color-primary) 55%, var(--tone-highlight) 130%);
//   --duotone-wash: linear-gradient(180deg, rgba(52,217,128,0.16), rgba(255,62,108,0.10));
