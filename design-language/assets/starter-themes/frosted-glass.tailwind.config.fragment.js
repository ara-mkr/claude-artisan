// Frosted Glass — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#7c8a99",
        "bg-photo-a": "#93a2b0",
        "bg-photo-b": "#5c6b7a",
        "surface": "rgba(255, 255, 255, 0.55)",
        "surface-strong": "rgba(255, 255, 255, 0.72)",
        "border": "rgba(255, 255, 255, 0.4)",
        "text": "#16202b",
        "text-muted": "#3d4a58",
        "primary": "#1f6feb",
        "accent": "#1a1f26",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(10,16,24,0.18)",
        "md": "0 6px 20px rgba(10,16,24,0.22)",
        "lg": "0 14px 36px rgba(10,16,24,0.26)",
      },
      backdropBlur: {
        "backdrop": "12px",
      },
      fontFamily: {
        "sans": ["'SF Pro Text'", "-apple-system", "system-ui", "sans-serif"],
        "display": ["'SF Pro Display'", "-apple-system", "system-ui", "sans-serif"],
        "mono": ["'SF Mono'", "ui-monospace", "monospace"],
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
        "bg-image": "linear-gradient(160deg, var(--color-bg-photo-a) 0%, var(--color-bg-photo-b) 100%)",
      },
    },
  },
};

