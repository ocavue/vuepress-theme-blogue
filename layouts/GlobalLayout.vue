
<template>
    <div id="root">
        <Sidebar/>
        <Tocbar :page="this.$page" :allow="!isHomePage()"/>
        <Toolbar :showTocbarButtom="!isHomePage()"/>
        <main :class="{'app__main': true, 'app__main--toc-open': isTocbarOpen}">
            <component :is="layout" />
        </main>
        <footer class="app__footer">
            Power by <a class="app__footer-link" href="https://github.com/ocavue/vuepress-theme-blogue">Blogue</a>
        </footer>
        <div class="app__debug" v-if="debug">
            <pre>debug info:</pre>
            <pre>this.$site: {{ JSON.stringify(this.$site, null, 4)}}</pre>
            <pre>this.$page: {{ JSON.stringify(this.$page, null, 4)}}</pre>
            <pre>this.$tag:  {{ JSON.stringify(this.$tag,  null, 4)}}</pre>
            <pre>this.$tags: {{ JSON.stringify(this.$tags, null, 4)}}</pre>
        </div>
    </div>
</template>

<script>
import Toolbar from "../components/Toolbar"
import Sidebar from "../components/Sidebar"
import Tocbar from "../components/Tocbar"

import { bus, getConfig } from "../utils"

export default {
    name: "Container",
    components: { Toolbar, Sidebar, Tocbar },
    created: function() {
        bus.$on("toggleTocbarEvent", to => {
            if (to !== undefined) {
                this.isTocbarOpen = to
            }
        })
    },
    methods: {
        isHomePage: function() {
            return this.$page.path === this.$site.base
        },
    },
    data: function() {
        return {
            isTocbarOpen: false,
        }
    },
    computed: {
        debug: function() {
            return getConfig(this.$site)["debug"]
        },
        layout() {
            if (!this.$page.path) return "NotFound"
            return this.$frontmatter.layout || "Page"
        },
    },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus">
@import '../styles/base';
@import '../styles/theme';

body {
    margin: 0;
    padding: 0;
    background-color: $background-color;
    font-family: 'Helvetica Neue', Helvetica, Arial, '华文细黑', 'STXihei', '微软雅黑', 'Microsoft YaHei', sans-serif;
}

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.app__main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-top: $toobar-height;
    margin-bottom: 32px;
    box-sizing: border-box;
    z-index: $z-index-main;

    @media $small {
        padding: 16px;
        width: 100%;
    }

    @media $large {
        width: 'calc(100vw - %s)' % $tocbar-width;
        max-width: $max-main-width;
        padding-right: 32px;
        padding-left: 32px;
        padding-top: 64px;
        will-change: transform;
        transition: transform 300ms ease;
        transform: translateX(0px);

        @media (max-width: $max-main-width + 2 * $tocbar-width) {
            &--toc-open {
                transform: 'translateX(calc(((100vw - 100%) / 2 - %s)))' % $tocbar-width;
            }
        }
    }
}

.app__footer {
    color: #8a8a8a;
    text-align: center;
    padding-bottom: 48px;
    font-size: 1rem;
    line-height: 2rem;

    &-link {
        color: #8a8a8a;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;

        &:hover {
            color: $premier-color;
        }
    }
}

.app__debug {
    border-top-color: black;
    border-top-style: solid;
    border-top-width: 1px;
    margin: 8px;
    overflow-x: scroll;
}
</style>
