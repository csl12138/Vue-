<template functional>
    <div class="c-popOver pop-over" :style="props.position">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        position: Object
    }
}
</script>

<style lang="less" scoped>
.c-popOver {
    padding: 15px 10px 6px;
    position: absolute;
    z-index: 999;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .15);
    cursor: auto;
    &::after {
        content: "";
        position: absolute;
        left: 4%;
        top: -16px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #e5e5e5;
    }
    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        left: 4%;
        top: -15px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
    }
}
</style>
