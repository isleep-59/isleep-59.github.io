# Global workspace reading deck

24 Chinese HTML slides explaining [Verbalizable Representations Form a Global Workspace in Language Models](https://transformer-circuits.pub/2026/workspace/index.html), Gurnee et al., Anthropic, July 6, 2026.

## Use
Open `index.html` through any static HTTP server. Published route: https://isleep-59.github.io/projects/global-workspace/.
- Left/right, Page Up/Down, Space: navigate. Home/End: first/last page.
- O: contents. F: fullscreen. Escape: close the active dialog.
- Click a figure to enlarge. “原始尺寸” allows scrolling the full-resolution figure.
- Horizontal swipe navigates on touch devices. Portrait mobile is supported; landscape or a larger screen makes dense original figures easier to inspect.
- Browser printing uses one slide per landscape page.

## Sources and visual evidence
Figure images retain the authors' original browser-rendered graphics, captured on 2026-10-15 at a 1440px viewport and 2× device scale. `assets/sources.json` maps each original figure to its source. Figure 20's slide image shows only its original quantitative subpanels; clicking it opens the complete original figure. These are static captures; interactive source figures remain available through their slide links. Copyright and attribution remain with the original authors. This is an independent educational reading guide, not an Anthropic publication.

`h_J` in the definition slide denotes the sparse approximation, not an orthogonal projection onto one global fixed subspace. All layer numbers in original figures are normalized to 0–100. Score changes refer to the article's specified evaluations and graders.

## Interface parameter
`#slide-N`: URL hash string, with integer N from 1 to 24, default 1 when absent or malformed. Values outside the range are clamped to the first/last slide. For example, `#slide-20` opens reflection training. `slides.js` reads the hash on startup/hash change and rewrites it after navigation. It enables shareable page links without server routes or persistent storage.

No build, external fonts, analytics, runtime API requests, or third-party scripts. All presentation assets are same-origin. Only explicit source links leave the site. The viewer does not run the article's JavaScript or any model inference.
