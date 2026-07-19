#!/usr/bin/env python3
"""
generate_tokens.py — emit ready-to-paste design tokens for a named style.

Reads style_catalog.json (the single source of truth) and, for a flagship
style, writes BOTH:
  * a CSS custom-properties file  (<slug>.css)      -> paste into :root
  * a Tailwind theme fragment     (<slug>.tailwind.config.fragment.js)

Only flagship styles carry a full `tokens` block. For non-flagship styles the
script prints the researched metadata (traits, example, confusions) so an agent
can derive tokens on the spot using the same schema.

Standard library only. No external dependencies.

Usage:
    python3 generate_tokens.py <style-slug> [output-dir]
    python3 generate_tokens.py glassmorphism ./out
    python3 generate_tokens.py --list          # list every slug + alias
    python3 generate_tokens.py --flagship       # list deep-spec styles only

Token group -> output mapping:
    color  -> --color-*   / theme.extend.colors
    radius -> --radius-*  / theme.extend.borderRadius
    shadow -> --shadow-*  / theme.extend.boxShadow
    blur   -> --blur-*    / theme.extend.backdropBlur
    font   -> --font-*    / theme.extend.fontFamily   (comma list -> array)
    text   -> --text-*    / theme.extend.fontSize
    space  -> --space-*   / theme.extend.spacing
    ease   -> --ease-*    / theme.extend.transitionTimingFunction
    extra  -> --*         (CSS custom properties only; raw gradients/borders)
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CATALOG = os.path.join(HERE, "style_catalog.json")

# (token-group, css-prefix, tailwind-theme-key)
GROUPS = [
    ("color", "color", "colors"),
    ("radius", "radius", "borderRadius"),
    ("shadow", "shadow", "boxShadow"),
    ("blur", "blur", "backdropBlur"),
    ("font", "font", "fontFamily"),
    ("text", "text", "fontSize"),
    ("space", "space", "spacing"),
    ("ease", "ease", "transitionTimingFunction"),
]


def load_catalog():
    with open(CATALOG, encoding="utf-8") as f:
        return json.load(f)


def find_style(catalog, query):
    """Match by slug, name (case-insensitive), or alias."""
    q = query.strip().lower()
    styles = catalog["styles"]
    for st in styles:
        if st["slug"] == q:
            return st
    for st in styles:
        if st["name"].lower() == q:
            return st
        if q in [a.lower() for a in st.get("aliases", [])]:
            return st
    # loose contains match as a last resort
    for st in styles:
        if q in st["slug"] or q in st["name"].lower():
            return st
    return None


def css_var_lines(tokens):
    lines = []
    for group, prefix, _ in GROUPS:
        block = tokens.get(group) or {}
        if not block:
            continue
        lines.append(f"  /* {group} */")
        for k, v in block.items():
            lines.append(f"  --{prefix}-{k}: {v};")
    extra = tokens.get("extra") or {}
    if extra:
        lines.append("  /* extra (signature gradients, composite borders, filters) */")
        for k, v in extra.items():
            lines.append(f"  --{k}: {v};")
    return lines


def render_css(style):
    tokens = style["tokens"]
    body = "\n".join(css_var_lines(tokens))
    return (
        f"/* {style['name']} — design tokens (generated from style_catalog.json) */\n"
        f"/* {style['era']} | {style['origin']} */\n"
        f":root {{\n{body}\n}}\n"
    )


def _js_value(v):
    return '"' + v.replace('"', '\\"') + '"'


def render_tailwind(style):
    tokens = style["tokens"]
    slug = style["slug"]
    out = []
    out.append(f"// {style['name']} — Tailwind theme fragment (generated).")
    out.append("// Merge into tailwind.config.js under theme.extend.")
    out.append("module.exports = {")
    out.append("  theme: {")
    out.append("    extend: {")
    for group, _, tw_key in GROUPS:
        block = tokens.get(group) or {}
        if not block:
            continue
        out.append(f"      {tw_key}: {{")
        for k, v in block.items():
            if group == "font":
                parts = [p.strip() for p in v.split(",")]
                arr = ", ".join(_js_value(p) for p in parts)
                out.append(f'        "{k}": [{arr}],')
            else:
                out.append(f'        "{k}": {_js_value(v)},')
        out.append("      },")
    out.append("    },")
    out.append("  },")
    out.append("};")
    out.append("")
    # Surface the `extra` props as a note so nothing silently drops.
    extra = tokens.get("extra") or {}
    if extra:
        out.append("// Signature `extra` tokens are CSS-only (gradients/filters/composite")
        out.append("// borders). Add them as CSS custom properties or arbitrary values:")
        for k, v in extra.items():
            out.append(f"//   --{k}: {v};")
    return "\n".join(out) + "\n"


def print_meta(style):
    print(f"# {style['name']}  ({style['slug']})")
    if style.get("aliases"):
        print("aliases:", ", ".join(style["aliases"]))
    print("category:", style["category"])
    print("era:", style["era"])
    print("origin:", style["origin"])
    print("traits:")
    for t in style["traits"]:
        print("  -", t)
    print("example:", style["example"])
    if style.get("confuse_with"):
        print("don't confuse with:", ", ".join(style["confuse_with"]))


def main():
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help"):
        print(__doc__)
        return 0

    catalog = load_catalog()

    if args[0] == "--list":
        for st in sorted(catalog["styles"], key=lambda s: s["slug"]):
            fl = " *flagship*" if st["flagship"] else ""
            al = f" ({', '.join(st['aliases'])})" if st.get("aliases") else ""
            print(f"{st['slug']}{al}{fl}")
        return 0

    if args[0] == "--flagship":
        for st in sorted(catalog["styles"], key=lambda s: s["slug"]):
            if st["flagship"]:
                print(st["slug"])
        return 0

    query = args[0]
    out_dir = args[1] if len(args) > 1 else "."
    style = find_style(catalog, query)
    if not style:
        print(f"No style matched '{query}'. Try --list to see all slugs/aliases.",
              file=sys.stderr)
        return 1

    if not style.get("flagship") or "tokens" not in style:
        print(f"'{style['name']}' is catalogued but has no flagship token block.\n"
              f"Derive tokens on the spot from this metadata (same schema as flagship "
              f"styles), then run contrast_check.py on the result:\n", file=sys.stderr)
        print_meta(style)
        return 2

    os.makedirs(out_dir, exist_ok=True)
    css_path = os.path.join(out_dir, f"{style['slug']}.css")
    tw_path = os.path.join(out_dir, f"{style['slug']}.tailwind.config.fragment.js")
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(render_css(style))
    with open(tw_path, "w", encoding="utf-8") as f:
        f.write(render_tailwind(style))

    print(f"Wrote {css_path}")
    print(f"Wrote {tw_path}")
    print(f"\nStyle: {style['name']}  —  signature: {style['traits'][0]}")
    if style.get("confuse_with"):
        print("Don't confuse with:", ", ".join(style["confuse_with"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
