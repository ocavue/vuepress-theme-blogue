<template>
    <div class="theme-container">
        <PostCard
            :page="this.$page"
            :showContent="true"
            :showLink="false"
        />
    </div>
</template>

<script>
import PostCard from "../components/PostCard.vue"

export default {
    name: "Layout",
    components: { PostCard },
}
</script>