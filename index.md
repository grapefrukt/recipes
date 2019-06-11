---
layout: default
title: About
---
# About page

This page tells you a little bit about me.

<ul>
  {% for recipe in site.recipes %}
    <li>
      <h2><a href="{{ recipe.url }}">{{ recipe.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
