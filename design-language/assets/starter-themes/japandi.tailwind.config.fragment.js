// Japandi — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f1ece2",
        "surface": "#faf7f0",
        "surface-strong": "#e8e0d0",
        "border": "#d8cdb8",
        "text": "#2f2a22",
        "text-muted": "#6b6153",
        "primary": "#8a6b4a",
        "accent": "#7c8a6f",
        "ink": "#3d3527",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(47,42,34,0.08)",
        "md": "0 4px 10px rgba(47,42,34,0.10)",
        "lg": "0 10px 24px rgba(47,42,34,0.12)",
      },
      fontFamily: {
        "sans": ["'Zen Kaku Gothic New'", "'Work Sans'", "system-ui", "sans-serif"],
        "display": ["'Shippori Mincho'", "'Noto Serif JP'", "serif"],
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
        "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
//   --brush-line: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 40%, transparent 40%);
