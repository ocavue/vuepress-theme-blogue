module.exports = {
    plugins: {
        "@vuepress/blog": {},
        "@vuepress/medium-zoom": {},
        "@vuepress/plugin-active-header-links": {
            sidebarLinkSelector: '.toc__item',
            headerTopOffset: 56,
        },
    },
    extendPageData ($page) {
        if ($page.path === '/') {
            $page.frontmatter.layout = 'Home'
        }
    }
}