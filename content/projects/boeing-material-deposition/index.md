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

Ultra Large Format Additive Manufacturing (ULF-AM) systems, which deposit material for large-scale maintenance and construction such as aircraft and bridges, are highly susceptible to severe vibrations due to their massive size and low structural stiffness. As the reach of these systems increases, they experience disproportionately greater vibration sensitivity while also needing to execute high-precision manufacturing tasks, such as material deposition.

Consequently, conventional motion control strategies are insufficient to maintain deposition quality due to modeling uncertainty and plant bandwidth constraints. To address this limitation, we introduce a novel process-control approach that shifts the focus from motion correction to deposition scheduling. Rather than relying solely on motion controllers, our method dynamically adapts the material deposition frequency to account for uncompensated vibrations.

By outfitting the deposition tool with high-resolution, high-bandwidth sensing, the system computes real-time trajectory deviations and adjusts the timing and rate of material deposition accordingly. We validate this approach using a custom-developed testbench designed to emulate ULF-AM processes. Extensive hardware testing demonstrates that our process-control methodology significantly improves manufacturing quality, yielding evenly distributed material deposition and eliminating the uneven banding typically caused by uncompensated system vibrations.

**Status:** In progress.

**Keywords:** ultra large format additive manufacturing, ULF-AM, process control, deposition scheduling, vibration compensation, high-bandwidth sensing, trajectory deviation estimation, material deposition, manufacturing robotics.
