// Arts & Crafts — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ece2cd",
        "surface": "#fbf5e6",
        "surface-strong": "#e3d3ac",
        "border": "#6b4a2b",
        "text": "#2b2013",
        "text-muted": "#5c4a30",
        "primary": "#7a2e2e",
        "accent": "#4a6741",
      },
      borderRadius: {
        "sm": "3px",
        "md": "4px",
        "lg": "6px",
        "pill": "4px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(43,32,19,0.2)",
        "md": "0 4px 10px rgba(43,32,19,0.22)",
        "lg": "0 10px 22px rgba(43,32,19,0.26)",
      },
      fontFamily: {
        "sans": ["'Crimson Text'", "'EB Garamond'", "Georgia", "serif"],
        "display": ["'IM Fell English'", "'Crimson Text'", "Georgia", "serif"],
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
        "standard": "ease-out",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --leaf-repeat: repeating-linear-gradient(135deg, var(--color-accent) 0 3px, transparent 3px 14px);
//   --border-frame: 3px double var(--color-border);
