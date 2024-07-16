---
title: Precision vs Accuracy  
parent: Mechanical
grand_parent: Theory 
layout: page
nav_order: 6
--- 

## Precision vs Accuracy 

These are not the same thing: precision is our ability to reliably target the same space in a repeatable manner (aka: repeatability), and accuracy is our ability to hit an *exactly addressed location in real space.*

{% include caption.html img="images/precision-accuracy.png" caption='From <a href="https://en.wikipedia.org/wiki/Accuracy_and_precision" target="new">via WikiPedia</a>' %}

I.E. if, when I tell my X Axis to position at 100mm, it winds up at 101mm *every time* it is extremely precise, but not very accurate. If instead it targets somewhere between 100.1mm and 99.9mm every time, it is less precise but more accurate. 

We can also discuss "resolution" - this refers to the size of the individually addressable locations in a machine. For example, if my same machine can only target either 100mm or 101mm, it has a 1mm resolution: not very great, even if we can hit that 100mm repeatably. We often see machine performance specified in terms of resolution because it's very achievable with digital controls. Converting resolution into real accuracy and repeatability is another thing, and typically requires good mechanical design. 