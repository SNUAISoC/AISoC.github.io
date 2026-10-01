# AI SoC Pages CMS — Per-section Design GUI

This patch upgrades **Design Settings** so each page section can be adjusted independently from Pages CMS.

## What becomes editable

### Global / Shared
- Global body font, font size, line height
- Content width and side padding
- Main palette
- Header font/size/weight/colors/heights/nav gap/logo width/vertical offset
- Footer fonts/colors/padding/column gap/logo width/vertical offset

### Home
- Hero: title/emphasis/description fonts, sizes, weights, line-height, letter-spacing, colors
- Hero background/overlay/background position
- Hero text alignment, width, X/Y offset, column gap, top/bottom spacing
- Research Scope panel: fonts, sizes, colors, border, width, padding, X/Y offset
- Recruiting section: fonts, colors, background, padding, gap, alignment, X/Y offset

### Research
- Hero
- Introduction
- Research Areas
- Closing Question

Each section has independent typography, colors, background, padding/gap, alignment and X/Y offset controls. Research Areas also exposes icon, border and topic styling.

### Professor
- Hero
- Profile / Research Interests
- Career & Education

Profile controls include portrait width/height and interest typography.

### Team
- Hero
- Team Section / Intro
- Member Grid
- Member Card

Grid controls include desktop column count, row/column gap and image aspect ratio. Cards expose independent name, Korean name, role, bio, tag and link styling.

### Publications
- Hero
- Featured Publication
- Publication List

Featured section exposes outer/card backgrounds, card padding, image height and typography. Publication List exposes paper-title font/size and row spacing.

### Join Us
- Hero
- Who We Are Looking For
- Application Steps

Application controls include row spacing, CTA color and divider color.

## Files in this patch

Replace / add these files at the repository root:

- `.pages.yml`
- `_data/design.yml`
- `_includes/design-settings.html` **(new)**
- `_includes/site-header.html`
- `_includes/site-footer.html`
- `research.html`
- `professor.html`
- `publications.html`
- `join.html`

Existing `index.html`, `team.html`, `assets/styles.css`, `assets/multipage.css`, `assets/team.css`, content YAML files, and images stay as they are.

## Upload

Recommended:
1. Extract the ZIP.
2. Copy the extracted files into the root of `SNUAISoC/AISoC.github.io`.
3. Preserve `_data` and `_includes` folder paths.
4. Replace same-name files when asked.
5. Commit to `main`.
6. Wait for GitHub Pages to rebuild, then hard-refresh Pages CMS.

If using GitHub's web uploader, upload root files at repo root, `_data/*` inside `_data`, and `_includes/*` inside `_includes`. Do **not** upload the ZIP itself.

## Notes

- Initial values are set close to the current site's existing design, so applying the patch should not intentionally redesign the site.
- CSS-color fields accept values such as `#07111f`, `rgba(7,17,31,.8)`, or standard CSS color names.
- X/Y offsets are intended for desktop layout fine-tuning. To protect the mobile layout, most custom offsets reset to `0` under 720 px.
- Large mobile headings are capped for layout safety.
