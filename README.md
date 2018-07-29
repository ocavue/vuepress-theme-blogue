# vuepress-theme-blogue

> A [VuePress](https://vuepress.vuejs.org/) theme made for blog

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Version](https://img.shields.io/npm/v/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)
[![License](https://img.shields.io/npm/l/vuepress-theme-blogue.svg)](https://www.npmjs.com/package/vuepress-theme-blogue)

## Live demo

https://ocavue.github.io/

## Basic Usage

First of all, your need to have a VuePress project. Your can follow [VuePress's official guide](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project) to create one. Then you can use one of the following commands to install this theme.

```bash
yarn add vuepress-theme-blogue
// or
npm install vuepress-theme-blogue
```

Because of VuePress's limit, you have to add some extra configs in `.vuepress/config.js` to make this theme work. If this file does not exist, you can follow [this link](https://vuepress.vuejs.org/guide/basic-config.html#config-file) to create it.

```js
const path = require("path")
const sassConfig = {
    includePaths: [
        path.join(YOUR_PROJECT_PATH, "node_modules")
    ]
}

module.exports = {
    ...
    theme: "blogue",
    scss: sassConfig,
    sass: sassConfig,
}
```

## Project Configuration

Edit `.vuepress/config.js` to configure this theme. Below is the default configuration.

```js
...
module.exports = {
    ...
    title: "Project Blogue",
    themeConfig: {
        avatarImage: "https://ws2.sinaimg.cn/large/006tKfTcgy1ftrhghh2cgj3074074dfp.jpg",
        debug: false
    }
}
```

- **`title`**: Your blog's title, will be displayed in the toolbar (AKA navbar).
- **`avatarImage`**: URL string for avatar, will be displayed in the drawer (AKA sidebar).
- **`debug`**: Whether to show [site and page metadata](https://vuepress.vuejs.org/guide/custom-themes.html#site-and-page-metadata) at bottom of every page.

## Blog Post Configuration

For every markdown file in your VuePress project, you need a [front matter](https://vuepress.vuejs.org/guide/markdown.html#front-matter) on top of the file. The example below uses YAML front matter but [other languages](https://vuepress.vuejs.org/guide/markdown.html#alternative-front-matter-formats) are supported too.

```
---
title: My first blog
date: 2018-07-01
image: https://ws1.sinaimg.cn/large/006tNc79ly1fsxfr3d6eij31kw11x4qq.jpg
---
```

- **`title`** (required): Your post's title. vuepress-theme-blogue will NOT find H1 title inside your markdown file.
- **`date`** (required): Your post's date. Your need to use **YYYY-MM-DD** format. vuepress-theme-blogue use post's date to sort, so this field is required.
- **`image`** (optional): Your post's cover image URL.

Your will need **README.md** and **about.md** in your docs directory. These two posts will not be displayed on the home page.

## TODO

- [ ] Tags
- [ ] Comments
- [x] Configurable

## Contribution

- [Git Commit Message Style](http://udacity.github.io/git-styleguide/)
