// Psychedelic Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ff5f9e",
        "surface": "#ffe14d",
        "surface-strong": "#ff8a3d",
        "border": "#1a0b2e",
        "text": "#1a0b2e",
        "text-muted": "#4b2c63",
        "primary": "#00c2a8",
        "accent": "#6a1fd0",
        "vibrate-a": "#ff5f9e",
        "vibrate-b": "#00c2a8",
      },
      borderRadius: {
        "sm": "12px",
        "md": "40% 60% 55% 45% / 50% 40% 60% 50%",
        "lg": "60% 40% 30% 70% / 60% 30% 70% 40%",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 0 4px var(--color-vibrate-a)",
        "md": "0 0 0 4px var(--color-vibrate-b), 0 8px 24px rgba(26,11,46,0.3)",
        "lg": "0 0 0 6px var(--color-accent), 0 16px 40px rgba(26,11,46,0.35)",
      },
      fontFamily: {
        "sans": ["'Cooper Black'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Cooper Black'", "'Baloo 2'", "cursive"],
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
        "standard": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --swirl-bg: radial-gradient(circle at 20% 30%, #ffe14d 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00c2a8 0%, transparent 45%), radial-gradient(circle at 50% 80%, #6a1fd0 0%, transparent 50%), var(--color-bg);
