
<template>
    <Posts
        :pages="$pagination.pages"
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
}
</script>
