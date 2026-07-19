// Frutiger Aero — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eaf6ff",
        "surface": "rgba(255,255,255,0.55)",
        "text": "#0b3d2e",
        "text-muted": "#2f6b57",
        "primary": "#38b6ff",
        "accent": "#7ed957",
        "sky": "#8fd3ff",
        "green": "#5bd06a",
        "aqua": "#00c2c7",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "gloss": "inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 20px rgba(56,182,255,0.25)",
        "sm": "0 4px 12px rgba(56,182,255,0.2)",
      },
      backdropBlur: {
        "backdrop": "10px",
      },
      fontFamily: {
        "sans": ["'Frutiger'", "'Myriad Pro'", "'Segoe UI'", "system-ui", "sans-serif"],
        "display": ["'Myriad Pro'", "'Segoe UI'", "sans-serif"],
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
//   --glossy: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4) 51%, rgba(255,255,255,0.65) 100%);
//   --sky-bg: linear-gradient(180deg, #eaf6ff 0%, #bfe8ff 55%, #d9f7d0 100%);
