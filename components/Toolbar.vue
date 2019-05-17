<template>
    <header class="toolbar">
        <span
            class="toolbar__button icon-menu"
            @click="clickMenuButtom"
        />
        <router-link
            :to="'/'"
            class="toolbar__item"
        >
            {{ this.$site.title || "Project Blogue" }}
        </router-link>
        <span style="flex: 1;" />
        <span
            v-if="showTocbarButtom"
            class="toolbar__button icon-toc"
            @click="clickTocButtom"
        />
    </header>
</template>

<script>
export default {
    name: "Toolbar",
    props: ["showTocbarButtom", "clickTocButtom", "clickMenuButtom"],
    methods: {},
}
</script>

<style lang="stylus" scoped>
@import "../styles/base";
@import "../styles/icon";
@import "../styles/theme";
@import "../styles/elevation";

.toolbar {
    elevation(4);

    position: fixed;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    z-index: $z-index-toolbar;

    &__button {
        height: $toolbar-height;
        width: $toolbar-height;
        display: flex;
        justify-content: center;
        align-items: center;

        @media $small {
            padding-left: 0px;
            padding-right: 0px;
        }
        @media $large {
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
        line-height: $toolbar-height;
        color: #000000;
        text-decoration: none;

        &:hover {
            color: $premier-color;
        }
    }
}
</style>
