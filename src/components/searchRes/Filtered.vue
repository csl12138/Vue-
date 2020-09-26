<template>
    <div v-if="!filterObjNull" class="filtered">
        <div class="title">已选条件</div>
        <ul>
            <li 
                class="filter-name"
                v-for="(item, key) in filterObj"
                :key="item"
            >
                {{ item }}
                <i class="el-icon-close" @click="onclose(key)"></i>
            </li>
        </ul>
        <div class="clear" @click="oncloseall">清除全部</div>
     </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    methods: {
        onclose (liFlag) {
            this.$store.commit("delFilter", liFlag)
        },
        oncloseall () {
            this.$store.commit("delAllFilter")
        }
    },
    computed: {
        ...mapState(["filterObj"]),
        filterObjNull () {
            return Object.keys(this.filterObj).length === 0;
        }
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/filtered";
</style>
