<template>
    <ul class="pro-filter-wrapper">
        <li>
            智能排序
        </li>
        <li>
            价格{{ computedText }}
            <i class="el-icon-caret-top" @click="onhighestprice"></i>
            <i class="el-icon-caret-bottom" @click="onworstprice"></i>
        </li>
        <li @click="proListSort('comments')">
            人气最高
        </li>
        <li @click="proListSort('score')">
            评价最高
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            priceText: "normal",
            activeIndex: null
        }
    },
    methods: {
        onhighestprice () {
            this.priceText = "highest";
            // 抛出提示
            this.proListSort("highPrice");
        },
        onworstprice () {
            this.priceText = "worst";
            // 抛出提示
            this.proListSort("lowPrice");
        },
        proListSort (type) {
            this.$emit("proListSort", type);
        }
    },
    computed: {
        computedText () {
            let text = null;
            switch (this.priceText) {
                case "normal": text = "排序";
                break;
                case "highest": text = "最高";
                break;
                case "worst": text = "最低";
                break;
            }
            return text;
        }
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/proFilter";
</style>
