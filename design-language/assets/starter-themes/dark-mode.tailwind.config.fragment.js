// Dark Mode — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0c0c10",
        "surface": "#16161c",
        "surface-strong": "#1e1e26",
        "border": "rgba(255,255,255,0.09)",
        "text": "#e8e8ec",
        "text-muted": "#9a9aa5",
        "primary": "#7c9cff",
        "accent": "#7fd9c4",
      },
      borderRadius: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "md": "0 4px 10px rgba(0,0,0,0.45)",
        "lg": "0 12px 28px rgba(0,0,0,0.5)",
        "pill": "999px",
      },
      fontFamily: {
        "sans": ["'Inter'", "-apple-system", "system-ui", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
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
        "elevation-0": "var(--color-bg)",
        "elevation-1": "var(--color-surface)",
        "elevation-2": "var(--color-surface-strong)",
        "elevation-3": "#26262f",
      },
    },
  },
};

