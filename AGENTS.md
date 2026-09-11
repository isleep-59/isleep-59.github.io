# Repository Agent Guide

Read these files before making non-trivial changes:

1. `.agents/notes/project-context.md`
2. `.agents/notes/system-status.md`
3. `.agents/notes/repo-map.md`
4. The active task under `.agents/tasks/`

## Repository rules

- This repository publishes the `isleep-59.github.io` GitHub Pages user site.
- Keep production output static and compatible with direct branch publishing.
- Do not add a custom domain or `CNAME` unless the user explicitly requests it.
- Treat `archive/legacy-blog-2022` as the immutable local pointer to the previous Hexo site.
- Project reports belong under `projects/<slug>/` and must not execute network requests unless explicitly reviewed and documented.
- Never publish secrets or private research data; GitHub Pages content is public.
- Validate locally before any push or deployment. Pushing and deployment require explicit user approval.
