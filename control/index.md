---
title: Control
has_children: true 
layout: page
nav_exclude: true 
---

## Controller Patterns 

- junction deviation 
- "dynamic prog" lookahead 
- closed-loop (FOC) control of a stepper motor
- chopper drivers, "stall guard" 
	- i.e. just how a normal stepper driver works 
- stepper step scheduling 

## Sensing ... 

- linearization, calibration
- loadcells,
- adcs ... noise, timing (?) 

## Systems Assembly Patterns / Networking 

- bus topologies
	- rings, single-medium, duplexes 
- un-confuse RS485 from UART 
- link layers 
	- COBS, packet delineation 
	- CRC and why we need it 
- transmission protocols:
	- flow control, buffering, 
	- retrying, 
