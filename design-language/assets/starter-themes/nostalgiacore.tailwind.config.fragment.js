// Nostalgiacore — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e8dcc8",
        "surface": "#f2e9d8",
        "surface-strong": "#ede0c4",
        "border": "#b8a37e",
        "text": "#4a3d2c",
        "text-muted": "#7a6a52",
        "primary": "#c17a4e",
        "accent": "#8a9a6b",
        "sepia-tint": "rgba(163, 120, 63, 0.18)",
        "timestamp": "#e8622c",
      },
      borderRadius: {
        "sm": "3px",
        "md": "6px",
        "lg": "10px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(74, 61, 44, 0.22)",
        "md": "0 4px 10px rgba(74, 61, 44, 0.26)",
        "lg": "0 10px 24px rgba(74, 61, 44, 0.3)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Trebuchet MS'", "system-ui", "sans-serif"],
        "display": ["'Courier New'", "'Trebuchet MS'", "monospace"],
        "mono": ["'Courier New'", "ui-monospace", "monospace"],
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
//   --grain-overlay: repeating-radial-gradient(circle at 20% 30%, rgba(74,61,44,0.04) 0px, transparent 2px), repeating-radial-gradient(circle at 70% 80%, rgba(74,61,44,0.03) 0px, transparent 2px);
//   --photo-vignette: radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(74,61,44,0.14) 100%);
//   --timestamp-font: 'Courier New', monospace;
