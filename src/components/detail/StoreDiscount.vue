<template>
    <div class="store-discount-wrapper">
        <h4>商家团购及优惠</h4>
        <div class="content">
            <div class="unlogin" v-if="!isLogin">
                <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="">
                <p>请登录后查看详细团购优惠</p>
                <router-link :to="{name: 'login'}">
                    立即登录
                </router-link>
            </div>
            <div class="login" v-else-if="discountCardData && isLogin">
                <p class="title">
                    {{ discountCardData.length }}款堂食套餐
                </p>
                <discount-card 
                    v-for="item in discountCardData"
                    :key="item.id"
                    :data="item" />
            </div>
        </div>
    </div>    
</template>

<script>
import DiscountCard from "cmp/detail/DiscountCard"
import { mapState } from "vuex"

export default {
    components: {
        DiscountCard
    },
    data () {
        return {
            discountCardData: null
        }
    },
    created () {
        this.$axios.get("/mockapi/getDetail/discountCard", {
            params: {
                store: this.$route.params.store
            }
        }).then(resp => {
            this.discountCardData = resp.data;
        })
    },
    computed: {
        ...mapState(["isLogin"])
    }
}
</script>

<style lang="less" scoped>
@import "~styles/detail/storeDiscount";
</style>
