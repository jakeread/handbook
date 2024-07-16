---
title: Backlash, Preload 
parent: Mechanical
grand_parent: Theory 
layout: page 
nav_order: 3 
---

## Backlash 

"Backlash" is best described as the 'dead zone' between positive and negative control inputs. From [wiki](https://en.wikipedia.org/wiki/Backlash_(engineering)):

![backlash](images/backlash.png)

Another way to think of backlash is as having **zero stiffness around the origin.** 

This 'dead zone' can exist anywhere between our *actuator* and our *desired motion* so that a plot of our mechanism's output looks like this:

![bl](images/backlash-chart.png)

Backlash is an obvious result of poorly manufactured gear teeth, as drawn in the first figure here. However, it exists in almost all transmissions: leadscrews, belt drives, rack-and-pinions, etc. 

Backlash also exists in motion guides (linear and rotary bearings) and can (and often does) exist in structures. Basically, backlash is 'looseness' (aka "play") and wherever we can, we want our machines to feel 'tight' - if motors are powered on and holding torque, we should not be able to 'wiggle' anything about before meeting the motor's output, or finding stiffness (resistance to wiggling) in the machine. Any 'jiggle' or 'knocking' we can find when we try to move a machine's output around is backlash, and it's very hard to control for (since it's non-linear) - the best place to eliminate it is with good mechanical design. 

## Preload 

If we leave something too loose we find backlash, but if we over-tighten we find friction. This is why most gearboxes have some amount of backlash: ensuring positive clearance minimizes friction. There's a kind of zero-thickness 'zero clearance' zone between backlash and preload: 

![preload](images/preload-chart.png)

Consider these bearings:

{% include caption.html img="images/bearing-clearances.png" caption='From <a href="https://www.nationalprecision.com/info-library/technical-data/bearing-preload/" target="new">National Precision</a>' %}

Preloading is the art of building some *positive clearance* (as in, some ensured contact) between machine elements. In a way, we can even think of tightening bolts in a structure as preload: we are tensioning some spring force into a fastener to ensure that elements of our structure are constantly loaded into one another. Recall that our bolts are not innocuous hunks of threaded metal: their lengths make up a *very stiff* spring: when we torque a bolt to spec, we are really tensioning the bolt-as-a-spring to some preload spec. 

The same kind of concept can apply to motion elements, i.e. how these bearings are tensioned into one another so as to ensure that the balls and races are in constant, deterministic contact: 

{% include caption.html img="images/bearing-preload.jpg" caption='From <a href="https://www.bearingtips.com/preload-necessary-bearing-applications/" target="new">Bearing Tips</a>' %}

The same principle can apply in linear guides, lead screws, etc.

## Practical Preloading 

> TODO

- preloading an axis with flexural design 
- preloading with offset-cam type rollers 
- reminder that preloaded system *is as stiff as rest of the system **until** the preload force is overcome, then is as stiff as the preloading spring* 