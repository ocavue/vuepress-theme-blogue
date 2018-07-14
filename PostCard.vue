<template>
    <div class="post">
        <router-link
            :class="{ 'post__img': true, 'post__img--nolink': !showLink }"
            :style="postImgStyle"
            :to="this.path"
        >
            <span class="post__img-title">
                {{ this.page.title }}
            </span>
            <span class="post__img-info">
                <!-- <span>share</span> -->
                <!-- TODO make a share button -->
                <span>{{ this.date }}</span>
            </span>
        </router-link>
        <div v-if="showContent" class="post__content markdown-body">
            <!-- markdown-body is used by github-markdown-css -->
            <Content custom/>
        </div>
    </div>
</template>

<script>
import { isVisiblePost } from "./utils"

export default {
    name: "PostCard",
    props: ["page", "showContent", "showLink"],
    data: function() {
        return {
            title: null,
            path: null,
            date: null,
            postImgStyle: null,
        }
    },
    created: function() {
        this.initialize()
    },
    watch: {
        $route: function(to, from) {
            this.initialize()
        },
    },
    methods: {
        initialize: function() {
            this.title = this.page.title
            this.path = this.page.path
            let date = this.page.frontmatter.date
            if (!(typeof date === "string" && date.length >= 10)) {
                let msg = `date "${date}" is not valid`
                if (isVisiblePost(this.page)) {
                    throw new Error(msg)
                } else {
                    console.warn(msg)
                }
            } else {
                // 1999-12-31T00:00:00.000Z => 1999-12-31
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

<style lang="scss" scoped>
@import "~github-markdown-css/github-markdown.css";
@import "./style/elevation";
@import "./style/base";
@import "./style/theme";

.post {
    @include elevation_paper;
    border-radius: 2px;
    overflow: hidden;

    @include respond-to("s") {
        margin-bottom: 8px;
    }
    @include respond-to("m") {
        margin-bottom: 32px;
    }
    @include respond-to("l") {
        margin-bottom: 32px;
    }
}

.post__img {
    background-color: #808080; // if not image
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    text-decoration: none;

    @include respond-to("s") {
        height: 240px;
    }
    @include respond-to("m") {
        height: 280px;
    }
    @include respond-to("l") {
        height: 360px;
    }

    &--nolink {
        cursor: default;
    }

    &-title {
        color: #ffffff;
        margin-left: 32px;
        margin-right: 32px;
        margin-bottom: 32px;
    }

    &-title {
        @include respond-to("s") {
            font-size: 32px;
        }
        @include respond-to("m") {
            font-size: 40px;
        }
        @include respond-to("l") {
            font-size: 48px;
        }
    }

    &-info {
        color: #c2c2c2;
        font-weight: 500;
        margin-left: 32px;
        margin-right: 32px;
        margin-bottom: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

.post__content {
    @include respond-to("s") {
        padding: 16px;
    }
    @include respond-to("m") {
        padding: 32px;
    }
    @include respond-to("l") {
        padding: 32px;
    }
}
</style>
