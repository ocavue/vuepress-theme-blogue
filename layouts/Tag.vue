<template>
    <div class="tag">
        <h2>{{ name }}</h2>
        <router-link
            class="tag--link"
            v-for="(post, index) in this.$tag.posts"
            :key="index"
            :to="post.path"
        >
            {{ post.title }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Tag",
    computed: {
        name() {
            return this.$tag.path.slice(5, -5) // "/tag/mytag.html" => "mytag"
        },
    },
}
</script>

<style lang="stylus">
@import '../styles/theme';

.tag {
    display: flex;
    flex-direction: column;
}

.tag--link {
    padding-bottom: 4px;
    padding-top: 4px;
    font-size: 1.2em;
    color: #5a5a5a;

    &:hover {
        color: $premier-color;
    }
}
</style>
