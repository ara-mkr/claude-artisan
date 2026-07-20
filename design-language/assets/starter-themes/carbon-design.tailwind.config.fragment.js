// Carbon Design System — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#161616",
        "surface": "#262626",
        "surface-strong": "#393939",
        "border": "#525252",
        "text": "#f4f4f4",
        "text-muted": "#c6c6c6",
        "primary": "#4589ff",
        "accent": "#08bdba",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "2px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.3)",
        "md": "0 2px 6px rgba(0,0,0,0.35)",
        "lg": "0 4px 12px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        "sans": ["'IBM Plex Sans'", "'Helvetica Neue'", "system-ui", "sans-serif"],
        "display": ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        "mono": ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "2.875rem",
        "5xl": "3.75rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "16px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --underline-active: 2px solid var(--color-primary);
//   --grid-tint: rgba(255,255,255,0.02);
