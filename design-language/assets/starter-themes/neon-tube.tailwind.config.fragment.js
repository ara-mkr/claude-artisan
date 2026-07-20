// Neon Sign / Tube — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0710",
        "surface": "#150e22",
        "surface-strong": "#1f1530",
        "border": "rgba(255, 79, 216, 0.35)",
        "text": "#fbeaff",
        "text-muted": "#c6a9d6",
        "primary": "#ff2ee0",
        "accent": "#24f0ff",
        "orange": "#ff9d2e",
        "glass-tube": "#2a1e3d",
      },
      borderRadius: {
        "sm": "6px",
        "md": "14px",
        "lg": "24px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 6px rgba(255,46,224,0.55), 0 0 2px rgba(255,46,224,0.9)",
        "md": "0 0 18px rgba(255,46,224,0.55), 0 0 40px rgba(255,46,224,0.30)",
        "lg": "0 0 32px rgba(36,240,255,0.45), 0 0 70px rgba(255,46,224,0.30)",
      },
      fontFamily: {
        "sans": ["'Futura'", "'Poppins'", "system-ui", "sans-serif"],
        "display": ["'Pacifico'", "'Brush Script MT'", "cursive"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "tube-text-glow": "0 0 4px #fff, 0 0 12px var(--color-primary), 0 0 28px var(--color-primary), 0 0 48px rgba(255,46,224,0.5)",
        "tube-stroke": "2px solid var(--color-primary)",
      },
    },
  },
};

