<template>
    <div id="root">
        <Sidebar/>
        <Tocbar :page="this.$page" :allow="!isHomePage()"/>
        <Toolbar :showTocbarButtom="!isHomePage()"/>
        <main :class="{'app__main': true, 'app__main--toc-open': isTocbarOpen}">
            <HomePage class="app__main-content" v-if="isHomePage()" />
            <PostPage class="app__main-content" v-else />
        </main>
        <footer class="app__footer">
            Power by <a class="app__footer-link" href="https://github.com/vuejs/vuepress">VuePress</a>
            <br>
            Theme <a class="app__footer-link" href="https://github.com/ocavue/vuepress-theme-blogue">Blogue</a>
        </footer>
        <div class="app__debug" v-if="debug">
            <pre>debug info:</pre>
            <pre>this.$site: {{ JSON.stringify(this.$site, null, 4)}}</pre>
            <pre>this.$page: {{ JSON.stringify(this.$page, null, 4)}}</pre>
        </div>
    </div>
</template>

<script>
import Toolbar from "./Toolbar"
import Sidebar from "./Sidebar"
import Tocbar from "./Tocbar"
import HomePage from "./HomePage.vue"
import PostPage from "./PostPage.vue"

import bus from "./bus.js"
import { getConfig } from "./utils.js"

export default {
    name: "blogue",
    components: { Toolbar, Sidebar, Tocbar, HomePage, PostPage },
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
    },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus">
@import './style/base';
@import './style/theme';

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
}

.app__main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-top: $toobar-height;
    padding-bottom: 32px;

    will-change: transform;
    transition: transform 300ms;
    transform: none;

    @media (min-width: 1200px) {
        &--toc-open {
            transform: translateX(-0.5 * $tocbar-width);
        }
    }
}

.app__main-content {
    @media s {
        margin: 8px;
        width: 100%;
    }

    @media m {
        width: $break-small - 24px * 2;
        margin-top: 32px;
    }

    @media l {
        width: 760px;
        margin-top: 64px;
    }
}

.app__footer {
    color: #c4c4c4;
    text-align: center;
    padding-bottom: 48px;
    font-size: 1rem;
    line-height: 2rem;

    &-link {
        color: #c4c4c4;
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
