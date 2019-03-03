function isVisiblePost(page) {
    // not posts
    if (["/", "/about.html", "/resume.html"].includes(page.path)) {
        return false
    }

    // hidden posts
    for (let part of page.path.split("/")) {
        if (part.startsWith("__")) {
            return false
        }
    }

    return true
}

function getConfig(site) {
    let defaultThemeConfig = {
        avatarImage: "https://ws2.sinaimg.cn/large/006tKfTcgy1ftrhghh2cgj3074074dfp.jpg", // Vue.js's logo
        debug: false,
    }
    return { ...defaultThemeConfig, ...site.themeConfig }
}

export { isVisiblePost, getConfig }
