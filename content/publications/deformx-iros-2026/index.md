---
title: "DeformX: A Versatile Co-Simulation Framework for Deformable Linear Objects"
authors:
  - Yi Yang
  - Xiang Fei
  - Lehong Wang
  - Chenhao Li
  - Zilin Dai
  - me
  - Lu Li
  - Howie Choset
date: "2026-06-29T00:00:00Z"
publishDate: "2026-06-29T00:00:00Z"
publication_types: ["paper-conference"]
publication: "2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
publication_short: "IROS 2026"
summary: "A co-simulation framework that combines Cosserat rod physics with NVIDIA Isaac Sim for visually realistic and physically faithful deformable linear object simulation."
abstract: "Deformable linear objects (DLOs) such as wires, cables, and ropes are common in robotic manipulation tasks, yet simulating them with both visual realism and physical accuracy remains challenging. Existing visual simulation methods typically rely on procedural geometric primitives that lack physically grounded deformation behavior, while physics-based approaches with robot learning support often approximate DLOs as rigid-link chains or generic soft bodies, failing to accurately capture the bending, twisting, and shear mechanics of slender elastic structures. In this work, we introduce DeformX, a co-simulation framework that integrates a dedicated Cosserat rod physics engine with NVIDIA Isaac Sim, enabling DLO simulations that are both physically faithful and visually realistic. Our Cosserat rod engine simulates the dynamics and self-collisions of DLOs, and contact interactions with arbitrary free-form meshes. To achieve high-fidelity visualization, we employ mesh skinning to map discrete rod deformations onto imported CAD models. To the best of our knowledge, DeformX is the one of the first frameworks for DLO simulation that unifies realistic visualization, principled physics, and compatibility with robot learning pipelines. We demonstrate its versatility across synthetic data generation and policy learning for DLO manipulation, and validate visual and physical fidelity through comparisons against real-world experiments. Notably, fine-tuning Segment Anything Model 3 (SAM3) on DeformX-generated data yields a 10.2% mAP@75 improvement in real-image wire segmentation, and a rope-swinging policy trained entirely in DeformX achieves a mean target-hitting error of 6.6 cm on a UR5e manipulator in real-world trials, highlighting its strong sim-to-real transfer capability."
tags:
  - deformable linear objects
  - Cosserat rods
  - robot simulation
  - Isaac Sim
  - manipulation
  - sim-to-real
  - synthetic data
featured: true
links:
  - type: site
    url: "https://deformx.github.io/"
  - type: source
    url: "https://arxiv.org/html/2606.22116v1"
  - type: site
    url: "https://2026.ieee-iros.org/"
projects:
  - deformx
slides: ""
---

Accepted to IROS 2026.

```bibtex
@inproceedings{yang2026deformx,
  title        = {DeformX: A Versatile Co-Simulation Framework for
                  Deformable Linear Objects},
  author       = {Yang, Yi and Fei, Xiang and Wang, Lehong and Li, Chenhao
                  and Dai, Zilin and Kou, Henry and Li, Lu and Choset, Howie},
  booktitle    = {2026 IEEE/RSJ International Conference on Intelligent
                  Robots and Systems (IROS)},
  year         = {2026},
  organization = {IEEE}
}
```
