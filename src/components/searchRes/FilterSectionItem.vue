<template>
    <div class="filter-item">
        <div class="left">
            <div class="title">{{ list.title }}</div>
            <div class="all" :class="{active: !ddActive[list.title]}">全部</div>
        </div>
        <ul class="choosen">
            <li
                v-for="item in list.choosen"
                :key="item.id"
            >   
                <div class="main" :class="{active: ddActive[list.title] && ddActive[list.title].liFlag === item.id}" @click="withoutSubAdd(item.sublist, item.name, list.title, item.id)">
                    <span>
                        {{ ddActive[list.title] && ddActive[list.title].liFlag === item.id ? ddActive[list.title].filterName : item.name }}
                    </span>
                    <i v-if="item.sublist" class="el-icon-caret-bottom"></i>
                </div>
                <pop-over v-if="item.sublist">
                    <dl>
                        <dt>{{ item.name }}</dt>
                        <dd 
                            v-for="(f, ddIndex) in item.sublist"
                            :key="f.id"
                            :class="{active: ddActive[list.title] && ddActive[list.title].ddIndex === ddIndex && ddActive[list.title].liFlag === item.id}"
                            @click="addFilter(f.name, list.title, ddIndex, item.id, item.type)"
                        >
                            {{ f.name }}
                        </dd>
                    </dl>
                </pop-over>
            </li>
        </ul>
    </div>
</template>

<script>
import PopOver from "cmp/selfCmps/popOver"
import { mapState } from "vuex"

export default {
    props: {
        list: {
            type: Object,
            required: true
        }
    },
    methods: {
        addFilter (filterName, rowFlag, ddIndex, liFlag, type) {
            this.$store.commit("addFilter", { filterName, rowFlag, ddIndex, liFlag });
            if (type === "food") {
                this.$emit("update", type);
            }
        },
        withoutSubAdd (hasChilds, filterName, rowFlag, liFlag) {
            if (hasChilds) {
                return;
            }
            this.$store.commit("addFilter", { filterName, rowFlag, undefined, liFlag });
        }
    },
    computed: {
        ...mapState(["ddActive"])
    },
    components: {
        PopOver
    }
}
</script>

<style lang="less">
@import "~styles/searchRes/filterSectionItem";
</style>
