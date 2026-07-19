#!/usr/bin/env python3
"""
contrast_check.py — real WCAG 2.x contrast-ratio checker.

Implements the exact WCAG relative-luminance and contrast-ratio math (not an
approximation) and reports pass/fail against:
    AA  normal text : 4.5:1
    AA  large text  : 3.0:1     (>= 18.66px bold, or >= 24px regular)
    AAA normal text : 7.0:1
    AAA large text  : 4.5:1

Two modes:
  1. Manual pair:
        python3 contrast_check.py "#0f172a" "#f8fafc"
        python3 contrast_check.py "rgb(15,23,42)" "white"
  2. Scan a CSS/SCSS file: extracts every color the file declares, pairs each
     `color` with a plausible background (its own `background`/`background-color`
     in the same rule if present, else the page default you pass with --bg), and
     reports any pairing that fails AA.
        python3 contrast_check.py --css styles.css
        python3 contrast_check.py --css styles.css --bg "#0b0b0f"

Notes / limitations:
  * Alpha is composited over the given/assumed background before measuring, so a
    translucent glass fill is judged as it actually renders (approximate — it
    assumes the backdrop equals --bg).
  * The CSS scan is a regex heuristic, not a full cascade resolver; treat flagged
    pairs as leads to verify, and trust the manual pair mode for exact numbers.

Standard library only.
"""
import re
import sys

NAMED = {
    "black": (0, 0, 0), "white": (255, 255, 255), "red": (255, 0, 0),
    "green": (0, 128, 0), "blue": (0, 0, 255), "gray": (128, 128, 128),
    "grey": (128, 128, 128), "silver": (192, 192, 192), "transparent": (0, 0, 0, 0.0),
}


def _clamp(x, lo, hi):
    return max(lo, min(hi, x))


def parse_color(value, bg=(255, 255, 255)):
    """Return an (r, g, b) tuple in 0..255, compositing any alpha over `bg`."""
    v = value.strip().lower()
    if v in NAMED:
        c = NAMED[v]
        return _composite(c, bg)
    # #rgb / #rgba / #rrggbb / #rrggbbaa
    m = re.fullmatch(r"#([0-9a-f]{3,8})", v)
    if m:
        h = m.group(1)
        if len(h) == 3:
            r, g, b = (int(c * 2, 16) for c in h)
            return (r, g, b)
        if len(h) == 4:
            r, g, b, a = (int(c * 2, 16) for c in h)
            return _composite((r, g, b, a / 255), bg)
        if len(h) == 6:
            return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))
        if len(h) == 8:
            r = int(h[0:2], 16); g = int(h[2:4], 16); b = int(h[4:6], 16)
            a = int(h[6:8], 16) / 255
            return _composite((r, g, b, a), bg)
    # rgb()/rgba()
    m = re.fullmatch(r"rgba?\(([^)]+)\)", v)
    if m:
        parts = re.split(r"[,/\s]+", m.group(1).strip())
        parts = [p for p in parts if p]
        nums = []
        for p in parts[:3]:
            if p.endswith("%"):
                nums.append(round(float(p[:-1]) * 255 / 100))
            else:
                nums.append(int(round(float(p))))
        a = 1.0
        if len(parts) >= 4:
            ap = parts[3]
            a = float(ap[:-1]) / 100 if ap.endswith("%") else float(ap)
        r, g, b = (int(_clamp(n, 0, 255)) for n in nums)
        return _composite((r, g, b, a), bg) if a < 1 else (r, g, b)
    raise ValueError(f"Unrecognized color: {value!r}")


def _composite(c, bg):
    """Alpha-composite (r,g,b,a) over an opaque bg (r,g,b)."""
    if len(c) == 3:
        return c
    r, g, b, a = c
    br, bg_, bb = bg
    return (
        round(r * a + br * (1 - a)),
        round(g * a + bg_ * (1 - a)),
        round(b * a + bb * (1 - a)),
    )


