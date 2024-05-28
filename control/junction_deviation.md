---
title: Junction Deviation 
parent: Control 
layout: page
---

Junction Deviation is the name given to an algorithm that is commonly used[^controllers_that_use] in motion controllers to find cornering velocities between line segments. 

- why we want it (no full stops on almost-not-a-corners) 
- the geo it's based on, 
- how to compute it (quickly) 
- given anisotropic acceleration, which should we pick for the corner ? 
- limits to JD, viability of actually travelling along arcs ... 

--- 

[^controllers_that_use]: Junction Deviation is deployed in GRBL and its decendents: Marlin, TinyG, and Smoothieware (that I know of). I'd like to classify these as the `8-bit Generation` of motion control: linear segments, JD, (mostly) infinite jerk / limited acceleration. Controllers whose designs were perhaps dominated by a lack of computing resource. 