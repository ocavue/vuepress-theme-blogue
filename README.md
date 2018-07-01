# vuepress-theme-blogue

> Yet another vuepress theme based on material design

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Version](https://img.shields.io/npm/v/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)
[![License](https://img.shields.io/npm/l/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)

## Live demo

https://ocavue.github.io/

## Usage

Add this `.vuepress/config.js`

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

- [ ] Markdown style
- [ ] Configurable
- [ ] Design
- [ ] Performance
- [ ]