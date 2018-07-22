<template>
    <span>
        <transition name="transition-sidebar">
            <div class="sidebar" v-show="show">
                <slot></slot>
            </div>
        </transition>
        <transition name="transition-cover">
            <div class="cover" v-show="show" @click="$emit('hideEvent')"></div>
        </transition>
    </span>
</template>

<script>
import bus from "./bus.js"

export default {
    name: "Sidebar",
    props: ["show"],
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

