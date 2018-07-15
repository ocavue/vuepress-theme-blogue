<template>
    <header class="toolbar">
        <nav class="toolbar__nav">
            <span @click="menuClick" class="toolbar__nav-button icon-menu"></span>
            <router-link :to="'/'" class="toolbar__nav-item">Ocavue's Blog</router-link>
            <span class="toolbar__nav-item __only_show_in_large_screen">Item 1</span>
            <span class="toolbar__nav-item __only_show_in_large_screen">Item 2</span>
            <span class="toolbar__nav-item __only_show_in_large_screen">Item 3</span>
            <span class="toolbar__nav-item __only_show_in_large_screen">Item 4</span>
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

.__only_show_in_large_screen {
    @include respond-to("s") {
        display: none !important;
    }
}
.toolbar {
    @include mdc-elevation(4);

    position: sticky;
    width: 100%;
    top: -200px;
    height: 256px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 32px;
    @include respond-to("s") {
        justify-content: flex-start;
    }
    @include respond-to("m") {
        justify-content: center;
    }
    @include respond-to("l") {
        justify-content: center;
    }
}

.toolbar__nav {
    display: flex;
    align-items: center;

    &-button {
        @include respond-to("s") {
            height: 56px;
            width: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @include respond-to("m") {
            display: none;
        }
        @include respond-to("l") {
            display: none;
        }

        &:hover {
            cursor: pointer;
        }
    }

    &-button {
        @include respond-to("s") {
            height: 56px;
            width: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @include respond-to("m") {
            display: none;
        }
        @include respond-to("l") {
            display: none;
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
