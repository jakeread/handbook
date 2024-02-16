## Machinery's Design Handbook

`WIP`

Should publish to [https://jakeread.github.io/handbook]

### How this (the website) Works

I've basically copied [this](https://github.com/just-the-docs/just-the-docs-template/tree/main) and the `.github/workflows` info does the magic, instructing github's servers to run Jekyll and pub the files on `push` events to this repo. Not true of the `draft` branch.

### How to dev locally

Pull the repo, and make sure you have Ruby installed. Run:

```
bundle install
```

Good luck, now you should be able to do:

```
bundle exec jekyll serve 
```

To launch a local dev server that will automatically rebuild the site on your edits. 