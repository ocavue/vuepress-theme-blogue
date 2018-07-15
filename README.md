# vuepress-theme-blogue

> A [VuePress](https://vuepress.vuejs.org/) theme made for blog

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Version](https://img.shields.io/npm/v/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)
[![License](https://img.shields.io/npm/l/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)

## Live demo

https://ocavue.github.io/

## Usage

Beacause of VuePress's limit, you have to add some extra configs in `.vuepress/config.js` to make this theme works.

```js
const path = require("path")

module.exports = {
    ...
    theme: "blogue",
    scss: {
        includePaths: [path.join(YOUR_PROJECT_PATH, "node_modules")],
    },
    sass: {
        includePaths: [path.join(YOUR_PROJECT_PATH, "node_modules")],
    },
}
```

## TODO

- [ ] Tags
- [ ] Comments
- [ ] Configurable

## Contribution

- [Git Commit Message Style](http://udacity.github.io/git-styleguide/)
