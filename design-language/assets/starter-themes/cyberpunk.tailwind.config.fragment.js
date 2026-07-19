// Cyberpunk — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#05010d",
        "surface": "#0d0221",
        "surface-2": "#160a2b",
        "text": "#e8f9ff",
        "text-muted": "#7a8fa6",
        "primary": "#00fff5",
        "accent": "#ff003c",
        "magenta": "#ff00e6",
        "yellow": "#faff00",
        "border": "#00fff5",
      },
      borderRadius: {
        "sm": "0px",
        "md": "2px",
        "lg": "4px",
        "pill": "999px",
      },
      boxShadow: {
        "glow-cyan": "0 0 6px #00fff5, 0 0 18px rgba(0,255,245,0.6)",
        "glow-magenta": "0 0 6px #ff00e6, 0 0 18px rgba(255,0,230,0.6)",
      },
      fontFamily: {
        "sans": ["'Rajdhani'", "'Chakra Petch'", "system-ui", "sans-serif"],
        "display": ["'Orbitron'", "'Rajdhani'", "sans-serif"],
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
        "standard": "steps(3, end)",
        "glitch": "steps(2, jump-none)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanline: repeating-linear-gradient(0deg, rgba(0,255,245,0.05) 0 1px, transparent 1px 3px);
//   --neon-border: 1px solid #00fff5;
