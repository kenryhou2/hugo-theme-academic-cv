---
title: MPPI Wheeled Quadruped
date: 2026-05-06
summary: Whole-body MPPI controller for the Unitree Go2W wheeled quadruped, extending legged locomotion control with wheel-torque actions, wheel-aware costs, and MuJoCo simulation tasks.
links:
  - type: site
    url: https://github.com/kenryhou2/MPPI_quad
tags:
  - MPPI
  - whole-body control
  - wheeled quadruped
  - Unitree Go2W
  - MuJoCo
  - model predictive control
  - sampling-based control
  - hybrid locomotion
  - robotics
---

![Unitree Go2W wheeled quadruped using MPPI on rough terrain](demo.gif)

I built this project around a control question that comes up with wheeled-legged robots: can one sampling-based controller handle both stepping and rolling without switching to a separate planner? I adapted a real-time whole-body Model Predictive Path Integral controller for the Unitree Go2W in MuJoCo, starting from a legged quadruped MPPI baseline and expanding it for hybrid locomotion.

The controller adds four wheel-torque channels to the action space, augments the running cost with wheel-velocity regulation, a PD-shaped joint-effort penalty, and an L1 base positional drift penalty, and modifies the Raibert-style foot-placement heuristic to account for wheel speed. I wanted MPPI to remain the single control layer across walking, rolling, jumping, and stair-climbing tasks, without offline learning or precomputed contact schedules.

Simulation tasks include `walk_straight`, `roll_straight`, `walk_octagon`, `big_box`, and `stairs`, with task definitions covering goal positions, commanded body-frame velocities, gait phases, waiting times, MuJoCo model paths, and controller YAML configs. In the rough-terrain comparison, the wheel-aware controller reduces traversal time by 55.7% and raises forward velocity by 134.5% over the leg-only baseline while maintaining smoother wheel-ground contact.

**Sources I leaned on:** Williams et al. on information-theoretic MPPI; Theodorou, Buchli, and Schaal on path-integral control; Raibert's legged-robot foot-placement heuristics; and recent wheeled-legged locomotion work on hybrid contact and wheel torque control.

**Technical stack:** Python, MuJoCo 3.1.6, NumPy, SciPy, Matplotlib, `mujoco-python-viewer`, editable `setuptools` package.

**Keywords:** whole-body MPPI, Model Predictive Path Integral control, sampling-based MPC, Unitree Go2W, wheeled-legged robot, hybrid locomotion, wheel-torque control, Raibert heuristic, gait scheduler, MuJoCo simulation, rough terrain, stair climbing, box jump, waypoint following.
