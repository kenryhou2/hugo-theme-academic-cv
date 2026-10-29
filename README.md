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

The existing publication frontmatter and `static/assets/files/Henry_Kou_CV_10292026.pdf` are the sources for coauthor lists, venues, contact details, and lab association. No new external biographical or publication research was performed. The named reference site was inspected only for visual structure during the original redesign.

The résumé links use the October 29, 2026 CV configured in `data/profile.yaml`; the separately retained `static/uploads/resume.pdf` is a starter demo and is **not linked**. To replace the CV, add the new PDF under `static/` and update that configuration. The parent repository's checker follows the rendered links rather than requiring a particular filename.

Most project page dates are May 2026 publication/update metadata, not verified project dates. They are displayed as **Updated May 2026**. The October CV supplies the related deposition-scheduling paper's credit list for Aerospace Inkjetting and the satellite-payload-insertion paper's credit list for Medusa Space Arms, retaining their author order. These are related-paper credits, not claims about individual project roles. The owner directly supplied the Pipe Inspection collaborators: Tina Tian, Avaneesh Murugesan, Lu Li, and Howie Choset. The CV also supplies the full names of the four TI coauthors; existing DeformX and D-NLC author lists already agree with it. Other project teams remain unspecified. No preprint was relabeled as an accepted publication. The owner supplied the current biography directly: staff researcher at CMU’s Robotics Institute and Biorobotics Lab, previous MS in Robotics under Dr. Howie Choset, and prior Analog Applications Engineer at Texas Instruments.

The Aerospace Inkjetting title replaces Boeing Material Deposition throughout the content labels. Its existing `boeing-material-deposition` directory, homepage anchor, and media URLs remain stable so previously shared links continue to work.

Photos and simulation previews derive from existing repository media. Large GIFs use static frames to keep the page lightweight and motion-free; existing external video links are retained. A*, symbolic planning, manipulation, queue, and power-electronics SVGs are illustrative diagrams, not experimental results or device-specific schematics. All 16 homepage images together are approximately 250 KiB, compared with the original multi-megabyte GIFs.

## Hosting

The parent repository’s `.github/workflows/deploy-hugo.yaml` is the primary GitHub Pages workflow. It builds with Hugo and runs the profile checker. The source repository’s reusable build and optional Netlify configuration also use plain Hugo. No deployment is needed for local review.

The source checkout is a Git submodule. Review and commit its changes before updating the parent pointer, when separately authorized to publish. Existing HugoBlox license notices are retained in `LICENSE.md`.
