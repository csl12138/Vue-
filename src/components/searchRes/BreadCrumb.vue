<template>
    <div class="crumb">
            <bread-crumb-item>
                {{ position }}美团
            </bread-crumb-item>
            <bread-crumb-item :last="true">
                {{ position }}{{ keyword }}
            </bread-crumb-item>
    </div>
</template>

<script>
import BreadCrumbItem from "cmp/selfCmps/BreadCrumbItem"
import { mapState } from "vuex"

export default {
    components: {
        BreadCrumbItem
    },
    computed: {
        ...mapState(["position"]),
        keyword () {
            return this.$route.params.keyword;
        }
    }    
}
</script>

<style lang="less">
@import "~styles/searchRes/breadCrumb";
</style>
