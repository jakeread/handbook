---
title: Linear Trapezoidal Lookahead Planning
parent: Control 
layout: page
---

Along with [JD](junction deviation), the algorithm described herein (or something awefully similar) is what we would gander ~ 80% of the world's motion controllers deploy. It is simple, effective, and computable with limited resources... finding that sweet spot between complexity and effexity. 

The problem statement: 

- supposing we have a `target trajectory` as a sequence of line segments, each with a target velocity (i.e. a feedrate) 
- we have also a set of constraints:
  - maximum accelerations (optionally described per axis) 
  - maximum velocities (optionally described per axis) 
- we have a goal:
  - without violating our constraints, maximize our time at the target feedrates (i.e. minimize the total time spent running the trajectory...)

What follows is actually a very simple *constrainted optimization* problem, but due to the nature of the inputs and outputs, we can solve it in a highly optimized, time-efficient manner. 

