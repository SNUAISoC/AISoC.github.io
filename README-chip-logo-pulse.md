# AI SoC center-chip logo pulse patch

Replace/add the following files in the repository root:

- `index.html` — replace existing file
- `assets/hero-logo-pulse.css` — add new file

No image files need to be replaced.

The effect uses the current Pages CMS-configured lab logo:
`{{ site.data.site.logo }}`

The hero background remains Pages CMS-configured:
`{{ site.data.home.hero_image }}`

## Position adjustment

If the logo is slightly off the physical chip center, edit:

```css
.hero {
  --chip-logo-x: 50%;
  --chip-logo-y: 50%;
  --chip-logo-width: clamp(92px, 8.5vw, 150px);
}
```

Examples:
- move right: `--chip-logo-x: 52%;`
- move up: `--chip-logo-y: 47%;`
- make smaller: reduce `--chip-logo-width`

## Animation

Cycle: 5.2 seconds.
The logo remains off for most of the cycle, then performs a subtle double pulse.
