<template>
    <div class="detail-wrapper">
        <store-card v-if="storeCardData" :data="storeCardData" /> 
        <div class="content-wrapper">
            <div class="left-content">
                <store-discount />
                <store-recommend v-if="storeRecommendData" :data="storeRecommendData" />
                <store-comments />
            </div>
            <div class="right-content">
                <guess-like v-if="guessLikeList" :data="guessLikeList"/>
            </div>
        </div>
        <near-store v-if="nearStoreData" :data="nearStoreData"/>
    </div>
</template>

<script>
import StoreCard from "cmp/detail/StoreCard"
import StoreDiscount from "cmp/detail/StoreDiscount"
import StoreRecommend from "cmp/detail/StoreRecommend"
import StoreComments from "cmp/detail/StoreComments"
import NearStore from "cmp/detail/NearStore"
import GuessLike from "cmp/detail/GuessLike"

export default {
    created () {
        // 商家信息
        this.$axios.get("/mockapi/getDetail/storeInfo", {
            params: {
                store: this.storeName
            }
        }).then(resp => {
            this.storeCardData = resp.data;
        });
        // 商家推荐
        this.$axios.get("/mockapi/getDetail/recommend", {
            params: {
                store: this.storeName
            }
        }).then(resp => {
            this.storeRecommendData = resp.data;
        })
        // 附近商家
        this.$axios.get("/mockapi/getDetail/nearStore", {
            params: {
                store: this.storeName
            }
        }).then(resp => {
            this.nearStoreData = resp.data;
        })
        // 猜你喜欢
        this.$axios.get("/mockapi/getRecommendList").then(resp => {
            this.guessLikeList = resp.data;
        })
    },
    data () {
        return {
            storeCardData: null,
            storeRecommendData: null,
            storeCommentsData: null,
            nearStoreData: null,
            guessLikeList: null
        }
    },
    components: {
        StoreCard,
        StoreDiscount,
        StoreRecommend,
        StoreComments,
        NearStore,
        GuessLike
    },
    computed: {
        storeName () {
            return this.$route.params.store;
        }
    }
}
</script>

<style lang="less">
@import "~styles/detail/index.less";
</style>
