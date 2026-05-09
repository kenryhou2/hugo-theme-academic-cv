---
title: Boeing Material Deposition
date: 2026-05-07
summary: In-progress process-control research for ultra-large-format additive manufacturing that adapts deposition timing to uncompensated vibrations.
links: []
tags:
  - additive manufacturing
  - material deposition
  - process control
  - vibration compensation
  - sensing
  - robotics
  - Boeing
---

I am working on a process-control idea for ultra-large-format additive manufacturing, where the robot is big enough that structural vibration becomes part of the manufacturing process. If a long-reach system is depositing material for aircraft, bridge, or infrastructure repair, the tool may be commanded to move smoothly while the actual nozzle is still oscillating.

The key shift is to stop treating motion control as the only place to fix the error. A low-stiffness plant may not have enough bandwidth or model certainty to fully cancel the vibration, but the deposition process can still react to the measured tool motion. My approach changes the deposition timing and rate based on real-time trajectory deviation, so material lands more evenly even when the tool path is imperfect.

I validate the idea on a custom testbench that emulates the deposition dynamics. The sensor measures high-bandwidth tool motion, the controller estimates deviation from the desired path, and the process layer schedules material output around the residual vibration. The practical lesson is that process quality can sometimes be improved by controlling when material is added, not only by trying to make the structure perfectly still.

**Sources I leaned on:** Altintas' work on manufacturing automation and process control; input-shaping literature from Singer and Seering for vibration-aware motion; and additive-manufacturing control papers on bead geometry, melt-pool monitoring, and closed-loop deposition rate control.

**Status:** In progress.

**Keywords:** ultra large format additive manufacturing, ULF-AM, process control, deposition scheduling, vibration compensation, high-bandwidth sensing, trajectory deviation estimation, material deposition, manufacturing robotics.
