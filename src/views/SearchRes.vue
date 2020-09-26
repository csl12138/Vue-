<template>
    <div class="searchRes-wrapper">
        <bread-crumb />
        <filter-section />
        <product-list />
        <mt-nav v-if="mtNavData" :mtNavList="mtNavData" />
    </div>
</template>

<script>
import { mapState } from "vuex"
import BreadCrumb from "cmp/searchRes/BreadCrumb"
import FilterSection from "cmp/searchRes/FilterSection"
import ProductList from "cmp/searchRes/ProductList"
import MtNav from "cmp/home/MtNav"

export default {
    components: {
        BreadCrumb,
        FilterSection,
        ProductList,
        MtNav
    },
    data () {
        return {
            mtNavData: null
        }
    },
    created () {
        this.$axios.get("/mockapi/getMtNavList").then(resp => {
            this.mtNavData = resp.data;
        })
    },
    computed: {
        ...mapState(["position"]),
        searchKeyword () {
            return this.$route.params.keyword;
        }
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/index.less";
</style>
