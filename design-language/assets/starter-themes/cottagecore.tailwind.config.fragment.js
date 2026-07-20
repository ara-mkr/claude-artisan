// Cottagecore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f0e3",
        "surface": "#fffdf7",
        "surface-strong": "#ede2c8",
        "border": "#b8a473",
        "text": "#3f3423",
        "text-muted": "#6b5c3f",
        "primary": "#7a8450",
        "accent": "#c1694f",
        "gingham": "rgba(122, 132, 80, 0.16)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 5px rgba(63, 52, 35, 0.10)",
        "md": "0 6px 14px rgba(63, 52, 35, 0.14)",
        "lg": "0 12px 26px rgba(63, 52, 35, 0.16)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Playfair Display'", "'Lora'", "Georgia", "serif"],
        "script": ["'Caveat'", "cursive"],
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
//   --stitch-border: 2px dashed var(--color-border);
