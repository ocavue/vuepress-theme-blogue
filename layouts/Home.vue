<template>
    <Posts
        :pages="this.$site.pages"
    />
</template>

<script>
import Posts from "./Posts"

export default {
    name: "Home",
    components: { Posts },
}
</script>

