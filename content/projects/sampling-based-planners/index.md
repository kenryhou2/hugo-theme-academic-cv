---
title: Sampling Based Planners
date: 2026-05-06
summary: C++ sampling-based motion planners for a high-DOF planar robot arm, comparing RRT, RRT-Connect, RRT*, and PRM on collision-free joint-space planning tasks.
links:
  - type: site
    url: https://github.com/kenryhou2/16782_HW2
  - type: pdf
    url: https://github.com/kenryhou2/16782_HW2/blob/main/16782_fall25_HW2.pdf
tags:
  - sampling-based planning
  - motion planning
  - RRT
  - RRT-Connect
  - RRT*
  - PRM
  - high-DOF arm
  - C++
  - CMake
  - robotics
---

![RRT* planner moving a planar robot arm through an obstacle map](demo.gif)

I used this project to compare how different sampling-based planners behave on the same high-DOF arm problem. The planner executable receives an occupancy-grid map, the arm DOF count, comma-separated start and goal joint angles, a planner ID, and an output path, then returns a collision-free sequence of joint configurations for a planar arm with fixed 10-cell links.

The important idea is that planning happens in configuration space even though collision is checked in workspace. For each candidate joint vector, I rasterize every link with Bresenham line traversal, reject poses that hit nonzero map cells, sample joint angles in `[0, 2*pi)`, and score path quality as cumulative wrap-around L1 joint motion.

The planner modes show the tradeoff nicely. Single-tree RRT is simple and usually finds something. RRT-Connect grows start and goal trees toward shared samples and is much faster for single-query planning. RRT* adds local rewiring, which can lower cost but spends more time improving the tree. PRM pays an upfront roadmap cost, then uses Dijkstra search over collision-checked graph edges.

In my report, I compare fixed start/goal pairs over 3-, 4-, and 5-DOF settings on `map2.txt`. RRT-Connect was the fastest and most reliable single-query planner overall, RRT* reduced path cost through rewiring at higher runtime, and PRM produced strong global path quality but paid a larger roadmap construction cost.

**Sources I leaned on:** Kavraki et al. on probabilistic roadmaps; LaValle's original RRT work; Kuffner and LaValle's RRT-Connect paper; and Karaman and Frazzoli's RRT* optimality result.

**Technical stack:** C++, CMake, Python, Matplotlib, Pillow, occupancy-grid maps, CSV evaluation outputs.

**Keywords:** sampling-based motion planning, high-DOF arm planning, planar robot arm, configuration space, collision checking, Bresenham rasterization, occupancy grid, RRT, RRT-Connect, RRT*, PRM, roadmap planning, Dijkstra search, goal bias, nearest-neighbor search, rewiring, path quality, wrap-around joint cost, C++, CMake, Python visualization.
