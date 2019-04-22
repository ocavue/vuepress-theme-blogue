<template>
    <PostCard :page="this.$page" :showContent="true" :showLink="false"/>
</template>

<script>
import PostCard from "./PostCard"

export default {
    name: "PostPage",
    components: { PostCard },
}
</script>

<style lang="stylus" scoped>
</style>
