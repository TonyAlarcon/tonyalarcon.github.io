---
layout: page
title: Coverage Path Planning for Holonomic UAVs
description: Gap-severity guided decomposition for complete, efficient, and robust coverage.
img: assets/img/publication_preview/cpp-decomp-thumbnail.gif
importance: 0
category: work
selected: true
github: https://github.com/TonyAlarcon/Coverage-Path-Planning-PUGS
---

This project develops a practical coverage path planning pipeline for holonomic UAVs in complex 2D environments.
The core idea is to split the workspace using a **uniaxial-feasible, gap-severity guided decomposition** so that each segment can be covered with smooth, executable motion while reducing unnecessary travel.

In plain terms: instead of forcing one brittle global path, the planner reasons about where coverage is hard, decomposes intelligently, then builds routes that are easier to execute and more reliable for real deployments.

The method is designed for autonomy stacks where both coverage quality and mission robustness matter, including inspection, mapping, and persistent monitoring missions.

**Project links**

- Paper (arXiv): [Coverage Path Planning for Holonomic UAVs via Uniaxial-Feasible, Gap-Severity Guided Decomposition](https://doi.org/10.48550/arXiv.2505.08060)
- Code: [Coverage-Path-Planning-PUGS](https://github.com/TonyAlarcon/Coverage-Path-Planning-PUGS)
