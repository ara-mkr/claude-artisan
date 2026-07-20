// Coquette — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fdf1f3",
        "surface": "#fffafb",
        "surface-strong": "#fbe4e9",
        "border": "#e8b6c3",
        "text": "#5c2a37",
        "text-muted": "#8a5a67",
        "primary": "#d6486a",
        "accent": "#c98fae",
        "lace": "rgba(232, 182, 195, 0.55)",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(92, 42, 55, 0.10)",
        "md": "0 6px 18px rgba(92, 42, 55, 0.14)",
        "lg": "0 12px 30px rgba(92, 42, 55, 0.16)",
      },
      fontFamily: {
        "sans": ["'Poppins'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        "script": ["'Dancing Script'", "cursive"],
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
        "entrance": "cubic-bezier(0, 0, 0.2, 1)",
        "exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --lace-border: 2px dotted var(--color-border);
//   --ribbon-underline: linear-gradient(90deg, var(--color-primary), var(--color-accent));
