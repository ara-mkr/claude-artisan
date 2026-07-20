// VHS / Analog Video — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0a0f",
        "surface": "#16161f",
        "surface-strong": "#1e1e2a",
        "border": "#3a3a4a",
        "text": "#f0ece0",
        "text-muted": "#a3a0ae",
        "primary": "#ff3b5c",
        "accent": "#2de2e6",
        "tape-yellow": "#f5c518",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 6px rgba(0, 0, 0, 0.5)",
        "md": "0 6px 18px rgba(0, 0, 0, 0.55)",
        "lg": "0 12px 32px rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Arial", "sans-serif"],
        "display": ["'VCR OSD Mono'", "'Courier New'", "monospace"],
        "mono": ["'VCR OSD Mono'", "'Courier New'", "ui-monospace", "monospace"],
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
        "standard": "steps(6, end)",
        "chroma-shadow": "-1.5px 0 var(--color-accent), 1.5px 0 var(--color-primary)",
        "scanlines": "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
        "tape-grain": "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06), transparent 70%)",
      },
    },
  },
};

