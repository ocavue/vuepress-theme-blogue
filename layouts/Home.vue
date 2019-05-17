<template>
    <Posts
        :pages="this.$site.pages"
    />
</template>

<script>
import Posts from "./Posts.vue"

export default {
    name: "Home",
    components: { Posts },
}
</script>

