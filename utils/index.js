function isVisiblePost(page) {
    return page?.frontmatter?.hide !== true
}

function getConfig(site) {
    let defaultThemeConfig = {
        avatarImage: "https://ws2.sinaimg.cn/large/006tKfTcgy1ftrhghh2cgj3074074dfp.jpg", // Vue.js's logo
        debug: false,
    }
    return { ...defaultThemeConfig, ...site.themeConfig }
}

export { isVisiblePost, getConfig }
