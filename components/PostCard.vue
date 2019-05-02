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
            <Content/>
        </div>
    </div>
</template>

<script>
import { isVisiblePost } from "../utils"

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

$offset = 72px; // offset depends on toolbar's height and the gap bwtween toolbar and header

.post__content h1 {
    margin-top: -1 * $offset + 24px !important; // Use `!important` to cover github-markdown-css's css
    padding-top: $offset;
}

.post__content h2,
.post__content h3,
.post__content h4,
.post__content h5,
.post__content h6 {
    margin-top: -1 * $offset + 8px !important;
    padding-top: $offset;
}
</style>

<style lang="stylus" scoped>
@import "~github-markdown-css/github-markdown.css";
@import "../styles/elevation";
@import "../styles/base";
@import "../styles/theme";

.post {
    elevation-paper();
    border-radius: 2px;
    overflow: hidden;

    @media s {
        margin-bottom: 8px;
    }

    @media m {
        margin-bottom: 32px;
    }

    @media l {
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

    @media s {
        height: 240px;
    }

    @media m {
        height: 280px;
    }

    @media l {
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
        @media s {
            font-size: 24px;
        }

        @media m {
            font-size: 32px;
        }

        @media l {
            font-size: 40px;
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
    @media s {
        padding: 16px;
    }

    @media m {
        padding: 32px;
    }

    @media l {
        padding: 32px;
    }
}
</style>
