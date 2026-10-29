# Academic profile validation — 2026-10-29

## Independent observer reviews

| Round | Aesthetics | Technical correctness | Outcome |
| --- | --- | --- | --- |
| 1 | 4.5 / 5 | 4.5 / 5 | No blockers; suggested guarding malformed URL hashes and deriving publication count. |
| 2 | 4.5 / 5 | 4.8 / 5 | Final implementation passes; both suggestions addressed and accessibility refinement verified. |

Two of the maximum five review rounds were used. The observer inspected desktop/mobile screenshots, source, provenance notes, and browser test results, and independently ran the static checker. Generic illustrative report diagrams and unavailable exact project collaborator/date records remain documented content limitations.

## Build and static checks

- Hugo 0.161.1 production build succeeds with `GOPROXY=off GOSUMDB=off`.
- A separate build with `--panicOnWarning` succeeds without warnings.
- `bash scripts/build-hugo-local.sh` builds and runs the persistent checker.
- `python3 scripts/check-profile.py hugo-theme-academic-cv/public` passes: 15 entries, exactly one image per entry, 16 images including portrait, 23 legacy redirects, valid local assets and anchors, unique IDs, image alternatives, and the real résumé PDF.
- YAML/JSON configurations parse; parent/source `git diff --check` pass.

## Browser checks

Used Playwright with the installed Google Chrome, a loopback HTTP server, and all non-loopback page requests blocked. Browser QA tools were installed in temporary locations, not added as website dependencies.

- Widths 320, 390, 768, 1024, and 1440 pixels: no horizontal overflow, images load.
- All four navigation links change the fragment without a document request or reload; sticky navigation does not obscure headings.
- Current-section indicator and browser back/forward work.
- Keyboard skip link and publication disclosure work.
- Native section links and publication disclosure work with JavaScript disabled.
- Reduced-motion preference disables smooth scrolling; all entry previews are static.
- Malformed percent-encoded fragments do not throw JavaScript exceptions.
- Legacy project, publication, section, and demo URLs lead to matching homepage anchors, including opening a collapsed technical publication when needed.
- No browser exceptions or external page-resource requests.
- axe-core, WCAG 2 A/AA, 2.1 AA, and 2.2 AA tags: **zero violations, 22 passed checks, zero incomplete checks** on the page with all technical publications expanded.

The first accessibility pass caught a biography link distinguished only by color. Adding an underline resolved it, and the full browser suite passed afterward. Automated checks supplement the observer's visual review; they do not constitute comprehensive manual assistive-technology testing.

## Review artifacts

Session screenshots and detailed browser results were saved locally under `/tmp/henry-profile-review/`, including `desktop-top.png`, `desktop-full.png`, `desktop-research.png`, `desktop-projects.png`, `technical.png`, `mobile-top.png`, `mobile-full.png`, `mobile-research.png`, and `qa-results.json`. Temporary artifacts are not publication assets.

No external project/publication links were fetched; only the explicitly authorized reference website and its stylesheet were read. GitHub Actions and Netlify configurations were updated but not executed. No commit, push, or deployment was performed.
