// Nanopunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#050a09",
        "surface": "#0d1917",
        "surface-strong": "#142622",
        "border": "rgba(180, 255, 232, 0.22)",
        "text": "#e6fff8",
        "text-muted": "#8fc9bc",
        "primary": "#33f2c0",
        "accent": "#a6ff3d",
        "swarm": "#5ad1ff",
        "danger": "#ff4f6d",
      },
      borderRadius: {
        "sm": "2px",
        "md": "6px",
        "lg": "12px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 8px rgba(51,242,192,0.18)",
        "md": "0 0 22px rgba(51,242,192,0.22)",
        "lg": "0 0 44px rgba(51,242,192,0.26)",
      },
      fontFamily: {
        "sans": ["'Eurostile'", "'Orbitron'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Eurostile'", "sans-serif"],
        "mono": ["'Share Tech Mono'", "ui-monospace", "monospace"],
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
        "molecular-grid": "radial-gradient(circle, rgba(51,242,192,0.28) 0.5px, transparent 0.6px) 0 0/14px 14px",
        "scan-rule": "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
      },
    },
  },
};

