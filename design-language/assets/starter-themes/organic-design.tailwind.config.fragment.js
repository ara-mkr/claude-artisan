// Organic / Biomorphic — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f6f1e7",
        "surface": "#ffffff",
        "surface-strong": "#eee6d6",
        "border": "#dccdb0",
        "text": "#2f3b2a",
        "text-muted": "#5c6b53",
        "primary": "#6f8f4e",
        "accent": "#d98b5f",
        "clay": "#e7c9a9",
      },
      borderRadius: {
        "sm": "16px",
        "md": "28px",
        "lg": "44px",
        "pill": "999px",
        "blob": "60% 40% 55% 45% / 45% 55% 40% 60%",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(47, 59, 42, 0.08)",
        "md": "0 8px 24px rgba(47, 59, 42, 0.12)",
        "lg": "0 20px 48px rgba(47, 59, 42, 0.16)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Nunito'", "system-ui", "sans-serif"],
        "display": ["'Fraunces'", "Georgia", "serif"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.4, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --wave-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 V20 H0 Z' fill='%23f6f1e7'/%3E%3C/svg%3E");
