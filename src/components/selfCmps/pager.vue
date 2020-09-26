<template>
    <ul class="pager">
        <li class="prev" @click="prevPage">
            <i class="el-icon-arrow-left"></i>
        </li>
        <li @click="toTheFirst" :class="{active: curPage === 1}">1</li>
        <li class="el-icon-more" v-if="pageInfo.startEllipsis"></li>
        <li
            v-for="page in pageInfo.list"
            :key="page"
            :class="{active: page === curPage}"
            @click="changePage(page)"
        >   
            {{ page }}
        </li>
        <li class="el-icon-more" v-if="pageInfo.endEllipsis"></li>
        <li @click="toTheLast" :class="{active: curPage === countPage}">{{ countPage }}</li>
        <li class="next" @click="nextPage">
            <i class="el-icon-arrow-right"></i>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        curPage: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        countData: {
            type: Number,
            required: true
        }
    },
    methods: {
        changePage (page) {
            this.$emit("change", page);
        },
        toTheFirst () {
            this.$emit("change", 1);
        },
        toTheLast () {
            this.$emit("change", this.countPage);
        },
        prevPage () {
            if (this.curPage - 1 < 1) {
                return;
            }
            this.$emit("change", this.curPage - 1);
        },
        nextPage () {
            if (this.curPage + 1 > this.countPage) {
                return;
            }
            this.$emit("change", this.curPage + 1);
        }
    },
    computed: {
        countPage () {
            return Math.ceil(this.countData / this.perPage)
        },
        pageInfo () {
            let list = [this.curPage - 1, this.curPage, this.curPage + 1];
            let startEllipsis = null;
            let endEllipsis = null;
            // 计算中间显示的页码
            if (this.curPage === 1) {
                list = list.slice(2);
                list.push(this.curPage + 2, this.curPage + 3);
            } else if (this.curPage - 1 <= 1) {
                list.shift();
                list.push(this.curPage + 2);
            }
            if (this.curPage === this.countPage) {
                list = [list.shift()];
                list.unshift(this.curPage - 3, this.curPage - 2);
            } else if (this.curPage + 1 >= this.countPage) {
                list.pop();
                list.unshift(this.curPage - 2);
            } 
             // 判断前面的省略号是否显示
            if (this.curPage - 1 > 2) {
                startEllipsis = true;
            } else {
                startEllipsis = false;
            } 
            // 判断后面的省略号是否显示
            if (this.countPage - this.curPage > 2) {
                endEllipsis = true;
            } else {
                endEllipsis = false;
            }
            return {
                list,
                startEllipsis,
                endEllipsis
            };
        }
    }
}
</script>

<style lang="less" scoped>
.pager {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    li {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 1px solid #e5e5e5;
        color: #999;
        text-align: center;
        line-height: 42px;
        margin-right: 20px;
        cursor: pointer;
        &.active {
            color: #fff;
            background-color: #13d1be;
            border-color: #13d1be;
        }
        &.el-icon-more {
            border: none;
            cursor: text;
        }
    }
}
</style>
