<template>
    <div class="post">
        <router-link
            :class="{ 'post__img': true, 'post__img--nolink': !showLink }"
            :style="postImgStyle"
            :to="path"
        >
            <span class="post__img-title">
                {{ page.title }}
            </span>
            <span class="post__img-info">
                <!-- <span>share</span> -->
                <!-- TODO make a share button -->
                <span>{{ date }}</span>
            </span>
        </router-link>
        <div
            v-if="showContent"
            class="post__content markdown-body"
        >
            <!-- markdown-body is used by github-markdown-css -->
            <Content />
        </div>
    </div>
</template>

<script>
import { isVisiblePost } from "../utils"

export default {
    name: "PostCard",
    props: {
        page: { type: Object, required: true },
        showContent: { type: Boolean, default: false },
        showLink: { type: Boolean, default: false },
    },
    data: function() {
        return {
            title: null,
            path: null,
            date: null,
            postImgStyle: null,
        }
    },
    watch: {
        $route: function() {
            this.initialize()
        },
    },
    created: function() {
        this.initialize()
    },
    methods: {
        initialize: function() {
            this.path = this.page.path
            let isVisible = isVisiblePost(this.page)

            if (isVisible && !this.page.title) {
                throw new Error(
                    `Post ${this.path} has not title. ` +
                        `Please read https://github.com/ocavue/vuepress-theme-blogue/blob/master/README.md`,
                )
            }
            this.title = this.page.title

            let date = this.page.frontmatter.date
            if (!(typeof date === "string" && date.length >= 10)) {
                let msg = `date "${date}" is not valid`
                if (isVisible) {
                    throw new Error(msg)
                } else {
                    console.warn(msg)
                }
            } else {
                // YAML (or someone else?) will automatically turn "1999-12-31" into a ISO 8601 UTC format string "1999-12-31T00:00:00.000Z",
                // so I have to turn it back
                this.date = date.slice(0, 10)
            }

            if (typeof this.page.frontmatter.image === "string") {
                this.postImgStyle = {
                    "background-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.60) 100%), url('${
                        this.page.frontmatter.image
                    }')`,
                }
            }
        },
    },
}
</script>

<style lang="stylus">
// https://stackoverflow.com/q/4086107
// https://stackoverflow.com/a/11842865
$offset = 72px // offset depends on toolbar's height and the gap bwtween toolbar and header

.post__content h1
    margin-top -1 * $offset + 24px !important // Use `!important` to cover github-markdown-css's css
    padding-top $offset

.post__content h2
.post__content h3
.post__content h4
.post__content h5
.post__content h6
    margin-top -1 * $offset + 8px !important
    padding-top $offset

// Cover github-markdown-css's css
.markdown-body pre
    background-color #2d2d2d !important

.markdown-body img
    display block
    margin-right auto
    margin-left auto
</style>

<style lang="stylus" scoped>
@import "~github-markdown-css/github-markdown.css"
@import "../styles/elevation"
@import "../styles/base"
@import "../styles/theme"

.post
    elevation-paper()
    overflow hidden
    border-radius 2px

    @media $small
        margin-bottom 16px

    @media $large
        margin-bottom 32px

.post__img
    display flex
    flex-direction column
    justify-content flex-end
    align-items stretch
    background-color #808080 // if not image
    background-position 50% 50%
    background-size cover
    background-repeat no-repeat
    text-decoration none

    @media $small
        height 50vw

    @media $large
        max-height 0.4 * $max-main-width
        height "calc(0.4 * (100vw - %s))" % $tocbar-width

    &--nolink
        cursor default

    &-title
        margin-right 32px
        margin-bottom 32px
        margin-left 32px
        color #ffffff
        font-size 40px // fallback value
        $font-size-template = "calc(8px + 0.04 * (%s))"

        @media $small
            $main-width = 100vw
            font-size $font-size-template % $main-width

        @media $large
            @media (max-width: $max-main-width + $tocbar-width)
                $main-width = "100vw - %s" % $tocbar-width
                font-size $font-size-template % $main-width

            @media (min-width: $max-main-width + $tocbar-width + 1px)
                $main-width = $max-main-width
                font-size $font-size-template % $main-width

    &-info
        display flex
        flex-direction row
        justify-content space-between
        margin-right 32px
        margin-bottom 16px
        margin-left 32px
        color #c2c2c2
        font-weight 500

.post__content
    @media $small
        padding 16px

    @media $large
        padding 32px
</style>
