module.exports = {
    plugins: {
        "@vuepress/blog": {},
    },
    extendPageData ($page) {
        if ($page.path === '/') {
            $page.frontmatter.layout = 'Home'
        }
    }
}