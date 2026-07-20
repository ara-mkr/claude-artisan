// Flat 2.0 / Semi-flat — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1f6",
        "surface": "#ffffff",
        "surface-strong": "#f4f6fa",
        "border": "#dbe1ea",
        "text": "#1c2430",
        "text-muted": "#5a6472",
        "primary": "#3f6df0",
        "accent": "#ff7a45",
      },
      borderRadius: {
        "sm": "0 1px 2px rgba(28,36,48,0.06), 0 4px 8px rgba(28,36,48,0.06)",
        "md": "0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10)",
        "lg": "0 4px 8px rgba(28,36,48,0.08), 0 24px 48px rgba(28,36,48,0.14)",
        "pill": "999px",
      },
      fontFamily: {
        "sans": ["'Roboto'", "'Google Sans'", "system-ui", "sans-serif"],
        "display": ["'Roboto'", "system-ui", "sans-serif"],
        "mono": ["'Roboto Mono'", "ui-monospace", "monospace"],
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
        "lift-hover": "translateY(-2px)",
      },
    },
  },
};

