<template>
    <Posts
        :pages="this.$tag.posts"
        :header="name"
    />
</template>

<script>
import Posts from "./Posts"

export default {
    name: "Tag",
    components: { Posts },
    computed: {
        name() {
            return this.$tag.path.slice(5, -5) // "/tag/mytag.html" => "mytag"
        },
    },
}
</script>
