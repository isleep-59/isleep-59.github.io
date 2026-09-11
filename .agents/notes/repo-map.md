# Repository Map

## Legacy State at Recovery

- `index.html`: Hexo 6.2.0 / NexT 7.8.0 generated blog homepage.
- `2022/`: seven generated post routes.
- `archives/`, `categories/`, `tags/`: generated collection pages.
- `css/`, `js/`, `lib/`, `images/`: legacy theme assets and vendored browser libraries.
- `search.xml`: generated local-search index.
- No source Hexo project, package manifest, README, repo-local agent guide, or task controls were present.

## Target Structure

- `index.html`: minimal interactive personal homepage.
- `assets/`: shared homepage styles and browser behavior.
- `assets/og.png`: generated Morandi social-preview card for the homepage.
- `projects/safety/index.html`: supplied self-contained taxonomy results explorer.
- `.nojekyll`: direct static publishing marker.
- `README.md`: local preview and publication-boundary instructions.
- `.agents/`: task and repository control records; not part of the visible site navigation.
- `AGENTS.md`: repository workflow constraints and control-artifact reading order.

## External Dependencies

- GitHub Pages provides static hosting after a future approved push.
- The target website requires no CDN, runtime API, database, package manager, or third-party JavaScript.

## Artifact Flow

1. Edit static files locally.
2. Preview through a local HTTP server.
3. Validate markup, internal links, report data parsing, and representative interactions.
4. Obtain user approval.
5. Commit, push, and inspect the public Pages URL in a later step.
