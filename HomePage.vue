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
import { isVisiblePost } from "./utils"

export default {
    name: "HomePage",
    components: { PostCard },
    methods: {
        isVisiblePost: isVisiblePost
    },
}
</script>

<style scoped lang="scss">
</style>
