<template>
    <div class="top-wrapper">
        <div class="top-container">
            <my-geo />
            <my-nav />
        </div>
    </div>
</template>

<script>
import MyGeo from "cmp/header/geo.vue"
import MyNav from "cmp/header/nav.vue"
export default {
    components: {
        MyGeo,
        MyNav
    }
}
</script>

<style lang="less">
@import "~styles/header/topContent.less";
</style>
