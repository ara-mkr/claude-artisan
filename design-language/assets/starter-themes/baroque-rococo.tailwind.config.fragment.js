// Baroque / Rococo — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#2a1116",
        "surface": "#3a1a20",
        "surface-strong": "#4a232b",
        "border": "#c9a24b",
        "text": "#f3e6d0",
        "text-muted": "#d8bfa0",
        "primary": "#8c1c2b",
        "accent": "#c9a24b",
      },
      borderRadius: {
        "sm": "6px",
        "md": "14px",
        "lg": "34px 8px 34px 8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 10px 24px rgba(0,0,0,0.5)",
        "lg": "0 22px 48px rgba(0,0,0,0.6)",
        "inset-gilt": "inset 0 0 0 1px rgba(201,162,75,0.5)",
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
//   --gilt-frame: 3px double var(--color-accent);
//   --gilt-glow: linear-gradient(180deg, rgba(201,162,75,0.18), transparent 40%);
