---
title: motors
parent: Theory
layout: page
---

- [2024 motor notes](https://fab.cba.mit.edu/classes/865.24/topics/motors_and_actuators/index.html) s/o John Zhang 
- [2021 notes](https://fab.cba.mit.edu/classes/865.21/topics/motion/index.html)
- [2018 notes](https://fab.cba.mit.edu/classes/865.18/motion/index.html) 

- scolton.blogspot.com 
- … other miters blogs 
- [“electric machines”](https://ocw.mit.edu/courses/6-685-electric-machines-fall-2013/) course - for motor notes, simple models, ground truth 
- John observes that (where n is the gearbox ratio) “load / n^2” - with big gearboxes, we don't actually need to care too much about nonlinear dynamics of i.e. robot arms, since the relative changes to inertia-at-the-load is swamped by the motor's huge reflected inertia... so i.e. old industrial robots "don't do any gain scheduling" for whether/not an arm is extended... they just run PD controllers on position 

## Stepper Motor Selection 

- Lin Engineering white paper from [Ilan’s stepper selection notes](https://fab.cba.mit.edu/classes/865.24/topics/motors_and_actuators/SpecifyingStepperMotors.html)
  - fundamental limits are properties of electrical steel, and how much copper we can fit into a given space, 
  - if we change windings, we can modify the shape of a torque curve... 
  - the [guide, the bible](stepping-motors-a-guide-to-theory-and-practice.pdf)

## Fundamental Magnetics and Limits

- BH curves ? 
- Max Tesla, Saturation, and Magnetic Steels
- "maximized tesla in the air gap" 

... we can change a motor's relative torquey-ness with windings, but what's the limit, why do motors still require gearboxes in most applications? - and if we change a winding, do we change power density, or do we just change the shape of the torque curve ? 

I think this is based on maximized magnetic saturation in magnetic steels - hence the investment in magnetic steels - and the lossiness of magnetic circuits through air, so, BH curves etc - 

another question about efficiency: do we always drive motors at the maximum voltage, up to where we start arcing through air-gaps, etc, or is there some optimal voltage as well ? 