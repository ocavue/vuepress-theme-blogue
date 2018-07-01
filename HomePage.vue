<template>
    <div>
        <PostCard
            v-for="page in this.$site.pages"
            v-if="page.path !== '/' && page.path !== '/about.html'"
            :key="page.key"
            :page="page"
            :showContent="false"
            :showLink="true"
        />
    </div>
</template>

<script>
// import posts from '@/dist/static/posts/posts.json'
import PostCard from "./PostCard"

export default {
    name: "HomePage",
    components: { PostCard },
    data() {
        return {
            posts: [],
        }
    },
}
</script>

<style scoped lang="scss">
</style>
