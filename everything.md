---
layout: default
title: Allt
---

{% assign recipes = site.recipes | sort: 'title' %}
{% for recipe in recipes %}
  {% assign page = recipe %}
  {% include recipe.html %}
{% endfor %}
