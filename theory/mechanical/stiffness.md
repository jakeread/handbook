---
title: Stiffness 
parent: Mechanical
grand_parent: Theory 
layout: page
nav_order: 1
math: katex 
--- 

## Stiffness 

Understanding the subtlety of stiffness is probably the most important element you can take away from this section of machine class. The idea of 'stiffness' will turn up throughout, so I need to start here. 

Stiffness is simply *the way an object resists deformation in response to an applied force* so, how much something bends when we push on it. Machine design asks us to consider even very small deflections - hundredths of mm or less. This is why the use of castings are so common in heavy machinery: there is no better solution for stiffness than to add steel / iron to a structure: the balance is in reducing weight, so that our machines do not require infinite energy to move about. 

For materials, stiffness is the slope of a stress-strain plot:

![stress-strain](images/stress-strain.gif)

But stiffness is not just a property of materials, it is a property of complete structure, or can be a property of some component, for example, linear ways are rated in `N / um` - the force required to deflect them by one thousandths of a millimeter. 

![rail](images/rail-section.png)
![um-per-n](images/um-per-n.png) 

We can see that these are pretty impressive, the largest of which (with the highest preload) loading up to 800N (or 180 pounds of force) before moving even one micron. 

Belts also have a stiffness rating, [this paper](https://www.mdpi.com/2218-6581/7/4/75/htm) discusses in fine detail the stiffness of GT2 belts, and we can get an idea of scaling here:

![bsp](images/belt-stiffness.png)

There's also a [gates document on belt tensile properties](ref/belt-tensile-properties.pdf)

Just picking the 400mm length of GT2 belt above, we see it deflects about 10mm under 500N of load (just before it breaks), so we have ~ **0.05 N / um** of stiffness. On the other hand, even our smallest COTS linear guide above has **87 N / um** of stiffness, for about three orders of magnitude difference. These are the kinds of 'ball-parking' exercises you can do during early design phases to pick winners.

### Motors, Controllers and Stiffness 

This extends to motors, actuators, and their controllers. Stepper motors have torque curves, which are related to but not directly equal to their stiffness[^stepper-stiffness]. For a quick intuitive sense of the statement: a stepper motor uses a magnetic field to hold a rotor at a particular angle. That magnetic field is like a spring; it does not *lock* the rotor into it's angle, it pulls it there with a limited force. 

Closed-loop controllers also have stiffnesses; it's no mistake that the generic formulation of a controller $$(u = -Kx)$$[^whereis-classic] uses $$K$$ (the same as we use to denote spring constants) to name its matrix of gains (where $$u$$ is the systems' outputs and $$x$$ is it's current states). Our controller denotes how much force (stress) our servo exerts for a given displacement (strain). 

### Stiffness and Chatter[^chatter]

We want stiffness in our machines first because it means our positioning stages will be more accurate: if we command a motor to some position, but our machine is under load (gravity, some cutting force, etc), we will miss our target position by whatever the machine's deflection at that force is. For example given the belt example above, with only 50N of cutting force our machine will miss by one whole millimeter (this is also why machine designers get excited about i.e. linear encoders mounted directly on-axis). 

This becomes more complex, though, when we have resonance and dynamics to think about. For example in a milling machine we see large cutting forces, but those forces are exerted at a (normally quite high) frequency (proportional to our spindle speed and flute count). If cutting forces excite our machine structure near it's natural frequency (or one of its harmonics), we are more likely to see chatter - which we can see in slo-mo in this excellent video from `Breaking Taps` 

<iframe width="560" height="315" src="https://www.youtube.com/embed/aog0syGaZzQ?start=148" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For example, if we have a spindle rotating at 6000 RPM, we have a rotational frequency of 100Hz (RPM / 60 = Hz). With four flutes, we are making a chip (and loading the machine's structure) at 400Hz (or once every 2.5 milliseconds). We can hear these frequencies when we machine, and experienced machinists rely on that input extensively. 

Machines all have resonant frequencies, which are related to their stiffness (proportional) and mass (inversely):

$$
\omega = \sqrt{\frac{k}{m}}
$$

If we increase stiffness, we raise the resonant frequency - and if we add mass, we lower it (mass serving as a kind of damper). This might mean that, for our stiffness goal, we need to add lots of mass in order to lower the resonant frequency below the range of our expected excitation forces - or we might need to increase our stiffness in order to move the resonant freqency well above that range. 

[^chatter]: Not sure if this is appropriate here or an aside... and probably my reasoning is worth checking. It may be a good idea to work this up as an example as well? 
[^stepper-stiffness]: This would be another good nugget to expand on. Get the dyno out... 
[^whereis-classic]: This should link to classical control, where we can discuss in more depth the relationship between a controller's $$K$$, its stiffness, and how i.e. bandwidth relates to how much $$K$$ we can dial in, etc etc... 