# Project Context

## Purpose

This repository is the static source for the `isleep-59.github.io` GitHub Pages user site. The current task replaces a dormant Hexo blog with a lightweight personal project index and publishes a self-contained safety research explorer under `projects/safety/`.

## Execution Model

- Production model: static files served directly from the repository root.
- Intended Pages source: `main` branch, `/(root)`.
- Local preview: a simple HTTP server; no application build step is required.

## Entrypoints and Contracts

- `index.html`: personal index and navigation hub.
- `assets/site.css`: shared visual tokens and responsive layout.
- `assets/site.js`: small progressive-enhancement interactions.
- `projects/<slug>/index.html`: self-contained project report entrypoint.
- `.nojekyll`: prevents Jekyll processing of the static output.

## Invariants

- Do not create `CNAME` without explicit instruction.
- Keep the site usable without a framework or package installation.
- Preserve the legacy site through Git branch `archive/legacy-blog-2022`.
- Project report data must be public-safe and client-only; do not add undeclared runtime network calls.
- Do not push or deploy without explicit approval after local review.
