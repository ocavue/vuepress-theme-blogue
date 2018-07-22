<template>
    <SidebarContainer :show="show" @hideEvent="hideSidebar">
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
    </SidebarContainer>
</template>

<script>
// reference: https://material.io/design/components/navigation-drawer.html

import bus from "./bus.js"
import SidebarContainer from "./SidebarContainer"

export default {
    name: "Sidebar",
    components: { SidebarContainer },
    data: function() {
        return {
            show: false,
            avatarURL: "https://ws1.sinaimg.cn/large/006tNc79gy1fom9qicqcej30e80e83zo.jpg", // https://unsplash.com/photos/5BHDL8JaxZc
        }
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

<style lang="scss" scoped>
@import "./style/icon";

.sidebar {
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

