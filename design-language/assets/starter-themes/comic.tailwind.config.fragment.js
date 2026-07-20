// Comic / Manga — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef9e7",
        "surface": "#ffffff",
        "surface-strong": "#fff6cc",
        "border": "#101010",
        "text": "#101010",
        "text-muted": "#43423f",
        "primary": "#e8272c",
        "accent": "#ffd400",
        "blue": "#1c4fd6",
        "halftone": "rgba(16, 16, 16, 0.14)",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Anton'", "'Bangers'", "'Arial Black'", "system-ui", "sans-serif"],
        "display": ["'Bangers'", "'Anton'", "'Impact'", "sans-serif"],
        "mono": ["'Comic Mono'", "ui-monospace", "monospace"],
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
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ink-outline: 3px solid var(--color-border);
//   --halftone-bg: radial-gradient(var(--color-halftone) 1.2px, transparent 1.2px);
//   --halftone-size: 7px 7px;
