// Soft 3D Illustration — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#eef1fb",
        "surface": "#ffffff",
        "surface-strong": "#f6f4ff",
        "text": "#2d2a45",
        "text-muted": "#6b6690",
        "primary": "#6d5ae6",
        "accent": "#ff9e7d",
        "mint": "#7be0c4",
      },
      borderRadius: {
        "sm": "16px",
        "md": "24px",
        "lg": "32px",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "6px 6px 14px rgba(151, 143, 199, 0.28), -4px -4px 12px rgba(255, 255, 255, 0.85)",
        "md": "10px 10px 24px rgba(151, 143, 199, 0.32), -6px -6px 18px rgba(255, 255, 255, 0.9)",
        "lg": "16px 16px 40px rgba(151, 143, 199, 0.36), -10px -10px 26px rgba(255, 255, 255, 0.95)",
        "inset-hi": "inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 6px rgba(151, 143, 199, 0.25)",
      },
      fontFamily: {
        "sans": ["'Inter'", "'Quicksand'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Quicksand'", "'Poppins'", "sans-serif"],
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
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "entrance": "cubic-bezier(0, 0, 0, 1)",
        "exit": "cubic-bezier(0.3, 0, 1, 1)",
        "clay-gradient": "linear-gradient(160deg, #ffffff 0%, #f3f1ff 60%, #e9e5ff 100%)",
        "relief-highlight": "rgba(255, 255, 255, 0.9)",
        "relief-shadow": "rgba(151, 143, 199, 0.32)",
      },
    },
  },
};

