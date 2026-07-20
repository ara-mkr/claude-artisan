// Space Age Pop — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#f4f2ec",
        "surface": "#ffffff",
        "surface-strong": "#eceae2",
        "border": "#d8d4c6",
        "text": "#1c1b17",
        "text-muted": "#5a564a",
        "primary": "#e8542a",
        "accent": "#2f8fd4",
        "chrome": "#c7ccd1",
        "sun": "#f2b705",
      },
      borderRadius: {
        "sm": "12px",
        "md": "24px",
        "lg": "48px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(28,27,23,0.10)",
        "md": "0 8px 20px rgba(28,27,23,0.14)",
        "lg": "0 18px 40px rgba(28,27,23,0.18)",
        "chrome": "inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -6px 10px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        "sans": ["'Century Gothic'", "'Poppins'", "'Futura'", "system-ui", "sans-serif"],
        "display": ["'Cooper Black'", "'Baloo 2'", "'Poppins'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.2, 0.64, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --starburst: repeating-conic-gradient(from 0deg, var(--color-sun) 0deg 8deg, transparent 8deg 20deg);
//   --chrome-gradient: linear-gradient(135deg, #fdfdfd, #c7ccd1 45%, #fdfdfd 55%, #a9afb5);
