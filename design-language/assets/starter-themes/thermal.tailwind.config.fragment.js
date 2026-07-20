// Thermal / Infrared — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0014",
        "surface": "#1a0a2e",
        "surface-strong": "#26123f",
        "border": "#5b1a6b",
        "text": "#f5f0e8",
        "text-muted": "#c9a8d9",
        "primary": "#ff6a1a",
        "accent": "#ffd23f",
        "heat-cold": "#3a0ca3",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "14px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 8px rgba(255,106,26,0.25)",
        "md": "0 0 24px rgba(255,106,26,0.35)",
        "lg": "0 0 48px rgba(255,106,26,0.45)",
      },
      fontFamily: {
        "sans": ["'Rajdhani'", "'Barlow Condensed'", "system-ui", "sans-serif"],
        "display": ["'Rajdhani'", "'Oswald'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "heat-ramp": "linear-gradient(90deg, #0a0014 0%, #3a0ca3 30%, #ff1a4a 55%, #ff6a1a 75%, #ffd23f 90%, #fff8e7 100%)",
        "heat-glow-edge": "linear-gradient(90deg, var(--color-heat-cold), var(--color-primary), var(--color-accent))",
      },
    },
  },
};

