// Analytics Dashboard — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f5f6f8",
        "surface": "#ffffff",
        "surface-strong": "#eef0f4",
        "border": "#e2e5eb",
        "text": "#1b2130",
        "text-muted": "#5b6274",
        "primary": "#4f46e5",
        "accent": "#16a34a",
        "negative": "#dc2626",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(16,24,40,0.06)",
        "md": "0 2px 8px rgba(16,24,40,0.08)",
        "lg": "0 8px 24px rgba(16,24,40,0.10)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'Helvetica Neue'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Inter'", "system-ui", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --kpi-label-color: var(--color-text-muted);
//   --hairline: 1px solid var(--color-border);
//   --tabular: 'tnum' 1, 'lnum' 1;
