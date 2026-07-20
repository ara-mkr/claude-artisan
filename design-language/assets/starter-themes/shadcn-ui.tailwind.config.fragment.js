// shadcn/ui (New York) — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#ffffff",
        "surface": "#ffffff",
        "surface-strong": "#f4f4f5",
        "border": "#e4e4e7",
        "text": "#09090b",
        "text-muted": "#71717a",
        "primary": "#18181b",
        "accent": "#2563eb",
        "ring": "#a1a1aa",
      },
      borderRadius: {
        "sm": "0.375rem",
        "md": "0.5rem",
        "lg": "0.75rem",
        "pill": "999px",
      },
      boxShadow: {
        "sm": "0 1px 2px rgba(0,0,0,0.04)",
        "md": "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        "lg": "0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        "sans": ["'Geist'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        "display": ["'Geist'", "'Inter'", "system-ui", "sans-serif"],
        "mono": ["'Geist Mono'", "ui-monospace", "'SFMono-Regular'", "monospace"],
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
        "standard": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --ring-offset: 0 0 0 2px var(--color-bg);
//   --ring: 0 0 0 4px color-mix(in srgb, var(--color-ring) 35%, transparent);
