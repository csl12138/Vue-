<template>
    <div class="filter-section-wrapper">
        <had-filtered />
        <filter-item 
            v-for="item in filterSectionData"
            :key="item.title"
            :list="item"
            @update="updateFoodFilter($event)"
        />
    </div>
</template>

<script>
import HadFiltered from "cmp/searchRes/Filtered"
import FilterItem from "cmp/searchRes/FilterSectionItem"

export default {
    data () {
        return {
            filterSectionData: null
        }
    },
    created () {
        this.$axios.get("/mockapi/searchRes/filterSectionInit").then(resp => {
            this.filterSectionData = resp.data;
        })
    },
    methods: {
        updateFoodFilter (type) {
            this.$axios.get("/mockapi/searchRes/filterSectionInit", {
                params: {
                    type
                }
            }).then(resp => {
                this.filterSectionData = resp.data;
            })
        }
    },
    components: {
        HadFiltered,
        FilterItem
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/filterSection";
</style>
