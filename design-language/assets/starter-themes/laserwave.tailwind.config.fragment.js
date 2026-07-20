// Laserwave / Darksynth — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0014",
        "surface": "#170a2e",
        "surface-strong": "#23103f",
        "border": "rgba(255,43,109,0.35)",
        "text": "#f5e9ff",
        "text-muted": "#b48ecf",
        "primary": "#ff2b53",
        "accent": "#9b30ff",
        "glow-2": "#ff2b6d",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 0 8px rgba(255,43,83,0.45)",
        "md": "0 0 20px rgba(255,43,83,0.5), 0 0 40px rgba(155,48,255,0.25)",
        "lg": "0 0 32px rgba(255,43,83,0.6), 0 0 64px rgba(155,48,255,0.35)",
      },
      fontFamily: {
        "sans": ["'Rajdhani'", "'Barlow Condensed'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Rajdhani'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px);
