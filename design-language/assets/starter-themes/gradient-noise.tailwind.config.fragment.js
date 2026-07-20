// Grainy Gradient — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1c1626",
        "surface": "#241d31",
        "surface-strong": "#2e2540",
        "border": "rgba(255,255,255,0.10)",
        "text": "#f4f1f8",
        "text-muted": "#b8aec7",
        "primary": "#ff8a5c",
        "accent": "#7c6cf0",
        "grad-a": "#2a1b3d",
        "grad-b": "#6b3fa0",
        "grad-c": "#ff8a5c",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "22px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 3px 10px rgba(0,0,0,0.25)",
        "md": "0 10px 30px rgba(0,0,0,0.35)",
        "lg": "0 24px 60px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        "sans": ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Söhne'", "'Inter'", "system-ui", "sans-serif"],
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
        "bg-image": "radial-gradient(120% 90% at 15% -10%, var(--color-grad-c) 0%, var(--color-grad-b) 45%, var(--color-grad-a) 100%)",
        "grain-svg": "url(\"data:image/svg+xml",
      },
    },
  },
};

