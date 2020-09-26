<template functional>
    <ul class="top-nav">
        <div class="nav-wrapper">
            <li
                v-for="item in props.navList"
                :key="item"
            >
                <a href="#">
                    {{ item }}
                </a>
            </li>
        </div>
    </ul>
</template>

<script>
export default {
    props: {
        navList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="less">
@import "~styles/home/topNav.less";
</style>