def _linearize(channel_8bit):
    cs = channel_8bit / 255.0
    return cs / 12.92 if cs <= 0.03928 else ((cs + 0.055) / 1.055) ** 2.4


def relative_luminance(rgb):
    r, g, b = (_linearize(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(fg, bg):
    l1 = relative_luminance(fg)
    l2 = relative_luminance(bg)
    lighter, darker = max(l1, l2), min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


def grade(ratio):
    return {
        "AA_normal": ratio >= 4.5,
        "AA_large": ratio >= 3.0,
        "AAA_normal": ratio >= 7.0,
        "AAA_large": ratio >= 4.5,
    }


def _mark(ok):
    return "PASS" if ok else "FAIL"


def report_pair(fg_raw, bg_raw):
    bg = parse_color(bg_raw)
    fg = parse_color(fg_raw, bg=bg)
    ratio = contrast_ratio(fg, bg)
    g = grade(ratio)
    print(f"foreground {fg_raw}  ->  rgb{fg}")
    print(f"background {bg_raw}  ->  rgb{bg}")
    print(f"contrast ratio: {ratio:.2f}:1")
    print(f"  AA  normal (4.5:1): {_mark(g['AA_normal'])}")
    print(f"  AA  large  (3.0:1): {_mark(g['AA_large'])}")
    print(f"  AAA normal (7.0:1): {_mark(g['AAA_normal'])}")
    print(f"  AAA large  (4.5:1): {_mark(g['AAA_large'])}")
    return g["AA_normal"]


COLOR_RE = re.compile(
    r"(#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\))"
)
RULE_RE = re.compile(r"([^{}]*)\{([^{}]*)\}", re.DOTALL)


def _extract_prop(body, prop):
    m = re.search(prop + r"\s*:\s*([^;]+);", body, re.IGNORECASE)
    return m.group(1).strip() if m else None


def scan_css(path, default_bg):
    text = open(path, encoding="utf-8").read()
    failures = []
    checked = 0
    for sel, body in RULE_RE.findall(text):
        color = _extract_prop(body, "color")
        bg = _extract_prop(body, "background-color") or _extract_prop(body, "background")
        if not color:
            continue
        # only handle single literal colors, skip gradients/vars
        cm = COLOR_RE.search(color)
        if not cm:
            continue
        fg_raw = cm.group(1)
        if bg:
            bm = COLOR_RE.search(bg)
            bg_raw = bm.group(1) if bm else default_bg
        else:
            bg_raw = default_bg
        try:
            bgc = parse_color(bg_raw)
            fgc = parse_color(fg_raw, bg=bgc)
        except ValueError:
            continue
        ratio = contrast_ratio(fgc, bgc)
        checked += 1
        if ratio < 4.5:
            failures.append((sel.strip()[:60], fg_raw, bg_raw, ratio))
    print(f"Scanned {path}: checked {checked} color/background pairing(s).")
    if not failures:
        print("No AA (4.5:1) failures found among literal color pairs. ✅")
        return True
    print(f"\n{len(failures)} pairing(s) below AA (4.5:1):")
    for sel, fg, bg, ratio in failures:
        print(f"  [{ratio:4.2f}:1]  {fg} on {bg}   in  {sel!r}")
    return False


def main():
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help"):
        print(__doc__)
        return 0
    if args[0] == "--css":
        if len(args) < 2:
            print("usage: contrast_check.py --css <file> [--bg <color>]", file=sys.stderr)
            return 1
        path = args[1]
        default_bg = "#ffffff"
        if "--bg" in args:
            default_bg = args[args.index("--bg") + 1]
        ok = scan_css(path, default_bg)
        return 0 if ok else 1
    if len(args) < 2:
        print("usage: contrast_check.py <foreground> <background>", file=sys.stderr)
        return 1
    ok = report_pair(args[0], args[1])
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
