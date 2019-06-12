---
layout: default
title: Recept
---
# Recept

Här är alla goda recept vi kan;

<ul>
  {% assign recipes = site.recipes | sort: 'title' %}
  {% for recipe in recipes %}
    <li>
      <a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a>
    </li>
  {% endfor %}
</ul>
