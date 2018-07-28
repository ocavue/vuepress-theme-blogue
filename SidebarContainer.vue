<template>
    <span>
        <transition :name="'transition-sidebar--' + this.position">
            <slot></slot>
        </transition>
        <transition name="transition-cover">
            <div
                :class="{
                    'cover': true,
                    'cover--right': this.position === 'right',
                }"
                v-show="show"
                @click="$emit('hideEvent')"
            ></div>
        </transition>
    </span>
</template>

<script>
import bus from "./bus.js"

export default {
    name: "Sidebar",
    props: {
        show: {
            type: Boolean,
        },
        position: {
            validator: function(value) {
                // The value must match one of these strings
                return ["left", "right"].indexOf(value) !== -1
            },
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./style/icon";
@import "./style/base";

.cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;

    z-index: 2;
    will-change: opacity;

    &--right {
        @media (min-width: 1200px) {
            display: none;
        }
    }
}

.transition-sidebar--left,
.transition-sidebar--right {
    // https://material.io/design/motion/speed.html#duration
    // A nav drawer opens over 250ms, and closes over 200ms.
    &-leave-active {
        transition: transform 200ms ease-in;
    }
    &-enter-active {
        transition: transform 250ms ease-out;
    }
    &-leave,
    &-enter-to {
        transform: none;
    }
}

.transition-sidebar--left {
    &-enter,
    &-leave-to {
        transform: translateX(-100%);
    }
}

.transition-sidebar--right {
    &-enter,
    &-leave-to {
        transform: translateX(100%);
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

