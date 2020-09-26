<template>
    <div class="product-wrapper" v-lazy-loading>
        <pro-filter @proListSort="sortPro($event)" />
        <div class="pro-list-wrapper" v-if="filterProList.length !== 0">
            <pro-card
                v-for="pro in filterProList"
                :key="pro.id"
                :proItemData="pro"
            />
        </div>
        <div class="notfound" v-else>
            很抱歉，没有找到符合要求的商家
        </div>
    </div>
</template>

<script>
import ProFilter from "cmp/searchRes/ProFilter"
import ProCard from "cmp/searchRes/ProCard"
import { mapState } from "vuex"

export default {
    data () {
        return {
            proList: [],
            reqLock: false
        }
    },
    created () {
        this.$axios.get("/mockapi/getProLists", {
            params: {
                s: "huoguo"
            }
        }).then(resp => {
            this.proList = resp.data;
        })
    },
    methods: {
        sortPro (type) {
            if (type === "comments") {
                this.proList.sort((a, b) => {
                    return b.comments - a.comments;
                })
            } else if (type === "score") {
                this.proList.sort((a, b) => {
                    return b.score - a.score;
                })
            } else if (type === "highPrice") {
                this.proList.sort((a, b) => {
                    return b.avg - a.avg;
                })
            } else if (type === "lowPrice") {
                this.proList.sort((a, b) => {
                    return a.avg - b.avg;
                })
            }
        }
    },
    computed: {
        ...mapState(["filterObj"]),
        filterProList () {
            let filterProList = null;
            if (JSON.stringify(this.filterObj) !== "{}") {
                const filterName = Object.values(this.filterObj);
                filterProList = this.proList.filter(proItem => {
                    return filterName.every(filterItem => {
                        return proItem.mark.includes(filterItem)
                    })
                })
            }
            return filterProList || this.proList;
        }
    },
    directives: {
        "lazy-loading": {
            bind (el, binding, vnode) {
                window.addEventListener("scroll", () => {
                    if (el.scrollHeight - window.scrollY < 100) {
                        const vm = vnode.context;
                        if (vm.reqLock) {
                            return;
                        }
                        vm.reqLock = true;
                        vm.$axios.get("/mockapi/getProLists", {
                            params: {
                                s: "huoguo"
                            }
                        }).then(resp => {
                            vm.proList.push(...resp.data);
                            if (vm.proList.length === 20) {
                                vm.reqLock = true;
                            } else {
                                vm.reqLock = false;
                            }
                        })
                    }
                })
            }
        }
    },
    components: {
        ProFilter,
        ProCard
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/product";
</style>
