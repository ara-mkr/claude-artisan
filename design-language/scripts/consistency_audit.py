#!/usr/bin/env python3
"""
consistency_audit.py — the "half-applied style" detector.

Scans a codebase's CSS / component files for hardcoded visual values (colors,
radii, shadows, font families) that DON'T reference the applied style's token
set. Those hardcoded one-offs are exactly what make a styled UI look accidental
instead of intentional — one component using #3b82f6 while the rest use
var(--color-primary), a card with border-radius: 5px in a system built on 16px,
and so on.

** This is a lightweight regex linter, NOT a full CSS parser or cascade
resolver. ** It cannot understand specificity, preprocessor logic, or computed
values. Treat every finding as a lead to eyeball, not a hard error. Its job is
to surface drift cheaply so you can decide.

The token set comes from either:
  * a generated CSS token file (from generate_tokens.py):  --token-audit
        python3 consistency_audit.py ./src --tokens glassmorphism.css
  * a style slug resolved against style_catalog.json:
        python3 consistency_audit.py ./src --style glassmorphism

What it flags (only inside property VALUES, never token definitions):
  * hex or rgb()/rgba() colors not present in the token set
  * border-radius pixel/rem literals not in the token set
  * box-shadow literals (any hand-rolled shadow when the token set defines some)
  * font-family literals whose first family isn't in the token set

What it treats as compliant:
  * any value using var(--...)  (that's the whole point)
  * lines that DEFINE a custom property (`--x: ...;`)
  * values matching a token value exactly (case-insensitive, 3-hex expanded)

Scanned extensions: .css .scss .sass .less .html .htm .jsx .tsx .js .ts .vue .svelte

Standard library only. Exit code 0 = clean, 1 = drift found.
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
CATALOG = os.path.join(HERE, "style_catalog.json")
EXTS = {".css", ".scss", ".sass", ".less", ".html", ".htm", ".jsx", ".tsx",
        ".js", ".ts", ".vue", ".svelte"}
SKIP_DIRS = {"node_modules", ".git", "dist", "build", ".next", "__pycache__", "vendor"}

HEX_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b")
RGB_RE = re.compile(r"rgba?\([^)]*\)")
RADIUS_RE = re.compile(r"border-radius\s*:\s*([^;{}]+)", re.IGNORECASE)
SHADOW_RE = re.compile(r"box-shadow\s*:\s*([^;{}]+)", re.IGNORECASE)
FONT_RE = re.compile(r"font-family\s*:\s*([^;{}]+)", re.IGNORECASE)
LEN_RE = re.compile(r"\b\d*\.?\d+(px|rem|em)\b")
VARDEF_RE = re.compile(r"^\s*--[\w-]+\s*:")


def norm_hex(h):
    h = h.lower().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return "#" + h[:6]


def collect_token_values_from_css(path):
    text = open(path, encoding="utf-8").read()
    colors, radii, shadows, fonts = set(), set(), set(), set()
    for m in re.finditer(r"--([\w-]+)\s*:\s*([^;]+);", text):
        name, val = m.group(1), m.group(2).strip()
        for h in HEX_RE.findall(val):
            colors.add(norm_hex(h))
        for r in RGB_RE.findall(val):
            colors.add(re.sub(r"\s+", "", r.lower()))
        if name.startswith("radius"):
            for L in LEN_RE.finditer(val):
                radii.add(L.group(0))
        if name.startswith("shadow") or "shadow" in name:
            shadows.add(val.lower())
        if name.startswith("font"):
            fonts.add(val.split(",")[0].strip().strip("'\"").lower())
    return colors, radii, shadows, fonts


def collect_token_values_from_style(style):
    tk = style["tokens"]
    colors, radii, shadows, fonts = set(), set(), set(), set()
    def harvest_colors(d):
        for v in d.values():
            for h in HEX_RE.findall(v):
                colors.add(norm_hex(h))
            for r in RGB_RE.findall(v):
                colors.add(re.sub(r"\s+", "", r.lower()))
    for grp in ("color", "shadow", "extra"):
        harvest_colors(tk.get(grp, {}))
    for v in (tk.get("radius") or {}).values():
        for L in LEN_RE.finditer(v):
            radii.add(L.group(0))
    for v in (tk.get("shadow") or {}).values():
        shadows.add(v.lower())
    for v in (tk.get("font") or {}).values():
        fonts.add(v.split(",")[0].strip().strip("'\"").lower())
    return colors, radii, shadows, fonts


def iter_files(root):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in filenames:
            if os.path.splitext(fn)[1].lower() in EXTS:
                yield os.path.join(dirpath, fn)


def audit(root, colors, radii, shadows, fonts, have_shadow_tokens):
    findings = []
    for path in iter_files(root):
        try:
            lines = open(path, encoding="utf-8", errors="replace").read().splitlines()
        except OSError:
            continue
        for i, line in enumerate(lines, 1):
            if VARDEF_RE.match(line):
                continue  # token definition, not usage
            low = line.lower()
            # colors
            for h in HEX_RE.findall(line):
                if norm_hex(h) not in colors:
                    findings.append((path, i, "color", h))
            for r in RGB_RE.findall(line):
                if re.sub(r"\s+", "", r.lower()) not in colors:
                    findings.append((path, i, "color", r))
            # radius
            for rm in RADIUS_RE.finditer(line):
                val = rm.group(1)
                if "var(" in val:
                    continue
                for L in LEN_RE.finditer(val):
                    if L.group(0) not in radii and L.group(0) not in ("0px", "0rem"):
                        findings.append((path, i, "radius", L.group(0)))
            # shadow
            if have_shadow_tokens:
                for sm in SHADOW_RE.finditer(line):
                    val = sm.group(1).strip().lower()
                    if "var(" in val or val in ("none", "inherit", "unset"):
                        continue
                    if val not in shadows:
                        findings.append((path, i, "shadow", sm.group(1).strip()[:50]))
            # font-family
            for fm in FONT_RE.finditer(line):
                val = fm.group(1)
                if "var(" in val:
                    continue
                first = val.split(",")[0].strip().strip("'\"").lower()
                if first and first not in fonts and first not in ("inherit", "initial"):
                    findings.append((path, i, "font", first))
    return findings


def main():
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help"):
        print(__doc__)
        return 0
    root = args[0]
    if not os.path.isdir(root):
        print(f"Not a directory: {root}", file=sys.stderr)
        return 2

    if "--tokens" in args:
        tok_path = args[args.index("--tokens") + 1]
        colors, radii, shadows, fonts = collect_token_values_from_css(tok_path)
        src = tok_path
    elif "--style" in args:
        slug = args[args.index("--style") + 1]
        catalog = json.load(open(CATALOG, encoding="utf-8"))
        style = next((s for s in catalog["styles"]
                      if s["slug"] == slug or slug.lower() in
                      [a.lower() for a in s.get("aliases", [])]), None)
        if not style:
            print(f"Unknown style '{slug}'.", file=sys.stderr)
            return 2
        if not style.get("flagship"):
            print(f"'{slug}' has no flagship token block; generate/derive tokens "
                  f"first, then audit with --tokens <file>.", file=sys.stderr)
            return 2
        colors, radii, shadows, fonts = collect_token_values_from_style(style)
        src = f"catalog:{slug}"
    else:
        print("Provide --tokens <css> or --style <slug>.", file=sys.stderr)
        return 2

    have_shadow_tokens = bool(shadows)
    findings = audit(root, colors, radii, shadows, fonts, have_shadow_tokens)

    print(f"Audited {root}  against token set [{src}]")
    print(f"  allowed colors: {len(colors)}  radii: {len(radii)}  "
          f"shadows: {len(shadows)}  fonts: {len(fonts)}")
    if not findings:
        print("\nNo off-token hardcoded values found. Style looks consistently applied. ✅")
        return 0

    by_kind = {}
    for f in findings:
        by_kind.setdefault(f[2], []).append(f)
    print(f"\n{len(findings)} off-token value(s) — candidates to replace with tokens:")
    for kind in ("color", "radius", "shadow", "font"):
        items = by_kind.get(kind, [])
        if not items:
            continue
        print(f"\n  {kind.upper()} ({len(items)}):")
        for path, ln, _, val in items[:40]:
            rel = os.path.relpath(path, root)
            print(f"    {rel}:{ln}  ->  {val}")
        if len(items) > 40:
            print(f"    ... and {len(items) - 40} more")
    print("\nReplace each with the matching token (e.g. var(--color-primary)), or, if "
          "the value is genuinely needed, add it to the style's token set so the system "
          "stays the single source of truth.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
