<template>
    <div class="theme-container">
        <!-- <span> debug: Post.vue</span> -->
        <PostCard
            :page="this.$page"
            :showContent="true"
            :showLink="false"
        />
        <Comment />
    </div>
</template>

<script>
import PostCard from "../components/PostCard.vue"
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
    name: "Post",
    components: { PostCard, Comment },
}
</script>