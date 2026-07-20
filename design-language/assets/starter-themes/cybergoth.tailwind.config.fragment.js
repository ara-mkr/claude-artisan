// Cybergoth — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#08070a",
        "surface": "#131018",
        "surface-strong": "#1c1724",
        "border": "#3a2f47",
        "text": "#f1e9ff",
        "text-muted": "#b9a9d6",
        "primary": "#b6ff1a",
        "accent": "#ff2fd0",
        "uv": "#33f0ff",
        "toxic-glow": "rgba(182, 255, 26, 0.35)",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 6px var(--color-toxic-glow)",
        "md": "0 0 16px var(--color-toxic-glow), 0 4px 12px rgba(0,0,0,0.6)",
        "lg": "0 0 32px var(--color-toxic-glow), 0 8px 24px rgba(0,0,0,0.7)",
      },
      fontFamily: {
        "sans": ["'Rubik'", "'Eurostile'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Rubik'", "sans-serif"],
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
        "standard": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --neon-edge: 1px solid var(--color-primary);
//   --hazard-stripe: repeating-linear-gradient(45deg, var(--color-accent) 0 6px, transparent 6px 12px);
