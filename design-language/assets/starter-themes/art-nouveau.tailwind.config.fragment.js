// Art Nouveau — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f3ead9",
        "surface": "#fbf6ec",
        "surface-strong": "#ede0c4",
        "border": "#8a6d3b",
        "text": "#2e2412",
        "text-muted": "#6b5a3c",
        "primary": "#2f5233",
        "accent": "#b8860b",
        "terracotta": "#a5502c",
      },
      borderRadius: {
        "sm": "6px",
        "md": "30px 6px 30px 6px",
        "lg": "60px 12px 60px 12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(46,36,18,0.12)",
        "md": "0 6px 18px rgba(46,36,18,0.16)",
        "lg": "0 14px 32px rgba(46,36,18,0.2)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'Cinzel Decorative'", "'Playfair Display'", "Georgia", "serif"],
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
//   --vine-underline: linear-gradient(90deg, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent);
//   --gilt-border: 1px solid var(--color-accent);
