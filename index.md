---
layout: default
title: Recept
---
# Recept

Här är alla goda recept vi kan;

<div class="recipes">
  {% assign recipes = site.recipes | sort: 'title' %}
  
    {% for recipe in recipes %}
    
    {% assign remainder = forloop.index | modulo: 4 %}
    {% if forloop.first == true %}
      <div class="row first">
    {% elsif remainder == 0 %}
      </div>
      <div class="row mid">
    {% endif %}
    <a class="four columns" href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a>
    
    {% endfor %}
  </div>
</div>
