<template>
    <SidebarContainer :show="show" :position="'right'" @hideEvent="hide">
        <div class="toc" v-show="show">
            <a
                class="toc__item"
                v-for="(header, i) in page.headers"
                :key="i"
                :style="{'padding-left': `${Math.max(header.level - 2, 0) * 16 + 16}px`}"
                :href="`#${header.slug}`"
            >
                {{ header.title }}
            </a>
        </div>
    </SidebarContainer>
</template>

<script>
// reference: https://material.io/design/components/sheets-side.html

import { bus } from "../utils"
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

<style lang="stylus" scoped>
@import "../styles/base";
@import "../styles/theme";
@import "../styles/elevation";

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
        font-size: 0.9rem;
        overflow-x: hidden;
        overflow-y: hidden;

        // padding-left: 16px; // padding-left will be added by js
        padding-right: 16px;

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
</style>

