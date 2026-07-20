// Grandmillennial — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#faf3e8",
        "surface": "#fffaf1",
        "surface-strong": "#f5e6d3",
        "border": "#d8b892",
        "text": "#3f2e22",
        "text-muted": "#6f5a45",
        "primary": "#b3435a",
        "accent": "#4f7a5c",
        "gold": "#c8933f",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(63,46,34,0.12)",
        "md": "0 8px 18px rgba(63,46,34,0.16)",
        "lg": "0 16px 34px rgba(63,46,34,0.2)",
      },
      fontFamily: {
        "sans": ["'Libre Franklin'", "'Century Gothic'", "sans-serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
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
        "scallop-edge": "radial-gradient(circle at 10px 0, transparent 9px, var(--color-surface) 9.5px) 0 0/20px 12px repeat-x",
      },
    },
  },
};

