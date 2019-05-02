<template>
    <PostCard :page="this.$page" :showContent="true" :showLink="false"/>
</template>

<script>
import PostCard from "../components/PostCard"

export default {
    name: "Page",
    components: { PostCard },
}
</script>

