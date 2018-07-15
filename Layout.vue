<template>
    <div id="root">
        <Sidebar/>
        <toolbar/>
        <main class="app__main">
            <HomePage class="app__main-content" v-if="this.$page.path === this.$site.base" />
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
import HomePage from "./HomePage.vue"
import PostPage from "./PostPage.vue"

export default {
    name: "blogue",
    components: { Toolbar, Sidebar, HomePage, PostPage },
    data: function() {
        return {
            debug: false, // TODO make this configurable
        }
    },
}
</script>

<style lang="scss">
@import "./style/base";
@import "./style/theme";

body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "华文细黑", "STXihei", "微软雅黑",
        "Microsoft YaHei", sans-serif;
}

#app {
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
    padding-top: 56px; // for fixed toolbar
    padding-bottom: 32px;
}

.app__main-content {
    @include respond-to("s") {
        margin: 8px;
        width: 100%;
    }
    @include respond-to("m") {
        width: $break-small - 24px * 2;
        margin-top: 32px;
    }
    @include respond-to("l") {
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
        // background-color: rgba(0, 0, 0, 0.5);
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
    // width: 100%;
}
</style>
