// Bento Grid — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0b0f",
        "surface": "#16161d",
        "surface-2": "#1f1f28",
        "text": "#f5f5f7",
        "text-muted": "#a1a1aa",
        "primary": "#0a84ff",
        "accent": "#30d158",
        "border": "rgba(255,255,255,0.08)",
      },
      borderRadius: {
        "sm": "14px",
        "md": "20px",
        "lg": "28px",
        "cell": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.4)",
        "cell": "0 8px 30px rgba(0,0,0,0.35)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'SF Pro Text'", "system-ui", "sans-serif"],
        "display": ["'Inter Display'", "'SF Pro Display'", "system-ui", "sans-serif"],
        "mono": ["'JetBrains Mono'", "monospace"],
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
//   --grid-gap: 16px;
//   --cell-padding: 24px;
