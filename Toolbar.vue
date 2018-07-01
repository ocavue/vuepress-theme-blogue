<template>
    <header class="toolbar">
        <nav class="toolbar__nav">
            <span @click="menuClick" class="toolbar__nav-button icon-menu"></span>
            <router-link :to="'/'" class="toolbar__nav-item">Ocavue's Blog</router-link>
        </nav>
        <nav class="toolbar__nav toolbar__nav--right">
            <!-- placeholder -->
        </nav>
    </header>
</template>

<script>
import bus from "./bus.js"

export default {
    name: "Toolbar",
    methods: {
        menuClick: function() {
            bus.$emit("showSidebarEvent")
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
    padding-right: 32px;
}

.toolbar__nav {
    display: flex;
    align-items: center;

    &-button {
        height: 56px;
        width: 56px;
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

    &-item {
        display: inline-flex;
        margin-right: 16px;
        line-height: 56px;
        color: #000000;
        text-decoration: none;

        &:hover {
            color: $premier-color;
        }
    }
}
</style>
