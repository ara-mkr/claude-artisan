// Atompunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7ecd2",
        "surface": "#ffffff",
        "surface-strong": "#fdd9a5",
        "border": "#1c3f4a",
        "text": "#14262b",
        "text-muted": "#3d5a61",
        "primary": "#e0692b",
        "accent": "#1c8c8c",
        "chrome": "#9fb4b8",
      },
      borderRadius: {
        "sm": "4px",
        "md": "40px 4px 40px 4px",
        "lg": "60px 8px 60px 8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(20,38,43,0.2)",
        "md": "0 6px 16px rgba(20,38,43,0.24)",
        "lg": "0 14px 30px rgba(20,38,43,0.28)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Futura'", "'Poppins'", "sans-serif"],
        "display": ["'Trend Sans'", "'Bank Gothic'", "'Century Gothic'", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --chrome-stripe: linear-gradient(180deg, #ffffff 0%, var(--color-chrome) 50%, #ffffff 100%);
