<template>
    <div class="default">
        <my-header />
        <router-view></router-view>
        <my-footer />
    </div>
</template>

<script>
import MyHeader from "cmp/header/index"
import MyFooter from "cmp/footer/index"

export default {
    components: {
        MyHeader,
        MyFooter
    }
}
</script>

<style lang="less">
body {
    background-color: @body-bg;
}
</style>
