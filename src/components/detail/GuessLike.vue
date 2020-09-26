<template functional>
    <ul class="wrapper">
        <li class="name">猜你喜欢</li>
        <li class="recommend-item" v-for="item in props.data" :key="item.id">
            <a href="#">
                <img :src="item.poster" alt="">
                <p class="title">{{ item.name }}</p>
                <div class="appraise">
                    <el-rate
                        :value=item.score
                        disabled
                        disabled-void-color="#b3b3b3"
                    >
                    </el-rate>
                    <span>{{ item.comments }}个评价</span>
                </div>
                <p class="address">{{ item.address }}</p>
                <p class="price">￥<span>{{ item.price }}</span><i>起</i></p>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="less">
@import "~styles/detail/guessLike";
</style>
