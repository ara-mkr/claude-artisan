// Light Academia — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f7f0e3",
        "surface": "#fffdf7",
        "surface-strong": "#efe4c9",
        "border": "#d8c9a3",
        "text": "#3b3226",
        "text-muted": "#7a6d55",
        "primary": "#a97142",
        "accent": "#7c8b5f",
        "gold": "#c9a24a",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(59,50,38,0.10)",
        "md": "0 6px 16px rgba(59,50,38,0.12)",
        "lg": "0 14px 32px rgba(59,50,38,0.14)",
      },
      fontFamily: {
        "sans": ["'Lora'", "'Cormorant Garamond'", "Georgia", "serif"],
        "display": ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
        "mono": ["'Courier Prime'", "ui-monospace", "monospace"],
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
//   --bg-image: radial-gradient(70% 50% at 50% 0%, rgba(201,162,74,0.16) 0%, transparent 65%), var(--color-bg);
//   --gold-rule: linear-gradient(90deg, transparent, var(--color-gold), transparent);
