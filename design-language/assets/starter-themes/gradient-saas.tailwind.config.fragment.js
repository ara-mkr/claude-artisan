// Modern Gradient SaaS — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f5f4ff",
        "border": "#e6e3fb",
        "text": "#1a1533",
        "text-muted": "#635f7a",
        "primary": "#6d5bf6",
        "accent": "#ff6fa5",
        "blob-a": "#8b7bff",
        "blob-b": "#ff9ac2",
        "blob-c": "#6fe3ff",
      },
      borderRadius: {
        "sm": "10px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(109,91,246,0.08)",
        "md": "0 10px 30px rgba(109,91,246,0.14)",
        "lg": "0 24px 60px rgba(109,91,246,0.20)",
      },
      fontFamily: {
        "sans": ["'Manrope'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Manrope'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "btn-gradient": "linear-gradient(120deg, var(--color-primary), var(--color-accent))",
      },
    },
  },
};

