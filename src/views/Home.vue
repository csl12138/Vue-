<template>
    <div class="home-content">
        <!-- 顶部 6个导航 -->
        <top-nav :navList="topNavList"/>
        <!-- banner区域 -->
        <grail-layout 
            :leftWidth='bannerStyle.leftWidth' 
            :rightWidth='bannerStyle.leftWidth' 
            :wrapperStyle="bannerStyle.wrapperStyle"
        >
            <!-- banner中间 -->
            <template #main>
                <div class="main-container">
                    <my-slider 
                        :imgList="sliderImgList"
                        :aloneWidth="550"
                        :aloneHeight="240"
                    />
                    <a href="#" class="life"></a>
                    <a href="#" class="hotel"></a>
                    <a href="#" class="funny"></a>
                    <a href="#" class="cooperation"></a>
                </div>
            </template>
            <!-- banner左侧 -->
            <template #left v-if="rightSideData">
                <div class="left-container" @mouseleave="onRightDetailHidde">
                    <div class="title">全部分类</div>
                    <ul class="side">
                        <li 
                            v-for="nav in rightSideData"
                            :key="nav.id"
                            @mouseenter="onRightDetailShow(nav.items)"
                        >
                            <i :class="nav.icon"
                               :style="{color: nav.iconColor}"
                            >
                            </i>
                            <a href="#">
                                {{ nav.name }}
                            </a>
                            <i class="el-icon-arrow-right"></i>
                            <span class="hot" v-if="nav.hot">HOT</span>
                        </li>
                    </ul>
                    <div class="nav-detail" v-show="rightDetailShow">
                        <dl
                            v-for="item in rightSideDetailData"
                            :key="item.id"
                        >
                            <dt>
                                <span class="title">
                                    {{ item.title }}
                                </span>
                                <span class="more">更多<i class="el-icon-arrow-right"></i></span>
                            </dt>
                            <dd
                                v-for="iitem in item.items"
                                :key="iitem"
                            >
                                {{ iitem }}
                            </dd>
                        </dl>
                    </div>
                </div>
            </template>
            <!-- banner右侧 -->
            <template #right>
                <div class="right-container">
                    <div class="user-area unlogin" v-if="!isLogin">
                        <div class="avatar">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
                            <p>Hi! 你好</p>
                        </div>
                        <div class="register">
                            <router-link :to="{name: 'register'}">注册</router-link>
                        </div>
                        <div class="login">
                            <router-link :to="{name: 'login'}">立即登录</router-link>
                        </div>
                    </div>
                    <div class="user-area login" v-else>
                        <div class="head">
                            <i class="el-icon-setting"></i>
                        </div>
                        <div class="avatar">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt="">
                            <p>{{ userName }}</p>
                        </div>
                        <ul class="menu">
                            <li>
                                <i class="el-icon-s-order"></i>
                                <p>我的订单</p>
                            </li>
                            <li>
                                <i class="el-icon-star-on"></i>
                                <p>我的收藏</p>
                            </li>
                            <li>
                                <i class="el-icon-bank-card"></i>
                                <p>抵用券</p>
                            </li>
                            <li>
                                <i class="el-icon-wallet"></i>
                                <p>余额</p>
                            </li>
                            <li>
                                <i class="el-icon-more"></i>
                                <p>更多</p>
                            </li>
                        </ul>
                    </div>
                    <div class="app">
                        <div class="code">
                            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                        </div>
                        <p>美团APP手机版</p>
                        <p>
                            <span>1元起</span>
                            吃喝玩乐
                        </p>
                    </div>
                </div>
            </template>
        </grail-layout>

        <!-- 猫眼电影 -->
        <content-mould :navList="movieNavList" :className="'movie'" @updateContent="getMovieList($event)">
            <template #content>
                <div class="wrapper" v-if="movieContentData">
                    <ul :style="movieTranslateStyle">
                        <li
                            class="movie-item"
                            v-for="movie in movieContentData"
                            :key="movie.id"
                         >
                            <a href="#">
                                <img class="poster" :src="movie.poster" alt="">
                                <img v-if="movie.iMax.isIMAX" class="sub-title" :src="movie.iMax.img" alt="">
                                <div class="info">
                                    <p v-if="movie.type === 'now'">
                                        观众评<span class="score">{{ movie.score }}</span>
                                    </p>
                                    <p v-else>
                                        <span class="number">{{ movie.number }}</span>人想看
                                    </p>
                                    <div>
                                        <span :title="movie.name">{{ movie.name }}</span>
                                        <a v-if="movie.type === 'now'" href="#">购票</a>
                                        <a v-else href="#">预售</a>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="left-btn" @click="onClickLeft">
                        <i class="el-icon-arrow-left"></i>
                    </div>
                    <div class="right-btn" @click="onClickRight">
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
            </template>
        </content-mould>

        <!-- 推荐民宿 -->
        <content-mould :navList="innNavList" :className="'inn'" :topNavBg="innTopNavBg" @updateContent="getInnList($event)">
            <template #content>
                <ul class="wrapper">
                    <li class="inn-item" v-for="inn in innContentData" :key="inn.id">
                        <a href="#">
                            <img class="pic" :src="inn.poster" alt="">
                            <img class="avatar" src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt="">
                            <p class="title">{{ inn.title }}</p>
                            <p class="desc">{{ inn.desc }}</p>
                            <p class="price">￥<span class="rmb">{{ inn.price }}</span></p>
                        </a>
                    </li>
                </ul>
            </template>
        </content-mould>

        <!-- 猜你喜欢 -->
        <content-mould :navList="recommendList" :className="'recommend'" :topNavBg="recommendNavBg" :triggerMouseenter="false">
            <template #content>
                <ul class="wrapper">
                    <li class="recommend-item" v-for="item in recommendData" :key="item.id">
                        <a href="#">
                            <img :src="item.poster" alt="">
                            <p class="title">{{ item.name }}</p>
                            <div class="appraise">
                                <el-rate
                                    :value=item.score
                                    disabled
                                    disabled-void-color="#b3b3b3"
                                >
                                </el-rate>
                                <span>{{ item.comments }}个评价</span>
                            </div>
                            <p class="address">{{ item.address }}</p>
                            <p class="price">￥<span>{{ item.price }}</span><i>起</i></p>
                        </a>
                    </li>
                </ul>
            </template>
        </content-mould>

        <!-- 美团导航 -->
        <mt-nav v-if="mtNavData" :mtNavList="mtNavData" />
    </div>
