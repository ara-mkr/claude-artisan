// Apple HIG (pre-Liquid flat) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f2f2f7",
        "surface": "#ffffff",
        "surface-strong": "#f9f9fb",
        "border": "rgba(60, 60, 67, 0.29)",
        "text": "#1c1c1e",
        "text-muted": "#6e6e73",
        "primary": "#007aff",
        "accent": "#34c759",
      },
      borderRadius: {
        "sm": "8px",
        "md": "14px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.06)",
        "md": "0 4px 14px rgba(0,0,0,0.08)",
        "lg": "0 12px 32px rgba(0,0,0,0.12)",
      },
      backdropBlur: {
        "backdrop": "20px",
      },
      fontFamily: {
        "sans": ["-apple-system", "'SF Pro Text'", "'Helvetica Neue'", "sans-serif"],
        "display": ["-apple-system", "'SF Pro Display'", "sans-serif"],
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
        "standard": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --vibrancy: rgba(255,255,255,0.72);
//   --hairline: 0.5px solid var(--color-border);
