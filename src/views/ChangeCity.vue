<template>
    <div class="change-city-wrapper">
        <div class="row province" v-windowClick="handleWindowClick">
            <h4>按省份选择：</h4>
            <div class="select" @click.stop="onProPopShow">
                <span>{{ selectProvince }}</span>
                <i class="el-icon-caret-bottom"></i>
                <pop-over v-if="provincePopShow" :position="popPos">
                    <template>
                        <div class="title">省份</div>
                        <ul class="wrapper">
                            <div 
                                class="province-col"
                                v-for="(col, proIndex) in provinceList"
                                :key="proIndex"
                            >
                                <li
                                    v-for="province in col"
                                    :key="province.provinceCode"
                                    :class="{active: provinceActiveName===province.provinceName }"
                                    @click.stop="changeProvince(province.provinceName, province.cityInfoList)"
                                >
                                    {{ province.provinceName }}
                                </li>
                            </div>
                        </ul>
                    </template>
                </pop-over>
            </div>
            <div class="select" :class="{disabled: cityDisabled}" @click.stop="onCityPopShow">
                <span>城市</span>
                <i class="el-icon-caret-bottom"></i>
                <pop-over v-if="cityPopShow" :position="popPos">
                    <template>
                        <div class="title">城市</div>
                        <ul class="wrapper">
                            <div 
                                class="city-col"
                                v-for="(col, index) in cityList"
                                :key="index"
                            >
                                <li
                                    v-for="city in col"
                                    :key="city.name"
                                    @click.stop="changeCity(city.name)"
                                > 
                                    {{ city.name }}
                                </li>
                            </div>
                        </ul>
                    </template>
                </pop-over>
            </div>
            <div class="search">
                <span>直接搜索：</span>
                <input type="text" placeholder="请输入城市中文或拼音" @input="onSearchCity($event)">
                <pop-over v-if="searchCityList" :position="searchPopPos">
                    <template>
                        <ul class="searchList">
                            <li
                                v-for="city in searchCityList"
                                :key="city.districtId + city.cityName"
                                @click.stop="changeCity(city.cityName)"
                            > 
                                {{ city.cityName }}
                            </li>
                        </ul>
                    </template>
                </pop-over>
            </div>
        </div>
        <div class="row hot-city">
            <h4>热门城市：</h4>
            <ul>
                <li
                    v-for="city in hotCityList"
                    :key="city.id"
                    @click="changeCity(city.name)"
                >
                    {{ city.name }}
                </li>
                
            </ul>
        </div>
        <div class="row visited">
            <h4>最近访问：</h4>
            <ul v-if="visitedCityList.length !== 0">
                <li
                    v-for="visitedCity in visitedCityList"
                    :key="visitedCity"
                    @click="changeCity(visitedCity)"
                >
                    {{ visitedCity }}
                </li>
            </ul>
        </div>
        <div class="row choose">
            <div class="content-top">
                <h4>按拼音首字母选择：</h4>
                <ul>
                    <li
                        v-for="(value, key) in firstCharCitys"
                        :key="key"
                    >
                        <a :href="`#city-${key}`">{{ key }}</a>
                    </li>
                </ul>
            </div>
            <div class="content-bottom">
                <dl
                    v-for="(value, key) in firstCharCitys"
                    :key="key"
                >
                    <dt>{{ key }}</dt>
                    <div class="dd-wrapper">
                        <dd
                            v-for="city in value"
                            :key="city.id"
                            :id="`city-${key}`"
                            @click="changeCity(city.name)"
                        >
                            {{ city.name }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import PopOver from "cmp/selfCmps/popOver"
import setStorage from "@/utils/localStorage"

export default {
    created () {
        this.$axios.get("/api/meituan/city/province.json", {
            params: {
                appkey: "csl1_1590830311858"
            },
            baseURL: "http://open.duyiedu.com"
        }).then(resp => {
            const province = resp.data;
            this.provinceList = this.grouping(province);
        })
        this.$axios.get("/api/meituan/city/hot.json", {
            params: {
                appkey: "csl1_1590830311858"
            },
            baseURL: "http://open.duyiedu.com"
        }).then(resp => {
            this.hotCityList = resp.data;
        })
        this.$axios.get("/api/meituan/city/cityList.json", {
            params: {
                appkey: "csl1_1590830311858"
            },
            baseURL: "http://open.duyiedu.com"
        }).then(resp => {
            const obj = {};
            const temp = resp.data;
            temp.forEach(item => {
                const firstChar = item.firstChar.toUpperCase();
                if (!obj[firstChar]) {
                    obj[firstChar] = []
                }
                obj[firstChar].push(item);
            })
            this.firstCharCitys = obj;
            this.firstCharCityList = temp;
        })
    },
    data () {
        return {
            provinceList: null,
            selectProvince: "省份",
            provincePopShow: false,
            provinceActiveName: null,
            cityList: null,
            cityPopShow: false,
            cityDisabled: true,
            popPos: {
                left: "0px",
                top: "50px"
            },
            searchPopPos: {
                left: "100px",
                top: "50px"
            },
            searchCityList: null,
            searchCityPopShow: false,
            searchTimer: null,
            hotCityList: null,
            visitedCityList: JSON.parse(localStorage.getItem("visitedCity")) || [],
            firstCharCityList: null,
            firstCharCitys: null
        }
    },
    methods: {
        // 将省份和城市分为12个一列
        grouping (target) {
            const cols = Math.ceil(target.length / 12);
            const list = [];
            for (let i = 0; i < cols; i++) {
                list.push(target.slice(i * 12, i * 12 + 12));
            }
            return list;
        },
        onProPopShow () {
            if (!this.cityPopShow) {
                this.provincePopShow = true;
            }
        },
        changeProvince (province, citys) {
            this.selectProvince = province;
            this.provincePopShow = false;
            this.provinceActiveName = province;
            this.cityDisabled = false;
            this.cityList = this.grouping(citys);
        },
        onCityPopShow () {
            if (!this.provincePopShow && this.selectProvince !== "省份") {
                this.cityPopShow = true;
            }
        },
        changeCity (city) {
            setStorage("visitedCity", city, 7);
            this.$store.commit("changeCity", city);
            this.$router.push("home");
        },
        handleWindowClick () {
            if (this.provincePopShow || this.cityPopShow) {
                this.provincePopShow = this.cityPopShow = false;
            }
        },
        onSearchCity (e) {
            clearTimeout(this.searchTimer);
            this.searchTimer = null;
            this.searchTimer = setTimeout(() => {
                const val = e.target.value;
                if (!val) {
                    this.searchCityList = null;
                    return
                }
                this.$axios.get(`/group/v1/area/search/${val}`).then(resp => {
                    this.searchCityList = resp.data;
                })
            }, 300);
        }
    },
    directives: {
        "windowClick": {
            bind (el, binding) {
                window.addEventListener("click", binding.value, false);
            }
        }
    },
    components: {
        PopOver
    }
}
</script>

<style lang="less">
@import "~styles/changeCity/index.less";
</style>
