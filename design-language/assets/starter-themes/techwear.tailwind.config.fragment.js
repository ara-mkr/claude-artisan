// Techwear — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0b0c0d",
        "surface": "#17181a",
        "surface-strong": "#212325",
        "border": "#35383b",
        "text": "#eceeef",
        "text-muted": "#9aa0a4",
        "primary": "#c8ff3d",
        "accent": "#ff5b2e",
        "strap": "#55595c",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 3px rgba(0,0,0,0.5)",
        "md": "0 4px 10px rgba(0,0,0,0.55)",
        "lg": "0 12px 28px rgba(0,0,0,0.6)",
      },
      fontFamily: {
        "sans": ["'Neue Haas Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        "display": ["'Eurostile'", "'Oswald'", "'Inter'", "sans-serif"],
        "mono": ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "standard": "cubic-bezier(0.3, 0, 0.15, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --stitch-line: repeating-linear-gradient(90deg, var(--color-strap) 0 6px, transparent 6px 11px);
//   --buckle-notch: linear-gradient(135deg, transparent 8px, var(--color-border) 8px);
