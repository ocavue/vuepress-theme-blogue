<template>
    <header class="toolbar">
        <span @click="showSidebar" class="toolbar__button icon-menu"></span>
        <router-link :to="'/'" class="toolbar__item">Ocavue's Blog</router-link>
        <span style="flex: 1;"></span>
        <span @click="toogleTocbar" class="toolbar__button icon-toc" v-if="showTocbarButtom"></span>
    </header>
</template>

<script>
import bus from "./bus.js"

export default {
    name: "Toolbar",
    props: ["showTocbarButtom"],
    methods: {
        showSidebar: function() {
            bus.$emit("showSidebarEvent")
        },
        toogleTocbar: function() {
            bus.$emit("toggleTocbarEvent")
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./style/base";
@import "./style/icon";
@import "./style/theme";
@import "./style/elevation";

.toolbar {
    @include mdc-elevation(4);

    position: fixed;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    z-index: 1;

    &__button {
        height: $toobar-height;
        width: $toobar-height;
        display: flex;
        justify-content: center;
        align-items: center;

        @include respond-to("s") {
        }
        @include respond-to("m") {
            padding-left: 8px;
            padding-right: 8px;
        }
        @include respond-to("l") {
            padding-left: 8px;
            padding-right: 8px;
        }

        &:hover {
            cursor: pointer;
        }
    }

    &__item {
        display: inline-flex;
        margin-right: 16px;
        line-height: $toobar-height;
        color: #000000;
        text-decoration: none;

        &:hover {
            color: $premier-color;
        }
    }
}
</style>
