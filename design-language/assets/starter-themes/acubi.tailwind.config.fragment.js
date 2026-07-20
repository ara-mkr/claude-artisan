// Acubi — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#121316",
        "surface": "#1c1e22",
        "surface-strong": "#26282d",
        "border": "#35383f",
        "text": "#f2f3f5",
        "text-muted": "#a7abb3",
        "primary": "#c7ccd4",
        "accent": "#7dd3fc",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.4)",
        "md": "0 6px 20px rgba(0,0,0,0.5)",
        "lg": "0 16px 40px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "'Pretendard'", "system-ui", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Pretendard'", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.85rem",
        "base": "0.95rem",
        "lg": "1.1rem",
        "xl": "1.3rem",
        "2xl": "1.7rem",
        "3xl": "2.2rem",
        "4xl": "2.9rem",
        "5xl": "3.8rem",
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
//   --metal-gradient: linear-gradient(135deg, #7d828c 0%, #dde1e6 22%, #6b6f78 48%, #c7ccd4 74%, #7d828c 100%);
//   --hairline: 1px solid var(--color-border);
