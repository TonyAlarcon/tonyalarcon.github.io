---
layout: page
permalink: /publications/
title: publications
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

These publications can also be found on my [Google Scholar](https://scholar.google.com/citations?user=LBmWfggAAAAJ&hl=en).

{% include bib_search.liquid %}

<div class="publications">
  <h2 class="bibliography">2025</h2>
  {% bibliography --query @*[list_order=y2025_01] --group_by none %}
  {% bibliography --query @*[list_order=y2025_02] --group_by none %}
  {% bibliography --query @*[list_order=y2025_03] --group_by none %}
  {% bibliography --query @*[list_order=y2025_07] --group_by none %}
  {% bibliography --query @*[list_order=y2025_08] --group_by none %}
  {% bibliography --query @*[list_order=y2025_04] --group_by none %}
  {% bibliography --query @*[list_order=y2025_05] --group_by none %}
  {% bibliography --query @*[list_order=y2025_06] --group_by none %}

  <h2 class="bibliography">2024</h2>
  {% bibliography --query @*[list_order=y2024_01] --group_by none %}

  <h2 class="bibliography">2023</h2>
  {% bibliography --query @*[list_order=y2023_01] --group_by none %}

  <h2 class="bibliography">2022</h2>
  {% bibliography --query @*[list_order=y2022_01] --group_by none %}

</div>
