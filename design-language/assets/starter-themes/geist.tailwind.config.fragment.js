// Vercel Geist — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0a0a",
        "surface": "#111111",
        "surface-strong": "#191919",
        "border": "#2a2a2a",
        "text": "#fafafa",
        "text-muted": "#a1a1a1",
        "primary": "#fafafa",
        "accent": "#0072f5",
      },
      borderRadius: {
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.5)",
        "md": "0 4px 16px rgba(0,0,0,0.55)",
        "lg": "0 12px 32px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Geist'", "'Geist Sans'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Geist'", "system-ui", "sans-serif"],
        "mono": ["'Geist Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
        "hairline": "1px solid var(--color-border)",
        "grain-image": "url(\"data:image/svg+xml",
      },
    },
  },
};

