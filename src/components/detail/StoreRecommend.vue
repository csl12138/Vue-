<template functional>
    <div class="store-recommend-wrapper">
        <h4>推荐菜</h4>
        <div class="content">
            <ul class="imgs">
                <li
                    v-for="img in props.data.imgs"
                    :key="img.id"
                >
                    <img :src="img.img" alt="">
                    <div class="price">
                        <span class="name">{{ img.info.name }}</span>
                        <span>￥{{ img.info.price }}</span>
                    </div>
                </li>
            </ul>
            <ul class="dishes">
                <li
                    v-for="dish in props.data.dishes"
                    :key="dish"
                >
                    {{ dish }}
                </li>
            </ul>
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
@import "~styles/detail/storeRecommend";
</style>
