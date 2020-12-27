<template>
    <ul id="default-layout">
        <!-- <span> debug: Tag.vue</span> -->
        <h1 class="tags--title">
            Tags
        </h1>
        <div class="tags-links">
            <Chip
                v-for="(tag, index) in this.$frontmatterKey.list"
                :key="index"
                :to="tag.path"
                :name="tag.name"
            />
        </div>
    </ul>
</template>

<script>
import Chip from "../components/Chip.vue"

export default {
    name: "Tag",
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
