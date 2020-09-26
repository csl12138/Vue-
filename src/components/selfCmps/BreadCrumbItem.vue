<template functional>
    <div class="breadcrumb-item">
        <slot></slot>
        <i v-if="!props.last" class="el-icon-arrow-right"></i>
    </div>
</template>

<script>
export default {
    props: {
        last: Boolean
    }
}
</script>

<style lang="less" scoped>
.breadcrumb-item {
    display: inline-block;
    font-size: 12px;
    color: #222;
    .el-icon-arrow-right {
        padding: 0px 4px;
    }
}
</style>
