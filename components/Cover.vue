<template>
    <span class="cover" @click="click"></span>
</template>

<script>
export default {
    name: "Cover",
    props: ["click"],
}
</script>

<style lang="stylus" scoped>
@import '../styles/base';

.cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    z-index: $z-index-cover;
    transition: opacity 300ms ease, visibility 300ms ease;
    will-change: opacity, visibility;
    opacity: 0;
    visibility: hidden;
}

.root--show-sidebar > .cover {
    opacity: 1;
    visibility: visible;
}

.root--show-tocbar > .cover {
    @media $small {
        opacity: 1;
        visibility: visible;
    }
}
</style>

