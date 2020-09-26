<template>
    <div class="search-wrapper">
        <h1>
            <router-link :to="{name: 'home'}">
                美团网
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团首页">
            </router-link>
        </h1>
        <div class="search-inp">
            <input type="text" placeholder="搜索商家或地点" 
                :value="searchWord" 
                @input="searching"
                @focus="onfocus"
                @blur="onblur"
            />
            <el-button type="primary" icon="el-icon-search"></el-button>
            <ul class="search-result" v-if="searchResListShow">
                <li
                   v-for="item in searchResList" 
                   :key="item.editorWord"
                >
                    <a @click="onclickword(item.editorWord)">
                        {{ item.editorWord }}
                    </a>
                </li>
            </ul>
            <dl class="search-history" v-else-if="inpFocus && searchHistoryList">
                <dt>
                    <span>最近搜索</span>
                    <span @click="clearHistory">清空搜索记录</span>
                </dt>
                <dd
                    v-for="history in searchHistoryList"
                    :key="history"
                >
                    <a @click="onclickword(history)">
                        {{ history }}
                    </a>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import setStorage from "@/utils/localStorage"

export default {
    data () {
        return {
            searchWord: "",
            timer: null,
            searchResList: [],
            inpFocus: false,
            inputing: false,
            blurTimer: null,
            searchHistoryList: JSON.parse(localStorage.getItem("searchHistory"))
        }
    },
    methods: {
        onfocus () {
            this.inpFocus = true;
            this.searchHistoryList = JSON.parse(localStorage.getItem("searchHistory"));
        },
        onblur () {
            clearInterval(this.blurTimer);
            this.blurTimer = setTimeout(() => {
                this.inpFocus = false;
                this.searchResList.length = 0;
            }, 150)
        },
        searching (e) {
            clearTimeout(this.timer);
            const keyword = e.target.value;
            this.searchWord = keyword;
            if (!keyword) {
                return;
            }
            this.timer = setTimeout(() => {
                this.getResList(keyword);
            }, 200)
        },
        getResList (keyword) {
            this.$axios.get("/ptapi/suggest", {
                params: {
                    keyword
                }
            }).then(resp => {
                if (resp.code === 0 && resp.data.suggestItems.length !== 0) {
                    this.searchResList = resp.data.suggestItems;
                }
            })
        },
        onclickword (word) {
            setStorage("searchHistory", word, 6);
            this.searchWord = word;
            this.$router.push({
                name: "searchRes",
                params: {
                    keyword: word
                }
            })
        },
        clearHistory () {
            localStorage.removeItem("searchHistory");
        }
    },
    computed: {
        searchResListShow () {
            return this.searchResList.length !== 0 && this.inpFocus && this.searchWord;
        }
    }
}
</script>

<style lang="less">
@import "~styles/header/searchContent.less";
</style>
