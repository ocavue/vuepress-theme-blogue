<template>
    <div>
        <PostCard
            v-for="page in pages"
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
import bus from "./bus.js"
import { isVisiblePost } from "./utils"

export default {
    name: "HomePage",
    components: { PostCard },
    computed: {
        pages() {
            let pages = this.$site.pages
            pages.sort((page1, page2) => {
                if (page1.frontmatter.date < page2.frontmatter.date) {
                    return 1
                } else {
                    return -1
                }
            })
            return pages
        },
    },
    methods: {
        isVisiblePost: isVisiblePost,
    },
    created: function() {
        bus.$emit("toggleTocbarEvent", false)
    },
}
</script>

<style scoped lang="scss">
</style>
