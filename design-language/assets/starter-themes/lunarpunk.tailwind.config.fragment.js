// Lunarpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0e1a",
        "surface": "#12182b",
        "surface-2": "#1a2340",
        "text": "#e8ecf7",
        "text-muted": "#9aa4c4",
        "primary": "#2dd4bf",
        "accent": "#a78bfa",
        "moonsilver": "#c7d2e0",
        "nightbloom": "#5b4b8a",
      },
      borderRadius: {
        "sm": "8px",
        "md": "16px",
        "lg": "28px",
        "pill": "999px",
      },
      boxShadow: {
        "glow-teal": "0 0 24px rgba(45,212,191,0.35), 0 8px 24px rgba(0,0,0,0.4)",
        "glow-violet": "0 0 20px rgba(167,139,250,0.30), 0 8px 20px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'Spectral'", "'Cormorant Garamond'", "system-ui", "serif"],
        "display": ["'Cormorant Garamond'", "'Spectral'", "serif"],
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
        "standard": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --moonlight-gradient: radial-gradient(circle at 80% 0%, rgba(199,210,224,0.18), transparent 45%);
//   --bioluminescent-veil: linear-gradient(180deg, rgba(45,212,191,0.08), rgba(167,139,250,0.08));
//   --bg-image: radial-gradient(120% 90% at 85% -10%, #1a2340 0%, #0a0e1a 55%, #060811 100%);
