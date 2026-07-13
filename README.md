# The Handbook

`WIP`

## How to Quarto

[Quarto](https://quarto.org/) is [downloadable](https://quarto.org/docs/get-started/) / easy to install, there is also a VSCode extension (see [this guide](https://quarto.org/docs/get-started/hello/vscode.html)).

- `_quarto.yml` is the top-level structure, 
- Open the `handbook` folder in VSCode to edit, 
- In the terminal, `quarto preview` to live edit:
  - to render updates, `ctrl + s` in `_quarto.yml` to update, or simply re-run `quarto preview` 
- `quarto render` will build a full .html and .pdf output, but .pdf will fail if there are any missing links etc. 

## Crossrefs

```markdown
## Section {#sec-name}

... later, 

See @sec-name to... 
```

## Using Math

use `$$...$$` delimiters around maths, either inline or with breaklines,

```markdown 
math can be $$f = ma$$ inlined, or

$$
u = -Kx
$$

... broken out 
``` 