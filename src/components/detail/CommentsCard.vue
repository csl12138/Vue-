<template>
    <div class="comments-card">
        <div class="avatar"></div>
        <div class="content">
            <div class="name">{{ commentsData.name }}</div>
            <div class="score">
                <el-rate
                    :value="commentsData.score"
                    disabled>
                </el-rate>
                <span class="time">
                    {{ commentsData.date }}
                </span>
            </div>
            <p class="comment">
                {{ commentsData.comments }}
            </p>
            <p class="resp">
                商家回复：{{ commentsData.resp }}
            </p>
            <ul class="img-comment" v-if="commentsData.imgs.length !== 0">
                <li
                    v-for="img in commentsData.imgs"
                    :key="img"
                >
                    <img :src="img" alt="">
                </li>
            </ul>
            <div class="good" @click="onclickgood">
                <span v-if="!isGood">
                    <i class="el-icon-star-off"></i>
                    赞
                </span>
                <span class="active" v-else>
                    <i class="el-icon-star-on"></i>
                    {{ commentsData.good }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    props: {
        commentsData: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            isGood: false
        }
    },
    computed: {
        ...mapState(["isLogin"])
    },
    methods: {
        onclickgood () {
            // 判断是否登录
            if (!this.isLogin) {
                alert("请登录后点赞");
                this.isGood = false;
                return;
            }
            this.isGood = !this.isGood;
        }
    }
}
</script>

<style lang="less">
@import "~styles/detail/commentsCard";
</style>
