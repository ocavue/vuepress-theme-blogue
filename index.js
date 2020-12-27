module.exports = (themeConfig) => {

    const defaultBlogPluginConfig = {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
                itemPermalink: '/:slug',
                // pagination: {
                //     perPagePosts: 2,
                // },
            },
        ],
        frontmatters: [
            {
                id: "tag",
                keys: ['tag', 'tags'],
                path: '/tag/',
                layout: 'Tag',
                frontmatter: { title: 'Tag' },
                itemlayout: 'Tag',
                // pagination: {
                //     perPagePosts: 2
                // }
            },
        ]
    }

    const blogPluginConfig = Object.assign(
        {},
        defaultBlogPluginConfig,
        themeConfig.blogPluginConfig || {}
    )

    return {
        plugins: [
            ["@vuepress/medium-zoom", {}],

            ['@vuepress/blog', blogPluginConfig],

            ['@vuepress/plugin-active-header-links', {
                sidebarLinkSelector: '.toc__item',
            }]
        ],
    }
}