---
layout: page
title: SADE Zone (NASA ULI)
description: Safety-aware drone authorization and reputation for controlled airspace.
img: assets/img/publication_preview/SADE-architecture.png
importance: 1
category: work
github: https://github.com/SADE-ZONE/workflows
---

This project is part of a multi-university **NASA University Leadership Initiative (ULI)** effort led at Notre Dame by **Prof. Jane Cleland-Huang**.
The initiative was selected as one of the major 2023 awards supporting university teams tackling key challenges in the future of flight, with multi-year, multi-million-dollar funding.

The rapid growth of small UAS (sUAS) in the National Airspace System has increased incidents tied to software/hardware faults, operator error, and environmental conditions.
Current authorization workflows are often slow and manual, creating delays for pilots and operators.

**SADE (Safety-Aware Drone Ecosystem)** addresses this with transparent, automated authorization decisions for reputation-holding sUAS.
Each aircraft submits an automated permission request, and the system grants, denies, or conditionally approves access based on evidence from a privacy-preserving Drone Reputation Profile (DRP).
The architecture is designed to be tamper-resistant, resilient, and auditable, with reputation evolving over time from operational flight data.

At zone entry, SADE’s authorization manager evaluates mission readiness from the DRP and mission context, then returns a rationale-backed decision.
The ecosystem also incorporates reliable, specialized communication mechanisms between sUAS and ground infrastructure.

**Project links**

- Notre Dame project page: [SADE ULI Drone Reputations](https://sites.nd.edu/uli-drone-reputations/)
- Notre Dame news: [Making the skies safer with smarter drones](https://engineering.nd.edu/news/making-the-skies-safer-with-smarter-drones/)
- Public workflows repository: [SADE-ZONE/workflows](https://github.com/SADE-ZONE/workflows)
