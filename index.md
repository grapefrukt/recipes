---
layout: default
title: Recept
---
# Recept
<hr />
<div class="recipes">
  {% assign tags =  site.recipes | map: 'tags' | join: ','  | split: ',' | uniq %}

  {% for tag in tags %}
    {% assign i = 0 %}
    {% capture color %}{% cycle 'col-one', 'col-two', 'col-three', 'col-four', 'col-five' %}{% endcapture %}
    <h3>{{ tag | capitalize }}</h3>

    {% for recipe in site.recipes %}
      {% if recipe.tags contains tag %}

      {% assign remainder = i | modulo: 3 %}
      {% if i == 0 %}
        <div class="row">
      {% elsif remainder == 0 %}
        </div>
        <div class="row">
      {% endif %}

      <a class="four columns {{ color }}" href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a>

      {% assign i = i | plus:1 %}
      {% endif %}
    {% endfor %}
    </div>
  {% endfor %}
</div>
