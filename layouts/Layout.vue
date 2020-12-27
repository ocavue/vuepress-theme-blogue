
<template>
    <Posts
        :pages="postPages"
    />
    <!--
    <h1>DEBUG: Layout.vue</h1>
    <div id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
    <h1>DEBUG: Layout.vue</h1>
    -->
</template>

<script>
import Posts from "../components/Posts.vue"

export default {
    name: "IndexPost",
    components: { Posts },
    computed: {
        postPages : () => {
            if ( this?.$pagination?.pages === "") {
                return this.$pagination.pages
            } else {
                console.log("warning: unable to find this.$pagination.pages")
                return []
            }
        }
    },
}
</script>
