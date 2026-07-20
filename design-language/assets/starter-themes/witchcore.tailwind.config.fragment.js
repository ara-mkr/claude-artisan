// Witchcore / Witchy — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#1a1523",
        "surface": "#241d31",
        "surface-strong": "#2e2540",
        "border": "#6b4f9e",
        "text": "#ece6f5",
        "text-muted": "#b6a8d1",
        "primary": "#7e57c2",
        "accent": "#c9a24b",
        "forest": "#2f5233",
      },
      borderRadius: {
        "sm": "6px",
        "md": "12px",
        "lg": "20px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 2px 8px rgba(0,0,0,0.4)",
        "md": "0 8px 24px rgba(0,0,0,0.5)",
        "lg": "0 16px 40px rgba(0,0,0,0.55)",
        "glow": "0 0 18px rgba(201,162,75,0.25)",
      },
      fontFamily: {
        "sans": ["'Cormorant Garamond'", "'Georgia'", "serif"],
        "display": ["'UnifrakturCook'", "'Cinzel'", "serif"],
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
        "standard": "cubic-bezier(0.3, 0, 0.2, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --moon-phase: radial-gradient(circle at 70% 30%, var(--color-accent) 0 10%, transparent 11%);
//   --celestial-border: 1px solid var(--color-border);
