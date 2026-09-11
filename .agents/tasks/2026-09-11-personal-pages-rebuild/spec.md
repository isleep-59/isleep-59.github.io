# Personal GitHub Pages Rebuild

## Background and Goal

- Replace the dormant blog homepage with a concise, interactive personal project index.
- Use the default `https://isleep-59.github.io/` domain.
- Make the supplied public safety project explorer available from a clean project route.
- Deliver a local preview only in this phase.

## Scope

- In scope: homepage, responsive Morandi visual system, accessible interactions, project navigation, safety explorer integration, legacy file cleanup, local preview, and local validation.
- Out of scope: personal biography copy, custom domain, analytics, backend services, remote push, Pages deployment, and modifications to research claims or data.

## Assumptions and Constraints

- The homepage may use neutral functional labels in place of biography copy.
- The safety explorer is approved for public display and is treated as inert supplied data plus local browser code.
- The site must work as plain static HTML/CSS/JavaScript on GitHub Pages.
- Existing remote state must remain untouched during this phase.

## High-Level Design

- A compact first viewport exposes the project index immediately rather than using a marketing hero.
- Morandi palette: warm paper background, sage and dusty-blue accents, muted rose for status, restrained shadows and borders.
- Interactions: system/light/dark appearance control, reduced-motion support, keyboard-visible focus, project-card filtering/navigation, and responsive layouts.
- Store the report at `projects/safety/index.html` for a stable route.
- Add a small return-to-index control to the supplied report without changing its dataset, conclusions, or core interactions.

## Acceptance Criteria

- `/index.html` renders a recognizable personal project index at desktop and narrow viewport widths.
- The safety project is visible in the first viewport and opens `projects/safety/`.
- Appearance selection works and respects system preference; the page remains usable with JavaScript disabled.
- The report parses its embedded dataset and its five views, filters, and detail panels remain functional.
- No custom-domain file or `isleep.top` reference exists in the new public site files.
- Local HTTP responses succeed for the homepage, shared assets, and project route.
- No remote branch, Pages setting, or deployment is changed.

## Claim and Evidence Gate

Claim: the redesigned site is ready for local user review, not public deployment.

- Required evidence: successful local HTTP responses, markup/script syntax checks, internal-link check, desktop and narrow visual inspection, representative report interaction checks.
- Stronger unsupported claim: the site is deployed correctly on GitHub Pages.
- Target status for this phase: `claim_ready` for local review only.

## Risks and Open Questions

- The current task cannot inspect GitHub Pages settings through the newly installed plugin.
- Final personal copy and additional projects remain intentionally deferred.
- Public deployment must be separately approved after review.
