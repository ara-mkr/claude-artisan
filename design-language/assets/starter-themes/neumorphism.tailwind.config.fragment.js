// Neumorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#e0e5ec",
        "surface": "#e0e5ec",
        "text": "#4b5563",
        "text-muted": "#8a94a6",
        "primary": "#6d5dfc",
        "accent": "#4d80e4",
        "light": "#ffffff",
        "dark": "#a3b1c6",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "raised": "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff",
        "raised-sm": "4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff",
        "pressed": "inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff",
        "pressed-sm": "inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff",
      },
      fontFamily: {
        "sans": ["'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Poppins'", "system-ui", "sans-serif"],
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
//   --bg-tint-light: #ffffff;
//   --bg-tint-dark: #a3b1c6;
