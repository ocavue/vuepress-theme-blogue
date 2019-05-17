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
    props: ["allow", "page"],
    computed: {
        hash: function() {
            return this.$route.hash
        },
    },
}
</script>

<style lang="stylus" scoped>
@import "../styles/base";
@import "../styles/theme";
@import "../styles/elevation";
@import "../styles/scroll";

.toc {
    width: $tocbar-width;
    max-width: calc(100vw - 56px);
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;

    @media $small {
        elevation(4);
        background-color: #ffffff;

        top: 0;
        right: 0;
        bottom: 0;

        z-index: $z-index-tocbar-small;
    }
    @media $large {
        background-color: $background-color;

        top: $toolbar-height;
        right: 0;
        bottom: 0;

        z-index: $z-index-tocbar-large;
    }

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    hide-scrollbar()

    &__item {
        min-height: 48px;
        display: inline-flex;
        align-items: center;
        color: black;
        text-decoration: none;
        font-size: 0.9rem;
        overflow-x: hidden;
        overflow-y: hidden;

        // padding-left: 16px; // padding-left will be added by js
        padding-right: 16px;

        &--active {
            color: $premier-color;
            box-shadow: inset 4px 0 0 $premier-color;
        }

        &:hover {
            background-color: #e2e2e2;
        }

        &:first-child {
            margin-top: 64px;  // keep that the first-child and PostCard has same upper edge height
        }

        &:last-child {
            margin-bottom: 48px;
        }
    }
}

.toc {
    will-change: transform;
    transition: transform 300ms ease, visibility 300ms ease;
    transform: translateX(100%)
    visibility: hidden;
}

.root--show-tocbar > .toc {
    transform: translateX(0)
    visibility: visible;
}
</style>

