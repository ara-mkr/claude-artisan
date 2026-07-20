// Tidalpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a3d3f",
        "surface": "#0f4d4f",
        "surface-strong": "#145e60",
        "border": "#2f8b83",
        "text": "#e8f6f3",
        "text-muted": "#a9d6cf",
        "primary": "#22b8a3",
        "accent": "#d9a441",
        "kelp": "#3f7d4a",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.25)",
        "md": "0 8px 20px rgba(0,0,0,0.30)",
        "lg": "0 16px 40px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Space Grotesk'", "'Poppins'", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "wave-crest": "radial-gradient(circle at 10px -6px, transparent 8px, var(--color-primary) 9px) 0 0/20px 12px repeat-x",
        "kelp-fade": "linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)",
      },
    },
  },
};

