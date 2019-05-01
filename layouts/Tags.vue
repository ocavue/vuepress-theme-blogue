<template>
    <div class="tags">
        <h1 class="tags--title">Tags</h1>
        <div class="tags-links">
            <router-link
                v-for="(tag, index) in this.$tags.list"
                :key="index"
                :to="tag.path"
                class="tags-links--item"
            >
                {{ tag.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tags",
}
</script>

<style lang="stylus">
@import '../styles/theme';

.tags {
    display: flex;
    flex-direction: column;
}

.tags-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.tags-links--item {
    color: $premier-color;
    padding-bottom: 4px;
    padding-top: 4px;
    margin-right: 16px;
    font-size: 1.2em;
    color: #5a5a5a;

    &:hover {
        color: $premier-color;
    }
}
</style>
