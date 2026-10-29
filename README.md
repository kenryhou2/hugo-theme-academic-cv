# Henry Kou — academic profile

A single-page Hugo website inspired by the structure of [Huy Ha’s profile](https://huy-ha.github.io/): a portrait and biography, updates, research, and projects. Uses local templates, system sans serif fonts, and a navy/terracotta palette. No remote theme, JavaScript framework, font service, search index, or package installation is required.

## Build and preview

Use Hugo **0.161.1** (the version pinned in the workflows).

```bash
hugo server --bind 127.0.0.1 --disableFastRender
# Production output goes into public/:
GOPROXY=off GOSUMDB=off hugo --gc --minify --cleanDestinationDir
```

Optional `pnpm run dev` and `pnpm run build` wrap these commands; Node/pnpm are not build requirements. The parent repository provides `scripts/build-hugo-local.sh` and `scripts/check-profile.py` for a build plus static checks.

## Editing the profile

- `layouts/home.html`: biography and single-page structure.
- `data/profile.yaml`: contact information, résumé, profile links, and updates.
- `config/_default/menus.yaml`: four native section links.
- `content/publications/*/index.md` and `content/projects/*/index.md`: title, summary, people, source links, and the `profile` presentation fields.
- `layouts/_partials/profile/entry.html`: shared compact publication/project row.
- `assets/css/profile.css`: typography, colors, spacing, mobile and reduced-motion styles.
- `assets/js/profile.js`: optional active navigation and opening collapsed publications from deep links. Anchor navigation and disclosure controls also work without it.
- `static/images/profile/`: small, local WebP previews and illustrative SVG diagrams.

Each displayed entry has exactly one image, a concise overview, available author/contributor credits, a venue/project category, an affiliation/context line, and a year or explicitly labeled update date. Add a `profile` mapping to each new entry, following an existing example. Image names without extensions resolve to `.webp`; SVG names include `.svg`. `profile.order` controls ordering. `profile.technical: true` puts an earlier report in the expandable publication list. The count is automatic.

DeformX and EigenBot are represented by their research papers instead of duplicate project rows. Their project records set `profile_hidden: true` and `profile_target` to the corresponding paper. Old content URLs render minimal redirect pages to anchors; homepage navigation never opens another internal HTML page. Original media URLs remain available. Legacy dashboard data and block partials are retained but unused.

## Content provenance and limitations

The existing publication frontmatter and `static/assets/files/Henry_Kou_Resume_S25.pdf` are the sources for coauthor lists, venues, contact details, and lab association. No new external biographical or publication research was performed. The named reference site was inspected only for visual structure.

The résumé is the existing Spring 2025 document; the separately retained `static/uploads/resume.pdf` is a starter demo and is **not linked**. Change `data/profile.yaml` when a newer résumé is supplied.

Most project page dates are May 2026 publication/update metadata, not verified project dates. They are displayed as **Updated May 2026**. Individual project collaborator lists were not available; the site names Henry and the documented lab/context without inventing team members or attributing every lab project to the paper coauthors. The biography avoids the conflicting Research Assistant/Research Associate labels and does not infer graduation from a scheduled degree end date.

Photos and simulation previews derive from existing repository media. Large GIFs use static frames to keep the page lightweight and motion-free; existing external video links are retained. A*, symbolic planning, manipulation, queue, and power-electronics SVGs are illustrative diagrams, not experimental results or device-specific schematics. All 16 homepage images together are approximately 250 KiB, compared with the original multi-megabyte GIFs.

## Hosting

The parent repository’s `.github/workflows/deploy-hugo.yaml` is the primary GitHub Pages workflow. It builds with Hugo and runs the profile checker. The source repository’s reusable build and optional Netlify configuration also use plain Hugo. No deployment is needed for local review.

The source checkout is a Git submodule. Review and commit its changes before updating the parent pointer, when separately authorized to publish. Existing HugoBlox license notices are retained in `LICENSE.md`.
