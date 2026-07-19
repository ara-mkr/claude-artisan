// Claymorphism — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1ff",
        "surface": "#ffffff",
        "surface-2": "#f2eaff",
        "text": "#3a2e5c",
        "text-muted": "#7c6f9e",
        "primary": "#7c5cff",
        "accent": "#ff8fab",
        "secondary": "#5ce1e6",
      },
      borderRadius: {
        "sm": "18px",
        "md": "28px",
        "lg": "40px",
        "pill": "999px",
      },
      boxShadow: {
        "clay": "35px 35px 68px rgba(124,92,255,0.20), inset -8px -8px 16px rgba(124,92,255,0.16), inset 8px 8px 20px rgba(255,255,255,0.90)",
        "clay-sm": "16px 16px 30px rgba(124,92,255,0.18), inset -4px -4px 10px rgba(124,92,255,0.14), inset 6px 6px 14px rgba(255,255,255,0.90)",
      },
      fontFamily: {
        "sans": ["'Nunito'", "'Baloo 2'", "system-ui", "sans-serif"],
        "display": ["'Baloo 2'", "'Nunito'", "system-ui", "sans-serif"],
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
        "standard": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --clay-inner-light: inset 8px 8px 20px rgba(255,255,255,0.9);
