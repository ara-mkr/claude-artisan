// Silkpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ead9",
        "surface": "#faf6ec",
        "surface-strong": "#ece0c6",
        "border": "#cbb98c",
        "text": "#2b241c",
        "text-muted": "#6c5f4c",
        "primary": "#a3282c",
        "accent": "#4f7a67",
        "lacquer": "#7a1518",
      },
      borderRadius: {
        "sm": "4px",
        "md": "14px",
        "lg": "32px 8px 32px 8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(43, 36, 28, 0.12)",
        "md": "0 8px 18px rgba(43, 36, 28, 0.14)",
        "lg": "0 18px 36px rgba(43, 36, 28, 0.16)",
      },
      fontFamily: {
        "sans": ["'Noto Sans SC'", "'Noto Sans'", "system-ui", "sans-serif"],
        "display": ["'Noto Serif SC'", "'Songti SC'", "Georgia", "serif"],
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
        "standard": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --lacquer-bar: 4px solid var(--color-lacquer);
//   --silk-sheen: linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 80%);
