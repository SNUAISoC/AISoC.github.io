# AISoC Pages CMS conversion

This bundle converts the current hard-coded AISoC GitHub Pages site into a Jekyll data-driven site that Pages CMS can edit with forms.

## Replace / add these files

- Replace: `.pages.yml`
- Replace: `index.html`
- Replace: `research.html`
- Replace: `professor.html`
- Replace: `publications.html`
- Replace: `join.html`
- Add: `_data/site.yml`
- Add: `_data/home.yml`
- Add: `_data/research.yml`
- Add: `_data/professor.yml`
- Add: `_data/publications.yml`
- Add: `_data/join.yml`
- Add: `_includes/site-header.html`
- Add: `_includes/site-footer.html`

Keep the existing `assets/` folder unchanged.

## What changes

The visual design, CSS classes, JavaScript, and current content are preserved. Editable content moves into `_data/*.yml`. Pages CMS edits those YAML files through form fields.

The five HTML files now have Jekyll front matter (`---`) and render values from `site.data`.

## Important preview note

Opening the HTML files directly or using only `python -m http.server` will show Liquid/Jekyll tags instead of a rendered site. GitHub Pages renders them automatically after a commit.

For local rendering, use a Jekyll environment. For routine content edits, Pages CMS + the deployed GitHub Pages site is enough.

## Typical editing workflow

1. Open Pages CMS.
2. Choose `Website Content`.
3. Edit Home / Research / Professor / Publications / Join Us.
4. Save.
5. GitHub Pages rebuilds the website.
