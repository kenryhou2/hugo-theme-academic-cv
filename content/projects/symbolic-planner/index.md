---
title: Symbolic Planner
date: 2026-05-06
summary: A C++ STRIPS-style symbolic planner for grounding action schemas and searching over Blocks World, Blocks Triangle, and robot-fire-extinguisher planning domains.
links:
  - type: site
    url: https://github.com/kenryhou2/16782_HW3
tags:
  - symbolic planning
  - STRIPS
  - task planning
  - Blocks World
  - heuristic search
  - C++
  - CMake
  - robotics
  - AI planning
---

This project implements a symbolic task planner for CMU 16-782 coursework. It parses compact domain files into symbols, grounded initial facts, goal facts, and action schemas with positive and negated preconditions/effects, then searches for a sequence of grounded actions that transforms the initial state into one satisfying the goals.

The C++ planner grounds action schemas by enumerating ordered symbol tuples of the required arity, substitutes them into each action's preconditions and effects, filters actions whose grounded preconditions are satisfied in the current state, and applies add/delete effects to generate successor states. Search uses an OPEN priority queue and CLOSED state set, with parent pointers for plan reconstruction once all goal facts are reached.

The repository includes several planning environments: standard Blocks World problems using `MoveToTable` and `Move`; a Blocks Triangle variant with `Block`, `Triangle`, `NotTable`, `Clear`, and `On` predicates; and a FireExtinguisher domain where a robot and quadrotor coordinate movement, landing, charging, water refill, and repeated pour actions to reach `ExtThree(F)`.

The implementation exposes heuristic modes for Dijkstra-style search (`h = 0`), missing-goal-count guidance, delete-effect penalties, and a combined heuristic. It is built as a CMake C++14 executable named `planner`, with environment files loaded from `code/envs`.

No suitable local or source-repo demo GIF/video asset is currently available for this project page, so the previous demo placeholder instruction has been removed.

**Keywords:** symbolic planning, STRIPS-style planning, grounded actions, action schemas, preconditions, add/delete effects, Blocks World, Blocks Triangle, FireExtinguisher domain, heuristic search, Dijkstra search, priority queue, state-space search, plan reconstruction, C++14, CMake.
