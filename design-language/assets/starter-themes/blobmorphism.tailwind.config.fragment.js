// Blobmorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#fef6ef",
        "surface": "#ffffff",
        "surface-strong": "#fff0e0",
        "border": "#ffd9b8",
        "text": "#2c1e3a",
        "text-muted": "#6b5a7d",
        "primary": "#ff6b6b",
        "accent": "#4ecdc4",
        "yellow": "#ffd93d",
      },
      borderRadius: {
        "sm": "14px",
        "md": "32px 48px 28px 40px",
        "lg": "56px 40px 64px 36px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 4px 12px rgba(255,107,107,0.18)",
        "md": "0 12px 28px rgba(78,205,196,0.22)",
        "lg": "0 20px 44px rgba(255,107,107,0.24)",
      },
      fontFamily: {
        "sans": ["'Quicksand'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Fredoka'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "entrance": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "exit": "cubic-bezier(0.5, 0, 0.75, 0)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --blob-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #4ecdc4 100%);
//   --blob-shape-a: 32px 48px 28px 40px;
//   --blob-shape-b: 48px 28px 40px 32px;
