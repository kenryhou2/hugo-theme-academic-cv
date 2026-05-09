---
title: ARPA-E Pipe Inspection
date: 2026-05-07
summary: Confined-space pipe inspection robotics work with crawler hardware, mapping, and misalignment visualization.
links:
  - type: site
    url: https://www.ri.cmu.edu/project/confined-space-robotics-edge-sensing-and-embedded-sensors/
tags:
  - pipe inspection
  - confined-space robotics
  - mapping
  - sensing
  - crawler robot
  - robotics
  - ARPA-E
---

I worked on this as a confined-space robotics problem: how do you make an inspection robot useful when the environment is narrow, dark, repetitive, and hard to instrument? Pipe inspection is not just a mobility problem. The robot also has to keep enough sensing coverage and map consistency for an operator to understand where defects or misalignments are located.

My work connected crawler hardware, embedded sensing, and mapping interfaces. The mapping GUI below shows the kind of alignment problem that comes up when local sensor observations have to be stitched into a coherent pipe-scale view. In a pipe, small pose errors are easy to hide visually but can become large localization errors along the run, so the inspection interface needs to expose uncertainty and misalignment clearly rather than only showing a polished map.

![ARPA-E mapping misalignment GUI](mapping_misalignment_GUI.gif)

![Henry with pipe crawler](henry_pipe_crawler.png)

**Sources I leaned on:** Thrun, Burgard, and Fox's *Probabilistic Robotics* for the localization and mapping mindset; Grisetti, Kummerle, Stachniss, and Burgard's graph-based SLAM tutorial for pose-graph thinking; and pipe/cave robot literature from CMU's confined-space robotics work for practical constraints on mobility, sensing, and operator feedback.

**Keywords:** ARPA-E, pipe inspection, confined-space robotics, crawler robot, mapping, sensing, embedded systems, inspection robotics.