</template>

<script>
import TopNav from "cmp/home/TopNav"
import GrailLayout from "cmp/selfCmps/grailLayout"
import MySlider from "cmp/selfCmps/slider"
import ContentMould from "cmp/home/ContentMould"
import MtNav from "cmp/home/MtNav"
import cookie from "@/utils/cookie"
import { mapState } from "vuex"

export default {
    data () {
        return {
            topNavList: ["美团外卖", "猫眼电影", "美团酒店", "民宿／公寓", "商家入驻", "美团公益"],
            bannerStyle: {
                leftWidth: "230px",
                rightWidth: "230px",
                wrapperStyle: {
                    width: "1190px",
                    margin: "0 auto"
                }
            },
            sliderImgList: [
                {
                    url: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                    id: 7464
                },
                {
                    url: "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
                    id: 7465
                },
                {
                    url: "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
                    id: 7466
                },
                {
                    url: "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
                    id: 7467
                },
                {
                    url: "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
                    id: 7468
                }
            ],
            rightDetailShow: false,
            rightSideData: null,
            rightSideDetailData: null,
            movieNavList: [{
                title: "猫眼电影",
                items: [{
                    name: "正在热映",
                    type: "now"
                    }, {
                    name: "即将上映",
                    type: "will"
                    }]
            }],
            movieTranslateStyle: {
                transform: "translateX(0px)",
                transition: "transform .5s ease-in-out"
            },
            movieContentData: null,
            movieDataType: "now",
            innNavList: [{
                title: "推荐民宿",
                items: [
                    {
                        name: "成都",
                        type: "cd"
                    },
                    {
                        name: "重庆",
                        type: "cq"
                    },
                    {
                        name: "贵阳",
                        type: "gy"
                    },
                    {
                        name: "绵阳",
                        type: "my"
                    },
                    {
                        name: "乐山",
                        type: "ls"
                    },
                    {
                        name: "张家界",
                        type: "zjj"
                    }
                ]
            }],
            innTopNavBg: {
                'background-image': "linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%)"
            },
            innContentData: null,
            InnCity: "cd",
            recommendList: [{
                title: "猜你喜欢",
                items: [
                    {
                        name: "为你甄选最适合的"
                    }
                ]
            }],
            recommendNavBg: {
                'background-image': "linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%)"
            },
            recommendData: null,
            mtNavData: null
        }
    },
    created () {
        // banner侧边栏
        this.$axios.get("/mockapi/getBannerSideList").then(resp => {
            this.rightSideData = resp.data;
        })
        // 电影
        this.$axios.get("/mockapi/getMovieData", {
            params: {
                type: this.movieDataType
            }
        }).then(resp => {
            this.movieContentData = resp.data;
        })
        // 民宿
        this.$axios.get("/mockapi/getInnData", {
            params: {
                type: this.InnCity
            }
        }).then(resp => {
            this.innContentData = resp.data;
        })
        // 推荐
        this.$axios.get("/mockapi/getRecommendList").then(resp => {
            this.recommendData = resp.data;
        })
        // 美团导航
        this.$axios.get("/mockapi/getMtNavList").then(resp => {
            this.mtNavData = resp.data;
        })
    },
    methods: {
        onRightDetailShow (data) {
            this.rightDetailShow = true;
            this.rightSideDetailData = data;
        },
        onRightDetailHidde () {
            this.rightDetailShow = false;
            this.rightSideDetailData = null;
        },
        onClickRight () {
            this.movieTranslateStyle.transition = "transform .5s ease-in-out";
            this.movieTranslateStyle.transform = "translateX(-1165px)";
        },
        onClickLeft () {
            this.movieTranslateStyle.transition = "transform .5s ease-in-out";
            this.movieTranslateStyle.transform = "translateX(0px)";
        },
        getMovieList (type) {
            if (this.movieDataType === type) {
                return;
            }
            this.$axios.get("/mockapi/getMovieData", {
                params: {
                    type
                }
            }).then(resp => {
                this.movieContentData = resp.data;
                this.movieDataType = type;
                this.movieTranslateStyle.transition = "";
                this.movieTranslateStyle.transform = "translateX(0px)";
            })
        },
        getInnList (city) {
            if (this.InnCity === city) {
                return;
            }
            this.$axios.get("/mockapi/getInnData", {
                params: {
                    type: city
                }
            }).then(resp => {
                this.innContentData = resp.data;
                this.InnCity = city;
            })
        }
    },
    computed: {
        ...mapState(["isLogin"]),
        userName () {
            return cookie.get('user');
        }
    },
    components: {
        TopNav,
        GrailLayout,
        MySlider,
        ContentMould,
        MtNav
    }
}
</script>

<style lang="less">
@import "~styles/home/index.less";
</style>
