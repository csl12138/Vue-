<template functional>
    <div class="store-card-wrapper">
        <div class="left-content">
            <div class="title">
                <h4>{{ props.data.title }}</h4>
                <span><i class="el-icon-document"></i>食品安全档案</span>
            </div>
            <div class="score">
                <el-rate
                    :value="props.data.score"
                    disabled
                    show-score
                    text-color="#ff9900">
                </el-rate>
                <span class="avg">人均￥{{ props.data.avg }}</span>
            </div>
            <p class="address">
                地址：{{ props.data.address }}
                <i class="el-icon-place"></i>
            </p>
            <p class="phone">
                电话：{{ props.data.phone }}
            </p>
            <p class="worktime">
                营业时间：{{ props.data.worktime }}
            </p>
            <div class="services">
                <div class="item"
                    v-for="ser in props.data.services"
                    :key="ser.id"
                >
                    <img :src="ser.img" alt="">
                    <p>{{ ser.text }}</p>
                </div>
            </div>
        </div>
        <div class="right-img">
            <img :src="props.data.poster" alt="">
            <div class="tag">
                <img 
                    v-for="img in props.data.tag"
                    :key="img"
                    :src="img" 
                >
            </div>
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
@import "~styles/detail/storeCard";
</style>
