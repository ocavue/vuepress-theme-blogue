<template>
    <div class="tags">
        <h1 class="tags--title">
            Tags
        </h1>
        <div class="tags-links">
            <Chip
                v-for="(tag, index) in this.$tags.list"
                :key="index"
                :to="tag.path"
                :name="tag.name"
            />
        </div>
    </div>
</template>

<script>
import Chip from "../components/Chip.vue"

export default {
    name: "Tags",
    components: { Chip },
}
</script>

<style lang="stylus">
.tags
    display flex
    flex-direction column

.tags-links
    display flex
    flex-direction row
    flex-wrap wrap
</style>
