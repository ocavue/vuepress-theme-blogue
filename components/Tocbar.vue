<template>
    <div class="toc">
        <a
            v-for="(header, i) in page.headers"
            :key="i"
            :style="{'padding-left': `${Math.max(header.level - 2, 0) * 16 + 16}px`}"
            :href="`#${header.slug}`"
            :class="{
                'toc__item': true,
                'toc__item--active': `#${header.slug}` === hash
            }"
        >
            {{ header.title }}
        </a>
    </div>
</template>

<script>
// reference: https://material.io/design/components/sheets-side.html

export default {
    name: "Tocbar",
    props: {
        allow: { type: Boolean, required: true },
        page: { type: Object, required: true },
    },
    computed: {
        hash: function() {
            return this.$route.hash
        },
    },
}
</script>

<style lang="stylus" scoped>
@import "../styles/base"
@import "../styles/theme"
@import "../styles/elevation"
@import "../styles/scroll"

.toc
    position fixed
    overflow-x hidden
    overflow-y auto
    max-width calc(100vw - 56px)
    width $tocbar-width

    @media $small
        elevation(4)
        top 0
        right 0
        bottom 0
        z-index $z-index-tocbar-small
        background-color #ffffff

    @media $large
        top $toolbar-height
        right 0
        bottom 0
        z-index $z-index-tocbar-large
        background-color $background-color

    display flex
    flex-direction column
    justify-content flex-start
    align-items stretch
    hide-scrollbar()

    &__item
        display inline-flex
        align-items center
        overflow-x hidden
        overflow-y hidden
        // padding-left: 16px; // padding-left will be added by js
        padding-right 16px
        min-height 48px
        color black
        text-decoration none
        font-size 0.9rem

        &--active
            box-shadow inset 4px 0 0 $premier-color
            color $premier-color

        &:hover
            background-color #e2e2e2

        &:first-child
            margin-top 64px // keep that the first-child and PostCard has same upper edge height

        &:last-child
            margin-bottom 48px

.toc
    visibility hidden
    transition transform 300ms ease, visibility 300ms ease
    transform translateX(100%)
    will-change transform

.root--show-tocbar > .toc
    visibility visible
    transform translateX(0)
</style>

