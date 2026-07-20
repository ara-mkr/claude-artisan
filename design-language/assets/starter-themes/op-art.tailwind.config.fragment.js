// Op Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f0f0f0",
        "border": "#0a0a0a",
        "text": "#0a0a0a",
        "text-muted": "#4a4a4a",
        "primary": "#0a0a0a",
        "accent": "#e10600",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 rgba(0,0,0,0)",
        "md": "0 6px 0 rgba(10,10,10,1)",
        "lg": "0 10px 0 rgba(10,10,10,1)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        "display": ["'Futura'", "'Helvetica Neue'", "sans-serif"],
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
        "standard": "steps(6, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --stripe-pattern: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 6px, #ffffff 6px, #ffffff 12px);
//   --stripe-pattern-tight: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 3px, #ffffff 3px, #ffffff 6px);
//   --concentric-pattern: repeating-radial-gradient(circle at 50% 50%, #0a0a0a 0px, #0a0a0a 4px, #ffffff 4px, #ffffff 8px);
