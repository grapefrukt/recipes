# Recipes
Jekyll recipe database

## Running with docker
Having installed [docker](https://docker.com), just run this from root of repo:

```
docker run --rm -ti -v $PWD:/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --watch --incremental
```

Then browse to http://localhost:4000/recipes/
