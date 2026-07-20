// Stonepunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#d8c9a8",
        "surface": "#cabb96",
        "surface-strong": "#b8a67d",
        "border": "#7a6242",
        "text": "#2c2013",
        "text-muted": "#52422b",
        "primary": "#8a3b1f",
        "accent": "#4a6b4a",
        "ochre": "#b5772b",
        "char": "#2c2013",
      },
      borderRadius: {
        "sm": "2px",
        "md": "5px",
        "lg": "9px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 3px rgba(44,32,19,0.35)",
        "md": "0 5px 10px rgba(44,32,19,0.4)",
        "lg": "0 12px 22px rgba(44,32,19,0.45)",
        "carve": "inset 0 2px 3px rgba(44,32,19,0.4), inset 0 -1px 0 rgba(255,247,224,0.15)",
      },
      fontFamily: {
        "sans": ["'Rockwell'", "'Roboto Slab'", "Georgia", "serif"],
        "display": ["'Rock Salt'", "'Kalam'", "'Rockwell'", "serif"],
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
//   --daub-texture: repeating-linear-gradient(115deg, rgba(44,32,19,0.06) 0px, rgba(44,32,19,0.06) 2px, transparent 2px, transparent 6px);
//   --char-mark: linear-gradient(180deg, rgba(44,32,19,0.08), transparent 60%);
