# Commit Workflow — `claude-artisan`

This file tells Claude Code (or any agent) exactly how to stage, sequence, and message commits while building and pushing the `claude-artisan` design-language skill repo. Follow it in order — don't squash everything into one commit, and don't commit generated/junk files.

Drop this file at the repo root as `COMMIT_GUIDE.md` (or paste its contents into `CONTRIBUTING.md`) before the build starts, so Claude Code reads it first.

---

## 0. One-time setup (first commit only)

```bash
git init
git branch -M main
```

Create `.gitignore` **before the first commit**:

```
# OS / editor
.DS_Store
Thumbs.db
.vscode/
.idea/

# Python (scripts/)
__pycache__/
*.pyc
.venv/
venv/

# Node (if any tooling is added later)
node_modules/

# Working/scratch files — never commit these
*.tmp
*.bak
draft-*
scratch/
```

First commit is scaffolding only — no content yet:

```
chore: initialize claude-artisan repo

Empty skill scaffold: .gitignore, LICENSE, README stub.
Content (catalog, references, scripts, assets) follows in
subsequent commits per COMMIT_GUIDE.md.
```

Stage: `.gitignore`, `LICENSE`, a placeholder `README.md`, this `COMMIT_GUIDE.md`. Nothing else.

---

## 1. Commit-per-phase, not commit-per-file

The build happens in phases (catalog → category refs → deep specs → scripts → assets → SKILL.md → QA → package). **Each phase is its own commit** — this keeps history readable and gives you a clean rollback point if a later phase reveals the catalog needs fixing. Do not batch multiple phases into one commit, and do not fragment a single phase across many tiny commits (e.g. don't commit each of the 40 deep-spec files separately — one commit per phase, all its files staged together).

Exception: if a phase is large enough that a partial failure mid-phase would lose real work (e.g. deep specs is 40 files and takes many tool calls), commit in **sub-batches of ~8-10 related files** with a phase-scoped message, not one file at a time.

---

## 2. Commit message format

Use Conventional Commits, scoped to the part of the repo touched:

```
<type>(<scope>): <short summary, imperative mood, no period>

<optional body — what & why, not how>
<optional footer — references, breaking changes>
```

**Types:**
| Type | Use for |
|---|---|
| `feat` | New catalog entries, new reference files, new scripts, new SKILL.md workflow content |
| `fix` | Correcting a wrong fact, broken token value, bad script logic |
| `docs` | README, COMMIT_GUIDE, non-skill documentation |
| `refactor` | Reorganizing files/structure with no content change |
| `test` | Adding/updating script tests or the QA checklist pass |
| `chore` | Repo scaffolding, packaging, `.gitignore`, tooling |

**Scopes** (match the repo structure):
`catalog`, `refs`, `deep-specs`, `scripts`, `assets`, `skill-md`, `repo`

---

## 3. Phase-by-phase staging & commit sequence

Stage and commit in exactly this order. Each block = one commit (or sub-batched commits per §1 if too large).

**Phase 1 — Catalog (source of truth)**
```
git add references/*/style_catalog.json   # wherever it lands
git commit -m "feat(catalog): add style_catalog.json with 180+ design languages

Single source of truth for names, aliases, era, traits, and token
defaults. All prose reference files and scripts derive from this."
```

**Phase 2 — Category reference files (9 files)**
```
git add references/01-morphism-tactile-dimensional.md \
        references/02-glass-transparency-family.md \
        references/03-brutalist-antidesign.md \
        references/04-flat-material-platform-systems.md \
        references/05-historical-graphic-movements.md \
        references/06-retrofuturism-punk-genres.md \
        references/07-minimal-maximal-organic.md \
        references/08-texture-material-rendering.md \
        references/09-niche-subculture-kitsch.md
git commit -m "feat(refs): add 9 category reference files

Covers all 180+ catalog entries with era, defining traits, and a
verified real-world reference per entry."
```

**Phase 3 — Flagship deep-spec files (~30-40 files, sub-batch if needed)**
```
git add references/00-flagship-implementation-specs/
git commit -m "feat(deep-specs): add full implementation specs for ~35 flagship styles

Per-style CSS tokens, Tailwind config fragment, 10 component rules,
signature moves, accessibility corrections, do/don't list, and
'don't confuse with X' notes."
```

**Phase 4 — Scripts**
```
git add scripts/
git commit -m "feat(scripts): add token generator, contrast checker, consistency auditor

generate_tokens.py, contrast_check.py, consistency_audit.py — all
read from style_catalog.json as the single source of truth."
```

**Phase 5 — Assets (starter themes, component examples)**
```
git add assets/
git commit -m "feat(assets): add starter-theme CSS and component examples for flagship styles"
```

**Phase 6 — SKILL.md**
```
git add SKILL.md
git commit -m "feat(skill-md): add SKILL.md workflow and navigation

Written last so it accurately references every file that actually
exists in the repo."
```

**Phase 7 — QA / fixes found during self-review**
```
git add -A
git commit -m "fix(catalog): correct N entries flagged by definition-of-done review

<list what was wrong and fixed, e.g. wrong era dates, duplicate
styles merged, missing accessibility notes added>"
```
Only create this commit if the QA pass actually found something to fix. If the checklist passes clean, skip it — don't manufacture a commit.

**Phase 8 — Package / release**
```
git add -A
git commit -m "chore(repo): finalize claude-artisan v1.0 for packaging

All 9 definition-of-done checks pass. Ready for install."
git tag -a v1.0 -m "claude-artisan v1.0 — initial release"
```

---

## 4. Rules Claude Code must follow throughout

- **Never** `git add .` blindly mid-build — always add explicit paths for the current phase so unrelated scratch/draft files don't sneak in.
- **Never** commit `style_catalog.json` changes bundled with unrelated prose edits — if a later phase requires fixing the catalog, that's its own `fix(catalog)` commit even if small.
- **Never** rewrite history (`git commit --amend`, `rebase`, force-push) once a commit is made, unless the user explicitly asks — this is a single-author skill repo but history should stay linear and honest.
- Run `git status` before every commit and confirm only the intended files are staged.
- If a phase is interrupted (e.g. hits an error partway through 40 deep-spec files), commit what's done and complete under its own `feat(deep-specs): part 1/2` style message rather than leaving uncommitted work sitting around — the working tree should be committable at any checkpoint.
- Write commit bodies for anything a future reader (you, six months from now) would need context on — "why" over "what," since the diff already shows what changed.

---

## 5. Pushing

```bash
git remote add origin <repo-url>   # once, when the user provides it
git push -u origin main --tags
```

Do **not** run this until the user has given you a real remote URL and confirmed they want it pushed — creating/pushing to GitHub is a send-type action that needs explicit go-ahead, not an assumption.
