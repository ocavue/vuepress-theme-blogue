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
    props: ["name", "to"],
}
</script>

<style lang="stylus" scoped>
@import '../styles/theme';

.chip {
    border: 1px $premier-color solid;
    border-radius: 3em;
    text-align: center;
    min-width: 1.5em;
    padding: 0.5em 1em;
    margin: 0.5em 0.4em;
    text-decoration: none;
    color: $premier-color;
    transition : background-color 100ms, color 100ms;

    &:hover {
        background-color: $premier-color;
        color: #ffffff;
    }
}
</style>

