// Voxel Art — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#a8e0f0",
        "surface": "#ffffff",
        "surface-strong": "#eef7fb",
        "border": "#16324a",
        "text": "#16324a",
        "text-muted": "#3b5a72",
        "primary": "#ff6b3d",
        "accent": "#2fbf71",
        "yellow": "#ffc93c",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "sm": "3px 3px 0 var(--color-border)",
        "md": "5px 5px 0 var(--color-border)",
        "lg": "8px 8px 0 var(--color-border)",
      },
      fontFamily: {
        "sans": ["'Space Grotesk'", "'Segoe UI'", "sans-serif"],
        "display": ["'Press Start 2P'", "'Space Grotesk'", "monospace"],
        "mono": ["'VT323'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "2.75rem",
        "5xl": "3.5rem",
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
        "standard": "steps(4, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --voxel-top: linear-gradient(180deg, rgba(255,255,255,0.55) 0 30%, transparent 30%);
//   --voxel-side: 4px solid var(--color-border);
//   --pixel-notch: 8px;
