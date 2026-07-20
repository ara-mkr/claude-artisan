// Windows Aero Glass — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0d2a4a",
        "bg-gradient-a": "#14406e",
        "bg-gradient-b": "#0a1c33",
        "surface": "rgba(173, 216, 255, 0.22)",
        "surface-strong": "rgba(173, 216, 255, 0.35)",
        "border": "rgba(255, 255, 255, 0.55)",
        "text": "#f3faff",
        "text-muted": "rgba(243, 250, 255, 0.78)",
        "primary": "#3d8eeb",
        "accent": "#8fd7ff",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0,0,0,0.3)",
        "md": "0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(141,206,255,0.3)",
        "lg": "0 20px 50px rgba(0,0,0,0.45), 0 0 24px rgba(141,206,255,0.35)",
        "inset-hi": "inset 0 1px 0 rgba(255,255,255,0.7)",
      },
      backdropBlur: {
        "backdrop": "12px",
      },
      fontFamily: {
        "sans": ["'Segoe UI'", "Tahoma", "system-ui", "sans-serif"],
        "display": ["'Segoe UI'", "Tahoma", "sans-serif"],
        "mono": ["'Consolas'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.2, 0, 0.1, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --bg-image: radial-gradient(120% 100% at 50% -20%, #1f5794 0%, #0d2a4a 55%, #071829 100%);
//   --glass-fill: linear-gradient(180deg, rgba(210,235,255,0.4) 0%, rgba(173,216,255,0.15) 45%, rgba(120,170,220,0.1) 100%);
//   --glass-sheen: linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%);
