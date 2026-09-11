# Repository Recovery

## Background and Goal

- Re-onboard the dormant GitHub Pages repository before replacing the old blog.
- Preserve the legacy state and establish durable context for later sessions.

## Scope

- In scope: read-only audit, local archive branch, repository guide, project context, repository map, and dated system status.
- Out of scope: remote branch creation, GitHub Pages settings changes, push, and deployment.

## Assumptions and Constraints

- `origin/main` is the authoritative public repository state at clone time.
- All changes remain local until the user reviews the site.
- The previous static site must remain recoverable.

## High-Level Design

- Preserve commit `9e11b13843268504eb56bdefd77995935d638793` with local branch `archive/legacy-blog-2022`.
- Record the current structure and known risks under `.agents/notes/`.
- Point future agents to those controls through repo-local `AGENTS.md`.

## Acceptance Criteria

- The legacy commit is reachable through `archive/legacy-blog-2022`.
- `project-context.md`, `repo-map.md`, and `system-status.md` exist with distinct purposes.
- The validation basis and unverified remote surfaces are explicit.

## Risks and Open Questions

- GitHub Pages settings and custom-domain state cannot be inspected from the current task because the newly installed GitHub plugin is not exposed here.
- The local archive branch is not a remote backup until the user later approves a push.
