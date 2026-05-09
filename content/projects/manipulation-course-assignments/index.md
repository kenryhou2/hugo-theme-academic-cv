---
title: Manipulation Course Assignments
date: 2026-05-06
summary: Python manipulation coursework in MEngines covering rigid-body transforms, forward kinematics, screw coordinates, contact mechanics, RRT-Connect planning, antipodal grasp search, and force-closure analysis.
links:
  - type: site
    url: https://github.com/kenryhou2/mengine/tree/main/assignments
tags:
  - robot manipulation
  - manipulation
  - MEngines
  - PyBullet
  - Panda robot
  - forward kinematics
  - screw theory
  - contact mechanics
  - grasp planning
  - force closure
  - RRT-Connect
  - motion planning
  - Python
---

![Bowl texture asset used by the assignment 4 antipodal grasping exercise](bowl-texture.png)

I used these assignments to build the manipulation stack from the bottom up. The repo starts with pose representations and forward kinematics, then works upward into collision-aware planning, contact reasoning, grasp synthesis, and force-closure checks. Everything is implemented in Python on top of MEngines and PyBullet-style simulation utilities.

Assignment 1 is the geometry layer. I convert between Euler angles, rotation matrices, axis-angle, and quaternions; apply ordered rigid transforms with homogeneous matrices; sample joint configurations; implement forward kinematics for a three-link manipulator; plot workspace samples; and check a spline-driven trajectory against a box-shaped collision region.

Assignment 2 revisits the same kinematics through screw theory. The code includes quaternion rotation utilities, Hamilton products, Rodrigues rotation, matrix-to-quaternion conversion, and a product-of-exponentials forward-kinematics implementation that compares sampled end-effector poses against the simulator's built-in kinematics.

Assignment 3 moves into contact reasoning and collision-aware manipulation. One script applies Reuleaux's method to identify contact placements that constrain a box under planar rotations. Another implements bidirectional RRT-Connect in Panda joint space, checks collisions against a table and wall, solves IK for cube poses, and uses the resulting paths to pick and place multiple cubes.

Assignment 4 connects configuration space to grasping. I compute polygonal C-space obstacles for a triangular footprint with Minkowski sums, derive contact screws from simulated contact locations and normals, sample Panda end-effector poses around YCB-style objects, capture two-view point clouds, estimate normals with Open3D, score candidate grasps with an antipodal-region test, and attempt repeated bowl grasps.

Assignment 5 evaluates grasp stability directly in wrench space. I construct 3D contact screws, linearized friction cones, and a linear-programming force-closure test; then I sample contact points on spheres or cubes, search for force-closure grasps with and without friction, and visualize contact-normal forces in simulation.

**Sources I leaned on:** Murray, Li, and Sastry's *A Mathematical Introduction to Robotic Manipulation* for twists, screws, and product of exponentials; Mason's mechanics of robotic manipulation notes for contact reasoning; LaValle and Kuffner for RRT-Connect; and Ferrari and Canny's grasp-quality work for wrench-space force closure.

**Technical stack:** Python, NumPy, SciPy, Matplotlib, MEngines, PyBullet, Open3D, convex hulls, linear programming, Panda manipulator simulation, YCB-style object meshes.

**Keywords:** robot manipulation, rigid-body transforms, homogeneous transforms, Euler angles, axis-angle, quaternions, Rodrigues formula, forward kinematics, product of exponentials, screw coordinates, workspace sampling, collision checking, Reuleaux method, contact normals, contact screws, wrench space, Minkowski sums, configuration-space obstacles, RRT-Connect, inverse kinematics, Panda robot, pick and place, point clouds, Open3D normal estimation, antipodal grasp scoring, friction cones, force closure, MEngines, PyBullet, Python.
