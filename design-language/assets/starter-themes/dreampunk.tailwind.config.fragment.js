// Dreampunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#171b2e",
        "surface": "rgba(255, 255, 255, 0.06)",
        "surface-strong": "rgba(255, 255, 255, 0.11)",
        "border": "rgba(180, 200, 255, 0.22)",
        "text": "#eef1ff",
        "text-muted": "rgba(238, 241, 255, 0.68)",
        "primary": "#7c9cff",
        "accent": "#9df0e0",
      },
      borderRadius: {
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 14px rgba(90, 110, 220, 0.20)",
        "md": "0 10px 40px rgba(90, 110, 220, 0.28)",
        "lg": "0 24px 70px rgba(90, 110, 220, 0.34)",
      },
      backdropBlur: {
        "backdrop": "22px",
      },
      fontFamily: {
        "sans": ["'Nunito Sans'", "system-ui", "sans-serif"],
        "display": ["'Quicksand'", "'Nunito Sans'", "sans-serif"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --fog-fill: linear-gradient(160deg, rgba(124,156,255,0.14), rgba(157,240,224,0.06));
