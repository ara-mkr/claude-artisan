// ASCII / Terminal / TUI — Tailwind theme fragment (generated).
// Merge into tailwind.config.js under theme.extend.
module.exports = {
  theme: {
    extend: {
      colors: {
        "bg": "#0a0e0a",
        "surface": "#0f150f",
        "text": "#33ff66",
        "text-muted": "#1f9940",
        "primary": "#33ff66",
        "accent": "#ffb000",
        "amber": "#ffb000",
        "cursor": "#33ff66",
        "dim": "#0a3d1a",
      },
      borderRadius: {
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "pill": "0px",
      },
      boxShadow: {
        "glow": "0 0 4px rgba(51,255,102,0.7)",
      },
      fontFamily: {
        "sans": ["'IBM Plex Mono'", "'Courier New'", "monospace"],
        "display": ["'IBM Plex Mono'", "monospace"],
        "mono": ["'IBM Plex Mono'", "'Courier New'", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      spacing: {
        "1": "0.5ch",
        "2": "1ch",
        "3": "1.5ch",
        "4": "2ch",
        "6": "3ch",
        "8": "4ch",
        "12": "6ch",
        "16": "8ch",
      },
      transitionTimingFunction: {
        "standard": "steps(1, end)",
      },
    },
  },
};

// Signature `extra` tokens are CSS-only (gradients/filters/composite
// borders). Add them as CSS custom properties or arbitrary values:
//   --scanline: repeating-linear-gradient(0deg, rgba(51,255,102,0.08) 0 1px, transparent 1px 2px);
//   --border: 1px solid #33ff66;
