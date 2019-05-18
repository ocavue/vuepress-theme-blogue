<template>
    <span
        class="cover"
        @click="click"
    />
</template>

<script>
export default {
    name: "Cover",
    props: ["click"],
}
</script>

<style lang="stylus" scoped>
@import "../styles/base"

.cover
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index $z-index-cover
    visibility hidden
    background-color rgba(0, 0, 0, 0.7)
    opacity 0
    cursor pointer
    transition opacity 300ms ease, visibility 300ms ease
    will-change opacity, visibility

.root--show-sidebar > .cover
    visibility visible
    opacity 1

.root--show-tocbar > .cover
    @media $small
        visibility visible
        opacity 1
</style>

