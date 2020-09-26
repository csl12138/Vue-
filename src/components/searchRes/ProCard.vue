<template>
    <div class="pro-card">
        <div class="left-img">
            <img :src="proItemData.poster" alt="">
        </div>
        <div class="right-content">
            <h4>
                <router-link class="title" :to="{name: 'detail', params: {store: proItemData.name}}">
                    {{ proItemData.name }}
                </router-link>
            </h4>
            <div class="score">
                <el-rate
                    :value="proItemData.score"
                    disabled
                    show-text
                    text-color="#666"
                    :texts="['很差', '差', '一般', '好', '很好']"
                    >
                </el-rate>
                <span class="val">
                    {{ proItemData.score }}分
                </span>
                <span class="comments">
                    {{ proItemData.comments }}人评价
                </span>
            </div>
            <div class="detail">
                <span class="desc">
                    {{ proItemData.desc }}
                </span>
                <span class="address">
                    {{ proItemData.address }}
                </span>
                <span class="map">
                    <i class="el-icon-map-location"></i>
                    <span>查看地图</span>
                </span>
            </div>
            <div class="avg">
                人均￥{{ proItemData.avg }}
            </div>
            <div class="discount">
                <transition-group tag="div">
                    <div 
                        class="discount-item"
                        v-for="discount in limitDiscount"
                        :key="discount.id"
                    >
                        <p class="title">
                            {{ discount.title }}
                        </p>
                        <div class="desc">
                            <span class="price">
                                ￥<span class="rmb">{{ discount.price }}</span>
                            </span>
                            <span class="origin">
                                门市价￥{{ discount.origin }}
                            </span>
                            <span class="saled">
                                已售{{ discount.saled }}
                            </span>
                        </div>
                    </div>
                </transition-group>
                <div class="more" v-if="isMoreDiscount" @click="dropDown">
                        <div v-if="!showMore">
                            更多{{ overplus }}个优惠
                            <i class="el-icon-arrow-down"></i>
                        </div>
                        <div v-else>
                            收起
                            <i class="el-icon-arrow-up"></i>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        proItemData: {
            type: Object,
            reqiured: true
        }
    },
    data () {
        return {
            restDiscount: null,
            showMore: false,
            counts: 0
        }
    },
    methods: {
        dropDown () {
            this.counts++;
            if (this.counts % 2 === 0) {
                this.showMore = false
            } else {
                this.showMore = true;
            }
        }
    },
    created () {
        if (this.isMoreDiscount) {
            this.restDiscount = this.proItemData.discount.slice(2);
        }
    },
    computed: {
        limitDiscount () {
            const originData = this.proItemData.discount;
            let showDiscount = null;
            if (this.isMoreDiscount) {
                showDiscount = originData.slice(0, 2);
            } else {
                showDiscount = originData;
            }
            if (this.showMore) {
                showDiscount.push(...this.restDiscount);
            }
            return showDiscount;
        },
        isMoreDiscount () {
            return this.proItemData.discount.length > 2;
        },
        overplus () {
            return this.proItemData.discount.length - 2
        }
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/proCard";
</style>
