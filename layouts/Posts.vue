<template>
    <div>
        <h1 v-if="header">
            {{ header }}
        </h1>
        <PostCard
            v-for="page in postPages"
            :key="page.key"
            :page="page"
            :showContent="false"
            :showLink="true"
        />
    </div>
</template>

<script>
import PostCard from "../components/PostCard.vue"
import { isVisiblePost } from "../utils"

export default {
    name: "Posts",
    components: { PostCard },
    props: {
        pages: {
            type: Array,
        },
        header: {
            type: String,
            default: "",
        },
    },
    computed: {
        postPages() {
            let ps = this.pages.filter(isVisiblePost)
            ps.sort((page1, page2) => {
                if (page1.frontmatter.date < page2.frontmatter.date) {
                    return 1
                } else {
                    return -1
                }
            })
            return ps
        },
    },
}
</script>
