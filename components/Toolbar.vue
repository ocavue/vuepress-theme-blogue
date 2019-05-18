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
    props: {
        showTocbarButtom: { type: Boolean, required: true },
        clickTocButtom: { type: Function, required: true },
        clickMenuButtom: { type: Function, required: true },
    },
    methods: {},
}
</script>

<style lang="stylus" scoped>
@import "../styles/base"
@import "../styles/icon"
@import "../styles/theme"
@import "../styles/elevation"

.toolbar
    elevation(4)
    position fixed
    z-index $z-index-toolbar
    display flex
    justify-content space-between
    width 100%
    background-color #ffffff

    &__button
        display flex
        justify-content center
        align-items center
        width $toolbar-height
        height $toolbar-height

        @media $small
            padding-right 0px
            padding-left 0px

        @media $large
            padding-right 8px
            padding-left 8px

        &:hover
            cursor pointer

    &__item
        display inline-flex
        margin-right 16px
        color #000000
        text-decoration none
        line-height $toolbar-height

        &:hover
            color $premier-color
</style>
