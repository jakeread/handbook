# The Handbook

`WIP`

## Git LFS

We are using `git-lfs` (large file storage) to avoid bricking the repository with big images, video etc. LFS stores pointers to big files (any extension from `.gitattributes`) rather than literal copies of each (and updates to each). 

This means all collaborators need to have lfs installed, use:

`git lfs install` 

After which, pulling should remain simple: `git pull` / `git clone` will download the relevant copies of large files. 

This still means that large files should not be committed 

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