<template>
    <div>
        <PostCard
            v-for="page in this.$site.pages"
            v-if="isVisible(page)"
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

    methods: {
        isVisible(page) {
            if (["/", "/about.html"].includes(page.path)) {
                return false
            }

            for (let chunk of page.path.split("/")) {
                if (chunk.startsWith("__")) {
                    return false
                }
            }

            return true
        },
    },
}
</script>

<style scoped lang="scss">
</style>
