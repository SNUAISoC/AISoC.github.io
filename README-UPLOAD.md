# AI SoC Pages CMS GUI + Team patch

This ZIP contains only **new or changed files**. Existing images and unchanged pages are intentionally not duplicated.

## Upload

1. Extract the ZIP.
2. Open the `AISoC_PagesCMS_GUI_PATCH` folder.
3. Upload its contents to the **root** of `SNUAISoC/AISoC.github.io` on the `main` branch, preserving folders.
4. Allow GitHub to replace files with the same path (`.pages.yml`, `_includes/site-header.html`, `_data/publications.yml`, `_data/join.yml`).
5. New files are `_data/design.yml`, `_data/team.yml`, `team.html`, and `assets/team.css`.

## Pages CMS menus added

### Design Settings
- Body / heading / accent-serif font
- Body font size and line height
- Home hero max title size
- Inner-page max title size
- Navigation font size
- Content width and side padding
- Section spacing and header height
- Home hero text alignment, width, vertical offset, and column gap
- Main site colors (HEX)

Default values mirror the current site's values so the look should remain close to the existing site immediately after upload.

### Team
Add, remove, and reorder students from:

`Website Content → Team → Students`

Each student supports:
- English/Korean name
- Degree / role
- Profile image
- Email
- Short bio
- Research-interest tags
- Website / GitHub / LinkedIn links

If no students are registered, the Team page shows an editor hint instead of fake sample members.

## Navigation order

Research → Professor → Team → Publications → Join us

Page indexes were updated to:
- Research: 01
- Professor: 02
- Team: 03
- Publications: 04
- Join us: 05
