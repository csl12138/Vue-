<template functional>
    <div class="near-card-wrapper">
        <img :src="props.perCardData.poster" alt="">
        <p class="name">{{ props.perCardData.name }}）</p>
        <div class="info">
            <span>{{ props.perCardData.score }}分</span>
            <span>{{ props.perCardData.saled }}人消费</span>
        </div>
        <div class="price">
            ￥<span class="rmb">{{ props.perCardData.price }}</span>起
        </div>
    </div>
</template>

<script>
export default {
    props: {
        perCardData: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="less">
@import "~styles/detail/nearStoreCard";
</style>
