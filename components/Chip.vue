<template>
    <router-link
        :to="to"
        class="chip"
    >
        {{ name }}
    </router-link>
</template>

<script>
export default {
    name: "Chip",
    // props: {
    //     name: { type: String, required: true },
    //     to: { type: String, required: true },
    // },
    props: ["name", "to"],
}
</script>

<style lang="stylus" scoped>
@import "../styles/theme"

.chip
    margin 0.5em 0.4em
    padding 0.5em 1em
    min-width 1.5em
    border 1px $premier-color solid
    border-radius 3em
    color $premier-color
    text-align center
    text-decoration none
    transition background-color 100ms, color 100ms

    &:hover
        background-color $premier-color
        color #ffffff
</style>

