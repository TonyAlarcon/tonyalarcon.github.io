---
layout: page
title: "DOBB: Collision Avoidance under Uncertainty"
description: Dynamic safety regions for multi-agent collision avoidance with uncertain state estimates and heterogeneous dynamics.
img: assets/img/publication_preview/dobb_ten_agent_scenario.gif
importance: -1
category: work
selected: true
github: https://github.com/TonyAlarcon/DOBB-Collision-Avoidance
---

**Dynamic Oriented Bounding Boxes (DOBB)** provide a shared geometric representation for collision avoidance when agents have uncertain state estimates and different physical capabilities. This work is by **Pedro Antonio Alarcon Granadeno and Jane Cleland-Huang** at the University of Notre Dame.

An agent's estimated position can differ from its true position. Two agents may therefore appear safely separated while their physical paths overlap. DOBB represents each agent with nested regions that account for its estimated state, uncertainty, physical footprint, and actuation limits.

The method uses these regions to describe separation and encroachment between agents. A multi-agent reinforcement learning policy learns from those relationships, with a reward that penalizes violations of progressively more critical safety regions.

{% include figure.liquid loading="eager" path="assets/img/publication_preview/dobb_collision_avoidance.gif" title="State-estimation uncertainty and DOBB geometry" alt="Animation illustrating how differences between estimated and true agent states affect DOBB geometry and separation" class="img-fluid rounded z-depth-1" %}

The animation illustrates how uncertainty in an agent's estimated state affects its bounding regions and separation from other agents.

The repository includes the simulation environment, training configurations, evaluation protocols, datasets, and pretrained policies used in the paper.

**Paper:** “DOBB: Dynamic Oriented Bounding Boxes for Multi-Agent Collision Avoidance under State Uncertainty and Heterogeneous Dynamics.” Manuscript under review.

**Project links**

- Code and pretrained policies: [DOBB-Collision-Avoidance](https://github.com/TonyAlarcon/DOBB-Collision-Avoidance)
- Publication details: [DOBB]({{ '/publications/#granadeno2026dobb' | relative_url }})
