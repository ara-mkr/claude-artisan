// Hyperrealism UI — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#2a2a2c",
        "surface": "#38383b",
        "surface-strong": "#46464a",
        "border": "#1c1c1e",
        "text": "#f5f5f2",
        "text-muted": "#b8b8b4",
        "primary": "#3ea6ff",
        "accent": "#ffb238",
        "highlight": "rgba(255,255,255,0.22)",
      },
      borderRadius: {
        "sm": "6px",
        "md": "10px",
        "lg": "16px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 1px rgba(0,0,0,0.5), inset 0 1px 0 var(--color-highlight)",
        "md": "0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 var(--color-highlight), inset 0 -2px 4px rgba(0,0,0,0.35)",
        "lg": "0 12px 28px rgba(0,0,0,0.6), inset 0 1px 0 var(--color-highlight), inset 0 -3px 6px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        "display": ["'Helvetica Neue'", "'Futura'", "sans-serif"],
        "mono": ["ui-monospace", "'Menlo'", "monospace"],
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
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --brushed-metal: repeating-linear-gradient(180deg, #3a3a3d 0px, #3d3d40 1px, #363638 2px);
//   --led-glow: 0 0 6px 2px color-mix(in srgb, var(--color-primary) 70%, transparent);
