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

I built this planner to answer a simple pursuit question: if the target is moving on a cost map and I know its future trajectory, where should the robot move next? Instead of planning only in `(x, y)`, I lift the search into `(x, y, t)` so an interception is defined as both agents occupying the same cell at the same time.

The core method is weighted A* over 8-connected grid motion plus a wait action. The edge cost comes from the destination cell, cells above the collision threshold are treated as blocked, and the planner returns only the first action from the best path. That receding-horizon structure matters because the useful plan changes as the target advances.

The interesting engineering detail is the heuristic. I cache a multi-source Dijkstra table from feasible near-future target cells, then combine that with a static meet-point estimate chosen by travel cost plus wait time. The implementation also exposes `eps`, `time_budget_ms`, and `heu_band` so I can trade optimality against response time, and it uses deterministic priority-queue tie breaking on `f`, `h`, `g`, and packed state keys. The repo includes map files, recorded robot trajectories such as `rtraj_map*.txt`, and a Matplotlib visualizer for replaying the pursuit.

**Sources I leaned on:** Hart, Nilsson, and Raphael's 1968 A* paper for best-first graph search; Pearl's heuristic-search framing; and Koenig and Likhachev's D* Lite work as background for why replanning problems often need incremental or receding-horizon structure.

**Keywords:** weighted A*, time-expanded A*, dynamic target pursuit, receding-horizon replanning, 8-connected grid search, wait action, collision threshold, cost map, multi-source Dijkstra, static meet point, trajectory visualization, C++, CMake, Python, Matplotlib.
