<template>
    <SidebarContainer :show="show" :position="'right'" @hideEvent="hide">
        <div class="toc" v-show="show">
            <a
                class="toc__item"
                v-for="(header, i) in page.headers"
                :key="i"
                :href="`#${header.slug}`"
            >
                {{ "&nbsp; &nbsp; ".repeat(Math.max(header.level - 2, 0))}}
                {{ header.title }}
            </a>
        </div>
    </SidebarContainer>
</template>

<script>
// reference: https://material.io/design/components/sheets-side.html

import bus from "./bus.js"
import SidebarContainer from "./SidebarContainer"

export default {
    name: "Tocbar",
    props: ["allow", "page"],
    components: { SidebarContainer },
    data: function() {
        return {
            show: false,
        }
    },
    created: function() {
        bus.$on("toggleTocbarEvent", to => {
            if (to === true) {
                this.show = this.allow
            } else if (to === false) {
                this.show = false
            } else {
                bus.$emit("toggleTocbarEvent", this.allow && !this.show)
            }
        })
    },
    methods: {
        hide: function() {
            bus.$emit("toggleTocbarEvent", false)
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./style/base";
@import "~@material/elevation/mdc-elevation.scss";

.toc {
    width: $tocbar-width;
    max-width: calc(100vw - 56px);
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #ffffff;

    top: 0;
    right: 0;
    bottom: 0;

    z-index: 3;
    @include mdc-elevation(4);

    @media (min-width: 1200px) {
        top: 56px; // TODO: use variable
        right: 0;
        bottom: 0;

        z-index: 1;
    }

    will-change: transform;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    &__item {
        min-height: 48px;
        display: inline-flex;
        align-items: center;
        color: black;
        text-decoration: none;
        font-size: 1rem;
        padding-left: 16px;
        padding-right: 16px;
        overflow-x: hidden;
    }
}
</style>

