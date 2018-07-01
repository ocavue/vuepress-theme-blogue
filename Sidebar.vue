<template>
    <span>
        <transition name="transition-sidebar">
            <nav class="sidebar" v-show="show">
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
            </nav>
        </transition>
        <transition name="transition-cover">
            <div class="cover" v-show="show" @click="hideSidebar"></div>
        </transition>
    </span>
</template>

<script>
import bus from "./bus.js"

export default {
    name: "Sidebar",
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
        hideSidebar: function() {
            this.show = false
        },
        showSidebar: function() {
            this.show = true
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./style/icon";

.sidebar {
    width: 300px;
    max-width: calc(100vw - 56px);
    height: 100vh;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #ffffff;

    z-index: 3;
    will-change: transform;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

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

.cover {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;

    z-index: 2;
    will-change: opacity;
}

.transition-sidebar {
    &-leave-active {
        transition: transform 150ms ease-in;
    }
    &-enter-active {
        transition: transform 250ms ease-out;
    }
    &-enter,
    &-leave-to {
        transform: translateX(-100%);
    }
    &-leave,
    &-enter-to {
        transform: none;
    }
}

.transition-cover {
    &-leave-active {
        transition: opacity 200ms ease-in;
    }
    &-enter-active {
        transition: opacity 200ms ease-out;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-leave,
    &-enter-to {
        opacity: 1;
    }
}
</style>

