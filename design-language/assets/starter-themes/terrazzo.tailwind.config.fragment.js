// Terrazzo — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f3ec",
        "surface": "#ffffff",
        "surface-strong": "#efe8db",
        "border": "#e0d6c2",
        "text": "#221f1a",
        "text-muted": "#5c564a",
        "primary": "#e2574c",
        "accent": "#2f9e8f",
        "chip-a": "#f2b705",
        "chip-b": "#7c5cff",
        "chip-c": "#2f9e8f",
        "chip-d": "#e2574c",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(34,31,26,0.08)",
        "md": "0 6px 16px rgba(34,31,26,0.10)",
        "lg": "0 16px 36px rgba(34,31,26,0.14)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Poppins'", "'Fraunces'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --terrazzo-size: 140px 140px;
