# Automation Notes (GitHub Pages)

This is a lightweight HTML/CSS/JS skeleton for a personal engineering site:

- Tools: /tools/
- Notes: /notes/
- Projects: /projects/

## Quick Start

1. Create a GitHub repo (e.g. `automation-notes`)
2. Upload these files to the repo root
3. Enable GitHub Pages:
   - Settings → Pages → Build and deployment → Deploy from a branch
   - Branch: `main`, Folder: `/ (root)`
4. Visit:
   - `https://<username>.github.io/<repo>/`

## Editing

- Add new pages by copying an existing page and updating the content.
- Put images under `assets/images/`.
- The navbar auto-highlights the active page.

## Local preview

Use any static server, e.g.

```bash
python -m http.server 8000
```

Then open http://localhost:8000
