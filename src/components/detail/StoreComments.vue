<template>
    <div class="store-comments-wrapper" v-if="storeCommentsData">
        <div class="title">
            <div class="comments">
                {{ storeCommentsData.length }}条网友点评
            </div>
            <div class="sort">
                <span @click="sortByScore">质量排序</span>
                <span @click="sortByTime">点赞量排序</span>
            </div>
        </div>
        <div class="content">
            <comments-card 
                v-for="comment in perPageComments"
                :key="comment.id"
                :commentsData="comment"
            />
            <my-pager 
                :curPage="curPage" 
                :perPage="perPage" 
                :countData="countData"
                @change="changePage($event)"
            />
        </div>
    </div>
</template>

<script>
import CommentsCard from "cmp/detail/CommentsCard"
import MyPager from "cmp/selfCmps/pager"

export default {
    created () {
        // 网友评论
        this.$axios.get("/mockapi/getDetail/comments", {
            params: {
                store: this.$route.params.store
            }
        }).then(resp => {
            this.storeCommentsData = resp.data;
            this.countData = this.storeCommentsData.length;
        })
    },
    data () {
        return {
            curPage: 1,
            perPage: 9,
            countData: null,
            storeCommentsData: null
        }
    },
    methods: {
        changePage (page) {
            this.curPage = page;
        },
        sortByScore () {
            this.storeCommentsData.sort((a, b) => {
                return b.score - a.score;
            })
        },
        sortByTime () {
            this.storeCommentsData.sort((a, b) => {
                return b.good - a.good;
            })
        }
    },
    computed: {
        perPageComments () {
            return this.storeCommentsData.slice((this.curPage - 1) * this.perPage, this.curPage * this.perPage);
        }
    },
    components: {
        CommentsCard,
        MyPager
    }
}
</script>

<style lang="less">
@import "~styles/detail/storeComments";
</style>
