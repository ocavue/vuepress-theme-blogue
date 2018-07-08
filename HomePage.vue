<template>
    <div>
        <PostCard
            v-for="page in this.$site.pages"
            v-if="isVisiblePost(page)"
            :key="page.key"
            :page="page"
            :showContent="false"
            :showLink="true"
        />
    </div>
</template>

<script>
import PostCard from "./PostCard"

export default {
    name: "HomePage",
    components: { PostCard },
    methods: {
        isVisiblePost(page) {
            // not posts
            if (["/", "/about.html"].includes(page.path)) {
                return false
            }

            // hidden posts
            for (let part of page.path.split("/")) {
                if (part.startsWith("__")) {
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
