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

This project adapts a real-time whole-body Model Predictive Path Integral (MPPI) controller for the Unitree Go2W wheeled-legged robot. The implementation builds on a legged quadruped MPPI baseline and expands it for hybrid rolling and stepping behaviors in MuJoCo.

The controller adds four wheel-torque channels to the action space, augments the running cost with wheel-velocity regulation, a PD-shaped joint-effort penalty, and an L1 base positional drift penalty, and modifies the Raibert-style foot-placement heuristic to account for wheel speed. The goal is to keep MPPI as one sampling-based control layer across walking, rolling, jumping, and stair-climbing tasks without offline learning or precomputed contact schedules.

Simulation tasks include `walk_straight`, `roll_straight`, `walk_octagon`, `big_box`, and `stairs`, with task definitions covering goal positions, commanded body-frame velocities, gait phases, waiting times, MuJoCo model paths, and controller YAML configs. The repo reports rough-terrain gains over a leg-only baseline: 55.7% lower traversal time and 134.5% higher forward velocity while maintaining smoother wheel-ground contact.

**Technical stack:** Python, MuJoCo 3.1.6, NumPy, SciPy, Matplotlib, `mujoco-python-viewer`, editable `setuptools` package.

**Keywords:** whole-body MPPI, Model Predictive Path Integral control, sampling-based MPC, Unitree Go2W, wheeled-legged robot, hybrid locomotion, wheel-torque control, Raibert heuristic, gait scheduler, MuJoCo simulation, rough terrain, stair climbing, box jump, waypoint following.
