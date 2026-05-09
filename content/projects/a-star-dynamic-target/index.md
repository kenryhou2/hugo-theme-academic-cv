---
title: A* Pursuit of Dynamic Target
date: 2026-05-06
summary: A C++ robotics planner that uses weighted A* in a time-expanded grid to intercept a moving target while replanning from the robot's current state.
links:
  - type: site
    url: https://github.com/kenryhou2/16782_HW1
tags:
  - A*
  - weighted A*
  - dynamic target
  - time-expanded search
  - path planning
  - C++
  - Dijkstra heuristic
  - robotics
---

This project implements a dynamic target pursuit planner for grid maps from CMU 16-782 coursework. The robot receives a known target trajectory and, at every planning tick, searches in `(x, y, t)` space for an interception state where the robot and target occupy the same cell at the same time.

The core planner is a C++ weighted A* search over 8-connected grid motion plus a wait action. Edge costs come from the destination cell cost, cells at or above the collision threshold are rejected, and the planner returns only the first step of the best found path so it can replan in a receding-horizon loop as the target advances.

The implementation includes several repo-specific accelerations and heuristics: runtime-tunable `eps`, `time_budget_ms`, and `heu_band` parameters; a cached multi-source Dijkstra table over feasible near-future target cells; a static meet-point heuristic chosen by travel cost plus wait time; and deterministic priority-queue tie breaking on `f`, `h`, `g`, and packed state keys. The repository also includes map files, recorded robot trajectories such as `rtraj_map*.txt`, and a Matplotlib `visualizer.py` script that animates the robot and target trajectories over the cost map.

**Keywords:** weighted A*, time-expanded A*, dynamic target pursuit, receding-horizon replanning, 8-connected grid search, wait action, collision threshold, cost map, multi-source Dijkstra, static meet point, trajectory visualization, C++, CMake, Python, Matplotlib.
