
<template>
    <div
        id="root"
        :class="{
            'root--show-sidebar': showSidebar,
            'root--show-tocbar': showTocbar,
        }"
    >
        <Cover
            :click="closeCover"
        />
        <Sidebar
            :click="closeCover"
        />
        <Tocbar
            :page="this.$page"
            :allow="!isHomePage()"
        />
        <Toolbar
            :showTocbarButtom="!isHomePage()"
            :clickTocButtom="() => showTocbar = !showTocbar"
            :clickMenuButtom="() => showSidebar = !showSidebar"
        />
        <main class="app__main">
            <component :is="layout" />
        </main>
        <footer class="app__footer">
            Power by <a
                class="app__footer-link"
                href="https://github.com/ocavue/vuepress-theme-blogue"
            >Blogue</a>
        </footer>
        <div
            v-if="debug"
            class="app__debug"
        >
            <pre>debug info:</pre>
            <pre>this.$site: {{ JSON.stringify(this.$site, null, 4) }}</pre>
            <pre>this.$page: {{ JSON.stringify(this.$page, null, 4) }}</pre>
            <pre>this.$tag:  {{ JSON.stringify(this.$tag, null, 4) }}</pre>
            <pre>this.$tags: {{ JSON.stringify(this.$tags, null, 4) }}</pre>
        </div>
    </div>
</template>

<script>
import Toolbar from "../components/Toolbar.vue"
import Sidebar from "../components/Sidebar.vue"
import Tocbar from "../components/Tocbar.vue"
import Cover from "../components/Cover.vue"

import { getConfig } from "../utils"

export default {
    name: "Container",
    components: { Toolbar, Sidebar, Tocbar, Cover },
    data: function() {
        return {
            showSidebar: false,
            showTocbar: false,
        }
    },
    computed: {
        debug: function() {
            return getConfig(this.$site)["debug"]
        },
        layout () {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    // You can also check whether layout exists first as the default global layout does.
                    return this.$frontmatter.layout
                }
                return 'Layout'
            }
            return 'NotFound'
        },
    },
    methods: {
        isHomePage: function() {
            return this.$page.path === this.$site.base
        },
        closeCover: function() {
            if (this.showSidebar) {
                this.showSidebar = false
            } else {
                this.showTocbar = false
            }
        },
    },
    beforeRouteEnter: function(to, from, next) {
        next(self => {
            self.showTocbar =
                self.$page.path &&
                self.$page.headers &&
                self.$frontmatter.layout === "Page" &&
                // if window width is too small, tocbar will cover main content
                (typeof window === "undefined" ? false : window.innerWidth > 1024)
        })
    },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus">
@import "../styles/base"
@import "../styles/theme"

body
    margin 0
    padding 0
    background-color $background-color
    font-family "Helvetica Neue", Helvetica, Arial, "华文细黑", "STXihei", "微软雅黑", "Microsoft YaHei", sans-serif

#root
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    min-height 100vh

.app__main
    z-index $z-index-main
    display flex
    flex-direction column
    justify-content flex-start
    align-items stretch
    box-sizing border-box
    margin-top $toolbar-height
    margin-bottom 32px

    @media $small
        padding 16px
        width 100%

    @media $large
        padding-top 64px
        padding-right 32px
        padding-left 32px
        max-width $max-main-width
        width "calc(100vw - %s)" % $tocbar-width
        transition transform 300ms ease
        transform translateX(0px)
        will-change transform

.root--show-tocbar .app__main
    @media $large
        @media (max-width: $max-main-width + 2 * $tocbar-width)
            transform "translateX(calc(((100vw - 100%) / 2 - %s)))" % $tocbar-width

.app__footer
    padding-bottom 48px
    color #8a8a8a
    text-align center
    font-size 1rem
    line-height 2rem

    &-link
        padding-top 0.4rem
        padding-bottom 0.4rem
        color #8a8a8a

        &:hover
            color $premier-color

.app__debug
    overflow-x scroll
    margin 8px
    border-top-width 1px
    border-top-style solid
    border-top-color black
</style>
