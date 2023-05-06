---
title: Home
layout: home
---

# Machinery's Design Handbook 

#### Possible Titles 

```
- Machine Design for Makers 
- Design Patterns from the Field 
- Machine Design Handbook 
- Machinery Invention Handbook
- Machinery Building Handbook
```

#### Rote TODOs

- pull (and improve?) content from [mechanisms class](https://fab.cba.mit.edu/classes/865.21/topics/mechanical_design/index.html) and [power electronics class](https://fab.cba.mit.edu/classes/865.21/topics/power_electronics/index.html) 

## Mechanical Patterns 

- v-rollers, gothic-arch rollers, linear carriages, linear-shaft-ball-bearings
	- typical parts from each implementations ("the cannon, the commons")
- hertz contact (and spreadsheet for)
	- give radii of contacts, hardnesses (and ref hardnesses to table...),
- kinematics (!) 
	- sliding doors jambing 
	- the 3:2 rule 
- kinematic mounts 
- preload
	- preloading axis w/ flexures 
	- preload w/ offset cam-type thing 
- structural loops 

## Transmission / Mechanism Patterns 

- belt stiffness 
	- (ibid, calculator should do... given length, what's spring-rate? N/mm deflection, )
	- calculator should have "typical systems" i.e. GT2 stats
- belt tracking and tensioning
- transmissions, i.e. steps-per-mm-calculators
	- belt-and-pinion types
	- regular ol' pulleys
	- ball / leadscrews
	- ... etc 
- cams, cam-rollers,
- over-center mechanisms 

## Controller Patterns 

- junction deviation 
- "dynamic prog" lookahead 
- closed-loop (FOC) control of a stepper motor
- chopper drivers, "stall guard" 
- (a spreadsheet) accelerations, torques, and masses 

## Systems Patterns 

- bus topologies
	- rings, single-medium, duplexes 
- demux RS485 from UART 
- COBS, packet delineation 
- flow-control, 

### Sims and Calculators 

- stepper motor simulator 
- transmission ratios, etc 
- mass vs. accelerations... 
- belts-as-springs ? deflection / mm 
- impedance matching 
	- rotor inertia to linear inertia (i.e. ballscrew and slide) 
	- if you match inertias, you maximize power transfer 
	- for max accel, minimize total mass *and* match inertias 
- chip load calculators 