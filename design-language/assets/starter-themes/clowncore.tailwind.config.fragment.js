// Clowncore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef7e0",
        "surface": "#ffffff",
        "surface-strong": "#fff2f8",
        "border": "#16161d",
        "text": "#16161d",
        "text-muted": "#514f5c",
        "primary": "#ff2d55",
        "accent": "#ffd400",
        "blue": "#2f6fed",
        "green": "#17b26a",
      },
      borderRadius: {
        "sm": "8px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Baloo 2'", "'Comic Neue'", "system-ui", "sans-serif"],
        "display": ["'Fredoka'", "'Baloo 2'", "system-ui", "sans-serif"],
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
//   --polka-dots: radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px);
//   --rainbow-stripe: linear-gradient(90deg, #ff2d55, #ffd400, #17b26a, #2f6fed, #ff2d55);
