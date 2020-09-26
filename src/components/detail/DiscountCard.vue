<template functional>
    <div class="discount-card-wrapper">
        <div class="right">
            <img :src="props.data.poster" alt="">
        </div>
        <div class="left">
            <div class="info">
                <p class="title">
                    {{ props.data.title }}
                    <img src="https://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png" alt="">
                </p>
                <span class="saled">已售{{ props.data.saled }}</span>
                <div class="price">
                    <span class="now">
                        ￥<strong>{{ props.data.nowPrice }}</strong>
                    </span>
                    <span class="origin">
                        门店价{{ props.data.originPirce }}
                    </span>
                </div>
            </div>
            <button class="buy">立即抢购</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="less">
@import "~styles/detail/discountCard";
</style>
