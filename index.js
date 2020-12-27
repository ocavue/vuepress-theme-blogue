module.exports = (themeConfig) => {

    const pagination = {
        lengthPerPage: 10000, // A temporary solution until the paging component is completed
    }

    const defaultBlogPluginConfig = {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
                itemPermalink: '/:slug',
                pagination: pagination
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
                pagination: pagination
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