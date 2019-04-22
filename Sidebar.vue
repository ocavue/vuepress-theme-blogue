<template>
    <SidebarContainer :show="show" :position="'left'" @hideEvent="hideSidebar">
        <div class="sidebar" v-show="show">
            <div class="sidebar__header" @click="hideSidebar">
                <router-link
                    class="sidebar__header-avatar"
                    :to="'/about.html'"
                    :style="{'background-image': `url(${avatarURL})`}"
                />
            </div>
            <nav class="sidebar__nav" @click="hideSidebar">
                <router-link class="sidebar__nav-item" :to="'/'">
                    <span class="sidebar__nav-item-icon icon-home"></span>
                    <span class="sidebar__nav-item-content">HOME</span>
                </router-link>
                <router-link class="sidebar__nav-item" :to="'/about.html'">
                    <span class="sidebar__nav-item-icon icon-face"></span>
                    <span class="sidebar__nav-item-content">ABOUT</span>
                </router-link>
            </nav>
        </div>
    </SidebarContainer>
</template>

<script>
// reference: https://material.io/design/components/navigation-drawer.html

import bus from "./bus.js"
import { getConfig } from "./utils.js"
import SidebarContainer from "./SidebarContainer"

export default {
    name: "Sidebar",
    components: { SidebarContainer },
    data: function() {
        return {
            show: false,
        }
    },
    computed: {
        avatarURL: function() {
            return getConfig(this.$site)["avatarImage"]
        },
    },
    created: function() {
        bus.$on("showSidebarEvent", this.showSidebar)
    },
    methods: {
        showSidebar: function() {
            this.show = true
        },
        hideSidebar: function() {
            this.show = false
        },
    },
}
</script>

<style lang="stylus" scoped>
@import "./style/icon";

.sidebar {
    width: 300px;
    max-width: calc(100vw - 56px);
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #ffffff;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    top: 0px;
    bottom: 0;
    left: 0;

    &__header {
        height: 168px;
        min-height: 168px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #dfdfdf;
    }

    &__header-avatar {
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background-position: 50% 50%;
        background-size: cover;
        // background-image attribute will be added by vue.js
    }

    &__nav {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
    }

    &__nav-item {
        display: inline-flex;
        align-items: center;

        height: 56px;
        padding-left: 16px;
        padding-right: 16px;
        text-decoration: none;
        overflow: hidden;

        &:hover {
            background-color: #eeecec;
        }

        &-icon {
            margin-right: 32px;
            color: #757575;
        }

        &-content {
            color: #212121;
        }
    }
}
</style>

